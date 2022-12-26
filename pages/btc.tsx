import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { base64ToUint8Array } from "../utils/base64ToUint8Array";

export default function Bitcoin() {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      // run only in browser
      navigator.serviceWorker.ready.then((reg) => {
        reg.pushManager.getSubscription().then((sub) => {
          if (
            sub &&
            !(
              sub.expirationTime &&
              Date.now() > sub.expirationTime - 5 * 60 * 1000
            )
          ) {
            setSubscription(sub);
            setIsSubscribed(true);
          }
        });
        setRegistration(reg);
      });
    }
  }, []);

  const subscribeButtonOnClick = async () => {
    const sub = (await registration?.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array(
        process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
      ),
    })) as PushSubscription;
    // TODO: you should call your API to save subscription data on server in order to send web push notification from server
    setSubscription(sub);
    setIsSubscribed(true);
    console.log("web push subscribed!");
    console.log(sub);
  };

  console.log(subscription);

  useEffect(() => {
    subscribeButtonOnClick();
  }, [registration]);

  const sendNotificationButtonOnClick = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (subscription == null) {
      console.error("web push not subscribed");
      return;
    }

    await fetch("/api/notification", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subscription,
        message: "16000 USDT",
        title: "SarrafEx",
      }),
    });
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/bitcoin.png"
              alt="Sarrafex Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className={styles.description}>
            <h1>
              Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to
              act as money and a form of payment outside the control of any one
              person, group, or entity, thus removing the need for third-party
              involvement in financial transactions.
            </h1>
          </div>
          <div>
            <button
              onClick={sendNotificationButtonOnClick}
              disabled={!isSubscribed}
              className={styles.thirteen}
              style={{ height: "32px", cursor: "pointer" }}
            >
              Get Price
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

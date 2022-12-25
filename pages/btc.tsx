import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Bitcoin() {
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
        </div>
      </main>
    </>
  );
}

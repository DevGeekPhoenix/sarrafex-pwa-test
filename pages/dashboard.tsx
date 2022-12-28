import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/Sarrafex-Logo.png"
              alt="Sarrafex Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className={styles.description}>
            <h1>Welcome To Dashboard</h1>
          </div>
          <div className={styles.description}>
            <Link href={"/btc"}>
              <a
                className={styles.thirteen}
                style={{ height: "40px", cursor: "pointer" }}
                href={"/btc"}
              >
                BITCOIN
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

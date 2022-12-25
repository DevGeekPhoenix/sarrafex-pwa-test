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
            <h1>SarrefEx PWA Sample</h1>
          </div>
          <div className={styles.description}>
            <Link href={"/btc"}>
              <a href={"/btc"}>BITCOIN</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

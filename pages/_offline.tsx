import Image from "next/image";
import styles from "../styles/Home.module.css";

const Fallback = () => {
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
            {/* <h1>SarrefEx PWA Sample</h1> */}
            <h1>You Are Offline</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Fallback;

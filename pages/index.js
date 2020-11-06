import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LORA Bridges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.landing_section}>
          <div className={styles.hero_content}>
            <h1 className={styles.title}>
              L
              <Image
                src="/../public/olive_branch_logo.svg"
                alt="Picture of the author"
                width={100}
                height={100}
              />
              RA
            </h1>

            <p className={styles.description}>
              Leadership Openness Results & Awareness
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

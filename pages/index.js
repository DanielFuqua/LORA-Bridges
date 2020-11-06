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
            <div className={styles.hero_title}>
              <h1 className={styles.title}>L</h1>
              <Image
                src="/../public/olive_branch_logo.svg"
                alt="Picture of the author"
                width={147}
                height={133}
                margin-top={40}
              />

              <h1 className={styles.title}>RA</h1>
            </div>

            <p className={styles.sub_title}>
              Leadership Openness Results
              <br />& Awareness
            </p>
            {/* <p className={styles.sub_sub_titlte}>
              Building Bridges for Transformation
            </p> */}

            <div className={styles.hero_button}>
              <p className={styles.hero_button_text}>Start Building Bridges</p>
            </div>
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

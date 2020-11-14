import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../components/Home/landing";
import About from "../components/About/about";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LORA Bridges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Landing />
        <About />
        <div className={styles.services_test}></div>
        {/* <About />
        <Services /> */}
        <div className={styles.gradient_test}>
          <div className={styles.borders_test}></div>
          <div className={styles.borders_test2}></div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}

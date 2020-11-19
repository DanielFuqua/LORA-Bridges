import styles from "../../styles/landing.module.css";
import Image from "next/image";

const Landing = () => (
  <div className={styles.landing_section} id="landing">
    <div className={styles.hero_content}>
      <div className={styles.hero_title}>
        <h1 className={styles.title_text}>L</h1>
        <img src="/logo.png" width="147px" height="133px" />
        <h1 className={styles.title_text}>RA</h1>
      </div>
      <p className={styles.sub_title}>
        Leadership Openness Results & Awareness
      </p>
      <p className={styles.third_sub}>Building Bridges for Transformation</p>
        
      <a href="#services" style={{ textDecoration: "none" }}>
        <div className={styles.hero_button}>
          <p className={styles.hero_button_text}>Start Building Bridges</p>
        </div>
      </a>
    </div>
    <div className={styles.nigerian_proverb}>
      <Image
        src="/Nigerian Proverb (2).svg"
        alt="Lora Bridges Logo Nav"
        width={570}
        height={260}
      />
    </div>
  </div>
);

export default Landing;

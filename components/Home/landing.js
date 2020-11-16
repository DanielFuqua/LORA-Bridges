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
      <p className={styles.sub_title}>Leadership Openness Results</p>
      <p className={styles.sub_title}>& Awareness</p>
        
      <div className={styles.hero_button}>
        <p className={styles.hero_button_text}>Start Building Bridges</p>
      </div>
    </div>
  </div>
);

export default Landing;

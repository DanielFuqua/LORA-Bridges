import styles from "../../styles/landing.module.css";
import Image from "next/image";

const Landing = () => (
  <div className={styles.landing_section}>
    <div className={styles.hero_content}>
      <div className={styles.hero_title}>
        <h1 className={styles.title}>L</h1>
        <Image
          src="/../public/olive_branch_logo.svg"
          alt="Olive branch logo svg"
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

      <div className={styles.hero_button}>
        <p className={styles.hero_button_text}>Start Building Bridges</p>
      </div>
    </div>
  </div>
);

export default Landing;

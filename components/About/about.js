import styles from "../../styles/about.module.css";
import Image from "next/image";

const About = () => (
  <div className={styles.about_section}>
    <div>
      <div className={styles.about_header}>
        <Image
          src="/about_header.svg"
          alt="about header"
          width={1550}
          height={117}
          className={styles.logo_svg}
        />
      </div>

      {/* <div className={styles.about_content}>
      <div className={styles.sally_section}>
    
      </div>
      <div className={styles.mandala}>
        <Image
          src="/Mandala.svg"
          alt="Mandala"
          width={659}
          height={659}
          className={styles.manadala}
        />
      </div>
      <div className={styles.kim_section}>
      
      </div>
    </div> */}
    </div>
  </div>
);

export default About;

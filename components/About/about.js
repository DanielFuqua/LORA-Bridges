import styles from "../../styles/about.module.css";
import Image from "next/image";

const About = () => (
  <div className={styles.about_section}>
    <div className={styles.about_section_wrapper}>
      <div className={styles.about_header} id="about">
        <div className={styles.vector_1}></div>
        <div className={styles.heading_svg}>
          <Image
            src="/About Us.svg"
            alt="about header"
            width={500}
            height={117}
            className={styles.logo_svg}
          />
        </div>
        <div className={styles.vector_2}></div>
      </div>

      <div className={styles.about_content}>
        <div className={styles.sally_section}>
          <Image src="/sally.svg" alt="sally" width={225} height={300} />
          <a href="http://www.sallybartolameolli.com/">
            <Image
              className={styles.sally_title}
              src="/Sally Bartolameolli, MEd.svg"
              alt="sally title"
              width={300}
              height={100}
            />
          </a>
        </div>
        <div className={styles.mandala}>
          <Image
            src="/Mandala.svg"
            alt="Mandala"
            width={500}
            height={500}
            className={styles.manadala_pic}
          />
        </div>
        <div className={styles.kim_section}>
          <Image
            src="/kim.svg"
            alt="kim"
            width={225}
            height={300}
            className={styles.kim}
          />
          <a href="https://facetofacecoach.net">
            <Image
              src="/Kim Siongco.svg"
              alt="kim title"
              width={200}
              height={100}
              className={styles.kim_title}
            />
          </a>
        </div>
      </div>
      <div className={styles.lora_paragraph}>
        <Image
          className={styles.lora_title}
          src="/LORA Title.svg"
          alt="Lora title"
          width={170}
          height={80}
        />
        <p>
          LORA Bridges is about building bridges for transformation. We teach
          you how to access the archetypal energies that we believe live within
          all human beings - Leadership, Openness, Results, & Awareness. Each
          archetype has its own techniques and practices to enhance the quality
          of your personal and professional life.
        </p>
      </div>
    </div>
  </div>
);

export default About;

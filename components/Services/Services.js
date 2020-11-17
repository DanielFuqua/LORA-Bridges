import styles from "../../styles/services.module.css";
import Image from "next/image";

const Services = () => (
  <div className={styles.services_section} id="services">
    <div className={styles.vector}></div>

    <div className={styles.services_header}>
      <div className={styles.vector_1}></div>
      <Image
        src="/Services.svg"
        alt="heading-services"
        width={400}
        height={85}
        className={styles.services_svg}
      />
      <div className={styles.vector_2}></div>
    </div>

    <div className={styles.services_content}>
      <div className={styles.services_card}>
        <Image src="/ecourse.svg" alt="e-course svg" width={155} height={165} />
        <p className={styles.service_name}>E-Course</p>
        <p className={styles.service_description}>
          Begin putting simple practices into place to build bridges within
          yourself, others, & your community.
        </p>
      </div>
      <div className={styles.vertical_vector}></div>
      <div className={styles.services_card}>
        <p className={styles.service_description}>
          The LORA Bridges/Shadow Types Survey is a personal survey that enables
          you to see the highly developed attributes you have in each quadrant
          and the attributes that will require focus and attention in order to
          achieve the potentialities of Leadership, Openness, Results, and
          Awareness.
        </p>
      </div>
      <div className={styles.vertical_vector}></div>
      <div className={styles.services_card}>
        <p className={styles.service_description}>
          Build a Bridge and connect with us! Contact us for more information.
        </p>
      </div>
    </div>
  </div>
);

export default Services;

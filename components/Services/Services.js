import styles from "../../styles/services.module.css";
import Image from "next/image";

const Services = () => (
  <div className={styles.services_section} id="services">
    <div className={styles.vector}>
      <Image
        src="/services_vector.svg"
        alt="vecor-services"
        width={1530}
        height={117}
      />
    </div>
    <div className={styles.heading}>
      <Image
        src="/services_heading.svg"
        alt="heading-services"
        width={1550}
        height={102.67}
      />
    </div>
  </div>
);

export default Services;

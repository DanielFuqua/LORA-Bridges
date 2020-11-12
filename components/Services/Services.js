import styles from "../../styles/services.module.css";
import Image from "next/image";

const Services = () => (
  <div className={styles.services_section}>
    <div className={styles.vector}>
      <Image
        src="/services_vector.svg"
        alt="vecor-services"
        width={1530}
        height={117}
      />
    </div>
  </div>
);

export default Services;

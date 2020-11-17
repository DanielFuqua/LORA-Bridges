import styles from "../../styles/nav.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Nav = () => (
  <div className={styles.nav}>
    <div className={styles.navLogo}>
      <a href="#landing">
        <Image
          src="/navLogoFull.svg"
          alt="Lora Bridges Logo Nav"
          width={405}
          height={86}
        />
      </a>
    </div>
    {/* <FontAwesomeIcon icon={faCoffee} /> */}

    <div className={styles.social_icons}>
      <div className={styles.icon}>
        <i class="fab fa-twitter"></i>
        <a>
          <Image src="/twitter.svg" alt="Twitter" width={17.9} height={18.85} />
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://www.facebook.com/buildingbridgesfortransformation/">
          <Image
            className={styles.svg_icon}
            src="/facebook.svg"
            alt="Facebook"
            width={22.08}
            height={25.67}
          />
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://www.instagram.com/lorabuildingbridges/">
          <Image src="/insta.svg" alt="Insta" width={19} height={21.31} />
        </a>
      </div>
    </div>

    <ul className={styles.navItems}>
      <li className={styles.li}>
        <a className={styles.item} href="#about">
          About
        </a>
      </li>
      <li className={styles.li}>
        <a className={styles.item} href="#services">
          Services
        </a>
      </li>
      <li className={styles.li}>
        <a className={styles.item} href="#">
          Resources
        </a>
      </li>
      <li className={styles.li}>
        <a className={styles.item} href="#">
          Events
        </a>
      </li>
    </ul>
  </div>
);

export default Nav;

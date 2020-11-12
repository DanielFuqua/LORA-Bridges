import styles from "../../styles/nav.module.css";
import Image from "next/image";

const Nav = () => (
  <div className={styles.nav}>
    <div className={styles.navLogo}>
      {/* <div className={styles.navLogo_text}>LORA</div>
      <img src="/logo.png" width="95px" height="86px" />
      <div className={styles.navLogo_text}>Bridges</div> */}
      <Image
        src="/navLogoFull.svg"
        alt="Lora Bridges Logo Nav"
        width={405}
        height={86}
        className={styles.logo_svg}
      />
    </div>

    <div className={styles.social_icons}>
      <div className={styles.icon}>
        <a>
          <Image src="/twitter.svg" alt="Twitter" width={17.9} height={18.85} />
        </a>
      </div>
      <div className={styles.icon}>
        <a>
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={22.08}
            height={25.67}
          />
        </a>
      </div>
      <div className={styles.icon}>
        <a>
          <Image src="/insta.svg" alt="Insta" width={19} height={21.31} />
        </a>
      </div>
    </div>

    <ul className={styles.navItems}>
      <li className={styles.li}>
        <a className={styles.item} href="#">
          About Us
        </a>
      </li>
      <li className={styles.li}>
        <a className={styles.item} href="#">
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

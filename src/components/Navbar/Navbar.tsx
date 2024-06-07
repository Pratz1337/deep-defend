import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h3 className={styles.navText}>DeepDefend</h3>
        <div className={styles.logoHolder}>
          <img
            alt="navimg"
            className={styles.logo}
            src="https://media.discordapp.net/attachments/979277341723332638/1248713913634259077/image_4.png?ex=6664aaf4&is=66635974&hm=71e7a4379960a554fa9d7d8acc5ac1513e30ebc3a1f40ad6215f5c50d2f0acf0&=&format=webp&quality=lossless&width=553&height=437"
          />
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.gbutton}>About</button>
        <button className={styles.gbutton}>Help</button>
      </div>
    </nav>
  );
}

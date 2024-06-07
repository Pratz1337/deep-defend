import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.landingScreen}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.textArea}>
            <div className={styles.filler}>
              <div className={styles.filler1}>&nbsp;&nbsp;</div>
              <div className={styles.filler2}>&nbsp;&nbsp;</div>
            </div>
            <h1 className={styles.mainTextG}>Your AI-Powered</h1>
            <h1 className={styles.mainText}>Deepfake Defense</h1>
            <span className={styles.description}>
              Introducing a groundbreaking platform that combines AI-driven deepfake detection with decentralized voting
              and blockchain technology. We protect your images and audio files from manipulation, ensuring media
              integrity in an era of digital deception. Join us in the fight against misinformation.
            </span>
            <div className={styles.mainButtons}>
              <Link href="/protect">
                <button className={styles.signupBtn}>Protection</button>
              </Link>
              <Link href={"/detect"}>
                <button className={styles.outlineBtn}>Detection</button>
              </Link>
            </div>
            <div className={styles.fillerc}>
              <div className={styles.filler3}>&nbsp;&nbsp;</div>
              <div className={styles.filler4}>&nbsp;&nbsp;</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

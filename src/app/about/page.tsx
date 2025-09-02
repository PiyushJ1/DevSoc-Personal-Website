'use client'

import styles from "./About.module.css"
import Link from "next/link";
import Particles from "@/components/Particles";
import TiltedCard from "@/components/TiltedCard";

export default function AboutPage() {
  return (
    <>
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }} className={styles.content}>

      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navCentre}>
            <Link href="/home" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
        </div>
      </header>
      
      <div className={styles.sectionContainer}>        
        <h2 className={styles.sectionTitle}>About Me</h2>

        <p className={styles.intro}>
          Hey! My name is Piyush Jha, and I'm a second-year student at the University
          of New South Wales. I love to tackle challenging technical problems and create impactful
          solutions. 
        </p>

        <p className={styles.description}>
          I'm passionate about software development, particularly in web and cloud
          technologies. I also enjoy learning about system design.
        </p>

        <p className={styles.description}>
          Some programming languages and tools I'm familiar with are:<br/>
          - JavaScript/TypeScript<br/>- Node.js <br/>- Express. js <br/>- Next.js <br/>- PostgreSQL <br/>- C <br/>- Java (just started) <br/>- Git
        </p>        

        <p className={styles.description}>
          Apart from crashing out (programming), you can find me at the gym, hanging out with 
          my friends, listening to my curated music playlists or playing the digital piano.
        </p>

        <p>Oh by the way, I also like photography. Here's some photos that I think are cool:</p>

        <div className={styles.photos}>
          <TiltedCard
            imageSrc="/city.png"
            altText=""
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

          <TiltedCard
            imageSrc="/ranchi.png"
            altText=""
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

            
            
        </div>
      </div>
    </div>
    </>
  );
}

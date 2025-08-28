'use client'

import Image from "next/image";
import styles from "./Home.module.css"
import DecryptedText from "../components/DecryptedText";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header className={styles.navbar}>
      <div className={styles.navbarContaienr}>
        <center>
          About | Projects | Dreams | Contact
        </center>
      </div>
    </header>

    <main className={styles.heroContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.mainTitle}>
          <DecryptedText
            text="Hi! I'm Piyush"
            speed={60}
            maxIterations={20}
            className={styles.highlightUser}
            parentClassName=""
            encryptedClassName=""
            animateOn="view"
          />
        </div>

        <h2 className={styles.subtitle}>
          <DecryptedText
            text="I build and break tech for fun."
            speed={60}
            maxIterations={20}
            className={styles.highlightUser}
            parentClassName=""
            encryptedClassName=""
            animateOn="view"
          />
        </h2>

        <div className={styles.description}>
          <DecryptedText
            text="Software Engineering Student @ UNSW"
            speed={60}
            maxIterations={35}
            className={styles.highlightUser}
            parentClassName=""
            encryptedClassName=""
            animateOn="view"
          />
        </div>
      </div>
    </main>

    <section className={styles.aboutSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          About Me
        </h2>

        <p className={styles.aboutText}>
          I'm a 2nd year Software Engineering (Honours) Student at the University of New South Wales.
          I love to tackle challenging problems and creating solutions that are impactful.

          Here are a few programming languages and technologies I'm familiar with: 
        </p>
        <ul className={styles.skillsList}>
          <li>JavaScript/TypeScript</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>PostgreSQL</li>
          <li>Prisma</li>
          <li>C</li>
          <li>Git</li>
        </ul>

        <p className={styles.aboutText}>
        Outside of tech, I enjoy listening to music and playing the digital piano. Here are some of my
        favourite music albums:

        I also enjoy all things related to fitness like running and weightlifting.
        </p>
      </div>
    </section>

    <section className={styles.projectSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Projects
        </h2>

        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>StudyIntel</h3>
              <div className={styles.description}>
                <p>Project info here</p>
              </div>

              <ul className={styles.projectTechStack}>
                <li className={styles.projectTech}>TypeScript</li>
                <li className={styles.projectTech}>Node.js</li>
                <li className={styles.projectTech}>Express.js</li>
                <li className={styles.projectTech}>Next.js</li>
                <li className={styles.projectTech}>PostgreSQL</li>
                <li className={styles.projectTech}>Prisma</li>
              </ul> className=styles
            </div>
          </div>

          <div className={styles.projectLinks}>
            <a href="https://google.com">Google</a>
          </div>




        </div>
      </div>
    </section>

    <section className={styles.dreamsSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          My Dreams
        </h2>

        <p>Since the theme of the website is Dreams, I thought I would quickly mention my own dreams and aspirations for the future.
          I want to become a Backend Software Engineer with a focus on system design. Eventually, I wish to 
          build and scale a tech startup, focusing on solving a real problem and making a positive impact on the world. 
        </p>
      </div>
    </section>

    <section className={styles.contactSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Contact Me
        </h2>
      </div>
    </section>
    </>
  );
}

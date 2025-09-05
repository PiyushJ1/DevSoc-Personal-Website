"use client";

import styles from "./Home.module.css";
import Link from "next/link";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <header className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.navCentre}>
              <Link href="/home" className={styles.navLink}>
                Home 🌌
              </Link>
              <span className={styles.divider}> | </span>
              <Link href="/about" className={styles.navLink}>
                About 🌟
              </Link>
              <Link href="/projects" className={styles.navLink}>
                Projects ✨
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact 🌙
              </Link>
            </div>
          </div>
        </header>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <main className={styles.heroContainer}>
            <div className={styles.contentCreator}>
              <h2 className={styles.mainTitle}>Hi! I&apos;m Piyush</h2>

              <h2 className={styles.subtitle}>
                2nd Year Software Engineering (Honours) Student @ UNSW
              </h2>

              <p className={styles.dreamTitle}>Currently dreaming about...</p>

              <div className={styles.dreamsContainer}>
                <div className={styles.dreamEmojiContainer}>
                  <span className={styles.dreamEmoji}>✈️</span>
                  <span className={styles.dreamText}>
                    Living in San Francisco
                  </span>
                </div>

                <div className={styles.dreamEmojiContainer}>
                  <span className={styles.dreamEmoji}>💻</span>
                  <span className={styles.dreamText}>
                    Launching my own tech startup and going all in
                  </span>
                </div>

                <div className={styles.dreamEmojiContainer}>
                  <span className={styles.dreamEmoji}>✨</span>
                  <span className={styles.dreamText}>
                    Being a part of DevSoc&apos;s 25T3 Training Program ;{")"}
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>

        <Particles
          particleColors={["#478c9cff", "#ffd000ff"]}
          particleCount={500}
          particleSpread={8}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </>
  );
}

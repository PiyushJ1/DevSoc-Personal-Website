"use client";

import styles from "./Projects.module.css";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className={styles.content}>
        <header className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.navCentre}>
              <Link href="/home" className={styles.navLink}>
                🏠 Home
              </Link>
              <span className={styles.divider}> | </span>
              <Link href="/about" className={styles.navLink}>
                About 💭
              </Link>
              <Link href="/projects" className={styles.navLink}>
                Projects 💡
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact 📥
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Projects 💡</h2>
        </div>
      </div>
    </>
  );
}

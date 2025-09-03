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
                Home
              </Link>
              <span className={styles.divider}> | </span>
              <Link href="/about" className={styles.navLink}>
                About 💭
              </Link>
              <Link href="/projects" className={styles.navLink}>
                Projects 💡
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact 💬
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Projects 💡</h2>

          <div className={styles.projectCard}>
            <h2 className={styles.projectTitle}>StudyIntel</h2>

            <div>
              <a
                href="https://studyintel.app"
                target="blank"
                className="text-blue-600 hover:underline"
              >
                Live Link
              </a>
              <br />
              <a
                href="https://github.com/PiyushJ1/StudyIntel"
                target="blank"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>

            <p className={styles.projectDescription}>
              StudyIntel is a study intelligence platform which helps students
              make the most out of their study efforts by visualising their
              progress and providing actionable AI-powered feedback.
              <br />
              <br />
              <span className="font-semibold">Key Features:</span>
              <br />
              - 📊 Smart Study Analytics: Track study sessions by subject,
              method, and time to uncover hidden patterns.
              <br />
              - 🧠 Personalised insights: Receive AI-powered study suggestions
              to study smarter.
              <br />
              - 📈 Intuitive Dashboard: Clean, interactive data visualisation to
              gauge progress, consistency, and study trends. <br />
              <br />
              <span className="font-semibold">Tech Stack:</span>
              <p className={styles.techStack}>
                <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" />{" "}
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
              </p>
            </p>
          </div>

          <div className={styles.projectCard}>
            <h2 className={styles.projectTitle}>SQLite Replica</h2>
            <div>
              <a
                href="https://github.com/PiyushJ1/SQLite-C-Database"
                target="blank"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>

            <p className={styles.projectDescription}>
              Replicating the core of a SQLite database from scratch using C to
              learn more about databases and raw data management.
              <br />
              <br />
              <span className="font-semibold">Exploring concepts like:</span>
              <br />
              - Low-level memory management
              <br />
              - Systems programming
              <br />
              <br />
              <span className="font-semibold">Tech Stack:</span>
              <p className={styles.techStack}>
                <img
                  src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
                  alt="C"
                />
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

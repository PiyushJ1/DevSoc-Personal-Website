'use client'

import styles from "./Contact.module.css"
import Link from "next/link";

export default function ContactPage() {
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
					<h2 className={styles.sectionTitle}>Contact 💬</h2>

					<p className={styles.contact}>Enjoyed my dreams? Let&apos;s get in touch!</p>
					<p className={styles.description}>Email: <Link className="text-blue-500 hover:text-blue-700 underline" href="mailto:piyushjha.work@gmail.com">piyushjha.work@gmail.com</Link></p>
					<p className={styles.description}>LinkedIn: <Link className="text-blue-500 hover:text-blue-700 underline" href="https://www.linkedin.com/in/piyush-jha1/" target="blank">linkedin.com/in/piyush-jha1</Link></p>
					<p className={styles.description}>GitHub: <Link className="text-blue-500 hover:text-blue-700 underline" href="https://github.com/PiyushJ1" target="blank">github.com/PiyushJ1</Link></p>
				</div>	
		</div>
		</>
	);
}
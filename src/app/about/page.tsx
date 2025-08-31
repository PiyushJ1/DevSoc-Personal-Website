'use client'

import styles from "./About.module.css"
import Link from "next/link";
import Particles from "@/components/Particles";

export default function AboutPage() {
	return (
		<>
		<div style={{ width: '100%', height: '100vh', position: 'relative' }}>
		<header className={styles.navbar}>
			<div className={styles.navContainer}>
				<div className={styles.navCentre}>
					<Link href="/" className={styles.navLink}>Home</Link>
					<Link href="/about" className={styles.navLink}>About</Link>
					<Link href="/projects" className={styles.navLink}>Projects</Link>
					<Link href="/contact" className={styles.navLink}>Contact</Link>
				</div>
			</div>
		</header>
		
		<Particles
        particleColors={['#478c9cff', '#ffd000ff']}
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
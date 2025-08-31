'use client'

import styles from "./Home.module.css"
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
    <div className={styles.container}>
      <Link href="/home" className={styles.div}>Enter My Dreams</Link>
    </div>
    </>
  );
}
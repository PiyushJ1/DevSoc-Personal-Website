'use client'

import styles from "./Landing.module.css"
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Link href="/home" className={styles.div}>Enter My Dreams</Link>
    </>
  );
}
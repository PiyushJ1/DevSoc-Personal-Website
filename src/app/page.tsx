'use client'

import styles from "./Landing.module.css"
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
    <div className={styles.container}>
      <Image className={styles.sleepImg}
        src="/sleep.png"
        alt="sleeping cartoon"
        width={400}
        height={300}
      />
      <Link href="/home" className={styles.div}>
        Enter My Dreams
      </Link>
    </div>
    </>
  );
}
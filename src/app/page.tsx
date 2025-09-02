'use client'

import styles from "./Landing.module.css"
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* <Link href="/home" className={styles.div}>Enter My Dreams</Link> */}
      <Link href="/home" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>
        Enter My Dreams
      </Link>
    </>
  );
}
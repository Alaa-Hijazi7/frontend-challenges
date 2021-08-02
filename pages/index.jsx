import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function LeavesComponent() {
  return (
    <div>
      <div className={styles["leaves-component"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles["leaves-component"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>AlaaHijazi | Tree leaves</title>
        <meta name="description" content="tree leaves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles["leaves-container"]}>
          <LeavesComponent />
          <LeavesComponent />
          <LeavesComponent />
          <LeavesComponent />
          <LeavesComponent />
          <LeavesComponent />
          <LeavesComponent />
        </div>
      </main>
    </>
  )
}

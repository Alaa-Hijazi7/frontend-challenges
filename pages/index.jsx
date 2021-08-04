import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>AlaaHijazi | css row</title>
        <meta name="description" content="css row" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <span>
            <span>
              <span></span>
            </span>
          </span>
        </div>
      </main>
    </>
  )
}

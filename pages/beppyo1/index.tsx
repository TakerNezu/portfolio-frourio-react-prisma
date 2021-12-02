import Head from 'next/head'
import styles from '~/styles/Home.module.css'
import UserBanner from '~/components/UserBanner'

import "@grapecity/activereports/styles/ar-js-ui.css";
import "@grapecity/activereports/styles/ar-js-viewer.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/xlsxexport";
import "@grapecity/activereports-localization";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <UserBanner />
        <div id="viewer-host">
          <Viewer report={{ Uri: "reports/新規レポート.rdlx-json" }} language="ja" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home

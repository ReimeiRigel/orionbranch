import { Link } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ポートフォリオ OrionBranch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
          <h1 className={styles.title}>
            Orion Branch
          </h1>
        </div>
        <div className={styles.news}>
          <Link href='/news'>
            <a>
              <h1 className={styles.title}>
                News
              </h1>
            </a>
          </Link>
        </div>
        <div className={styles.about}>
          <Link href="/about">
            <a>
              <h1 className={styles.title}>
                About
              </h1>
            </a>
          </Link>
        </div>
        
        <div className={styles.contact}>
          <Link href='/contact'>
            <a>
              <h1 className={styles.title}>
                Contact
              </h1>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
            <small>©2022 OrionBranch</small>
          </span>
      </footer>
    </div>
  )
}
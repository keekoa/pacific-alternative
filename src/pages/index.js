import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pacific Machinery</title>
        <meta name="description" content="Crane & hoist services and products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroDescription}>
            <h2>085 545 9000</h2>
            <Image
              src={"/alter-icon.png"}
              width={600}
              height={400}
              className={styles.heroLogo}
              alt="logo"
            />
            <h2>pacific-crane@gmail.com</h2>
          </div>
        </section>
        <section className={styles.intro}>
          
        </section>
      </main>
    </>
  )
}

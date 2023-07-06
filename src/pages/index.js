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
            <h2>pacific-crane@hotmail.com</h2>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.serviceItems}>
            <div className={styles.serviceItemCard}>
              <div className={styles.serviceItemImgContainer}>
                <Image
                  src={"/images/cranes/3.jpg"}
                  fill
                  className={styles.serviceItemImg}
                  alt="crane"
                />
              </div>
              <div className={styles.serviceItemInfo}>
                <h2>Cranes</h2>
                <p>We offer...</p>
              </div>
            </div>
            <div className={styles.serviceItemCard}>
              <div className={styles.serviceItemImgContainer}>
                <Image
                  src={"/images/hoists/1.jpg"}
                  fill
                  className={styles.serviceItemImg}
                  alt="crane"
                />
              </div>
              <div className={styles.serviceItemInfo}>
                <h2>Hoists</h2>
                <p>We offer...</p>
              </div>
            </div>
            <div className={styles.serviceItemCard}>
              <div className={styles.serviceItemImgContainer}>
                <Image
                  src={"/images/products/1.jpg"}
                  fill
                  className={styles.serviceItemImg}
                  alt="crane"
                />
              </div>
              <div className={styles.serviceItemInfo}>
                <h2>Individual Products</h2>
                <p>We offer...</p>
              </div>
            </div>
          </div>
          <div className={styles.craneContainer}>
            <Image
                src={"/images/cranes/4.png"}
                fill
                className={styles.craneImg}
                alt="crane"
            />
          </div>
          <div className={styles.customers}>

          </div>
          <div className={styles.safetyFirst}>

          </div>
        </section>
      </main>
    </>
  )
}

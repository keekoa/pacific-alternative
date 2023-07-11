import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

import Marquee from 'react-fast-marquee'

// Images for marquee
import imgMarquee1 from "public/images/home_marquee/1.jpg"
import imgMarquee2 from "public/images/home_marquee/2.jpg"
import imgMarquee3 from "public/images/home_marquee/3.jpg"
import imgMarquee4 from "public/images/home_marquee/4.jpg"
import imgMarquee5 from "public/images/home_marquee/5.jpg"
import imgMarquee6 from "public/images/home_marquee/6.jpg"
import imgMarquee7 from "public/images/home_marquee/7.jpg"
import imgMarquee8 from "public/images/home_marquee/8.jpg"
import imgMarquee9 from "public/images/home_marquee/9.jpg"
import imgMarquee10 from "public/images/home_marquee/10.jpg"
import imgMarquee11 from "public/images/home_marquee/11.jpg"
import imgMarquee12 from "public/images/home_marquee/12.jpg"
import imgMarquee13 from "public/images/home_marquee/13.jpg"
import imgMarquee14 from "public/images/home_marquee/14.jpg"
import imgMarquee15 from "public/images/home_marquee/15.jpg"
import imgMarquee16 from "public/images/home_marquee/16.jpg"
import imgMarquee17 from "public/images/home_marquee/17.jpg"
import imgMarquee18 from "public/images/home_marquee/18.jpg"
import imgMarquee19 from "public/images/home_marquee/19.jpg"
import imgMarquee20 from "public/images/home_marquee/20.jpg"
import imgMarquee21 from "public/images/home_marquee/21.jpg"
import imgMarquee22 from "public/images/home_marquee/22.jpg"
import imgMarquee23 from "public/images/home_marquee/23.jpg"
import imgMarquee24 from "public/images/home_marquee/24.jpg"
import imgMarquee25 from "public/images/home_marquee/25.jpg"
import imgMarquee26 from "public/images/home_marquee/26.jpg"

export default function Home() {
  const imgMarquees = [
    {
      id: 1,
      src: imgMarquee1,
      alt: 'showcase image'
    },
    {
      id: 2,
      src: imgMarquee2,
      alt: 'showcase image'
    },
    {
      id: 3,
      src: imgMarquee3,
      alt: 'showcase image'
    },
    {
      id: 4,
      src: imgMarquee4,
      alt: 'showcase image'
    },
    {
      id: 5,
      src: imgMarquee5,
      alt: 'showcase image'
    },
    {
      id: 6,
      src: imgMarquee6,
      alt: 'showcase image'
    },
    {
      id: 7,
      src: imgMarquee7,
      alt: 'showcase image'
    },
    {
      id: 8,
      src: imgMarquee8,
      alt: 'showcase image'
    },
    {
      id: 9,
      src: imgMarquee9,
      alt: 'showcase image'
    },
    {
      id: 10,
      src: imgMarquee10,
      alt: 'showcase image'
    },
    {
      id: 11,
      src: imgMarquee11,
      alt: 'showcase image'
    },
    {
      id: 12,
      src: imgMarquee12,
      alt: 'showcase image'
    },
    {
      id: 13,
      src: imgMarquee13,
      alt: 'showcase image'
    },
    {
      id: 14,
      src: imgMarquee14,
      alt: 'showcase image'
    },
    {
      id: 15,
      src: imgMarquee15,
      alt: 'showcase image'
    },
    {
      id: 16,
      src: imgMarquee16,
      alt: 'showcase image'
    },
    {
      id: 17,
      src: imgMarquee17,
      alt: 'showcase image'
    },
    {
      id: 18,
      src: imgMarquee18,
      alt: 'showcase image'
    },
    {
      id: 19,
      src: imgMarquee19,
      alt: 'showcase image'
    },
    {
      id: 20,
      src: imgMarquee20,
      alt: 'showcase image'
    },
    {
      id: 21,
      src: imgMarquee21,
      alt: 'showcase image'
    },
    {
      id: 22,
      src: imgMarquee22,
      alt: 'showcase image'
    },
    {
      id: 23,
      src: imgMarquee23,
      alt: 'showcase image'
    },
    {
      id: 24,
      src: imgMarquee24,
      alt: 'showcase image'
    },
    {
      id: 25,
      src: imgMarquee25,
      alt: 'showcase image'
    },
    {
      id: 26,
      src: imgMarquee26,
      alt: 'showcase image'
    },
  ]


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
          <div className={styles.heroContainer}>
            <div className={styles.intro}>
              <h1>PACIFIC MACHINERY</h1>
              <h2>The single source solution for material handling.</h2>
              <h2>Trusted by many to undertake custom crane and hoist design and installation.</h2>
              <div className={styles.introNav}>
                <Link href="/contact">Contact us</Link>
                <Link href="/product">See our products</Link>
                <Link href="/service">See our services</Link>
              </div>
            </div>
            <div>
              <div className={styles.introImgContainer}>
                <h1>
                  Innovative <br></br> Lifting <br></br> and <br></br> Handling
                </h1>
              </div>
            </div>
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
                <div>
                  <h2>Cranes</h2>
                  <p>We offer variety of crane services including overhead crane, gantry crane, travelling crane.</p>
                </div>
                <Link href="" className={styles.detailLink}>See more</Link>
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
                <div>
                  <h2>Hoists</h2>
                  <p>We offer elevator for elevating goods in warehouse environment.</p>
                </div>
                <Link href="" className={styles.detailLink}>See more</Link>
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
                <div>
                  <h2>Individual Products</h2>
                  <p>We offer several individual products including electric hoists, wire rope, chain, remote control, and more.</p>
                </div>
                <Link href="" className={styles.detailLink}>See more</Link>
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
          <div className={styles.showcase}>
            <Marquee
              autoFill={true}
              loop={0}
              speed={60}
              gradient={true}
              gradientColor={[229, 240, 250]}
              className={styles.slidingShowcase}
            >
              {imgMarquees.map((img) => (
                <div key={img.id} className={styles.showcaseImgContainer}>
                  <Image
                    src={img.src}
                    width={500}
                    height={300}
                    className={styles.showcaseImg}
                    alt={img.alt}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className={styles.customers}>
            <h2>OUR CUSTOMERS</h2>
            <Marquee
              autoFill={true}
              loop={0}
              speed={100}
              gradient={true}
              direction="right"
              gradientColor={[229, 240, 250]}
              className={styles.slidingCustomers}
            >
              <Image
                src={"/images/customers/cpf.png"}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                className={styles.brandLogo}
                alt="cpf logo"
              />
              <Image
                src={"/images/customers/italianthai.png"}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                className={styles.brandLogo}
                alt="italian-thai logo"
              />
              <Image
                src={"/images/customers/thaiwatsadu.png"}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                className={styles.brandLogo}
                alt="thaiwatsadu logo"
              />
              <Image
                src={"/images/customers/megahome.png"}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                className={styles.brandLogo}
                alt="megahome logo"
              />
              <Image
                src={"/images/customers/fn.png"}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                className={styles.brandLogo}
                alt="fn logo"
              />
              <Image
                src={"/images/customers/mitrphol.png"}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                className={styles.brandLogo}
                alt="mitrphol logo"
              />
            </Marquee>
          </div>
          <div className={styles.safetyFirst}>
            <h3>+ SAFETY FIRST</h3>
          </div>
        </section>
      </main>
    </>
  )
}

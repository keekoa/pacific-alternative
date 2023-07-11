import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.info}>
          <div className={styles.nav}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="">Service</Link></li>
              <li><Link href="">Product</Link></li>
              <li><Link href="">Gallery</Link></li>
              <li><Link href="">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h4>Contact</h4>
            <p>(+66) 085 545 9000</p>
            <p>02 898 6616</p>
            <p>pacific-crane@hotmail.com</p>
          </div>
          <div className={styles.maps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21929.870905231135!2d100.45817765728451!3d13.676598087815991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a2ba341f6be7%3A0xa4af97a3f6de2439!2s797%20Rama%20II%20Alley%2042%2C%20Khwaeng%20Bang%20Mot%2C%20Khet%20Chom%20Thong%2C%20Krung%20Thep%20Maha%20Nakhon%2010150!5e0!3m2!1sen!2sth!4v1652268563671!5m2!1sen!2sth" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
          <p>Copyright © 2023 Pacific Machinery Sales & Service Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
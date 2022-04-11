import React from 'react'
import Image from 'next/image'
import styles from '/styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <span className={styles.text}>
            Optimo Group © 2022 All rights reserved
        </span>
    </footer>
  )
}

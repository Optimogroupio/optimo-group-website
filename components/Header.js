import React from 'react'
import styles from '/styles/components/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
        <span className={styles.logo}>
            Optimo Group
        </span>
    </header>
  )
}

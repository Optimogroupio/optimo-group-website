import React from 'react'
import Image from 'next/image'
import styles from '/styles/components/Header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <span className={styles.logo}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={150}
                    height={100}
                />
            </span>
        </header>
    )
}

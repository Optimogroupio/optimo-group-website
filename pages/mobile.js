import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import styles from '/styles/pages/Mobile.module.css'

export default function Mobile() {
  return (
    <>
        <Head>
            <title>Optimo Group</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel='preload' href='/fonts/TitilliumWeb-Regular.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
            <link rel='preload' href='/fonts/TitilliumWeb-Bold.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
            <link rel='preload' href='/fonts/TitilliumWeb-Light.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
            <link rel='preload' href='/fonts/TitilliumWeb-SemiBold.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
            <link rel='preload' href='/fonts/TitilliumWeb-ExtraLight.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
        </Head>
        <div 
            className={styles.backgroundImage} 
        />
        <div className={styles.container}>
            
        </div>
        <Footer />
    </>
  )
}

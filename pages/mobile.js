import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '/styles/pages/Mobile.module.css'

const words = [
    'Digital world',
    'Business',
    'Users',
    'Everybody'
]

export default function Mobile() {
    const [heroText, setHeroText] = useState('Digital World')

    let index = 0;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (index === words.length - 1) {
                clearInterval(interval)
            }
            setHeroText(words[index++])
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [index])

    function handleScroll(id){
        const element = document.getElementById(id)
        console.log(id)
        element.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

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
            <div className={styles.backgroundImage} />
            <div 
                className={styles.scrollDownContainer}
            >
                <div 
                    onClick={() => handleScroll('affiliateProject')}
                    className={styles.scrollDown}
                >
                    <span>Scroll</span>
                    <div>
                        <Image
                            src="/icons/arrow_downward.svg"
                            alt="Scroll Down"
                            width={30}
                            height={30}
                        />
                    </div>
                    <span>Down</span>
                </div>
            </div>
            <div className={styles.container}>
                {/* Hero */}
                <div id="hero" className={styles.heroBlock}>
                    <h1 className={styles.title}>
                        Optimal Solutions For: <br/>
                        <span className={styles.highlight}>{heroText}</span>
                    </h1>
                    <span className={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Quis harum similique facere
                        iure debitis, dolorum nobis doloribus quod officia odit.
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Quis harum similique facere
                        iure debitis, dolorum nobis doloribus quod officia odit.
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Quis harum similique facere
                        iure debitis, dolorum nobis doloribus quod officia odit.
                    </span>
                </div>
                {/* Affiliate Project */}
                <div id="affiliateProject" className={styles.affiliateProject}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Affiliate Project.png" 
                                alt="Affiliate Project"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <h1 className={styles.title}> Affiliate Project </h1>
                    <span className={styles.text}>
                        10 successful projects in the affiliate marketing igaming field. 
                        Now we are in 21 countries and still growing {'<3 '} 
                        We go worldwide to deliver unbelievable results for our users and partners.
                    </span>
                </div>
                {/* Affiliate Network */}
                <div className={styles.affiliateNetwork}>
                    <h2 className={styles.secondaryHeader}>Global 10 Projects</h2>
                    <h1 className={styles.title}>Affiliate Network</h1>
                    <span className={styles.text}>
                        Multi-brand affiliate management software for your website.
                        Tailored digital solution to recruit affiliates and grow your affiliate network. 
                        Increase Revenues. Dedicated Support. Multiple Marketing Tools. 
                        Real-time Insights. Real-time Data.
                    </span>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Affiliate Network.png"
                                alt="Affiliate Network"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                {/* Social Media */}
                <div className={styles.socialMedia}>
                    <h1 className={styles.title}>Betting Social Media</h1>
                    <span className={styles.text}>
                        Betting Social Media unifies a gambling-loving community. 
                        Tipsters from all over the world share their predictions for various sporting events. 
                        Customers have the opportunity to get in touch with each other, follow, discuss, engage, and more.
                        Best tipsters have a chance to win various prizes and rewards.
                    </span>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Betting Social Media.png"
                                alt="Betting Social Media"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                
                <div />
            </div>
            <Footer />
        </>
    )
}

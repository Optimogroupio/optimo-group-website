import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import styles from '/styles/pages/Mobile.module.css'

const words = [
    'Digital world',
    'Business',
    'Users',
    'Everybody'
]

export default function Mobile() {
    const { scrollY } = useViewportScroll()
    const expandWidth = useTransform(scrollY, [0, 400], ['90vw', '100vw'])
    const expandHeight = useTransform(scrollY, [0, 400], ['40vh', '100vh'])
    const top = useTransform(scrollY, [0, 400], ['28%', '0%'])
    const left = useTransform(scrollY, [0, 400], ['5%', '0%'])
    const opacity = useTransform(scrollY, [0, 400], [1, 0])
    const bgPosition = useTransform(scrollY, [0, 5000], ['50%', '-300%'])
    const affiliateProjectOpacity = useTransform(scrollY, [0, 400, 600, 1100], [0, 1, 1, 0])
    const affiliateProjectTranslate = useTransform(scrollY, [200, 400], ['-100%', '0%'])
    const affiliateNetworkOpacity = useTransform(scrollY, [600, 1100, 1600, 1900], [0, 1, 1, 0])
    const affiliateNetworkTranslate = useTransform(scrollY, [600, 1000], ['100%', '0%'])
    const socialMediaOpacity = useTransform(scrollY, [1200, 1600, 2000, 2400], [0, 1, 1, 0])
    const socialMediaTranslate = useTransform(scrollY, [1200, 1600], ['-100%', '0%'])
    const streamingSolutionsOpacity = useTransform(scrollY, [1900, 2300, 2700, 3100], [0, 1, 1, 0])
    const streamingSolutionsTranslate = useTransform(scrollY, [1900, 2300], ['100%', '0%'])
    const startupIncubatorOpacity = useTransform(scrollY, [2800, 3200, 3600, 4200], [0, 1, 1, 0])
    const startupIncubatorTranslate = useTransform(scrollY, [2750, 3150], ['-100%', '0%'])
    const projectsOpacity = useTransform(scrollY, [3400, 3800, 4200, 4600], [0, 1, 1, 0])
    const projectsTranslate = useTransform(scrollY, [3300, 3800], ['100%', '0%'])
    const [heroText, setHeroText] = useState(words[0])

    let index = 1;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (index === words.length - 1) {
                clearInterval(interval)
            }
            setHeroText(words[index++])
        }, 750)
        return () => {
            clearInterval(interval)
        }
    }, [index])

    function handleScroll(id){
        const element = document.getElementById(id)
        element.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    // function printScroll(){
    //     console.log(window.scrollY)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', printScroll)
    //     return () => {
    //         window.removeEventListener('scroll', printScroll)
    //     }
    // }, [])

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
            <motion.div 
                className={styles.backgroundImage} 
                style={{
                    width: expandWidth,
                    height: expandHeight,
                    top: top,
                    left: left,
                    backgroundPositionY: bgPosition,
                }}
            />
            <motion.div 
                className={styles.scrollDownContainer}
                style={{
                    opacity: opacity,
                }}
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
                            width={20}
                            height={20}
                        />
                    </div>
                    <span>Down</span>
                </div>
            </motion.div>
            <div className={styles.container}>
                {/* Hero */}
                <div id="hero" className={styles.heroBlock}>
                    <h1 className={styles.title}>
                        Optimal Solutions For: <br/>
                        <span className={styles.highlight}>{heroText}</span>
                    </h1>
                    <span className={styles.text}>
                        The key to business success is optimization. We are OPTIMO…
                        we deliver tomorrow{"'"}s solutions today, we bring the future closer.
                    </span>
                </div>
                {/* Affiliate Project */}
                <motion.div 
                    id="affiliateProject" 
                    className={styles.affiliateProject}
                    style={{
                        opacity: affiliateProjectOpacity
                    }}
                >
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
                    <h2 className={styles.secondaryHeader}>Global 10 Projects</h2>
                    <h1 className={styles.title}> Affiliate Project </h1>
                    <motion.span 
                        className={styles.text}
                        style={{
                            translateX: affiliateProjectTranslate,
                            translateY: affiliateProjectTranslate
                        }}
                    >
                        10 successful projects in the affiliate marketing igaming field. 
                        Now we are in 21 countries and still growing {'<3 '} 
                        We go worldwide to deliver unbelievable results for our users and partners.
                    </motion.span>
                </motion.div>
                {/* Affiliate Network */}
                <motion.div 
                    id="affiliateNetwork" 
                    className={styles.affiliateNetwork}
                    style={{
                        opacity: affiliateNetworkOpacity
                    }}
                >
                    <h1 className={styles.title}>Affiliate Network</h1>
                    <motion.span 
                        className={styles.text}
                        style={{
                            translateX: affiliateNetworkTranslate,
                            translateY: affiliateNetworkTranslate
                        }}
                    >
                        Multi-brand affiliate management software for your website.
                        Tailored digital solution to recruit affiliates and grow your affiliate network. 
                        Increase Revenues. Dedicated Support. Multiple Marketing Tools. 
                        Real-time Insights. Real-time Data.
                    </motion.span>
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
                </motion.div>
                {/* Social Media */}
                <motion.div 
                    id="socialMedia" 
                    className={styles.socialMedia}
                    style={{
                        opacity: socialMediaOpacity
                    }}
                >
                    <h1 className={styles.title}>Betting Social Media</h1>
                    <motion.span 
                        className={styles.text}
                        style={{
                            translateX: socialMediaTranslate,
                            translateY: socialMediaTranslate
                        }}
                    >
                        Betting Social Media unifies a gambling-loving community. 
                        Tipsters from all over the world share their predictions for various sporting events. 
                        Customers have the opportunity to get in touch with each other, follow, discuss, engage, and more.
                        Best tipsters have a chance to win various prizes and rewards.
                    </motion.span>
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
                </motion.div>
                {/* Streaming Solutions */}
                <motion.div 
                    id="streamingSolutions" 
                    className={styles.streamingSolutions}
                    style={{
                        opacity: streamingSolutionsOpacity
                    }}
                >
                    <h2 className={styles.secondaryHeader}>Streaming Projects and Platform</h2>
                    <h1 className={styles.title}>Streaming Solutions</h1>
                    <motion.span 
                        className={styles.text}
                        style={{
                            translateX: streamingSolutionsTranslate,
                            translateY: streamingSolutionsTranslate
                        }}
                    >
                        Variety of streaming solutions for companies interested in promoting their products and services. 
                        with a large network of professional streamers, we can reach different audiences worldwide. 
                        Optimo Group owns dedicated streamers platform, {`"`}Streamers Club{`"`} to enhance business solutions.
                    </motion.span>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Streaming Solutions.png"
                                alt="Streaming Solutions"
                                width={350}
                                height={350}
                            />
                        </div>
                    </div>
                </motion.div>
                {/* Startup Incubator */}
                <motion.div 
                    id="startupIncubator" 
                    className={styles.startupIncubator}
                    style={{
                        opacity: startupIncubatorOpacity
                    }}
                >
                    <h2 className={styles.secondaryHeader}>Create In-House</h2>
                    <h1 className={styles.title}>Startup Incubator</h1>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Startup Incubator.png"
                                alt="Startup Incubator"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <motion.span 
                        className={styles.text}
                        style={{
                            translateX: startupIncubatorTranslate,
                            translateY: startupIncubatorTranslate
                        }}
                    >
                        We assist new startups to succeed: solving some of the problems associated with mentoring, 
                        training, and running startups by providing workspace and funding. Our Support means to 
                        take the form of access to experienced mentors with relevant area expertise.
                    </motion.span>
                </motion.div>
                {/* Projects */}
                <motion.div 
                    id="projects" 
                    className={styles.projects}
                    style={{
                        opacity: projectsOpacity
                    }}
                >
                    <h2 className={styles.secondaryHeader}>To Make Peoples Life Better</h2>
                    <h1 className={styles.title}>Projects</h1>
                    <motion.span
                        className={styles.text}
                        style={{
                            translateX: projectsTranslate,
                            translateY: projectsTranslate
                        }}
                    >
                        We are building in-house international projects to make people{`'`}s life better,
                        like Marketing automation software, and crypto payment gateways.
                    </motion.span>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Projects.png"
                                alt="Projects"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </motion.div>
                {/* Contact Us */}
                <div className={styles.contactUs}>
                    <h2 className={styles.secondaryHeader}>Have any questions? Don{`'`}t be shy</h2>
                    <h1 className={styles.title}>Contact Us</h1>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <h2 className={styles.secondaryHeader}>Email</h2>
                            <span className={styles.text}>info@optimogroup.io</span>
                        </div>
                        <div className={styles.contactItem}>
                            <h2 className={styles.secondaryHeader}>Address</h2>
                            <span className={styles.text}>Cyprus, Limassol, 36 Agias Fylaxeos, 3rd Floor</span>
                        </div>
                    </div>
                    <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Agias+Filaxeos+36,+Limassol,+%D0%9A%D0%B8%D0%BF%D1%80/@34.6804168,33.0379092,17z/data=!3m1!4b1!4m5!3m4!1s0x14e73305db59320d:0xec1740b1cbe4d64a!8m2!3d34.6804124!4d33.0400979" className={styles.imageContainer}>
                        <div className={styles.image}>
                            <Image
                                src="/images/Maps.png"
                                alt="Maps"
                                width={980}
                                height={700}
                                quality={100}
                            />
                        </div>
                    </a>
                </div>
            </div>
                <a 
                    className={styles.scrollToTop}
                    onClick={() => handleScroll('hero')}
                >
                    <Image 
                        src="/icons/arrow_downward.svg"
                        alt='scroll to top'
                        width={20}
                        height={20}
                    />
                </a>
            <Footer />
        </>
    )
}
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
    const affiliateProjectOpacity = useTransform(scrollY, [0, 400, 600, 1100], [0, 1, 1, 0])
    const affiliateProjectTranslate = useTransform(scrollY, [300, 500], ['-100%', '0%'])
    const [heroText, setHeroText] = useState(words[0])

    let index = 1;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (index === words.length - 1) {
                clearInterval(interval)
            }
            setHeroText(words[index++])
        }, 1000)
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
                    left: left
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
                            width={30}
                            height={30}
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
                <div id="affiliateNetwork" className={styles.affiliateNetwork}>
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
                <div id="socialMedia" className={styles.socialMedia}>
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
                {/* Streaming Solutions */}
                <div id="streamingSolutions" className={styles.streamingSolutions}>
                    <h2 className={styles.secondaryHeader}>Streaming Projects and Platform</h2>
                    <h1 className={styles.title}>Streaming Solutions</h1>
                    <span className={styles.text}>
                        Variety of streaming solutions for companies interested in promoting their products and services. 
                        with a large network of professional streamers, we can reach different audiences worldwide. 
                        Optimo Group owns dedicated streamers platform, {`"`}Streamers Club{`"`} to enhance business solutions.
                    </span>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                        <div className={styles.image}>
                            <Image
                                src="/images/Streaming Solutions.png"
                                alt="Streaming Solutions"
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>
                </div>
                {/* Startup Incubator */}
                <div id="startupIncubator" className={styles.startupIncubator}>
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
                    <span className={styles.text}>
                        We assist new startups to succeed: solving some of the problems associated with mentoring, 
                        training, and running startups by providing workspace and funding. Our Support means to 
                        take the form of access to experienced mentors with relevant area expertise.
                    </span>
                </div>
                {/* Projects */}
                <div id="projects" className={styles.projects}>
                    <h2 className={styles.secondaryHeader}>To Make Peoples Life Better</h2>
                    <h1 className={styles.title}>Projects</h1>
                    <span className={styles.text}>
                        We are building in-house international projects to make people{`'`}s life better,
                        like Marketing automation software, and crypto payment gateways.
                    </span>
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
                </div>
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
                            <h2 className={styles.secondaryHeader}>Phone</h2>
                            <span className={styles.text}>+995 958 23 08 23</span>
                        </div>
                        <div className={styles.contactItem}>
                            <h2 className={styles.secondaryHeader}>Address</h2>
                            <span className={styles.text}>Cyprus, Limassol, 36 Agias Fylaxeos, 3rd Floor</span>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBg}/>
                    </div>
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
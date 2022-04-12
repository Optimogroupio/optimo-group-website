import Head from 'next/head'
import styles from '/styles/pages/Home.module.css'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'

const words = [
    'Digital world',
    'Business',
    'Users',
    'Everybody'
]
export default function Home() {
    const { scrollY } = useViewportScroll()
    const expandWidth = useTransform(scrollY, [0, 400], ['80vw', '100vw'])
    const expandHeight = useTransform(scrollY, [0, 400], ['30vh', '100vh'])
    const top = useTransform(scrollY, [0, 400], ['35%', '0%'])
    const left = useTransform(scrollY, [0, 400], ['10%', '0%'])
    const opacity = useTransform(scrollY, [0, 400], [1, 0])
    const bgPosition = useTransform(scrollY, [0, 2900, 5900], ['40%', '100%', '200%'])
    const affiliateNetworkParallax = useTransform(scrollY, [0, 400, 600, 1000], [100, 100, 100, -200])
    const affiliateNetworkOpacity = useTransform(scrollY, [0, 500, 700, 1100], [0, 1, 1, 0])
    const affiliateProjectParallax = useTransform(scrollY, [1800, 2400], [0, -200])
    const socialMediaParallax = useTransform(scrollY, [2700, 2900], [0, -100])
    const streamingSolutionsImage = useTransform(scrollY, [3800, 4400], ['0%', '-60%'])
    const streamingSolutionsOpacity = useTransform(scrollY, [2700, 3400, 3600, 4400], [0, 1, 1, 0])
    const startupIncubatorImage = useTransform(scrollY, [3700, 4400], ['-100%', '0%'])
    const startupIncubatorOpacity = useTransform(scrollY, [3500, 4400, 4800, 5200], [0, 1, 1, 0])
    const projectsParallax = useTransform(scrollY, [5700, 5900], [0, 100])
    const projectsOpacity = useTransform(scrollY, [5100, 5300, 5900, 6300], [0, 1, 1, 0])
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
                        height: expandHeight,
                        width: expandWidth,
                        top: top,
                        left: left,
                        backgroundPositionY: bgPosition
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
            <div id="top" className={styles.container}>
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
                {/* Affiliate project */}
                <motion.div 
                    id="affiliateProject" 
                    className={styles.affiliateProject}
                    style={{
                        opacity: affiliateNetworkOpacity,
                    }}
                >
                    <motion.div 
                        className={styles.column}
                        style={{
                            translateY: affiliateNetworkParallax,
                        }}
                    >
                        <div className={styles.imageBg} />
                        <div className={styles.image}>
                            <Image
                                src="/images/Affiliate Network.png"
                                alt="Affiliate Network"
                                width={800}
                                height={800}
                            />
                        </div>
                    </motion.div>
                    <div className={styles.column}>
                        <h2 className={styles.secondaryHeader}>Global 10 Projects</h2>
                        <h1 className={styles.title}>
                            Affiliate
                        </h1>
                        <h1 className={styles.title}>
                            Project
                        </h1>
                        <span className={styles.text}>
                            10 successful projects in the affiliate marketing igaming field. 
                            Now we are in 21 countries and still growing {'<3 '} 
                            We go worldwide to deliver unbelievable results for our users and partners.
                        </span>
                    </div>
                </motion.div>
                {/* Affiliate  */}
                <div id="affiliate" className={styles.affiliateBlock}>
                    <h1 className={styles.title}>Affiliate Network</h1>
                    <span className={styles.text}>
                        Multi-brand affiliate management software for your website.
                        Tailored digital solution to recruit affiliates and grow your affiliate network. 
                        Increase Revenues. Dedicated Support. Multiple Marketing Tools. 
                        Real-time Insights. Real-time Data.
                    </span>
                    <motion.div 
                        className={styles.imageContainer}
                        style={{
                            translateY: affiliateProjectParallax
                        }}
                    >
                        <div className={styles.imageBg} />
                        <div className={styles.image}>
                            <Image 
                                src="/images/Affiliate Project.png"
                                alt="Affiliate Project"
                                width={630}
                                height={630}
                            />
                        </div>
                    </motion.div>
                </div>
                {/* Social Media */}
                <div id="socialMedia" className={styles.socialMedia}>
                    <motion.div 
                        className={styles.column}
                        style={{
                            translateY: socialMediaParallax
                        }}
                    >
                        <h1 className={styles.title}>Betting Social Media</h1>
                        <span className={styles.text}>
                            Betting Social Media unifies a gambling-loving community. 
                            Tipsters from all over the world share their predictions for various sporting events. 
                            Customers have the opportunity to get in touch with each other, follow, discuss, engage, and more.
                            Best tipsters have a chance to win various prizes and rewards.
                        </span>
                    </motion.div>
                    <div className={styles.column}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageBg} />
                            <div className={styles.image} style={{right: 100, bottom: 0}}>
                                <Image 
                                    src="/images/Betting Social Media.png"
                                    alt="Betting Social Media"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Streaming Solutions */}
                <motion.div 
                    id="streamingSolutions" 
                    className={styles.streamingSolutions}
                    style={{
                        opacity: streamingSolutionsOpacity
                    }}
                >
                    <div className={styles.textContainer}>
                        <h2 className={styles.secondaryHeader}>Streaming Projects and Platform</h2>
                        <h1 className={styles.title}>Streaming Solutions</h1>
                        <span className={styles.text}>
                            Variety of streaming solutions for companies interested in promoting their products and services. 
                            with a large network of professional streamers, we can reach different audiences worldwide. 
                            Optimo Group owns dedicated streamers platform, {`"`}Streamers Club{`"`} to enhance business solutions.
                        </span>
                    </div>
                    <div 
                        className={styles.imageContainer}
                    >
                        <motion.div 
                            style={{
                                translateX: streamingSolutionsImage
                            }}
                            className={styles.imageBg} 
                        />
                        <div className={styles.image}>
                            <Image
                                src="/images/Streaming Solutions.png"
                                alt="Streaming Solutions"
                                width={500}
                                height={500}
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
                    <div className={styles.column}>
                        <h2 className={styles.secondaryHeader}>Create In-House</h2>
                        <h1 className={styles.title}>Startup Incubator</h1>
                        <div className={styles.imageContainer}>
                            <motion.div 
                                className={styles.imageBg} 
                                style={{
                                    translateX: startupIncubatorImage
                                }}
                            />
                            <div className={styles.image}>
                                <Image
                                    src="/images/Startup Incubator.png"
                                    alt="Startup Incubator"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.text}>
                            We assist new startups to succeed: solving some of the problems associated with mentoring, 
                            training, and running startups by providing workspace and funding. Our Support means to 
                            take the form of access to experienced mentors with relevant area expertise.
                        </span>
                    </div>
                </motion.div>
                {/* Projects */}
                <motion.div 
                    id='projects' 
                    className={styles.projects}
                    style={{
                        opacity: projectsOpacity
                    }}
                >
                    <div className={styles.column}>
                        <h2 className={styles.secondaryHeader}>To make peoples life better</h2>
                        <h1 className={styles.title}>Projects</h1>
                        <motion.span 
                            className={styles.text}
                            style={{
                                translateY: projectsParallax
                            }}
                        >
                            We are building in-house international projects to make people{`'`}s life better,
                            like Marketing automation software, and crypto payment gateways.
                        </motion.span>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageBg} />
                            <div className={styles.image} style={{bottom: '-100px'}}>
                                <Image
                                    src="/images/Projects.png"
                                    alt="Projects"
                                    width={800}
                                    height={800}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Contact Us */}
                <div id='contact' className={styles.contactUs}>
                    <div className={styles.column}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.secondaryHeader}>Have Any Questions? Don{`'`}t be shy</h2>
                            <h1 className={styles.title}>Contact Us</h1>
                        </div>
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
                    </div>
                    <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Agias+Filaxeos+36,+Limassol,+%D0%9A%D0%B8%D0%BF%D1%80/@34.6804168,33.0379092,17z/data=!3m1!4b1!4m5!3m4!1s0x14e73305db59320d:0xec1740b1cbe4d64a!8m2!3d34.6804124!4d33.0400979" className={styles.column}>
                        <div className={styles.imageContainer}>
                            <div className={styles.image}>
                                <Image
                                    src="/images/Maps.png"
                                    alt="Maps"
                                    width={980}
                                    height={1450}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </a>
                    <div className={styles.column}>
                        <h1 className={styles.title}>Menu</h1>
                        <a onClick={() => handleScroll('affiliate')}>Affiliate Network</a>
                        <a onClick={() => handleScroll('affiliateProject')}>Affiliate Project</a>
                        <a onClick={() => handleScroll('streamingSolutions')}>Streaming Solutions</a>
                        <a onClick={() => handleScroll('startupIncubator')}>Startup Incubator</a>
                        <a onClick={() => handleScroll('projects')}>Projects</a>
                    </div>
                </div>
                <Footer />
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
        </>
    )
}

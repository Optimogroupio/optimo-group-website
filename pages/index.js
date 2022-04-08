import Head from 'next/head'
import Header from '../components/Header'
import styles from '/styles/pages/Home.module.css'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
    const { scrollY } = useViewportScroll()
    const expandWidth = useTransform(scrollY, [0, 400], ['80vw', '100vw'])
    const expandHeight = useTransform(scrollY, [0, 400], ['30vh', '100vh'])
    const top = useTransform(scrollY, [0, 400], ['35%', '0%'])
    const left = useTransform(scrollY, [0, 400], ['10%', '0%'])
    const opacity = useTransform(scrollY, [0, 400], [1, 0])
    const affiliateNetworkParallax = useTransform(scrollY, [0, 400, 600, 1000], [0, -100, -150, -200])
    const affiliateProjectParallax = useTransform(scrollY, [1800, 2400], [0, -200])
    const socialMediaParallax = useTransform(scrollY, [2700, 2900], [0, -100])
    const streamingSolutionsImage = useTransform(scrollY, [3800, 4400], ['0%', '60%'])
    const startupIncubatorImage = useTransform(scrollY, [3700, 4400], ['-100%', '0%'])
    const streamingSolutionsOpacity = useTransform(scrollY, [2700, 3400, 3600, 4400], [0, 1, 1, 0])
    const startupIncubatorOpacity = useTransform(scrollY, [3500, 4400], [0, 1])

    function handleScroll(){
        const element = document.getElementById('affiliate')
        element.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    function printScroll(){
        console.log(window.scrollY)

    }

    useEffect(() => {
        window.addEventListener('scroll', printScroll)
        return () => {
            window.removeEventListener('scroll', printScroll)
        }
    }, [])

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
            <Header />
                <motion.div 
                    className={styles.backgroundImage} 
                    style={{
                        height: expandHeight,
                        width: expandWidth,
                        top: top,
                        left: left
                    }}
                />
                <motion.div 
                    className={styles.scrollDownContainer}
                    style={{
                        opacity: opacity
                    }}
                >
                    <div 
                        onClick={handleScroll}
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
                        Lorem Ipsum is simply Dummy 
                        Text of <span className={styles.highlight}> The Printing </span>
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
                {/* Affiliate */}
                <div id="affiliate" className={styles.affiliateBlock}>
                    <motion.div 
                        className={styles.column}
                        style={{
                            translateY: affiliateNetworkParallax
                        }}
                    >
                        <div className={styles.image} />
                    </motion.div>
                    <div className={styles.column}>
                        <h1 className={styles.title}>
                            Affiliate
                        </h1>
                        <h1 className={styles.title}>
                            Network
                        </h1>
                        <span className={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde maxime autem expedita similique, earum officia, 
                            soluta ullam illo pariatur corrupti doloremque qui nobis 
                            temporibus molestiae voluptatibus assumenda exercitationem 
                            nesciunt? Tempora repellendus est provident eos molestias at 
                            perspiciatis, ipsum voluptas obcaecati harum expedita beatae 
                            aspernatur sit voluptatibus a, maxime deserunt ab!
                        </span>
                    </div>
                </div>
                {/* Affiliate project */}
                <div id="affiliateProject" className={styles.affiliateProject}>
                    <h2 className={styles.secondaryHeader}>Global 10 Projects</h2>
                    <h1 className={styles.title}>Affiliate Project</h1>
                    <span className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci aut blanditiis ut in consequatur quaerat veritatis 
                        nesciunt id facilis quos!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Magni aliquam beatae totam sit harum odit architecto voluptas. 
                        Quaerat optio totam accusantium maxime! Quaerat iure quas deleniti culpa 
                        aliquam tempore autem nobis hic eius. Magnam, minima? Sint placeat 
                        laudantium exercitationem reiciendis.
                    </span>
                    <motion.div 
                        className={styles.imageContainer}
                        style={{
                            translateY: affiliateProjectParallax
                        }}
                    >
                        <div className={styles.image} />
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
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Amet quibusdam ea quae provident et placeat minus voluptatibus 
                            ex vero dolorum praesentium molestias iste, natus tempore 
                            assumenda officia ab dolorem commodi.
                        </span>
                    </motion.div>
                    <div className={styles.column}>
                        <div className={styles.imageContainer}>
                            <div className={styles.image} />
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Fugit distinctio fugiat quibusdam aperiam dolorum ipsa porro odit, 
                            corporis provident possimus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Fugit distinctio fugiat quibusdam aperiam dolorum ipsa porro odit, 
                            corporis provident possimus.
                        </span>
                    </div>
                    <div 
                        className={styles.imageContainer}
                    >
                        <motion.div 
                            style={{
                                translateX: streamingSolutionsImage
                            }}
                            className={styles.image} 
                        />
                    </div>
                </motion.div>
                {/* Startup Incubator */}
                <motion.div 
                    id="StartupIncubator" 
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
                                className={styles.image} 
                                style={{
                                    translateX: startupIncubatorImage
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.text}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Earum blanditiis ipsa repudiandae facere iure similique quo 
                            quae reprehenderit voluptatem eaque in, culpa voluptatum ut 
                            dignissimos sequi recusandae cupiditate praesentium animi, 
                            repellat dolores magni aperiam. At repudiandae excepturi libero 
                            voluptatibus amet.
                        </span>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

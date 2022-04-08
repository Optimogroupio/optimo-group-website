import Head from 'next/head'
import Header from '../components/Header'
import styles from '/styles/pages/Home.module.css'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function Home() {
    const { scrollY } = useViewportScroll()
    const expandWidth = useTransform(scrollY, [0, 600], ['80vw', '100vw'])
    const expandHeight = useTransform(scrollY, [0, 600], ['30vh', '100vh'])
    const top = useTransform(scrollY, [0, 600], ['35%', '0%'])
    const left = useTransform(scrollY, [0, 600], ['10%', '0%'])

    return (
        <>
            <Head>
                <title>Optimo Group</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel='preload' href='/fonts/TitilliumWeb-Regular.ttf' as='font' type='font/ttf' />
                <link rel='preload' href='/fonts/TitilliumWeb-Bold.ttf' as='font' type='font/ttf' />
                <link rel='preload' href='/fonts/TitilliumWeb-Light.ttf' as='font' type='font/ttf' />
                <link rel='preload' href='/fonts/TitilliumWeb-SemiBold.ttf' as='font' type='font/ttf' />
                <link rel='preload' href='/fonts/TitilliumWeb-ExtraLight.ttf' as='font' type='font/ttf' />
                
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
            <div className={styles.container}>
                {/* Hero */}
                <div className={styles.heroBlock}>
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
                <div className={styles.affiliateBlock}>
                    <div className={styles.column}>
                        <div className={styles.image} />
                    </div>
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
                <div className={styles.affiliateProject}>
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
                    <div className={styles.imageContainer}>
                        <div className={styles.image} />
                    </div>
                </div>
                {/* Social Media */}
                <div className={styles.socialMedia}>
                    <div className={styles.column}>
                        <h1 className={styles.title}>Betting Social Media</h1>
                        <span className={styles.text}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Amet quibusdam ea quae provident et placeat minus voluptatibus 
                            ex vero dolorum praesentium molestias iste, natus tempore 
                            assumenda officia ab dolorem commodi.
                        </span>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.imageContainer}>
                            <div className={styles.image} />
                        </div>
                    </div>
                </div>
                {/* Streaming Solutions */}
                <div className={styles.streamingSolutions}>
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
                    <div className={styles.imageContainer}>
                        <div className={styles.image} />
                    </div>
                </div>
                {/* Startup Incubator */}
                <div className={styles.startupIncubator}>
                    <div className={styles.column}>
                        <h2 className={styles.secondaryHeader}>Create In-House</h2>
                        <h1 className={styles.title}>Startup Incubator</h1>
                        <div className={styles.imageContainer}>
                            <div className={styles.image} />
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
                </div>
            </div>
        </>
    )
}

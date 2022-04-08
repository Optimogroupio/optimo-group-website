import Head from 'next/head'
import Header from '../components/Header'
import styles from '/styles/pages/Home.module.css'

export default function Home() {
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
            <div className={styles.container}>
                <div className={styles.backgroundImage} />
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
                <div/>
            </div>
        </>
    )
}

import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import layout from "../components/Layout"

export default function Home() {
    return (
        <Layout>
            <div className={styles.main}>
                <section className={styles.top_section}>
                    <div className={styles.ts_picture}>
                    <img className={styles.img} src="/colored_me.JPG"/>
                    </div>
                    <div className={styles.ts_right}>
                        <div className={styles.title}>
                            <p className={utilStyles.headingXl}>
                                I'm Jon, a senior in Computer Engineering and Statistics at Boston University.
                            </p>
                        </div>
                        <div className={styles.ts_body}>
                            <p className={utilStyles.bodyMd}>
                                And I love tackling tough math problems.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                This may seem a bit masochistic (just ask teenage me) but tough problems allow me to be both
                                logical and creative at the same time. They challenge me to make mistakes, and learn.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                And the solutions usually end up being pretty neat.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                While my passion lies with math and algorithms, I appreciate the need for responsive,
                                efficient, and elegant web design. I built this website to learn javascript, explore design, and showcase some
                                of my work in the process.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                Outside of coding I like to work go on jogs, play chess, and find cool coffee shops.
                                Feel free to look around and let me know you visited!
                            </p>

                        </div>

                    </div>

                </section>
            </div>
        </Layout>
    )
}
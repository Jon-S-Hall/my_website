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
                                Outside of class I like to work on projects, go on jogs, and play chess.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                I made this website to explore frontend dev and showcase some of my work.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                Feel free to look around and let me know you visited!
                            </p>

                        </div>

                    </div>

                </section>
            </div>
        </Layout>
    )
}
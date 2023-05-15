import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

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
                                About Jon
                            </p>
                        </div>
                        <div className={styles.ts_body}>
                            <p className={utilStyles.bodyMd}>
                                I need tums, cold brew, and air conditioning.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                I like concerts, chess, and movie theaters.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                I don't like for javascript and imposter syndrome.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                Otherwise, you know as much as I do.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    )
}

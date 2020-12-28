import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Projects.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
    return (
        <Layout>
            <body className={styles.proj_main}>
                <div className={styles.banner}>
                    <h1 className={utilStyles.heading2Xl}>
                        Projects
                    </h1>
                </div>
                <section className={styles.top_section}>
                    <div className={styles.project_set}>
                        <div className={styles.project}>
                            <h1 className={styles.proj_title}>
                                Lorelad
                            </h1>
                            <img className={styles.proj_img} src="dino_me.JPG"/>

                        </div>

                        <div className={styles.project}>
                            <h1 className={styles.proj_title}>
                                VR 4D Visualizer
                            </h1>
                            <img className={styles.proj_img} src="vr_me.jpg"/>

                        </div>
                    </div>
                    <div className={styles.project_set}>
                        <div className={styles.project}>

                        </div>
                        <div className={styles.project}>

                        </div>
                    </div>
                </section>
            </body>
        </Layout>
    )
}
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/Layout'
import styles from '../../styles/Project.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function VR_4D() {
    return (
        <Layout>
            <main className={styles.body}>
                <div className={styles.banner}>
                    <img className={styles.logo} src={"/LORELAD.png"}/>
                </div>
                <body className={styles.body}>
                <section className={styles.top_section}>
                    <div className={styles.text_div}>
                        <p className={utilStyles.headingXl}>
                            Abstract
                        </p>
                        <p className={utilStyles.bodyMd}>
                            The Low Resource Language Database (LORELAD) is a project that I designed to aid language preservation efforts. The project was selected to be part of the
                            BU Spark! Innovation Fellowship for the Fall 2020 semester. Along with guidance and funding, I got to interview and select 4 teammates to lead in
                            developing Lorelad.
                        </p>
                    </div>
                </section>
                </body>
            </main>
        </Layout>
    )
}
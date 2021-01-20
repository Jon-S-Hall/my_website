import Head from 'next/head'
import Layout, { siteTitle } from '../../components/Layout'
import styles from '../../styles/Project.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function MLD() {
    return (
        <Layout>
            <main className={styles.body}>
                <div className={styles.banner}>
                    <h1 className={utilStyles.heading2Xl}>
                        Multiple Language Discernment
                    </h1>
                </div>
                <body className={styles.body}>
                <section className={styles.top_section}>
                    <div className={styles.text_div}>
                        <p className={utilStyles.headingXl}>
                            Abstract
                        </p>
                        <p className={utilStyles.bodyMd}>
                            Multiple Language Discernment (MLD) is a research project I designed based on unmet technological needs for LORELAD.
                            MLD concerns itself with properly identifying how many languages, and what languages, are present in an audio file. Research will be grounded in existing
                            Language Recognition techniques with heavy adaptation. The project was accepted in BU's UROP program for spring 2021.
                        </p>
                    </div>
                </section>
                </body>
            </main>
        </Layout>
    )
}
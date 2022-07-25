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
                        Chexpert
                    </h1>
                </div>
                <body className={styles.body}>
                <section className={styles.top_section}>
                    <div className={styles.text_div}>
                        <p className={utilStyles.headingXl}>
                            Background
                        </p>
                        <p className={utilStyles.bodyMd}>
                            Chexpert is a tool I develop in my free time that quantitatively analyzes a players strengths and weaknesses. Using chess.com and lichess.com APIs, Chexpert
                            finds patterns in user game history
                        </p>
                    </div>
                </section>
                </body>
            </main>
        </Layout>
    )
}
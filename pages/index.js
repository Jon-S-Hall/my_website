import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <div className={styles.main}>
                        <p>Hey there!</p>
                        <p>I'm a computer engineering and statistics dual major at Boston University.</p>
                        <p>
                            And I like making things.
                        </p>
                    </div>
                </section>



            </Layout>

    )
}
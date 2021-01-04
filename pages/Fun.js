import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Projects.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Fun() {
    return (
        <Layout>
            <main className={styles.proj_main}>
                <h1 className={utilStyles.headingLg}>
                    Sorry! Page Under Construction.
                </h1>
            </main>
        </Layout>
    )
}


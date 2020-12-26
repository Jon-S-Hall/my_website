import Head from 'next/head'
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import { siteTitle } from '../components/Layout'
import styles from '../styles/Landing.module.css'

export default function LandingPage() {
    return (
        <section className={styles.main}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

            <div className={utilStyles.heading2Xl}>Hey I'm Jon!</div>
            <div className={utilStyles.headingXl}>
                <p>Computer Engineering and Statistics dual degree at Boston University.</p>
                <p>And I like making things.</p>
            </div>

            <Link href="Home">
                <button className={styles.button}>
                    <p className={utilStyles.headingLg}>Take a look</p>
                </button>
            </Link>
        </section>
    )
}
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Contact.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Contact_Me() {
    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.banner}>
                    <h1 className={utilStyles.heading2Xl}>
                        Contact Jon
                    </h1>

                    <h2 className={utilStyles.headingMd}>
                        Please feel free to reach out to me! As of January 2021, I'm looking for work for after graduation.
                        A resume can be produced upon request. I'll get back to you ASAP!
                    </h2>
                </div>
                <section className={styles.form_section}>
                <form className={styles.contact_form}>
                    <div>
                        <div className={styles.input_title}>
                            <h1 className={utilStyles.headingLg}>Name</h1>
                        </div>
                        <input className={styles.input_name} type="text"/>
                    </div>
                    <div>
                        <div className={styles.input_title}>
                            <h1 className={utilStyles.headingLg}>Email</h1>
                        </div>
                        <input className={styles.input_name} type="text"/>
                    </div>
                    <div className={styles.input_title}>
                        <h1 className={utilStyles.headingLg}>Subject</h1>
                    </div>
                    <input className={styles.input_name} type="text"/>

                    <div className={styles.input_title}>
                        <h1 className={utilStyles.headingLg}>Message</h1>
                    </div>
                    <input className={styles.input_name} type="field"/>
                    <div>
                        <button className={styles.submit}>Submit</button>
                    </div>

                </form>
                <div className={styles.art_div}>
                    <img className={styles.art} src="/cm_4.png"/>
                </div>
                </section>
            </div>
        </Layout>
    )
}
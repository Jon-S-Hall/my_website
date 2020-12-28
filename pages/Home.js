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
                                And I love tackling tough math problems.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                This may seem a bit masochistic (just ask teenage me) but tough problems allow me to be both
                                logical and creative at the same time. They challenge me to make mistakes, and learn.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                And the solutions usually end up being pretty neat.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                While my passion lies with math and algorithms, I appreciate the need for responsive,
                                efficient, and elegant web design. I built this website to learn javascript, explore design, and showcase some
                                of my work in the process.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                Outside of coding I like to go on long jogs, play chess, and find cool coffee shops.
                                Feel free to look around and let me know you visited!
                            </p>

                        </div>

                    </div>

                </section>
                <section className={styles.mid_section}>
                    <div className={styles.mid_div}>
                        <p className={utilStyles.heading2Xl}>
                            Interests
                        </p>
                        <ul className={styles.mid_list}>
                            <li> Jogs/long walks</li>
                            <li> Chess</li>
                            <li> Finding cool coffee shops</li>
                        </ul>
                    </div>
                    <div className={styles.mid_div}>
                        <h1 className={utilStyles.heading2Xl}>
                            Skills
                        </h1>
                        <div className={styles.skills_div}>
                            <div className={styles.skills_prog}>
                                <h1 className={utilStyles.headingMd}>
                                    Programming
                                </h1>
                                <ul className={styles.mid_list}>
                                    <li> C/C++</li>
                                    <li> Java</li>
                                    <li> Python</li>
                                    <li> Matlab</li>
                                </ul>
                            </div>
                            <div className={styles.skills_other}>
                                <h1 className={utilStyles.headingMd}>
                                    Other
                                </h1>
                                <ul className={styles.mid_list}>
                                    <li> Unity</li>
                                    <li> Ubuntu</li>
                                    <li> Agile</li>
                                    <li> Matlab</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        </Layout>
    )
}
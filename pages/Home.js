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
                                I'm Jon, Software Engineer at Microsoft	
                            </p>
                        </div>
                        <div className={styles.ts_body}>
                            <p className={utilStyles.bodyMd}>
                                and I'm a huge sucker for tech. 
                            </p>
                            <p className={utilStyles.bodyMd}>
                                I love learning about the latest advances in technology, and imagining how we can use these new tools to impact 					 people positively. 
                            </p>
                            <p className={utilStyles.bodyMd}>
                                Outside of work I tackle some of these projects and write about my progress <b>here</b>. I'll also talk about ideas that are beyond 					 my abilities <b>here</b>. 
                            </p>
                            <p className={utilStyles.bodyMd}>
                                While my passion lies with math and algorithms, I appreciate the need for responsive,
                                efficient, and elegant web design. I built this website to learn javascript, explore design, and showcase some
                                of my work in the process.
                            </p>
                            <p className={utilStyles.bodyMd}>
                                Feel free to look around and let me know you visited!
                            </p>
                        </div>
                    </div>
                </section>
                <div className={styles.mid_header}>
                    	 <p className={utilStyles.heading2Xl}> Technical Specifications: </p>
                </div>
                <section className={styles.mid_section}>
                    <div className={styles.mid_div}>
                        <p className={utilStyles.heading2Xl}>
                            Interests
                        </p>
                        <ul className={styles.mid_list}>
                            <li> Coding</li>
                            <li> Jogging/Hiking</li>
                            <li> Chess</li>
                            <li> Finding cool coffee shops with my girlfriend</li>

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
                                    <li> Agile/Scrum</li>
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

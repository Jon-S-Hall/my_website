import Head from 'next/head'
import Link from "next/link";
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
                                <Link href="/projects/Lorelad">
                                    <a>
                                        <div className={styles.proj_overlay}>
                                            <img className={styles.proj_img} src="lorelad_logo.png"/>
                                            <div className={styles.proj_descrip}>
                                                <p className={utilStyles.headingMd}>
                                                    A platform to share stories for dying languages.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>


                        </div>

                        <div className={styles.project}>
                            <h1 className={styles.proj_title}>
                                Machine Language Discernment
                            </h1>
                            <Link href={"/projects/MLD"}>
                                <a>
                                    <div className={styles.proj_overlay}>
                                        <img className={styles.proj_img} src="ld_tool.png"/>
                                        <div className={styles.proj_descrip}>
                                            <p className={utilStyles.headingMd}>
                                                Quantitative language recognition in audio recordings
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    </div>
                    <div className={styles.project_set}>
                        <div className={styles.project}>
                            <h1 className={styles.proj_title}>
                                Pipelined RISC-V Processor
                            </h1>
                            <Link href={"/projects/VR_4D"}>
                                <a>
                                    <div className={styles.proj_overlay}>
                                        <img className={styles.proj_img} src="RISCV_Processor.jpg"/>
                                        <div className={styles.proj_descrip}>
                                            <p className={utilStyles.headingMd}>
                                                5-stage RISC-V Pipelined Processor (Verilog Implemented)
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.project}>
                            <h1 className={utilStyles.headingXl}>VR 4D Visualizer</h1>
                            <Link href={"/projects/VR_4D"}>
                                <a>
                                    <div className={styles.proj_overlay}>
                                        <img className={styles.proj_img} src="vr_me.jpg"/>
                                        <div className={styles.proj_descrip}>
                                            <p className={utilStyles.headingMd}>
                                                Orthogonal projections from 4D space to a 3D plane.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>

                    </div>
                </section>
            <section className={styles.mid_section}>
                <div className={styles.banner}>
                    <h2 className={utilStyles.heading2Xl}>
                        Other projects
                    </h2>
                </div>
                <div className={styles.smaller_projects}>
                    <div className={styles.small_project}>
                        <h1 className={utilStyles.headingLg}>QIMS Publication</h1>
                        <Link href={"/projects/3DQI"}>
                            <a>
                                <div className={styles.proj_overlay}>
                                    <img className={styles.small_proj_img} src="qims_pub.png"/>
                                    <div className={styles.small_proj_descrip}>
                                        <p className={utilStyles.headingMd}>
                                            Research on statistical reproducibility of medical imaging
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.small_project}>
                        <h1 className={utilStyles.headingXl}>Chexpert</h1>
                        <Link href={"/projects/chexpert"}>
                            <a>
                                <div className={styles.proj_overlay}>
                                    <img className={styles.small_proj_img} src="chexpert_logo.png"/>
                                    <div className={styles.small_proj_descrip}>
                                        <p className={utilStyles.headingMd}>
                                            Chess tool to analyze player weaknesses
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.small_project}>
                        <h1 className={utilStyles.headingXl}>Android Apps</h1>
                        <Link href={"/projects/VR_4D"}>
                            <a>
                                <div className={styles.proj_overlay}>
                                    <img className={styles.small_proj_img} src="covidapp_login.png"/>
                                    <div className={styles.small_proj_descrip}>
                                        <p className={utilStyles.headingMd}>
                                            COVID monitor and 2d game
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.small_project}>
                        <h1 className={utilStyles.headingXl}>Class Projects</h1>
                    </div>
                </div>

            </section>
            </body>
        </Layout>
    )
}
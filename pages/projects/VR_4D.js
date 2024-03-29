import Head from 'next/head'
import Layout, { siteTitle } from '../../components/Layout'
import styles from '../../styles/Project.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function VR_4D() {
    return (
        <Layout>
            <main className={styles.body}>
                <div className={styles.banner}>
                    <h1 className={utilStyles.heading2Xl}>
                        VR 4D Visualization Tool
                    </h1>
                </div>
                <body className={styles.body}>
                <section className={styles.top_section}>
                    <div className={styles.text_div}>
                        <p className={utilStyles.headingXl}>
                            Summary
                        </p>
                        <p className={utilStyles.bodyMd}>
                            This project stemmed from a course I took in modern geometry. I set out to create a tool to help the visualization of 4D objects by utilizing Virtual Reality.
                            Prior to the technology, visualizations of active 4D objects was limited to (2D) computer screens. The added dimension offers valuable insights in visualizing
                            the properties of 4D shapes. The tool currently allows rotation of 4D hyper-shapes in 3D space (with possible rotation along all axis) but will be extended to
                            allow other forms of manipulation.
                        </p>
                    </div>
                </section>
                </body>
            </main>
        </Layout>
    )
}
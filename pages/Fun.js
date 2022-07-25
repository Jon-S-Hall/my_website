import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Projects.module.css'
import utilStyles from '../styles/utils.module.css'
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../pages/algorithms/Sorting"), {
    ssr: false,
});

export default function Fun() {
    return (
        <Layout>
            <main className={styles.proj_main}>
                <h1 className={utilStyles.headingLg}>
                    Jon's Blog (jlog)
                </h1>
		<p>
		    I have insufficient memory. So I like to write down my thoughts and feelings on issues (particularly on the social impact of tech) before they're 			    overwritten.
		</p>
            </main>
        </Layout>
    )
}


import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/rat.module.css'
import utilStyles from '../styles/utils.module.css'
import Timer from './api/Timer'
import { useState } from 'react';

export default function remote_association_test() {
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleStartTimer = () => {
        setIsTestStarted(true);
    };

    const handleTestEnd = (event) => {
        setIsTestStarted(false);
    };

    return (
        <Layout>
            <main className={styles.proj_main}>
                <div className={styles.banner}>
                    <h1 className={utilStyles.heading2Xl}>
                        Remote Association Test
                    </h1>
                    <p>This game tests an aspect of creativity, this one is timed. (WIP, test doesn't work yet :( )</p>
                </div>
                <section className={styles.top_section}>
                    <main className={styles.centered}>
                        {!isTestStarted && <button onClick={handleStartTimer}>Begin Test</button>}
                        {isTestStarted && <Timer />}
                        {isTestStarted && <button onClick={handleTestEnd}>End Test</button>}
                    </main>
                </section>
            </main>
        </Layout>
    )
}
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from "../styles/Shenanigans.module.css";
import utilStyles from '../styles/utils.module.css'
import dynamic from "next/dynamic";
import PassphraseProtected from './api/PassphraseProtected';

export default function Fun() {
    return (
            <PassphraseProtected>
                <main className={styles.main}>
                    <div className={styles.container}>
                    <h1 className={styles.headingLg}>
                        Sea Nanogen
                    </h1>
                    <a href="./Fun" className={styles.back_button}>Back</a>
                    <p>
                        FKA Seattle Shenanigans
                    </p>
                    <p>
                        FKA Seattle Shenanigans
                    </p>
                    <p>
                        FKA Seattle Shenanigans
                    </p>
                    <p>
                        FKA Seattle Shenanigans
                    </p>
                    <p>
                        FKA Seattle Shenanigans
                    </p>
                    <p>
                        FKA Seattle Shenanigans
                    </p>
                    </div>
                </main>
            </PassphraseProtected>
    )
}


import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Projects.module.css'
import utilStyles from '../styles/utils.module.css'
import dynamic from "next/dynamic";
import Link from "next/link";
import {useState} from "react";

export default function Fun() {
    return (
        <Layout>
            <main className={styles.centered}>
                <a className={utilStyles.button_style} href="/Shenanigans" title="GitHub">
                    Sea Nanogen
                </a>
            </main>
        </Layout>
    )
}


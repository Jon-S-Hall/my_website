import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function NavBar() {
    return(
        <div className={styles.nav_container}>
            <div className={styles.nav_panel}>
                <div className={styles.nav_panel}>
                    <div className={styles.nav_item}>
                         <Link href={"#"}>About</Link>
                    </div>
                    <div className={styles.nav_item}>
                        <Link href={"#"}>Projects</Link>
                    </div>
                    <div className={styles.nav_item}>
                        <Link href={"#"}>Resume</Link>
                    </div>
                    <div className={styles.nav_item}>
                        <Link href={"#"}>Fun</Link>
                    </div>

                </div>
            </div>
            <div className={styles.nav_title}>
                <h1 className={utilStyles.heading2Xl}>Jonathan Hall</h1>
            </div>
        </div>
    )
}

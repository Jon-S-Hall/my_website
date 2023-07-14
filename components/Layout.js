import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import NavBar from "./NavBar";
import Link from 'next/link'

export const siteTitle = "Jon Hall's Portfolio";

export default function Layout({ children, home }) {
    return (
        <div className={styles.page}>
            <Head>
                <link rel="icon" href="/JH.png" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <NavBar/>
            <div>
                 {children}
            </div>

            <footer className={styles.footer}>
                <div className={styles.sm_links}>
                    <li className={styles.footer_li}>
                        <a className={styles.github} href="https://github.com/Jon-S-Hall" title="GitHub">
                            <svg className={styles.footer_svg} viewBox="0 -90 400 700" preserveAspectRatio="xMidYMid meet" width="512" height="512">
                                <path
                                    d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className={styles.footer_li}>
                        <a className={styles.github} href="https://www.linkedin.com/in/jonathanshall/">
                            <svg className={styles.footer_svg}  viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="512" height="512">
                                <path
                                    d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className={styles.footer_li}>
                        <a className={styles.github} href="#" title="GitHub">
                            <svg className={styles.footer_svg} viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="512" height="512">
                                <path
                                    d="M294.8 361.2l-122 0.1 0-26 122-0.1L294.8 361.2zM377.2 213.7L356.4 93.5l-25.7 4.5 20.9 120.2L377.2 213.7zM297.8 301.8l-121.4-11.2 -2.4 25.9 121.4 11.2L297.8 301.8zM305.8 267.8l-117.8-31.7 -6.8 25.2 117.8 31.7L305.8 267.8zM321.2 238l-105-62 -13.2 22.4 105 62L321.2 238zM346.9 219.7l-68.7-100.8 -21.5 14.7 68.7 100.8L346.9 219.7zM315.5 275.5v106.5H155.6V275.5h-20.8v126.9h201.5V275.5H315.5z"></path>
                            </svg>
                        </a>
                    </li>
                </div>
                <div className={styles.footer_name}>Jonathan Hall 2023&#169;</div>
            </footer>
        </div>

    )

}
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/Layout'
import styles from '../../styles/Projects.module.css'
import utilStyles from '../../styles/utils.module.css'
import dynamic from "next/dynamic";

export default function Tech_Politics() {
    return (
        <Layout>
            <main className={styles.proj_main}>
                <h1 className={utilStyles.headingLg}>
                    On The technological and political gap
                </h1>
		<p>
		    As of this writing, Speculative Crypto-investing is all the hype, and next gen consoles (Ps5, xbox one) have been sold out for months. Also in the 
		    news: the Nigerian President has been assassinated, and Isreal has once again broken their peace treaty toward Palestine. 
		    
		    It is confounding how fast our technology advances compared to our socio-economic policies. Every year, without fail, we have a new iphone with a
		    handful of new features. If you haven't gotten a new laptop in the past 3 years, now it's noticably slower than anything on the market. 
		    
		    On the other hand, there are x countries that are ruled by a single family. y countries are ruled by a despot. z countries are in active civil 
		    war. Even in the US, Congress releases Bills whose consequences are entirely unknown. Our political understanding is light years behind 
		    our technology.
		    
		    It's so especially unsettling because as our technology advances, so does the power and influence single entities can hold. 
		   
		</p>
            </main>
        </Layout>
    )
}


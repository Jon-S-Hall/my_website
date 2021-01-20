import Head from 'next/head'
import Layout, { siteTitle } from '../../components/Layout'
import styles from '../../styles/Project.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function Lorelad() {
    return (
        <Layout>
            <main className={styles.body}>
                <div className={styles.banner}>
                    <img className={styles.logo} src={"/LORELAD.png"}/>
                </div>
                <body className={styles.body}>
                <section className={styles.top_section}>
                    <div className={styles.text_div}>
                        <p className={utilStyles.headingXl}>
                            Abstract
                        </p>
                        <p className={utilStyles.bodyMd}>
                            The Low Resource Language Database (LORELAD) is a project that I designed to aid language preservation efforts. The project was selected to be part of the
                            BU Spark! Innovation Fellowship for the Fall 2020 semester. Along with guidance and funding, I got to interview and select 4 teammates to lead in
                            developing Lorelad.
                        </p>

                        <p> </p>
                        <p>
                            <h2 className={utilStyles.headingXl}> Background</h2>
                        </p>
                        <p className={utilStyles.bodyMd}>
                            In my sophomore year, I took an intro to Linguistics class that I became really involved in. The complexity of language translation is fascinating. The function
                            of translating is <b>rarely</b> surjective or injective. This means even ideal translations aren't necessarily correct (which why famous works such as
                            <i> The Divine Comedy</i> or <i>The Illiad</i> have so many different versions).
                        </p>
                        <p className={utilStyles.bodyMd}>
                            My professor encouraged me to attend a talk (Professor Gina Anne Levow, <a href="https://digital.lib.washington.edu/researchworks/handle/1773/27514"> <u>Translation for Low Resource Languages) </u></a>
                            where I learned about our rapidly decreasing language diversity. Languages are dying at an alarming rate, and by the year 2100, there are estimates that only about 10% of the world's 7000 or so
                            actively spoken languages will still be spoken.

                        </p>
                        <p className={utilStyles.bodyMd}>
                            Among other things, this is largely due to our globalizing world economy. In order to trade and do business, we need a common language to understand each other. So, in school we're taught
                            English, Chinese, French, Spanish, and German. The majority of the world proficiently speaks <i>atleast </i> one of these 5 languages.
                        </p>

                        <p className={utilStyles.bodyMd}>
                            The availability and demand for worldly languages has made local languages redundant as a tool to communicate. <b>But language is so much more than a tool.</b> The way we speak helps define who we are.
                            Language holds our culture, our heritage, and our history. And many are dying. It's often hard to see because the state of a language is determined by each generation.
                        </p>
                        <p className={utilStyles.bodyMd}>
                            In school we're taught worldly languages, and we're encouraged to speak them with our friends and teachers. But at home, we likely still speak our parent's native language,
                            and engage in our parent's traditions. This generation is properly bilingual. However, when this generation has kids, they likely speak their worldly language at home.
                            The kids may still practice the traditions native to their grandparents, and they may still be taught their local language, but usually they speak brokenly and illiteracy is
                            common. By the next generation, the local language is usually no longer practiced, and the cultural connection is severed.
                        </p>

                        <p className={utilStyles.headingXl}>
                            Lorelad
                        </p>

                        <p className={utilStyles.bodyMd}>
                            While grim, this was largely the motivation that inspired LORELAD. I set out to help language preservation given my skills and resources. Being interested in Natural Language Processing and
                            Software, I set on creating a platform for low resource language speakers to share stories in their native language. These stories could be recipes, folk tales, beliefs, music, or really anything.
                            I want Lorelad to be a place to connect culturally with others that share your language. Where people can come explore, and learn about languages other than their own.

                        </p>
                        <p className={utilStyles.bodyMd}>
                            I also want Lorelad to serve as a public repository for low resource language data. The <b>magic wand solution</b> being that if we create a machine translator that's good and accessible enough,
                            we won't ever have to give up our local languages for worldly ones.
                        </p>
                    </div>
                </section>

                <section className={styles.mid_section}>

                </section>

                <section className={styles.bot_section}>
                    <div className={styles.tools_div}>
                        <p className={utilStyles.headingXl}>
                            Tools Used:
                        </p>
                    </div>
                </section>
                </body>
            </main>
        </Layout>
    )
}


import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/rat.module.css'
import utilStyles from '../styles/utils.module.css'
import Timer from './api/Timer'
import { useState } from 'react';
import { parse } from 'papaparse';
import fs from 'fs';
import path from 'path';

export default function remote_association_test({ questions }) {

    const answers = questions.map((q) => q.answer);
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [inputValues, setInputValues] = useState({});
    const [testScore, setTestScore] = useState(-1);

    const handleStartTimer = () => {
        setIsTestStarted(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleTestEnd = (event) => {
        setIsTestStarted(false);
        // You can process the submitted answers here and compare with the correct answers (in 'answers' array)
        const userAnswers = Object.values(inputValues);
        const score = calculateScore(userAnswers, answers);
        // Display the score on the webpage
        setTestScore(score);
    };

    return (
        <Layout>
            <main className={styles.proj_main}>
                <div className={styles.banner}>
                    <h1 className={utilStyles.heading2Xl}>
                        Remote Association Test
                    </h1>
                    <p>This game tests an aspect of creativity, this one is timed.</p>
                </div>
                <section className={styles.test_section}>
                        {isTestStarted ? (
                            <div className={styles.test_wrapper}>
                                <Timer/>
                                <form className = {styles.form}>
                                    {questions.map((question, index) =>(
                                        <div className={styles.question_wrapper}>
                                            <div className={styles.question_prompt}
                                                 htmlFor={`question${index+1}`}>
                                                {question.question}
                                            </div>
                                            <input
                                                type={"hidden"}
                                                name={`correctAnswers${index}`}
                                                value={question.answer}
                                            />
                                            <input
                                                type={"text"}
                                                name={`answer${index}`}
                                                value={inputValues[`answer${index}`] || ''}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    ))}
                                    <button onClick={handleTestEnd}>Submit</button>
                                </form>
                            </div>
                        ) : (
                            <div className={styles.test_wrapper}>
                                <button className={styles.button} onClick={handleStartTimer}>Begin Test</button>
                                {testScore>=0? (
                                    <div className={styles.score_wrapper}>You Scored: {testScore} out of 5!</div>
                                ): (<></>)}
                            </div>
                            )}
                </section>
            </main>
        </Layout>
    )
}

// Helper function to calculate the score
function calculateScore(userAnswers, correctAnswers) {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        const userAnswerCleaned = userAnswers[i].trim().toLowerCase();
        const correctAnswerCleaned = correctAnswers[i].trim().toLowerCase();

        if (userAnswerCleaned === correctAnswerCleaned) {
            score++;
        }
    }
    return score;
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/rat_questions.csv');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = parse(fileContents, { header: true });

    // Randomly select 10 questions
    const shuffledQuestions = data.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 5);

    return {
        props: {
            questions: selectedQuestions,
        },
    };
}
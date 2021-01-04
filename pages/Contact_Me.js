import Head from 'next/head'
import {Component} from 'react'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Contact.module.css'
import utilStyles from '../styles/utils.module.css'

class Contact_Me extends Component{

    state = {
        name: "",
        email: "",
        subject: "",
        message:""
    }


    onChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        this.setState((prevState)=>{
            const newState = {...prevState};
            newState[name] = value;
            return newState
        });
    }


    handle_submit = (event, data) => {
        event.preventDefault();
        alert("Contacting not set up! Please email me at: jshall@bu.edu")
    }


    render() {
        return (
            <Layout>
                <div className={styles.main}>
                    <div className={styles.banner}>
                        <h1 className={utilStyles.heading2Xl}>
                            Contact Jon
                        </h1>

                        <h2 className={utilStyles.headingMd}>
                            Please feel free to reach out to me! As of January 2021, I'm looking for work for after
                            graduation.
                            A resume can be produced upon request. I'll get back to you ASAP!
                        </h2>
                    </div>
                    <section className={styles.form_section}>
                        <form className={styles.contact_form} onSubmit={this.handle_submit}>
                            <div>
                                <div className={styles.input_title}>
                                    <h1 className={utilStyles.headingLg}>Name</h1>
                                </div>
                                <input className={styles.input_name} value={this.state.name} onChange={this.onChange} type="text" id="name" required/>
                            </div>
                            <div>
                                <div className={styles.input_title}>
                                    <h1 className={utilStyles.headingLg}>Email</h1>
                                </div>
                                <input className={styles.input_name} value={this.state.email} onChange={this.onChange} type="text" id="email"/>
                            </div>
                            <div className={styles.input_title}>
                                <h1 className={utilStyles.headingLg}>Subject</h1>
                            </div>
                            <input className={styles.input_name} type="text" onChange={this.onChange} value={this.state.subject} id="subject"/>

                            <div className={styles.input_title}>
                                <h1 className={utilStyles.headingLg}>Message</h1>
                            </div>
                            <textarea className={styles.input_message} value={this.state.message} onChange={this.onChange} id="message" required/>
                            <div>
                                <button className={styles.submit} type="submit">Submit</button>
                            </div>

                        </form>
                        <div className={styles.art_div}>
                            <img className={styles.art} src="/cm_4.png"/>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Contact_Me;
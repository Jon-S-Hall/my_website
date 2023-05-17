import { useState } from 'react';
import styles from "../../styles/Shenanigans.module.css";

const PassphraseProtected = ({ children }) => {
    const [passphrase, setPassphrase] = useState('');
    const [accessGranted, setAccessGranted] = useState(false);
    const [showTextbox, setShowTextbox] = useState(false);

    const correctPassphrase = "SeattleShenanigans"; // Replace with your passphrase

    const checkPassphrase = (enteredPassphrase) => {
        if (enteredPassphrase === correctPassphrase) {
            setAccessGranted(true);
            setShowTextbox(false);
        } else {
            setShowTextbox(true);
        }
    }

    return (
        <>
            {accessGranted ? (
                children
            ) : (
                <div className={styles.center_content}>
                    <section className={styles.top_section}>
                        <input
                            type="text"
                            value={passphrase}
                            onChange={(e) => setPassphrase(e.target.value)}
                            placeholder="? ? ? ? ? ? ? ? ? ? ? ?"
                        />
                        <button onClick={() => checkPassphrase(passphrase)}>Stuff</button>
                        {showTextbox && <div className={styles.wrong_password_div}>:(</div>}
                    </section>
                </div>
            )}
        </>
    );
}

export default PassphraseProtected;

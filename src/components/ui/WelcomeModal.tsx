'use client';

import { useState, useEffect } from 'react';
import styles from './WelcomeModal.module.css';

export default function WelcomeModal() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Check if user has already "entered" in this session
        const hasEntered = sessionStorage.getItem('hasEnteredTheDinner');
        if (hasEntered) {
            setIsVisible(false);
        }
    }, []);

    const handleEnter = () => {
        setIsExiting(true);
        sessionStorage.setItem('hasEnteredTheDinner', 'true');

        // Wait for animation to finish
        setTimeout(() => {
            setIsVisible(false);
        }, 800);
    };

    if (!isVisible) return null;

    return (
        <div className={`${styles.overlay} ${isExiting ? styles.fadeOut : ''}`}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <span className={styles.subtitle}>A romance novel based on the true stories</span>
                    <h1 className={styles.title}>The Dinner</h1>
                </div>

                <button
                    className={styles.enterButton}
                    onClick={handleEnter}
                >
                    <span className={styles.buttonText}>Enter the Experience</span>
                    <div className={styles.buttonGlow}></div>
                </button>

                <div className={styles.footer}>
                    <p>San Francisco ✦ Toronto</p>
                </div>
            </div>

            <div className={styles.background}>
                <div className={styles.vignette}></div>
            </div>
        </div>
    );
}

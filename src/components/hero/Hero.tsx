'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import styles from './Hero.module.css';

function HeroContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');
    const isLaGloria = source === 'lagloria';

    return (
        <>
            {isLaGloria && (
                <div className="welcome-banner">
                    ✦ Welcome to The Dinner ✦
                </div>
            )}

            <section className={styles.hero}>
                {/* Background Image Layer */}
                <div className={styles.imageBackground}>
                    <div className={styles.overlay}></div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <div className={styles.titleWrapper}>
                        <span className={styles.preTitle}>A Romance Novel based on true stories</span>
                        <h1 className={styles.title}>The Dinner</h1>
                        <p className={styles.tagline}>
                            A love story served between two cities.
                        </p>
                        <p className={styles.releaseDate}>
                            Coming in 2026 May
                        </p>
                    </div>

                    <div className={styles.ctas}>
                        <a href="#choose-your-path" className={`btn-primary ${styles.ctaPrimary}`}>
                            Enter the Dinner
                        </a>
                        <a href="#newsletter" className={`btn-secondary ${styles.ctaSecondary}`}>
                            Get Love Letters
                        </a>
                    </div>

                    <div className={styles.cities}>
                        <span className={styles.city}>San Francisco</span>
                        <span className={styles.cityDivider}>✦</span>
                        <span className={styles.city}>Toronto</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className={styles.scrollIndicator}>
                    <span>Scroll to begin</span>
                    <div className={styles.scrollLine}></div>
                </div>
            </section>
        </>
    );
}

export default function Hero() {
    return (
        <Suspense fallback={<div className={styles.hero}></div>}>
            <HeroContent />
        </Suspense>
    );
}

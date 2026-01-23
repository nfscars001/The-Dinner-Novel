'use client';

import Link from 'next/link';
import styles from './PathHero.module.css';

interface PathHeroProps {
    title: string;
    subtitle: string;
    currentStep: number;
    totalSteps: number;
    backLink?: string;
    backText?: string;
}

export default function PathHero({
    title,
    subtitle,
    currentStep,
    totalSteps,
    backLink = '/',
    backText = 'Back to Choose Your Path'
}: PathHeroProps) {
    return (
        <div className={styles.hero}>
            <div className={styles.background}>
                {/* Background effects can be passed or hardcoded for now, rely on parent class */}
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <Link href={backLink} className={styles.backLink}>
                    ← {backText}
                </Link>

                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>

                <div className={styles.progress}>
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dot} ${i + 1 <= currentStep ? styles.dotActive : ''}`}
                            aria-label={`Step ${i + 1} of ${totalSteps}`}
                        />
                    ))}
                    <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Course {currentStep} of {totalSteps}
                    </span>
                </div>
            </div>
        </div>
    );
}

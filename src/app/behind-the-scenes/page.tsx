'use client';

import Link from 'next/link';
import styles from './bts.module.css';

export default function BehindTheScenes() {
    return (
        <main className={styles.main}>
            {/* Header */}
            <header className={styles.header}>
                <Link href="/room" className={styles.backLink}>← Back to Room</Link>
                <h1 className={styles.title}>Behind the Scenes</h1>
                <p className={styles.subtitle}>The real rooms behind the fictional dinner.</p>
                <div className={styles.disclaimer}>
                    <span>Inspired by real places. Fiction shaped the rest.</span>
                </div>
            </header>

            {/* Coming Soon */}
            <section className={styles.comingSoon}>
                <div className={styles.comingSoonInner}>
                    <span className={styles.comingSoonIcon}>🎞</span>
                    <h2 className={styles.comingSoonTitle}>Albums Coming Soon</h2>
                    <p className={styles.comingSoonText}>
                        We're still developing the behind-the-scenes collection.<br />
                        Check back soon for a look at the real places that shaped the story.
                    </p>
                </div>
            </section>

            {/* Global CTA Block */}
            <section className={styles.ctaBlock}>
                <h2>Keep Exploring</h2>
                <div className={styles.ctaActions}>
                    <Link href="/#newsletter" className="btn-primary">Sign up for Newsletter</Link>
                    <Link href="/" className="btn-secondary">Back to Home</Link>
                </div>
            </section>
        </main>
    );
}

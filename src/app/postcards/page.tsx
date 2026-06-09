'use client';

import Link from 'next/link';
import styles from './postcards.module.css';

export default function Postcards() {
    return (
        <main className={styles.main}>
            {/* Ambient Background Element */}
            <div className={styles.ambientGlow}></div>

            <div className={styles.container}>
                <Link href="/room" className={styles.backLink}>← Back to Room</Link>
                
                <div className={styles.content}>
                    <span className={styles.preTitle}>The Bar Area</span>
                    <h1 className={styles.title}>Postcards from The Dinner</h1>
                    
                    <p className={styles.message}>
                        Send a line from the book like a secret note.
                    </p>
                    
                    <div className={styles.comingSoonBox}>
                        <h2 className={styles.comingSoonText}>Coming Soon</h2>
                        <p className={styles.comingSoonDesc}>
                            We are currently crafting this experience. Sign up to receive the first virtual postcard when it opens.
                        </p>
                    </div>

                    <div className={styles.ctaActions}>
                        <Link href="/#newsletter" className={`btn-primary ${styles.primaryBtn}`}>
                            Sign Up for Updates
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Global Footer CTA Block */}
            <div className={styles.footerBlock}>
                <Link href="/" className="btn-secondary">Return to the Entrance</Link>
            </div>
        </main>
    );
}

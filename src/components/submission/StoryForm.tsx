'use client';

import Script from 'next/script';
import styles from './StoryForm.module.css';

export default function StoryForm() {
    return (
        <section id="share-your-story" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Your Turn</span>
                    <h2 className={styles.title}>Share Your Story</h2>
                    <p className={styles.subtitle}>
                        Every love has a story worth telling. Share yours, and it might just
                        inspire the next chapter of someone else's journey.
                    </p>
                </div>

                <div className={styles.formContainer}>
                    <div data-tf-live="01KFME0H5QPHKN5BWP0TKFTAGJ"></div>
                    <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
                </div>
            </div>
        </section>
    );
}


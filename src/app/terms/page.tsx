import Link from 'next/link';
import styles from '../legal.module.css';

export default function TermsPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <p className={styles.lastUpdated}>Last Updated: January 2026</p>
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                        <p className={styles.text}>
                            By accessing or using "The Dinner" website, you agree to be bound by these
                            Terms of Service. If you do not agree with any part of these terms,
                            you should not use the site.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Intellectual Property</h2>
                        <p className={styles.text}>
                            All content on this site, including but not limited to text, graphics,
                            skylines, and cinematic excerpts, is the property of "The Dinner" and
                            its authors. You may not reproduce or distribute any content without
                            prior written permission.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. User-Generated Content</h2>
                        <p className={styles.text}>
                            When you submit a story to our "Community Wall," you grant us a
                            non-exclusive, world-wide, royalty-free license to display and
                            promote your story on this website and associated social media platforms.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>You retain ownership of your story.</li>
                            <li className={styles.listItem}>Your story will be subject to moderation before appearing live.</li>
                            <li className={styles.listItem}>We reserve the right to remove any content at our discretion.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Community Conduct</h2>
                        <p className={styles.text}>
                            By using the interaction features of this site, you agree not to submit
                            content that is offensive, defamatory, or violates the rights of third parties.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Disclaimers</h2>
                        <p className={styles.text}>
                            "The Dinner" cinematic experience is provided "as is." We are not
                            responsible for any emotional distress or technical issues that
                            may arise from using our site.
                        </p>
                    </section>

                    <Link href="/" className={styles.backHome}>
                        ← Back to the Story
                    </Link>
                </div>
            </div>
        </main>
    );
}

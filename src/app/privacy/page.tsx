import Link from 'next/link';
import styles from '../legal.module.css';

export default function PrivacyPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: January 2026</p>
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Introduction</h2>
                        <p className={styles.text}>
                            Welcome to "The Dinner." We respect your privacy and are committed to protecting
                            the personal information you share with us while navigating this cinematic experience.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
                        <p className={styles.text}>
                            We collect information in two main ways:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>Newsletter Subscription:</strong> We collect your email address
                                to send you "Love Letters" and updates about the novel.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Story Submissions:</strong> When you share your love story,
                                we collect your display name, story text, and optionally your email.
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
                        <p className={styles.text}>
                            Your data is used solely to enhance your experience:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>To deliver the newsletter updates you signed up for.</li>
                            <li className={styles.listItem}>To display approved stories on our "Community Wall."</li>
                            <li className={styles.listItem}>To improve the aesthetic and functional performance of the site.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Data Security</h2>
                        <p className={styles.text}>
                            We use Supabase for secure data storage. While no system is 100% secure,
                            we implement Row Level Security (RLS) to ensure that your private data
                            remains protected from unauthorized access.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Your Rights</h2>
                        <p className={styles.text}>
                            You have the right to request a copy of the data we hold about you or
                            to ask for its deletion at any time. To do so, please contact us through
                            our Instagram channel.
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

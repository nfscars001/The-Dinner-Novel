import styles from './hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.skyline}>
                {/* Placeholder for skyline implementation - can be SVG or Image */}
                <div className={styles.sf}></div>
                <div className={styles.toronto}></div>
            </div>

            <div className={styles.overlay}>
                <div className={styles.fog}></div>
                <div className={styles.sparkles}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>The Dinner</h1>
                <p className={styles.tagline}>A love story served between two cities.</p>

                <div className={styles.actions}>
                    <button className={`${styles.btn} ${styles.btnPrimary}`}>Enter the Dinner</button>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>Get Love Letters</button>
                </div>
            </div>
        </section>
    );
}

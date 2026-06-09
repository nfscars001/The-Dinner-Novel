import Link from 'next/link';
import styles from './WalkTheRoom.module.css';

export default function WalkTheRoom() {
    return (
        <section id="walk-the-room" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span className={styles.preTitle}>Immersive Experience</span>
                        <h2 className={styles.title}>Walk the Room</h2>
                        <p className={styles.subtitle}>
                            A fine-dining space filled with story corners. Explore what Jasper couldn’t say out loud.
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/room" className={`btn-primary ${styles.primaryBtn}`}>
                            Enter the Floorplan
                        </Link>
                        <Link href="/jasper-gallery" className={`btn-secondary ${styles.secondaryBtn}`}>
                            View Jasper’s Gallery
                        </Link>
                    </div>

                    <p className={styles.note}>
                        Mobile-friendly guided tour included.
                    </p>
                </div>
            </div>
            
            {/* Decorative background elements matching fine-dining vibe */}
            <div className={styles.bgGlow}></div>
        </section>
    );
}

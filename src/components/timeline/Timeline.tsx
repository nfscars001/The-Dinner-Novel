'use client';
import { useState } from 'react';
import styles from './timeline.module.css';

type Milestone = {
    year: string;
    title: string;
    description: string;
    position: number; // percentage from left
};

const milestones: Milestone[] = [
    { year: '2020', title: 'The Meeting', description: 'A chance encounter in San Francisco.', position: 10 },
    { year: '2023', title: 'The Departure', description: 'One ticket to Toronto. Two broken hearts.', position: 40 },
    { year: '2024', title: 'The Silence', description: 'Letters written but never sent.', position: 65 },
    { year: '2029', title: 'The Dinner', description: 'The table is set. The story ends (or begins).', position: 90 },
];

export default function Timeline() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section className={styles.container}>
            <div className={styles.mapBackground}>
                {/* Placeholder for Map Visualization */}
                <div className={styles.mapLine}></div>
            </div>

            <div className={styles.timelineContainer}>
                <h2 className={styles.heading}>The Journey</h2>

                <div className={styles.track}>
                    {milestones.map((m, idx) => (
                        <div
                            key={m.year}
                            className={`${styles.node} ${activeIdx === idx ? styles.active : ''}`}
                            style={{ left: `${m.position}%` }}
                            onMouseEnter={() => setActiveIdx(idx)}
                            onMouseLeave={() => setActiveIdx(null)}
                            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                        >
                            <span className={styles.year}>{m.year}</span>
                            <div className={styles.dot}></div>

                            <div className={styles.panel}>
                                <h3 className={styles.panelTitle}>{m.title}</h3>
                                <p className={styles.panelDesc}>{m.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

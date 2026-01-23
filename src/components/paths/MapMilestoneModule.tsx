'use client';

import { useState } from 'react';
import styles from './MapMilestoneModule.module.css';

interface Milestone {
    year: string;
    teaser: string;
}

const milestones: Milestone[] = [
    { year: '2020', teaser: 'The Departure. A ticket bought with shaking hands.' },
    { year: '2023', teaser: 'The Almost-Return. Standing at the gate, then walking away.' },
    { year: '2024', teaser: 'The Silence. Letters written but never mailed.' },
    { year: '2029', teaser: 'The Reunion. The table is finally set.' },
];

export default function MapMilestoneModule() {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);

    const handleNodeClick = (year: string) => {
        if (selectedYear === year) {
            setSelectedYear(null);
        } else {
            setSelectedYear(year);
            // Track event here if needed
            console.log('Event: milestone_node_opened', { year });
        }
    };

    const currentMilestone = milestones.find(m => m.year === selectedYear);

    return (
        <div className={styles.container}>
            <div className={styles.mapWrapper}>
                {/* SVG dashed line */}
                <svg className={styles.lineSvg} width="100%" height="100%" preserveAspectRatio="none">
                    <path
                        d="M 20,30 Q 400,0 780,30" /* Simplified curve for demo, responsiveness handled by CSS mostly but path might need JS for perfect curve on resize. Keeping simple for MVP */
                        className={styles.pathLine}
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                <div className={styles.nodes}>
                    <div style={{ position: 'absolute', left: 0, top: '40%', fontSize: '0.8rem', color: 'var(--text-muted)' }}>SF</div>

                    {milestones.map((m) => (
                        <button
                            key={m.year}
                            className={`${styles.nodeBtn} ${selectedYear === m.year ? styles.activeNode : ''}`}
                            onClick={() => handleNodeClick(m.year)}
                            aria-label={`View details for ${m.year}`}
                        >
                            {m.year}
                        </button>
                    ))}

                    <div style={{ position: 'absolute', right: 0, top: '40%', fontSize: '0.8rem', color: 'var(--text-muted)' }}>TO</div>
                </div>
            </div>

            {currentMilestone && (
                <div className={styles.teaserCard}>
                    <span className={styles.teaserYear}>{currentMilestone.year}</span>
                    <p className={styles.teaserText}>{currentMilestone.teaser}</p>
                </div>
            )}

            {!currentMilestone && (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '1rem' }}>
                    Tap a year to trace the path.
                </p>
            )}
        </div>
    );
}

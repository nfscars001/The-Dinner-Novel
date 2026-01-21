'use client';

import { useState } from 'react';
import styles from './ChooseYourPath.module.css';

interface PathData {
    id: string;
    title: string;
    subtitle: string;
    teaser: string;
    quote: string;
}

const paths: PathData[] = [
    {
        id: 'jasper',
        title: "Jasper's Journey",
        subtitle: 'The Chef',
        teaser: "From the kitchens of San Francisco to the restaurants of Toronto, one man carries a secret ingredient: the memory of a love he left behind. When a chance encounter brings the past rushing back, Jasper must choose between the life he's built and the love he never forgot.",
        quote: '"Every dish I create is a letter I never sent."',
    },
    {
        id: 'annalie',
        title: "Annalie's Melody",
        subtitle: 'The Artist',
        teaser: "Music was her escape, but love became her symphony. Annalie's art speaks of longing, of distance, of a connection that transcends cities and time. When she receives an invitation to a mysterious dinner, her world shifts in ways she never imagined.",
        quote: '"I paint with colors only he could see."',
    },
    {
        id: 'cities',
        title: 'The City Between Us',
        subtitle: 'San Francisco ↔ Toronto',
        teaser: "Two cities. Two lives. One undeniable connection. Separated by 2,500 miles but bound by something deeper, their story unfolds across time zones and seasons—a tale of parallel lives slowly converging.",
        quote: '"Distance measures geography, not hearts."',
    },
    {
        id: 'fullcircle',
        title: 'Full Circle',
        subtitle: '2029',
        teaser: "Every story has its final chapter. Nine years after their first meeting, the table is set once more. What began at a dinner must end at a dinner. But how it ends... that's the question that haunts them both.",
        quote: '"We always find our way back to this table."',
    },
];

export default function ChooseYourPath() {
    const [expandedPath, setExpandedPath] = useState<string | null>(null);

    const handlePathClick = (pathId: string) => {
        setExpandedPath(expandedPath === pathId ? null : pathId);
    };

    return (
        <section id="choose-your-path" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Begin Your Journey</span>
                    <h2 className={styles.title}>Choose Your Path</h2>
                    <p className={styles.subtitle}>
                        Every love story has many sides. Which thread will you follow?
                    </p>
                </div>

                <div className={styles.pathsGrid}>
                    {paths.map((path, index) => (
                        <div
                            key={path.id}
                            className={`${styles.pathCard} ${expandedPath === path.id ? styles.expanded : ''}`}
                            onClick={() => handlePathClick(path.id)}
                            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.pathTitles}>
                                    <h3 className={styles.pathTitle}>{path.title}</h3>
                                    <span className={styles.pathSubtitle}>{path.subtitle}</span>
                                </div>
                                <span className={styles.expandIcon}>
                                    {expandedPath === path.id ? '−' : '+'}
                                </span>
                            </div>

                            <div className={styles.cardContent}>
                                <p className={styles.teaser}>{path.teaser}</p>
                                <blockquote className={styles.quote}>{path.quote}</blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

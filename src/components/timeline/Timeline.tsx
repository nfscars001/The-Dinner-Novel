'use client';

import { useState } from 'react';
import styles from './Timeline.module.css';

interface TimelineNode {
    year: string;
    title: string;
    teaser: string;
    location: 'sf' | 'toronto' | 'between';
}

const timelineNodes: TimelineNode[] = [
    {
        year: '2020',
        title: 'The First Meeting',
        teaser: "A chance encounter at a restaurant that neither expected. San Francisco's fog rolled in that night, but inside, everything was warm. A shared dessert. A stolen glance. The beginning of something neither could name.",
        location: 'sf',
    },
    {
        year: '2023',
        title: 'The Distance',
        teaser: "Three years of silence. Three years of wondering. Toronto winters couldn't freeze the memory. San Francisco summers couldn't burn it away. Both moved on. Neither forgot.",
        location: 'between',
    },
    {
        year: '2024',
        title: 'The Letter',
        teaser: "An invitation arrives. A dinner party. A return to where it all began. The handwriting is unfamiliar, but the pull is unmistakable. Sometimes, love sends messengers.",
        location: 'toronto',
    },
    {
        year: '2029',
        title: 'Full Circle',
        teaser: "Nine years from that first dinner. The table is set. The candles are lit. Two cities have shaped them. Now, only one question remains: Was it worth the wait?",
        location: 'sf',
    },
];

export default function Timeline() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>A Journey Through Time</span>
                    <h2 className={styles.title}>The Map of Us</h2>
                    <p className={styles.subtitle}>
                        From San Francisco to Toronto—follow the path of two hearts.
                    </p>
                </div>

                {/* Flight Path Arc */}
                <div className={styles.mapContainer}>
                    <div className={styles.cities}>
                        <div className={styles.cityLabel}>
                            <span className={styles.cityName}>San Francisco</span>
                            <span className={styles.cityFlag}>🇺🇸</span>
                        </div>
                        <div className={styles.cityLabel}>
                            <span className={styles.cityName}>Toronto</span>
                            <span className={styles.cityFlag}>🇨🇦</span>
                        </div>
                    </div>

                    <svg className={styles.flightPath} viewBox="0 0 800 120" preserveAspectRatio="xMidYMid meet">
                        {/* Flight arc */}
                        <path
                            className={styles.pathLine}
                            d="M 50 100 Q 400 -20 750 100"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            strokeDasharray="8 4"
                        />
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--warm-amber)" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="var(--burgundy-wine)" stopOpacity="1" />
                                <stop offset="100%" stopColor="var(--warm-amber)" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                        {/* Plane icon */}
                        <text className={styles.planeIcon} x="400" y="25" textAnchor="middle">✈</text>
                    </svg>
                </div>

                {/* Timeline Nodes */}
                <div className={styles.timelineTrack}>
                    <div className={styles.trackLine}></div>

                    {timelineNodes.map((node) => (
                        <div
                            key={node.year}
                            className={`${styles.nodeWrapper} ${activeNode === node.year ? styles.active : ''}`}
                            onClick={() => setActiveNode(activeNode === node.year ? null : node.year)}
                        >
                            <div className={styles.node}>
                                <span className={styles.nodeYear}>{node.year}</span>
                                <div className={styles.nodeDot}>
                                    <div className={styles.nodeInner}></div>
                                </div>
                            </div>

                            {activeNode === node.year && (
                                <div className={styles.nodePanel}>
                                    <h4 className={styles.nodeTitle}>{node.title}</h4>
                                    <p className={styles.nodeTeaser}>{node.teaser}</p>
                                    <span className={styles.nodeLocation}>
                                        {node.location === 'sf' && '📍 San Francisco'}
                                        {node.location === 'toronto' && '📍 Toronto'}
                                        {node.location === 'between' && '📍 The Distance'}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

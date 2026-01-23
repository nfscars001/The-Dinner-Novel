'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Timeline.module.css';

interface TimelineNode {
    year: string;
    title: string;
    tagline: string;
    teaser: string;
    location: 'sf' | 'toronto' | 'between';
}

const timelineNodes: TimelineNode[] = [
    {
        year: '2020',
        title: 'Departure',
        tagline: 'A suitcase say yes',
        teaser: "San Francisco glows behind him like a memory that hasn’t learned to let go. Jasper boards a flight for love—hoping the unknown will be kind.",
        location: 'sf',
    },
    {
        year: '2023',
        title: 'Betrayal & Downward Spiral',
        tagline: 'When the Glass Cracks',
        teaser: "Three years of silence. Three years of wondering. Toronto winters couldn't freeze the memory. San Francisco summers couldn't burn it away. Both moved on. Neither forgot.",
        location: 'toronto',
    },
    {
        year: '2024',
        title: 'The Meeting',
        tagline: 'Light Finds the Canvas',
        teaser: "In a room full of art and polite smiles, Jasper meets Annalie—and something in him exhales for the first time in years.",
        location: 'toronto',
    },
    {
        year: '2029',
        title: 'Full Circle',
        tagline: 'Between Departures',
        teaser: "An airport bistro. A half-finished drink. A sketchbook page waiting for a first line. Jasper listens to the world move around him.",
        location: 'sf',
    },
];

export default function Timeline() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If section is mostly out of view (less than 10% visible), close the card
                if (!entry.isIntersecting && entry.intersectionRatio < 0.1) {
                    setActiveNode(null);
                }
            },
            {
                // Trigger when the section leaves the viewport
                threshold: [0, 0.1, 0.5],
                rootMargin: '100px 0px', // Add some buffer
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
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
                                <div className={styles.nodeLabel}>
                                    <span className={styles.nodeYear}>{node.year}</span>
                                    <span className={styles.nodeLabelTitle}>{node.title}</span>
                                </div>
                                <div className={styles.nodeDot}>
                                    <div className={styles.nodeInner}></div>
                                </div>
                            </div>

                            {activeNode === node.year && (
                                <div className={styles.nodePanel}>
                                    <h4 className={styles.nodeTagline}>{node.tagline}</h4>
                                    <p className={styles.nodeTeaser}>{node.teaser}</p>
                                    <span className={styles.nodeLocation}>
                                        {node.location === 'sf' && '📍 San Francisco'}
                                        {node.location === 'toronto' && '📍 Toronto'}
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

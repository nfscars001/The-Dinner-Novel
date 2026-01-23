'use client';

import { useState } from 'react';
import styles from './ChooseYourPath.module.css';

interface PathData {
    id: string;
    overline: string;
    title: string;
    tagline: string;
    teaser: string;
    revealHeader: string;
    revealCopy: string;
    quote: string;
    ctaText: string;
}

const paths: PathData[] = [
    {
        id: 'jasper',
        overline: 'Follow Jasper’s Journey',
        title: 'Jasper’s Table',
        tagline: 'A man learns how to start over without losing himself.',
        teaser: 'From San Francisco to Toronto, Jasper carries a sketchbook full of quiet hopes—and the kind of heartbreak that doesn’t make noise until it does.',
        revealHeader: 'The Seat He Took',
        revealCopy: 'Jasper is the kind of person who notices the small things: the way light clings to glass, the way a city sounds when you’re alone in it. He chose love like a leap, and later had to learn how to land.',
        quote: '“Some lives are built twice—the first time by dreams, the second time by survival.”',
        ctaText: 'Enter Jasper’s Path',
    },
    {
        id: 'annalie',
        overline: 'Hear Annalie’s Melody',
        title: 'Annalie’s Corner',
        tagline: 'Warmth, wit, and a gentle kind of courage.',
        teaser: 'She doesn’t arrive like a rescue. She arrives like a rhythm—steady, bright, and strangely familiar.',
        revealHeader: 'A Different Kind of Light',
        revealCopy: 'Annalie sees what most people skip past: the hidden effort, the tender truth, the bravery in trying again. Her world is built from details—music, laughter, and the quiet choice to stay soft in a hard time.',
        quote: '“Some people don’t save you. They remind you you’re worth saving.”',
        ctaText: 'Enter Annalie’s Path',
    },
    {
        id: 'cities',
        overline: 'The City Between Us',
        title: 'The City Between',
        tagline: 'Two skylines. One story.',
        teaser: 'San Francisco carries the glow of beginnings. Toronto holds the weather of becoming. Somewhere between them, a heart keeps traveling.',
        revealHeader: 'A Map Made of Moments',
        revealCopy: 'This story doesn’t belong to one place. It belongs to departures, late dinners, gallery lights, and the strange magic of being new again. Follow the trail of ordinary scenes that turn precious when you look back.',
        quote: '“Distance isn’t measured in miles. It’s measured in what you’re willing to cross.”',
        ctaText: 'Trace the Journey',
    },
    {
        id: 'fullcircle',
        overline: 'Full Circle',
        title: 'Between Departures',
        tagline: 'A quiet scene with sharp edges of memory.',
        teaser: 'An airport bistro. Warm light. A glass cooling in the hand. The world moves past like soft cinema.',
        revealHeader: 'The Night Returns',
        revealCopy: 'Jasper watches the choreography of strangers—laughs, goodbyes, small mercies. He sketches. He breathes. He lets the moment be ordinary… and somehow, sacred.',
        quote: '“One day, the smallest moments become the ones that hold you together.”',
        ctaText: 'Step Into 2029',
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
                                    <span className={styles.pathOverline}>{path.overline}</span>
                                    <h3 className={styles.pathTitle}>{path.title}</h3>
                                    <p className={styles.pathTagline}>{path.tagline}</p>
                                </div>
                                <span className={styles.expandIcon}>
                                    {expandedPath === path.id ? '−' : '+'}
                                </span>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.teaserWrapper}>
                                    <p className={styles.teaser}>{path.teaser}</p>
                                </div>

                                <div className={styles.revealSection}>
                                    <h4 className={styles.revealHeader}>{path.revealHeader}</h4>
                                    <p className={styles.revealCopy}>{path.revealCopy}</p>
                                    <blockquote className={styles.quote}>{path.quote}</blockquote>
                                    <button className={styles.ctaButton}>
                                        {path.ctaText}
                                        <span className={styles.ctaArrow}>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

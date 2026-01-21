'use client';
import { useState } from 'react';
import styles from './choose.module.css';

type PathOption = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    quote: string;
};

const options: PathOption[] = [
    {
        id: 'jasper',
        title: "Jasper's Journey",
        subtitle: "The Architect",
        description: "Follow the man who builds bridges but cannot cross his own.",
        quote: "\"I measure everything in distance, Annalie. But you are the only mile that counts.\""
    },
    {
        id: 'annalie',
        title: "Annalie's Melody",
        subtitle: "The Musician",
        description: "Listen to the woman who hears the world in minor keys.",
        quote: "\"silence is just a note you hold too long.\""
    },
    {
        id: 'city',
        title: "The City Between Us",
        subtitle: "SF ↔ Toronto",
        description: "Two skylines, one horizon. A love stretched across a continent.",
        quote: "\"The fog in San Francisco tastes like the rain in Toronto.\""
    },
    {
        id: 'future',
        title: "Full Circle",
        subtitle: "2029",
        description: "Start at the end. See where the table is finally set.",
        quote: "\"Some dinners take ten years to cook.\""
    }
];

export default function ChoosePath() {
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Choose Your Path</h2>
            <div className={styles.grid}>
                {options.map((option) => (
                    <div
                        key={option.id}
                        className={`${styles.card} ${activeId === option.id ? styles.active : ''}`}
                        onClick={() => handleSelect(option.id)}
                    >
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{option.title}</h3>
                            <span className={styles.cardSubtitle}>{option.subtitle}</span>

                            <div className={styles.reveal}>
                                <p className={styles.description}>{option.description}</p>
                                <div className={styles.divider}></div>
                                <blockquote className={styles.quote}>{option.quote}</blockquote>
                                <button className={styles.enterBtn}>Begin</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

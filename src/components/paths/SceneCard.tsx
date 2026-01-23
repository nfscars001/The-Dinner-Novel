'use client';

import { ReactNode } from 'react';
import styles from './SceneCard.module.css';

export interface SceneCardProps {
    type: 'quote' | 'scene' | 'artifact';
    title?: string;
    content?: string | ReactNode;
    context?: string;
    quote?: string;
    revealBullets?: string[];
    signature?: string;
    ctaText: string;
    onCtaClick: () => void;
    isActive: boolean;
}

export default function SceneCard({
    type,
    title,
    content,
    context,
    quote,
    revealBullets,
    signature,
    ctaText,
    onCtaClick,
    isActive
}: SceneCardProps) {
    if (!isActive) return null;

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.glassCard} animate-fade-in`}>

                {type === 'quote' && (
                    <div className={styles.quoteContent}>
                        {context && <span className={styles.contextText}>{context}</span>}
                        {quote && <blockquote className={styles.quoteText}>{quote}</blockquote>}
                    </div>
                )}

                {type === 'scene' && (
                    <div className={styles.sceneContent}>
                        {title && <h3 className={styles.sceneTitle}>{title}</h3>}
                        <div className={styles.sceneBody}>{content}</div>
                    </div>
                )}

                {type === 'artifact' && (
                    <div className={styles.artifactContent}>
                        {title && <h3 className={styles.artifactTitle}>{title}</h3>}
                        {typeof content === 'string' && <p className={styles.artifactDesc}>{content}</p>}

                        {revealBullets && (
                            <ul className={styles.revealList}>
                                {revealBullets.map((bullet, idx) => (
                                    <li key={idx} className={styles.revealItem}>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {signature && <div className={styles.signature}>{signature}</div>}
                    </div>
                )}

                <button className={styles.ctaButton} onClick={onCtaClick}>
                    {ctaText}
                </button>
            </div>
        </div>
    );
}

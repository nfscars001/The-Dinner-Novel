'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ROOM_PLAN_DATA, RoomPlanKey, SceneCard } from './roomPlanData';
import styles from './RoomSceneCards.module.css';

interface RoomSceneCardsProps {
    planKey: RoomPlanKey;
    onCardAction?: (cardId: string) => void;
}

const SceneCardItem = ({ card, index, planKey }: { card: SceneCard; index: number; planKey: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
            // Analytics tracking
            console.log('room_scene_card_viewed', {
                planKey,
                cardId: card.id,
                source: 'scroll_view'
            });
        }
    }, [isInView, controls, card.id, planKey]);

    return (
        <motion.div
            ref={ref}
            className={styles.card}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 }
                }
            }}
        >
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            {card.whisper && (
                <p className={styles.whisper}>
                    <em>{card.whisper}</em>
                </p>
            )}
        </motion.div>

    );
};

export default function RoomSceneCards({ planKey }: RoomSceneCardsProps) {
    const plan = ROOM_PLAN_DATA[planKey];
    
    if (!plan || !plan.sceneCards || plan.sceneCards.length === 0) {
        return null;
    }

    return (
        <section className={styles.container}>
            <div className={styles.divider} />
            
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>Room Notes</h2>
                <p className={styles.sectionSubtitle}>“Three small scenes. Served quietly.”</p>
            </div>

            <div className={styles.grid}>
                {plan.sceneCards.map((card, index) => (
                    <SceneCardItem 
                        key={card.id} 
                        card={card} 
                        index={index} 
                        planKey={planKey}
                    />
                ))}
            </div>
        </section>
    );
}

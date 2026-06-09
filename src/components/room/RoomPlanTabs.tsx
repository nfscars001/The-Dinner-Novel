'use client';

import { RoomPlanKey, ROOM_PLAN_DATA } from './roomPlanData';
import styles from './RoomPlanTabs.module.css';
import { useEffect, useRef } from 'react';

interface RoomPlanTabsProps {
    activePlan: RoomPlanKey;
    onPlanChange: (plan: RoomPlanKey) => void;
}

export default function RoomPlanTabs({ activePlan, onPlanChange }: RoomPlanTabsProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Ensure active tab is visible on mobile scroll
    useEffect(() => {
        const activeElement = scrollRef.current?.querySelector(`.${styles.active}`);
        if (activeElement) {
            activeElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [activePlan]);

    return (
        <div className={styles.container}>
            <div className={styles.scrollWrapper} ref={scrollRef}>
                <div className={styles.tabs}>
                    {(Object.keys(ROOM_PLAN_DATA) as RoomPlanKey[]).map((key) => {
                        const plan = ROOM_PLAN_DATA[key];
                        const isActive = activePlan === key;

                        return (
                            <button
                                key={key}
                                className={`${styles.tab} ${isActive ? styles.active : ''}`}
                                onClick={() => onPlanChange(key)}
                                aria-pressed={isActive}
                            >
                                {plan.label}
                                {isActive && <div className={styles.glow} />}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className={styles.fadeLeft} />
            <div className={styles.fadeRight} />
        </div>
    );
}

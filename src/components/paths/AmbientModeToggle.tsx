'use client';

import { useState } from 'react';
import styles from './AmbientModeToggle.module.css';

interface AmbientModeToggleProps {
    onToggle?: (isActive: boolean) => void;
}

export default function AmbientModeToggle({ onToggle }: AmbientModeToggleProps) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        const newState = !isActive;
        setIsActive(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    return (
        <button
            className={`${styles.container} ${isActive ? styles.active : ''}`}
            onClick={handleClick}
            aria-label={isActive ? "Turn ambient sound off" : "Turn ambient sound on"}
        >
            <div className={styles.icon}>
                <div className={styles.bar} />
                <div className={styles.bar} style={{ margin: '0 2px' }} />
                <div className={styles.bar} />
            </div>
            <span>{isActive ? 'Ambient On' : 'Sound Optional'}</span>
        </button>
    );
}

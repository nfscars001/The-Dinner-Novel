'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SceneCardCarousel.module.css';

interface SceneCardCarouselProps {
    children: ReactNode;
    currentIndex: number;
    onIndexChange: (index: number) => void;
    totalCards: number;
}

export default function SceneCardCarousel({
    children,
    currentIndex,
    onIndexChange,
    totalCards
}: SceneCardCarouselProps) {
    const handleNext = () => {
        if (currentIndex < totalCards - 1) {
            onIndexChange(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            onIndexChange(currentIndex - 1);
        }
    };

    return (
        <div className={styles.carouselContainer}>
            {currentIndex > 0 && (
                <button className={`${styles.navButton} ${styles.prev}`} onClick={handlePrev} aria-label="Previous card">
                    ←
                </button>
            )}

            <div className={styles.viewport}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>

            {currentIndex < totalCards - 1 && (
                <button className={`${styles.navButton} ${styles.next}`} onClick={handleNext} aria-label="Next card">
                    →
                </button>
            )}
        </div>
    );
}

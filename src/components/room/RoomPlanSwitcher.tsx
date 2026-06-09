'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './RoomPlanSwitcher.module.css';

interface RoomPlanSwitcherProps {
    children: ReactNode;
    planKey: string;
}

export default function RoomPlanSwitcher({ children, planKey }: RoomPlanSwitcherProps) {
    return (
        <div className={styles.container}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={planKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.motionWrapper}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

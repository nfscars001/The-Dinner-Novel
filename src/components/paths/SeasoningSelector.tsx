'use client';

import styles from './SeasoningSelector.module.css';

export type SeasoningOption = string;

interface SeasoningSelectorProps {
    prompt: string;
    options: SeasoningOption[];
    selected: SeasoningOption;
    onSelect: (option: SeasoningOption) => void;
}

export default function SeasoningSelector({
    prompt,
    options,
    selected,
    onSelect
}: SeasoningSelectorProps) {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{prompt}</span>
            <div className={styles.options}>
                {options.map((option) => (
                    <button
                        key={option}
                        className={`${styles.optionBtn} ${selected === option ? styles.active : ''}`}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

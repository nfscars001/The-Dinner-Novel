'use client';

import styles from './PostcardShareModal.module.css';

interface PostcardShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export default function PostcardShareModal({ isOpen, onClose, title = "Share a Postcard" }: PostcardShareModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                <h3 className={styles.title}>{title}</h3>

                <div className={styles.postcard}>
                    <p>&quot;Some goodbyes don&apos;t break you. They shape you.&quot;</p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>- Jasper&apos;s Table</p>
                </div>

                <div className={styles.shareButtons}>
                    <button className={styles.shareBtn} onClick={() => alert('Shared to Instagram!')}>Instagram</button>
                    <button className={styles.shareBtn} onClick={() => alert('Link copied to clipboard!')}>Copy Link</button>
                </div>
            </div>
        </div>
    );
}

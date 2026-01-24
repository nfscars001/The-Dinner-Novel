'use client';

import { useRef } from 'react';
import html2canvas from 'html2canvas';
import styles from './PostcardShareModal.module.css';

interface PostcardShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    quote?: string;
    artist?: string;
}

// Hardcoded colors for html2canvas (it doesn't read CSS variables)
const COLORS = {
    midnightNavy: '#0F1729',
    warmAmber: '#D4A574',
    softCream: '#FAF7F2',
    champagneGold: '#F5E6D3',
    borderGlow: 'rgba(212, 165, 116, 0.3)',
};

export default function PostcardShareModal({
    isOpen,
    onClose,
    title = "Share a Postcard",
    quote = "Some goodbyes don't break you. They shape you.",
    artist = "Jasper's Table"
}: PostcardShareModalProps) {
    const postcardRef = useRef<HTMLDivElement>(null);

    const handleShareInstagram = async () => {
        if (!postcardRef.current) return;

        try {
            const canvas = await (html2canvas as any)(postcardRef.current, {
                backgroundColor: COLORS.midnightNavy,
                scale: 3,
                logging: false,
                useCORS: true,
            });

            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = `TheDinnerNovel-Postcard.png`;
            link.click();

            alert('Postcard image downloaded! You can now share it to Instagram.');
        } catch (err) {
            console.error('Error sharing image:', err);
            alert('Failed to generate sharing image.');
        }
    };

    if (!isOpen) return null;

    // Inline styles for html2canvas compatibility
    const postcardStyle: React.CSSProperties = {
        width: '270px',       // ~9:16 ratio
        height: '480px',
        backgroundColor: COLORS.midnightNavy,
        border: `1px solid ${COLORS.borderGlow}`,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 24px',
        boxSizing: 'border-box',
        position: 'relative',
        margin: '20px auto', // Center horizontally
    };

    const headerStyle: React.CSSProperties = {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '12px',
        color: COLORS.warmAmber,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        textAlign: 'center',
    };

    const contentStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px 0',
    };

    const quoteStyle: React.CSSProperties = {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '22px',
        fontStyle: 'italic',
        color: COLORS.softCream,
        lineHeight: 1.4,
        marginBottom: '16px',
    };

    const artistStyle: React.CSSProperties = {
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '16px',
        fontStyle: 'italic',
        color: COLORS.warmAmber,
    };

    const footerStyle: React.CSSProperties = {
        fontFamily: "'Inter', sans-serif",
        fontSize: '10px',
        color: COLORS.warmAmber,
        opacity: 0.6,
        letterSpacing: '0.15em',
        textTransform: 'lowercase',
        textAlign: 'center',
    };

    // Decorative border style
    const decorativeBorderStyle: React.CSSProperties = {
        position: 'absolute',
        top: '12px',
        left: '12px',
        right: '12px',
        bottom: '12px',
        border: `1px solid rgba(212, 165, 116, 0.15)`,
        pointerEvents: 'none',
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                <div ref={postcardRef} style={postcardStyle}>
                    {/* Decorative inner border */}
                    <div style={decorativeBorderStyle} />

                    <div style={headerStyle}>The Dinner</div>

                    <div style={contentStyle}>
                        <p style={quoteStyle}>&quot;{quote}&quot;</p>
                        <p style={artistStyle}>— {artist}</p>
                    </div>

                    <div style={footerStyle}>thedinnernovel.com</div>
                </div>

                <div className={styles.shareButtons}>
                    <button className={styles.shareBtn} onClick={handleShareInstagram}>Share as Image</button>
                </div>
            </div>
        </div>
    );
}

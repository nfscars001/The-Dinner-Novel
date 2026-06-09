'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './TopNav.module.css';
import AudioPlayer from './AudioPlayer';

export default function TopNav() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Optionally hide on the new /room full-screen view if preferred, 
    // but the requirement asks for a top-level nav link.
    const isRoom = pathname === '/room';

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isRoom ? styles.transparent : ''}`}>
            <nav className={styles.nav}>
                {/* Left Spacer to keep icons centered */}
                <div className={styles.navSide}></div>

                {/* Center Icons */}
                <div className={styles.centerLinks}>
                    <Link href="/" className={`${styles.navIcon} ${!isRoom ? styles.active : ''}`} title="The Dinner (Home)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                            <path d="M7 2v20" />
                            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                        </svg>
                    </Link>
                    
                    <div className={styles.divider}></div>

                    <Link href="/room" className={`${styles.navIcon} ${isRoom ? styles.active : ''}`} title="Walk the Room (Floorplan)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                        </svg>
                    </Link>
                </div>

                {/* Right Side: Audio Player */}
                <div className={`${styles.navSide} ${styles.right}`}>
                    <AudioPlayer />
                </div>
            </nav>
        </header>
    );
}

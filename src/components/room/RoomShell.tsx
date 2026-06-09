'use client';

import { useState, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './RoomShell.module.css';
import NewsletterForm from '../ui/NewsletterForm';
import RoomPlanTabs from './RoomPlanTabs';
import RoomPlanSwitcher from './RoomPlanSwitcher';
import { RoomPlanKey, ROOM_PLAN_DATA, Hotspot } from './roomPlanData';
import { motion, AnimatePresence } from 'framer-motion';
import RoomSceneCards from './RoomSceneCards';


// Using Hotspot from roomPlanData


interface RoomShellProps {
    children: ReactNode;
    title: string;
    subtitle: string;
    isLaGloria?: boolean;
    viewMode: 'floorplan' | 'list';
    setViewMode: (mode: 'floorplan' | 'list') => void;
    activeModal: Hotspot | null;
    setActiveModal: (spot: Hotspot | null) => void;
    activePlan: RoomPlanKey;
    setActivePlan: (plan: RoomPlanKey) => void;
}

export default function RoomShell({
    children,
    title,
    subtitle,
    isLaGloria,
    viewMode,
    setViewMode,
    activeModal,
    setActiveModal,
    activePlan,
    setActivePlan
}: RoomShellProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Analytics Helper
    const track = (event: string, properties: Record<string, any>) => {
        console.log(`[Analytics] ${event}`, { ...properties, source: searchParams.get('source') || 'direct' });
        // If a real analytics library is added later:
        // window.analytics?.track(event, properties);
    };


    // Initialize Plan from localStorage or URL
    useEffect(() => {
        const urlPlan = searchParams.get('plan') as RoomPlanKey;
        const savedPlan = localStorage.getItem('room_plan_selected') as RoomPlanKey;
        
        if (urlPlan && ROOM_PLAN_DATA[urlPlan]) {
            setActivePlan(urlPlan);
        } else if (savedPlan && ROOM_PLAN_DATA[savedPlan]) {
            setActivePlan(savedPlan);
        }
    }, [searchParams, setActivePlan]);

    const handlePlanChange = (plan: RoomPlanKey) => {
        setActivePlan(plan);
        localStorage.setItem('room_plan_selected', plan);
        
        // Update URL without full refresh
        const params = new URLSearchParams(searchParams.toString());
        params.set('plan', plan);
        router.push(`/room?${params.toString()}`, { scroll: false });

        track('room_plan_changed', { plan });
    };

    const currentPlanData = ROOM_PLAN_DATA[activePlan];

    return (
        <main className={styles.main}>
            {isLaGloria && (
                <div className={styles.welcomeBanner}>
                    ✦ Welcome to The Dinner at La Gloria. ✦
                </div>
            )}

            <div className={styles.header}>
                <Link href="/" className={styles.backLink}>← BACK TO HOME</Link>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                
                <RoomPlanTabs 
                    activePlan={activePlan} 
                    onPlanChange={handlePlanChange} 
                />

                {currentPlanData.microSubtitle && (
                    <motion.p 
                        key={`${activePlan}-micro`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.microSubtitle}
                    >
                        {currentPlanData.microSubtitle}
                    </motion.p>
                )}
            </div>

            <div className={styles.mobileToggle}>
                <button
                    className={`${styles.toggleBtn} ${viewMode === 'floorplan' ? styles.active : ''}`}
                    onClick={() => setViewMode('floorplan')}
                >
                    Floorplan
                </button>
                <button
                    className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.active : ''}`}
                    onClick={() => setViewMode('list')}
                >
                    Guided Tour
                </button>
            </div>

            <div className={styles.content}>
                <RoomPlanSwitcher planKey={activePlan}>
                    {children}
                </RoomPlanSwitcher>

                {currentPlanData.roomCtas && currentPlanData.roomCtas.length > 0 && (
                    <div className={styles.roomCtas}>
                        {currentPlanData.roomCtas.map((cta: { label: string; href: string; primary?: boolean }, i: number) => (
                            <Link 
                                key={i} 
                                href={cta.href} 
                                className={cta.primary ? 'btn-primary' : 'btn-secondary'}
                                onClick={() => track('hotspot_cta_clicked', { plan: activePlan, cta: cta.label, source: 'room_footer' })}
                            >
                                {cta.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Poetic Scene Cards (Conditional based on plan) */}
            <RoomSceneCards planKey={activePlan} />


            {/* Modal Overlay / Bottom Sheet */}
            <AnimatePresence>
                {activeModal && (
                    <div key="overlay" className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
                        <motion.div 
                            initial={viewMode === 'list' ? { y: '100%' } : { opacity: 0, scale: 0.9 }}
                            animate={viewMode === 'list' ? { y: 0 } : { opacity: 1, scale: 1 }}
                            exit={viewMode === 'list' ? { y: '100%' } : { opacity: 0, scale: 0.9 }}
                            className={`${styles.modalContent} ${viewMode === 'list' ? styles.bottomSheet : ''}`} 
                            onClick={e => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>✕</button>
                            <h3 className={styles.modalTitle}>{activeModal.title}</h3>

                            
                            {/* Image Placeholder for Private Rooms */}
                            {activePlan !== 'dining_room' && activeModal.id !== 'playlist_note' && (
                                <div className={styles.modalImagePlaceholder}>
                                    <div className={styles.placeholderIcon}>✦</div>
                                    <span>Artifact Image Coming Soon</span>
                                </div>
                            )}

                            {/* Spotify Embed for Playlist Note */}
                            {activeModal.id === 'playlist_note' && (
                                <div className={styles.spotifyEmbed}>
                                    <iframe 
                                        data-testid="embed-iframe" 
                                        style={{ borderRadius: '12px' }} 
                                        src="https://open.spotify.com/embed/playlist/0rEAHYSroIsw7L7QV17pmD?utm_source=generator" 
                                        width="100%" 
                                        height="352" 
                                        frameBorder="0" 
                                        allowFullScreen={true} 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            )}

                            <p className={styles.modalTeaser}>{activeModal.teaser}</p>


                            <div className={styles.modalActions}>
                                {activeModal.id === 'host-stand' ? (
                                    <div className={styles.newsletterModal}>
                                        <NewsletterForm compact />
                                        <div className={styles.modalDivider}>or</div>
                                        <Link href="/#newsletter" className="btn-secondary" onClick={() => setActiveModal(null)}>
                                            Go to Newsletter Section
                                        </Link>
                                    </div>
                                ) : activeModal.href !== '#' ? (
                                    <Link 
                                        href={activeModal.href} 
                                        className="btn-primary"
                                        onClick={() => track('hotspot_cta_clicked', { plan: activePlan, hotspotId: activeModal.id, cta: activeModal.cta })}
                                    >
                                        {activeModal.cta}
                                    </Link>
                                ) : (
                                    <button className="btn-primary" onClick={() => setActiveModal(null)}>
                                        Continue Exploring
                                    </button>
                                )}

                                {/* Contextual CTAs for Dining Room if needed */}
                                {activePlan === 'dining_room' && activeModal.id === 'gallery-wall' && (
                                    <Link href="/postcards" className="btn-secondary" style={{ marginTop: '10px' }}>
                                        Create a Postcard from a Painting
                                    </Link>
                                )}
                            </div>



                            {/* Mobile Bottom Sheet Controls */}
                            {viewMode === 'list' && (
                                <div className={styles.sheetControls}>
                                    <button onClick={() => {
                                        const idx = currentPlanData.hotspots.findIndex((h: Hotspot) => h.id === activeModal.id);
                                        const prev = currentPlanData.hotspots[idx - 1] || currentPlanData.hotspots[currentPlanData.hotspots.length - 1];
                                        setActiveModal(prev);
                                    }}>← Previous</button>
                                    <button onClick={() => {
                                        const idx = currentPlanData.hotspots.findIndex((h: Hotspot) => h.id === activeModal.id);
                                        const next = currentPlanData.hotspots[idx + 1] || currentPlanData.hotspots[0];
                                        setActiveModal(next);
                                    }}>Next →</button>
                                </div>
                            )}

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

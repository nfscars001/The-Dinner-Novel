'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './gallery.module.css';

// Mock Data
const artworks = [
    { id: '1', title: 'The First Sketch', year: '2020', mood: 'Hope', src: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800', desc: 'A quick line drawing on a napkin.\nThe shape of a smile that lingered too long.\nThe first time he realized he was looking closely.' },
    { id: '2', title: 'City Silhouettes', year: '2023', mood: 'Fracture', src: 'https://images.unsplash.com/photo-1510255551988-e214fc047b30?auto=format&fit=crop&q=80&w=800', desc: 'Tall buildings leaning inward.\nThe feeling of being surrounded but completely alone.\nPainted in sharp, unforgiving blues.' },
    { id: '3', title: 'Coffee at Midnight', year: '2024', mood: 'Spark', src: 'https://images.unsplash.com/photo-1510221389814-1e5828a2a578?auto=format&fit=crop&q=80&w=800', desc: 'Warm ambient lighting.\nTwo cups, one empty, one untouched.\nA conversation that changed everything.' },
    { id: '4', title: 'The Empty Chair', year: '2023', mood: 'Fracture', src: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800', desc: 'A study in absence.\nThe hardest thing to paint is what isn\'t there.' },
    { id: '5', title: 'Window Rain', year: '2029', mood: 'Return', src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800', desc: 'Water droplets distorting the streetlights.\nThe realization that home isn\'t a place anymore.' },
    { id: '6', title: 'Morning Light', year: '2029', mood: 'Hope', src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800', desc: 'Soft yellows breaking through the grey.\nBreathing feels easier today.' },
];

export default function JasperGallery() {
    const [filterYear, setFilterYear] = useState<string>('All');
    const [filterMood, setFilterMood] = useState<string>('All');
    const [activeArt, setActiveArt] = useState<typeof artworks[0] | null>(null);

    const filteredArtworks = artworks.filter(art => {
        const matchYear = filterYear === 'All' || art.year === filterYear;
        const matchMood = filterMood === 'All' || art.mood === filterMood;
        return matchYear && matchMood;
    });

    return (
        <main className={styles.main}>
            {/* Header */}
            <header className={styles.header}>
                <Link href="/room" className={styles.backLink}>← Back to Room</Link>
                <span className={styles.preTitle}>Artist Portfolio</span>
                <h1 className={styles.title}>Jasper’s Gallery</h1>
                <p className={styles.subtitle}>Where words ran out, paint continued.</p>
            </header>

            {/* Filters */}
            <section className={styles.gallerySection}>
                <div className={styles.filtersWrapper}>
                    <div className={styles.filterGroup}>
                        <label>Filter by Year:</label>
                        <select value={filterYear} onChange={e => setFilterYear(e.target.value)} className={styles.select}>
                            <option value="All">All Years</option>
                            <option value="2020">2020</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label>Filter by Mood:</label>
                        <select value={filterMood} onChange={e => setFilterMood(e.target.value)} className={styles.select}>
                            <option value="All">All Moods</option>
                            <option value="Hope">Hope</option>
                            <option value="Fracture">Fracture</option>
                            <option value="Spark">Spark</option>
                            <option value="Return">Return</option>
                        </select>
                    </div>
                </div>

                {/* Full Gallery Grid */}
                <div className={styles.grid}>
                    {filteredArtworks.length > 0 ? (
                        filteredArtworks.map(art => (
                            <div key={art.id} className={styles.gridItem} onClick={() => setActiveArt(art)}>
                                <div className={styles.imageWrapper}>
                                    <img src={art.src} alt={art.title} className={styles.gridImage} loading="lazy" />
                                    <div className={styles.gridOverlay}>
                                        <span className={styles.gridOverlayText}>View Placard</span>
                                    </div>
                                </div>
                                <div className={styles.gridInfo}>
                                    <h4 className={styles.gridTitle}>{art.title}</h4>
                                    <div className={styles.tags}>
                                        <span className={styles.tag}>{art.year}</span>
                                        <span className={styles.tag}>{art.mood}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noResults}>No paintings found for this combination.</div>
                    )}
                </div>
            </section>

            {/* Modal */}
            {activeArt && (
                <div className={styles.modalOverlay} onClick={() => setActiveArt(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setActiveArt(null)}>✕</button>
                        <div className={styles.modalLayout}>
                            <div className={styles.modalImageWrapper}>
                                <img src={activeArt.src} alt={activeArt.title} className={styles.modalImage} />
                            </div>
                            <div className={styles.modalDetails}>
                                <h3 className={styles.modalTitle}>{activeArt.title}</h3>
                                <div className={styles.modalTags}>
                                    <span className={styles.tag}>{activeArt.year}</span>
                                    <span className={styles.tag}>{activeArt.mood}</span>
                                </div>
                                <div className={styles.placard}>
                                    {activeArt.desc.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                                <Link href={`/path/jasper`} className={`btn-secondary ${styles.relatedLink}`}>
                                    Related Milestone →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Global CTA Block */}
            <section className={styles.ctaBlock}>
                <h2>Keep Exploring</h2>
                <div className={styles.ctaActions}>
                    <Link href="/#newsletter" className="btn-primary">Sign up for Newsletter</Link>
                    <Link href="/" className="btn-secondary">Back to Home</Link>
                </div>
            </section>
        </main>
    );
}

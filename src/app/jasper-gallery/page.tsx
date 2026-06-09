'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './gallery.module.css';

// Gallery Artworks
const artworks = [
    { id: '1', title: 'The Dinner Chapter 1 by Wei In Sight', year: '2019', mood: 'Hope', src: '/images/jasper_gallery/Chapter_1_2019.jpg', desc: 'The first evening.\nA table set for strangers who would not remain so.\nThe beginning of everything.' },
    { id: '2', title: 'The Dinner Chapter 2 by Wei In Sight', year: '2019', mood: 'Spark', src: '/images/jasper_gallery/Chapter_2_2019.jpg', desc: 'Candlelight catching on glass.\nWords beginning to form between silences.\nSomething shifting in the room.' },
    { id: '3', title: 'The Dinner Chapter 3 by Wei In Sight', year: '2019', mood: 'Fracture', src: '/images/jasper_gallery/Chapter_3_2019.jpg', desc: 'The moment where honesty arrived uninvited.\nA pause that lasted longer than it should.\nThe cost of being seen.' },
    { id: '4', title: 'The Dinner Chapter 4 by Wei In Sight', year: '2019', mood: 'Fracture', src: '/images/jasper_gallery/Chapter_4_2019.jpg', desc: 'After the quiet argument.\nChairs slightly misaligned.\nThe weight of what was left unsaid.' },
    { id: '5', title: 'The Dinner Chapter 5 by Wei In Sight', year: '2019', mood: 'Return', src: '/images/jasper_gallery/Chapter_5_2019.jpg', desc: 'Coming back to the same table.\nDifferent eyes, different hands.\nThe same hunger for something real.' },
    { id: '6', title: 'The Dinner Chapter 6 by Wei In Sight', year: '2019', mood: 'Hope', src: '/images/jasper_gallery/Chapter_6_2019.jpg', desc: 'The last plate cleared.\nLaughter at the end of something hard.\nThe proof that it was worth it.' },
    { id: '7', title: 'Starry Serenade by Natalie Melnyk', year: '2024', mood: 'Hope', src: '/images/jasper_gallery/Starry_Serenade_2024.jpeg', desc: 'Cobalt skies and spinning constellations.\nA song played without an instrument.\nThe night that taught him how to listen.' },
    { id: '8', title: 'Sweet Dreams by Natalie Melnyk', year: '2025', mood: 'Return', src: '/images/jasper_gallery/Sweet_Dreams_2025.jpeg', desc: 'The final exhale of a long series.\nPeace, completed and hanging where he can always reach it.\nA rest that was earned.' },
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
                            <option value="2019">2019</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './bts.module.css';

// Mock Data for Albums
const albums = [
    {
        id: 'lagloria',
        title: 'La Gloria Nights',
        cover: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
        photos: [
            'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1560027581-6789182d3340?auto=format&fit=crop&q=80&w=800',
        ]
    },
    {
        id: 'studio',
        title: 'The Village Art Studio',
        cover: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800',
        photos: [
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=800',
        ]
    },
    {
        id: 'city',
        title: 'City Details: Streets / Signs / Light',
        cover: 'https://images.unsplash.com/photo-1518398475806-38fb07af72e2?auto=format&fit=crop&q=80&w=800',
        photos: [
            'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=800',
        ]
    }
];

export default function BehindTheScenes() {
    const [activeAlbum, setActiveAlbum] = useState<typeof albums[0] | null>(null);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openAlbum = (album: typeof albums[0]) => {
        setActiveAlbum(album);
        setPhotoIndex(0);
    };

    const nextPhoto = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeAlbum) {
            setPhotoIndex((prev) => (prev + 1) % activeAlbum.photos.length);
        }
    };

    const prevPhoto = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeAlbum) {
            setPhotoIndex((prev) => (prev - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
        }
    };

    return (
        <main className={styles.main}>
            {/* Header */}
            <header className={styles.header}>
                <Link href="/room" className={styles.backLink}>← Back to Room</Link>
                <h1 className={styles.title}>Behind the Scenes</h1>
                <p className={styles.subtitle}>The real rooms behind the fictional dinner.</p>
                <div className={styles.disclaimer}>
                    <span>Inspired by real places. Fiction shaped the rest.</span>
                </div>
            </header>

            {/* Albums Grid */}
            <section className={styles.albumsGrid}>
                {albums.map((album) => (
                    <div key={album.id} className={styles.albumCard} onClick={() => openAlbum(album)}>
                        <div className={styles.imageWrapper}>
                            <img src={album.cover} alt={album.title} className={styles.albumCover} />
                            <div className={styles.albumOverlay}>
                                <span>View Album ({album.photos.length} photos)</span>
                            </div>
                        </div>
                        <h2 className={styles.albumTitle}>{album.title}</h2>
                    </div>
                ))}
            </section>

            {/* Carousel Modal */}
            {activeAlbum && (
                <div className={styles.modalOverlay} onClick={() => setActiveAlbum(null)}>
                    <div className={styles.carouselContainer} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setActiveAlbum(null)}>✕</button>
                        
                        <div className={styles.carouselCenter}>
                            <button className={styles.navBtn} onClick={prevPhoto}>‹</button>
                            <img 
                                src={activeAlbum.photos[photoIndex]} 
                                alt={`${activeAlbum.title} ${photoIndex + 1}`} 
                                className={styles.carouselImage} 
                            />
                            <button className={styles.navBtn} onClick={nextPhoto}>›</button>
                        </div>
                        
                        <div className={styles.carouselFooter}>
                            <h3 className={styles.modalTitle}>{activeAlbum.title}</h3>
                            <div className={styles.dots}>
                                {activeAlbum.photos.map((_, i) => (
                                    <span key={i} className={`${styles.dot} ${i === photoIndex ? styles.activeDot : ''}`} />
                                ))}
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

'use client';

import Link from 'next/link';
import styles from './RoomHotspotCards.module.css';

import { Hotspot, RoomPlanKey } from './roomPlanData';

interface RoomHotspotCardsProps {
    hotspots: Hotspot[];
    planId: string;
}

export default function RoomHotspotCards({ hotspots, planId }: RoomHotspotCardsProps) {
    return (
        <div className={styles.guidedTour}>
            {hotspots.map((spot) => (
                <div key={spot.id} className={styles.tourCard}>
                    <h3 className={styles.cardTitle}>{spot.title}</h3>
                    <p className={styles.cardTeaser}>{spot.teaser}</p>
                    
                    <div className={styles.cardActions}>
                        {spot.href !== '#' ? (
                            <Link href={spot.href} className="btn-primary">
                                {spot.cta}
                            </Link>
                        ) : (
                            <button className="btn-primary" disabled>
                                Artifact Context Only
                            </button>
                        )}

                        {/* Dining Room Special CTAs */}
                        {planId === 'dining_room' && spot.id === 'gallery-wall' && (
                            <Link href="/postcards" className="btn-secondary">
                                Create a Postcard
                            </Link>
                        )}
                        {planId === 'dining_room' && spot.id === 'back-hallway' && (
                            <Link href="/behind-the-scenes?album=lagloria" className="btn-secondary">
                                La Gloria Album
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

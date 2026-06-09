'use client';

import styles from './RoomFloorplan.module.css';
import { Hotspot } from './roomPlanData';


interface RoomFloorplanProps {
    planId: string;
    hotspots: Hotspot[];
    onHotspotClick: (id: string) => void;
    activeHotspotId?: string;
    isLaGloria?: boolean;
}

export default function RoomFloorplan({
    planId,
    hotspots,
    onHotspotClick,
    activeHotspotId,
    isLaGloria
}: RoomFloorplanProps) {
    const renderPlanDecorations = () => {
        switch (planId) {
            case 'dining_room':
                return (
                    <>
                        {/* The Bar (Center-ish) */}
                        <g transform="translate(400, 300)">
                            <rect width="200" height="150" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="2" strokeDasharray="8,4" />
                            <rect x="30" y="40" width="140" height="70" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="100" y="85" fill="rgba(212, 165, 116, 0.6)" fontSize="20" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">The Bar</text>
                        </g>

                        {/* Gallery Wall (Top Left) */}
                        <g transform="translate(150, 150)">
                            <line x1="0" y1="0" x2="300" y2="0" stroke="rgba(212, 165, 116, 0.6)" strokeWidth="3" strokeDasharray="20,10" />
                            <text x="150" y="-15" fill="rgba(212, 165, 116, 0.7)" fontSize="18" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">Gallery Wall</text>
                        </g>

                        {/* Hallway (Top Right) */}
                        <g transform="translate(750, 100)">
                            <path d="M 0 0 L 150 0 L 150 200 L 0 200 Z" fill="none" stroke="rgba(212, 165, 116, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                            <text x="75" y="105" fill="rgba(212, 165, 116, 0.5)" fontSize="16" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">Hallway</text>
                        </g>

                        {/* Host Stand (Bottom Center) */}
                        <g transform="translate(425, 600)">
                            <rect width="150" height="100" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="2" strokeDasharray="6,6" />
                            <text x="75" y="55" fill="rgba(212, 165, 116, 0.6)" fontSize="18" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">Host Stand</text>
                        </g>

                        {/* Tables (Decorative Circles) */}
                        <circle cx="250" cy="450" r="40" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="5,5" />
                        <circle cx="700" cy="550" r="45" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="5,5" />
                        <circle cx="750" cy="400" r="35" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="5,5" />
                    </>
                );
            case 'jasper':
                return (
                    <>
                        {/* Large Easel */}
                        <g transform="translate(530, 50) rotate(15)">
                            <path d="M 0 0 L 100 0 L 110 150 L -10 150 Z" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="2" />
                            <rect x="10" y="20" width="80" height="100" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="50" y="140" fill="rgba(212, 165, 116, 0.5)" fontSize="16" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">Easel</text>
                        </g>
                        {/* Drafting Table */}
                        <g transform="translate(150, 400)">
                            <rect width="220" height="140" fill="none" stroke="rgba(212, 165, 116, 0.3)" strokeWidth="2" strokeDasharray="8,4" />
                            <text x="110" y="80" fill="rgba(212, 165, 116, 0.4)" fontSize="16" textAnchor="middle" fontFamily="var(--font-accent)">Drafting Table</text>
                        </g>
                        {/* Paint Supply Shelf */}
                        <g transform="translate(750, 150)">
                            <rect width="120" height="400" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                            <text x="60" y="200" fill="rgba(212, 165, 116, 0.4)" fontSize="14" textAnchor="middle" transform="rotate(90, 60, 200)" fontFamily="var(--font-accent)">Supplies</text>
                        </g>
                        {/* Canvas Stacks */}
                        <g transform="translate(100, 100)">
                            <rect width="60" height="80" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <rect x="10" y="10" width="60" height="80" fill="none" stroke="rgba(212, 165, 116, 0.15)" strokeWidth="1" />
                            <rect x="20" y="20" width="60" height="80" fill="none" stroke="rgba(212, 165, 116, 0.1)" strokeWidth="1" />
                        </g>
                        {/* Wall Paintings */}
                        <g transform="translate(180, 50)">
                            <rect width="140" height="90" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="1.5" />
                            <rect x="8" y="8" width="124" height="74" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="70" y="110" fill="rgba(212, 165, 116, 0.5)" fontSize="12" textAnchor="middle" fontFamily="var(--font-accent)">Starry Serenade</text>
                        </g>
                        <g transform="translate(810, 50)">
                            <rect width="140" height="90" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="1.5" />
                            <rect x="8" y="8" width="124" height="74" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="70" y="110" fill="rgba(212, 165, 116, 0.5)" fontSize="12" textAnchor="middle" fontFamily="var(--font-accent)">Sweet Dreams</text>
                        </g>

                    </>
                );
            case 'annalie':
                return (
                    <>
                        {/* Sofa/Lounge Area */}
                        <g transform="translate(350, 450)">
                            <rect width="300" height="120" rx="20" fill="none" stroke="rgba(212, 165, 116, 0.3)" strokeWidth="2" strokeDasharray="10,5" />
                            <text x="150" y="70" fill="rgba(212, 165, 116, 0.5)" fontSize="18" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">Sofa</text>
                        </g>
                        {/* Kitchenette */}
                        <g transform="translate(100, 100)">
                            <rect width="250" height="80" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" strokeDasharray="4,4" />
                            <rect x="30" y="10" width="40" height="40" fill="none" stroke="rgba(212, 165, 116, 0.1)" strokeWidth="1" />
                            <text x="125" y="50" fill="rgba(212, 165, 116, 0.4)" fontSize="14" textAnchor="middle" fontFamily="var(--font-accent)">Kitchenette</text>
                        </g>
                        {/* Large Window */}
                        <g transform="translate(400, 25)">
                            <rect width="200" height="20" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="2" />
                            <path d="M 0 20 L -20 60 M 200 20 L 220 60" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="100" y="50" fill="rgba(212, 165, 116, 0.5)" fontSize="14" textAnchor="middle" fontFamily="var(--font-accent)">Window View</text>
                        </g>
                        {/* Bookshelf */}
                        <g transform="translate(850, 150)">
                            <rect width="60" height="400" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" strokeDasharray="2,2" />
                            <text x="30" y="200" fill="rgba(212, 165, 116, 0.4)" fontSize="12" textAnchor="middle" transform="rotate(90, 30, 200)" fontFamily="var(--font-accent)">Books</text>
                        </g>
                        {/* Entryway */}
                        <g transform="translate(850, 600)">
                            <path d="M 0 0 Q 40 -40 80 0" fill="none" stroke="rgba(212, 165, 116, 0.4)" strokeWidth="2" />
                            <text x="40" y="30" fill="rgba(212, 165, 116, 0.5)" fontSize="14" textAnchor="middle" fontFamily="var(--font-accent)">Entry</text>
                        </g>
                        {/* Violin Case */}
                        <g transform="translate(50, 600)">
                            <path d="M 0 0 L 80 0 L 70 40 L 10 40 Z" fill="none" stroke="rgba(212, 165, 116, 0.3)" strokeWidth="1" strokeDasharray="4,2" />
                            <circle cx="20" cy="20" r="8" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <circle cx="60" cy="20" r="8" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="40" y="55" fill="rgba(212, 165, 116, 0.4)" fontSize="12" textAnchor="middle" fontFamily="var(--font-accent)">Violin Case</text>
                        </g>

                    </>
                );
            case 'tibor':
                return (
                    <>
                        {/* Large Oak Desk */}
                        <g transform="translate(300, 100)">
                            <rect width="400" height="150" fill="none" stroke="rgba(212, 165, 116, 0.5)" strokeWidth="2" />
                            <rect x="50" y="150" width="80" height="60" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <rect x="270" y="150" width="80" height="60" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" />
                            <text x="200" y="85" fill="rgba(212, 165, 116, 0.6)" fontSize="20" textAnchor="middle" fontFamily="var(--font-accent)" fontStyle="italic">Oak Desk</text>
                        </g>
                        {/* Filing Cabinets */}
                        <g transform="translate(50, 100)">
                            <rect width="100" height="120" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" strokeDasharray="4,4" />
                            <rect y="130" width="100" height="120" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" strokeDasharray="4,4" />
                            <text x="50" y="260" fill="rgba(212, 165, 116, 0.4)" fontSize="12" textAnchor="middle" fontFamily="var(--font-accent)">Files</text>
                        </g>
                        {/* Tall Bookshelves */}
                        <g transform="translate(50, 450)">
                            <rect width="900" height="60" fill="none" stroke="rgba(212, 165, 116, 0.2)" strokeWidth="1" strokeDasharray="10,5" />
                            <text x="450" y="35" fill="rgba(212, 165, 116, 0.4)" fontSize="14" textAnchor="middle" fontFamily="var(--font-accent)">Library Wall</text>
                        </g>
                        {/* Reading Chair */}
                        <g transform="translate(750, 150)">
                            <circle cx="50" cy="50" r="60" fill="none" stroke="rgba(212, 165, 116, 0.3)" strokeWidth="2" strokeDasharray="15,10" />
                            <text x="50" y="55" fill="rgba(212, 165, 116, 0.5)" fontSize="16" textAnchor="middle" fontFamily="var(--font-accent)">Armchair</text>
                        </g>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.floorplan}>
                <svg className={styles.svgLayer} width="100%" height="100%" viewBox="0 0 1000 750" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="floor-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(212, 165, 116, 0.15)" strokeWidth="1" />
                        </pattern>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Background Grid */}
                    <rect width="1000" height="750" fill="url(#floor-grid)" />

                    {/* Outer Boundary */}
                    <rect x="25" y="25" width="950" height="700" fill="none" stroke="rgba(212, 165, 116, 0.15)" strokeWidth="1" strokeDasharray="10,5" />

                    {/* Room Specific Decorations */}
                    {renderPlanDecorations()}

                    {/* Hotspots - Interaction layer */}
                    {hotspots.map((spot) => (
                        <g
                            key={spot.id}
                            className={styles.hotspotGroup}
                            onClick={(e) => {
                                e.stopPropagation();
                                onHotspotClick(spot.id);
                            }}
                            style={{ cursor: 'pointer', pointerEvents: 'all' }}
                        >
                            {/* Larger invisible hit area */}
                            <circle
                                cx={(spot.x ?? 0) * 10}
                                cy={(spot.y ?? 0) * 7.5}
                                r="50"
                                fill="white"
                                fillOpacity="0"
                                style={{ pointerEvents: 'all' }}
                            />

                            {/* Pulse Effect */}
                            <circle
                                cx={(spot.x ?? 0) * 10}
                                cy={(spot.y ?? 0) * 7.5}
                                r="20"
                                className={`${styles.pulse} ${isLaGloria && spot.id === 'back-hallway' ? styles.priorityPulse : ''}`}
                            />

                            {/* Core Dot */}
                            <circle
                                cx={(spot.x ?? 0) * 10}
                                cy={(spot.y ?? 0) * 7.5}
                                r="8"
                                className={`${styles.core} ${activeHotspotId === spot.id ? styles.activeCore : ''}`}
                                filter="url(#glow)"
                            />
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
}


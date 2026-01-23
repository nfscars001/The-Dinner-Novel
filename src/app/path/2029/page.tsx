'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import PathHero from '@/components/paths/PathHero';
import SceneCardCarousel from '@/components/paths/SceneCardCarousel';
import SceneCard from '@/components/paths/SceneCard';
import SeasoningSelector from '@/components/paths/SeasoningSelector';
import NewsletterForm from '@/components/paths/NewsletterForm';
import PostcardShareModal from '@/components/paths/PostcardShareModal';
import AmbientModeToggle from '@/components/paths/AmbientModeToggle';
import styles from './page.module.css';

// Define the available seasoning options
type NightMood = 'Nostalgic' | 'Peaceful' | 'Unfinished';

function Content2029() {
    const searchParams = useSearchParams();
    // unused variable
    // const unused_source = searchParams.get('source');

    const [seasoning, setSeasoning] = useState<NightMood>('Nostalgic');
    const [currentCard, setCurrentCard] = useState(0);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Analytics (mock)
    useEffect(() => {
        console.log('Event: path_opened', { path: '2029' });
    }, []);

    useEffect(() => {
        console.log('Event: seasoning_selected', { seasoning });
    }, [seasoning]);

    const handleCardChange = (index: number) => {
        setCurrentCard(index);
        console.log('Event: card_completed', { index });
    };

    const handleSeasoningSelect = (option: string) => {
        setSeasoning(option as NightMood);
    };

    const handleAmbientToggle = (isActive: boolean) => {
        console.log('Event: ambient_mode_selected', { isActive });
        if (audioRef.current) {
            if (isActive) {
                audioRef.current.play().catch(err => {
                    console.error('Failed to play ambient sound:', err);
                });
            } else {
                audioRef.current.pause();
            }
        }
    };

    // Dynamic content based on seasoning
    const getMicroSceneText = () => {
        const base = "He watched the airport bistro settle into its late-night rhythm.";
        if (seasoning === 'Peaceful') {
            return `${base} A child pointed at the planes with silent awe. The cutlery clicked like a soft metronome. Life, here, was just proof that things continue.`;
        } else if (seasoning === 'Unfinished') {
            return `${base} A stranger checked their watch for the third time. The cutlery clicked like a question waiting for an answer. Life, here, was happening in the in-between.`;
        }
        // Nostalgic (Default)
        return `${base} A couple laughed, the sound carrying over the empty tables. The cutlery clicked like a memory of a dinner he once had. Life, here, was a soft echo.`;
    };

    const getArtifactBullet = () => {
        if (seasoning === 'Peaceful') return "A napkin folded like a small promise.";
        if (seasoning === 'Unfinished') return "A reflection in glass that could be anything.";
        return "A chair left perfectly aligned.";
    };

    const cards = [
        {
            type: 'quote' as const,
            title: 'Warm Coins Light',
            quote: '“Some places don’t change. We do.”',
            ctaText: 'Turn the Page',
            onCtaClick: () => handleCardChange(1)
        },
        {
            type: 'scene' as const,
            title: 'The Ordinary Miracle',
            content: getMicroSceneText(),
            ctaText: 'Unlock the Artifact',
            onCtaClick: () => handleCardChange(2)
        },
        {
            type: 'artifact' as const,
            title: 'The Empty Chair',
            content: 'A table set for one, or perhaps for someone who hasn’t arrived yet.',
            revealBullets: [
                getArtifactBullet(),
                'A menu that hasn’t been opened.',
                'A pen resting on a clean page.'
            ],
            signature: 'Not an ending. A table set for possibility.',
            ctaText: 'Continue',
            onCtaClick: () => document.getElementById('footer-actions')?.scrollIntoView({ behavior: 'smooth' })
        }
    ];

    return (
        <div className={styles.pageContainer}>
            <PathHero
                title="Between Departures"
                subtitle="2029"
                currentStep={currentCard + 1}
                totalSteps={cards.length}
            />

            <div className={styles.contentWrapper}>

                <AmbientModeToggle onToggle={handleAmbientToggle} />

                <div className={styles.spacer} />

                {currentCard > 0 && (
                    <SeasoningSelector
                        prompt="How does the night feel?"
                        options={['Nostalgic', 'Peaceful', 'Unfinished']}
                        selected={seasoning}
                        onSelect={handleSeasoningSelect}
                    />
                )}

                <div className={styles.spacer} />

                <SceneCardCarousel
                    currentIndex={currentCard}
                    onIndexChange={handleCardChange}
                    totalCards={cards.length}
                >
                    {cards.map((card, idx) => (
                        <SceneCard
                            key={idx}
                            isActive={currentCard === idx}
                            {...card}
                        />
                    ))}
                </SceneCardCarousel>

                <div id="footer-actions" className={styles.footerSection}>
                    <NewsletterForm />

                    <div className={styles.shareSection}>
                        <button className={styles.shareBtn} onClick={() => setIsShareOpen(true)}>
                            Share Postcard
                        </button>
                    </div>
                </div>
            </div>

            <PostcardShareModal
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                title="Share 2029"
            />

            <audio
                ref={audioRef}
                src="/music/airport-34598.mp3"
                loop
                preload="auto"
            />
        </div>
    );
}

export default function Page2029() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content2029 />
        </Suspense>
    );
}

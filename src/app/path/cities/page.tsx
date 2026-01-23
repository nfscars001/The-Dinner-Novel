'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PathHero from '@/components/paths/PathHero';
import SceneCardCarousel from '@/components/paths/SceneCardCarousel';
import SceneCard from '@/components/paths/SceneCard';
import SeasoningSelector from '@/components/paths/SeasoningSelector';
import NewsletterForm from '@/components/paths/NewsletterForm';
import PostcardShareModal from '@/components/paths/PostcardShareModal';
import MapMilestoneModule from '@/components/paths/MapMilestoneModule';
import styles from './page.module.css';

// Define the available seasoning options
type CityMood = 'Fog' | 'Snow' | 'Candlelight';

function CitiesContent() {
    const searchParams = useSearchParams();
    // unused variable
    // const unused_source = searchParams.get('source');

    const [seasoning, setSeasoning] = useState<CityMood>('Fog');
    const [currentCard, setCurrentCard] = useState(0);
    const [isShareOpen, setIsShareOpen] = useState(false);

    // Analytics (mock)
    useEffect(() => {
        console.log('Event: path_opened', { path: 'city' });
    }, []);

    useEffect(() => {
        console.log('Event: seasoning_selected', { seasoning });
    }, [seasoning]);

    const handleCardChange = (index: number) => {
        setCurrentCard(index);
        console.log('Event: card_completed', { index });
    };

    const handleSeasoningSelect = (option: string) => {
        setSeasoning(option as CityMood);
    };

    // Dynamic content based on seasoning
    const getMicroSceneText = () => {
        if (seasoning === 'Snow') {
            return "San Francisco’s fog was like velvet, wrapping him in safety. But Toronto’s winter was like glass—sharp, clear, and impossible to hide from. The cold woke him up in ways he hadn't planned.";
        } else if (seasoning === 'Candlelight') {
            return "San Francisco had been grey days and muted light. Toronto was sudden warmth in dark rooms—candles flickering against the window pane, turning the winter night into a painting he could finally step into.";
        }
        // Fog (Default)
        return "San Francisco’s fog was like a held breath, suspending time. Toronto’s winter was the exhale—visible, sharp, and undeniably real. He realized he had been waiting for the weather to change for years.";
    };

    const getArtifactBullet = () => {
        if (seasoning === 'Snow') return "A date in the corner, written in frost.";
        if (seasoning === 'Candlelight') return "A wax stain on the paper's edge.";
        return "A date in the corner.";
    };

    const cards = [
        {
            type: 'quote' as const,
            title: 'Two Skylines, One Sky',
            quote: '“Distance isn’t measured in miles. It’s measured in what you’re willing to cross.”',
            ctaText: 'Turn the Page',
            onCtaClick: () => handleCardChange(1)
        },
        {
            type: 'scene' as const,
            title: 'Fog / Snow',
            content: getMicroSceneText(),
            ctaText: 'Unlock the Artifact',
            onCtaClick: () => handleCardChange(2)
        },
        {
            type: 'artifact' as const,
            title: 'The Postcard That Never Sent Itself',
            content: 'A small rectangle of cardstock, carried across a continent.',
            revealBullets: [
                getArtifactBullet(),
                'A line crossed out twice.',
                'A stamp that stayed clean.'
            ],
            signature: 'Some messages are written to survive the writer.',
            ctaText: 'Continue',
            onCtaClick: () => document.getElementById('footer-actions')?.scrollIntoView({ behavior: 'smooth' })
        }
    ];

    return (
        <div className={`${styles.pageContainer} ${styles[`theme${seasoning}`]}`}>
            <div className={styles.atmosphere} />

            <PathHero
                title="The City Between"
                subtitle="Two skylines. One story."
                currentStep={currentCard + 1}
                totalSteps={cards.length}
            />

            <div className={styles.contentWrapper}>

                <MapMilestoneModule />

                <div className={styles.spacer} />

                {currentCard > 0 && (
                    <SeasoningSelector
                        prompt="Which city mood are you entering?"
                        options={['Fog', 'Snow', 'Candlelight']}
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
                title="Share The Journey"
            />
        </div>
    );
}

export default function CitiesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CitiesContent />
        </Suspense>
    );
}

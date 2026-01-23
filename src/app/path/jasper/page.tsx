'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PathHero from '@/components/paths/PathHero';
import SceneCardCarousel from '@/components/paths/SceneCardCarousel';
import SceneCard from '@/components/paths/SceneCard';
import SeasoningSelector, { SeasoningOption } from '@/components/paths/SeasoningSelector';
import NewsletterForm from '@/components/paths/NewsletterForm';
import PostcardShareModal from '@/components/paths/PostcardShareModal';
import styles from './page.module.css';

function JasperContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');
    const showBanner = source === 'lagloria';

    const [seasoning, setSeasoning] = useState<SeasoningOption>('Quietly');
    const [currentCard, setCurrentCard] = useState(0);
    const [isShareOpen, setIsShareOpen] = useState(false);

    // Analytics (mock)
    useEffect(() => {
        console.log('Event: path_opened', { path: 'jasper' });
    }, []);

    useEffect(() => {
        console.log('Event: seasoning_selected', { seasoning });
    }, [seasoning]);

    const handleCardChange = (index: number) => {
        setCurrentCard(index);
        console.log('Event: card_completed', { index });
    };

    // Dynamic content based on seasoning
    const getMicroSceneText = () => {
        const base = "San Francisco was wearing sunset like a well-tailored coat—gold at the seams, soft at the edges.";
        const middle = "Currents of fog drifted through the avenues.";

        let mood = "";
        if (seasoning === 'Quietly') {
            mood = "He walked without looking back, letting the silence settle in his chest like an anchor.";
        } else if (seasoning === 'Bravely') {
            mood = "He chin-lifted towards the horizon, daring the memories to follow him across the water.";
        } else { // Half-joking
            mood = "He muttered a sarcastic farewell to the skyline, pretending it was just another Tuesday.";
        }

        return `${base} ${middle} ${mood} He knew it was faith.`;
    };

    const getArtifactBullet = () => {
        if (seasoning === 'Quietly') return "A half-written sentence that stops before the truth.";
        if (seasoning === 'Bravely') return "A bold charcoal streak where the hesitation used to be.";
        return "A caricature of a waiter that looks suspiciously like him.";
    };

    const cards = [
        {
            type: 'quote' as const,
            title: 'The Suitcase of Yes',
            context: 'A decision made with a brave face and shaking hands.',
            quote: '“Some goodbyes don’t break you. They shape you.”',
            ctaText: 'Turn the Page',
            onCtaClick: () => handleCardChange(1)
        },
        {
            type: 'scene' as const,
            title: 'The Last Balcony Light',
            content: getMicroSceneText(),
            ctaText: 'Unlock the Artifact',
            onCtaClick: () => handleCardChange(2)
        },
        {
            type: 'artifact' as const,
            title: 'The Sketchbook Page',
            content: 'A clean page. A dull pencil. A first line that refuses to be perfect…',
            revealBullets: [
                'A quick outline of two cities sharing one sky.',
                getArtifactBullet(),
                'A smudge where the hand paused too long.'
            ],
            signature: 'Art was never his escape. It was his evidence.',
            ctaText: 'Continue',
            onCtaClick: () => document.getElementById('footer-actions')?.scrollIntoView({ behavior: 'smooth' })
        }
    ];

    return (
        <div className={styles.pageContainer}>
            {showBanner && (
                <div className={styles.banner}>
                    Welcome to The Dinner at La Gloria.
                </div>
            )}

            <PathHero
                title="Jasper’s Table"
                subtitle="A man learns how to start over without losing himself."
                currentStep={currentCard + 1}
                totalSteps={cards.length}
            />

            <div className={styles.contentWrapper}>
                {currentCard > 0 && (
                    <SeasoningSelector
                        prompt="How does Jasper walk into the unknown?"
                        options={['Quietly', 'Bravely', 'Half-joking']}
                        selected={seasoning}
                        onSelect={setSeasoning}
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
            />
        </div>
    );
}

export default function JasperPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <JasperContent />
        </Suspense>
    );
}

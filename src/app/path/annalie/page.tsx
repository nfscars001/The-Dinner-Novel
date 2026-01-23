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

function AnnalieContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');
    const showBanner = source === 'lagloria';

    const [seasoning, setSeasoning] = useState<SeasoningOption>('Tender');
    const [currentCard, setCurrentCard] = useState(0);
    const [isShareOpen, setIsShareOpen] = useState(false);

    // Analytics (mock)
    useEffect(() => {
        console.log('Event: path_opened', { path: 'annalie' });
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
        const base = "The gallery opening was a symphony of clinking glasses and hushed critiques. Annalie stood before a canvas that was aggressively blue.";

        let mood = "";
        let action = "";

        if (seasoning === 'Tender') {
            mood = "She leaned in, finding the one stroke where the artist's hand had trembled, creating something accidental and human.";
            action = "“It’s terrified,” she whispered, not to mock, but to understand.";
        } else if (seasoning === 'Bold') {
            mood = "She stood her ground while the crowd flowed around her like a river around a rock, comfortable in her own stillness.";
            action = "“It’s demanding,” she said aloud, catching the eye of a stranger. “And I think it’s right.”";
        } else { // Playful
            mood = "She tilted her head, imagining the painting as a window into an aquarium for very sad fish.";
            action = "“I think it just needs a hug,” she murmured with a grin that made the serious room feel lighter.";
        }

        return `${base} ${mood} ${action}`;
    };

    const getArtifactReveal = () => {
        if (seasoning === 'Tender') return "A note scribbled on a receipt: 'Call him back.'";
        if (seasoning === 'Bold') return "A splash of paint on a silk sleeve, worn like a badge.";
        return "A playlist named 'Songs for rainy Tuesdays'.";
    };

    const cards = [
        {
            type: 'quote' as const,
            title: 'A Different Kind of Light',
            context: 'Warmth with sharp edges of humor.',
            quote: '“Some people don’t save you. They remind you you’re worth saving.”',
            ctaText: 'Turn the Page',
            onCtaClick: () => handleCardChange(1)
        },
        {
            type: 'scene' as const,
            title: 'The Gallery Smile',
            content: getMicroSceneText(),
            ctaText: 'Unlock the Artifact',
            onCtaClick: () => handleCardChange(2)
        },
        {
            type: 'artifact' as const,
            title: 'The Melody She Keeps',
            content: 'A small ritual—music or a creative habit—that makes the world feel less heavy.',
            revealBullets: [
                'A dried flower from a bouquet she bought for herself.',
                getArtifactReveal(),
                'A sketch of a stranger laughing.'
            ],
            signature: 'She doesn’t enter a room to be seen. She enters it to feel.',
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
                title="Annalie’s Corner"
                subtitle="Warmth, wit, and a gentle kind of courage."
                currentStep={currentCard + 1}
                totalSteps={cards.length}
            />

            <div className={styles.contentWrapper}>
                {currentCard > 0 && (
                    <SeasoningSelector
                        prompt="How does Annalie move through the world?"
                        options={['Tender', 'Bold', 'Playful']}
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
                title="Share Annalie's Story"
            />
        </div>
    );
}

export default function AnnaliePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AnnalieContent />
        </Suspense>
    );
}

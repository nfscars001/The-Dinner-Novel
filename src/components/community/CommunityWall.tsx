'use client';

import { useState, useEffect } from 'react';
import styles from './CommunityWall.module.css';

interface LoveStory {
    id: string;
    display_name: string | null;
    is_anonymous: boolean;
    city: string | null;
    title: string;
    story: string;
    created_at: string;
}

// Placeholder stories for initial display
const placeholderStories: LoveStory[] = [
    {
        id: '1',
        display_name: 'Elena',
        is_anonymous: false,
        city: 'Vancouver',
        title: 'The Coffee Shop Coincidence',
        story: "We met at the same coffee shop every morning for months without ever speaking. One day, the barista mixed up our orders. That mistake became the first chapter of our story.",
        created_at: '2024-01-15',
    },
    {
        id: '2',
        display_name: null,
        is_anonymous: true,
        city: 'New York',
        title: 'Letters Across the Ocean',
        story: "Long distance was supposed to end us. Instead, we wrote letters—real ones, on paper. Three years and 200 letters later, the distance made us stronger than we ever imagined.",
        created_at: '2024-02-20',
    },
    {
        id: '3',
        display_name: 'Marcus',
        is_anonymous: false,
        city: 'Los Angeles',
        title: 'The Second Chance',
        story: "We divorced after five years. Ten years later, we found each other again at our daughter's wedding. Sometimes love needs time to grow up.",
        created_at: '2024-03-10',
    },
];

export default function CommunityWall() {
    const [stories, setStories] = useState<LoveStory[]>(placeholderStories);
    const [loading, setLoading] = useState(true);
    const [expandedStory, setExpandedStory] = useState<string | null>(null);

    useEffect(() => {
        async function fetchStories() {
            try {
                const response = await fetch('/api/stories?status=approved&limit=6');
                if (response.ok) {
                    const data = await response.json();
                    if (data.stories && data.stories.length > 0) {
                        setStories(data.stories);
                    }
                }
            } catch {
                // Keep placeholder stories on error
            } finally {
                setLoading(false);
            }
        }

        fetchStories();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const truncateStory = (story: string, maxLength: number = 150) => {
        if (story.length <= maxLength) return story;
        return story.substring(0, maxLength).trim() + '...';
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Love Stories</span>
                    <h2 className={styles.title}>The Wall of Hearts</h2>
                    <p className={styles.subtitle}>
                        Stories from readers like you, proving that love finds a way.
                    </p>
                </div>

                <div className={styles.wall}>
                    {loading ? (
                        <div className={styles.loading}>
                            <span>Loading stories...</span>
                        </div>
                    ) : (
                        stories.map((story) => (
                            <article
                                key={story.id}
                                className={`${styles.card} ${expandedStory === story.id ? styles.expanded : ''}`}
                                onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                            >
                                <div className={styles.cardInner}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.storyTitle}>{story.title}</h3>
                                        <span className={styles.storyMeta}>
                                            {story.is_anonymous ? 'Anonymous' : story.display_name}
                                            {story.city && ` • ${story.city}`}
                                        </span>
                                    </div>
                                    <p className={styles.storyText}>
                                        {expandedStory === story.id ? story.story : truncateStory(story.story)}
                                    </p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.date}>{formatDate(story.created_at)}</span>
                                        <span className={styles.readMore}>
                                            {expandedStory === story.id ? 'Read less' : 'Read more'}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))
                    )}
                </div>

                <div className={styles.callout}>
                    <p>
                        <span className={styles.calloutIcon}>✦</span>
                        Have a story to share?{' '}
                        <a href="#share-your-story" className={styles.calloutLink}>
                            Add yours to the wall
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './community.module.css';

type Story = {
    id: string;
    display_name: string;
    city: string;
    title: string;
    story: string;
    created_at: string;
};

export default function CommunityWall() {
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStories() {
            const { data, error } = await supabase
                .from('love_stories')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false })
                .limit(6);

            if (!error && data) {
                setStories(data);
            }
            setLoading(false);
        }

        fetchStories();
    }, []);

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>The Wall of Stories</h2>

            {loading ? (
                <div className={styles.loading}>Loading stories...</div>
            ) : stories.length > 0 ? (
                <div className={styles.grid}>
                    {stories.map(story => (
                        <div key={story.id} className={styles.card}>
                            <h3 className={styles.cardTitle}>{story.title}</h3>
                            <p className={styles.cardBody}>{story.story}</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>{story.display_name}</span>
                                {story.city && <span className={styles.city}> — {story.city}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    <p>The wall is quiet. Be the first to write.</p>
                </div>
            )}
        </section>
    );
}

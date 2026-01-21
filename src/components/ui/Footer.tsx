'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('newsletter_subscribers')
                .insert([{ email, source: 'footer' }]);

            if (error) throw error;
            setStatus('success');
            setEmail('');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.newsletter}>
                    <h3 className={styles.heading}>Receive Love Letters</h3>
                    <p className={styles.text}>Updates from the story world, straight to your inbox.</p>

                    {status === 'success' ? (
                        <p className={styles.success}>You are on the list.</p>
                    ) : (
                        <form onSubmit={handleSubscribe} className={styles.form}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.input}
                            />
                            <button type="submit" className={styles.btn}>Subscribe</button>
                        </form>
                    )}
                    {status === 'error' && <p className={styles.error}>Already subscribed or invalid email.</p>}
                </div>

                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        <a href="#" className={styles.link}>Instagram</a>
                        <a href="#" className={styles.link}>Share</a>
                    </div>
                    <div className={styles.legal}>
                        <a href="#" className={styles.link}>Privacy</a>
                        <a href="#" className={styles.link}>Terms</a>
                        <span className={styles.copy}>&copy; {new Date().getFullYear()} The Dinner</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

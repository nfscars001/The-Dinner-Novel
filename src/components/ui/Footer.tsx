'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        try {
            await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            setSubmitted(true);
            setEmail('');
        } catch {
            // Silently fail for now
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer id="newsletter" className={styles.footer}>
            <div className={styles.container}>
                {/* Newsletter Section */}
                <div className={styles.newsletterSection}>
                    <div className={styles.newsletterContent}>
                        <span className={styles.preTitle}>Stay Connected</span>
                        <h2 className={styles.title}>Receive Love Letters</h2>
                        <p className={styles.subtitle}>
                            Exclusive excerpts, behind-the-scenes stories, and updates
                            delivered to your inbox like handwritten notes.
                        </p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {submitted ? (
                            <div className={styles.success}>
                                <span>✦</span> Thank you! Check your inbox for a welcome message.
                            </div>
                        ) : (
                            <>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isSubmitting}
                                />
                                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </>
                        )}
                    </form>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Social & Links */}
                <div className={styles.bottomSection}>
                    <div className={styles.social}>
                        <span className={styles.socialLabel}>Follow the Story</span>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://www.instagram.com/the_dinner_novel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Follow on Instagram"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <button className={styles.shareBtn} onClick={() => navigator.share?.({ url: window.location.href, title: 'The Dinner - A Romance Novel' })}>
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                                </svg>
                                <span>Share</span>
                            </button>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <Link href="/privacy" className={styles.link}>Privacy</Link>
                        <span className={styles.linkDivider}>•</span>
                        <Link href="/terms" className={styles.link}>Terms</Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>© {currentYear} The Dinner. A love story between two cities.</p>
                </div>
            </div>
        </footer>
    );
}

'use client';

import { useState } from 'react';
import styles from './StoryForm.module.css';
import Modal from '../ui/Modal';

interface FormData {
    displayName: string;
    isAnonymous: boolean;
    city: string;
    title: string;
    story: string;
    consentSocial: boolean;
    email: string;
}

const initialFormData: FormData = {
    displayName: '',
    isAnonymous: false,
    city: '',
    title: '',
    story: '',
    consentSocial: false,
    email: '',
};

export default function StoryForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const storyLength = formData.story.length;
    const isValidLength = storyLength >= 100 && storyLength <= 2000;
    const isFormValid =
        formData.title.trim() !== '' &&
        formData.story.trim() !== '' &&
        isValidLength &&
        (formData.isAnonymous || formData.displayName.trim() !== '');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/stories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    display_name: formData.isAnonymous ? null : formData.displayName,
                    is_anonymous: formData.isAnonymous,
                    city: formData.city || null,
                    title: formData.title,
                    story: formData.story,
                    consent_social: formData.consentSocial,
                    email: formData.email || null,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit story');
            }

            setShowSuccess(true);
            setFormData(initialFormData);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="share-your-story" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Your Turn</span>
                    <h2 className={styles.title}>Share Your Story</h2>
                    <p className={styles.subtitle}>
                        Every love has a story worth telling. Share yours, and it might just
                        inspire the next chapter of someone else's journey.
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* Name Row */}
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label htmlFor="displayName">Display Name</label>
                            <input
                                type="text"
                                id="displayName"
                                name="displayName"
                                placeholder="Your name or alias"
                                value={formData.displayName}
                                onChange={handleChange}
                                disabled={formData.isAnonymous}
                            />
                        </div>
                        <div className={styles.checkboxField}>
                            <input
                                type="checkbox"
                                id="isAnonymous"
                                name="isAnonymous"
                                checked={formData.isAnonymous}
                                onChange={handleChange}
                            />
                            <label htmlFor="isAnonymous">Share anonymously</label>
                        </div>
                    </div>

                    {/* City */}
                    <div className={styles.field}>
                        <label htmlFor="city">City (optional)</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Where did your story unfold?"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Story Title */}
                    <div className={styles.field}>
                        <label htmlFor="title">Story Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Give your story a name"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Story Text */}
                    <div className={styles.field}>
                        <label htmlFor="story">Your Story</label>
                        <textarea
                            id="story"
                            name="story"
                            placeholder="Tell us about your love story, the moments that mattered, the lessons learned..."
                            value={formData.story}
                            onChange={handleChange}
                            rows={8}
                            required
                        />
                        <div className={styles.charCount}>
                            <span className={!isValidLength && storyLength > 0 ? styles.invalid : ''}>
                                {storyLength} / 2000 characters
                            </span>
                            {storyLength > 0 && storyLength < 100 && (
                                <span className={styles.hint}>Minimum 100 characters</span>
                            )}
                        </div>
                    </div>

                    {/* Consent */}
                    <div className={styles.checkboxField}>
                        <input
                            type="checkbox"
                            id="consentSocial"
                            name="consentSocial"
                            checked={formData.consentSocial}
                            onChange={handleChange}
                        />
                        <label htmlFor="consentSocial">
                            I consent to have my story featured on social media
                        </label>
                    </div>

                    {/* Email (optional) */}
                    <div className={styles.field}>
                        <label htmlFor="email">Email (optional)</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="For exclusive content and updates"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span className={styles.fieldHint}>
                            We&apos;ll send you a special thank you gift!
                        </span>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <button
                        type="submit"
                        className={`btn-primary ${styles.submitBtn}`}
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Share Your Story'}
                    </button>
                </form>
            </div>

            {/* Success Modal */}
            <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)}>
                <div className={styles.successModal}>
                    <span className={styles.successIcon}>✦</span>
                    <h3>Thank You for Sharing</h3>
                    <p>
                        Your story has been received. Once reviewed, it may appear on our
                        Community Wall of love stories from around the world.
                    </p>
                    <div className={styles.freebies}>
                        <h4>Your Thank You Gifts:</h4>
                        <ul>
                            <li>📱 Quote Wallpaper (coming to your email)</li>
                            <li>💌 Digital Postcard Generator</li>
                            <li>📖 Early Chapter Preview (unlocks soon)</li>
                        </ul>
                    </div>
                    <button
                        className="btn-secondary"
                        onClick={() => setShowSuccess(false)}
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </section>
    );
}

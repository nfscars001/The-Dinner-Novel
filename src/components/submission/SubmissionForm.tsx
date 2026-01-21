'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './submission.module.css';

export default function SubmissionForm() {
    const [formData, setFormData] = useState({
        displayName: '',
        city: '',
        title: '',
        story: '',
        consent: false,
        email: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, consent: e.target.checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.consent) return alert("Please consent to share your story.");

        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('love_stories')
                .insert([
                    {
                        display_name: formData.displayName || 'Anonymous',
                        city: formData.city,
                        title: formData.title,
                        story: formData.story,
                        consent: formData.consent,
                        email_optional: formData.email,
                        status: 'pending' // Default status
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ displayName: '', city: '', title: '', story: '', consent: false, email: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <section className={styles.container}>
                <div className={styles.successMessage}>
                    <h2 className={styles.heading}>Table Reserved</h2>
                    <p>Your story has been received. Thank you for sharing a piece of your heart.</p>
                    <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Share Another</button>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Share Your Story</h2>
            <p className={styles.subtext}>Leave a love letter for the world to read.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="Name (or leave blank for Anonymous)"
                        value={formData.displayName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                <input
                    type="text"
                    name="title"
                    placeholder="Title of your story"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.fullWidth}`}
                />

                <textarea
                    name="story"
                    placeholder="Write your story here..."
                    required
                    value={formData.story}
                    onChange={handleChange}
                    className={styles.textarea}
                    maxLength={2000}
                />

                <div className={styles.consentGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleCheckbox}
                            required
                            className={styles.checkbox}
                        />
                        <span>I agree to feature this story on The Dinner platform.</span>
                    </label>
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email (optional, for special gifts)"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.fullWidth}`}
                />

                <div className={styles.actions}>
                    <button type="submit" disabled={status === 'submitting'} className={styles.submitBtn}>
                        {status === 'submitting' ? 'Saving Place...' : 'Submit to the Menu'}
                    </button>
                </div>

                {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
            </form>
        </section>
    );
}

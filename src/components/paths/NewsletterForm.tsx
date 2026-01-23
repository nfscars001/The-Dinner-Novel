'use client';

import { useState } from 'react';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Mock submission
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Reserve a Seat</h4>
            <p className={styles.description}>Join our list for updates and love letters.</p>

            {status === 'success' ? (
                <p className={styles.successMsg}>Your seat is reserved. Welcome.</p>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        disabled={status === 'submitting'}
                    />
                    <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Reserving...' : 'Reserve a Seat'}
                    </button>
                </form>
            )}
        </div>
    );
}

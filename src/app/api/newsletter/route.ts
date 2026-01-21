import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, source } = body;

        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert({
                email: email.toLowerCase().trim(),
                source: source || 'website',
            });

        if (error) {
            // Handle duplicate email
            if (error.code === '23505') {
                return NextResponse.json(
                    { message: 'Already subscribed!' },
                    { status: 200 }
                );
            }
            throw error;
        }

        return NextResponse.json(
            { message: 'Successfully subscribed!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe' },
            { status: 500 }
        );
    }
}

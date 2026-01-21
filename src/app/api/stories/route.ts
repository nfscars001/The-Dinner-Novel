import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            display_name,
            is_anonymous,
            city,
            title,
            story,
            consent_social,
            email,
        } = body;

        // Validate required fields
        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            return NextResponse.json(
                { error: 'Story title is required' },
                { status: 400 }
            );
        }

        if (!story || typeof story !== 'string' || story.trim().length < 100) {
            return NextResponse.json(
                { error: 'Story must be at least 100 characters' },
                { status: 400 }
            );
        }

        if (story.length > 2000) {
            return NextResponse.json(
                { error: 'Story must be 2000 characters or less' },
                { status: 400 }
            );
        }

        // Validate email if provided
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return NextResponse.json(
                    { error: 'Invalid email format' },
                    { status: 400 }
                );
            }
        }

        const { error } = await supabase.from('love_stories').insert({
            display_name: is_anonymous ? null : display_name?.trim() || null,
            is_anonymous: !!is_anonymous,
            city: city?.trim() || null,
            title: title.trim(),
            story: story.trim(),
            consent_social: !!consent_social,
            email: email?.toLowerCase().trim() || null,
            status: 'pending',
        });

        if (error) {
            throw error;
        }

        return NextResponse.json(
            { message: 'Story submitted successfully!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Story submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit story' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status') || 'approved';
        const limit = parseInt(searchParams.get('limit') || '10', 10);

        const { data, error } = await supabase
            .from('love_stories')
            .select('id, display_name, is_anonymous, city, title, story, created_at')
            .eq('status', status)
            .order('created_at', { ascending: false })
            .limit(limit);

        if (error) {
            throw error;
        }

        return NextResponse.json({ stories: data }, { status: 200 });
    } catch (error) {
        console.error('Fetch stories error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch stories' },
            { status: 500 }
        );
    }
}

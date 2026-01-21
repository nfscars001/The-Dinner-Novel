-- The Dinner - Supabase Schema
-- Run this in Supabase SQL Editor

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Love stories table
CREATE TABLE IF NOT EXISTS love_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name TEXT,
  is_anonymous BOOLEAN DEFAULT FALSE,
  city TEXT,
  title TEXT NOT NULL,
  story TEXT NOT NULL,
  consent_social BOOLEAN DEFAULT FALSE,
  email TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE love_stories ENABLE ROW LEVEL SECURITY;

-- Public can subscribe to newsletter (insert only)
CREATE POLICY "Public can subscribe" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Public can submit stories (insert only)
CREATE POLICY "Public can submit stories" ON love_stories
  FOR INSERT WITH CHECK (true);

-- Public can read only approved stories
CREATE POLICY "Public can read approved stories" ON love_stories
  FOR SELECT USING (status = 'approved');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_stories_status ON love_stories(status);
CREATE INDEX IF NOT EXISTS idx_stories_created_at ON love_stories(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

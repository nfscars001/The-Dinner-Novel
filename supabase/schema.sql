-- Create table for newsletter
create table if not exists newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  source text default 'website',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create table for love stories
create type story_status as enum ('pending', 'approved', 'rejected');

create table if not exists love_stories (
  id uuid default gen_random_uuid() primary key,
  display_name text not null default 'Anonymous',
  city text,
  title text not null,
  story text not null,
  consent boolean not null default false,
  email_optional text,
  status story_status default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table newsletter_subscribers enable row level security;
alter table love_stories enable row level security;

-- Policies for Newsletter
-- Allow anyone to insert (recaptcha recommended in prod)
create policy "Allow anonymous insert for newsletter"
  on newsletter_subscribers
  for insert
  to anon
  with check (true);

-- Policies for Love Stories
-- Allow anyone to insert
create policy "Allow anonymous insert for stories"
  on love_stories
  for insert
  to anon
  with check (true);

-- Allow anyone to read approved stories
create policy "Allow anyone to read approved stories"
  on love_stories
  for select
  to anon
  using (status = 'approved');

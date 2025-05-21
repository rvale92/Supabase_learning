-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Drop existing tables with CASCADE to handle dependencies
drop table if exists topics cascade;
drop table if exists certifications cascade;
drop table if exists quizzes cascade;

-- Create certifications table
create table certifications (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  code text,
  description text,
  vendor text,
  level text,
  exam_time integer,
  passing_score integer,
  number_of_questions integer,
  price numeric,
  prerequisites text,
  validity text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create topics table
create table topics (
  id uuid default uuid_generate_v4() primary key,
  certification_id uuid references certifications(id) on delete cascade,
  title text not null,
  description text,
  percentage integer,
  subtopics text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone
);

-- Create quizzes table
create table quizzes (
  id uuid default uuid_generate_v4() primary key,
  certification_id uuid references certifications(id) on delete cascade,
  title text not null,
  description text,
  questions jsonb,
  time_limit integer,
  passing_score integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add indexes
create index idx_certifications_title on certifications(title);
create index idx_topics_certification_id on topics(certification_id);
create index idx_quizzes_certification_id on quizzes(certification_id);

-- Enable Row Level Security (RLS)
alter table certifications enable row level security;
alter table topics enable row level security;
alter table quizzes enable row level security;

-- Create policies
create policy "Enable read access for all users" on certifications
  for select using (true);

create policy "Enable read access for all users" on topics
  for select using (true);

create policy "Enable read access for all users" on quizzes
  for select using (true);

-- Refresh schema cache
notify pgrst, 'reload schema'; 
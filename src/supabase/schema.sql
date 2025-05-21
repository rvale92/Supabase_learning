-- Create topics table if it doesn't exist
create table if not exists public.topics (
    id uuid default gen_random_uuid() primary key,
    certification_id uuid references public.certifications(id) on delete cascade,
    title text not null,
    description text not null,
    percentage integer not null check (percentage >= 0 and percentage <= 100),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.topics enable row level security;

-- Create policies
create policy "Enable read access for all users" on public.topics
    for select using (true);

create policy "Enable insert for authenticated users only" on public.topics
    for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on public.topics
    for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on public.topics
    for delete using (auth.role() = 'authenticated');

-- Create updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql security definer;

create trigger handle_topics_updated_at
    before update on public.topics
    for each row
    execute procedure public.handle_updated_at(); 
create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null,
  landing_page text not null,
  status text not null default 'new',
  planner_version text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  contact_consent boolean not null default false,
  property_type text null,
  county text null,
  year_built_band text null,
  homeowner_status text null,
  heating_system text null,
  ber_status text null,
  ber_rating_band text null,
  attic_insulation text null,
  wall_insulation text null,
  window_condition text null,
  previous_upgrades text[] not null default '{}',
  upgrade_interests text[] not null default '{}',
  move_within_six_months text null,
  timeline text null,
  budget_band text null,
  quotes_or_installer_discussions text null,
  open_to_installer_contact text null,
  notes text null
);

alter table public.leads enable row level security;

drop policy if exists "anon_can_insert_leads" on public.leads;

create policy "anon_can_insert_leads"
on public.leads
for insert
to anon
with check (true);

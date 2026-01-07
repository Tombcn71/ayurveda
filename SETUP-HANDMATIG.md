# Handmatige Sanity Setup (Zonder CLI)

Als je al een Sanity project hebt, kun je handmatig configureren:

## Stap 1: Project ID Ophalen

1. Ga naar [sanity.io/manage](https://www.sanity.io/manage)
2. Klik op je project
3. Ga naar **Settings** (tandwiel icoon links)
4. Ga naar **API** tab
5. Kopieer je **Project ID** (bijv. `abc123xyz`)

## Stap 2: Environment Variabelen

Maak een `.env.local` bestand in de root van je project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=je-project-id-hier
NEXT_PUBLIC_SANITY_DATASET=production
```

**Vervang `je-project-id-hier` met je echte Project ID!**

## Stap 3: Sanity Studio Starten

```bash
cd ayurveda
npm run dev
```

Ga naar: http://localhost:3000/admin

## Stap 4: Content Types Toevoegen

In Sanity Studio (via `/admin`):
1. Je ziet je content types (Page, Post, Product, Service, etc.)
2. Begin met content aanmaken!

## Dataset

- Standaard dataset is altijd `production`
- Je hoeft niets aan te maken
- Gebruik gewoon `production` in je `.env.local`

## Als je nog geen project hebt

1. Ga naar [sanity.io](https://www.sanity.io)
2. Klik op "Create project"
3. Kies een naam (bijv. "Ayurveda Salud")
4. Dataset naam: `production` (standaard)
5. Volg dan de stappen hierboven


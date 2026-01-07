# Sanity CMS Setup Guide

## Stap 1: Sanity Account & Project Aanmaken

1. Ga naar [sanity.io](https://www.sanity.io)
2. Klik op "Get started" of "Sign up"
3. Maak een account aan (gratis)
4. Klik op "Create new project"
5. Kies een project naam (bijv. "Ayurveda Salud")
6. Kies een dataset naam (standaard is "production")

## Stap 2: Project ID & Dataset Ophalen

Na het aanmaken van je project:

1. **Project ID vinden:**
   - Ga naar je project dashboard
   - Klik op "Settings" (tandwiel icoon)
   - Ga naar "API" tab
   - Je ziet je **Project ID** (bijv. `abc123xyz`)

2. **Dataset naam:**
   - Standaard dataset is altijd `production`
   - Je kunt meerdere datasets hebben (development, staging, production)
   - Voor nu gebruik je gewoon `production`

## Stap 3: Environment Variabelen Instellen

Maak een `.env.local` bestand in de root van je project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
```

**Vervang `abc123xyz` met je echte Project ID!**

## Stap 4: Sanity Studio Initialiseren

```bash
cd ayurveda
npm run sanity init
```

**Tijdens de init:**
- Kies "Create new project" OF "Use existing project"
- Als je "Use existing project" kiest, selecteer je project
- Kies dataset: `production` (of maak een nieuwe aan)
- Kies output path: `./sanity` (of laat leeg voor root)

## Stap 5: Sanity Studio Starten

Je hebt twee opties:

### Optie A: Via Next.js (aanbevolen)
```bash
npm run dev
```
Ga naar: http://localhost:3000/admin

### Optie B: Standalone Sanity Studio
```bash
npm run sanity dev
```
Ga naar: http://localhost:3333

## Dataset Uitleg

**Wat is een dataset?**
- Een dataset is als een database
- Je kunt meerdere datasets hebben:
  - `production` - Live content
  - `development` - Test content
  - `staging` - Pre-production content

**Voor nu:**
- Gebruik gewoon `production` (standaard)
- Later kun je extra datasets toevoegen voor development

## Troubleshooting

**"Project ID not found"**
- Check of je Project ID correct is in `.env.local`
- Zorg dat je `.env.local` in de root staat (niet in `src/`)

**"Dataset not found"**
- Standaard dataset is altijd `production`
- Als je een andere naam gebruikt, pas `.env.local` aan
- Je kunt datasets aanmaken in Sanity dashboard → Settings → Datasets

**"Cannot connect to Sanity"**
- Check je internet verbinding
- Check of je Project ID correct is
- Check of je dataset naam klopt

## Volgende Stappen

1. ✅ Project ID in `.env.local` zetten
2. ✅ Dataset naam instellen (meestal `production`)
3. ✅ `npm run sanity init` uitvoeren
4. ✅ `npm run dev` starten
5. ✅ Ga naar `/admin` en maak je eerste content!


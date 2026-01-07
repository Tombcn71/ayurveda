# Sanity CMS Setup

Deze applicatie gebruikt Sanity CMS voor content management.

## Setup

### 1. Sanity Project Aanmaken

1. Ga naar [sanity.io](https://www.sanity.io) en maak een account
2. Maak een nieuw project aan
3. Noteer je Project ID en Dataset naam

### 2. Environment Variabelen

Maak een `.env.local` bestand aan in de root van het project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Sanity Studio Initialiseren

```bash
npm run sanity init
```

Volg de instructies om je Sanity project te koppelen.

### 4. Sanity Studio Starten

```bash
npm run sanity dev
```

Of via Next.js admin route:
- Ga naar: http://localhost:3000/admin

## Content Types

De volgende content types zijn beschikbaar:

1. **Page** - Statische pagina's
2. **Post** - Blog posts en artikelen
3. **Product** - Producten voor de webshop
4. **Service** - Diensten en behandelingen
5. **Media** - Media library
6. **Category** - Categorieën voor posts

## Data Fetching

Gebruik de helper functies in `lib/sanity/fetch.ts`:

```typescript
import { getPageBySlug, getAllPosts, getFeaturedProducts } from '@/lib/sanity/fetch'

// Haal een pagina op
const page = await getPageBySlug('que-es-ayurveda')

// Haal alle posts op
const posts = await getAllPosts()

// Haal featured producten op
const products = await getFeaturedProducts()
```

## Image URLs

Gebruik de `urlFor` functie voor Sanity images:

```typescript
import { urlFor } from '@/lib/sanity/image'

const imageUrl = urlFor(image).width(800).height(600).url()
```

## Deployment

Voor productie:
1. Zet je environment variabelen in je hosting platform
2. Sanity Studio is beschikbaar via `/admin` route
3. Content wordt opgehaald via de Sanity CDN (snel!)

## Gratis Tier

Sanity heeft een gratis tier met:
- 10GB asset storage
- 5M API requests/maand
- 3 users
- Perfect voor kleine tot middelgrote projecten!


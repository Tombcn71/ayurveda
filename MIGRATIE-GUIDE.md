# Content Migratie naar Sanity CMS

## Situatie Nu

Je hebt al content in je app, maar die staat **hardcoded** in React componenten:
- `/guia/que-es-ayurveda/page.tsx` - volledige pagina met content
- `/guia/doshas/page.tsx` - volledige pagina met content  
- `/guia/page.tsx` - overzichtspagina met lijst van guías

## Wat We Gaan Doen

### Optie 1: Handmatige Migratie (Aanbevolen)
1. **Content kopiëren naar Sanity Studio**
   - Ga naar http://localhost:3000/admin
   - Maak nieuwe "Page" documenten aan
   - Kopieer de content uit je componenten naar Sanity
   - Upload afbeeldingen naar Sanity Media Library

2. **Pagina's aanpassen om data uit Sanity te halen**
   - Vervang hardcoded content met Sanity queries
   - Gebruik `getPageBySlug()` functie

### Optie 2: Automatische Migratie Script
- Script maken dat je bestaande content exporteert
- Script dat content importeert naar Sanity

## Stappen Plan

### Stap 1: Content in Sanity Aanmaken

Voor elke pagina die je hebt:

1. **"Qué es Ayurveda" pagina:**
   - Ga naar Sanity Studio → "Page"
   - Klik "Create"
   - Title: "Qué es Ayurveda"
   - Slug: "que-es-ayurveda" (automatisch)
   - Content: Kopieer alle tekst uit `page.tsx`
   - Featured Image: Upload afbeelding
   - Meta: Voeg SEO informatie toe
   - Published: ✅
   - Klik "Publish"

2. **"Doshas" pagina:**
   - Zelfde proces
   - Slug: "doshas"

3. **Overzichtspagina:**
   - Maak een "Page" met slug "guia"
   - Of gebruik de lijst functie om alle pages op te halen

### Stap 2: Pagina's Aanpassen

We gaan de pagina's aanpassen om data uit Sanity te halen in plaats van hardcoded content.

**Voorbeeld voor `/guia/que-es-ayurveda/page.tsx`:**

```typescript
import { getPageBySlug } from '@/lib/sanity/fetch'
import { urlFor } from '@/lib/sanity/image'
import { PortableText } from 'next-sanity'

export default async function QueEsAyurvedaGuia() {
  const page = await getPageBySlug('que-es-ayurveda')
  
  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <>
      <Header />
      <article>
        <h1>{page.title}</h1>
        {page.featuredImage && (
          <Image 
            src={urlFor(page.featuredImage).url()} 
            alt={page.featuredImage.alt}
          />
        )}
        <PortableText value={page.content} />
      </article>
      <Footer />
    </>
  )
}
```

## Voordelen Na Migratie

✅ **Content beheerbaar** via Sanity Studio (geen code wijzigingen nodig)
✅ **SEO metadata** centraal beheerbaar
✅ **Afbeeldingen** geoptimaliseerd via Sanity CDN
✅ **Content hergebruik** - zelfde content op meerdere plekken
✅ **Versioning** - Sanity houdt versies bij
✅ **Workflow** - draft/publish workflow

## Hulp Nodig?

Wil je dat ik:
1. Een voorbeeld pagina aanpas om data uit Sanity te halen?
2. Een migratie script maak?
3. Alle pagina's in één keer aanpas?

Laat me weten wat je voorkeur heeft!


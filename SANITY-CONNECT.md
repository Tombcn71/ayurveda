# Sanity Studio Verbinden

## Wat je nu ziet

Je ziet een scherm met twee opties:
1. **Register studio** - Voor productie
2. **Add development host** - Voor development (KIES DEZE!)

## Wat te doen

### Kies "Add development host"

Dit is de juiste optie voor development omdat:
- ✅ Werkt op localhost
- ✅ Geen schema syncing nodig
- ✅ Perfect voor development
- ✅ Je kunt later altijd "Register studio" doen voor productie

### Na het klikken op "Add development host"

1. Je ziet een veld voor de host URL
2. Voer in: `http://localhost:3000`
3. Klik op "Add" of "Save"
4. Je studio zou nu moeten werken!

## Verschil tussen de opties

**Add development host:**
- Voor development (localhost)
- Geen registratie nodig
- Werkt direct
- Perfect voor nu!

**Register studio:**
- Voor productie
- Vereist schema syncing
- Meer features (Content Agent, etc.)
- Later doen als je naar productie gaat

## Als het niet werkt

1. Check of je `.env.local` correct is:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=je-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. Refresh de pagina (Cmd+R of F5)

3. Check de browser console voor errors

## Volgende stap

Na het toevoegen van de development host:
- Je ziet je content types (Page, Post, Product, etc.)
- Begin met content aanmaken!


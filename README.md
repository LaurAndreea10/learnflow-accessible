# LINGUAX Accessible — zero-cost GitHub Pages demo

Aplicație educațională gamificată inspirată de mecanici de learning apps, dar cu identitate vizuală diferită: dark cosmic UI, accent auriu/violet/teal, fonturi de sistem și zero servicii plătite.

## Implementat

- Acasă / traseu de lecții
- Practică
- Quest-uri
- Clasament
- Profil
- Shop mock fără plăți reale
- Panou de accesibilitate
- Design complet pentru lecții: multiple choice, aranjare cuvinte, feedback, rezultat, XP
- Backend mock local în `App.jsx`
- Persistență locală prin `localStorage`
- Fără API extern, fără Firebase/Supabase, fără server, fără fonturi externe

## Accesibilitate

- Skip link
- Navigare cu tastatura
- Focus vizibil
- ARIA live pentru anunțuri
- `role="dialog"` pentru lecție
- `progressbar` cu valori ARIA
- Contrast ridicat
- Text mare
- Reduce motion
- Font lizibil
- Mod simplificat

## Zero cost

Rulare locală:

```bash
npm install
npm run dev
```

Build pentru GitHub Pages:

```bash
npm run build
```

Publică folderul `dist` pe GitHub Pages. Configurația Vite are `base: './'`, deci merge pe subfolder GitHub Pages.

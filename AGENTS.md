# Cynthia Cosmétique — Guide de travail

Tu travailles sur Cynthia Cosmétique, un site vitrine premium pour un institut de beauté haut de gamme basé à Douala.

---

## Charte graphique réelle (appliquée dans le code)

### Palétique (depuis `globals.css`)

| Rôle | HEX | Usage |
|---|---|---|
| Bleu Royal | `#093485` | Structure, titres, navigation, texte principal |
| Or Luxury | `#FDCF02` | Accent, CTA, highlights (≤10% surface) |
| Or Profond | `#C9A227` | Texte doré lisible sur fond clair |
| Ivoire | `#FAFAF8` | Fond principal, respiration |
| Crème | `#F7F3EA` | Sections chaudes, fond de cartes |
| Ardoise | `#4A5568` | Corps de texte (jamais de noir pur) |
| Ardoise doux | `#718096` | Texte secondaire, metadata |

### Règle absolue
**Le noir (#000) est proscrit. Aucune zone sombre.**
Le Midnight (#0D0D0F) du design spec N'EST PAS UTILISÉ — toute zone qui serait sombre dans une maquette doit être adaptée en crème/ivoire avec des overlays clairs.

### Polices (réelles, pas celles du spec .md)
- **Display** : Playfair Display (serif, éditorial) — titres, hero
- **Interface** : Inter (sans-serif) — navigation, body, boutons

Le spec mentionne Clash Display + Manrope mais ces fichiers sont absents. Le code utilise Playfair + Inter et c'est la référence.

### Design System Tokens (Tailwind v4 via `@theme`)
- Couleurs : `bg-royal`, `text-royal`, `bg-gold`, `text-gold-deep`, `bg-ivory`, `bg-cream`, `text-slate-ink`, etc.
- Ombres : bleutées, jamais noires (royal-tinted rgba, ≤22% opacity)
- Easing luxe : `cubic-bezier(0.22, 1, 0.36, 1)` — variable `--ease-luxe`
- Radius : `rounded-2xl` (1.25rem), `rounded-3xl` (1.75rem)
- Container : `container-luxe` (max-w-1280px, padding responsive)

---

## Structure du projet

```
app/
├── globals.css      # Design tokens + base + utilities
├── layout.tsx       # Root (Playfair + Inter via next/font)
└── page.tsx         # Home — assemble les sections
components/
├── ui/              # Primitives réutilisables
│   ├── Button.tsx
│   ├── Filaments.tsx
│   ├── Reveal.tsx
│   ├── SectionHeading.tsx
│   ├── Stars.tsx
│   ├── WhatsAppIcon.tsx
│   └── icons.tsx
├── Navbar.tsx
├── Hero.tsx
├── FeaturedTreatments.tsx
└── SkinConcerns.tsx
lib/
├── site.ts          # Config (nav, contact, WhatsApp)
└── utils.ts         # cn() utility
```

---

## Architecture des sections (réelle vs prévue)

### Navigation (dans `lib/site.ts`)
Accueil → Soins Visage → Beauté du Regard → Formations → À propos → Contact

### Construit
| Section | ID | Fait ? |
|---|---|---|
| Navbar | — | ✅ |
| Hero | `#accueil` | ✅ |
| Soins Phares | `#soins-phares` | ✅ (4 cartes) |
| Soins Visage (Skin Concerns) | `#soins-visage` | ✅ (4 cartes) |
| Beauté du Regard | `#beaute-regard` | ❌ |
| Formations | `#formations` | ❌ |
| À propos | `#a-propos` | ❌ |
| Contact | `#contact` | ❌ |

### Storytelling (brand.md)
Who → Why → How → Trust → Relate → Begin
Plusieurs étapes ne sont pas encore construites.

---

## Règles de style

### Approche générale
- **Light & airy** — tout le site est sur fonds ivoire/crème, jamais de sections sombres
- Si une maquette contient du sombre/navy profond, l'adapter en crème/gold sur fond clair
- Les overlays sur les images sont en crème/ivoire (pas de dégradés noirs)
- L'or est utilisé avec parcimonie (badges, icônes, highlights de texte)
- Le dégradé doré `text-gradient-gold` est autorisé pour les mots-clés dans les titres

### Animations (Framer Motion)
- Easing unique : `[0.22, 1, 0.36, 1]` (la variable `--ease-luxe`)
- `<Reveal>` pour les apparitions au scroll (fade + slide 28px, direction "up" par défaut)
- Cartes : `whileHover={{ y: -6 }}` avec spring (300, 24)
- Boutons : `whileHover={{ scale: 1.03 }}`, `whileTap={{ scale: 0.98 }}` avec spring (400, 22)
- Durées lentes (0.6–0.9s) pour le luxe
- Toujours respecter `prefers-reduced-motion`

### Typographie
- Playfair Display : titres, font-weight 700, letter-spacing -0.02em, couleur royal
- Inter : body (17px), navigation, boutons
- Navigation uppercase : tracking 0.08em, font-weight 500
- Boutons uppercase : tracking 0.06em, font-weight 600
- `.eyebrow` : uppercase, 0.18em tracking, gold-deep, 0.75rem

### Boutons
- `gold` : fond doré, texte royal (CTA principal)
- `outline-gold` : bordure dorée, transparent
- `royal` : fond bleu royal, texte ivoire
- `ghost` : texte seul, doré au hover

### Composant SectionHeading
```tsx
<SectionHeading
  eyebrow="string"        // Label doré optionnel
  title="string"          // Titre principal
  highlight="string"      // Partie en dégradé doré
  description="string"    // Sous-titre optionnel
  align="center" | "left"
  as="h2" | "h3"
/>
```

### Ombres (toujours bleutées, jamais noires)
- `shadow-soft` : rgba(9,52,133,.10)
- `shadow-card` : rgba(9,52,133,.14)
- `shadow-gold` : rgba(201,162,39,.30)
- `shadow-lift` : rgba(9,52,133,.22)

---

## Conventions de code

- Tailwind CSS v4 uniquement (pas de CSS modules, pas de styled-components)
- `cn()` de `@/lib/utils` pour merger les classes (clsx + tailwind-merge)
- Pas de styles inline sauf pour les gradients dynamiques
- Pas de couleurs en dur dans les classes — utiliser les tokens `@theme`
- Les composants avec animations ou interactivité doivent être `"use client"`
- TypeScript strict, Biome pour lint/format
- Images : Next.js `<Image>` avec `fill`, `sizes`, `priority` sur le hero
- Accessibilité : labels ARIA, `:focus-visible`, sémantique HTML

---

## Sections à reproduire (prochaines étapes)

1. Beauté du Regard (`#beaute-regard`) — services cils, microblading, etc.
2. Formations (`#formations`) — catalogue de formations
3. À propos (`#a-propos`) — histoire, expertise
4. Contact (`#contact`) — formulaire + infos + carte
5. Témoignages / Résultats (storytelling)
6. Section Philosophie (storytelling)

Toujours suivre : Hero → Philosophy → Treatments → Results → Testimonials → Contact
Ne jamais introduire de zones sombres, même si la maquette le suggère.

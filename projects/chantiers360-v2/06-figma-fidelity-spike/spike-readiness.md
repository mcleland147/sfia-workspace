# Chantiers360 v2 — Spike readiness

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`

## Commandes exécutées

| Commande | Résultat |
|----------|----------|
| `npm install` | Voir rapport cycle — exécuté dans `app/` |
| `npm run lint` | Voir rapport cycle |
| `npm run build` | Voir rapport cycle |
| `npm run dev` | Non requis si build OK |

## Fichiers créés

### Application (`projects/chantiers360-v2/app/`)

| Fichier | Rôle |
|---------|------|
| `package.json` | Dépendances Next.js + Tailwind |
| `next.config.ts` | Config Next minimal |
| `tsconfig.json` | TypeScript strict |
| `tailwind.config.ts` | Tokens couleurs Figma |
| `postcss.config.mjs` | PostCSS |
| `app/layout.tsx` | Layout root + Inter |
| `app/page.tsx` | Route `/` → Dashboard |
| `app/globals.css` | Tailwind imports |
| `components/dashboard/*` | Composants UI spike |
| `data/mockChantiers.ts` | Données mockées |

### Documentation (`06-figma-fidelity-spike/`)

- `spike-overview.md`
- `figma-reference.md`
- `visual-comparison-report.md`
- `spike-decisions.md`
- `spike-readiness.md`

## Limites connues

- Spike borné frame Dashboard — pas d'autres routes
- Pas de DB / Drizzle / auth
- Desktop ~1440px — responsive non traité
- INC-01 non lancé

## Prochaines étapes

1. **Revue Morris** — comparaison visuelle capture vs `npm run dev`
2. Arbitrage D1–D3 (`spike-decisions.md`)
3. Si fidélité OK → décision **GO delivery INC-01** (M7) séparée
4. Delivery INC-01 — setup projet complet + US-01 à US-04

---

**Verdict spike :** READY FOR MORRIS REVIEW (réserves mineures)

# SFIA Studio — Contrat visuel et spécification Figma OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `52-ops1-visual-contract-and-figma-spec.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-UX` — consommé |
| **Gate de validation** | `G-OPS1-UX-VAL` — **consommé** — Morris — 2026-07-20 16:52 CEST — **VALIDATION AVEC RÉSERVES** |
| **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
| **Branche** | `design/sfia-studio-ops1-ux-ui` |
| **Statut** | `visual-contract-validated-with-reservations` |
| **Companion** | [`51`](./51-ops1-ux-ui-contract.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) |
| **Horodatage production** | 2026-07-20 16:15 CEST |
| **Horodatage validation Morris** | 2026-07-20 16:52 CEST |

> Contrat visuel **validé avec réserves** sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
> Page `UX-B — OPS1` (`61:2`) = **référence visuelle desktop** validée (périmètre 1440×1024).
> Preuves Figma = celles du cycle source / handoff `08f5ddf…` — **pas** de nouvelle vérification MCP dans ce cycle de validation documentaire.
> Tablette/mobile **non produites** (UX-R01). Design system **non publié** (UX-R03). Microcopies P0 = dette (UX-R02).
> Aucune implémentation code autorisée ou impliquée.

---

## 1. Fichier Figma

| Champ | Valeur |
|-------|--------|
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **URL** | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
| **Page OPS1** | `UX-B — OPS1` — node `61:2` — **référence desktop validée avec réserves** |
| **Page source héritée** | `UX-B — P0` — node `0:1` |
| **Page historique observée** | `UX-B — POC Vertical Slice` — node `51:2` (**vide** au moment du cycle ; frames VS absentes) |
| **Accès MCP** | Authentifié (Full seat) — lecture/écriture OK |

**Ambiguïté fichier :** aucune — un seul fileKey canonique dans Git (`14`/`16`/`35`–`37`).

---

## 2. Sources et design system consultés

| Source | Statut |
|--------|--------|
| Frames P0 `19:2`, `22:2`, `22:133`, `22:270` | **Héritées** comme shell Product premium (clones) |
| `search_design_system` (button/badge/color) | **Vide** — pas de librairie publiée exposée |
| Code Connect `*.figma.*` sous `projects/sfia-studio` | **Absent** |
| Tokens documentés dans `35` | Observés (Inter, blue `#3863f5`, purple `#7a4df5`, etc.) |
| VS-UX frames historiques | **Observées via docs seulement** — page Figma vide |

**Posture :** réutilisation par **clone du shell P0** + overlays OPS1 (action, allowlist, gate 4 actions, FinOps placeholders). Pas de nouveaux composants library tant que DS publié absent.

---

## 3. Frames prévues — inventaire confirmé

Toutes dimensions **1440 × 1024** confirmées MCP (`use_figma` inventory 2026-07-20).

### 3.1 Frames principales (desktop — **validées avec réserves**)

| Nom | Node ID | Finalité | État fonctionnel | FLOW/CAP |
|-----|---------|----------|------------------|----------|
| OPS1-UX-01 — Session ouverte / Conversation active | `61:3` | Fil réel multi-tours | OPEN + CONVERSATION | FLOW-01/03/04 · CAP-03–05 |
| OPS1-UX-02 — Conversation sans action | `61:139` | ACTION_NOT_REQUIRED | Sans exécution | FLOW-03 · CAP-07 |
| OPS1-UX-03 — Action candidate + allowlist | `61:275` | ProposedAction + allowlist 1..n | ACTION_PROPOSED | FLOW-06–09 · FR-026–032 |
| OPS1-UX-04 — Raffinement action | `61:1207` | Chat + structuré | ACTION_REFINING | FLOW-07/08 |
| OPS1-UX-05 — Gate Morris (4 actions) | `61:411` | GO/NO-GO/CORRIGER/ABANDONNER | GATE | FLOW-10–13 · strip `62:2` |
| OPS1-UX-06 — Exécution Cursor + STOP | `61:536` | Progression + STOP | EXECUTING | FLOW-14/18 |
| OPS1-UX-07 — Rapport et diffs multi-fichiers | `61:674` | Preuves consolidées + par fichier | REPORT | FLOW-20 · FR-031 |
| OPS1-UX-08 — Conversation post-exécution | `61:812` | Fil post-exec + candidat | POST_EXEC | FLOW-21/23 · FR-019 |
| OPS1-UX-09 — Décision finale Morris | `61:950` | CLOSE / options finales | DECISION | FLOW-24–26 |
| OPS1-UX-10 — Session CLOSED lecture seule | `61:1075` | Immutabilité + réserves | CLOSED | FLOW-24 · FD-CAND-13 placeholder |

### 3.2 Variantes (desktop — **validées avec réserves**)

| Nom | Node ID | Situation |
|-----|---------|-----------|
| OPS1-UX-VAR-A | `61:1343` | Loading / FinOps À définir |
| OPS1-UX-VAR-B | `61:1479` | Fail-closed / rapport incomplet |
| OPS1-UX-VAR-C | `61:1617` | STOP prioritaire |
| OPS1-UX-VAR-D | `61:1755` | GO invalide / dérive allowlist |
| OPS1-UX-VAR-E | `61:1880` | Confirmation FinOps (seuils OPEN) |
| OPS1-UX-VAR-F | `61:2016` | Reprise / CLOSED read-only |
| OPS1-UX-VAR-G | `61:2148` | Hors allowlist / sans GO |

### 3.3 Dimensions autres breakpoints

| Breakpoint | Statut |
|------------|--------|
| Desktop 1440×1024 | **Confirmé** et **validé** (périmètre desktop) sur les 17 frames |
| Tablette / mobile | Documentés dans doc 51 §21 — **frames non produites** — **UX-R01** (non validé pour implémentation responsive) |

---

## 4. Grille, marges, auto-layout

| Règle | Valeur (héritage P0 + overlays) |
|-------|----------------------------------|
| Frame | 1440 × 1024 |
| Rail | ~64 px |
| Workspace | ~968 px |
| Copilote | ~334 px |
| Spacings | 8 / 12 / 16 / 20 / 24 / 28 |
| Rayons | 12 / 16 / 20 / 24 |
| Overlays OPS1 | Auto-layout VERTICAL/HORIZONTAL (`createAutoLayout`) pour panneaux action/allowlist/gate/FinOps |

**Note :** frames shell clonées restent en layout `NONE` (héritage P0) ; nouveaux panneaux OPS1 en auto-layout.

---

## 5. Typographie

| Rôle | Famille | Styles observés |
|------|---------|-----------------|
| App | **Inter** | Bold, Semi Bold, Medium, Regular |
| Eyebrow | Inter Bold ~11–12 | `SFIA STUDIO` |
| Titres workspace | Inter Bold | titres OPS1 |
| Body | Inter Medium/Regular 11–16 | panneaux, fil |

---

## 6. Tokens / styles réutilisés

| Token / couleur | Usage |
|-----------------|-------|
| Fond `#f6f9ff` / blanc | Shell |
| Ink `#141c30` | Texte |
| Blue `#3863f5` | Accent / action |
| Purple `#7a4df5` | Allowlist / copilote |
| Green `#21c28a` | GO / succès |
| Orange `#faa629` | CORRIGER / warning |
| Pink `#f25794` | STOP / ABANDONNER / fail-closed |

Variables Figma publiées : **non trouvées** via MCP search — couleurs appliquées en fills locaux (comme P0).

---

## 7. Hiérarchie visuelle

1. Topbar session + badges d’état.
2. Conversation (principal) ou gate (quand décision requise).
3. Panneaux action / allowlist (secondaires, séparés).
4. Copilote advisory (ne décide pas).
5. STOP / fail-closed (priorité visuelle élevée).

---

## 8. Zoning

| Zone | Présence frames |
|------|-----------------|
| Navigation / session | Rail + topbar — toutes |
| Conversation | 01–04, 08 |
| Contexte / sources | 01, 03 |
| Action candidate | 03, 04, overlays |
| Gate | 05 + strip `62:2` |
| Exécution | 06 |
| Rapport / diff | 07 |
| Historique / CLOSED | 10, VAR-F |
| FinOps | VAR-A, VAR-E |
| Erreurs / STOP | VAR-B/C/D/G, 06 |

---

## 9. Composants et variantes

| Élément | Nature |
|---------|--------|
| Shell P0 | Clone — continuity Product premium |
| Action candidate panel | Overlay AL créé (`61:2297` famille) |
| Allowlist panel | Overlay AL |
| Gate Actions Strip | `62:2` — 4 cartes GO/NO-GO/CORRIGER/ABANDONNER |
| FinOps / fail-closed banners | Overlays candidats |

Pas de `COMPONENT_SET` library OPS1 créé (évite dette DS sans publication).

---

## 10. États interactifs (contrat)

default · hover · focus · active · disabled · loading · error · success · warning · read-only · STOPPED · FAILED — à appliquer en delivery ; storyboard montre surtout **default / loading / error / STOP / read-only**.

---

## 11. Responsive

Voir doc 51 §21. Frames desktop uniquement ce cycle.

---

## 12. Accessibilité visuelle

- Labels textuels sur badges d’état.
- STOP et fail-closed contrastés (fond sombre / rose).
- Gate : quatre actions libellées + sous-texte « ≠ message GPT ».
- Focus : à implémenter en code ; contrat exige anneau visible.

---

## 13. Microcopy structurante (visuelle)

Reprise doc 51 §22. Corrections anti-GO appliquées sur UX-01 (`Continuer la conversation (≠ GO)`).

**Dette visuelle notée :** certains libellés P0 hérités (hero « Qualification », copilote Nora, stepper A–E) restent visibles sur clones — **observés**, à purger sous polish Morris / correctif UX optionnel. Ils ne constituent **pas** des décisions OPS1 validées.

---

## 14. Captures produites

| Fichier local | Cible | Node |
|---------------|-------|------|
| `.tmp-sfia-review/figma-ops1-ux/ops1-ux-01.png` | Conversation | `61:3` |
| `.tmp-sfia-review/figma-ops1-ux/ops1-ux-03.png` | Action + allowlist | `61:275` |
| `.tmp-sfia-review/figma-ops1-ux/ops1-ux-05.png` | Gate (avant strip final — revoir) | `61:411` |

Captures MCP supplémentaires recommandées en revue Morris pour 06–10 et VAR-*.

---

## 15. Écarts et réserves

| Écart | Traitement / réserve |
|-------|----------------------|
| Page VS vide | Documenté — pas de baseline VS importée |
| DS publié vide | Clone P0 + overlays — **UX-R03** |
| Frames tablette/mobile absentes | **UX-R01** — avant implémentation responsive |
| Résidus microcopy P0 | **UX-R02** — avant delivery |
| FD-CAND-* / FinOps / Campus360 / live / CI / isolation | **UX-R04** — maintenues OPEN |
| FinOps chiffres | « À définir » — non résolu |

---

## 16. Validation Morris

`G-OPS1-UX-VAL` **consommé** — Morris — 2026-07-20 16:52 CEST — **GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES**.

Validés dans le périmètre desktop :

- docs 51–53 ;
- page `61:2` et frames / variantes listées ;
- dimensions 1440×1024 (preuves cycle source) ;
- gate strip `62:2` ;
- captures héritées du handoff.

Non validés : tablette/mobile · DS publié · microcopy P0 nettoyée · réserves FD/live/CI/isolation.

**Verdict :** `visual-contract-validated-with-reservations`

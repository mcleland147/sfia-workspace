# 08 — Design system et contrat de composants

| Champ | Valeur |
|-------|--------|
| **Statut** | UX/UI **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/ux-ui` |
| **Gate consommé** | `GO UX/UI — SFIA STUDIO V3-NATIVE — OPTION A` |
| **FA capitalisée** | FA-OA-01…05 **VALIDATED BY MORRIS** |
| **FD capitalisées** | FD-OA-01…06 |
| **Décisions UX CC** | CC-D01, CC-D03, CC-D05, CC-D06, CC-D12, CC-D13 |
| **Figma fileKey** | `8xR5zSTfGtEVZSr6KK8Gww` |
| **Page Option A** | `SFIA Studio v3-native — Option A` (`11:2`) |
| **Anti-claims** | Pas UX VALIDATED · Pas DESIGN FINAL · Pas READY FOR MODELED · Pas READY FOR DELIVERY · Pas RUNTIME MATCHES FIGMA · Pas OPTION A IMPLEMENTED |
| **Code / schemas / SQL / runtime** | **Interdits** |
| **Document** | `08-design-system-and-component-contract.md` |

## 1. Stratégie

Réutiliser patterns page archive D1 LF lorsque conformes (conversation, N2/N3, badges).
Nouvelle zone Option A : compositions spécifiques LPS / ExecutionContract / ReviewBundle.
Pas d’import DS générique externe.
Pas de mapping code dans ce cycle.

## 2. Catalogue composants

| Composant | Variantes / états | Usage |
|-----------|-------------------|-------|
| AppShell | desktop / compact / mobile | Zones A–C |
| ProjectHeader | sync ok/stale/conflict | Zone A |
| ConversationThread | streaming / idle | Zone B |
| Message | user / studio / system | Fil |
| Composer | idle / sending / limited | Zone B |
| EpistemicBadge | 8 types doc 03 | Fil + panneau |
| LivingStatePanel | 8 états doc 04 | Zone C |
| TrajectorySummary | candidate / validated / active | Panneau |
| DecisionCard | pending / decided / refused / superseded | Fil |
| GateCard | blocking / info | Fil + panneau |
| ConfirmationDialog | N1 / N2 / N3 | Overlay |
| ExecutionContractCard | prepared / ready | Fil |
| ExecutionStatus | executing / failed / done | Fil |
| EvidenceCard | present / missing / stale | H |
| ReviewBundleCard | complete / incomplete | H |
| ErrorBanner / InlineError | severity | Global / inline |
| Drawer / Sheet | LPS / details | ≤1024 / Zone E |
| Loading / Empty / Skeleton | — | Async |
| Toast | non-blocking | N1 feedback |
| Button / Input / Tooltip / StatusIndicator | standard | Primitives |
| Tabs | secondaires seulement | Zone E |

## 3. Règles d’usage

- EpistemicBadge toujours avec label texte.
- ConfirmationDialog N3 = unique focus trap.
- ReviewBundleCard incomplete ≠ complete styling.
- TrajectorySummary ≠ stepper nav.

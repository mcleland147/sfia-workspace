# ML5 S3 — Inventaire corpus qualification DEV (2026-11-26)

| Champ | Valeur |
|---|---|
| Lane | DEV |
| Source | Observation PostgreSQL DEV + GitHub REAL `mcleland147/chantiers360` |
| Fake parcours précédent | **NE PAS REJOUER** (RoomBooking sans Git, StockTrack protocole-only) |

## RoomBooking

| Élément | Valeur |
|---|---|
| Projet Git LIVE | `proj_896d204b-2f6f-4dd2-b4ff-1727469d0e52` — **RB-Final Git LIVE 2026-11-25T09:45:41** |
| Lien Git | ATTACHED → `mcleland147/chantiers360` (`arepo_60b78cda-…`) |
| Commit vérifié | `8c398c494dd918272aab5b2653777c6c21d2e76e` |
| Document D4 existant | `doc_05c03230-…` — « Conception réservation salles DEV » (2 révisions) — **ne pas modifier** pour UAT métier |
| Corpus investigation RB-27–31 | Chemins Git planning/conflits (UAT §4) : `evolutions/EVOL-002-planning-ouvriers.md`, `backend/src/common/rules/planning-conflicts.rules.ts` (+ spec), `backend/src/planning/*`, migrations, tests API/e2e |
| Preuve RB-27 LIVE (26/11) | Work `cgw_912cf02a-…` SUSPENDED r14 — **9 CONSULTED** dont `planning-conflicts.rules.ts`, `planning.controller.ts`, specs, migration, e2e ; PARTIAL `EVOL-002` + `planning.service.ts` ; ~48 req / ~882k in / ~$0.34 (client timeout headers — reprise RB28+) |
| Projet faux précédent | `proj_f57bca43-…` **ML5-Doc-RoomBooking** — **sans Git** — hors preuve |

## StockTrack IT-06

| Élément | Valeur |
|---|---|
| Projet qual | `proj_64691238…` / `prep_11f71e3d…` — **ML5-Qual-StockTrack-IT06** |
| Document | `doc_65200758-7b3c-40a8-9998-3d373b3aacc9` |
| V1 | `drev_6ff648b4…` rev1 AVAILABLE — intacte après conserve |
| V2 | `drev_1d9fed9c…` rev2 AVAILABLE — RM-02 min 3 caractères ; REC-03 refus réf. 2 caractères |
| Conserve | `pdoc_bb19679e…` CONSUMED via `DOC_CONSERVE_PROPOSAL` + focus scellé (`tcmd_20f5c773…`) |
| BoundTrack | Autre produit — ne pas confondre |

## Git PDF REAL

| Élément | Valeur |
|---|---|
| PDF autorisé | `Diagramme BPMN_BatiNova.pdf` @ `mcleland147/chantiers360` |
| SHA blob | `fe57c2d88b367e9ed99cbcd3c8e965d3b7f922c6` |
| Taille | 164587 octets · **1 page scannée** |
| Extraction | `SCANNED_NO_TEXT` — OCR hors périmètre |
| Verdict | **GIT PDF LIVE — BLOCKED CORPUS MISSING** (identification OK ; texte/multi-page NON) |
| Fixture complémentaire | `web/tests/fixtures/ml5-progressive-8p.pdf` (8 pages, déterminant p.6) — **ne remplace pas** Git REAL |

## Préflight

| Scénario | Prêt ? | Bloqueur |
|---|---|---|
| RB investigation Git | OUI si projet `proj_896d204b` + droits Git effectifs | Ne pas utiliser ML5-Doc-RoomBooking |
| StockTrack IT-06 | **NOT RUN jusqu’à seed V1** | Document manquant |
| Git PDF | OUI corpus PDF présent | Exercer outils Git + viewer |
| WEB LIVE | Distinct S5 | Gates S1/S2 |

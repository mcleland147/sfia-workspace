# ML2 Intervention 2 — Manifeste LIVE candidat (avant émission)

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE MANIFEST — MORRIS BOUNDED CAMPAIGN GO REQUIRED** |
| Date | 2026-11-27 |
| A1–A5 | Autorisations de principe uniquement — **ne valident pas** ce manifeste |
| Émission | **INTERDITE** jusqu'à GO Morris explicite sur ce manifeste |

## 0. Préflight (état)

| Contrôle | Résultat |
|---|---|
| Git Truth | PASS — HEAD `e784232b` · tree web `720cefe0` · merge-base `997897fd` |
| ENV isolation | PASS — DEV :3100 / PG :5433 · RECETTE :3200/:5434 intact |
| WEB LIVE | OFF |
| Admin key | NON utilisée |
| Frontier familles | Adaptées : `decisions` / `embeddings` / `vector_stores` / `files` + budgets `familyHttp` non transférables |
| Concurrence / restart | **PASSED** substitué — multi-process family cap 2/2+2 refuse ; refuse-before-contact ; restart cumulatif 1→2 |
| PDF extract oracle | **ALIGNED** — P-TXT/P-TBL SUCCESS · P-SCN `SCANNED_NO_TEXT` |
| Corpus Decisions | v2 — **12** cas, D-ADV-01 corrigé |
| Corpus Retrieval | v2 — **12** requêtes, abstention / révocation / contradiction |
| Artefacts Vision | **6 fichiers octets** sous `.sfia-evidence/document-intelligence/artefacts/` |

## 1. Identité non secrète (à confirmer au GO)

| Élément | Valeur observée / candidate |
|---|---|
| Lane | DEV |
| Projet Studio | synthétique isolé (à créer au GO si besoin) |
| Projet OpenAI | DEV applicatif (empreinte clé attendue `ab6bbec8…` — **pas** Admin `f27d814e…`) |
| SDK | `openai@7.50.0` · `@openai/agents@0.21.0` |
| store | `false` sur Responses |
| Continuity V2–V4 | OFF |
| WEB | OFF |

## 2. Campagne cumulative unique

| | |
|---|---|
| campaignId proposé | `ml2-i2-docintel-<UTC>` (figé au GO) |
| maxHttpAttempts global | **236** |
| Remise à zéro entre sous-campagnes | **Interdite** |
| Transfert entre enveloppes | **Interdit** sans arbitrage |
| Tokens cognitifs candidats cumulés | **344 000** (familles tokenisées seulement) |
| Stockage / ops non tokenisées | Suivi séparé (VS/files) — **pas** converti en tokens |

### Répartition HTTP (plafonds candidats ChatGPT — abaissables)

| Famille | Contacts max | Budget tokens candidat | Notes |
|---|---|---|---|
| Decisions | 24 | 32 000 in | `gpt-6-luna` · ≤2 passes/cas · 12 cas |
| Responses contrôle | 48 | 96 000 in+out | mêmes 12 cas · ≤24 générations · store=false · no tools |
| Embeddings | 12 | 32 000 in | `text-embedding-3-small` · vecteurs **locaux** |
| Retrieval VS | 64 | n/a (ops) | ≤2 VS · ≤8 files · ≤1 MiB · synthétique only · 60 min |
| Nettoyage | 24 | n/a | suppressions + vérifs — **pas** de recherche |
| Files/Vision | 24 | 64 000 in+out | 6 artefacts · inline · **aucun fileId durable** |
| Nora intégrée | 40 | 120 000 in+out | **après** sélection seulement |

## 3. Bornes payload / familles sans native count

| Famille | Borne d'entrée | Incertitude |
|---|---|---|
| Responses | Native `input_tokens` count (ML1) | Known |
| Decisions | `sfia_estimated_input_tokens` démontrable + limites questions/payload + contacts | **Pas de count natif Decisions** — risque résiduel estimation |
| Embeddings | estimated input tokens + batch size | Dimensions vecteur locales |
| VS / Files | contacts + taille Mio + nombre objets | Stockage facturé séparé ; expiration ≠ suppression vérifiée |
| Vision | estimated + pages/size precheck | Multimodal pricing — vérifier tarification courante au GO |

## 4. DATA-01 / nettoyage VS

- Corpus **exclusivement synthétique**
- Aucun Chantiers360 / RoomBooking / BatiNova
- Manifeste durable des IDs créés (non secret)
- Expiration courte **si** supportée + suppression API + vérif inaccessibilité
- Échec nettoyage → incident + STOP créations + mandat complémentaire si enveloppe épuisée
- **A3 = qualification temporaire seulement** — pas d'ops produit

## 5. File Search hébergé

Évaluation de risques seulement dans ce mandat. **Pas de LIVE File Search** sans manifeste + GO spécifique.

## 6. Critères STOP émission

- Enveloppe famille ou globale atteinte
- Permission / clé incorrecte
- Borne non vérifiable sur chemin utilisé
- Création VS/file incertaine
- Fuite hors corpus synthétique
- Contournement Frontier
- Contamination RECETTE

## 7. Demande à Morris

**LIVE PREFLIGHT PASSED — MORRIS BOUNDED CAMPAIGN GO REQUIRED**

Décisions demandées :
1. Valider / abaisser les plafonds du §2 ?
2. Confirmer modèle Vision multimodal admis DEV ?
3. Confirmer GO émission sur enveloppes Decisions + Responses + Embeddings en premier (VS/Vision ensuite) ou campagne séquentielle unique ?
4. Autoriser création projet/sujets synthétiques PG DEV pour baseline `searchJournalSubjects` réelle ?

Aucune émission jusqu'à réponse explicite.

# ML2 Intervention 2 — Manifeste LIVE consolidé FINAL

| Champ | Valeur |
|---|---|
| Statut | **FINAL MANIFEST — MORRIS DEFINITIVE LIVE CAMPAIGN GO REQUIRED** |
| Date | 2026-11-27 |
| HEAD local | `49333f090c55ee36d47f4a041043a5c87cf6ebc4` |
| Tree web | `89b27b4e9b7ba1722f7be6b16dc11a93f4c2abb0` |
| Décisions Morris consommées | Plafonds 236 / 344k · ordre D/R/E → VS/Vision · sujets synthétiques DEV · Vision admis DEV · cleanup + Nora réservés · D3 V1 · WEB OFF · pas de migration / pas d'extension permissions / pas de persistance ops |
| Émission | **INTERDITE** jusqu'à GO LIVE définitif explicite sur **ce** manifeste |

---

## 1. Identité non secrète

| Élément | Valeur |
|---|---|
| Lane | `DEV` (`STUDIO_LANE=DEV`) |
| Runtime | `:3100` · PG `:5433` · db `sfia_next_dev` · migration **026** |
| RECETTE | `:3200` / `:5434` — **non touchée** |
| Clé applicative | empreinte attendue `ab6bbec84ba272ed` |
| Clé Admin | empreinte interdite `f27d814e9c682020` — **non utilisée** |
| SDK | `openai@7.50.0` · `@openai/agents@0.21.0` |
| Admission cognitive | `SFIA_COGNITIVE_ADMISSION_MODE=operational` · provisional `v0.2` |
| WEB | `SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0` |
| D3 | V1 reconstruction conservée · V2–V4 OFF |
| Continuity native | OFF |
| store (Responses) | `false` |
| Permissions OpenAI | **existantes uniquement** — aucune extension |

### Corpus / projets synthétiques DEV (créés)

| Rôle | Id |
|---|---|
| Marker | `ml2-synth-docintel-20261127` |
| Pilot A / B | `pilot_0cc50816-…` / `pilot_f17e61e7-…` |
| Project A / B | `proj_330057a0-…` / `proj_239db87c-…` |
| Prep A / B | `prep_236330d8-…` / `prep_e2ac0b65-…` |
| Baseline produit | `searchJournalSubjects` **REAL** — isolationFail=0 · revokedMobilized=0 (evidence `product-journal-baseline.json`) |

---

## 2. Campagne cumulative

| | |
|---|---|
| campaignId | `ml2-i2-docintel-20261127` (figé au démarrage d'émission) |
| maxHttpAttempts global | **236** |
| Tokens cognitifs réservés cumulés | **344 000** (familles tokenisées) |
| Transfert entre sous-enveloppes | **Interdit** |
| Remise à zéro | **Interdite** |
| Frontier | `familyHttp` non transférable + compteurs persistés |

### Ordre d'émission retenu

1. **Decisions** → **Responses contrôle** → **Embeddings**
2. Puis **Retrieval natif (VS)** → **Vision**
3. **Nettoyage** dès fin VS / incident
4. **Nora intégrée** uniquement après sélection d'architecture (enveloppe préservée)

---

## 3. Modèles exacts (vérifiés)

| Famille | Modèle | Effort | Preuve d'admission DEV |
|---|---|---|---|
| Decisions | `gpt-6-luna` | n/a (API Decisions) | seul modèle Decisions documenté ; catalogue Luna `imageInput`/`responsesApi` |
| Responses contrôle | `gpt-6-luna` | `medium` | `admitModelEffort(luna, medium)` → **admitted** sous provisional v0.2 |
| Embeddings | `text-embedding-3-small` | n/a | SDK `embeddings` présent ; priorité mandat |
| Vision (Responses) | `gpt-6.1-terra` | `medium` | **défaut opérationnel DEV** ; `imageInput: true` ; `admitModelEffort(terra, medium)` → **admitted** |
| Nora intégrée (plus tard) | couples provisoires admis uniquement | — | pas d'élargissement politique |

Luna également `imageInput: true` ; **Terra medium** retenu pour Vision car couple admis DEV par défaut et déjà positionné analyse contextualisée.

---

## 4. Bornes par famille (non transférables)

| Famille Frontier | Contacts HTTP max | Tokens réservés | Payload / autres bornes |
|---|---|---|---|
| `decisions` | **24** | **32 000** input estimés | ≤12 cas · ≤2 passes/cas · questions typées · taille input bornée · `sfia_estimated_input_tokens` obligatoire |
| `responses` (contrôle) | **48** | **96 000** in+out | ≤24 générations · `store=false` · no tools · native input count ML1 · même corpus Decisions |
| `embeddings` | **12** | **32 000** input | batch raisonnable · vecteurs **locaux uniquement** · pas d'index produit · pas de pgvector |
| `vector_stores` (+ files attach) | **64** | n/a (ops) | ≤2 VS · ≤8 files synthétiques · ≤**1 MiB** cumulé · polling compté · **pas** de `create_and_poll` opaque · retries comptabilisés · durée active ≤**60 min** |
| `files` cleanup path | inclus nettoyage | n/a | voir §6 |
| `responses` Vision | **24** | **64 000** in+out | 6 artefacts · ≤12 générations · inline PDF/image · **aucun fileId durable** · `store=false` · precheck taille/pages |
| Nettoyage (réservé) | **24** | n/a | suppressions + vérifs **uniquement** — finance 0 recherche/création |
| Nora intégrée (réservée) | **40** | **120 000** in+out | après sélection · projet synthétique · no WEB · no Git effect · no Cursor externe |

**Total contacts = 236.**  
**Total tokens réservés familles tokenisées = 344 000.**

---

## 5. Estimation maximale de coût (Studio — non facture)

Sources : catalogue tarifaire Studio `ml5-tariff-catalog-v1-2026-11-26` + pricing OpenAI Embeddings/File search (consulté 2026-11-27).  
Hypothèse conservative : consommation = **100 % des plafonds token** ; pas de long-context (>272k/req).  
Estimations **≠** engagement commercial ; coûts VS/storage hors tokens restent séparés.

| Famille | Hypothèse de pricing | Estimation max USD |
|---|---|---|
| Decisions (`gpt-6-luna`) | 32k in × $0.10/1M + ~8k out × $0.50/1M (borne sortie prudente) | **≈ 0.007** |
| Responses contrôle (`gpt-6-luna`) | 48k in × $0.10/1M + 48k out × $0.50/1M | **≈ 0.029** |
| Embeddings (`text-embedding-3-small`) | 32k × $0.02/1M | **≈ 0.001** |
| Vision (`gpt-6.1-terra`) | 32k in × $1.00/1M + 32k out × $5.00/1M | **≈ 0.192** |
| Nora intégrée (plafond terra worst-case) | 60k in × $1 + 60k out × $5 | **≈ 0.360** |
| **Sous-total tokenisé** | | **≈ 0.59 USD** |
| Retrieval VS / Files storage | 1 MiB ≪ 1 GB free file-search storage ; ops VS | **UNKNOWN / ≈ 0 storage** sous 1 GB free — **ne pas convertir en tokens** |
| File Search tool calls | **NON activé** (pas de LIVE File Search ce manifeste) | **0** |

**Plafond estimé annoncé à Morris : ≤ 1.00 USD** (marge sur ≈0.59 + incertitude Decisions billing + résidu VS).  
Si une unité facturable VS non tokenisée apparaît hors estimation → **STOP sous-périmètre** et rapport immédiat — pas d'invention de borne.

Incertitude explicite : l'API Decisions n'expose pas le même `input_tokens` count native que Responses ; borne via estimation démontrable + contacts.

---

## 6. Nettoyage et DATA-01 (expérimental uniquement)

| Règle | Modalités |
|---|---|
| Périmètre | Corpus **synthétique uniquement** — aucun projet réel / BatiNova / Chantiers360 / RoomBooking upload |
| Ressources distantes | ≤2 Vector Stores + ≤8 files créés **par cette campagne** — noms `ml2-i2-…` sans données confidentielles |
| Expiration | Configurer `expires_after` **si supporté** — **expiration ≠ suppression vérifiée** |
| Enveloppe cleanup | **24** contacts réservés : ~10 delete · ~10 verify · ~4 réserve |
| Manifeste IDs | Fichier local non secret sous `.sfia-evidence/document-intelligence/remote-resource-manifest.json` |
| Vérification | GET/list après delete → inaccessibilité ; journaliser |
| Création incertaine | Suspendre nouvelles créations · réconcilier dans scope · ne pas retry aveugle |
| Échec cleanup | Bloquer usages futurs · conserver manifeste · informer Morris · mandat complémentaire si enveloppe épuisée |
| Persistance ops | **Interdite** — A3 = qualification temporaire seulement |
| Suppression API | Ne prouve pas l'effacement immédiat de toutes les copies fournisseur |

---

## 7. Permissions nécessaires (existantes)

| Capacité | Permission requise | Statut |
|---|---|---|
| Decisions create | clé projet DEV (non Admin) | à confirmer au **premier** contact — si 401/403 → STOP |
| Responses | idem | déjà exercée ML1 sur autres chemins — revalider |
| Embeddings | idem | à confirmer au premier contact |
| Vector Stores / Files | idem | à confirmer ; **pas** d'élargissement de scope org |
| Vision input_image/file inline | Responses multimodal | Terra medium admitted catalogue |

Une permission technique absente **n'est pas** corrigée par changement de droits — STOP + rapport.

---

## 8. Critères STOP

- Enveloppe famille ou globale atteinte  
- Clé / FP incorrect · Admin détecté  
- Borne non vérifiable sur chemin utilisé  
- Upload hors synthétique  
- Création VS/file incertaine non réconciliée  
- Contamination RECETTE  
- Contournement Frontier  
- Extension permissions / migration / persistance ops  

---

## 9. Préflight déjà acquis (non LIVE)

| Preuve | Résultat |
|---|---|
| Frontier familles + concurrency multi-process | PASSED |
| Restart cumulatif | PASSED |
| Artefacts PDF + extract local | ALIGNED (`SCANNED_NO_TEXT` OK) |
| Baseline `searchJournalSubjects` produit | SEEDED · isolation 0 |

---

## 10. Demande

**Présentation du manifeste consolidé FINAL.**

Consommation attendue de Morris :

> **GO LIVE DÉFINITIF** sur manifeste `live-campaign-manifest-final.md`  
> campaignId `ml2-i2-docintel-20261127`  
> plafonds 236 / 344k / ≤ ≈1 USD estimé  
> ordre Decisions→Responses→Embeddings puis VS→Vision  
> cleanup 24 + Nora 40 préservés  

**Aucune émission** tant que ce GO définitif n'est pas consommé explicitement.

# Review pack — SFIA Studio POC vertical slice BACKLOG

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 22:51:46 CEST |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Typologie** | DOC / BACKLOG / POC |
| **GO Morris consommé** | G-VS-BL — produire backlog documentaire |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale — aucun push**) |
| **HEAD / origin/main** | `722f586855743f87a6d3318ccec2dd6224676e28` = `722f586855743f87a6d3318ccec2dd6224676e28` (`722f586…` PR #228 MERGED) |
| **Working tree initial** | `.tmp` + création 38–40 |
| **Verdict** | `SFIA STUDIO VERTICAL SLICE BACKLOG READY — MORRIS VALIDATION REQUIRED` |

---

## 1. Truth Check

OK — fetch · PR #228 MERGED · docs 32–37 sur main · FF main → `722f586…` · branche `backlog/sfia-studio-poc-vertical-slice` créée · collision 38–40 absente · staged vide · aucune modif versionnée étrangère.

---

## 2. Sources consultées

- Template + routing guide
- Docs `32`–`37` (fonctionnel + UX)
- POC `20`–`31` (contexte spikes/ports)
- Figma lecture seule : page `51:2`, frames `51:3`…`51:1204`, VAR `52:2/10/18/26`
- `app/**` et `harness/**` lecture seule

### Code inspecté (RO)

- App : 4 routes, shell, UI kit, fixtures — pas d’adaptateur, pas de live UI
- Harness : GateValidator, GPT/Cursor fixtures + spikes live flaggés, journal, e2e sandbox
- Contrainte : pas de CI Studio

### Réutilisable

Shell/tokens/UI · fixtures app · ports harness fixture · spikes C/D sous flags

### Réserves observées

Adapter absent · gate UI actuel 3 options · plafond À définir · réserves spikes

---

## 3. Documents créés

| Doc | Lignes | Rôle |
|-----|--------|------|
| 38 | 633 | Backlog epics/stories/AC/matrice |
| 39 | 234 | Story map + incréments A–E |
| 40 | 149 | Decision pack VS-BL-CAND |

### Quantitatif

- Epics : **10**
- Capabilities : **34**
- Stories : **33** (`VS-BL-US-001`…`033`)
- VS-BL-CAND : **12** (`01`…`12`)
- Incréments candidats : **A–E**

### IDs stories

VS-BL-US-001 … VS-BL-US-033

### Matrice de couverture

Incluse dans doc 38 §9 — FR-01…17 · BR · AC · N1–N16 · CAND · UX-01…10 · VAR — **tous couverts** (CAND-14 valeur numérique différée justifiée).

### Incréments

A cockpit mock → B adaptateur/fixtures → C GPT live → D Cursor live → E analyse/clôture

### VS-BL-CAND-*

01 séquence A–E · 02 priorité epics · 03 premier périmètre A · 04 mock puis live · 05 adaptateur Incr.B · 06 couverture N · 07 gate GPT live · 08 gate Cursor live · 09 plafond À définir · 10 critères « slice prouvé » · 11 stratégie tests · 12 granularité 33 stories

---

## 4. Fichiers non modifiés

`01`–`37` · `app/**` · `harness/**` · Figma · method/prompts · configs

---

## 5. git status

```
?? .tmp-sfia-review/
?? projects/sfia-studio/38-poc-vertical-slice-backlog.md
?? projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md
?? projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md
```

Aucun staged · aucun commit/push/PR projet · branche backlog **non poussée**.

---

## 6. Garde-fous

Option B · Git vérité · Morris L0 · 10 états ≠ 10 routes · pas de stack/API · plafond non inventé · no retry · pas MVP · harness autonome · timeout ≠ GO

---

## 7. Décisions Morris attendues

1. Valider/amender/refuser VS-BL-CAND-01…12  
2. Autoriser versionnement 38–40  
3. Choisir premier incrément delivery (A recommandé)  
4. Ne pas traiter comme GO delivery/live/merge

---

## 8. Verdict

`SFIA STUDIO VERTICAL SLICE BACKLOG READY — MORRIS VALIDATION REQUIRED`

Instruction ChatGPT : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

---

# ANNEXE A — Document 38 intégral

# SFIA Studio — Backlog delivery borné du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `38-poc-vertical-slice-backlog.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Typologie** | DOC / BACKLOG / POC |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale**) |
| **Base Git** | `origin/main` @ `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Statut** | `draft-for-morris-validation` — **aucune story ni incrément validés** |
| **Companions** | [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
| **Sources** | [`32`](./32-poc-vertical-slice-functional-design.md)–[`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
| **Code / live** | **Aucun** dans ce cycle |

> Backlog documentaire du **premier vertical slice POC**.
> Dix **états** UX ≠ dix routes · quatre vues P0 · Option B inchangée · plafond GPT **À définir** · aucun claim MVP.

---

## 1. Objectif

Transformer les exigences validées (`VS-FR` / `VS-BR` / `VS-AC` / N1–N16 / VS-UX) en epics, capabilities et user stories testables permettant un futur delivery **borné** du BeB :

Studio → qualification GPT → gate Morris → harness → Cursor sandbox → preuves → verdict GPT candidat → décision Morris → clôture.

---

## 2. Périmètre / hors périmètre

### Dans le périmètre backlog

- Stories pour le parcours 10 états dans **4 vues P0**
- Adaptateur fin Studio→harness (sans autorité)
- Qualification / verdict GPT (fixture puis live sous gate)
- Cursor sandbox (fixture puis live sous gate)
- Gates Morris, STOP, invalidation GO, FinOps (compteur + plafond À définir + no retry)
- Sécurité / RGPD minimal / observabilité / reprise session

### Hors périmètre

- Choix stack / API / BDD / ORM / protocole
- CI/CD, déploiement, industrialisation, L5
- Multi-projet, MVP produit, écriture Git distante
- Modification Figma / docs `01`–`37` / code (ce cycle)
- Valeur numérique du plafond GPT (reste **À définir**)

---

## 3. Definition of Ready (DoR) — story

Une story est Ready si :

1. ID stable `VS-BL-US-*` ;
2. epic + capability + acteur ;
3. formulation En tant que / Je veux / Afin de ;
4. sources (`VS-FR`/`VS-BR`/`VS-AC`/N/UX) ;
5. état UX ou variante ;
6. préconditions ;
7. AC Given/When/Then testables ;
8. hors périmètre explicite ;
9. aucune dépendance stack non tranchée (sinon hypothèse / spike candidat) ;
10. gate Morris éventuel identifié.

---

## 4. Definition of Done (DoD) — candidat delivery futur

**Non validée** — candidate pour GO delivery :

1. AC satisfaits avec preuves (journal, screenshots, fixtures ou live sous gate) ;
2. aucun secret exposé ;
3. Studio = vue dérivée (pas de vérité parallèle) ;
4. harness autonome toujours possible ;
5. timeout ≠ GO ; STOP journalisé ;
6. pas de claim MVP / production-ready ;
7. review pack / preuves selon story ;
8. pas d’écriture Git distante dans le slice.

---

## 5. Acteurs

| Acteur | Rôle |
|--------|------|
| Morris (L0) | Saisie, gates, STOP, clôture |
| SFIA Studio | Cockpit / vue dérivée |
| Adaptateur fin | Transmission sans autorité |
| Harness | Policy, revalidation, journal, preuves |
| GPT | Qualifie / analyse (candidat) |
| Cursor | Exécute sandbox bornée |
| Git | Vérité durable / Truth Check |

---

## 6. Epics et capabilities

| Epic | Capabilities |
|------|----------------|
| **E1** Demande & identité | C1.1 Saisie · C1.2 IDs · C1.3 Abandon pré-qualif |
| **E2** Qualification GPT | C2.1 Déclenchement · C2.2 Loading/fail-closed · C2.3 Affichage · C2.4 FinOps |
| **E3** Contrat & Gate | C3.1 Contrat/hash · C3.2 Dossier GO · C3.3 4 actions · C3.4 Invalidation |
| **E4** Adaptateur Studio↔harness | C4.1 Transmission · C4.2 États dérivés · C4.3 Mode autonome · C4.4 Reprise session |
| **E5** Exécution Cursor | C5.1 Revalidation · C5.2 Spawn sandbox · C5.3 STOP/timeout · C5.4 Refus hors allowlist |
| **E6** Rapport & preuves | C6.1 Rapport · C6.2 Pack · C6.3 Aperçu sanitisé · C6.4 Blocage incomplet |
| **E7** Analyse & verdict | C7.1 Paquet preuves · C7.2 Analyse GPT · C7.3 Verdict candidat · C7.4 FinOps analyse |
| **E8** Décision & clôture | C8.1 Décision finale · C8.2 CycleSummary slice-only · C8.3 Relance nouveau GO |
| **E9** Sécurité & RGPD | C9.1 No PII/secrets · C9.2 Masquage · C9.3 Journal refus |
| **E10** Observabilité & perf | C10.1 Corrélation IDs · C10.2 Durées séparées · C10.3 Source statut · C10.4 Aucun faux succès |

---

## 7. User stories

### VS-BL-US-001 — Saisir une demande de preuve

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E1 / C1.1 |
| Acteur | Morris |
| Story | En tant que Morris, je veux saisir une intention Markdown sandbox, afin de démarrer un cycle de preuve gouverné. |
| Valeur | Entrée BeB observable |
| Sources | VS-FR-01 · VS-CAND-01 · VS-UX-01 |
| UX | VS-UX-01 · vue Nouvelle demande |
| Préconditions | Studio accessible ; projet connu |
| AC | **Given** vue Nouvelle demande **When** Morris saisit titre+synthèse et voit requestId candidat **Then** aucune exécution ni GO implicite |
| Négatifs | Intention vide → validation locale, pas de qualif |
| Preuves | StudioRequest horodatée |
| Dépendances | — |
| Risque | Faible |
| Taille | S |
| Gate | — |
| Hors périmètre | Live GPT ; écriture distante |
| Notes delivery | Réutiliser shell floating `/nouvelle-demande` ; étendre états (pas nouvelle route) |

### VS-BL-US-002 — Propager requestId / correlationId

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E1 / C1.2 |
| Acteur | Studio / Harness |
| Story | En tant que Morris, je veux des IDs stables visibles, afin de reconstruire le parcours. |
| Sources | VS-CAND-15 · VS-FR-01 · E10 |
| UX | Toutes |
| AC | **Given** demande créée **When** navigation entre états **Then** requestId et correlationId inchangés et affichés |
| Preuves | Journal eventId liés |
| Taille | S |

### VS-BL-US-003 — Abandonner avant qualification

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E1 / C1.3 |
| Acteur | Morris |
| Story | En tant que Morris, je veux abandonner avant qualif, afin d’éviter toute consommation GPT. |
| Sources | N16 partiel · parcours 33 |
| UX | VS-UX-01 |
| AC | **Given** intention capturée **When** Abandonner **Then** état `abandonné` · 0 appel GPT |
| Taille | XS |

### VS-BL-US-004 — Déclencher qualification GPT

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E2 / C2.1 |
| Acteur | Morris |
| Story | En tant que Morris, je veux déclencher explicitement « Qualifier la demande », afin de lancer une qualification contrôlée. |
| Sources | VS-FR-02 · VS-FR-03 · VS-UX-02 |
| UX | VS-UX-01→02 |
| AC | **Given** demande valide **When** CTA Qualifier **Then** état `qualification_en_cours` · compteur FinOps +1 · aucun GO |
| Négatifs | N2 sources Git indisponibles → STOP lecture |
| Taille | M |
| Gate | Avant live GPT : G-VS-LIVE-GPT (futur) |
| Notes | Fixture d’abord (Incr. B/C) |

### VS-BL-US-005 — Loading qualification + no retry

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E2 / C2.2 · C2.4 |
| Acteur | Système / Morris |
| Story | En tant que Morris, je veux voir la phase active et le plafond « À définir », sans retry auto. |
| Sources | VS-FR-16 · VS-BR-03 · VS-CAND-14 · VAR Loading `52:2` |
| UX | VS-UX-02 |
| AC | **Given** qualif en cours **When** UI affiche **Then** phase + `n / À définir` + « Aucun retry automatique » · pas de fausse barre inventée |
| Taille | S |

### VS-BL-US-006 — Rejet fail-closed QualificationCandidate

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E2 / C2.2 |
| Acteur | Harness / Studio |
| Story | En tant que Morris, je veux qu’une sortie GPT invalide soit rejetée, afin d’éviter un GO aveugle. |
| Sources | VS-FR-02 · VS-BR-01 · VS-BR-02 · N1 · VAR Erreur `52:10` |
| UX | VS-UX-02 |
| AC | **Given** sortie hors contrat **When** validateur refuse **Then** message erreur · pas d’état `qualification_prête` · CTA correction/abandon |
| Taille | M |

### VS-BL-US-007 — Afficher qualification complète avant gate

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E2 / C2.3 |
| Acteur | Morris |
| Story | En tant que Morris, je veux lire cycle, profil, allowlist, stops, hash, afin de contrôler avant GO. |
| Sources | VS-FR-03 · VS-CAND-03 · VS-UX-03 |
| UX | VS-UX-03 |
| AC | **Given** qualif valide **When** affichage **Then** tous champs obligatoires 33 §3 visibles · source GPT étiquetée · pas d’auto-GO |
| Taille | M |

### VS-BL-US-008 — Demander correction qualification

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E2 |
| Acteur | Morris |
| Story | En tant que Morris, je veux demander une correction, afin de relancer une nouvelle qualification contrôlée. |
| Sources | VS-FR-04 · parcours 33 |
| UX | VS-UX-03 |
| AC | **Given** qualif proposée **When** Correction **Then** retour `qualification_en_cours` · nouvelle consommation FinOps visible · pas de fallback permissif |
| Taille | S |

### VS-BL-US-009 — Générer ExecutionContract + hash

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E3 / C3.1 |
| Acteur | Harness |
| Story | En tant que Morris, je veux un contrat borné hashé, afin d’ancrer le GO. |
| Sources | VS-FR-05 · VS-BR-05 · VS-CAND-04 |
| UX | VS-UX-03/04 |
| AC | **Given** qualif acceptée pour gate **When** contrat produit **Then** contractId + contractHash + allowlist + gitEffect=none-remote |
| Taille | M |
| Notes | Réutiliser canonicalize/hash harness |

### VS-BL-US-010 — Dossier de décision Gate Morris

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E3 / C3.2 |
| Acteur | Morris |
| Story | En tant que Morris, je veux un dossier ancré (IDs, HEAD, branche, allowlist, horodatage), afin de décider. |
| Sources | VS-FR-05 · VS-UX-04 |
| UX | VS-UX-04 · vue Décision |
| AC | **Given** attente gate **When** affichage **Then** champs d’ancrage complets · timeout ≠ GO affiché |
| Taille | M |

### VS-BL-US-011 — Quatre actions gate (GO / NO-GO / Corriger / Abandonner)

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E3 / C3.3 |
| Acteur | Morris |
| Story | En tant que Morris, je veux quatre actions explicites, afin de ne pas confondre NO-GO, STOP et Abandon. |
| Sources | VS-FR-04 · VS-FR-15/16 (UX) · VS-UX-04 |
| UX | VS-UX-04 |
| AC | **Given** gate **When** choix **Then** GO/NO-GO/Corriger/Abandonner distincts · Abandonner destructif + confirmation · conséquence « abandonné » · aucune action Git distante |
| Négatifs | Confusion Abandon/NO-GO/STOP documentée en UI |
| Taille | M |

### VS-BL-US-012 — Invalidation GO (HEAD/hash/branche/allowlist)

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E3 / C3.4 |
| Acteur | Harness / Studio |
| Story | En tant que Morris, je veux qu’un GO stale soit invalide, afin d’empêcher un spawn dangereux. |
| Sources | VS-FR-06 · VS-BR-06 · VS-AC-02 · VS-AC-03 · N3 · N5 · N6 · VAR GO invalide `52:26` |
| UX | VS-UX-04/05 |
| AC | **Given** GO ancré **When** HEAD ou hash change **Then** bandeau GO invalide · harness refuse spawn · nouveau gate requis |
| Taille | M |

### VS-BL-US-013 — Adaptateur fin sans autorité

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E4 / C4.1 |
| Acteur | Adaptateur |
| Story | En tant que Morris, je veux que Studio transmette sans élargir, afin de préserver Option B. |
| Sources | VS-FR-13 · VS-BR-12 · VS-CAND-05 |
| UX | Transverse |
| AC | **Given** action Studio **When** envoi harness **Then** aucune décision inventée · pas de seconde vérité · pas d’assouplissement policy |
| Taille | L |
| Notes | Spike candidat interface — pas de protocole figé ici |

### VS-BL-US-014 — Afficher états dérivés depuis preuves/journal

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E4 / C4.2 |
| Acteur | Studio |
| Story | En tant que Morris, je veux des états dérivés, afin que Git/preuves priment. |
| Sources | VS-FR-13 · VS-AC-11 · VS-BR-12 |
| UX | Toutes |
| AC | **Given** événements harness **When** UI rafraîchit **Then** statut source explicite · pas d’état inventé |
| Taille | M |

### VS-BL-US-015 — Harness autonome sans Studio

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E4 / C4.3 |
| Acteur | Morris / Harness |
| Story | En tant que Morris, je veux pouvoir exécuter le scénario via harness seul, afin de ne pas dépendre de l’UI. |
| Sources | VS-FR-14 · VS-BR-13 · VS-AC-12 · VS-CAND-10 |
| UX | — (CLI) |
| AC | **Given** contrat+GO **When** harness fixture/live sous flags **Then** preuve BeB sans Studio |
| Taille | S (déjà partiellement prouvé) |
| Notes | Capitaliser spikes `29`–`31` |

### VS-BL-US-016 — Reprise après perte de session Studio

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E4 / C4.4 |
| Acteur | Morris |
| Story | En tant que Morris, je veux reprendre sans inventer d’état, afin d’éviter un faux succès. |
| Sources | N16 · VS-AC-11 |
| UX | Reprise |
| AC | **Given** session perdue **When** rechargement **Then** états depuis preuves/Git · message si incomplet |
| Taille | M |

### VS-BL-US-017 — Revalidation GO avant Cursor

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E5 / C5.1 |
| Acteur | Harness |
| Story | En tant que Morris, je veux une revalidation déterministe avant spawn, afin d’appliquer le gate. |
| Sources | VS-FR-07 · VS-BR-07 · N4 · N5 |
| UX | VS-UX-05 |
| AC | **Given** GO présent **When** spawn demandé **Then** harness revalide hash/HEAD/allowlist · sinon refus |
| Taille | M |

### VS-BL-US-018 — Exécution Cursor sandbox Markdown

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E5 / C5.2 |
| Acteur | Cursor / Harness |
| Story | En tant que Morris, je veux que Cursor crée le Markdown autorisé, afin de prouver le BeB. |
| Sources | VS-FR-08 · VS-FR-09 · VS-CAND-01 · VS-CAND-07 · VS-UX-05 |
| UX | VS-UX-05 |
| AC | **Given** GO revalidé **When** exécution **Then** fichier sandbox allowlist · remote writes=0 · journal dérivé · pas de commandes inventées en UI |
| Négatifs | N7 N8 N9 N10 |
| Taille | L |
| Gate | G-VS-LIVE-CURSOR |

### VS-BL-US-019 — STOP prioritaire pendant exécution

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E5 / C5.3 |
| Acteur | Morris |
| Story | En tant que Morris, je veux STOP immédiat, afin d’interrompre toute activité. |
| Sources | VS-FR-10 · VS-BR-10 · VS-AC-05 · N12 · VAR STOP `52:18` |
| UX | VS-UX-02/05/07 |
| AC | **Given** en_exécution **When** STOP **Then** `stoppé` · event journalisé · reprise sous nouveau GO si re-exec |
| Taille | S |

### VS-BL-US-020 — Timeout ≠ GO

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E5 / C5.3 |
| Acteur | Système |
| Story | En tant que Morris, je veux qu’un timeout stoppe sans autoriser, afin d’éviter un GO implicite. |
| Sources | VS-BR-11 · N11 |
| UX | VS-UX-05 |
| AC | **Given** exécution **When** timeout **Then** `stoppé` · message timeout ≠ GO · pas de spawn ultérieur sans nouveau GO |
| Taille | S |

### VS-BL-US-021 — Rapport et fichiers touchés

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E6 / C6.1 |
| Acteur | Morris |
| Story | En tant que Morris, je veux le rapport Cursor/harness et l’aperçu sanitisé, afin de contrôler le résultat. |
| Sources | VS-FR-11 · VS-UX-06 |
| UX | VS-UX-06 |
| AC | **Given** fin exécution **When** rapport disponible **Then** statut · fichiers · remote=0 · réserves · CTA analyse |
| Négatifs | N13 |
| Taille | M |

### VS-BL-US-022 — Review pack prérequis analyse / clôture

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E6 / C6.2 · C6.4 |
| Acteur | Système |
| Story | En tant que Morris, je veux bloquer si pack incomplet, afin d’éviter une clôture positive fallacieuse. |
| Sources | VS-FR-17 · VS-BR-15 · VS-AC-06 · N14 |
| UX | VS-UX-06/08/10 |
| AC | **Given** pack incomplet **When** analyse ou clôture positive **Then** refus explicite |
| Taille | S |

### VS-BL-US-023 — Analyse GPT verdict candidat

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E7 |
| Acteur | Morris / GPT |
| Story | En tant que Morris, je veux une analyse GPT manuelle du paquet de preuves, afin d’obtenir un verdict **candidat**. |
| Sources | VS-FR-12 · VS-BR-14 · VS-CAND-08 · VS-UX-07/08 |
| UX | VS-UX-07→08 |
| AC | **Given** rapport+pack OK **When** Lancer analyse **Then** appel GPT distinct · compteur · plafond À définir · no retry · verdict étiqueté candidat |
| Négatifs | N15 fail-closed |
| Taille | L |
| Gate | G-VS-LIVE-GPT (analyse) |

### VS-BL-US-024 — Afficher prouvé / non prouvé / écarts

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E7 / C7.3 |
| Acteur | Morris |
| Story | En tant que Morris, je veux voir prouvé/non prouvé/écarts/risques/réserves, afin de décider. |
| Sources | VS-FR-12 · VS-UX-08 |
| UX | VS-UX-08 |
| AC | **Given** verdict valide **When** affichage **Then** sections obligatoires · pas de bouton clôture auto |
| Taille | M |

### VS-BL-US-025 — Décision finale Morris

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E8 / C8.1 |
| Acteur | Morris |
| Story | En tant que Morris, je veux clôturer, corriger, relancer (nouveau GO) ou abandonner, afin de conclure. |
| Sources | VS-FR-12 · VS-AC-07 · VS-AC-08 · VS-UX-09 |
| UX | VS-UX-09 |
| AC | **Given** verdict candidat **When** décision **Then** MorrisFinalDecision enregistrée · conséquences explicites · pas d’actions Git groupées |
| Taille | M |

### VS-BL-US-026 — Clôture slice-only

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E8 / C8.2 |
| Acteur | Morris |
| Story | En tant que Morris, je veux une synthèse du slice courant uniquement, afin d’éviter un faux portefeuille. |
| Sources | VS-UX-10 · correctif UX · VS-BR-17 |
| UX | VS-UX-10 · vue synthèse |
| AC | **Given** clôture **When** affichage **Then** requestId, décision, MD, preuves, FinOps, traçabilité · **aucun** portfolio multi-projet · aucun claim MVP/prod |
| Taille | S |

### VS-BL-US-027 — Relance sous nouveau GO

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E8 / C8.3 |
| Acteur | Morris |
| Story | En tant que Morris, je veux relancer après STOP/échec uniquement avec nouveau GO, afin de respecter les gates. |
| Sources | Matrice GO 33 · N11 N12 |
| UX | VS-UX-09 |
| AC | **Given** stoppé ou correction avec re-exec **When** relance **Then** nouveau contrat/GO exigé |
| Taille | S |

### VS-BL-US-028 — Interdiction secrets & PII

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E9 |
| Acteur | Système |
| Story | En tant que Morris, je veux zéro secret/PII réelle dans UI/logs/preuves, afin de respecter RGPD minimal. |
| Sources | VS-FR-15 · VS-BR-16 · VS-CAND-13 · VS-AC-10 |
| UX | Transverse |
| AC | **Given** n’importe quel écran/preuve **When** inspection **Then** pas de token/clé · demande de test sans PII |
| Taille | S |

### VS-BL-US-029 — Observabilité IDs + fuseau + source statut

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E10 |
| Acteur | Système |
| Story | En tant que Morris, je veux requestId/correlationId/contractId/eventId et timestamps fuseau, afin de reconstruire. |
| Sources | VS-CAND-15 · observabilité 32 |
| UX | Transverse |
| AC | **Given** événement **When** journal **Then** IDs + TZ + source statut · aucun faux succès |
| Taille | M |

### VS-BL-US-030 — FinOps plafond À définir (qualif + analyse)

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E2/E7 |
| Acteur | Morris |
| Story | En tant que Morris, je veux voir les appels séparés et pouvoir arrêter avant une nouvelle conso. |
| Sources | VS-FR-16 · VS-CAND-14 · VS-BR-03 |
| UX | VS-UX-02/07 |
| AC | **Given** appels GPT **When** UI **Then** compteurs séparés · plafond « À définir » · stop avant nouvel appel · pas de € inventé |
| Taille | S |

### VS-BL-US-031 — Mapping dix états / quatre vues (cockpit)

| Champ | Contenu |
|-------|---------|
| Epic / Cap | E1–E8 transverse UX |
| Acteur | Morris |
| Story | En tant que Morris, je veux naviguer les dix états dans les quatre vues P0, afin de ne pas créer dix routes. |
| Sources | VS-CAND-02 · UX 35/36 · VS-UX-01…10 |
| UX | Quatre vues |
| AC | **Given** Incrément A **When** parcours mock **Then** chaque état accessible via vue mappée · aucune 5e route VS |
| Taille | L |

### VS-BL-US-032 — Variantes Loading / Erreur / STOP / GO invalide

| Champ | Contenu |
|-------|---------|
| Epic / Cap | Transverse |
| Acteur | Morris |
| Story | En tant que Morris, je veux les variantes d’état, afin de gérer les cas non nominaux. |
| Sources | VAR `52:2/10/18/26` · N1 N3 N5 N12 |
| UX | Variantes |
| AC | **Given** conditions variantes **When** affichage **Then** Loading/Erreur/STOP/GO-invalide distincts et accessibles |
| Taille | M |

### VS-BL-US-033 — Scénarios négatifs N1–N16 (couverture transverse)

| Champ | Contenu |
|-------|---------|
| Epic / Cap | Transverse QA |
| Acteur | Morris / Système |
| Story | En tant que Morris, je veux que chaque N1–N16 soit testable ou différé justifié, afin d’éviter les trous. |
| Sources | N1–N16 |
| UX | Selon N |
| AC | Voir matrice §9 — chaque N couvert par US ou différé avec risque |
| Taille | L (lot tests) |

---

## 8. Traçabilité rapide stories → sources

| Story | FR/BR/AC/N/UX principaux |
|-------|--------------------------|
| 001–003 | FR-01 · UX-01 · CAND-01 |
| 004–008 | FR-02/03/16 · BR-01/02/03 · N1/N2 · UX-02/03 |
| 009–012 | FR-04/05/06 · BR-05/06 · AC-02/03 · N3–N6 · UX-04 |
| 013–016 | FR-13/14 · BR-12/13 · AC-11/12 · N16 · CAND-05/10 |
| 017–020 | FR-07/08/09/10 · BR-07/08/09/10/11 · AC-04/05/09 · N7–N12 · UX-05 |
| 021–022 | FR-11/17 · BR-15 · AC-06 · N13/N14 · UX-06 |
| 023–024 | FR-12 · BR-14 · N15 · UX-07/08 · CAND-08 |
| 025–027 | AC-07/08 · UX-09/10 |
| 028–030 | FR-15/16 · BR-16 · AC-10 · CAND-13/14/15 |
| 031–033 | UX-01…10 · VAR · N1–N16 |

---

## 9. Matrice de couverture

| Source | Story(s) | Incrément | Preuve | Couverture |
|--------|----------|-----------|--------|------------|
| VS-FR-01 | 001,002 | A | UI requestId | couvert |
| VS-FR-02 | 006 | B/C | validateur | couvert |
| VS-FR-03 | 007 | A/B | UI qualif | couvert |
| VS-FR-04 | 011 | A/B | UI gate | couvert |
| VS-FR-05 | 009,010 | B | contrat | couvert |
| VS-FR-06 | 012 | B/D | invalidation | couvert |
| VS-FR-07 | 017 | B/D | harness | couvert |
| VS-FR-08 | 018 | D | sandbox file | couvert |
| VS-FR-09 | 018 | D | remote=0 | couvert |
| VS-FR-10 | 019 | B/D | STOP event | couvert |
| VS-FR-11 | 021 | B/D | rapport | couvert |
| VS-FR-12 | 023–025 | E | verdict+décision | couvert |
| VS-FR-13 | 014 | B | source statut | couvert |
| VS-FR-14 | 015 | B | CLI harness | couvert |
| VS-FR-15 | 028 | A+ | audit secrets | couvert |
| VS-FR-16 | 005,030 | C/E | compteurs | couvert |
| VS-FR-17 | 022 | B/E | blocage pack | couvert |
| VS-BR-01…17 | 006–030 | A–E | selon BR | couvert |
| VS-AC-01…12 | 001–031 | A–E | BeB | couvert |
| N1 | 006 | C | fail-closed | couvert |
| N2 | 004 | B | Truth Check | couvert |
| N3 | 012 | B/D | invalidation | couvert |
| N4 | 017 | D | refus spawn | couvert |
| N5 | 012,017 | D | refus | couvert |
| N6 | 012 | D | refus | couvert |
| N7 | 018 | D | allowlist | couvert |
| N8 | 018 | D | policy | couvert |
| N9 | 018 | D | erreur port | couvert |
| N10 | 018,021 | D | rapport échec | couvert |
| N11 | 020 | D | timeout | couvert |
| N12 | 019 | D | STOP | couvert |
| N13 | 021 | D/E | blocage | couvert |
| N14 | 022 | E | blocage | couvert |
| N15 | 023 | E | fail-closed | couvert |
| N16 | 016 | B | reprise | couvert |
| VS-CAND-01…15 | 001–030 | A–E | docs+UI | couvert (14 réserve valeur) |
| VS-UX-01…10 | 001–031 | A | mapping | couvert |
| VAR Loading/Err/STOP/GO | 005,006,019,012,032 | A–D | variantes | couvert |

**Aucune source sans couverture.** VS-CAND-14 : plafond **obligatoire** couvert ; valeur numérique **différée** (À définir) — justifié.

---

## 10. Risques backlog

| Risque | Mitigation |
|--------|------------|
| Adapter Studio↔harness sous-estimé | US-013 L + Incr. B avant live |
| Confusion 10 routes | US-031 + DoR « pas de nouvelle route » |
| Live trop tôt | Gates G-VS-LIVE-GPT / CURSOR |
| MVP implicite | DoD + claims interdits |
| Plafond non chiffré | Afficher « À définir » ; GO FinOps séparé |

---

## 11. Gates Morris (rappel)

| Gate | Objet |
|------|-------|
| G-VS-BL | **Consommé** — produire backlog |
| G-VS-BL-VAL | Validation `VS-BL-CAND-*` / backlog |
| G-VS-BL-DOC | Commit/push/PR/merge 38–40 |
| G-VS-DEL | Delivery |
| G-VS-LIVE-GPT | GPT live |
| G-VS-LIVE-CURSOR | Cursor live |
| G-VS-LIMIT | Valeur numérique plafond |
| G-VS-CI / MVP / IND | Interdits tant que non GO |

---

## 12. Synthèse quantitative

| Élément | Nombre |
|---------|--------|
| Epics | 10 |
| Capabilities | 34 |
| User stories | **33** (`VS-BL-US-001` … `033`) |
| Incréments candidats | 5 (voir `39`) |


---

# ANNEXE B — Document 39 intégral

# SFIA Studio — Story map et séquencement du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `39-poc-vertical-slice-story-map-and-sequencing.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Statut** | `draft-for-morris-validation` — incréments **candidats non validés** |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale**) |
| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Companion** | [`38`](./38-poc-vertical-slice-backlog.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |

> Story map des **dix états** sur **quatre vues P0**.
> Aucun incrément n’est validé sans GO Morris.

---

## 1. Backbone — dix étapes / états

```text
01 Nouvelle demande
 → 02 Qualification en cours
 → 03 Qualification proposée
 → 04 Gate Morris
 → 05 Exécution
 → 06 Rapport disponible
 → 07 Analyse GPT
 → 08 Verdict proposé
 → 09 Décision Morris
 → 10 Clôture
```

Variantes transverses : Loading · Erreur fail-closed · STOP · GO invalide.

---

## 2. Mapping états → quatre vues P0

| Vue P0 (route existante) | États VS-UX | Stories principales |
|--------------------------|-------------|---------------------|
| **Nouvelle demande** `/nouvelle-demande` | 01, 02, 03 | 001–008, 005, 006, 030, 032 |
| **Décision Morris / Gate** `/decision` | 04 | 009–012, 032 |
| **Cycle actif** `/cycle-actif` | 05, 06, 07, 08 | 017–024, 019, 020, 032 |
| **Décision finale** `/decision` (phase post-verdict) | 09 | 025, 027 |
| **Vue synthèse / clôture** `/synthese` | 10 | 026 |

**Règle :** états / panneaux / transitions — **pas** dix routes.
Toute 5e route VS = STOP / arbitrage Morris.

---

## 3. Story map (backbone × stories)

| Étape | Stories | Dépendances verticales |
|-------|---------|------------------------|
| 01 | 001, 002, 003, 031 | — |
| 02 | 004, 005, 006, 030, 032 | 001 |
| 03 | 007, 008 | 004–006 |
| 04 | 009, 010, 011, 012, 032 | 007, 009 |
| 05 | 013*, 014, 017, 018, 019, 020, 032 | 011 GO, 017 |
| 06 | 021, 022 | 018 |
| 07 | 023, 030, 032 | 021–022 |
| 08 | 024 | 023 |
| 09 | 025, 027 | 024 |
| 10 | 026 | 025 |
| Transverse | 015, 016, 028, 029, 033 | Continu |

\*013 adaptateur commence Incr. B, critique avant live.

---

## 4. Dépendances horizontales

| Lien | Nature |
|------|--------|
| 002 IDs ↔ toutes | Corrélation obligatoire |
| 013 adaptateur ↔ 014/017/018 | Pas de live UI sans adaptateur contrôlé |
| 012 invalidation ↔ 017 | Même ancrage |
| 022 pack ↔ 023/025 | Blocage positif |
| 015 harness autonome ↔ 018 | Chemin de contrôle parallèle |
| 028 secrets ↔ toutes | Non-négociable |

---

## 5. Chemin critique

```text
US-001 → 004 → 007 → 009/011 → 013/017 → 018 → 021/022 → 023/024 → 025 → 026
```

Parallélisable avec prudence : 028/029 (transverse), 015 (harness-only), 031 (shell mapping A).

**Ne pas paralléliser :** gate (011) avec spawn (018) ; analyse (023) avant pack (022) ; live GPT/Cursor avant Incr. B.

---

## 6. Incréments candidats (non validés)

### Incrément A — Cockpit statique gouverné

| Champ | Contenu |
|-------|---------|
| Objectif | Prouver mapping 10 états / 4 vues avec données mockées |
| Stories | 001–003, 007*, 010*, 011*, 026*, 031, 032 (UI mock), 028 (checklist) |
| Live | Aucun |
| Sortie | Parcours UI navigable ; Abandonner visible ; clôture slice-only mock ; **pas** 10 routes |
| Gate suivant | Revue visuelle + GO Incr. B |
| Preuve | Screenshots / Playwright états |

\*Versions mock du dossier gate / qualif.

### Incrément B — Studio ↔ harness contrôlé non live

| Champ | Contenu |
|-------|---------|
| Objectif | Contrat, gates, journal, événements via ports fixture |
| Stories | 009, 012–017, 014, 015, 016, 019 (STOP simulé), 021–022 (fixture), 029, 033 (N fixture) |
| Live | Aucun GPT/Cursor réel |
| Sortie | BeB fixture Studio→harness→preuves ; harness autonome OK |
| Gate | GO avant Incr. C |
| Preuve | Journal + proofStore + tests harness existants |

### Incrément C — Qualification GPT réelle bornée

| Champ | Contenu |
|-------|---------|
| Objectif | Qualif live fail-closed + FinOps |
| Stories | 004–008, 005, 006, 030 (qualif) |
| Live | GPT qualif uniquement (flags) |
| Sortie | QualificationCandidate validée ou rejetée ; compteur ; no retry ; plafond À définir |
| Gate | **G-VS-LIVE-GPT** |
| Preuve | Observation GPT + UI |

### Incrément D — Cursor sandbox réel

| Champ | Contenu |
|-------|---------|
| Objectif | Markdown sandbox après GO revalidé |
| Stories | 017–021, 019, 020, 012 (runtime) |
| Live | Cursor sandbox |
| Sortie | output.md · remote=0 · STOP/timeout · rapport |
| Gate | **G-VS-LIVE-CURSOR** |
| Preuve | Fichier sandbox + rapport (capitaliser spike 31) |

### Incrément E — Analyse GPT et clôture

| Champ | Contenu |
|-------|---------|
| Objectif | Verdict candidat + décision Morris + clôture |
| Stories | 022–027, 023, 024, 030 (analyse) |
| Live | GPT analyse |
| Sortie | GptVerdictCandidate · MorrisFinalDecision · CycleSummary · réserves |
| Gate | Clôture humaine ; pas de claim MVP |
| Preuve | Verdict + décision journalisés |

---

## 7. Ordre delivery recommandé

```text
A (cockpit mock)
 → B (adaptateur + fixtures)
 → C (GPT qualif live)
 → D (Cursor live)
 → E (analyse + clôture)
```

Gates humains entre A→B, B→C, C→D, D→E.

---

## 8. Challenge du séquencement

| Question | Réponse conception backlog |
|----------|----------------------------|
| Utile maintenant ? | Oui — isole UI avant live |
| Dette créée ? | Adaptateur B = dette acceptée si reporté |
| Plus simple ? | Harness-only déjà prouvé ; A+B ajoutent Studio gouverné |
| Intégration trop précoce ? | Évitée : live seulement C/D/E sous gates |
| Gate Morris visible ? | Oui — 011 dès A mock, réel dès B/D |
| Preuve mesurable ? | Oui par incrément |
| MVP implicite ? | Non — scénario Markdown preuve + claims interdits |

**Option alternative (candidat VS-BL-CAND) :** B avant A partiel (CLI d’abord) — plus rapide tech, moins de preuve UX Studio. Non retenue comme reco principale.

---

## 9. Risques de parallélisation

| Parallelisme | Risque | Conseil |
|--------------|--------|---------|
| A ∥ B | Divergence contrat UI | Sérialiser A puis B ou sync contrat |
| C ∥ D | Double live + FinOps | Interdit sans GO |
| E avant D | Verdict sans exécution | Interdit |
| 031 ∥ 013 | Routes vs adaptateur | 031 d’abord (A) |

---

## 10. Critères de sortie par incrément

| Incr. | Sortie minimale |
|-------|-----------------|
| A | 10 états mock dans 4 vues ; Abandonner ; clôture slice-only |
| B | GO hash/HEAD fixture ; journal ; harness sans Studio |
| C | Qualif live fail-closed ; FinOps visible |
| D | Markdown sandbox ; STOP/timeout ; remote=0 |
| E | Verdict candidat ; clôture Morris ; pack complet |

**Vertical slice « prouvé » (candidat, non validé) :** A–E complétés sous gates + VS-AC-01…12 satisfaits avec réserves documentées — voir `VS-BL-CAND-10`.

---

## 11. Observations code (lecture seule)

| Actif | Usage incrément |
|-------|-----------------|
| 4 routes + shell + UI kit | A |
| Fixtures app | A |
| Harness GateValidator / fixtures GPT-Cursor / journal | B |
| openaiRealSpike / cursorRealSpike / e2e sandbox | C/D (sous flags) |
| Pas d’adaptateur Studio↔harness | B (à créer en delivery) |
| Pas de CI Studio | Hors backlog delivery POC |

---

## 12. Synthèse

| Élément | Valeur |
|---------|--------|
| Vues | 4 |
| États | 10 + 4 variantes |
| Stories mappées | 33 |
| Incréments candidats | A–E |
| Push branche | **Interdit** (ce cycle) |


---

# ANNEXE C — Document 40 intégral

# SFIA Studio — Decision pack backlog vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `40-poc-vertical-slice-backlog-decision-pack.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Statut** | `draft-for-morris-validation` — **aucune VS-BL-CAND validée** |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale**) |
| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Companions** | [`38`](./38-poc-vertical-slice-backlog.md) · [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) |

> Observations / hypothèses / options / recommandations / candidats.
> **Ne jamais** écrire qu’une `VS-BL-CAND-*` est validée.

---

## 1. Synthèse

Ce cycle produit un backlog borné (33 stories, 10 epics, incréments A–E) pour le vertical slice POC, sans code ni live ni versionnement projet.

| Livrable | Rôle |
|----------|------|
| `38` | Epics, stories, AC, matrice couverture |
| `39` | Story map, séquencement, incréments |
| `40` | Ce pack — `VS-BL-CAND-*` |

---

## 2. Observations (certaines)

1. Docs `32`–`37` intégrés sur `main` @ `722f586…` (PR #228 MERGED).
2. App = 4 routes P0 fixtures ; pas d’adaptateur Studio↔harness ; gate UI actuel ≠ 4 actions VS.
3. Harness = fixtures par défaut ; spikes GPT/Cursor/e2e prouvés hors UI avec réserves (`29`–`31`).
4. Architecture Option B / AF-Option C / Git vérité / Morris L0 = invariants.
5. Pas de CI GitHub pour `projects/sfia-studio/**`.
6. Plafond GPT : obligatoire, valeur **À définir** (VS-CAND-14).
7. Dix états ≠ dix routes = décision UX validée.

---

## 3. Hypothèses

| ID | Hypothèse |
|----|----------|
| H1 | Delivery réutilisera les 4 routes P0 via états/variantes |
| H2 | Incrément A mock suffit à prouver le mapping UX avant adaptateur |
| H3 | Ports fixture harness suffisent pour Incr. B |
| H4 | Tailles XS–L sont relatives (pas d’estimation horaire) |
| H5 | Live GPT/Cursor restent derrière flags + GO Morris |
| H6 | Valeur plafond GPT sera arbitrée hors design (G-VS-LIMIT) |

---

## 4. Options

| Sujet | Option A | Option B (recommandée) | Notes |
|-------|----------|------------------------|-------|
| Granularité | 15 mega-stories | **33 stories** | Traçabilité FR/N |
| Séquencement | Live d’abord | **A→B→C→D→E** | Moins de risque |
| Entry | CLI only | **Studio + harness autonome** | Preuve cockpit |
| Négatifs | Différer N* | **Couvrir dans US-033 + stories** | Matrice §38 |
| Adaptateur | Spécifier API maintenant | **Story L + spike tech ultérieur** | Pas de protocole ici |

---

## 5. Recommandations (non validées)

1. Valider d’abord `VS-BL-CAND-*` avant commit/push des docs 38–40.
2. Delivery minimal = Incr. A puis B avant tout live.
3. Ne pas paralléliser C et D.
4. Exiger G-VS-LIVE-GPT / CURSOR distincts.
5. Garder harness autonome comme chemin de non-régression.
6. Ne pas ouvrir CI/MVP/industrialisation dans ce backlog.
7. Capitaliser spikes existants plutôt que réécrire les ports.

---

## 6. Décisions candidates `VS-BL-CAND-*`

| ID | Décision candidate | Impact | Risque si non tranché | Dette |
|----|-------------------|--------|----------------------|-------|
| **VS-BL-CAND-01** | Incréments A→B→C→D→E comme séquence delivery | Ordre BeB | Live trop tôt | Faible |
| **VS-BL-CAND-02** | Priorité epics : E1–E3 UI → E4 adaptateur → E5–E8 live → E9/E10 transverse | Focus | Dette adaptateur | Moyenne |
| **VS-BL-CAND-03** | Premier périmètre delivery = Incrément A (cockpit mock) | Preuve UX | Peu de « wow » | Faible |
| **VS-BL-CAND-04** | Stratégie mock (A/B) puis live (C/D/E) | Sécurité FinOps | — | Faible |
| **VS-BL-CAND-05** | Adaptateur fin = story L en Incr. B, protocole en cycle archi ultérieur | Option B | Blocage delivery | Acceptable |
| **VS-BL-CAND-06** | Couverture N1–N16 via stories + US-033 (pas de report silencieux) | Qualité | Trous QA | Faible |
| **VS-BL-CAND-07** | Gate obligatoire avant GPT live (Incr. C) | Sécurité | Coût | Faible |
| **VS-BL-CAND-08** | Gate obligatoire avant Cursor live (Incr. D) | Sécurité | Coût | Faible |
| **VS-BL-CAND-09** | Plafond GPT : UI « À définir » jusqu’à G-VS-LIMIT (ne pas inventer) | FinOps | Friction | Nulle |
| **VS-BL-CAND-10** | Critères « slice prouvé » = VS-AC-01…12 + A–E sous gates + réserves documentées ; **≠** MVP | Acceptation | Claim abusif | Discipline |
| **VS-BL-CAND-11** | Stratégie tests : Vitest/Playwright app (A) + tests harness (B–D) + preuves live sous flags | QA | Pas de CI Studio | Acceptable POC |
| **VS-BL-CAND-12** | 33 stories / 10 epics = granularité retenue (pas fusion silencieuse) | Traçabilité | Effort doc | Faible |

---

## 7. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| Backlog Standard | Guide delivery | Sur-spécification | Maintenir alignement 38↔32–37 |
| Incr. A mock | Preuve UX rapide | Sous-estimer adaptateur | B obligatoire avant live |
| Pas de CI | POC local | Régression non détectée | Futur G-VS-CI |
| Spikes existants | Accélère C/D | Réserves spike | Documenter dans DoD |

---

## 8. Proposition de validation Morris

Morris est invité à **valider / amender / refuser** chaque `VS-BL-CAND-*` (ou un lot), **sans** autoriser :

- commit / push / PR / merge des docs 38–40 ;
- delivery / live / archi technique / CI / MVP.

Effet d’une validation backlog : autoriser un cycle suivant (versionnement docs ou delivery Incr. A sous GO distinct).

---

## 9. Gates suivants

| Gate | Objet |
|------|-------|
| G-VS-BL-VAL | Validation backlog / VS-BL-CAND |
| G-VS-BL-DOC | Commit/push/PR/merge 38–40 |
| G-VS-DEL-A | Delivery Incrément A |
| G-VS-LIVE-GPT | Incrément C |
| G-VS-LIVE-CURSOR | Incrément D |
| G-VS-LIMIT | Valeur plafond GPT |
| G-VS-CI / MVP / IND | Interdits sans GO |

---

## 10. Verdict candidat

`SFIA STUDIO VERTICAL SLICE BACKLOG READY — MORRIS VALIDATION REQUIRED`

### Interdits

BACKLOG VALIDATED · READY FOR DELIVERY · MVP DEFINED · PRODUCTION READY · API SELECTED · L5 GLOBAL PROVEN · DOCUMENTATION MERGED

---

## 11. Décisions Morris attendues

1. Valider / amender / refuser `VS-BL-CAND-01`…`12`.
2. Autoriser ou non le versionnement 38–40.
3. Sélectionner le premier incrément delivery (A recommandé).
4. **Ne pas** traiter ce pack comme GO live, delivery ou merge.


---

# ANNEXE D — Diff utile (38–40)

diff --git a/projects/sfia-studio/38-poc-vertical-slice-backlog.md b/projects/sfia-studio/38-poc-vertical-slice-backlog.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/38-poc-vertical-slice-backlog.md
+# SFIA Studio — Backlog delivery borné du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `38-poc-vertical-slice-backlog.md` |
+| **Cycle** | 5 — Backlog / user stories |
+| **Profil** | Standard |
+| **Typologie** | DOC / BACKLOG / POC |
+| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale**) |
+| **Base Git** | `origin/main` @ `722f586855743f87a6d3318ccec2dd6224676e28` |
+| **Statut** | `draft-for-morris-validation` — **aucune story ni incrément validés** |
+| **Companions** | [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
+| **Sources** | [`32`](./32-poc-vertical-slice-functional-design.md)–[`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
+| **Code / live** | **Aucun** dans ce cycle |
+
+> Backlog documentaire du **premier vertical slice POC**.
+> Dix **états** UX ≠ dix routes · quatre vues P0 · Option B inchangée · plafond GPT **À définir** · aucun claim MVP.
+
+---
+
+## 1. Objectif
+
+Transformer les exigences validées (`VS-FR` / `VS-BR` / `VS-AC` / N1–N16 / VS-UX) en epics, capabilities et user stories testables permettant un futur delivery **borné** du BeB :
+
+Studio → qualification GPT → gate Morris → harness → Cursor sandbox → preuves → verdict GPT candidat → décision Morris → clôture.
+
+---
+
+## 2. Périmètre / hors périmètre
+
+### Dans le périmètre backlog
+
+- Stories pour le parcours 10 états dans **4 vues P0**
+- Adaptateur fin Studio→harness (sans autorité)
+- Qualification / verdict GPT (fixture puis live sous gate)
+- Cursor sandbox (fixture puis live sous gate)
+- Gates Morris, STOP, invalidation GO, FinOps (compteur + plafond À définir + no retry)
+- Sécurité / RGPD minimal / observabilité / reprise session
+
+### Hors périmètre
+
+- Choix stack / API / BDD / ORM / protocole
+- CI/CD, déploiement, industrialisation, L5
+- Multi-projet, MVP produit, écriture Git distante
+- Modification Figma / docs `01`–`37` / code (ce cycle)
+- Valeur numérique du plafond GPT (reste **À définir**)
+
+---
+
+## 3. Definition of Ready (DoR) — story
+
+Une story est Ready si :
+
+1. ID stable `VS-BL-US-*` ;
+2. epic + capability + acteur ;
+3. formulation En tant que / Je veux / Afin de ;
+4. sources (`VS-FR`/`VS-BR`/`VS-AC`/N/UX) ;
+5. état UX ou variante ;
+6. préconditions ;
+7. AC Given/When/Then testables ;
+8. hors périmètre explicite ;
+9. aucune dépendance stack non tranchée (sinon hypothèse / spike candidat) ;
+10. gate Morris éventuel identifié.
+
+---
+
+## 4. Definition of Done (DoD) — candidat delivery futur
+
+**Non validée** — candidate pour GO delivery :
+
+1. AC satisfaits avec preuves (journal, screenshots, fixtures ou live sous gate) ;
+2. aucun secret exposé ;
+3. Studio = vue dérivée (pas de vérité parallèle) ;
+4. harness autonome toujours possible ;
+5. timeout ≠ GO ; STOP journalisé ;
+6. pas de claim MVP / production-ready ;
+7. review pack / preuves selon story ;
+8. pas d’écriture Git distante dans le slice.
+
+---
+
+## 5. Acteurs
+
+| Acteur | Rôle |
+|--------|------|
+| Morris (L0) | Saisie, gates, STOP, clôture |
+| SFIA Studio | Cockpit / vue dérivée |
+| Adaptateur fin | Transmission sans autorité |
+| Harness | Policy, revalidation, journal, preuves |
+| GPT | Qualifie / analyse (candidat) |
+| Cursor | Exécute sandbox bornée |
+| Git | Vérité durable / Truth Check |
+
+---
+
+## 6. Epics et capabilities
+
+| Epic | Capabilities |
+|------|----------------|
+| **E1** Demande & identité | C1.1 Saisie · C1.2 IDs · C1.3 Abandon pré-qualif |
+| **E2** Qualification GPT | C2.1 Déclenchement · C2.2 Loading/fail-closed · C2.3 Affichage · C2.4 FinOps |
+| **E3** Contrat & Gate | C3.1 Contrat/hash · C3.2 Dossier GO · C3.3 4 actions · C3.4 Invalidation |
+| **E4** Adaptateur Studio↔harness | C4.1 Transmission · C4.2 États dérivés · C4.3 Mode autonome · C4.4 Reprise session |
+| **E5** Exécution Cursor | C5.1 Revalidation · C5.2 Spawn sandbox · C5.3 STOP/timeout · C5.4 Refus hors allowlist |
+| **E6** Rapport & preuves | C6.1 Rapport · C6.2 Pack · C6.3 Aperçu sanitisé · C6.4 Blocage incomplet |
+| **E7** Analyse & verdict | C7.1 Paquet preuves · C7.2 Analyse GPT · C7.3 Verdict candidat · C7.4 FinOps analyse |
+| **E8** Décision & clôture | C8.1 Décision finale · C8.2 CycleSummary slice-only · C8.3 Relance nouveau GO |
+| **E9** Sécurité & RGPD | C9.1 No PII/secrets · C9.2 Masquage · C9.3 Journal refus |
+| **E10** Observabilité & perf | C10.1 Corrélation IDs · C10.2 Durées séparées · C10.3 Source statut · C10.4 Aucun faux succès |
+
+---
+
+## 7. User stories
+
+### VS-BL-US-001 — Saisir une demande de preuve
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E1 / C1.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux saisir une intention Markdown sandbox, afin de démarrer un cycle de preuve gouverné. |
+| Valeur | Entrée BeB observable |
+| Sources | VS-FR-01 · VS-CAND-01 · VS-UX-01 |
+| UX | VS-UX-01 · vue Nouvelle demande |
+| Préconditions | Studio accessible ; projet connu |
+| AC | **Given** vue Nouvelle demande **When** Morris saisit titre+synthèse et voit requestId candidat **Then** aucune exécution ni GO implicite |
+| Négatifs | Intention vide → validation locale, pas de qualif |
+| Preuves | StudioRequest horodatée |
+| Dépendances | — |
+| Risque | Faible |
+| Taille | S |
+| Gate | — |
+| Hors périmètre | Live GPT ; écriture distante |
+| Notes delivery | Réutiliser shell floating `/nouvelle-demande` ; étendre états (pas nouvelle route) |
+
+### VS-BL-US-002 — Propager requestId / correlationId
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E1 / C1.2 |
+| Acteur | Studio / Harness |
+| Story | En tant que Morris, je veux des IDs stables visibles, afin de reconstruire le parcours. |
+| Sources | VS-CAND-15 · VS-FR-01 · E10 |
+| UX | Toutes |
+| AC | **Given** demande créée **When** navigation entre états **Then** requestId et correlationId inchangés et affichés |
+| Preuves | Journal eventId liés |
+| Taille | S |
+
+### VS-BL-US-003 — Abandonner avant qualification
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E1 / C1.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux abandonner avant qualif, afin d’éviter toute consommation GPT. |
+| Sources | N16 partiel · parcours 33 |
+| UX | VS-UX-01 |
+| AC | **Given** intention capturée **When** Abandonner **Then** état `abandonné` · 0 appel GPT |
+| Taille | XS |
+
+### VS-BL-US-004 — Déclencher qualification GPT
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E2 / C2.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux déclencher explicitement « Qualifier la demande », afin de lancer une qualification contrôlée. |
+| Sources | VS-FR-02 · VS-FR-03 · VS-UX-02 |
+| UX | VS-UX-01→02 |
+| AC | **Given** demande valide **When** CTA Qualifier **Then** état `qualification_en_cours` · compteur FinOps +1 · aucun GO |
+| Négatifs | N2 sources Git indisponibles → STOP lecture |
+| Taille | M |
+| Gate | Avant live GPT : G-VS-LIVE-GPT (futur) |
+| Notes | Fixture d’abord (Incr. B/C) |
+
+### VS-BL-US-005 — Loading qualification + no retry
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E2 / C2.2 · C2.4 |
+| Acteur | Système / Morris |
+| Story | En tant que Morris, je veux voir la phase active et le plafond « À définir », sans retry auto. |
+| Sources | VS-FR-16 · VS-BR-03 · VS-CAND-14 · VAR Loading `52:2` |
+| UX | VS-UX-02 |
+| AC | **Given** qualif en cours **When** UI affiche **Then** phase + `n / À définir` + « Aucun retry automatique » · pas de fausse barre inventée |
+| Taille | S |
+
+### VS-BL-US-006 — Rejet fail-closed QualificationCandidate
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E2 / C2.2 |
+| Acteur | Harness / Studio |
+| Story | En tant que Morris, je veux qu’une sortie GPT invalide soit rejetée, afin d’éviter un GO aveugle. |
+| Sources | VS-FR-02 · VS-BR-01 · VS-BR-02 · N1 · VAR Erreur `52:10` |
+| UX | VS-UX-02 |
+| AC | **Given** sortie hors contrat **When** validateur refuse **Then** message erreur · pas d’état `qualification_prête` · CTA correction/abandon |
+| Taille | M |
+
+### VS-BL-US-007 — Afficher qualification complète avant gate
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E2 / C2.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux lire cycle, profil, allowlist, stops, hash, afin de contrôler avant GO. |
+| Sources | VS-FR-03 · VS-CAND-03 · VS-UX-03 |
+| UX | VS-UX-03 |
+| AC | **Given** qualif valide **When** affichage **Then** tous champs obligatoires 33 §3 visibles · source GPT étiquetée · pas d’auto-GO |
+| Taille | M |
+
+### VS-BL-US-008 — Demander correction qualification
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E2 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux demander une correction, afin de relancer une nouvelle qualification contrôlée. |
+| Sources | VS-FR-04 · parcours 33 |
+| UX | VS-UX-03 |
+| AC | **Given** qualif proposée **When** Correction **Then** retour `qualification_en_cours` · nouvelle consommation FinOps visible · pas de fallback permissif |
+| Taille | S |
+
+### VS-BL-US-009 — Générer ExecutionContract + hash
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E3 / C3.1 |
+| Acteur | Harness |
+| Story | En tant que Morris, je veux un contrat borné hashé, afin d’ancrer le GO. |
+| Sources | VS-FR-05 · VS-BR-05 · VS-CAND-04 |
+| UX | VS-UX-03/04 |
+| AC | **Given** qualif acceptée pour gate **When** contrat produit **Then** contractId + contractHash + allowlist + gitEffect=none-remote |
+| Taille | M |
+| Notes | Réutiliser canonicalize/hash harness |
+
+### VS-BL-US-010 — Dossier de décision Gate Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E3 / C3.2 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux un dossier ancré (IDs, HEAD, branche, allowlist, horodatage), afin de décider. |
+| Sources | VS-FR-05 · VS-UX-04 |
+| UX | VS-UX-04 · vue Décision |
+| AC | **Given** attente gate **When** affichage **Then** champs d’ancrage complets · timeout ≠ GO affiché |
+| Taille | M |
+
+### VS-BL-US-011 — Quatre actions gate (GO / NO-GO / Corriger / Abandonner)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E3 / C3.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux quatre actions explicites, afin de ne pas confondre NO-GO, STOP et Abandon. |
+| Sources | VS-FR-04 · VS-FR-15/16 (UX) · VS-UX-04 |
+| UX | VS-UX-04 |
+| AC | **Given** gate **When** choix **Then** GO/NO-GO/Corriger/Abandonner distincts · Abandonner destructif + confirmation · conséquence « abandonné » · aucune action Git distante |
+| Négatifs | Confusion Abandon/NO-GO/STOP documentée en UI |
+| Taille | M |
+
+### VS-BL-US-012 — Invalidation GO (HEAD/hash/branche/allowlist)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E3 / C3.4 |
+| Acteur | Harness / Studio |
+| Story | En tant que Morris, je veux qu’un GO stale soit invalide, afin d’empêcher un spawn dangereux. |
+| Sources | VS-FR-06 · VS-BR-06 · VS-AC-02 · VS-AC-03 · N3 · N5 · N6 · VAR GO invalide `52:26` |
+| UX | VS-UX-04/05 |
+| AC | **Given** GO ancré **When** HEAD ou hash change **Then** bandeau GO invalide · harness refuse spawn · nouveau gate requis |
+| Taille | M |
+
+### VS-BL-US-013 — Adaptateur fin sans autorité
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E4 / C4.1 |
+| Acteur | Adaptateur |
+| Story | En tant que Morris, je veux que Studio transmette sans élargir, afin de préserver Option B. |
+| Sources | VS-FR-13 · VS-BR-12 · VS-CAND-05 |
+| UX | Transverse |
+| AC | **Given** action Studio **When** envoi harness **Then** aucune décision inventée · pas de seconde vérité · pas d’assouplissement policy |
+| Taille | L |
+| Notes | Spike candidat interface — pas de protocole figé ici |
+
+### VS-BL-US-014 — Afficher états dérivés depuis preuves/journal
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E4 / C4.2 |
+| Acteur | Studio |
+| Story | En tant que Morris, je veux des états dérivés, afin que Git/preuves priment. |
+| Sources | VS-FR-13 · VS-AC-11 · VS-BR-12 |
+| UX | Toutes |
+| AC | **Given** événements harness **When** UI rafraîchit **Then** statut source explicite · pas d’état inventé |
+| Taille | M |
+
+### VS-BL-US-015 — Harness autonome sans Studio
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E4 / C4.3 |
+| Acteur | Morris / Harness |
+| Story | En tant que Morris, je veux pouvoir exécuter le scénario via harness seul, afin de ne pas dépendre de l’UI. |
+| Sources | VS-FR-14 · VS-BR-13 · VS-AC-12 · VS-CAND-10 |
+| UX | — (CLI) |
+| AC | **Given** contrat+GO **When** harness fixture/live sous flags **Then** preuve BeB sans Studio |
+| Taille | S (déjà partiellement prouvé) |
+| Notes | Capitaliser spikes `29`–`31` |
+
+### VS-BL-US-016 — Reprise après perte de session Studio
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E4 / C4.4 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux reprendre sans inventer d’état, afin d’éviter un faux succès. |
+| Sources | N16 · VS-AC-11 |
+| UX | Reprise |
+| AC | **Given** session perdue **When** rechargement **Then** états depuis preuves/Git · message si incomplet |
+| Taille | M |
+
+### VS-BL-US-017 — Revalidation GO avant Cursor
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E5 / C5.1 |
+| Acteur | Harness |
+| Story | En tant que Morris, je veux une revalidation déterministe avant spawn, afin d’appliquer le gate. |
+| Sources | VS-FR-07 · VS-BR-07 · N4 · N5 |
+| UX | VS-UX-05 |
+| AC | **Given** GO présent **When** spawn demandé **Then** harness revalide hash/HEAD/allowlist · sinon refus |
+| Taille | M |
+
+### VS-BL-US-018 — Exécution Cursor sandbox Markdown
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E5 / C5.2 |
+| Acteur | Cursor / Harness |
+| Story | En tant que Morris, je veux que Cursor crée le Markdown autorisé, afin de prouver le BeB. |
+| Sources | VS-FR-08 · VS-FR-09 · VS-CAND-01 · VS-CAND-07 · VS-UX-05 |
+| UX | VS-UX-05 |
+| AC | **Given** GO revalidé **When** exécution **Then** fichier sandbox allowlist · remote writes=0 · journal dérivé · pas de commandes inventées en UI |
+| Négatifs | N7 N8 N9 N10 |
+| Taille | L |
+| Gate | G-VS-LIVE-CURSOR |
+
+### VS-BL-US-019 — STOP prioritaire pendant exécution
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E5 / C5.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux STOP immédiat, afin d’interrompre toute activité. |
+| Sources | VS-FR-10 · VS-BR-10 · VS-AC-05 · N12 · VAR STOP `52:18` |
+| UX | VS-UX-02/05/07 |
+| AC | **Given** en_exécution **When** STOP **Then** `stoppé` · event journalisé · reprise sous nouveau GO si re-exec |
+| Taille | S |
+
+### VS-BL-US-020 — Timeout ≠ GO
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E5 / C5.3 |
+| Acteur | Système |
+| Story | En tant que Morris, je veux qu’un timeout stoppe sans autoriser, afin d’éviter un GO implicite. |
+| Sources | VS-BR-11 · N11 |
+| UX | VS-UX-05 |
+| AC | **Given** exécution **When** timeout **Then** `stoppé` · message timeout ≠ GO · pas de spawn ultérieur sans nouveau GO |
+| Taille | S |
+
+### VS-BL-US-021 — Rapport et fichiers touchés
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E6 / C6.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux le rapport Cursor/harness et l’aperçu sanitisé, afin de contrôler le résultat. |
+| Sources | VS-FR-11 · VS-UX-06 |
+| UX | VS-UX-06 |
+| AC | **Given** fin exécution **When** rapport disponible **Then** statut · fichiers · remote=0 · réserves · CTA analyse |
+| Négatifs | N13 |
+| Taille | M |
+
+### VS-BL-US-022 — Review pack prérequis analyse / clôture
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E6 / C6.2 · C6.4 |
+| Acteur | Système |
+| Story | En tant que Morris, je veux bloquer si pack incomplet, afin d’éviter une clôture positive fallacieuse. |
+| Sources | VS-FR-17 · VS-BR-15 · VS-AC-06 · N14 |
+| UX | VS-UX-06/08/10 |
+| AC | **Given** pack incomplet **When** analyse ou clôture positive **Then** refus explicite |
+| Taille | S |
+
+### VS-BL-US-023 — Analyse GPT verdict candidat
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E7 |
+| Acteur | Morris / GPT |
+| Story | En tant que Morris, je veux une analyse GPT manuelle du paquet de preuves, afin d’obtenir un verdict **candidat**. |
+| Sources | VS-FR-12 · VS-BR-14 · VS-CAND-08 · VS-UX-07/08 |
+| UX | VS-UX-07→08 |
+| AC | **Given** rapport+pack OK **When** Lancer analyse **Then** appel GPT distinct · compteur · plafond À définir · no retry · verdict étiqueté candidat |
+| Négatifs | N15 fail-closed |
+| Taille | L |
+| Gate | G-VS-LIVE-GPT (analyse) |
+
+### VS-BL-US-024 — Afficher prouvé / non prouvé / écarts
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E7 / C7.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux voir prouvé/non prouvé/écarts/risques/réserves, afin de décider. |
+| Sources | VS-FR-12 · VS-UX-08 |
+| UX | VS-UX-08 |
+| AC | **Given** verdict valide **When** affichage **Then** sections obligatoires · pas de bouton clôture auto |
+| Taille | M |
+
+### VS-BL-US-025 — Décision finale Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E8 / C8.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux clôturer, corriger, relancer (nouveau GO) ou abandonner, afin de conclure. |
+| Sources | VS-FR-12 · VS-AC-07 · VS-AC-08 · VS-UX-09 |
+| UX | VS-UX-09 |
+| AC | **Given** verdict candidat **When** décision **Then** MorrisFinalDecision enregistrée · conséquences explicites · pas d’actions Git groupées |
+| Taille | M |
+
+### VS-BL-US-026 — Clôture slice-only
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E8 / C8.2 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux une synthèse du slice courant uniquement, afin d’éviter un faux portefeuille. |
+| Sources | VS-UX-10 · correctif UX · VS-BR-17 |
+| UX | VS-UX-10 · vue synthèse |
+| AC | **Given** clôture **When** affichage **Then** requestId, décision, MD, preuves, FinOps, traçabilité · **aucun** portfolio multi-projet · aucun claim MVP/prod |
+| Taille | S |
+
+### VS-BL-US-027 — Relance sous nouveau GO
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E8 / C8.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux relancer après STOP/échec uniquement avec nouveau GO, afin de respecter les gates. |
+| Sources | Matrice GO 33 · N11 N12 |
+| UX | VS-UX-09 |
+| AC | **Given** stoppé ou correction avec re-exec **When** relance **Then** nouveau contrat/GO exigé |
+| Taille | S |
+
+### VS-BL-US-028 — Interdiction secrets & PII
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E9 |
+| Acteur | Système |
+| Story | En tant que Morris, je veux zéro secret/PII réelle dans UI/logs/preuves, afin de respecter RGPD minimal. |
+| Sources | VS-FR-15 · VS-BR-16 · VS-CAND-13 · VS-AC-10 |
+| UX | Transverse |
+| AC | **Given** n’importe quel écran/preuve **When** inspection **Then** pas de token/clé · demande de test sans PII |
+| Taille | S |
+
+### VS-BL-US-029 — Observabilité IDs + fuseau + source statut
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E10 |
+| Acteur | Système |
+| Story | En tant que Morris, je veux requestId/correlationId/contractId/eventId et timestamps fuseau, afin de reconstruire. |
+| Sources | VS-CAND-15 · observabilité 32 |
+| UX | Transverse |
+| AC | **Given** événement **When** journal **Then** IDs + TZ + source statut · aucun faux succès |
+| Taille | M |
+
+### VS-BL-US-030 — FinOps plafond À définir (qualif + analyse)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E2/E7 |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux voir les appels séparés et pouvoir arrêter avant une nouvelle conso. |
+| Sources | VS-FR-16 · VS-CAND-14 · VS-BR-03 |
+| UX | VS-UX-02/07 |
+| AC | **Given** appels GPT **When** UI **Then** compteurs séparés · plafond « À définir » · stop avant nouvel appel · pas de € inventé |
+| Taille | S |
+
+### VS-BL-US-031 — Mapping dix états / quatre vues (cockpit)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | E1–E8 transverse UX |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux naviguer les dix états dans les quatre vues P0, afin de ne pas créer dix routes. |
+| Sources | VS-CAND-02 · UX 35/36 · VS-UX-01…10 |
+| UX | Quatre vues |
+| AC | **Given** Incrément A **When** parcours mock **Then** chaque état accessible via vue mappée · aucune 5e route VS |
+| Taille | L |
+
+### VS-BL-US-032 — Variantes Loading / Erreur / STOP / GO invalide
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | Transverse |
+| Acteur | Morris |
+| Story | En tant que Morris, je veux les variantes d’état, afin de gérer les cas non nominaux. |
+| Sources | VAR `52:2/10/18/26` · N1 N3 N5 N12 |
+| UX | Variantes |
+| AC | **Given** conditions variantes **When** affichage **Then** Loading/Erreur/STOP/GO-invalide distincts et accessibles |
+| Taille | M |
+
+### VS-BL-US-033 — Scénarios négatifs N1–N16 (couverture transverse)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Cap | Transverse QA |
+| Acteur | Morris / Système |
+| Story | En tant que Morris, je veux que chaque N1–N16 soit testable ou différé justifié, afin d’éviter les trous. |
+| Sources | N1–N16 |
+| UX | Selon N |
+| AC | Voir matrice §9 — chaque N couvert par US ou différé avec risque |
+| Taille | L (lot tests) |
+
+---
+
+## 8. Traçabilité rapide stories → sources
+
+| Story | FR/BR/AC/N/UX principaux |
+|-------|--------------------------|
+| 001–003 | FR-01 · UX-01 · CAND-01 |
+| 004–008 | FR-02/03/16 · BR-01/02/03 · N1/N2 · UX-02/03 |
+| 009–012 | FR-04/05/06 · BR-05/06 · AC-02/03 · N3–N6 · UX-04 |
+| 013–016 | FR-13/14 · BR-12/13 · AC-11/12 · N16 · CAND-05/10 |
+| 017–020 | FR-07/08/09/10 · BR-07/08/09/10/11 · AC-04/05/09 · N7–N12 · UX-05 |
+| 021–022 | FR-11/17 · BR-15 · AC-06 · N13/N14 · UX-06 |
+| 023–024 | FR-12 · BR-14 · N15 · UX-07/08 · CAND-08 |
+| 025–027 | AC-07/08 · UX-09/10 |
+| 028–030 | FR-15/16 · BR-16 · AC-10 · CAND-13/14/15 |
+| 031–033 | UX-01…10 · VAR · N1–N16 |
+
+---
+
+## 9. Matrice de couverture
+
+| Source | Story(s) | Incrément | Preuve | Couverture |
+|--------|----------|-----------|--------|------------|
+| VS-FR-01 | 001,002 | A | UI requestId | couvert |
+| VS-FR-02 | 006 | B/C | validateur | couvert |
+| VS-FR-03 | 007 | A/B | UI qualif | couvert |
+| VS-FR-04 | 011 | A/B | UI gate | couvert |
+| VS-FR-05 | 009,010 | B | contrat | couvert |
+| VS-FR-06 | 012 | B/D | invalidation | couvert |
+| VS-FR-07 | 017 | B/D | harness | couvert |
+| VS-FR-08 | 018 | D | sandbox file | couvert |
+| VS-FR-09 | 018 | D | remote=0 | couvert |
+| VS-FR-10 | 019 | B/D | STOP event | couvert |
+| VS-FR-11 | 021 | B/D | rapport | couvert |
+| VS-FR-12 | 023–025 | E | verdict+décision | couvert |
+| VS-FR-13 | 014 | B | source statut | couvert |
+| VS-FR-14 | 015 | B | CLI harness | couvert |
+| VS-FR-15 | 028 | A+ | audit secrets | couvert |
+| VS-FR-16 | 005,030 | C/E | compteurs | couvert |
+| VS-FR-17 | 022 | B/E | blocage pack | couvert |
+| VS-BR-01…17 | 006–030 | A–E | selon BR | couvert |
+| VS-AC-01…12 | 001–031 | A–E | BeB | couvert |
+| N1 | 006 | C | fail-closed | couvert |
+| N2 | 004 | B | Truth Check | couvert |
+| N3 | 012 | B/D | invalidation | couvert |
+| N4 | 017 | D | refus spawn | couvert |
+| N5 | 012,017 | D | refus | couvert |
+| N6 | 012 | D | refus | couvert |
+| N7 | 018 | D | allowlist | couvert |
+| N8 | 018 | D | policy | couvert |
+| N9 | 018 | D | erreur port | couvert |
+| N10 | 018,021 | D | rapport échec | couvert |
+| N11 | 020 | D | timeout | couvert |
+| N12 | 019 | D | STOP | couvert |
+| N13 | 021 | D/E | blocage | couvert |
+| N14 | 022 | E | blocage | couvert |
+| N15 | 023 | E | fail-closed | couvert |
+| N16 | 016 | B | reprise | couvert |
+| VS-CAND-01…15 | 001–030 | A–E | docs+UI | couvert (14 réserve valeur) |
+| VS-UX-01…10 | 001–031 | A | mapping | couvert |
+| VAR Loading/Err/STOP/GO | 005,006,019,012,032 | A–D | variantes | couvert |
+
+**Aucune source sans couverture.** VS-CAND-14 : plafond **obligatoire** couvert ; valeur numérique **différée** (À définir) — justifié.
+
+---
+
+## 10. Risques backlog
+
+| Risque | Mitigation |
+|--------|------------|
+| Adapter Studio↔harness sous-estimé | US-013 L + Incr. B avant live |
+| Confusion 10 routes | US-031 + DoR « pas de nouvelle route » |
+| Live trop tôt | Gates G-VS-LIVE-GPT / CURSOR |
+| MVP implicite | DoD + claims interdits |
+| Plafond non chiffré | Afficher « À définir » ; GO FinOps séparé |
+
+---
+
+## 11. Gates Morris (rappel)
+
+| Gate | Objet |
+|------|-------|
+| G-VS-BL | **Consommé** — produire backlog |
+| G-VS-BL-VAL | Validation `VS-BL-CAND-*` / backlog |
+| G-VS-BL-DOC | Commit/push/PR/merge 38–40 |
+| G-VS-DEL | Delivery |
+| G-VS-LIVE-GPT | GPT live |
+| G-VS-LIVE-CURSOR | Cursor live |
+| G-VS-LIMIT | Valeur numérique plafond |
+| G-VS-CI / MVP / IND | Interdits tant que non GO |
+
+---
+
+## 12. Synthèse quantitative
+
+| Élément | Nombre |
+|---------|--------|
+| Epics | 10 |
+| Capabilities | 34 |
+| User stories | **33** (`VS-BL-US-001` … `033`) |
+| Incréments candidats | 5 (voir `39`) |

diff --git a/projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md b/projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md
+# SFIA Studio — Story map et séquencement du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `39-poc-vertical-slice-story-map-and-sequencing.md` |
+| **Cycle** | 5 — Backlog / user stories |
+| **Profil** | Standard |
+| **Statut** | `draft-for-morris-validation` — incréments **candidats non validés** |
+| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale**) |
+| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
+| **Companion** | [`38`](./38-poc-vertical-slice-backlog.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
+
+> Story map des **dix états** sur **quatre vues P0**.
+> Aucun incrément n’est validé sans GO Morris.
+
+---
+
+## 1. Backbone — dix étapes / états
+
+```text
+01 Nouvelle demande
+ → 02 Qualification en cours
+ → 03 Qualification proposée
+ → 04 Gate Morris
+ → 05 Exécution
+ → 06 Rapport disponible
+ → 07 Analyse GPT
+ → 08 Verdict proposé
+ → 09 Décision Morris
+ → 10 Clôture
+```
+
+Variantes transverses : Loading · Erreur fail-closed · STOP · GO invalide.
+
+---
+
+## 2. Mapping états → quatre vues P0
+
+| Vue P0 (route existante) | États VS-UX | Stories principales |
+|--------------------------|-------------|---------------------|
+| **Nouvelle demande** `/nouvelle-demande` | 01, 02, 03 | 001–008, 005, 006, 030, 032 |
+| **Décision Morris / Gate** `/decision` | 04 | 009–012, 032 |
+| **Cycle actif** `/cycle-actif` | 05, 06, 07, 08 | 017–024, 019, 020, 032 |
+| **Décision finale** `/decision` (phase post-verdict) | 09 | 025, 027 |
+| **Vue synthèse / clôture** `/synthese` | 10 | 026 |
+
+**Règle :** états / panneaux / transitions — **pas** dix routes.
+Toute 5e route VS = STOP / arbitrage Morris.
+
+---
+
+## 3. Story map (backbone × stories)
+
+| Étape | Stories | Dépendances verticales |
+|-------|---------|------------------------|
+| 01 | 001, 002, 003, 031 | — |
+| 02 | 004, 005, 006, 030, 032 | 001 |
+| 03 | 007, 008 | 004–006 |
+| 04 | 009, 010, 011, 012, 032 | 007, 009 |
+| 05 | 013*, 014, 017, 018, 019, 020, 032 | 011 GO, 017 |
+| 06 | 021, 022 | 018 |
+| 07 | 023, 030, 032 | 021–022 |
+| 08 | 024 | 023 |
+| 09 | 025, 027 | 024 |
+| 10 | 026 | 025 |
+| Transverse | 015, 016, 028, 029, 033 | Continu |
+
+\*013 adaptateur commence Incr. B, critique avant live.
+
+---
+
+## 4. Dépendances horizontales
+
+| Lien | Nature |
+|------|--------|
+| 002 IDs ↔ toutes | Corrélation obligatoire |
+| 013 adaptateur ↔ 014/017/018 | Pas de live UI sans adaptateur contrôlé |
+| 012 invalidation ↔ 017 | Même ancrage |
+| 022 pack ↔ 023/025 | Blocage positif |
+| 015 harness autonome ↔ 018 | Chemin de contrôle parallèle |
+| 028 secrets ↔ toutes | Non-négociable |
+
+---
+
+## 5. Chemin critique
+
+```text
+US-001 → 004 → 007 → 009/011 → 013/017 → 018 → 021/022 → 023/024 → 025 → 026
+```
+
+Parallélisable avec prudence : 028/029 (transverse), 015 (harness-only), 031 (shell mapping A).
+
+**Ne pas paralléliser :** gate (011) avec spawn (018) ; analyse (023) avant pack (022) ; live GPT/Cursor avant Incr. B.
+
+---
+
+## 6. Incréments candidats (non validés)
+
+### Incrément A — Cockpit statique gouverné
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Prouver mapping 10 états / 4 vues avec données mockées |
+| Stories | 001–003, 007*, 010*, 011*, 026*, 031, 032 (UI mock), 028 (checklist) |
+| Live | Aucun |
+| Sortie | Parcours UI navigable ; Abandonner visible ; clôture slice-only mock ; **pas** 10 routes |
+| Gate suivant | Revue visuelle + GO Incr. B |
+| Preuve | Screenshots / Playwright états |
+
+\*Versions mock du dossier gate / qualif.
+
+### Incrément B — Studio ↔ harness contrôlé non live
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Contrat, gates, journal, événements via ports fixture |
+| Stories | 009, 012–017, 014, 015, 016, 019 (STOP simulé), 021–022 (fixture), 029, 033 (N fixture) |
+| Live | Aucun GPT/Cursor réel |
+| Sortie | BeB fixture Studio→harness→preuves ; harness autonome OK |
+| Gate | GO avant Incr. C |
+| Preuve | Journal + proofStore + tests harness existants |
+
+### Incrément C — Qualification GPT réelle bornée
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Qualif live fail-closed + FinOps |
+| Stories | 004–008, 005, 006, 030 (qualif) |
+| Live | GPT qualif uniquement (flags) |
+| Sortie | QualificationCandidate validée ou rejetée ; compteur ; no retry ; plafond À définir |
+| Gate | **G-VS-LIVE-GPT** |
+| Preuve | Observation GPT + UI |
+
+### Incrément D — Cursor sandbox réel
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Markdown sandbox après GO revalidé |
+| Stories | 017–021, 019, 020, 012 (runtime) |
+| Live | Cursor sandbox |
+| Sortie | output.md · remote=0 · STOP/timeout · rapport |
+| Gate | **G-VS-LIVE-CURSOR** |
+| Preuve | Fichier sandbox + rapport (capitaliser spike 31) |
+
+### Incrément E — Analyse GPT et clôture
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Verdict candidat + décision Morris + clôture |
+| Stories | 022–027, 023, 024, 030 (analyse) |
+| Live | GPT analyse |
+| Sortie | GptVerdictCandidate · MorrisFinalDecision · CycleSummary · réserves |
+| Gate | Clôture humaine ; pas de claim MVP |
+| Preuve | Verdict + décision journalisés |
+
+---
+
+## 7. Ordre delivery recommandé
+
+```text
+A (cockpit mock)
+ → B (adaptateur + fixtures)
+ → C (GPT qualif live)
+ → D (Cursor live)
+ → E (analyse + clôture)
+```
+
+Gates humains entre A→B, B→C, C→D, D→E.
+
+---
+
+## 8. Challenge du séquencement
+
+| Question | Réponse conception backlog |
+|----------|----------------------------|
+| Utile maintenant ? | Oui — isole UI avant live |
+| Dette créée ? | Adaptateur B = dette acceptée si reporté |
+| Plus simple ? | Harness-only déjà prouvé ; A+B ajoutent Studio gouverné |
+| Intégration trop précoce ? | Évitée : live seulement C/D/E sous gates |
+| Gate Morris visible ? | Oui — 011 dès A mock, réel dès B/D |
+| Preuve mesurable ? | Oui par incrément |
+| MVP implicite ? | Non — scénario Markdown preuve + claims interdits |
+
+**Option alternative (candidat VS-BL-CAND) :** B avant A partiel (CLI d’abord) — plus rapide tech, moins de preuve UX Studio. Non retenue comme reco principale.
+
+---
+
+## 9. Risques de parallélisation
+
+| Parallelisme | Risque | Conseil |
+|--------------|--------|---------|
+| A ∥ B | Divergence contrat UI | Sérialiser A puis B ou sync contrat |
+| C ∥ D | Double live + FinOps | Interdit sans GO |
+| E avant D | Verdict sans exécution | Interdit |
+| 031 ∥ 013 | Routes vs adaptateur | 031 d’abord (A) |
+
+---
+
+## 10. Critères de sortie par incrément
+
+| Incr. | Sortie minimale |
+|-------|-----------------|
+| A | 10 états mock dans 4 vues ; Abandonner ; clôture slice-only |
+| B | GO hash/HEAD fixture ; journal ; harness sans Studio |
+| C | Qualif live fail-closed ; FinOps visible |
+| D | Markdown sandbox ; STOP/timeout ; remote=0 |
+| E | Verdict candidat ; clôture Morris ; pack complet |
+
+**Vertical slice « prouvé » (candidat, non validé) :** A–E complétés sous gates + VS-AC-01…12 satisfaits avec réserves documentées — voir `VS-BL-CAND-10`.
+
+---
+
+## 11. Observations code (lecture seule)
+
+| Actif | Usage incrément |
+|-------|-----------------|
+| 4 routes + shell + UI kit | A |
+| Fixtures app | A |
+| Harness GateValidator / fixtures GPT-Cursor / journal | B |
+| openaiRealSpike / cursorRealSpike / e2e sandbox | C/D (sous flags) |
+| Pas d’adaptateur Studio↔harness | B (à créer en delivery) |
+| Pas de CI Studio | Hors backlog delivery POC |
+
+---
+
+## 12. Synthèse
+
+| Élément | Valeur |
+|---------|--------|
+| Vues | 4 |
+| États | 10 + 4 variantes |
+| Stories mappées | 33 |
+| Incréments candidats | A–E |
+| Push branche | **Interdit** (ce cycle) |

diff --git a/projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md b/projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md
+# SFIA Studio — Decision pack backlog vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `40-poc-vertical-slice-backlog-decision-pack.md` |
+| **Cycle** | 5 — Backlog / user stories |
+| **Profil** | Standard |
+| **Statut** | `draft-for-morris-validation` — **aucune VS-BL-CAND validée** |
+| **Branche** | `backlog/sfia-studio-poc-vertical-slice` (**locale**) |
+| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
+| **Companions** | [`38`](./38-poc-vertical-slice-backlog.md) · [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) |
+
+> Observations / hypothèses / options / recommandations / candidats.
+> **Ne jamais** écrire qu’une `VS-BL-CAND-*` est validée.
+
+---
+
+## 1. Synthèse
+
+Ce cycle produit un backlog borné (33 stories, 10 epics, incréments A–E) pour le vertical slice POC, sans code ni live ni versionnement projet.
+
+| Livrable | Rôle |
+|----------|------|
+| `38` | Epics, stories, AC, matrice couverture |
+| `39` | Story map, séquencement, incréments |
+| `40` | Ce pack — `VS-BL-CAND-*` |
+
+---
+
+## 2. Observations (certaines)
+
+1. Docs `32`–`37` intégrés sur `main` @ `722f586…` (PR #228 MERGED).
+2. App = 4 routes P0 fixtures ; pas d’adaptateur Studio↔harness ; gate UI actuel ≠ 4 actions VS.
+3. Harness = fixtures par défaut ; spikes GPT/Cursor/e2e prouvés hors UI avec réserves (`29`–`31`).
+4. Architecture Option B / AF-Option C / Git vérité / Morris L0 = invariants.
+5. Pas de CI GitHub pour `projects/sfia-studio/**`.
+6. Plafond GPT : obligatoire, valeur **À définir** (VS-CAND-14).
+7. Dix états ≠ dix routes = décision UX validée.
+
+---
+
+## 3. Hypothèses
+
+| ID | Hypothèse |
+|----|----------|
+| H1 | Delivery réutilisera les 4 routes P0 via états/variantes |
+| H2 | Incrément A mock suffit à prouver le mapping UX avant adaptateur |
+| H3 | Ports fixture harness suffisent pour Incr. B |
+| H4 | Tailles XS–L sont relatives (pas d’estimation horaire) |
+| H5 | Live GPT/Cursor restent derrière flags + GO Morris |
+| H6 | Valeur plafond GPT sera arbitrée hors design (G-VS-LIMIT) |
+
+---
+
+## 4. Options
+
+| Sujet | Option A | Option B (recommandée) | Notes |
+|-------|----------|------------------------|-------|
+| Granularité | 15 mega-stories | **33 stories** | Traçabilité FR/N |
+| Séquencement | Live d’abord | **A→B→C→D→E** | Moins de risque |
+| Entry | CLI only | **Studio + harness autonome** | Preuve cockpit |
+| Négatifs | Différer N* | **Couvrir dans US-033 + stories** | Matrice §38 |
+| Adaptateur | Spécifier API maintenant | **Story L + spike tech ultérieur** | Pas de protocole ici |
+
+---
+
+## 5. Recommandations (non validées)
+
+1. Valider d’abord `VS-BL-CAND-*` avant commit/push des docs 38–40.
+2. Delivery minimal = Incr. A puis B avant tout live.
+3. Ne pas paralléliser C et D.
+4. Exiger G-VS-LIVE-GPT / CURSOR distincts.
+5. Garder harness autonome comme chemin de non-régression.
+6. Ne pas ouvrir CI/MVP/industrialisation dans ce backlog.
+7. Capitaliser spikes existants plutôt que réécrire les ports.
+
+---
+
+## 6. Décisions candidates `VS-BL-CAND-*`
+
+| ID | Décision candidate | Impact | Risque si non tranché | Dette |
+|----|-------------------|--------|----------------------|-------|
+| **VS-BL-CAND-01** | Incréments A→B→C→D→E comme séquence delivery | Ordre BeB | Live trop tôt | Faible |
+| **VS-BL-CAND-02** | Priorité epics : E1–E3 UI → E4 adaptateur → E5–E8 live → E9/E10 transverse | Focus | Dette adaptateur | Moyenne |
+| **VS-BL-CAND-03** | Premier périmètre delivery = Incrément A (cockpit mock) | Preuve UX | Peu de « wow » | Faible |
+| **VS-BL-CAND-04** | Stratégie mock (A/B) puis live (C/D/E) | Sécurité FinOps | — | Faible |
+| **VS-BL-CAND-05** | Adaptateur fin = story L en Incr. B, protocole en cycle archi ultérieur | Option B | Blocage delivery | Acceptable |
+| **VS-BL-CAND-06** | Couverture N1–N16 via stories + US-033 (pas de report silencieux) | Qualité | Trous QA | Faible |
+| **VS-BL-CAND-07** | Gate obligatoire avant GPT live (Incr. C) | Sécurité | Coût | Faible |
+| **VS-BL-CAND-08** | Gate obligatoire avant Cursor live (Incr. D) | Sécurité | Coût | Faible |
+| **VS-BL-CAND-09** | Plafond GPT : UI « À définir » jusqu’à G-VS-LIMIT (ne pas inventer) | FinOps | Friction | Nulle |
+| **VS-BL-CAND-10** | Critères « slice prouvé » = VS-AC-01…12 + A–E sous gates + réserves documentées ; **≠** MVP | Acceptation | Claim abusif | Discipline |
+| **VS-BL-CAND-11** | Stratégie tests : Vitest/Playwright app (A) + tests harness (B–D) + preuves live sous flags | QA | Pas de CI Studio | Acceptable POC |
+| **VS-BL-CAND-12** | 33 stories / 10 epics = granularité retenue (pas fusion silencieuse) | Traçabilité | Effort doc | Faible |
+
+---
+
+## 7. Impacts / risques / dette
+
+| Thème | Impact | Risque | Dette |
+|-------|--------|--------|-------|
+| Backlog Standard | Guide delivery | Sur-spécification | Maintenir alignement 38↔32–37 |
+| Incr. A mock | Preuve UX rapide | Sous-estimer adaptateur | B obligatoire avant live |
+| Pas de CI | POC local | Régression non détectée | Futur G-VS-CI |
+| Spikes existants | Accélère C/D | Réserves spike | Documenter dans DoD |
+
+---
+
+## 8. Proposition de validation Morris
+
+Morris est invité à **valider / amender / refuser** chaque `VS-BL-CAND-*` (ou un lot), **sans** autoriser :
+
+- commit / push / PR / merge des docs 38–40 ;
+- delivery / live / archi technique / CI / MVP.
+
+Effet d’une validation backlog : autoriser un cycle suivant (versionnement docs ou delivery Incr. A sous GO distinct).
+
+---
+
+## 9. Gates suivants
+
+| Gate | Objet |
+|------|-------|
+| G-VS-BL-VAL | Validation backlog / VS-BL-CAND |
+| G-VS-BL-DOC | Commit/push/PR/merge 38–40 |
+| G-VS-DEL-A | Delivery Incrément A |
+| G-VS-LIVE-GPT | Incrément C |
+| G-VS-LIVE-CURSOR | Incrément D |
+| G-VS-LIMIT | Valeur plafond GPT |
+| G-VS-CI / MVP / IND | Interdits sans GO |
+
+---
+
+## 10. Verdict candidat
+
+`SFIA STUDIO VERTICAL SLICE BACKLOG READY — MORRIS VALIDATION REQUIRED`
+
+### Interdits
+
+BACKLOG VALIDATED · READY FOR DELIVERY · MVP DEFINED · PRODUCTION READY · API SELECTED · L5 GLOBAL PROVEN · DOCUMENTATION MERGED
+
+---
+
+## 11. Décisions Morris attendues
+
+1. Valider / amender / refuser `VS-BL-CAND-01`…`12`.
+2. Autoriser ou non le versionnement 38–40.
+3. Sélectionner le premier incrément delivery (A recommandé).
+4. **Ne pas** traiter ce pack comme GO live, delivery ou merge.


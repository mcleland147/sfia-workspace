# Review pack — SFIA Studio POC vertical slice BACKLOG PR readiness

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 23:06:52 CEST |
| **Cycle** | 13 — PR readiness (backlog 38–40) |
| **Profil** | Standard |
| **Typologie** | DOC / BACKLOG / PR READINESS |
| **GO Morris consommé** | Backlog validé · VS-BL-CAND-01…12 validées · A→E validé · Incr. A retenu · commit/push/draft PR autorisés |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
| **HEAD avant** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **HEAD après / commit** | `b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05` |
| **Message** | `docs(sfia-studio): define validated vertical slice backlog` |
| **origin/main** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **PR** | [#229](https://github.com/mcleland147/sfia-workspace/pull/229) — **OPEN** · **draft** · base `main` · head `backlog/sfia-studio-poc-vertical-slice` |
| **Verdict** | `SFIA STUDIO VERTICAL SLICE BACKLOG PR CREATED — MORRIS MERGE DECISION REQUIRED` |

---

## 1. Truth Check

OK — fetch · branche backlog · HEAD avant = origin/main = `722f586…` · branche distante absente avant push · aucune PR préalable · staged vide · 38–40 + .tmp untracked · aucun app/harness modifié.

---

## 2. Working tree initial

```
?? .tmp-sfia-review/
?? projects/sfia-studio/38-…40-….md
```

---

## 3. Sources consultées

- Template + routing guide
- Docs 32–37 (cohérence)
- Docs 38–40 (versionnement)
- Handoff `sfia/review-handoff` (correctif préalable)

---

## 4. Décisions Morris intégrées

- Backlog 38–40 validé sur le fond
- VS-BL-CAND-01…12 **validées**
- Séquencement A→E **validé**
- Incrément A **retenu** comme premier périmètre futur
- Commit / push / draft PR **autorisés**
- Merge / delivery / live **non autorisés**

---

## 5. Alignements de statut (métadonnées uniquement)

| Doc | Avant | Après |
|-----|-------|-------|
| 38 | `draft-for-morris-validation` — aucune story/incrément validés | `validated-for-versioning` — backlog validé ; merge/delivery = GO distinct |
| 39 | incréments candidats non validés | séquencement A–E validé ; Incr. A retenu ; delivery non autorisé |
| 40 | aucune VS-BL-CAND validée · « Ne jamais écrire validée » | 12 CAND **VALIDÉES** · versionnement autorisé · merge = GO distinct |

Gates 38/40 : G-VS-BL-VAL consommé · G-VS-BL-DOC partiel (merge restant).

Conservés (légitimes) : verdict GPT **candidat** (produit) · DoD delivery futur non validée · plafond **À définir**.

---

## 6. Contrôles quantitatifs

| Contrôle | Résultat |
|----------|----------|
| Stories | 33/33 uniques |
| Epics | 10 |
| Capabilities | 34 |
| VS-BL-CAND VALIDÉE | 12/12 |
| Matrice | 91 lignes |
| Séquencement A–E | validé |
| Incr. A | retenu |
| Plafond GPT | À définir |
| Delivery/live | non autorisés |
| Nouvelles routes | aucune |
| Claim MVP abusif | aucun |
| Code | aucun |
| git diff --check | OK |
| Fichiers commit/PR | **exactement 3** |

---

## 7. Commit / push

| Champ | Valeur |
|-------|--------|
| SHA | `b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05` |
| Message | docs(sfia-studio): define validated vertical slice backlog |
| Fichiers | 38 · 39 · 40 |
| .tmp | exclu |
| Push | normal `-u` · local = remote · **pas** de force push |

---

## 8. Pull Request

| Champ | Valeur |
|-------|--------|
| Numéro | **#229** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/229 |
| État | OPEN · **draft** |
| Base | main |
| Head | backlog/sfia-studio-poc-vertical-slice |
| Fichiers | 3 ADDED (38, 39, 40) |
| Mergeable | UNKNOWN (info GitHub) |

---

## 9. git status final

```
?? .tmp-sfia-review/
```

---

## 10. Réserves

- Plafond GPT numérique **À définir**
- Adaptateur Studio↔harness absent
- Gate UI actuelle ≠ 4 actions (alignement delivery)
- Incr. A retenu mais delivery = GO distinct
- Merge non autorisé

---

## 11. Gates restants

G-VS-BL-MERGE · ready-for-review · G-VS-DEL-A · G-VS-LIVE-GPT · G-VS-LIVE-CURSOR · G-VS-LIMIT · CI/MVP/IND

---

## 12. Verdict

`SFIA STUDIO VERTICAL SLICE BACKLOG PR CREATED — MORRIS MERGE DECISION REQUIRED`

Instruction ChatGPT : `sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md`

---

# ANNEXE A — Document 38 intégral (commité)

# SFIA Studio — Backlog delivery borné du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `38-poc-vertical-slice-backlog.md` |
| **Cycle** | 5 — Backlog / user stories · 13 — PR readiness |
| **Profil** | Standard |
| **Typologie** | DOC / BACKLOG / PR READINESS |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
| **Base Git** | `origin/main` @ `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Statut** | `validated-for-versioning` — backlog et stories **validés Morris** ; merge PR = GO distinct ; delivery = GO distinct |
| **Companions** | [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
| **Sources** | [`32`](./32-poc-vertical-slice-functional-design.md)–[`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
| **Code / live** | **Aucun** dans ce cycle |
| **Décisions Morris** | `VS-BL-CAND-01`…`12` validées · séquencement A→E validé · incrément A = premier périmètre futur |

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
4. valeur démontrée ;
5. sources (`VS-FR`/`VS-BR`/`VS-AC`/N/UX/CAND) exactes ;
6. état UX ou variante (ou `Aucun spécifique`) ;
7. préconditions ;
8. AC Given/When/Then testables ;
9. scénarios négatifs (ou `Aucun spécifique`) ;
10. preuves, dépendances, risque, taille, gate, hors périmètre, notes ;
11. aucune dépendance stack non tranchée (sinon hypothèse / spike candidat) ;
12. gate Morris éventuel identifié.

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

> Chaque story ci-dessous comporte les **16 champs obligatoires**.
> `—` ou `Aucun spécifique` = non applicable explicite (jamais une ligne omise).


### VS-BL-US-001 — Saisir une demande de preuve

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E1 / C1.1 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux saisir une intention Markdown sandbox (titre + synthèse), Afin de démarrer un cycle de preuve gouverné. |
| Valeur démontrée | Entrée BeB observable sans exécution implicite |
| Sources | VS-FR-01 · VS-CAND-01 · VS-UX-01 · VS-AC-01 (prérequis parcours) |
| UX / état / variante | VS-UX-01 · vue Nouvelle demande · frame `51:3` |
| Préconditions | Studio accessible ; projet connu ; aucune session live requise |
| Critères d’acceptation | **Given** vue Nouvelle demande **When** Morris saisit titre+synthèse valides et voit un requestId candidat **Then** StudioRequest affichée · aucune qualification démarrée · aucun GO implicite · aucune écriture distante |
| Scénarios négatifs | Intention vide ou incomplète → validation locale · CTA Qualifier désactivé ou bloqué · pas d’appel GPT |
| Preuves attendues | StudioRequest horodatée (TZ) · requestId visible |
| Dépendances | — |
| Risque | Faible |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Live GPT · Cursor · écriture Git distante · nouvelle route |
| Notes delivery | Réutiliser shell floating `/nouvelle-demande` ; étendre états (pas nouvelle route) |

### VS-BL-US-002 — Propager requestId / correlationId

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E1 / C1.2 · E10 / C10.1 |
| Acteur | Morris (via Studio / Harness) |
| Story | En tant que Morris, Je veux des identifiants stables visibles sur tout le parcours, Afin de reconstruire la corrélation bout-en-bout. |
| Valeur démontrée | Observabilité et auditabilité du cycle |
| Sources | VS-CAND-15 · VS-FR-01 · VS-AC-11 |
| UX / état / variante | Tous les états VS-UX-01…10 · IDs dans topbar/canvas |
| Préconditions | US-001 : demande créée avec requestId |
| Critères d’acceptation | **Given** demande créée **When** navigation entre états/vues **Then** requestId et correlationId inchangés et affichés · eventId présents dans journal dérivé |
| Scénarios négatifs | ID manquant ou réécrit → fail-closed UI (blocage progression) · message explicite |
| Preuves attendues | Journal avec eventId liés au même requestId/correlationId |
| Dépendances | VS-BL-US-001 |
| Risque | Faible |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Schéma BDD · protocole réseau inventé |
| Notes delivery | Affichage dérivé ; pas de génération d’ID concurrente côté UI |

### VS-BL-US-003 — Abandonner avant qualification

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E1 / C1.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux abandonner avant toute qualification GPT, Afin d’éviter toute consommation FinOps inutile. |
| Valeur démontrée | Sortie propre pré-qualif · FinOps zéro appel |
| Sources | Doc 33 § étape 1 (actions : abandonner) · Doc 32 § Abandon · transition `intention_capturée` → `abandonné` · VS-UX-01 · VS-FR-16 (visibilité conso = 0) · VS-BR-03 (pas de retry silencieux) |
| UX / état / variante | VS-UX-01 · vue Nouvelle demande |
| Préconditions | Intention capturée ou en saisie · qualification non démarrée |
| Critères d’acceptation | **Given** intention capturée sans qualif démarrée **When** Morris choisit Abandonner (avec confirmation si destructif) **Then** état `abandonné` · **0** appel GPT · compteur FinOps inchangé à 0 · aucune écriture distante |
| Scénarios négatifs | Abandon pendant qualif déjà démarrée → hors cette story (voir STOP / gate) · double-clic → un seul abandon journalisé |
| Preuves attendues | Événement abandon journalisé · FinOps qualif = 0 |
| Dépendances | VS-BL-US-001 |
| Risque | Faible |
| Taille relative | XS |
| Gate Morris éventuel | — |
| Hors périmètre | N16 (perte session) · Abandonner au gate (US-011) · STOP exécution (US-019) |
| Notes delivery | Ne pas mapper N16 ici — N16 = reprise session (US-016) |

### VS-BL-US-004 — Déclencher qualification GPT

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E2 / C2.1 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux déclencher explicitement « Qualifier la demande », Afin de lancer une qualification contrôlée. |
| Valeur démontrée | Contrôle humain du démarrage GPT |
| Sources | VS-FR-02 · VS-FR-03 · VS-UX-01→02 · VS-BR-03 · N2 |
| UX / état / variante | Transition VS-UX-01 → VS-UX-02 · frame `51:139` |
| Préconditions | Demande valide (US-001) · sources Git lisibles ou mode fixture déclaré |
| Critères d’acceptation | **Given** demande valide **When** CTA Qualifier **Then** état `qualification_en_cours` · compteur FinOps qualif +1 (ou +1 à la consommation réelle selon mode) · aucun GO · aucun spawn Cursor |
| Scénarios négatifs | **N2** Sources Git indisponibles → STOP lecture · pas de qualif live · message Truth Check · pas de fallback permissif |
| Preuves attendues | Event qualification_started · FinOps visible |
| Dépendances | VS-BL-US-001 · VS-BL-US-002 |
| Risque | Moyen (live) |
| Taille relative | M |
| Gate Morris éventuel | Avant live GPT : G-VS-LIVE-GPT (futur) |
| Hors périmètre | Retry automatique · inventaire coût € |
| Notes delivery | Fixture d’abord (Incr. B) puis live (Incr. C) sous flags |

### VS-BL-US-005 — Loading qualification + no retry

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E2 / C2.2 · C2.4 |
| Acteur | Morris / Système |
| Story | En tant que Morris, Je veux voir la phase active et le plafond « À définir », sans retry automatique, Afin de contrôler la consommation. |
| Valeur démontrée | Transparence FinOps + anti-retry |
| Sources | VS-FR-16 · VS-BR-03 · VS-CAND-14 · VS-UX-FR-07 · VS-UX-VAR Loading `52:2` |
| UX / état / variante | VS-UX-02 · variante Loading `52:2` |
| Préconditions | Qualification démarrée (US-004) |
| Critères d’acceptation | **Given** qualif en cours **When** UI affiche l’état **Then** phase active lisible · compteur `n / À définir` · mention « Aucun retry automatique » · pas de barre de progression inventée comme succès |
| Scénarios négatifs | Timeout qualif → état d’échec/stop explicite · **pas** de GO · **pas** de retry auto |
| Preuves attendues | Screenshot / trace UI Loading + FinOps |
| Dépendances | VS-BL-US-004 |
| Risque | Faible |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Valeur numérique du plafond (G-VS-LIMIT) |
| Notes delivery | Plafond affiché « À définir » jusqu’à arbitrage |

### VS-BL-US-006 — Rejet fail-closed QualificationCandidate

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E2 / C2.2 |
| Acteur | Harness (autorité) / Studio (affichage) |
| Story | En tant que Morris, Je veux qu’une sortie GPT invalide soit rejetée fail-closed, Afin d’éviter un GO aveugle. |
| Valeur démontrée | Garde-fou intégrité qualification |
| Sources | VS-FR-02 · VS-BR-01 · VS-BR-02 · N1 · VS-UX-FR-13 · VS-UX-VAR Erreur `52:10` |
| UX / état / variante | VS-UX-02 · variante Erreur `52:10` |
| Préconditions | Sortie GPT reçue (fixture ou live) |
| Critères d’acceptation | **Given** sortie hors contrat **When** validateur refuse **Then** message erreur fail-closed · pas d’état `qualification_prête` · CTA correction/abandon · aucun GO |
| Scénarios négatifs | **N1** Qualif invalide → rejet · pas d’exécution · correction ou abandon uniquement |
| Preuves attendues | Event validation_rejected · pas de QualificationCandidate acceptée |
| Dépendances | VS-BL-US-004 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Fallback permissif · auto-correction GPT |
| Notes delivery | Harness valide ; Studio affiche dérivé |

### VS-BL-US-007 — Afficher qualification complète avant gate

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E2 / C2.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux lire cycle, profil, allowlist, stops, hash, Afin de contrôler avant tout GO. |
| Valeur démontrée | Contrôle humain pré-GO (VS-CAND-03) |
| Sources | VS-FR-03 · VS-CAND-03 · VS-UX-03 · VS-UX-FR-04 (préparation gate) |
| UX / état / variante | VS-UX-03 · frame `51:277` · vue Nouvelle demande |
| Préconditions | QualificationCandidate validée |
| Critères d’acceptation | **Given** qualif valide **When** affichage **Then** champs obligatoires doc 33 §3 visibles · source étiquetée GPT · **pas** d’auto-GO · CTA Continuer vers gate / Correction / Abandonner |
| Scénarios négatifs | Champ obligatoire manquant → pas de passage gate · message explicite |
| Preuves attendues | Screenshot VS-UX-03 · QualificationCandidate complète |
| Dépendances | VS-BL-US-006 (chemin OK) |
| Risque | Faible |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Modification silencieuse du candidat |
| Notes delivery | Mock possible Incr. A |

### VS-BL-US-008 — Demander correction qualification

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E2 / C2.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux demander une correction, Afin de relancer une nouvelle qualification contrôlée. |
| Valeur démontrée | Boucle de correction gouvernée |
| Sources | VS-FR-04 (action correction) · VS-BR-02 · VS-BR-03 · Doc 33 transitions qualif |
| UX / état / variante | VS-UX-03 → VS-UX-02 |
| Préconditions | Qualification proposée visible |
| Critères d’acceptation | **Given** qualif proposée **When** Demander une correction **Then** retour `qualification_en_cours` · nouvelle consommation FinOps visible · pas de fallback permissif · pas de retry auto silencieux |
| Scénarios négatifs | Correction sans confirmation FinOps → bloquée ou confirmée explicitement |
| Preuves attendues | Event correction_requested · FinOps +1 (nouvelle conso) |
| Dépendances | VS-BL-US-007 |
| Risque | Moyen (FinOps) |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Correction automatique par GPT |
| Notes delivery | Chaque relance = consommation distincte |

### VS-BL-US-009 — Générer ExecutionContract + hash

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E3 / C3.1 |
| Acteur | Harness |
| Story | En tant que Morris, Je veux un contrat borné hashé, Afin d’ancrer le futur GO. |
| Valeur démontrée | Ancrage déterministe du périmètre |
| Sources | VS-FR-05 · VS-BR-05 · VS-CAND-04 · VS-CAND-06 |
| UX / état / variante | VS-UX-03/04 (affichage dérivé contractId/hash) |
| Préconditions | Qualification acceptée pour passage gate |
| Critères d’acceptation | **Given** qualif acceptée pour gate **When** contrat produit **Then** contractId + contractHash + allowlist + gitEffect=none-remote présents et stables |
| Scénarios négatifs | Contrat incomplet → pas de gate GO possible · fail-closed |
| Preuves attendues | ExecutionContract + hash dans preuves/journal |
| Dépendances | VS-BL-US-007 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Protocole API inventé · ORM |
| Notes delivery | Réutiliser canonicalize/hash harness existants (lecture seule observée) |

### VS-BL-US-010 — Dossier de décision Gate Morris

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E3 / C3.2 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux un dossier ancré (IDs, HEAD, branche, allowlist, horodatage), Afin de décider en connaissance de cause. |
| Valeur démontrée | Décision gate informée |
| Sources | VS-FR-05 · VS-UX-04 · VS-UX-FR-04 · VS-BR-05 · VS-BR-11 |
| UX / état / variante | VS-UX-04 · frame `51:415` · vue Décision / Gate |
| Préconditions | Contrat hashé disponible (US-009) |
| Critères d’acceptation | **Given** attente gate **When** affichage dossier **Then** requestId, contractId, contractHash, branche, HEAD, allowlist, horodatage TZ, autorité · mention timeout ≠ GO visible |
| Scénarios négatifs | Ancrage incomplet → CTA GO désactivé · message explicite |
| Preuves attendues | Screenshot dossier gate · champs d’ancrage |
| Dépendances | VS-BL-US-009 |
| Risque | Faible |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | GO sans ancrage · auto-GO |
| Notes delivery | Mock Incr. A ; réel Incr. B |

### VS-BL-US-011 — Quatre actions gate (GO / NO-GO / Corriger / Abandonner)

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E3 / C3.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux quatre actions explicites au gate, Afin de ne pas confondre NO-GO, STOP et Abandonner. |
| Valeur démontrée | Autorité Morris L0 au gate · distinction sémantique |
| Sources | VS-FR-04 · VS-UX-FR-15 · VS-UX-FR-16 · VS-UX-04 · Doc 36 §8 (Abandonner ≠ NO-GO ≠ STOP) · VS-CAND-04 (ancrage GO) · VS-BR-04 |
| UX / état / variante | VS-UX-04 · quatre CTA · confirmation Abandonner |
| Préconditions | Dossier gate complet (US-010) |
| Critères d’acceptation | **Given** gate affiché **When** Morris choisit une action **Then** GO / NO-GO / Demander une correction / Abandonner sont distincts · Abandonner = destructif + confirmation + conséquence `abandonné` · aucune action Git distante · GO n’autorise spawn qu’après revalidation ultérieure |
| Scénarios négatifs | Confusion Abandon/NO-GO/STOP → copy UI + a11y (noms accessibles) · GO sans ancrage → impossible |
| Preuves attendues | MorrisGateDecision journalisée · UI 4 actions |
| Dépendances | VS-BL-US-010 |
| Risque | Moyen (UI actuelle ≠ 4 actions) |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | VS-FR-15 (secrets) · VS-FR-16 (FinOps) — **non applicables** comme sources des 4 actions · STOP exécution (US-019) |
| Notes delivery | Ne pas confondre VS-UX-FR-15/16 avec VS-FR-15/16 |

### VS-BL-US-012 — Invalidation GO (HEAD/hash/branche/allowlist)

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E3 / C3.4 |
| Acteur | Harness / Studio (affichage) |
| Story | En tant que Morris, Je veux qu’un GO stale soit invalide, Afin d’empêcher un spawn dangereux. |
| Valeur démontrée | Sécurité d’ancrage |
| Sources | VS-FR-06 · VS-BR-06 · VS-AC-02 · VS-AC-03 · N3 · N5 · N6 · VS-UX-FR-05 · VS-UX-VAR GO invalide `52:26` |
| UX / état / variante | VS-UX-04/05 · variante GO invalide `52:26` |
| Préconditions | GO ancré existant |
| Critères d’acceptation | **Given** GO ancré **When** HEAD, contractHash, branche ou allowlist diverge **Then** bandeau GO invalide · harness refuse spawn · nouveau gate requis |
| Scénarios négatifs | **N3** HEAD modifié · **N5** GO invalide/expiré · **N6** contrat modifié → refus + message |
| Preuves attendues | Event go_invalidated · refus spawn journalisé |
| Dépendances | VS-BL-US-011 (GO) · VS-BL-US-017 |
| Risque | Élevé (runtime) |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Réparation automatique du GO |
| Notes delivery | Variante UX obligatoire Incr. A mock + B/D réel |

### VS-BL-US-013 — Adaptateur fin sans autorité

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E4 / C4.1 |
| Acteur | Adaptateur (Studio→Harness) |
| Story | En tant que Morris, Je veux que Studio transmette sans élargir ni décider, Afin de préserver Option B. |
| Valeur démontrée | Garde-fou architecture Option B |
| Sources | VS-FR-13 · VS-BR-12 · VS-CAND-05 |
| UX / état / variante | Transverse (pas de 5e route) |
| Préconditions | Actions Studio à transmettre ; harness joignable (fixture ou réel) |
| Critères d’acceptation | **Given** action Studio **When** envoi via adaptateur **Then** aucune décision inventée · pas de seconde vérité · pas d’assouplissement policy · harness reste autorité d’application des gates |
| Scénarios négatifs | Tentative d’élargissement périmètre côté Studio → refus / non transmission |
| Preuves attendues | Trace transmission · comparaison payload vs preuves harness |
| Dépendances | VS-BL-US-009 · VS-BL-US-011 |
| Risque | Élevé (absent aujourd’hui) |
| Taille relative | L |
| Gate Morris éventuel | — |
| Hors périmètre | Spécification API/protocole figée · choix stack |
| Notes delivery | Spike candidat interface en cycle archi ultérieur — pas ici |

### VS-BL-US-014 — Afficher états dérivés depuis preuves/journal

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E4 / C4.2 |
| Acteur | Studio |
| Story | En tant que Morris, Je veux des états dérivés des preuves/journal, Afin que Git/preuves priment. |
| Valeur démontrée | Studio = cockpit dérivé (pas vérité) |
| Sources | VS-FR-13 · VS-AC-11 · VS-BR-12 · VS-UX-FR-12 |
| UX / état / variante | Tous états · source de statut visible |
| Préconditions | Événements/preuves harness disponibles |
| Critères d’acceptation | **Given** événements harness **When** UI rafraîchit **Then** statut source explicite (Git / harness / dérivé) · pas d’état inventé · cohérence VS-AC-11 |
| Scénarios négatifs | Preuves absentes → message incomplet · pas de faux succès |
| Preuves attendues | UI source statut · cohérence avec journal |
| Dépendances | VS-BL-US-013 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Cache UI faisant autorité |
| Notes delivery | Incr. B |

### VS-BL-US-015 — Harness autonome sans Studio

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E4 / C4.3 |
| Acteur | Morris / Harness |
| Story | En tant que Morris, Je veux exécuter le scénario via harness seul, Afin de ne pas dépendre de l’UI. |
| Valeur démontrée | Résilience + non-régression hors UI |
| Sources | VS-FR-14 · VS-BR-13 · VS-AC-12 · VS-CAND-10 |
| UX / état / variante | — (CLI / hors Studio) · Aucun spécifique UI |
| Préconditions | Contrat + GO (fixture ou réel selon incrément) |
| Critères d’acceptation | **Given** contrat+GO **When** harness exécute en mode autonome **Then** preuve BeB produite sans Studio · mêmes garde-fous gates |
| Scénarios négatifs | GO absent → refus spawn (N4) même sans Studio |
| Preuves attendues | Journal/preuves harness · VS-AC-12 |
| Dépendances | VS-BL-US-009 · capitalisation spikes `29`–`31` |
| Risque | Faible (déjà partiel) |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Remplacer Studio · supprimer Option B cockpit |
| Notes delivery | Chemin de contrôle parallèle obligatoire |

### VS-BL-US-016 — Reprise après perte de session Studio

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E4 / C4.4 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux reprendre après perte de session sans inventer d’état, Afin d’éviter un faux succès. |
| Valeur démontrée | Reprise sûre · anti faux succès |
| Sources | **N16** · VS-AC-11 · VS-FR-13 · VS-BR-12 · Doc 33 N16 |
| UX / état / variante | Reprise sur vues P0 selon état dérivé |
| Préconditions | Cycle existant avec preuves/Git ; session Studio perdue |
| Critères d’acceptation | **Given** session Studio perdue **When** rechargement **Then** états rechargés **uniquement** depuis preuves/Git · message si incomplet · **aucun** état inventé · pas de GO implicite |
| Scénarios négatifs | **N16** Preuves incomplètes → reprise partielle explicite · blocage actions dangereuses |
| Preuves attendues | Scénario reprise · source statut post-reload |
| Dépendances | VS-BL-US-014 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Persistance locale faisant autorité · inventaire session storage comme vérité |
| Notes delivery | N16 couvert ici — **pas** dans US-003 |

### VS-BL-US-017 — Revalidation GO avant Cursor

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E5 / C5.1 |
| Acteur | Harness |
| Story | En tant que Morris, Je veux une revalidation déterministe avant spawn, Afin d’appliquer le gate. |
| Valeur démontrée | Autorité harness sur le spawn |
| Sources | VS-FR-07 · VS-BR-07 · VS-AC-02 · VS-AC-03 · N4 · N5 |
| UX / état / variante | VS-UX-05 (état dérivé refus/OK) |
| Préconditions | Demande de spawn ; GO éventuellement présent |
| Critères d’acceptation | **Given** spawn demandé **When** harness revalide **Then** hash/HEAD/branche/allowlist OK sinon refus · aucun spawn si N4/N5 |
| Scénarios négatifs | **N4** GO absent → refus · **N5** GO invalide → refus · journal |
| Preuves attendues | Event revalidation_ok/refused |
| Dépendances | VS-BL-US-011 · VS-BL-US-012 |
| Risque | Élevé |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Revalidation côté Studio comme autorité |
| Notes delivery | Incr. B fixture · Incr. D live |

### VS-BL-US-018 — Exécution Cursor sandbox Markdown

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E5 / C5.2 · C5.4 |
| Acteur | Cursor / Harness |
| Story | En tant que Morris, Je veux que Cursor crée le Markdown autorisé uniquement, Afin de prouver le BeB sandbox. |
| Valeur démontrée | Preuve BeB Markdown bornée |
| Sources | VS-FR-08 · VS-FR-09 · VS-BR-08 · VS-BR-09 · VS-AC-04 · VS-AC-09 · VS-CAND-01 · VS-CAND-06 · VS-CAND-07 · VS-UX-05 · N7 · N8 · N9 · N10 |
| UX / état / variante | VS-UX-05 · frame `51:540` · Cycle actif |
| Préconditions | GO revalidé (US-017) · allowlist connue |
| Critères d’acceptation | **Given** GO revalidé **When** exécution **Then** fichier sandbox allowlist · remote writes=0 · journal dérivé · pas de commandes inventées en UI comme réussies |
| Scénarios négatifs | **N7** hors allowlist STOP/refus · **N8** action interdite STOP · **N9** Cursor indisponible échec explicite · **N10** exit≠0 rapport échec |
| Preuves attendues | Fichier sandbox · CursorExecutionReport · remote=0 |
| Dépendances | VS-BL-US-017 · VS-BL-US-013 (si via Studio) |
| Risque | Élevé |
| Taille relative | L |
| Gate Morris éventuel | G-VS-LIVE-CURSOR |
| Hors périmètre | Écriture remote · multi-fichier hors allowlist · claim prod |
| Notes delivery | Capitaliser spike e2e sandbox ; fixture avant live |

### VS-BL-US-019 — STOP prioritaire pendant exécution

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E5 / C5.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux un STOP immédiat prioritaire, Afin d’interrompre toute activité en cours. |
| Valeur démontrée | Sécurité opérateur |
| Sources | VS-FR-10 · VS-BR-10 · VS-AC-05 · VS-CAND-09 · N12 · VS-UX-FR-06 · VS-UX-VAR STOP `52:18` |
| UX / état / variante | VS-UX-02/05/07 · variante STOP `52:18` |
| Préconditions | Phase active (qualif, exécution ou analyse) |
| Critères d’acceptation | **Given** phase active **When** STOP **Then** état `stoppé` · event journalisé · STOP ≠ Abandonner ≠ NO-GO · reprise éventuelle sous **nouveau GO** si re-exec |
| Scénarios négatifs | **N12** STOP → immédiat · pas de continuation silencieuse |
| Preuves attendues | Event stop · UI variante STOP |
| Dépendances | VS-BL-US-004 / 018 / 023 selon phase |
| Risque | Moyen |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Auto-reprise sans GO |
| Notes delivery | Accessible clavier (VS-UX-FR-06) |

### VS-BL-US-020 — Timeout ≠ GO

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E5 / C5.3 |
| Acteur | Système / Harness |
| Story | En tant que Morris, Je veux qu’un timeout stoppe sans autoriser, Afin d’éviter un GO implicite. |
| Valeur démontrée | Anti-autorisation implicite |
| Sources | VS-BR-11 · VS-CAND-09 · N11 |
| UX / état / variante | VS-UX-05 · message timeout |
| Préconditions | Exécution en cours avec timer |
| Critères d’acceptation | **Given** exécution **When** timeout **Then** `stoppé` · message « timeout ≠ GO » · pas de spawn ultérieur sans nouveau GO |
| Scénarios négatifs | **N11** timeout → stoppé · pas de succès implicite |
| Preuves attendues | Event timeout · absence de GO dérivé |
| Dépendances | VS-BL-US-018 |
| Risque | Moyen |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Allongement silencieux du timeout comme succès |
| Notes delivery | Valeur numérique timeout = hypothèse delivery / spike — non figée ici |

### VS-BL-US-021 — Rapport et fichiers touchés

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E6 / C6.1 · C6.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux le rapport Cursor/harness et l’aperçu sanitisé, Afin de contrôler le résultat. |
| Valeur démontrée | Contrôle post-exécution |
| Sources | VS-FR-11 · VS-UX-06 · VS-AC-09 · N13 |
| UX / état / variante | VS-UX-06 · frame `51:678` |
| Préconditions | Fin d’exécution (succès ou échec rapporté) |
| Critères d’acceptation | **Given** fin exécution **When** rapport disponible **Then** statut · fichiers touchés · remote=0 · réserves · CTA analyse conditionné |
| Scénarios négatifs | **N13** Rapport absent → bloque analyse · message |
| Preuves attendues | CursorExecutionReport · aperçu sanitisé |
| Dépendances | VS-BL-US-018 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Affichage de secrets dans l’aperçu |
| Notes delivery | Sanitisation obligatoire (lien US-028) |

### VS-BL-US-022 — Review pack prérequis analyse / clôture

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E6 / C6.2 · C6.4 |
| Acteur | Système / Morris |
| Story | En tant que Morris, Je veux bloquer si pack incomplet, Afin d’éviter une clôture positive fallacieuse. |
| Valeur démontrée | Garde-fou clôture positive |
| Sources | VS-FR-17 · VS-BR-15 · VS-AC-06 · N14 |
| UX / état / variante | VS-UX-06/08/10 (blocage CTA) |
| Préconditions | Tentative d’analyse ou clôture positive |
| Critères d’acceptation | **Given** pack incomplet **When** analyse ou clôture positive demandée **Then** refus explicite · pas de verdict positif · pas de CycleSummary « succès » |
| Scénarios négatifs | **N14** pack incomplet → bloque clôture positive |
| Preuves attendues | Event pack_incomplete_blocked |
| Dépendances | VS-BL-US-021 |
| Risque | Moyen |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Clôture positive forcée |
| Notes delivery | Incr. B fixture · E réel |

### VS-BL-US-023 — Analyse GPT verdict candidat

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E7 / C7.1 · C7.2 · C7.4 |
| Acteur | Morris / GPT |
| Story | En tant que Morris, Je veux une analyse GPT manuelle du paquet de preuves, Afin d’obtenir un verdict **candidat**. |
| Valeur démontrée | Aide à la décision sans autorité GPT |
| Sources | VS-FR-12 · VS-BR-14 · VS-CAND-08 · VS-UX-07/08 · VS-FR-16 · VS-BR-03 · N15 · VS-AC-06 · VS-AC-07 |
| UX / état / variante | VS-UX-07 → VS-UX-08 · frames `51:816` / `51:954` |
| Préconditions | Rapport + pack OK (US-021/022) |
| Critères d’acceptation | **Given** rapport+pack OK **When** Lancer analyse **Then** appel GPT distinct de la qualif · compteur analyse · plafond « À définir » · no retry · verdict étiqueté **candidat** · pas de clôture auto |
| Scénarios négatifs | **N15** Verdict invalide → rejet fail-closed · FinOps visible · correction/abandon |
| Preuves attendues | GptVerdictCandidate · events FinOps analyse |
| Dépendances | VS-BL-US-022 |
| Risque | Élevé (live) |
| Taille relative | L |
| Gate Morris éventuel | G-VS-LIVE-GPT (analyse) |
| Hors périmètre | Clôture automatique · retry auto |
| Notes delivery | Incr. E ; fixture possible avant live |

### VS-BL-US-024 — Afficher prouvé / non prouvé / écarts

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E7 / C7.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux voir prouvé/non prouvé/écarts/risques/réserves, Afin de décider en conscience. |
| Valeur démontrée | Lisibilité du verdict candidat |
| Sources | VS-FR-12 · VS-UX-08 · VS-UX-FR-08 · VS-BR-14 |
| UX / état / variante | VS-UX-08 |
| Préconditions | Verdict candidat valide |
| Critères d’acceptation | **Given** verdict valide **When** affichage **Then** sections prouvé / non prouvé / écarts / risques / réserves / décisions Morris requises · étiquette candidat · pas de bouton clôture auto |
| Scénarios négatifs | Section obligatoire manquante → pas de passage décision finale |
| Preuves attendues | Screenshot VS-UX-08 |
| Dépendances | VS-BL-US-023 |
| Risque | Faible |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Reformulation comme décision Morris |
| Notes delivery | — |

### VS-BL-US-025 — Décision finale Morris

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E8 / C8.1 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux clôturer, corriger, relancer (nouveau GO) ou abandonner, Afin de conclure le cycle. |
| Valeur démontrée | Autorité de clôture humaine |
| Sources | VS-FR-12 · VS-AC-07 · VS-AC-08 · VS-UX-09 · VS-UX-FR-09 · VS-BR-04 · VS-BR-17 |
| UX / état / variante | VS-UX-09 · frame `51:1079` |
| Préconditions | Verdict candidat affiché (ou chemin NO-GO/abandon documenté) |
| Critères d’acceptation | **Given** verdict candidat **When** décision Morris **Then** MorrisFinalDecision enregistrée · conséquences explicites · pas d’actions Git groupées · pas de claim MVP/prod |
| Scénarios négatifs | Verdict invalide → pas de clôture auto (VS-AC-07) |
| Preuves attendues | MorrisFinalDecision journalisée |
| Dépendances | VS-BL-US-024 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Merge auto · L5 · multi-projet |
| Notes delivery | 4 actions finales distinctes du gate d’exécution |

### VS-BL-US-026 — Clôture slice-only

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E8 / C8.2 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux une synthèse du slice courant uniquement, Afin d’éviter un faux portefeuille multi-projet. |
| Valeur démontrée | Clôture honnête bornée |
| Sources | VS-UX-10 · VS-UX-FR-17 · VS-BR-17 · VS-CAND-11 |
| UX / état / variante | VS-UX-10 · frame `51:1204` · vue synthèse |
| Préconditions | Décision finale de clôture |
| Critères d’acceptation | **Given** clôture **When** affichage CycleSummary **Then** requestId, décision, MD, preuves, FinOps, traçabilité du **slice courant** · **aucun** portfolio multi-projet · aucun claim MVP/production-ready |
| Scénarios négatifs | Tentative d’afficher autres projets → hors périmètre · non rendu |
| Preuves attendues | CycleSummary slice-only |
| Dépendances | VS-BL-US-025 |
| Risque | Faible |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Portfolio · Studio complete · industrialisation |
| Notes delivery | Correctif UX validé — ne pas rouvrir |

### VS-BL-US-027 — Relance sous nouveau GO

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E8 / C8.3 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux relancer après STOP/échec uniquement avec nouveau GO, Afin de respecter les gates. |
| Valeur démontrée | Ré-exécution gouvernée |
| Sources | Doc 33 matrice GO / transitions `stoppé` · N11 · N12 · VS-BR-07 · VS-CAND-09 |
| UX / état / variante | VS-UX-09 (Relancer) → retour gate |
| Préconditions | État `stoppé` ou correction exigeant re-exec |
| Critères d’acceptation | **Given** stoppé ou correction avec re-exec **When** Relancer **Then** nouveau contrat et/ou nouveau GO exigés · pas de réutilisation GO stale |
| Scénarios négatifs | Relance sans nouveau GO → refus |
| Preuves attendues | Event relaunch_requires_new_go |
| Dépendances | VS-BL-US-019 · VS-BL-US-020 · VS-BL-US-025 |
| Risque | Moyen |
| Taille relative | S |
| Gate Morris éventuel | Nouveau GO (humain) |
| Hors périmètre | Réutilisation GO après timeout/STOP |
| Notes delivery | — |

### VS-BL-US-028 — Interdiction secrets & PII

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E9 / C9.1 · C9.2 |
| Acteur | Système / Morris |
| Story | En tant que Morris, Je veux zéro secret et zéro PII réelle dans UI/logs/preuves, Afin de respecter le RGPD minimal. |
| Valeur démontrée | Sécurité / conformité minimale |
| Sources | VS-FR-15 · VS-BR-16 · VS-CAND-13 · VS-AC-10 · VS-UX-FR-10 |
| UX / état / variante | Transverse · tous écrans/preuves |
| Préconditions | Toute surface UI ou preuve du slice |
| Critères d’acceptation | **Given** n’importe quel écran/preuve **When** inspection **Then** pas de token/clé/secret · demande de test sans PII réelle · masquage si donnée sensible mock |
| Scénarios négatifs | Fuite détectée → STOP livraison surface · correction obligatoire |
| Preuves attendues | Checklist audit secrets · revue preuves |
| Dépendances | Toutes stories UI/preuves |
| Risque | Élevé (si oubli) |
| Taille relative | S |
| Gate Morris éventuel | — |
| Hors périmètre | Stockage secrets en clair « pour debug » |
| Notes delivery | Transverse Incr. A+ |

### VS-BL-US-029 — Observabilité IDs + fuseau + source statut

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E10 / C10.1 · C10.2 · C10.3 · C10.4 |
| Acteur | Système |
| Story | En tant que Morris, Je veux requestId/correlationId/contractId/eventId, timestamps avec fuseau et source de statut, Afin de reconstruire sans faux succès. |
| Valeur démontrée | RUN readiness minimale POC |
| Sources | VS-CAND-15 · Doc 32 § observabilité · VS-UX-FR-12 · VS-AC-11 |
| UX / état / variante | Transverse |
| Préconditions | Événements produits |
| Critères d’acceptation | **Given** événement **When** journal/UI **Then** IDs présents · timestamps avec TZ · source statut · durées séparées (qualif ≠ exec ≠ analyse) · aucun faux succès |
| Scénarios négatifs | Event sans ID → non accepté comme preuve de progression |
| Preuves attendues | Journal corrélé · export preuves |
| Dépendances | VS-BL-US-002 |
| Risque | Moyen |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Stack observabilité industrielle (Datadog, etc.) |
| Notes delivery | POC local — pas d’industrialisation |

### VS-BL-US-030 — FinOps plafond À définir (qualif + analyse)

| Champ | Contenu |
|-------|---------|
| Epic / Capability | E2 / E7 · C2.4 · C7.4 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux voir les appels séparés et pouvoir arrêter avant une nouvelle consommation, Afin de maîtriser FinOps. |
| Valeur démontrée | Contrôle consommation GPT |
| Sources | VS-FR-16 · VS-CAND-14 · VS-BR-03 · VS-UX-FR-07 |
| UX / état / variante | VS-UX-02 / VS-UX-07 · compteurs séparés |
| Préconditions | Au moins un appel GPT (fixture ou live) |
| Critères d’acceptation | **Given** appels GPT **When** UI **Then** compteurs qualif ≠ analyse · plafond affiché « À définir » · possibilité d’arrêter avant nouvel appel · pas de € inventé · pas de retry auto |
| Scénarios négatifs | Dépassement si plafond numérique futur → refus nouvel appel (après G-VS-LIMIT) |
| Preuves attendues | UI FinOps · events compteurs |
| Dépendances | VS-BL-US-004 · VS-BL-US-023 |
| Risque | Moyen (valeur absente) |
| Taille relative | S |
| Gate Morris éventuel | G-VS-LIMIT (valeur numérique) |
| Hors périmètre | Inventer un plafond numérique |
| Notes delivery | Réserve VS-CAND-14 conservée |

### VS-BL-US-031 — Mapping dix états / quatre vues (cockpit)

| Champ | Contenu |
|-------|---------|
| Epic / Capability | Transverse UX E1–E8 |
| Acteur | Morris |
| Story | En tant que Morris, Je veux naviguer les dix états dans les quatre vues P0, Afin de ne pas créer dix routes. |
| Valeur démontrée | Preuve UX structurelle du slice |
| Sources | VS-CAND-02 · VS-UX-01…10 · VS-UX-FR-01 · VS-UX-FR-02 · VS-AC-01 |
| UX / état / variante | Quatre vues P0 · dix états |
| Préconditions | Incrément A (mock) ou ultérieur |
| Critères d’acceptation | **Given** Incrément A **When** parcours mock des 10 états **Then** chaque état accessible via vue mappée · **aucune** 5e route VS · shell P0 conservé |
| Scénarios négatifs | Ajout route dédiée par état → STOP documentaire / arbitrage Morris |
| Preuves attendues | Screenshots 10 états / 4 vues · éventuellement Playwright |
| Dépendances | — |
| Risque | Moyen (dérive routes) |
| Taille relative | L |
| Gate Morris éventuel | — |
| Hors périmètre | Nouvelles routes · redesign shell |
| Notes delivery | Prioritaire Incr. A |

### VS-BL-US-032 — Variantes Loading / Erreur / STOP / GO invalide

| Champ | Contenu |
|-------|---------|
| Epic / Capability | Transverse UX |
| Acteur | Morris |
| Story | En tant que Morris, Je veux les variantes d’état non nominales, Afin de gérer Loading, Erreur, STOP et GO invalide. |
| Valeur démontrée | Couverture UX non nominale |
| Sources | VS-UX-VAR Loading `52:2` · Erreur `52:10` · STOP `52:18` · GO invalide `52:26` · N1 · N3 · N5 · N12 · VS-UX-FR-05/06/13 |
| UX / état / variante | Variantes (pas des routes) |
| Préconditions | Conditions variantes (mock ou réel) |
| Critères d’acceptation | **Given** conditions variantes **When** affichage **Then** Loading / Erreur fail-closed / STOP / GO invalide distincts, accessibles, non fusionnés avec Abandonner/NO-GO |
| Scénarios négatifs | Fusion Abandonner↔STOP↔GO invalide → non conforme · correction UI |
| Preuves attendues | Screenshots 4 variantes |
| Dépendances | VS-BL-US-005 · 006 · 012 · 019 · 031 |
| Risque | Faible |
| Taille relative | M |
| Gate Morris éventuel | — |
| Hors périmètre | Nouvelles variantes non arbitrées |
| Notes delivery | Incr. A mock obligatoire |

### VS-BL-US-033 — Scénarios négatifs N1–N16 (couverture transverse QA)

| Champ | Contenu |
|-------|---------|
| Epic / Capability | Transverse QA |
| Acteur | Morris / Système |
| Story | En tant que Morris, Je veux que chaque N1–N16 soit testable via une story dédiée ou cette couverture QA, Afin d’éviter les trous. |
| Valeur démontrée | Complétude QA fail-closed |
| Sources | N1–N16 · Doc 33 §7 · matrice §9 |
| UX / état / variante | Selon N (variantes / états concernés) |
| Préconditions | Stories couvrantes primaires disponibles selon incrément |
| Critères d’acceptation | **Given** matrice §9 **When** revue QA **Then** chaque N a story primaire + AC/négatif ou statut différé justifié · aucun N ignoré · fail-closed vérifié · preuve identifiée |
| Scénarios négatifs | N sans couverture ni justification → STOP documentaire |
| Preuves attendues | Matrice §9 + cas de test par N |
| Dépendances | Stories 004–023, 016, etc. |
| Risque | Moyen (dette si différé) |
| Taille relative | L |
| Gate Morris éventuel | — |
| Hors périmètre | Inventer de nouveaux N hors doc 33 |
| Notes delivery | Story transverse de traçabilité — ne remplace pas les AC des stories primaires |

---

## 8. Corrections de traçabilité (ce correctif)

| Story | Avant (erreur) | Après (corrigé) |
|-------|----------------|-----------------|
| **VS-BL-US-003** | Sources `N16 partiel` (faux : N16 = perte session) | Étape 1 / abandon pré-qualif · FinOps 0 · VS-UX-01 · VS-FR-16 (conso=0) · VS-BR-03 · **sans N16** |
| **VS-BL-US-011** | Sources `VS-FR-15/16 (UX)` (faux : FR-15=secrets, FR-16=FinOps) | **VS-FR-04** · **VS-UX-FR-15** · **VS-UX-FR-16** · VS-UX-04 · Doc 36 §8 · VS-CAND-04 · VS-BR-04 |
| **VS-BL-US-016** | Couverture N16 OK mais à renforcer | N16 explicitement primaire ici |
| **32 stories** | Champs manquants (Valeur, Préconditions, Négatifs, Preuves, Déps, Risque, Gate, Hors, Notes) | **16 champs** présents partout |

---

## 9. Matrice de couverture (recalculée)

| Famille | ID source | Description courte | Story couvrante | Incrément | Preuve attendue | Statut | Réserve / justification |
|---------|-----------|--------------------|-----------------|-----------|-----------------|--------|-------------------------|

| VS-FR | VS-FR-01 | Saisie demande + requestId | 001,002 | A | UI requestId | couvert | — |
| VS-FR | VS-FR-02 | Qualif invalide fail-closed | 006,033 | B/C | validateur + N1 | couvert | — |
| VS-FR | VS-FR-03 | Qualif lisible avant GO | 007 | A/B | UI VS-UX-03 | couvert | — |
| VS-FR | VS-FR-04 | GO/NO-GO/correction/abandon | 011,003,008,025 | A/B | UI 4 actions + abandons | couvert | 003=abandon pré-qualif ; 011=gate |
| VS-FR | VS-FR-05 | GO ancré IDs/hash/HEAD… | 009,010 | A/B | dossier gate | couvert | — |
| VS-FR | VS-FR-06 | Invalidation GO | 012 | B/D | bandeau + refus | couvert | — |
| VS-FR | VS-FR-07 | Revalidation avant Cursor | 017 | B/D | harness | couvert | — |
| VS-FR | VS-FR-08 | Cursor sandbox only | 018 | D | allowlist file | couvert | — |
| VS-FR | VS-FR-09 | Pas d’écriture remote | 018,021 | D | remote=0 | couvert | — |
| VS-FR | VS-FR-10 | STOP prioritaire | 019 | B/D | STOP event | couvert | — |
| VS-FR | VS-FR-11 | Rapport prérequis analyse | 021,022 | B/E | rapport | couvert | — |
| VS-FR | VS-FR-12 | Verdict candidat ; Morris clôture | 023–025 | E | verdict+décision | couvert | — |
| VS-FR | VS-FR-13 | États dérivés | 014,016 | B | source statut | couvert | — |
| VS-FR | VS-FR-14 | Harness sans Studio | 015 | B | CLI/preuves | couvert | — |
| VS-FR | VS-FR-15 | Pas de secrets | 028 | A+ | audit | couvert | — |
| VS-FR | VS-FR-16 | FinOps visible | 005,030,003 | A/C/E | compteurs | couvert | valeur plafond différée |
| VS-FR | VS-FR-17 | Pack incomplet bloque | 022 | B/E | blocage | couvert | — |
| VS-BR | VS-BR-01 | Rejet hors contrat | 006 | B/C | reject event | couvert | — |
| VS-BR | VS-BR-02 | Pas de fallback permissif | 006,008 | B/C | AC négatifs | couvert | — |
| VS-BR | VS-BR-03 | Pas de retry auto | 005,008,023,030 | C/E | UI no retry | couvert | — |
| VS-BR | VS-BR-04 | GPT ne décide pas | 011,023,025 | A/E | étiquettes candidat | couvert | — |
| VS-BR | VS-BR-05 | GO lié hash/HEAD… | 009,010,011 | B | ancrage | couvert | — |
| VS-BR | VS-BR-06 | Changement → GO invalide | 012 | B/D | invalidation | couvert | — |
| VS-BR | VS-BR-07 | Revalidation spawn | 017,027 | B/D | revalidation | couvert | — |
| VS-BR | VS-BR-08 | Sandbox / hors allowlist STOP | 018 | D | N7 | couvert | — |
| VS-BR | VS-BR-09 | Pas remote Git | 018 | D | remote=0 | couvert | — |
| VS-BR | VS-BR-10 | STOP prioritaire | 019 | B/D | N12 | couvert | — |
| VS-BR | VS-BR-11 | Timeout ≠ GO | 020 | D | N11 | couvert | — |
| VS-BR | VS-BR-12 | Studio ≠ vérité | 013,014,016 | B | Option B | couvert | — |
| VS-BR | VS-BR-13 | Harness autonome | 015 | B | VS-AC-12 | couvert | — |
| VS-BR | VS-BR-14 | Verdict = candidat | 023,024 | E | étiquette | couvert | — |
| VS-BR | VS-BR-15 | Pack incomplet | 022 | E | N14 | couvert | — |
| VS-BR | VS-BR-16 | Secrets jamais affichés | 028 | A+ | audit | couvert | — |
| VS-BR | VS-BR-17 | Claims interdits | 025,026 | E | CycleSummary | couvert | — |
| VS-AC | VS-AC-01 | Parcours 1→10 | 031,001–026 | A–E | parcours mock/réel | couvert | agrégé multi-stories |
| VS-AC | VS-AC-02 | GO refusé HEAD≠ | 012,017 | B/D | N3/revalidation | couvert | — |
| VS-AC | VS-AC-03 | GO refusé hash≠ | 012,017 | B/D | N6 | couvert | — |
| VS-AC | VS-AC-04 | Hors allowlist pas succès | 018 | D | N7 | couvert | — |
| VS-AC | VS-AC-05 | STOP journalisé | 019 | B/D | event | couvert | — |
| VS-AC | VS-AC-06 | Sans rapport/pack pas analyse OK | 021,022,023 | E | blocage | couvert | — |
| VS-AC | VS-AC-07 | Verdict invalide pas clôture auto | 023,025 | E | N15 | couvert | — |
| VS-AC | VS-AC-08 | Clôture via MorrisFinalDecision | 025 | E | décision | couvert | — |
| VS-AC | VS-AC-09 | Pas preuve écriture distante | 018,021 | D | remote=0 | couvert | — |
| VS-AC | VS-AC-10 | Pas secret UI/preuves | 028 | A+ | audit | couvert | — |
| VS-AC | VS-AC-11 | États cohérents preuves | 014,016,029 | B | dérivé | couvert | — |
| VS-AC | VS-AC-12 | Harness sans Studio | 015 | B | CLI | couvert | — |
| N | N1 | Qualif GPT invalide | 006,032,033 | C | fail-closed | couvert | — |
| N | N2 | Sources Git indisponibles | 004,033 | B | Truth Check STOP | couvert | — |
| N | N3 | HEAD modifié après qualif | 012,032,033 | B/D | invalidation | couvert | — |
| N | N4 | GO absent | 017,015,033 | B/D | refus spawn | couvert | — |
| N | N5 | GO invalide/expiré | 012,017,032,033 | D | refus | couvert | — |
| N | N6 | Contrat modifié après GO | 012,033 | D | refus | couvert | — |
| N | N7 | Fichier hors allowlist | 018,033 | D | STOP/refus | couvert | — |
| N | N8 | Action interdite | 018,033 | D | STOP | couvert | — |
| N | N9 | Cursor indisponible | 018,033 | D | échec explicite | couvert | — |
| N | N10 | Cursor exit≠0 | 018,021,033 | D | rapport échec | couvert | — |
| N | N11 | Timeout | 020,027,033 | D | timeout≠GO | couvert | — |
| N | N12 | STOP Morris | 019,027,032,033 | D | stoppé | couvert | — |
| N | N13 | Rapport absent | 021,022,033 | D/E | blocage analyse | couvert | — |
| N | N14 | Pack incomplet | 022,033 | E | blocage clôture | couvert | — |
| N | N15 | Verdict GPT invalide | 023,033 | E | fail-closed | couvert | — |
| N | N16 | Perte session Studio | 016,033 | B | reprise dérivée | couvert | Corrigé : plus US-003 |
| VS-CAND | VS-CAND-01 | Scénario Markdown sandbox | 001,018 | A/D | MD sandbox | couvert | — |
| VS-CAND | VS-CAND-02 | Parcours dix étapes | 031 | A | 10 états | couvert | — |
| VS-CAND | VS-CAND-03 | Qualif visible avant GO | 007 | A/B | VS-UX-03 | couvert | — |
| VS-CAND | VS-CAND-04 | GO lié hash/HEAD… | 009–012 | B | ancrage | couvert | — |
| VS-CAND | VS-CAND-05 | Studio dérivé / harness autorité | 013,014 | B | Option B | couvert | — |
| VS-CAND | VS-CAND-06 | Pas écriture remote | 018 | D | remote=0 | couvert | — |
| VS-CAND | VS-CAND-07 | Cursor sandbox après GO | 018 | D | spawn | couvert | — |
| VS-CAND | VS-CAND-08 | Verdict candidat | 023–025 | E | étiquette | couvert | — |
| VS-CAND | VS-CAND-09 | STOP ; timeout≠GO | 019,020 | D | events | couvert | — |
| VS-CAND | VS-CAND-10 | Harness autonome | 015 | B | CLI | couvert | — |
| VS-CAND | VS-CAND-11 | Succès = VS-AC + critère central | 026,033 | E | AC | couvert | — |
| VS-CAND | VS-CAND-12 | Séquencement UX→backlog→delivery | meta docs 38–40 | — | ce cycle | couvert | observé cycle |
| VS-CAND | VS-CAND-13 | Pas PII / secrets | 028 | A+ | audit | couvert | — |
| VS-CAND | VS-CAND-14 | Plafond + no retry | 005,030 | C/E | UI À définir | couvert | valeur numérique **différée** |
| VS-CAND | VS-CAND-15 | IDs corrélation | 002,029 | A/B | IDs UI/journal | couvert | — |
| VS-UX | VS-UX-01 | Nouvelle demande | 001,003,031 | A | frame 51:3 | couvert | — |
| VS-UX | VS-UX-02 | Qualification en cours | 004,005,006,030,032 | A/C | 51:139 | couvert | — |
| VS-UX | VS-UX-03 | Qualification proposée | 007,008 | A/B | 51:277 | couvert | — |
| VS-UX | VS-UX-04 | Gate Morris | 009–012,011 | A/B | 51:415 | couvert | — |
| VS-UX | VS-UX-05 | Exécution | 017–020 | B/D | 51:540 | couvert | — |
| VS-UX | VS-UX-06 | Rapport | 021,022 | B/D | 51:678 | couvert | — |
| VS-UX | VS-UX-07 | Analyse GPT | 023,030,032 | E | 51:816 | couvert | — |
| VS-UX | VS-UX-08 | Verdict proposé | 024 | E | 51:954 | couvert | — |
| VS-UX | VS-UX-09 | Décision Morris | 025,027 | E | 51:1079 | couvert | — |
| VS-UX | VS-UX-10 | Clôture | 026 | A/E | 51:1204 | couvert | — |
| VAR | VS-UX-VAR Loading `52:2` | Loading GPT | 005,032 | A/C | screenshot | couvert | — |
| VAR | VS-UX-VAR Erreur `52:10` | Erreur fail-closed | 006,032 | A/C | screenshot | couvert | — |
| VAR | VS-UX-VAR STOP `52:18` | STOP Morris | 019,032 | A/D | screenshot | couvert | — |
| VAR | VS-UX-VAR GO invalide `52:26` | GO invalide | 012,032 | A/D | screenshot | couvert | — |

**Contrôle :** aucune source orpheline · aucune story inexistante · N16 ≠ US-003 · VS-FR-15/16 ≠ sources des 4 actions gate.

**VS-CAND-14 :** plafond **obligatoire** couvert ; valeur numérique **différée** (À définir) — justifié (G-VS-LIMIT).

---

## 10. Traçabilité rapide stories → sources

| Story | FR/BR/AC/N/UX/CAND principaux |
|-------|-------------------------------|
| 001–003 | FR-01/16 · UX-01 · CAND-01/15 · abandon pré-qualif (**pas N16**) |
| 004–008 | FR-02/03/04/16 · BR-01/02/03 · N1/N2 · UX-02/03 · VAR Loading/Erreur |
| 009–012 | FR-04/05/06 · BR-04/05/06 · AC-02/03 · N3/N5/N6 · UX-04 · UX-FR-15/16 · VAR GO invalide |
| 013–016 | FR-13/14 · BR-12/13 · AC-11/12 · **N16→016** · CAND-05/10 |
| 017–020 | FR-07/08/09/10 · BR-07/08/09/10/11 · AC-04/05/09 · N4/N7–N12 · UX-05 · VAR STOP |
| 021–022 | FR-11/17 · BR-15 · AC-06 · N13/N14 · UX-06 |
| 023–024 | FR-12/16 · BR-14 · AC-06/07 · N15 · UX-07/08 · CAND-08 |
| 025–027 | FR-12 · AC-07/08 · BR-04/17 · UX-09/10 · N11/N12 (relance) |
| 028–030 | FR-15/16 · BR-03/16 · AC-10 · CAND-13/14/15 |
| 031–033 | UX-01…10 · VAR · N1–N16 · AC-01 · CAND-02 |

---

## 11. Risques backlog

| Risque | Mitigation |
|--------|------------|
| Adapter Studio↔harness sous-estimé | US-013 L + Incr. B avant live |
| Confusion 10 routes | US-031 + DoR « pas de nouvelle route » |
| Live trop tôt | Gates G-VS-LIVE-GPT / CURSOR |
| MVP implicite | DoD + claims interdits |
| Plafond non chiffré | Afficher « À définir » ; GO FinOps séparé |
| Traçabilité erronée | Correctif US-003 / US-011 + matrice §9 |

---

## 12. Gates Morris (rappel)

| Gate | Objet |
|------|-------|
| G-VS-BL | **Consommé** — produire backlog |
| G-VS-BL-FIX | **Consommé** — correctif documentaire structure/traçabilité |
| G-VS-BL-VAL | **Consommé** — validation backlog / `VS-BL-CAND-01`…`12` |
| G-VS-BL-DOC | **Partiel** — commit/push/draft PR autorisés ; **merge** = GO distinct |
| G-VS-DEL / G-VS-DEL-A | Delivery (Incr. A retenu, **non autorisé** ici) |
| G-VS-LIVE-GPT | GPT live |
| G-VS-LIVE-CURSOR | Cursor live |
| G-VS-LIMIT | Valeur numérique plafond (**À définir**) |
| G-VS-CI / MVP / IND | Interdits tant que non GO |

---

## 13. Synthèse quantitative

| Élément | Nombre |
|---------|--------|
| Epics | 10 |
| Capabilities | 34 |
| User stories | **33** (`VS-BL-US-001` … `033`) |
| Champs obligatoires / story | **16** |
| Lignes matrice couverture | 91 |
| Incréments A–E | 5 — séquencement **validé** ; Incr. A **retenu** ; delivery = GO distinct (voir `39`) |
| Références traçabilité corrigées (min.) | US-003 · US-011 (+ champs 32 stories) |


---

# ANNEXE B — Document 39 intégral (commité)

# SFIA Studio — Story map et séquencement du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `39-poc-vertical-slice-story-map-and-sequencing.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — story map et séquencement A–E **validés Morris** ; incrément A **retenu** ; delivery non autorisé |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Companion** | [`38`](./38-poc-vertical-slice-backlog.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
| **Décisions Morris** | `VS-BL-CAND-01` (A→E) · `VS-BL-CAND-03` (Incr. A premier périmètre) validées |

> Story map des **dix états** sur **quatre vues P0**.
> Séquencement A–E validé ; **delivery** de chaque incrément soumis à GO Morris distinct.

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
| 01 | 001, 002, 003 (abandon pré-qualif), 031 | — |
| 02 | 004, 005, 006, 030, 032 | 001 |
| 03 | 007, 008 | 004–006 |
| 04 | 009, 010, 011 (4 actions · VS-FR-04 / VS-UX-FR-15/16), 012, 032 | 007, 009 |
| 05 | 013*, 014, 017, 018, 019, 020, 032 | 011 GO, 017 |
| 06 | 021, 022 | 018 |
| 07 | 023, 030, 032 | 021–022 |
| 08 | 024 | 023 |
| 09 | 025, 027 | 024 |
| 10 | 026 | 025 |
| Transverse | 015, **016 (N16 reprise session)**, 028, 029, 033 | Continu |

\*013 adaptateur commence Incr. B, critique avant live.

**Traçabilité N16 :** couverture primaire = **VS-BL-US-016** (+ US-033 QA) — **pas** US-003.

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

## 6. Incréments A–E (séquencement validé Morris ; delivery non autorisé)

> **Incrément A** = premier périmètre delivery **futur** retenu (`VS-BL-CAND-03`). Aucun GO delivery consommé ici.

### Incrément A — Cockpit statique gouverné (**retenu** — premier périmètre futur)

| Champ | Contenu |
|-------|---------|
| Objectif | Prouver mapping 10 états / 4 vues avec données mockées |
| Stories | 001–003, 007*, 010*, 011*, 026*, 031, 032 (UI mock), 028 (checklist) |
| Live | Aucun |
| Sortie | Parcours UI navigable ; Abandonner visible ; clôture slice-only mock ; **pas** 10 routes |
| Gate suivant | Revue visuelle + GO Incr. B (après G-VS-DEL-A) |
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

**Critères « slice prouvé » (`VS-BL-CAND-10` validée) :** A–E complétés sous gates + VS-AC-01…12 avec réserves documentées — **≠** MVP ; déclaration future uniquement après deliveries sous GO.

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
| Incréments A–E | Séquencement **validé** ; Incr. A **retenu** ; delivery = GO distinct |
| Versionnement | Commit / push / draft PR autorisés ; merge = GO distinct |


---

# ANNEXE C — Document 40 intégral (commité)

# SFIA Studio — Decision pack backlog vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `40-poc-vertical-slice-backlog-decision-pack.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — `VS-BL-CAND-01` à `VS-BL-CAND-12` **validées Morris** ; versionnement autorisé ; merge et delivery = gates distincts |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Companions** | [`38`](./38-poc-vertical-slice-backlog.md) · [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) |
| **Décisions Morris** | Backlog 38–40 validé · A→E validé · Incr. A retenu · commit/push/draft PR autorisés |

> Observations / hypothèses / options / recommandations.
> `VS-BL-CAND-01`…`12` = **VALIDÉES** (Morris). Merge PR, delivery et live restent soumis à GO distincts.

---

## 1. Synthèse

Ce cycle versionne un backlog borné (33 stories × **16 champs**, 10 epics, incréments A–E) pour le vertical slice POC, sans code ni live. Versionnement autorisé ; **merge** et **delivery** non autorisés ici.

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
| Négatifs | Différer N* | **Couvrir dans stories primaires + US-033** (N16→016) | Matrice §38 recalculée |
| Adaptateur | Spécifier API maintenant | **Story L + spike tech ultérieur** | Pas de protocole ici |

---

## 5. Recommandations (statut post-validation)

1. ~~Valider d’abord `VS-BL-CAND-*`~~ → **FAIT** (Morris).
2. Versionner 38–40 via draft PR → **en cours** (ce cycle).
3. Delivery minimal = Incr. A puis B avant tout live — **GO delivery distinct**.
4. Ne pas paralléliser C et D.
5. Exiger G-VS-LIVE-GPT / CURSOR distincts.
6. Garder harness autonome comme chemin de non-régression.
7. Ne pas ouvrir CI/MVP/industrialisation dans ce backlog.
8. Capitaliser spikes existants plutôt que réécrire les ports.

---

## 6. Décisions `VS-BL-CAND-*` — **VALIDÉES Morris**

| ID | Décision (validée) | Impact | Statut | Dette |
|----|-------------------|--------|--------|-------|
| **VS-BL-CAND-01** | Incréments A→B→C→D→E comme séquence delivery | Ordre BeB | **VALIDÉE** | Faible |
| **VS-BL-CAND-02** | Priorité epics : E1–E3 UI → E4 adaptateur → E5–E8 live → E9/E10 transverse | Focus | **VALIDÉE** | Moyenne |
| **VS-BL-CAND-03** | Premier périmètre delivery = Incrément A (cockpit mock) | Preuve UX | **VALIDÉE** | Faible |
| **VS-BL-CAND-04** | Stratégie mock (A/B) puis live (C/D/E) | Sécurité FinOps | **VALIDÉE** | Faible |
| **VS-BL-CAND-05** | Adaptateur fin = story L en Incr. B, protocole en cycle archi ultérieur | Option B | **VALIDÉE** | Acceptable |
| **VS-BL-CAND-06** | Couverture N1–N16 via stories primaires + US-033 (N16 = US-016, **pas** US-003) | Qualité | **VALIDÉE** | Faible |
| **VS-BL-CAND-07** | Gate obligatoire avant GPT live (Incr. C) | Sécurité | **VALIDÉE** | Faible |
| **VS-BL-CAND-08** | Gate obligatoire avant Cursor live (Incr. D) | Sécurité | **VALIDÉE** | Faible |
| **VS-BL-CAND-09** | Plafond GPT : UI « À définir » jusqu’à G-VS-LIMIT (ne pas inventer) | FinOps | **VALIDÉE** | Nulle |
| **VS-BL-CAND-10** | Critères « slice prouvé » = VS-AC-01…12 + A–E sous gates + réserves ; **≠** MVP | Acceptation | **VALIDÉE** | Discipline |
| **VS-BL-CAND-11** | Stratégie tests : Vitest/Playwright app (A) + tests harness (B–D) + preuves live sous flags | QA | **VALIDÉE** | Acceptable POC |
| **VS-BL-CAND-12** | 33 stories / 10 epics = granularité retenue (pas fusion silencieuse) | Traçabilité | **VALIDÉE** | Faible |

---

## 7. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| Backlog Standard | Guide delivery | Sur-spécification | Maintenir alignement 38↔32–37 |
| Traçabilité | Fiabilité delivery | Mapping artificiel (ex. N16→003) | Audit correctif + matrice 91 lignes |
| Structure stories | DoR 16 champs | Stories incomplètes | Correctif : 0 story incomplète |
| Incr. A mock | Preuve UX rapide | Sous-estimer adaptateur | B obligatoire avant live |
| Pas de CI | POC local | Régression non détectée | Futur G-VS-CI |
| Spikes existants | Accélère C/D | Réserves spike | Documenter dans DoD |

---

## 8. Statut de validation Morris

| Élément | Statut |
|---------|--------|
| Backlog 38–40 (fond) | **Validé** |
| `VS-BL-CAND-01`…`12` | **Validées** |
| Séquencement A→E | **Validé** |
| Incrément A premier périmètre | **Retenu** |
| Commit / push / draft PR | **Autorisés** (ce cycle) |
| Merge PR | **Non autorisé** — GO distinct |
| Delivery / live / archi / CI / MVP | **Non autorisés** |

---

## 9. Gates

| Gate | Objet | Statut |
|------|-------|--------|
| G-VS-BL-VAL | Validation backlog / VS-BL-CAND | **Consommé** |
| G-VS-BL-DOC | Commit/push/draft PR | **Consommé partiel** (merge restant) |
| G-VS-BL-MERGE | Merge PR 38–40 | **Requis** |
| G-VS-DEL-A | Delivery Incrément A | Requis |
| G-VS-LIVE-GPT | Incrément C | Requis |
| G-VS-LIVE-CURSOR | Incrément D | Requis |
| G-VS-LIMIT | Valeur plafond GPT | Requis (valeur **À définir**) |
| G-VS-CI / MVP / IND | Interdits sans GO | Interdits |

---

## 10. Verdict

`SFIA STUDIO VERTICAL SLICE BACKLOG PR CREATED — MORRIS MERGE DECISION REQUIRED`

### Interdits (sans nouveau GO)

READY FOR REVIEW · MERGED · READY FOR DELIVERY · MVP DEFINED · PRODUCTION READY · API SELECTED · L5 GLOBAL PROVEN · GPT LIVE · CURSOR LIVE

---

## 11. Décisions Morris attendues (suivantes)

1. Autoriser ou non le **merge** de la draft PR 38–40.
2. Autoriser éventuellement ready-for-review (GO distinct si requis).
3. **Ne pas** traiter ce pack comme GO delivery, live ou architecture.


---

# ANNEXE D — Diff commit HEAD (38–40)

diff --git a/projects/sfia-studio/38-poc-vertical-slice-backlog.md b/projects/sfia-studio/38-poc-vertical-slice-backlog.md
new file mode 100644
index 0000000..02cc5ea
--- /dev/null
+++ b/projects/sfia-studio/38-poc-vertical-slice-backlog.md
@@ -0,0 +1,987 @@
+# SFIA Studio — Backlog delivery borné du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `38-poc-vertical-slice-backlog.md` |
+| **Cycle** | 5 — Backlog / user stories · 13 — PR readiness |
+| **Profil** | Standard |
+| **Typologie** | DOC / BACKLOG / PR READINESS |
+| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
+| **Base Git** | `origin/main` @ `722f586855743f87a6d3318ccec2dd6224676e28` |
+| **Statut** | `validated-for-versioning` — backlog et stories **validés Morris** ; merge PR = GO distinct ; delivery = GO distinct |
+| **Companions** | [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
+| **Sources** | [`32`](./32-poc-vertical-slice-functional-design.md)–[`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
+| **Code / live** | **Aucun** dans ce cycle |
+| **Décisions Morris** | `VS-BL-CAND-01`…`12` validées · séquencement A→E validé · incrément A = premier périmètre futur |
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
+4. valeur démontrée ;
+5. sources (`VS-FR`/`VS-BR`/`VS-AC`/N/UX/CAND) exactes ;
+6. état UX ou variante (ou `Aucun spécifique`) ;
+7. préconditions ;
+8. AC Given/When/Then testables ;
+9. scénarios négatifs (ou `Aucun spécifique`) ;
+10. preuves, dépendances, risque, taille, gate, hors périmètre, notes ;
+11. aucune dépendance stack non tranchée (sinon hypothèse / spike candidat) ;
+12. gate Morris éventuel identifié.
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
+> Chaque story ci-dessous comporte les **16 champs obligatoires**.
+> `—` ou `Aucun spécifique` = non applicable explicite (jamais une ligne omise).
+
+
+### VS-BL-US-001 — Saisir une demande de preuve
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E1 / C1.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux saisir une intention Markdown sandbox (titre + synthèse), Afin de démarrer un cycle de preuve gouverné. |
+| Valeur démontrée | Entrée BeB observable sans exécution implicite |
+| Sources | VS-FR-01 · VS-CAND-01 · VS-UX-01 · VS-AC-01 (prérequis parcours) |
+| UX / état / variante | VS-UX-01 · vue Nouvelle demande · frame `51:3` |
+| Préconditions | Studio accessible ; projet connu ; aucune session live requise |
+| Critères d’acceptation | **Given** vue Nouvelle demande **When** Morris saisit titre+synthèse valides et voit un requestId candidat **Then** StudioRequest affichée · aucune qualification démarrée · aucun GO implicite · aucune écriture distante |
+| Scénarios négatifs | Intention vide ou incomplète → validation locale · CTA Qualifier désactivé ou bloqué · pas d’appel GPT |
+| Preuves attendues | StudioRequest horodatée (TZ) · requestId visible |
+| Dépendances | — |
+| Risque | Faible |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Live GPT · Cursor · écriture Git distante · nouvelle route |
+| Notes delivery | Réutiliser shell floating `/nouvelle-demande` ; étendre états (pas nouvelle route) |
+
+### VS-BL-US-002 — Propager requestId / correlationId
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E1 / C1.2 · E10 / C10.1 |
+| Acteur | Morris (via Studio / Harness) |
+| Story | En tant que Morris, Je veux des identifiants stables visibles sur tout le parcours, Afin de reconstruire la corrélation bout-en-bout. |
+| Valeur démontrée | Observabilité et auditabilité du cycle |
+| Sources | VS-CAND-15 · VS-FR-01 · VS-AC-11 |
+| UX / état / variante | Tous les états VS-UX-01…10 · IDs dans topbar/canvas |
+| Préconditions | US-001 : demande créée avec requestId |
+| Critères d’acceptation | **Given** demande créée **When** navigation entre états/vues **Then** requestId et correlationId inchangés et affichés · eventId présents dans journal dérivé |
+| Scénarios négatifs | ID manquant ou réécrit → fail-closed UI (blocage progression) · message explicite |
+| Preuves attendues | Journal avec eventId liés au même requestId/correlationId |
+| Dépendances | VS-BL-US-001 |
+| Risque | Faible |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Schéma BDD · protocole réseau inventé |
+| Notes delivery | Affichage dérivé ; pas de génération d’ID concurrente côté UI |
+
+### VS-BL-US-003 — Abandonner avant qualification
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E1 / C1.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux abandonner avant toute qualification GPT, Afin d’éviter toute consommation FinOps inutile. |
+| Valeur démontrée | Sortie propre pré-qualif · FinOps zéro appel |
+| Sources | Doc 33 § étape 1 (actions : abandonner) · Doc 32 § Abandon · transition `intention_capturée` → `abandonné` · VS-UX-01 · VS-FR-16 (visibilité conso = 0) · VS-BR-03 (pas de retry silencieux) |
+| UX / état / variante | VS-UX-01 · vue Nouvelle demande |
+| Préconditions | Intention capturée ou en saisie · qualification non démarrée |
+| Critères d’acceptation | **Given** intention capturée sans qualif démarrée **When** Morris choisit Abandonner (avec confirmation si destructif) **Then** état `abandonné` · **0** appel GPT · compteur FinOps inchangé à 0 · aucune écriture distante |
+| Scénarios négatifs | Abandon pendant qualif déjà démarrée → hors cette story (voir STOP / gate) · double-clic → un seul abandon journalisé |
+| Preuves attendues | Événement abandon journalisé · FinOps qualif = 0 |
+| Dépendances | VS-BL-US-001 |
+| Risque | Faible |
+| Taille relative | XS |
+| Gate Morris éventuel | — |
+| Hors périmètre | N16 (perte session) · Abandonner au gate (US-011) · STOP exécution (US-019) |
+| Notes delivery | Ne pas mapper N16 ici — N16 = reprise session (US-016) |
+
+### VS-BL-US-004 — Déclencher qualification GPT
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E2 / C2.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux déclencher explicitement « Qualifier la demande », Afin de lancer une qualification contrôlée. |
+| Valeur démontrée | Contrôle humain du démarrage GPT |
+| Sources | VS-FR-02 · VS-FR-03 · VS-UX-01→02 · VS-BR-03 · N2 |
+| UX / état / variante | Transition VS-UX-01 → VS-UX-02 · frame `51:139` |
+| Préconditions | Demande valide (US-001) · sources Git lisibles ou mode fixture déclaré |
+| Critères d’acceptation | **Given** demande valide **When** CTA Qualifier **Then** état `qualification_en_cours` · compteur FinOps qualif +1 (ou +1 à la consommation réelle selon mode) · aucun GO · aucun spawn Cursor |
+| Scénarios négatifs | **N2** Sources Git indisponibles → STOP lecture · pas de qualif live · message Truth Check · pas de fallback permissif |
+| Preuves attendues | Event qualification_started · FinOps visible |
+| Dépendances | VS-BL-US-001 · VS-BL-US-002 |
+| Risque | Moyen (live) |
+| Taille relative | M |
+| Gate Morris éventuel | Avant live GPT : G-VS-LIVE-GPT (futur) |
+| Hors périmètre | Retry automatique · inventaire coût € |
+| Notes delivery | Fixture d’abord (Incr. B) puis live (Incr. C) sous flags |
+
+### VS-BL-US-005 — Loading qualification + no retry
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E2 / C2.2 · C2.4 |
+| Acteur | Morris / Système |
+| Story | En tant que Morris, Je veux voir la phase active et le plafond « À définir », sans retry automatique, Afin de contrôler la consommation. |
+| Valeur démontrée | Transparence FinOps + anti-retry |
+| Sources | VS-FR-16 · VS-BR-03 · VS-CAND-14 · VS-UX-FR-07 · VS-UX-VAR Loading `52:2` |
+| UX / état / variante | VS-UX-02 · variante Loading `52:2` |
+| Préconditions | Qualification démarrée (US-004) |
+| Critères d’acceptation | **Given** qualif en cours **When** UI affiche l’état **Then** phase active lisible · compteur `n / À définir` · mention « Aucun retry automatique » · pas de barre de progression inventée comme succès |
+| Scénarios négatifs | Timeout qualif → état d’échec/stop explicite · **pas** de GO · **pas** de retry auto |
+| Preuves attendues | Screenshot / trace UI Loading + FinOps |
+| Dépendances | VS-BL-US-004 |
+| Risque | Faible |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Valeur numérique du plafond (G-VS-LIMIT) |
+| Notes delivery | Plafond affiché « À définir » jusqu’à arbitrage |
+
+### VS-BL-US-006 — Rejet fail-closed QualificationCandidate
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E2 / C2.2 |
+| Acteur | Harness (autorité) / Studio (affichage) |
+| Story | En tant que Morris, Je veux qu’une sortie GPT invalide soit rejetée fail-closed, Afin d’éviter un GO aveugle. |
+| Valeur démontrée | Garde-fou intégrité qualification |
+| Sources | VS-FR-02 · VS-BR-01 · VS-BR-02 · N1 · VS-UX-FR-13 · VS-UX-VAR Erreur `52:10` |
+| UX / état / variante | VS-UX-02 · variante Erreur `52:10` |
+| Préconditions | Sortie GPT reçue (fixture ou live) |
+| Critères d’acceptation | **Given** sortie hors contrat **When** validateur refuse **Then** message erreur fail-closed · pas d’état `qualification_prête` · CTA correction/abandon · aucun GO |
+| Scénarios négatifs | **N1** Qualif invalide → rejet · pas d’exécution · correction ou abandon uniquement |
+| Preuves attendues | Event validation_rejected · pas de QualificationCandidate acceptée |
+| Dépendances | VS-BL-US-004 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Fallback permissif · auto-correction GPT |
+| Notes delivery | Harness valide ; Studio affiche dérivé |
+
+### VS-BL-US-007 — Afficher qualification complète avant gate
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E2 / C2.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux lire cycle, profil, allowlist, stops, hash, Afin de contrôler avant tout GO. |
+| Valeur démontrée | Contrôle humain pré-GO (VS-CAND-03) |
+| Sources | VS-FR-03 · VS-CAND-03 · VS-UX-03 · VS-UX-FR-04 (préparation gate) |
+| UX / état / variante | VS-UX-03 · frame `51:277` · vue Nouvelle demande |
+| Préconditions | QualificationCandidate validée |
+| Critères d’acceptation | **Given** qualif valide **When** affichage **Then** champs obligatoires doc 33 §3 visibles · source étiquetée GPT · **pas** d’auto-GO · CTA Continuer vers gate / Correction / Abandonner |
+| Scénarios négatifs | Champ obligatoire manquant → pas de passage gate · message explicite |
+| Preuves attendues | Screenshot VS-UX-03 · QualificationCandidate complète |
+| Dépendances | VS-BL-US-006 (chemin OK) |
+| Risque | Faible |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Modification silencieuse du candidat |
+| Notes delivery | Mock possible Incr. A |
+
+### VS-BL-US-008 — Demander correction qualification
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E2 / C2.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux demander une correction, Afin de relancer une nouvelle qualification contrôlée. |
+| Valeur démontrée | Boucle de correction gouvernée |
+| Sources | VS-FR-04 (action correction) · VS-BR-02 · VS-BR-03 · Doc 33 transitions qualif |
+| UX / état / variante | VS-UX-03 → VS-UX-02 |
+| Préconditions | Qualification proposée visible |
+| Critères d’acceptation | **Given** qualif proposée **When** Demander une correction **Then** retour `qualification_en_cours` · nouvelle consommation FinOps visible · pas de fallback permissif · pas de retry auto silencieux |
+| Scénarios négatifs | Correction sans confirmation FinOps → bloquée ou confirmée explicitement |
+| Preuves attendues | Event correction_requested · FinOps +1 (nouvelle conso) |
+| Dépendances | VS-BL-US-007 |
+| Risque | Moyen (FinOps) |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Correction automatique par GPT |
+| Notes delivery | Chaque relance = consommation distincte |
+
+### VS-BL-US-009 — Générer ExecutionContract + hash
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E3 / C3.1 |
+| Acteur | Harness |
+| Story | En tant que Morris, Je veux un contrat borné hashé, Afin d’ancrer le futur GO. |
+| Valeur démontrée | Ancrage déterministe du périmètre |
+| Sources | VS-FR-05 · VS-BR-05 · VS-CAND-04 · VS-CAND-06 |
+| UX / état / variante | VS-UX-03/04 (affichage dérivé contractId/hash) |
+| Préconditions | Qualification acceptée pour passage gate |
+| Critères d’acceptation | **Given** qualif acceptée pour gate **When** contrat produit **Then** contractId + contractHash + allowlist + gitEffect=none-remote présents et stables |
+| Scénarios négatifs | Contrat incomplet → pas de gate GO possible · fail-closed |
+| Preuves attendues | ExecutionContract + hash dans preuves/journal |
+| Dépendances | VS-BL-US-007 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Protocole API inventé · ORM |
+| Notes delivery | Réutiliser canonicalize/hash harness existants (lecture seule observée) |
+
+### VS-BL-US-010 — Dossier de décision Gate Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E3 / C3.2 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux un dossier ancré (IDs, HEAD, branche, allowlist, horodatage), Afin de décider en connaissance de cause. |
+| Valeur démontrée | Décision gate informée |
+| Sources | VS-FR-05 · VS-UX-04 · VS-UX-FR-04 · VS-BR-05 · VS-BR-11 |
+| UX / état / variante | VS-UX-04 · frame `51:415` · vue Décision / Gate |
+| Préconditions | Contrat hashé disponible (US-009) |
+| Critères d’acceptation | **Given** attente gate **When** affichage dossier **Then** requestId, contractId, contractHash, branche, HEAD, allowlist, horodatage TZ, autorité · mention timeout ≠ GO visible |
+| Scénarios négatifs | Ancrage incomplet → CTA GO désactivé · message explicite |
+| Preuves attendues | Screenshot dossier gate · champs d’ancrage |
+| Dépendances | VS-BL-US-009 |
+| Risque | Faible |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | GO sans ancrage · auto-GO |
+| Notes delivery | Mock Incr. A ; réel Incr. B |
+
+### VS-BL-US-011 — Quatre actions gate (GO / NO-GO / Corriger / Abandonner)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E3 / C3.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux quatre actions explicites au gate, Afin de ne pas confondre NO-GO, STOP et Abandonner. |
+| Valeur démontrée | Autorité Morris L0 au gate · distinction sémantique |
+| Sources | VS-FR-04 · VS-UX-FR-15 · VS-UX-FR-16 · VS-UX-04 · Doc 36 §8 (Abandonner ≠ NO-GO ≠ STOP) · VS-CAND-04 (ancrage GO) · VS-BR-04 |
+| UX / état / variante | VS-UX-04 · quatre CTA · confirmation Abandonner |
+| Préconditions | Dossier gate complet (US-010) |
+| Critères d’acceptation | **Given** gate affiché **When** Morris choisit une action **Then** GO / NO-GO / Demander une correction / Abandonner sont distincts · Abandonner = destructif + confirmation + conséquence `abandonné` · aucune action Git distante · GO n’autorise spawn qu’après revalidation ultérieure |
+| Scénarios négatifs | Confusion Abandon/NO-GO/STOP → copy UI + a11y (noms accessibles) · GO sans ancrage → impossible |
+| Preuves attendues | MorrisGateDecision journalisée · UI 4 actions |
+| Dépendances | VS-BL-US-010 |
+| Risque | Moyen (UI actuelle ≠ 4 actions) |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | VS-FR-15 (secrets) · VS-FR-16 (FinOps) — **non applicables** comme sources des 4 actions · STOP exécution (US-019) |
+| Notes delivery | Ne pas confondre VS-UX-FR-15/16 avec VS-FR-15/16 |
+
+### VS-BL-US-012 — Invalidation GO (HEAD/hash/branche/allowlist)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E3 / C3.4 |
+| Acteur | Harness / Studio (affichage) |
+| Story | En tant que Morris, Je veux qu’un GO stale soit invalide, Afin d’empêcher un spawn dangereux. |
+| Valeur démontrée | Sécurité d’ancrage |
+| Sources | VS-FR-06 · VS-BR-06 · VS-AC-02 · VS-AC-03 · N3 · N5 · N6 · VS-UX-FR-05 · VS-UX-VAR GO invalide `52:26` |
+| UX / état / variante | VS-UX-04/05 · variante GO invalide `52:26` |
+| Préconditions | GO ancré existant |
+| Critères d’acceptation | **Given** GO ancré **When** HEAD, contractHash, branche ou allowlist diverge **Then** bandeau GO invalide · harness refuse spawn · nouveau gate requis |
+| Scénarios négatifs | **N3** HEAD modifié · **N5** GO invalide/expiré · **N6** contrat modifié → refus + message |
+| Preuves attendues | Event go_invalidated · refus spawn journalisé |
+| Dépendances | VS-BL-US-011 (GO) · VS-BL-US-017 |
+| Risque | Élevé (runtime) |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Réparation automatique du GO |
+| Notes delivery | Variante UX obligatoire Incr. A mock + B/D réel |
+
+### VS-BL-US-013 — Adaptateur fin sans autorité
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E4 / C4.1 |
+| Acteur | Adaptateur (Studio→Harness) |
+| Story | En tant que Morris, Je veux que Studio transmette sans élargir ni décider, Afin de préserver Option B. |
+| Valeur démontrée | Garde-fou architecture Option B |
+| Sources | VS-FR-13 · VS-BR-12 · VS-CAND-05 |
+| UX / état / variante | Transverse (pas de 5e route) |
+| Préconditions | Actions Studio à transmettre ; harness joignable (fixture ou réel) |
+| Critères d’acceptation | **Given** action Studio **When** envoi via adaptateur **Then** aucune décision inventée · pas de seconde vérité · pas d’assouplissement policy · harness reste autorité d’application des gates |
+| Scénarios négatifs | Tentative d’élargissement périmètre côté Studio → refus / non transmission |
+| Preuves attendues | Trace transmission · comparaison payload vs preuves harness |
+| Dépendances | VS-BL-US-009 · VS-BL-US-011 |
+| Risque | Élevé (absent aujourd’hui) |
+| Taille relative | L |
+| Gate Morris éventuel | — |
+| Hors périmètre | Spécification API/protocole figée · choix stack |
+| Notes delivery | Spike candidat interface en cycle archi ultérieur — pas ici |
+
+### VS-BL-US-014 — Afficher états dérivés depuis preuves/journal
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E4 / C4.2 |
+| Acteur | Studio |
+| Story | En tant que Morris, Je veux des états dérivés des preuves/journal, Afin que Git/preuves priment. |
+| Valeur démontrée | Studio = cockpit dérivé (pas vérité) |
+| Sources | VS-FR-13 · VS-AC-11 · VS-BR-12 · VS-UX-FR-12 |
+| UX / état / variante | Tous états · source de statut visible |
+| Préconditions | Événements/preuves harness disponibles |
+| Critères d’acceptation | **Given** événements harness **When** UI rafraîchit **Then** statut source explicite (Git / harness / dérivé) · pas d’état inventé · cohérence VS-AC-11 |
+| Scénarios négatifs | Preuves absentes → message incomplet · pas de faux succès |
+| Preuves attendues | UI source statut · cohérence avec journal |
+| Dépendances | VS-BL-US-013 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Cache UI faisant autorité |
+| Notes delivery | Incr. B |
+
+### VS-BL-US-015 — Harness autonome sans Studio
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E4 / C4.3 |
+| Acteur | Morris / Harness |
+| Story | En tant que Morris, Je veux exécuter le scénario via harness seul, Afin de ne pas dépendre de l’UI. |
+| Valeur démontrée | Résilience + non-régression hors UI |
+| Sources | VS-FR-14 · VS-BR-13 · VS-AC-12 · VS-CAND-10 |
+| UX / état / variante | — (CLI / hors Studio) · Aucun spécifique UI |
+| Préconditions | Contrat + GO (fixture ou réel selon incrément) |
+| Critères d’acceptation | **Given** contrat+GO **When** harness exécute en mode autonome **Then** preuve BeB produite sans Studio · mêmes garde-fous gates |
+| Scénarios négatifs | GO absent → refus spawn (N4) même sans Studio |
+| Preuves attendues | Journal/preuves harness · VS-AC-12 |
+| Dépendances | VS-BL-US-009 · capitalisation spikes `29`–`31` |
+| Risque | Faible (déjà partiel) |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Remplacer Studio · supprimer Option B cockpit |
+| Notes delivery | Chemin de contrôle parallèle obligatoire |
+
+### VS-BL-US-016 — Reprise après perte de session Studio
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E4 / C4.4 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux reprendre après perte de session sans inventer d’état, Afin d’éviter un faux succès. |
+| Valeur démontrée | Reprise sûre · anti faux succès |
+| Sources | **N16** · VS-AC-11 · VS-FR-13 · VS-BR-12 · Doc 33 N16 |
+| UX / état / variante | Reprise sur vues P0 selon état dérivé |
+| Préconditions | Cycle existant avec preuves/Git ; session Studio perdue |
+| Critères d’acceptation | **Given** session Studio perdue **When** rechargement **Then** états rechargés **uniquement** depuis preuves/Git · message si incomplet · **aucun** état inventé · pas de GO implicite |
+| Scénarios négatifs | **N16** Preuves incomplètes → reprise partielle explicite · blocage actions dangereuses |
+| Preuves attendues | Scénario reprise · source statut post-reload |
+| Dépendances | VS-BL-US-014 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Persistance locale faisant autorité · inventaire session storage comme vérité |
+| Notes delivery | N16 couvert ici — **pas** dans US-003 |
+
+### VS-BL-US-017 — Revalidation GO avant Cursor
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E5 / C5.1 |
+| Acteur | Harness |
+| Story | En tant que Morris, Je veux une revalidation déterministe avant spawn, Afin d’appliquer le gate. |
+| Valeur démontrée | Autorité harness sur le spawn |
+| Sources | VS-FR-07 · VS-BR-07 · VS-AC-02 · VS-AC-03 · N4 · N5 |
+| UX / état / variante | VS-UX-05 (état dérivé refus/OK) |
+| Préconditions | Demande de spawn ; GO éventuellement présent |
+| Critères d’acceptation | **Given** spawn demandé **When** harness revalide **Then** hash/HEAD/branche/allowlist OK sinon refus · aucun spawn si N4/N5 |
+| Scénarios négatifs | **N4** GO absent → refus · **N5** GO invalide → refus · journal |
+| Preuves attendues | Event revalidation_ok/refused |
+| Dépendances | VS-BL-US-011 · VS-BL-US-012 |
+| Risque | Élevé |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Revalidation côté Studio comme autorité |
+| Notes delivery | Incr. B fixture · Incr. D live |
+
+### VS-BL-US-018 — Exécution Cursor sandbox Markdown
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E5 / C5.2 · C5.4 |
+| Acteur | Cursor / Harness |
+| Story | En tant que Morris, Je veux que Cursor crée le Markdown autorisé uniquement, Afin de prouver le BeB sandbox. |
+| Valeur démontrée | Preuve BeB Markdown bornée |
+| Sources | VS-FR-08 · VS-FR-09 · VS-BR-08 · VS-BR-09 · VS-AC-04 · VS-AC-09 · VS-CAND-01 · VS-CAND-06 · VS-CAND-07 · VS-UX-05 · N7 · N8 · N9 · N10 |
+| UX / état / variante | VS-UX-05 · frame `51:540` · Cycle actif |
+| Préconditions | GO revalidé (US-017) · allowlist connue |
+| Critères d’acceptation | **Given** GO revalidé **When** exécution **Then** fichier sandbox allowlist · remote writes=0 · journal dérivé · pas de commandes inventées en UI comme réussies |
+| Scénarios négatifs | **N7** hors allowlist STOP/refus · **N8** action interdite STOP · **N9** Cursor indisponible échec explicite · **N10** exit≠0 rapport échec |
+| Preuves attendues | Fichier sandbox · CursorExecutionReport · remote=0 |
+| Dépendances | VS-BL-US-017 · VS-BL-US-013 (si via Studio) |
+| Risque | Élevé |
+| Taille relative | L |
+| Gate Morris éventuel | G-VS-LIVE-CURSOR |
+| Hors périmètre | Écriture remote · multi-fichier hors allowlist · claim prod |
+| Notes delivery | Capitaliser spike e2e sandbox ; fixture avant live |
+
+### VS-BL-US-019 — STOP prioritaire pendant exécution
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E5 / C5.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux un STOP immédiat prioritaire, Afin d’interrompre toute activité en cours. |
+| Valeur démontrée | Sécurité opérateur |
+| Sources | VS-FR-10 · VS-BR-10 · VS-AC-05 · VS-CAND-09 · N12 · VS-UX-FR-06 · VS-UX-VAR STOP `52:18` |
+| UX / état / variante | VS-UX-02/05/07 · variante STOP `52:18` |
+| Préconditions | Phase active (qualif, exécution ou analyse) |
+| Critères d’acceptation | **Given** phase active **When** STOP **Then** état `stoppé` · event journalisé · STOP ≠ Abandonner ≠ NO-GO · reprise éventuelle sous **nouveau GO** si re-exec |
+| Scénarios négatifs | **N12** STOP → immédiat · pas de continuation silencieuse |
+| Preuves attendues | Event stop · UI variante STOP |
+| Dépendances | VS-BL-US-004 / 018 / 023 selon phase |
+| Risque | Moyen |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Auto-reprise sans GO |
+| Notes delivery | Accessible clavier (VS-UX-FR-06) |
+
+### VS-BL-US-020 — Timeout ≠ GO
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E5 / C5.3 |
+| Acteur | Système / Harness |
+| Story | En tant que Morris, Je veux qu’un timeout stoppe sans autoriser, Afin d’éviter un GO implicite. |
+| Valeur démontrée | Anti-autorisation implicite |
+| Sources | VS-BR-11 · VS-CAND-09 · N11 |
+| UX / état / variante | VS-UX-05 · message timeout |
+| Préconditions | Exécution en cours avec timer |
+| Critères d’acceptation | **Given** exécution **When** timeout **Then** `stoppé` · message « timeout ≠ GO » · pas de spawn ultérieur sans nouveau GO |
+| Scénarios négatifs | **N11** timeout → stoppé · pas de succès implicite |
+| Preuves attendues | Event timeout · absence de GO dérivé |
+| Dépendances | VS-BL-US-018 |
+| Risque | Moyen |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Allongement silencieux du timeout comme succès |
+| Notes delivery | Valeur numérique timeout = hypothèse delivery / spike — non figée ici |
+
+### VS-BL-US-021 — Rapport et fichiers touchés
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E6 / C6.1 · C6.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux le rapport Cursor/harness et l’aperçu sanitisé, Afin de contrôler le résultat. |
+| Valeur démontrée | Contrôle post-exécution |
+| Sources | VS-FR-11 · VS-UX-06 · VS-AC-09 · N13 |
+| UX / état / variante | VS-UX-06 · frame `51:678` |
+| Préconditions | Fin d’exécution (succès ou échec rapporté) |
+| Critères d’acceptation | **Given** fin exécution **When** rapport disponible **Then** statut · fichiers touchés · remote=0 · réserves · CTA analyse conditionné |
+| Scénarios négatifs | **N13** Rapport absent → bloque analyse · message |
+| Preuves attendues | CursorExecutionReport · aperçu sanitisé |
+| Dépendances | VS-BL-US-018 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Affichage de secrets dans l’aperçu |
+| Notes delivery | Sanitisation obligatoire (lien US-028) |
+
+### VS-BL-US-022 — Review pack prérequis analyse / clôture
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E6 / C6.2 · C6.4 |
+| Acteur | Système / Morris |
+| Story | En tant que Morris, Je veux bloquer si pack incomplet, Afin d’éviter une clôture positive fallacieuse. |
+| Valeur démontrée | Garde-fou clôture positive |
+| Sources | VS-FR-17 · VS-BR-15 · VS-AC-06 · N14 |
+| UX / état / variante | VS-UX-06/08/10 (blocage CTA) |
+| Préconditions | Tentative d’analyse ou clôture positive |
+| Critères d’acceptation | **Given** pack incomplet **When** analyse ou clôture positive demandée **Then** refus explicite · pas de verdict positif · pas de CycleSummary « succès » |
+| Scénarios négatifs | **N14** pack incomplet → bloque clôture positive |
+| Preuves attendues | Event pack_incomplete_blocked |
+| Dépendances | VS-BL-US-021 |
+| Risque | Moyen |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Clôture positive forcée |
+| Notes delivery | Incr. B fixture · E réel |
+
+### VS-BL-US-023 — Analyse GPT verdict candidat
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E7 / C7.1 · C7.2 · C7.4 |
+| Acteur | Morris / GPT |
+| Story | En tant que Morris, Je veux une analyse GPT manuelle du paquet de preuves, Afin d’obtenir un verdict **candidat**. |
+| Valeur démontrée | Aide à la décision sans autorité GPT |
+| Sources | VS-FR-12 · VS-BR-14 · VS-CAND-08 · VS-UX-07/08 · VS-FR-16 · VS-BR-03 · N15 · VS-AC-06 · VS-AC-07 |
+| UX / état / variante | VS-UX-07 → VS-UX-08 · frames `51:816` / `51:954` |
+| Préconditions | Rapport + pack OK (US-021/022) |
+| Critères d’acceptation | **Given** rapport+pack OK **When** Lancer analyse **Then** appel GPT distinct de la qualif · compteur analyse · plafond « À définir » · no retry · verdict étiqueté **candidat** · pas de clôture auto |
+| Scénarios négatifs | **N15** Verdict invalide → rejet fail-closed · FinOps visible · correction/abandon |
+| Preuves attendues | GptVerdictCandidate · events FinOps analyse |
+| Dépendances | VS-BL-US-022 |
+| Risque | Élevé (live) |
+| Taille relative | L |
+| Gate Morris éventuel | G-VS-LIVE-GPT (analyse) |
+| Hors périmètre | Clôture automatique · retry auto |
+| Notes delivery | Incr. E ; fixture possible avant live |
+
+### VS-BL-US-024 — Afficher prouvé / non prouvé / écarts
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E7 / C7.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux voir prouvé/non prouvé/écarts/risques/réserves, Afin de décider en conscience. |
+| Valeur démontrée | Lisibilité du verdict candidat |
+| Sources | VS-FR-12 · VS-UX-08 · VS-UX-FR-08 · VS-BR-14 |
+| UX / état / variante | VS-UX-08 |
+| Préconditions | Verdict candidat valide |
+| Critères d’acceptation | **Given** verdict valide **When** affichage **Then** sections prouvé / non prouvé / écarts / risques / réserves / décisions Morris requises · étiquette candidat · pas de bouton clôture auto |
+| Scénarios négatifs | Section obligatoire manquante → pas de passage décision finale |
+| Preuves attendues | Screenshot VS-UX-08 |
+| Dépendances | VS-BL-US-023 |
+| Risque | Faible |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Reformulation comme décision Morris |
+| Notes delivery | — |
+
+### VS-BL-US-025 — Décision finale Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E8 / C8.1 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux clôturer, corriger, relancer (nouveau GO) ou abandonner, Afin de conclure le cycle. |
+| Valeur démontrée | Autorité de clôture humaine |
+| Sources | VS-FR-12 · VS-AC-07 · VS-AC-08 · VS-UX-09 · VS-UX-FR-09 · VS-BR-04 · VS-BR-17 |
+| UX / état / variante | VS-UX-09 · frame `51:1079` |
+| Préconditions | Verdict candidat affiché (ou chemin NO-GO/abandon documenté) |
+| Critères d’acceptation | **Given** verdict candidat **When** décision Morris **Then** MorrisFinalDecision enregistrée · conséquences explicites · pas d’actions Git groupées · pas de claim MVP/prod |
+| Scénarios négatifs | Verdict invalide → pas de clôture auto (VS-AC-07) |
+| Preuves attendues | MorrisFinalDecision journalisée |
+| Dépendances | VS-BL-US-024 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Merge auto · L5 · multi-projet |
+| Notes delivery | 4 actions finales distinctes du gate d’exécution |
+
+### VS-BL-US-026 — Clôture slice-only
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E8 / C8.2 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux une synthèse du slice courant uniquement, Afin d’éviter un faux portefeuille multi-projet. |
+| Valeur démontrée | Clôture honnête bornée |
+| Sources | VS-UX-10 · VS-UX-FR-17 · VS-BR-17 · VS-CAND-11 |
+| UX / état / variante | VS-UX-10 · frame `51:1204` · vue synthèse |
+| Préconditions | Décision finale de clôture |
+| Critères d’acceptation | **Given** clôture **When** affichage CycleSummary **Then** requestId, décision, MD, preuves, FinOps, traçabilité du **slice courant** · **aucun** portfolio multi-projet · aucun claim MVP/production-ready |
+| Scénarios négatifs | Tentative d’afficher autres projets → hors périmètre · non rendu |
+| Preuves attendues | CycleSummary slice-only |
+| Dépendances | VS-BL-US-025 |
+| Risque | Faible |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Portfolio · Studio complete · industrialisation |
+| Notes delivery | Correctif UX validé — ne pas rouvrir |
+
+### VS-BL-US-027 — Relance sous nouveau GO
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E8 / C8.3 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux relancer après STOP/échec uniquement avec nouveau GO, Afin de respecter les gates. |
+| Valeur démontrée | Ré-exécution gouvernée |
+| Sources | Doc 33 matrice GO / transitions `stoppé` · N11 · N12 · VS-BR-07 · VS-CAND-09 |
+| UX / état / variante | VS-UX-09 (Relancer) → retour gate |
+| Préconditions | État `stoppé` ou correction exigeant re-exec |
+| Critères d’acceptation | **Given** stoppé ou correction avec re-exec **When** Relancer **Then** nouveau contrat et/ou nouveau GO exigés · pas de réutilisation GO stale |
+| Scénarios négatifs | Relance sans nouveau GO → refus |
+| Preuves attendues | Event relaunch_requires_new_go |
+| Dépendances | VS-BL-US-019 · VS-BL-US-020 · VS-BL-US-025 |
+| Risque | Moyen |
+| Taille relative | S |
+| Gate Morris éventuel | Nouveau GO (humain) |
+| Hors périmètre | Réutilisation GO après timeout/STOP |
+| Notes delivery | — |
+
+### VS-BL-US-028 — Interdiction secrets & PII
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E9 / C9.1 · C9.2 |
+| Acteur | Système / Morris |
+| Story | En tant que Morris, Je veux zéro secret et zéro PII réelle dans UI/logs/preuves, Afin de respecter le RGPD minimal. |
+| Valeur démontrée | Sécurité / conformité minimale |
+| Sources | VS-FR-15 · VS-BR-16 · VS-CAND-13 · VS-AC-10 · VS-UX-FR-10 |
+| UX / état / variante | Transverse · tous écrans/preuves |
+| Préconditions | Toute surface UI ou preuve du slice |
+| Critères d’acceptation | **Given** n’importe quel écran/preuve **When** inspection **Then** pas de token/clé/secret · demande de test sans PII réelle · masquage si donnée sensible mock |
+| Scénarios négatifs | Fuite détectée → STOP livraison surface · correction obligatoire |
+| Preuves attendues | Checklist audit secrets · revue preuves |
+| Dépendances | Toutes stories UI/preuves |
+| Risque | Élevé (si oubli) |
+| Taille relative | S |
+| Gate Morris éventuel | — |
+| Hors périmètre | Stockage secrets en clair « pour debug » |
+| Notes delivery | Transverse Incr. A+ |
+
+### VS-BL-US-029 — Observabilité IDs + fuseau + source statut
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E10 / C10.1 · C10.2 · C10.3 · C10.4 |
+| Acteur | Système |
+| Story | En tant que Morris, Je veux requestId/correlationId/contractId/eventId, timestamps avec fuseau et source de statut, Afin de reconstruire sans faux succès. |
+| Valeur démontrée | RUN readiness minimale POC |
+| Sources | VS-CAND-15 · Doc 32 § observabilité · VS-UX-FR-12 · VS-AC-11 |
+| UX / état / variante | Transverse |
+| Préconditions | Événements produits |
+| Critères d’acceptation | **Given** événement **When** journal/UI **Then** IDs présents · timestamps avec TZ · source statut · durées séparées (qualif ≠ exec ≠ analyse) · aucun faux succès |
+| Scénarios négatifs | Event sans ID → non accepté comme preuve de progression |
+| Preuves attendues | Journal corrélé · export preuves |
+| Dépendances | VS-BL-US-002 |
+| Risque | Moyen |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Stack observabilité industrielle (Datadog, etc.) |
+| Notes delivery | POC local — pas d’industrialisation |
+
+### VS-BL-US-030 — FinOps plafond À définir (qualif + analyse)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | E2 / E7 · C2.4 · C7.4 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux voir les appels séparés et pouvoir arrêter avant une nouvelle consommation, Afin de maîtriser FinOps. |
+| Valeur démontrée | Contrôle consommation GPT |
+| Sources | VS-FR-16 · VS-CAND-14 · VS-BR-03 · VS-UX-FR-07 |
+| UX / état / variante | VS-UX-02 / VS-UX-07 · compteurs séparés |
+| Préconditions | Au moins un appel GPT (fixture ou live) |
+| Critères d’acceptation | **Given** appels GPT **When** UI **Then** compteurs qualif ≠ analyse · plafond affiché « À définir » · possibilité d’arrêter avant nouvel appel · pas de € inventé · pas de retry auto |
+| Scénarios négatifs | Dépassement si plafond numérique futur → refus nouvel appel (après G-VS-LIMIT) |
+| Preuves attendues | UI FinOps · events compteurs |
+| Dépendances | VS-BL-US-004 · VS-BL-US-023 |
+| Risque | Moyen (valeur absente) |
+| Taille relative | S |
+| Gate Morris éventuel | G-VS-LIMIT (valeur numérique) |
+| Hors périmètre | Inventer un plafond numérique |
+| Notes delivery | Réserve VS-CAND-14 conservée |
+
+### VS-BL-US-031 — Mapping dix états / quatre vues (cockpit)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | Transverse UX E1–E8 |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux naviguer les dix états dans les quatre vues P0, Afin de ne pas créer dix routes. |
+| Valeur démontrée | Preuve UX structurelle du slice |
+| Sources | VS-CAND-02 · VS-UX-01…10 · VS-UX-FR-01 · VS-UX-FR-02 · VS-AC-01 |
+| UX / état / variante | Quatre vues P0 · dix états |
+| Préconditions | Incrément A (mock) ou ultérieur |
+| Critères d’acceptation | **Given** Incrément A **When** parcours mock des 10 états **Then** chaque état accessible via vue mappée · **aucune** 5e route VS · shell P0 conservé |
+| Scénarios négatifs | Ajout route dédiée par état → STOP documentaire / arbitrage Morris |
+| Preuves attendues | Screenshots 10 états / 4 vues · éventuellement Playwright |
+| Dépendances | — |
+| Risque | Moyen (dérive routes) |
+| Taille relative | L |
+| Gate Morris éventuel | — |
+| Hors périmètre | Nouvelles routes · redesign shell |
+| Notes delivery | Prioritaire Incr. A |
+
+### VS-BL-US-032 — Variantes Loading / Erreur / STOP / GO invalide
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | Transverse UX |
+| Acteur | Morris |
+| Story | En tant que Morris, Je veux les variantes d’état non nominales, Afin de gérer Loading, Erreur, STOP et GO invalide. |
+| Valeur démontrée | Couverture UX non nominale |
+| Sources | VS-UX-VAR Loading `52:2` · Erreur `52:10` · STOP `52:18` · GO invalide `52:26` · N1 · N3 · N5 · N12 · VS-UX-FR-05/06/13 |
+| UX / état / variante | Variantes (pas des routes) |
+| Préconditions | Conditions variantes (mock ou réel) |
+| Critères d’acceptation | **Given** conditions variantes **When** affichage **Then** Loading / Erreur fail-closed / STOP / GO invalide distincts, accessibles, non fusionnés avec Abandonner/NO-GO |
+| Scénarios négatifs | Fusion Abandonner↔STOP↔GO invalide → non conforme · correction UI |
+| Preuves attendues | Screenshots 4 variantes |
+| Dépendances | VS-BL-US-005 · 006 · 012 · 019 · 031 |
+| Risque | Faible |
+| Taille relative | M |
+| Gate Morris éventuel | — |
+| Hors périmètre | Nouvelles variantes non arbitrées |
+| Notes delivery | Incr. A mock obligatoire |
+
+### VS-BL-US-033 — Scénarios négatifs N1–N16 (couverture transverse QA)
+
+| Champ | Contenu |
+|-------|---------|
+| Epic / Capability | Transverse QA |
+| Acteur | Morris / Système |
+| Story | En tant que Morris, Je veux que chaque N1–N16 soit testable via une story dédiée ou cette couverture QA, Afin d’éviter les trous. |
+| Valeur démontrée | Complétude QA fail-closed |
+| Sources | N1–N16 · Doc 33 §7 · matrice §9 |
+| UX / état / variante | Selon N (variantes / états concernés) |
+| Préconditions | Stories couvrantes primaires disponibles selon incrément |
+| Critères d’acceptation | **Given** matrice §9 **When** revue QA **Then** chaque N a story primaire + AC/négatif ou statut différé justifié · aucun N ignoré · fail-closed vérifié · preuve identifiée |
+| Scénarios négatifs | N sans couverture ni justification → STOP documentaire |
+| Preuves attendues | Matrice §9 + cas de test par N |
+| Dépendances | Stories 004–023, 016, etc. |
+| Risque | Moyen (dette si différé) |
+| Taille relative | L |
+| Gate Morris éventuel | — |
+| Hors périmètre | Inventer de nouveaux N hors doc 33 |
+| Notes delivery | Story transverse de traçabilité — ne remplace pas les AC des stories primaires |
+
+---
+
+## 8. Corrections de traçabilité (ce correctif)
+
+| Story | Avant (erreur) | Après (corrigé) |
+|-------|----------------|-----------------|
+| **VS-BL-US-003** | Sources `N16 partiel` (faux : N16 = perte session) | Étape 1 / abandon pré-qualif · FinOps 0 · VS-UX-01 · VS-FR-16 (conso=0) · VS-BR-03 · **sans N16** |
+| **VS-BL-US-011** | Sources `VS-FR-15/16 (UX)` (faux : FR-15=secrets, FR-16=FinOps) | **VS-FR-04** · **VS-UX-FR-15** · **VS-UX-FR-16** · VS-UX-04 · Doc 36 §8 · VS-CAND-04 · VS-BR-04 |
+| **VS-BL-US-016** | Couverture N16 OK mais à renforcer | N16 explicitement primaire ici |
+| **32 stories** | Champs manquants (Valeur, Préconditions, Négatifs, Preuves, Déps, Risque, Gate, Hors, Notes) | **16 champs** présents partout |
+
+---
+
+## 9. Matrice de couverture (recalculée)
+
+| Famille | ID source | Description courte | Story couvrante | Incrément | Preuve attendue | Statut | Réserve / justification |
+|---------|-----------|--------------------|-----------------|-----------|-----------------|--------|-------------------------|
+
+| VS-FR | VS-FR-01 | Saisie demande + requestId | 001,002 | A | UI requestId | couvert | — |
+| VS-FR | VS-FR-02 | Qualif invalide fail-closed | 006,033 | B/C | validateur + N1 | couvert | — |
+| VS-FR | VS-FR-03 | Qualif lisible avant GO | 007 | A/B | UI VS-UX-03 | couvert | — |
+| VS-FR | VS-FR-04 | GO/NO-GO/correction/abandon | 011,003,008,025 | A/B | UI 4 actions + abandons | couvert | 003=abandon pré-qualif ; 011=gate |
+| VS-FR | VS-FR-05 | GO ancré IDs/hash/HEAD… | 009,010 | A/B | dossier gate | couvert | — |
+| VS-FR | VS-FR-06 | Invalidation GO | 012 | B/D | bandeau + refus | couvert | — |
+| VS-FR | VS-FR-07 | Revalidation avant Cursor | 017 | B/D | harness | couvert | — |
+| VS-FR | VS-FR-08 | Cursor sandbox only | 018 | D | allowlist file | couvert | — |
+| VS-FR | VS-FR-09 | Pas d’écriture remote | 018,021 | D | remote=0 | couvert | — |
+| VS-FR | VS-FR-10 | STOP prioritaire | 019 | B/D | STOP event | couvert | — |
+| VS-FR | VS-FR-11 | Rapport prérequis analyse | 021,022 | B/E | rapport | couvert | — |
+| VS-FR | VS-FR-12 | Verdict candidat ; Morris clôture | 023–025 | E | verdict+décision | couvert | — |
+| VS-FR | VS-FR-13 | États dérivés | 014,016 | B | source statut | couvert | — |
+| VS-FR | VS-FR-14 | Harness sans Studio | 015 | B | CLI/preuves | couvert | — |
+| VS-FR | VS-FR-15 | Pas de secrets | 028 | A+ | audit | couvert | — |
+| VS-FR | VS-FR-16 | FinOps visible | 005,030,003 | A/C/E | compteurs | couvert | valeur plafond différée |
+| VS-FR | VS-FR-17 | Pack incomplet bloque | 022 | B/E | blocage | couvert | — |
+| VS-BR | VS-BR-01 | Rejet hors contrat | 006 | B/C | reject event | couvert | — |
+| VS-BR | VS-BR-02 | Pas de fallback permissif | 006,008 | B/C | AC négatifs | couvert | — |
+| VS-BR | VS-BR-03 | Pas de retry auto | 005,008,023,030 | C/E | UI no retry | couvert | — |
+| VS-BR | VS-BR-04 | GPT ne décide pas | 011,023,025 | A/E | étiquettes candidat | couvert | — |
+| VS-BR | VS-BR-05 | GO lié hash/HEAD… | 009,010,011 | B | ancrage | couvert | — |
+| VS-BR | VS-BR-06 | Changement → GO invalide | 012 | B/D | invalidation | couvert | — |
+| VS-BR | VS-BR-07 | Revalidation spawn | 017,027 | B/D | revalidation | couvert | — |
+| VS-BR | VS-BR-08 | Sandbox / hors allowlist STOP | 018 | D | N7 | couvert | — |
+| VS-BR | VS-BR-09 | Pas remote Git | 018 | D | remote=0 | couvert | — |
+| VS-BR | VS-BR-10 | STOP prioritaire | 019 | B/D | N12 | couvert | — |
+| VS-BR | VS-BR-11 | Timeout ≠ GO | 020 | D | N11 | couvert | — |
+| VS-BR | VS-BR-12 | Studio ≠ vérité | 013,014,016 | B | Option B | couvert | — |
+| VS-BR | VS-BR-13 | Harness autonome | 015 | B | VS-AC-12 | couvert | — |
+| VS-BR | VS-BR-14 | Verdict = candidat | 023,024 | E | étiquette | couvert | — |
+| VS-BR | VS-BR-15 | Pack incomplet | 022 | E | N14 | couvert | — |
+| VS-BR | VS-BR-16 | Secrets jamais affichés | 028 | A+ | audit | couvert | — |
+| VS-BR | VS-BR-17 | Claims interdits | 025,026 | E | CycleSummary | couvert | — |
+| VS-AC | VS-AC-01 | Parcours 1→10 | 031,001–026 | A–E | parcours mock/réel | couvert | agrégé multi-stories |
+| VS-AC | VS-AC-02 | GO refusé HEAD≠ | 012,017 | B/D | N3/revalidation | couvert | — |
+| VS-AC | VS-AC-03 | GO refusé hash≠ | 012,017 | B/D | N6 | couvert | — |
+| VS-AC | VS-AC-04 | Hors allowlist pas succès | 018 | D | N7 | couvert | — |
+| VS-AC | VS-AC-05 | STOP journalisé | 019 | B/D | event | couvert | — |
+| VS-AC | VS-AC-06 | Sans rapport/pack pas analyse OK | 021,022,023 | E | blocage | couvert | — |
+| VS-AC | VS-AC-07 | Verdict invalide pas clôture auto | 023,025 | E | N15 | couvert | — |
+| VS-AC | VS-AC-08 | Clôture via MorrisFinalDecision | 025 | E | décision | couvert | — |
+| VS-AC | VS-AC-09 | Pas preuve écriture distante | 018,021 | D | remote=0 | couvert | — |
+| VS-AC | VS-AC-10 | Pas secret UI/preuves | 028 | A+ | audit | couvert | — |
+| VS-AC | VS-AC-11 | États cohérents preuves | 014,016,029 | B | dérivé | couvert | — |
+| VS-AC | VS-AC-12 | Harness sans Studio | 015 | B | CLI | couvert | — |
+| N | N1 | Qualif GPT invalide | 006,032,033 | C | fail-closed | couvert | — |
+| N | N2 | Sources Git indisponibles | 004,033 | B | Truth Check STOP | couvert | — |
+| N | N3 | HEAD modifié après qualif | 012,032,033 | B/D | invalidation | couvert | — |
+| N | N4 | GO absent | 017,015,033 | B/D | refus spawn | couvert | — |
+| N | N5 | GO invalide/expiré | 012,017,032,033 | D | refus | couvert | — |
+| N | N6 | Contrat modifié après GO | 012,033 | D | refus | couvert | — |
+| N | N7 | Fichier hors allowlist | 018,033 | D | STOP/refus | couvert | — |
+| N | N8 | Action interdite | 018,033 | D | STOP | couvert | — |
+| N | N9 | Cursor indisponible | 018,033 | D | échec explicite | couvert | — |
+| N | N10 | Cursor exit≠0 | 018,021,033 | D | rapport échec | couvert | — |
+| N | N11 | Timeout | 020,027,033 | D | timeout≠GO | couvert | — |
+| N | N12 | STOP Morris | 019,027,032,033 | D | stoppé | couvert | — |
+| N | N13 | Rapport absent | 021,022,033 | D/E | blocage analyse | couvert | — |
+| N | N14 | Pack incomplet | 022,033 | E | blocage clôture | couvert | — |
+| N | N15 | Verdict GPT invalide | 023,033 | E | fail-closed | couvert | — |
+| N | N16 | Perte session Studio | 016,033 | B | reprise dérivée | couvert | Corrigé : plus US-003 |
+| VS-CAND | VS-CAND-01 | Scénario Markdown sandbox | 001,018 | A/D | MD sandbox | couvert | — |
+| VS-CAND | VS-CAND-02 | Parcours dix étapes | 031 | A | 10 états | couvert | — |
+| VS-CAND | VS-CAND-03 | Qualif visible avant GO | 007 | A/B | VS-UX-03 | couvert | — |
+| VS-CAND | VS-CAND-04 | GO lié hash/HEAD… | 009–012 | B | ancrage | couvert | — |
+| VS-CAND | VS-CAND-05 | Studio dérivé / harness autorité | 013,014 | B | Option B | couvert | — |
+| VS-CAND | VS-CAND-06 | Pas écriture remote | 018 | D | remote=0 | couvert | — |
+| VS-CAND | VS-CAND-07 | Cursor sandbox après GO | 018 | D | spawn | couvert | — |
+| VS-CAND | VS-CAND-08 | Verdict candidat | 023–025 | E | étiquette | couvert | — |
+| VS-CAND | VS-CAND-09 | STOP ; timeout≠GO | 019,020 | D | events | couvert | — |
+| VS-CAND | VS-CAND-10 | Harness autonome | 015 | B | CLI | couvert | — |
+| VS-CAND | VS-CAND-11 | Succès = VS-AC + critère central | 026,033 | E | AC | couvert | — |
+| VS-CAND | VS-CAND-12 | Séquencement UX→backlog→delivery | meta docs 38–40 | — | ce cycle | couvert | observé cycle |
+| VS-CAND | VS-CAND-13 | Pas PII / secrets | 028 | A+ | audit | couvert | — |
+| VS-CAND | VS-CAND-14 | Plafond + no retry | 005,030 | C/E | UI À définir | couvert | valeur numérique **différée** |
+| VS-CAND | VS-CAND-15 | IDs corrélation | 002,029 | A/B | IDs UI/journal | couvert | — |
+| VS-UX | VS-UX-01 | Nouvelle demande | 001,003,031 | A | frame 51:3 | couvert | — |
+| VS-UX | VS-UX-02 | Qualification en cours | 004,005,006,030,032 | A/C | 51:139 | couvert | — |
+| VS-UX | VS-UX-03 | Qualification proposée | 007,008 | A/B | 51:277 | couvert | — |
+| VS-UX | VS-UX-04 | Gate Morris | 009–012,011 | A/B | 51:415 | couvert | — |
+| VS-UX | VS-UX-05 | Exécution | 017–020 | B/D | 51:540 | couvert | — |
+| VS-UX | VS-UX-06 | Rapport | 021,022 | B/D | 51:678 | couvert | — |
+| VS-UX | VS-UX-07 | Analyse GPT | 023,030,032 | E | 51:816 | couvert | — |
+| VS-UX | VS-UX-08 | Verdict proposé | 024 | E | 51:954 | couvert | — |
+| VS-UX | VS-UX-09 | Décision Morris | 025,027 | E | 51:1079 | couvert | — |
+| VS-UX | VS-UX-10 | Clôture | 026 | A/E | 51:1204 | couvert | — |
+| VAR | VS-UX-VAR Loading `52:2` | Loading GPT | 005,032 | A/C | screenshot | couvert | — |
+| VAR | VS-UX-VAR Erreur `52:10` | Erreur fail-closed | 006,032 | A/C | screenshot | couvert | — |
+| VAR | VS-UX-VAR STOP `52:18` | STOP Morris | 019,032 | A/D | screenshot | couvert | — |
+| VAR | VS-UX-VAR GO invalide `52:26` | GO invalide | 012,032 | A/D | screenshot | couvert | — |
+
+**Contrôle :** aucune source orpheline · aucune story inexistante · N16 ≠ US-003 · VS-FR-15/16 ≠ sources des 4 actions gate.
+
+**VS-CAND-14 :** plafond **obligatoire** couvert ; valeur numérique **différée** (À définir) — justifié (G-VS-LIMIT).
+
+---
+
+## 10. Traçabilité rapide stories → sources
+
+| Story | FR/BR/AC/N/UX/CAND principaux |
+|-------|-------------------------------|
+| 001–003 | FR-01/16 · UX-01 · CAND-01/15 · abandon pré-qualif (**pas N16**) |
+| 004–008 | FR-02/03/04/16 · BR-01/02/03 · N1/N2 · UX-02/03 · VAR Loading/Erreur |
+| 009–012 | FR-04/05/06 · BR-04/05/06 · AC-02/03 · N3/N5/N6 · UX-04 · UX-FR-15/16 · VAR GO invalide |
+| 013–016 | FR-13/14 · BR-12/13 · AC-11/12 · **N16→016** · CAND-05/10 |
+| 017–020 | FR-07/08/09/10 · BR-07/08/09/10/11 · AC-04/05/09 · N4/N7–N12 · UX-05 · VAR STOP |
+| 021–022 | FR-11/17 · BR-15 · AC-06 · N13/N14 · UX-06 |
+| 023–024 | FR-12/16 · BR-14 · AC-06/07 · N15 · UX-07/08 · CAND-08 |
+| 025–027 | FR-12 · AC-07/08 · BR-04/17 · UX-09/10 · N11/N12 (relance) |
+| 028–030 | FR-15/16 · BR-03/16 · AC-10 · CAND-13/14/15 |
+| 031–033 | UX-01…10 · VAR · N1–N16 · AC-01 · CAND-02 |
+
+---
+
+## 11. Risques backlog
+
+| Risque | Mitigation |
+|--------|------------|
+| Adapter Studio↔harness sous-estimé | US-013 L + Incr. B avant live |
+| Confusion 10 routes | US-031 + DoR « pas de nouvelle route » |
+| Live trop tôt | Gates G-VS-LIVE-GPT / CURSOR |
+| MVP implicite | DoD + claims interdits |
+| Plafond non chiffré | Afficher « À définir » ; GO FinOps séparé |
+| Traçabilité erronée | Correctif US-003 / US-011 + matrice §9 |
+
+---
+
+## 12. Gates Morris (rappel)
+
+| Gate | Objet |
+|------|-------|
+| G-VS-BL | **Consommé** — produire backlog |
+| G-VS-BL-FIX | **Consommé** — correctif documentaire structure/traçabilité |
+| G-VS-BL-VAL | **Consommé** — validation backlog / `VS-BL-CAND-01`…`12` |
+| G-VS-BL-DOC | **Partiel** — commit/push/draft PR autorisés ; **merge** = GO distinct |
+| G-VS-DEL / G-VS-DEL-A | Delivery (Incr. A retenu, **non autorisé** ici) |
+| G-VS-LIVE-GPT | GPT live |
+| G-VS-LIVE-CURSOR | Cursor live |
+| G-VS-LIMIT | Valeur numérique plafond (**À définir**) |
+| G-VS-CI / MVP / IND | Interdits tant que non GO |
+
+---
+
+## 13. Synthèse quantitative
+
+| Élément | Nombre |
+|---------|--------|
+| Epics | 10 |
+| Capabilities | 34 |
+| User stories | **33** (`VS-BL-US-001` … `033`) |
+| Champs obligatoires / story | **16** |
+| Lignes matrice couverture | 91 |
+| Incréments A–E | 5 — séquencement **validé** ; Incr. A **retenu** ; delivery = GO distinct (voir `39`) |
+| Références traçabilité corrigées (min.) | US-003 · US-011 (+ champs 32 stories) |
diff --git a/projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md b/projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md
new file mode 100644
index 0000000..47116c9
--- /dev/null
+++ b/projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md
@@ -0,0 +1,239 @@
+# SFIA Studio — Story map et séquencement du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `39-poc-vertical-slice-story-map-and-sequencing.md` |
+| **Cycle** | 5 — Backlog / user stories |
+| **Profil** | Standard |
+| **Statut** | `validated-for-versioning` — story map et séquencement A–E **validés Morris** ; incrément A **retenu** ; delivery non autorisé |
+| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
+| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
+| **Companion** | [`38`](./38-poc-vertical-slice-backlog.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
+| **Décisions Morris** | `VS-BL-CAND-01` (A→E) · `VS-BL-CAND-03` (Incr. A premier périmètre) validées |
+
+> Story map des **dix états** sur **quatre vues P0**.
+> Séquencement A–E validé ; **delivery** de chaque incrément soumis à GO Morris distinct.
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
+| 01 | 001, 002, 003 (abandon pré-qualif), 031 | — |
+| 02 | 004, 005, 006, 030, 032 | 001 |
+| 03 | 007, 008 | 004–006 |
+| 04 | 009, 010, 011 (4 actions · VS-FR-04 / VS-UX-FR-15/16), 012, 032 | 007, 009 |
+| 05 | 013*, 014, 017, 018, 019, 020, 032 | 011 GO, 017 |
+| 06 | 021, 022 | 018 |
+| 07 | 023, 030, 032 | 021–022 |
+| 08 | 024 | 023 |
+| 09 | 025, 027 | 024 |
+| 10 | 026 | 025 |
+| Transverse | 015, **016 (N16 reprise session)**, 028, 029, 033 | Continu |
+
+\*013 adaptateur commence Incr. B, critique avant live.
+
+**Traçabilité N16 :** couverture primaire = **VS-BL-US-016** (+ US-033 QA) — **pas** US-003.
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
+## 6. Incréments A–E (séquencement validé Morris ; delivery non autorisé)
+
+> **Incrément A** = premier périmètre delivery **futur** retenu (`VS-BL-CAND-03`). Aucun GO delivery consommé ici.
+
+### Incrément A — Cockpit statique gouverné (**retenu** — premier périmètre futur)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Prouver mapping 10 états / 4 vues avec données mockées |
+| Stories | 001–003, 007*, 010*, 011*, 026*, 031, 032 (UI mock), 028 (checklist) |
+| Live | Aucun |
+| Sortie | Parcours UI navigable ; Abandonner visible ; clôture slice-only mock ; **pas** 10 routes |
+| Gate suivant | Revue visuelle + GO Incr. B (après G-VS-DEL-A) |
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
+**Critères « slice prouvé » (`VS-BL-CAND-10` validée) :** A–E complétés sous gates + VS-AC-01…12 avec réserves documentées — **≠** MVP ; déclaration future uniquement après deliveries sous GO.
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
+| Incréments A–E | Séquencement **validé** ; Incr. A **retenu** ; delivery = GO distinct |
+| Versionnement | Commit / push / draft PR autorisés ; merge = GO distinct |
diff --git a/projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md b/projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md
new file mode 100644
index 0000000..1a1a2ae
--- /dev/null
+++ b/projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md
@@ -0,0 +1,156 @@
+# SFIA Studio — Decision pack backlog vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `40-poc-vertical-slice-backlog-decision-pack.md` |
+| **Cycle** | 5 — Backlog / user stories |
+| **Profil** | Standard |
+| **Statut** | `validated-for-versioning` — `VS-BL-CAND-01` à `VS-BL-CAND-12` **validées Morris** ; versionnement autorisé ; merge et delivery = gates distincts |
+| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
+| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
+| **Companions** | [`38`](./38-poc-vertical-slice-backlog.md) · [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) |
+| **Décisions Morris** | Backlog 38–40 validé · A→E validé · Incr. A retenu · commit/push/draft PR autorisés |
+
+> Observations / hypothèses / options / recommandations.
+> `VS-BL-CAND-01`…`12` = **VALIDÉES** (Morris). Merge PR, delivery et live restent soumis à GO distincts.
+
+---
+
+## 1. Synthèse
+
+Ce cycle versionne un backlog borné (33 stories × **16 champs**, 10 epics, incréments A–E) pour le vertical slice POC, sans code ni live. Versionnement autorisé ; **merge** et **delivery** non autorisés ici.
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
+| Négatifs | Différer N* | **Couvrir dans stories primaires + US-033** (N16→016) | Matrice §38 recalculée |
+| Adaptateur | Spécifier API maintenant | **Story L + spike tech ultérieur** | Pas de protocole ici |
+
+---
+
+## 5. Recommandations (statut post-validation)
+
+1. ~~Valider d’abord `VS-BL-CAND-*`~~ → **FAIT** (Morris).
+2. Versionner 38–40 via draft PR → **en cours** (ce cycle).
+3. Delivery minimal = Incr. A puis B avant tout live — **GO delivery distinct**.
+4. Ne pas paralléliser C et D.
+5. Exiger G-VS-LIVE-GPT / CURSOR distincts.
+6. Garder harness autonome comme chemin de non-régression.
+7. Ne pas ouvrir CI/MVP/industrialisation dans ce backlog.
+8. Capitaliser spikes existants plutôt que réécrire les ports.
+
+---
+
+## 6. Décisions `VS-BL-CAND-*` — **VALIDÉES Morris**
+
+| ID | Décision (validée) | Impact | Statut | Dette |
+|----|-------------------|--------|--------|-------|
+| **VS-BL-CAND-01** | Incréments A→B→C→D→E comme séquence delivery | Ordre BeB | **VALIDÉE** | Faible |
+| **VS-BL-CAND-02** | Priorité epics : E1–E3 UI → E4 adaptateur → E5–E8 live → E9/E10 transverse | Focus | **VALIDÉE** | Moyenne |
+| **VS-BL-CAND-03** | Premier périmètre delivery = Incrément A (cockpit mock) | Preuve UX | **VALIDÉE** | Faible |
+| **VS-BL-CAND-04** | Stratégie mock (A/B) puis live (C/D/E) | Sécurité FinOps | **VALIDÉE** | Faible |
+| **VS-BL-CAND-05** | Adaptateur fin = story L en Incr. B, protocole en cycle archi ultérieur | Option B | **VALIDÉE** | Acceptable |
+| **VS-BL-CAND-06** | Couverture N1–N16 via stories primaires + US-033 (N16 = US-016, **pas** US-003) | Qualité | **VALIDÉE** | Faible |
+| **VS-BL-CAND-07** | Gate obligatoire avant GPT live (Incr. C) | Sécurité | **VALIDÉE** | Faible |
+| **VS-BL-CAND-08** | Gate obligatoire avant Cursor live (Incr. D) | Sécurité | **VALIDÉE** | Faible |
+| **VS-BL-CAND-09** | Plafond GPT : UI « À définir » jusqu’à G-VS-LIMIT (ne pas inventer) | FinOps | **VALIDÉE** | Nulle |
+| **VS-BL-CAND-10** | Critères « slice prouvé » = VS-AC-01…12 + A–E sous gates + réserves ; **≠** MVP | Acceptation | **VALIDÉE** | Discipline |
+| **VS-BL-CAND-11** | Stratégie tests : Vitest/Playwright app (A) + tests harness (B–D) + preuves live sous flags | QA | **VALIDÉE** | Acceptable POC |
+| **VS-BL-CAND-12** | 33 stories / 10 epics = granularité retenue (pas fusion silencieuse) | Traçabilité | **VALIDÉE** | Faible |
+
+---
+
+## 7. Impacts / risques / dette
+
+| Thème | Impact | Risque | Dette |
+|-------|--------|--------|-------|
+| Backlog Standard | Guide delivery | Sur-spécification | Maintenir alignement 38↔32–37 |
+| Traçabilité | Fiabilité delivery | Mapping artificiel (ex. N16→003) | Audit correctif + matrice 91 lignes |
+| Structure stories | DoR 16 champs | Stories incomplètes | Correctif : 0 story incomplète |
+| Incr. A mock | Preuve UX rapide | Sous-estimer adaptateur | B obligatoire avant live |
+| Pas de CI | POC local | Régression non détectée | Futur G-VS-CI |
+| Spikes existants | Accélère C/D | Réserves spike | Documenter dans DoD |
+
+---
+
+## 8. Statut de validation Morris
+
+| Élément | Statut |
+|---------|--------|
+| Backlog 38–40 (fond) | **Validé** |
+| `VS-BL-CAND-01`…`12` | **Validées** |
+| Séquencement A→E | **Validé** |
+| Incrément A premier périmètre | **Retenu** |
+| Commit / push / draft PR | **Autorisés** (ce cycle) |
+| Merge PR | **Non autorisé** — GO distinct |
+| Delivery / live / archi / CI / MVP | **Non autorisés** |
+
+---
+
+## 9. Gates
+
+| Gate | Objet | Statut |
+|------|-------|--------|
+| G-VS-BL-VAL | Validation backlog / VS-BL-CAND | **Consommé** |
+| G-VS-BL-DOC | Commit/push/draft PR | **Consommé partiel** (merge restant) |
+| G-VS-BL-MERGE | Merge PR 38–40 | **Requis** |
+| G-VS-DEL-A | Delivery Incrément A | Requis |
+| G-VS-LIVE-GPT | Incrément C | Requis |
+| G-VS-LIVE-CURSOR | Incrément D | Requis |
+| G-VS-LIMIT | Valeur plafond GPT | Requis (valeur **À définir**) |
+| G-VS-CI / MVP / IND | Interdits sans GO | Interdits |
+
+---
+
+## 10. Verdict
+
+`SFIA STUDIO VERTICAL SLICE BACKLOG PR CREATED — MORRIS MERGE DECISION REQUIRED`
+
+### Interdits (sans nouveau GO)
+
+READY FOR REVIEW · MERGED · READY FOR DELIVERY · MVP DEFINED · PRODUCTION READY · API SELECTED · L5 GLOBAL PROVEN · GPT LIVE · CURSOR LIVE
+
+---
+
+## 11. Décisions Morris attendues (suivantes)
+
+1. Autoriser ou non le **merge** de la draft PR 38–40.
+2. Autoriser éventuellement ready-for-review (GO distinct si requis).
+3. **Ne pas** traiter ce pack comme GO delivery, live ou architecture.

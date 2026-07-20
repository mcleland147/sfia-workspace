# SFIA Studio — Contrat UX/UI OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `51-ops1-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Typologie** | POC / UX / UI / DOC / VALIDATION |
| **Gate d’ouverture** | `G-OPS1-UX` — **consommé** |
| **Gate de validation** | `G-OPS1-UX-VAL` — **consommé** — Morris — 2026-07-20 16:52 CEST — **VALIDATION AVEC RÉSERVES** |
| **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
| **Branche** | `design/sfia-studio-ops1-ux-ui` |
| **Statut** | `ux-ui-validated-with-reservations` |
| **Companions** | [`52`](./52-ops1-visual-contract-and-figma-spec.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**validés avec amendements** ; `G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) |
| **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`50`](./50-ops1-functional-architecture-decision-pack.md) |
| **Figma** | fileKey `lrjA1WEyRpL05vKR8k29LO` · page `UX-B — OPS1` (`61:2`) — **référence visuelle desktop validée avec réserves** |
| **Horodatage production** | 2026-07-20 16:15 CEST |
| **Horodatage validation Morris** | 2026-07-20 16:52 CEST |
| **Code / live / backlog** | **Aucun** |

> Contrat UX/UI OPS1 **validé avec réserves** sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
> Documents `51`–`53` = **baseline UX/UI OPS1** validée avec réserves.
> Page Figma `61:2` = référence visuelle **desktop** validée ; tablette/mobile **non validées** (UX-R01).
> Hérite des décisions validées `41`–`50` **sans les réinterpréter**.
> Dix états storyboard ≠ dix routes. Conversation = espace principal. Chat ≠ GO.
> Réserves UX-R01…UX-R04 et FD-CAND-13/15/20/26 **maintenues**. Aucun cycle suivant ouvert automatiquement.

---

## 1. Objet, portée, utilisateurs et valeur

### Objet

Définir l’expérience utilisateur OPS1 : conversation GPT réelle multi-tours, action Markdown gouvernée (Campus360), gate Morris, harness, exécution Cursor bornée, preuves, post-exécution, clôture et fail-closed — sous forme de surfaces, états, microcopy et règles d’interaction.

### Utilisateurs

| Acteur | Rôle UX |
|--------|---------|
| **Morris** | Décideur exclusif (GO / NO-GO / CORRIGER / ABANDONNER / STOP / CLOSE) |
| **GPT** | Interlocuteur conversationnel ; propositions **candidates** uniquement |
| **Harness** | Revalidation indépendante — états visibles, non décidants |
| **Cursor** | Exécuteur borné — feedback de progression / STOP |

### Valeur

Rendre **visible et non ambiguë** la séparation conversation / action / autorisation, afin qu’aucune formulation ni bouton ne laisse croire qu’un message GPT vaut GO.

### Portée / non-objectifs

**In :** surfaces, zoning, parcours, a11y, responsive, FinOps surfaces (sans chiffres), microcopy, critères de validation UX, traçabilité CAP/FLOW/FR.

**Out :** code, stack, API, backlog, delivery, live, architecture technique, résolution des réserves FD-CAND-13/15/20/26, claim MVP / production / OPS1 PROVEN.

---

## 2. Héritages validés (41–50) — non réinterprétables

1. Conversation réelle, libre, contextuelle, multi-tours.
2. Chat ≠ formulaire ; chat ≠ GO.
3. Action facultative et séparée (`ProposedAction`).
4. Morris seul autorise action, STOP et clôture.
5. Harness obligatoire avant exécution.
6. Cursor strictement borné (contrat + allowlist).
7. Git = vérité (HEAD, fichiers, diffs) ; store = journal.
8. Campus360 = contexte exclusif du pilote ; éligible ≠ autorisation globale.
9. Allowlist exhaustive 1..n ; extension post-GO = nouveau gate.
10. Rapport incomplet = fail-closed.
11. Conversation post-exécution obligatoire.
12. Analyse GPT = `candidateOnly`.
13. CLOSED immuable ; consultation lecture seule ; pas de mutation silencieuse.
14. FinOps numériques, cartographie Campus360, branche, live, CI, isolation = **OPEN**.

---

## 3. Principes UX OPS1

1. **Conversation-first** — le fil est l’espace principal.
2. **Séparation visuelle stricte** — conversation ≠ panneau d’action ≠ gate.
3. **Autorité visible** — seules les surfaces Morris portent GO / STOP / CLOSE.
4. **Allowlist lisible avant GO** — chemins + modes (consult/create/modify).
5. **Fail-closed lisible** — erreurs, timeouts, refus harness non masqués.
6. **États ≠ routes** — storyboard dense, navigation applicative sobre (≤4 vues P0).
7. **Copilote ≠ décision** — suggestions advisory seulement (héritage shell P0).
8. **Réserves affichables** — jamais résolues silencieusement dans l’UI.
9. **Anti-claims** — aucun wording MVP / production / READY FOR DELIVERY / OPS1 PROVEN.
10. **Accessibilité** — statut non uniquement par couleur ; focus visible ; annonces d’état.

---

## 4. Architecture de l’information

```text
Shell (rail · topbar · copilote advisory)
  └─ Workspace OPS1
       ├─ Conversation Workspace          (principal)
       ├─ Context / Sources Git
       ├─ Action candidate + Allowlist    (séparé)
       ├─ Gate Morris                     (séparé)
       ├─ Harness / Exécution / STOP
       ├─ Rapport · preuves · diffs
       ├─ Post-exécution + AnalysisCandidate
       ├─ Décision finale / CLOSE
       └─ FinOps strip · erreurs · historique
```

**Règle :** dix états fonctionnels ne créent **pas** dix routes. Mapping candidat vers vues P0 :

| Vue applicative P0 | États OPS1-UX couverts |
|--------------------|------------------------|
| Session / Conversation | 01, 02, 03, 04, VAR-A/E/F/G |
| Gate / Décision | 05, 09, VAR-D |
| Cycle actif | 06, 07, 08, VAR-B/C |
| Synthèse / clôture | 10, VAR-F |

---

## 5. Carte des surfaces

| Surface | Finalité | Interdit |
|---------|----------|----------|
| Conversation | Fil multi-tours Morris/GPT/système | Porter un GO |
| Sources Git | Sélection/visibilité des refs explicites | Ingest dépôt entier silencieux |
| Action candidate | `ProposedAction` structuré | Autoriser exécution |
| Allowlist | Liste exhaustive 1..n | « Tout Campus360 » |
| Gate Morris | 4 actions + motif + ancrages | GO implicite |
| Harness | État revalidation | Contournement UX |
| Exécution | Progression Cursor + STOP | Étendre allowlist |
| Rapport / diffs | Consolidé + par fichier | Clôturer si incomplet |
| Post-exec | Conversation obligatoire | Auto-CLOSE |
| AnalysisCandidate | Badge candidat | Décision automatique |
| CLOSED | Lecture seule | Mutation silencieuse |
| FinOps | Compteurs / alerte / confirm | Montants inventés |
| STOP / erreur | Fail-closed | Assimiler à Abandonner |

---

## 6. Parcours nominal — conversation sans action

1. Ouverture / reprise session (FLOW-01/02).
2. Fil réel multi-tours (FLOW-03/04).
3. Clarifications sans `ProposedAction`.
4. Option `ACTION_NOT_REQUIRED` explicite (CAP-07) — **OPS1-UX-02**.
5. Poursuite conversationnelle ou CLOSE sans exécution.

---

## 7. Conversation → action candidate

1. Besoin clarifié.
2. Apparition panneau **Action candidate — NON AUTORISÉE** (séparé du chat).
3. Sources Git visibles.
4. Allowlist exhaustive proposée (placeholder chemins si SCENARIO-VAL OPEN).
5. Aucun CTA d’exécution dans le fil.

**Frame :** OPS1-UX-03 (`61:275`).

---

## 8–9. Raffinement action

| Mode | Surface | Frame |
|------|---------|-------|
| Par chat | Messages qui **mettent à jour** l’objet action (sans GO) | OPS1-UX-04 |
| Par surface structurée | Édition champs / allowlist / intention | OPS1-UX-04 |

Toute modification d’allowlist **avant** GO reste dans le raffinement. Après GO : nouvel objet + nouveau gate (FR-030).

---

## 10. Gate Morris

Surface indépendante — **OPS1-UX-05** (`61:411`) + strip 4 actions (`62:2`).

| Action | Effet UX | ≠ |
|--------|----------|---|
| **GO** | Autorise exécution du contrat ancré | Message GPT |
| **NO-GO** | Refuse sans exécuter | STOP |
| **CORRIGER** | Renvoie au raffinement | Abandonner |
| **ABANDONNER** | Clôt sans exécution | NO-GO / STOP |
| **STOP** | Interrompt activité en cours (toujours accessible si pertinent) | Abandonner |

Ancrages visibles avant GO : HEAD, hash contrat, allowlist gelée, motif.

---

## 11. Revalidation harness

État dédié ou bandeau sur cycle actif : `VALIDATING` / `REFUSED` / `OK`.
Refus = fail-closed visible (VAR-B). Pas de retry automatique.

---

## 12. Exécution Cursor et feedback

**OPS1-UX-06** : progression, fichiers touchés (allowlist), **STOP** dominant.
Timeout ≠ GO. Pas d’extension d’allowlist en cours.

---

## 13. Rapport, preuves et diffs multi-fichiers

**OPS1-UX-07** : vue consolidée + détail par fichier ; preuves Git (diffs) ; incomplet = blocage clôture.

---

## 14. Conversation post-exécution

**OPS1-UX-08** : fil obligatoire après exécution (FR-019) ; rapport accessible à côté ; AnalysisCandidate badge `candidat`.

---

## 15. Analyse candidate et décision finale

**OPS1-UX-09** : CLOSE / CORRECT / RELAUNCH / ABANDON (selon FR) ; résumé + réserves listées ; pas d’auto-CLOSE.

---

## 16. CLOSE, lecture seule et continuation candidate

**OPS1-UX-10** : session CLOSED immuable ; consultation OK.
**Continuation** : CTA candidat « Continuer / session liée » en **placeholder** (FD-CAND-13 OPEN) — **ne résout pas** le mécanisme.

---

## 17. Historique et reprise

Reprise = restauration journal + cohérence Git ; ambiguïté → read-only / STOP (VAR-F).
Historique reconstructible (CAP-21) — pas seconde vérité Git.

---

## 18. FinOps UX

Surfaces candidates uniquement (VAR-A / VAR-E) :

- compteurs conversation / structuration / analyse ;
- alerte de seuil ;
- confirmation avant coût élevé ;
- budget restant ;
- état **« valeur numérique À définir »** (FD-CAND-15).

**Aucun** montant, modèle, plafond ou seuil chiffré inventé.

---

## 19. Erreurs, timeouts et fail-closed

| Situation | UX |
|-----------|-----|
| Harness refuse | Bandeau FAIL-CLOSED ; pas d’exécution |
| Rapport incomplet | Blocage CLOSE |
| Timeout | Message explicite ; ≠ GO ; pas de retry auto |
| Hors allowlist | Alerte PN-06 ; pas de GO possible |
| STOP | Prioritaire, accessible |

Frames : VAR-B, VAR-C, VAR-D, VAR-G.

---

## 20. Accessibilité

- Navigation clavier complète des panneaux et CTA.
- Ordre de focus : topbar → conversation → action → gate → STOP.
- Focus visible (anneau contrasté).
- Annonces d’état (OPEN, EXECUTING, STOPPED, FAILED, CLOSED).
- Auteurs et statuts **texte + couleur** (pas couleur seule).
- Contraste cible AA sur CTA critiques et STOP.
- Diffs lisibles (scroll, monospaced, labels fichier).
- Drawers/panneaux : Esc ferme sans déclencher GO.
- Distinction chat / action / gate renforcée par labels et régions.

---

## 21. Responsive

| Breakpoint | Comportement candidat |
|------------|----------------------|
| Desktop 1440×1024 | Shell 3 colonnes (rail · workspace · copilote) — **référence storyboard** |
| Tablette ~1024 | Copilote en drawer ; action/gate en panneaux empilés |
| Mobile ~390 | Conversation full-bleed ; action/gate = bottom sheets ; STOP sticky |

Aucune implémentation code dans ce cycle.

---

## 22. Microcopy candidate (extrait)

| Contexte | Formulation |
|----------|-------------|
| Fil | « Fil réel multi-tours — chat ≠ GO » |
| Action | « Action candidate — NON AUTORISÉE » |
| Allowlist | « Allowlist exhaustive (1..n) — éligible ≠ autorisation globale » |
| Gate | « GO — Autoriser exécution bornée » |
| STOP | « STOP — Interrompre l’activité en cours » |
| FinOps | « Valeurs numériques À définir » |
| Candidat | Badge « candidat » sur analyse / verdict |
| CLOSED | « Lecture seule — aucune mutation silencieuse » |
| Continuation | « Continuer (mécanisme OPEN — FD-CAND-13) » |

Interdit : « GPT a validé », « Lancer » dans le fil, « Tout Campus360 autorisé », montants inventés.

---

## 23. États vides / loading / erreur / indispo

| État | Affichage |
|------|-----------|
| Vide conversation | Prompt d’ouverture + sources non sélectionnées |
| Loading GPT | Indicateur génération ; compteur FinOps si actif |
| Loading harness | « Revalidation indépendante… » |
| Exec Cursor | Progression + STOP |
| Erreur / FAILED | Bandeau fail-closed |
| Indispo Git / GPT | Message + session read-only / STOP |

---

## 24. Traçabilité CAP / FLOW / FR / composants

| UX | CAP | FLOW | FR | Composants |
|----|-----|------|----|------------|
| Conversation | 03–05 | 03–05 | 001–003 | Conversation Workspace |
| Sources | 06 | 05 | 014,021 | Context Selector · Git Truth |
| Action / allowlist | 07–09 | 06–09 | 022,026–032 | Action Proposal Manager |
| Gate | 10–11 | 10–13 | 004,008 | Morris Gate Manager |
| Harness / exec | 12–14 | 14–18 | 005,025 | Harness · Contract · Cursor |
| Rapport | 15–16 | 20 | 015–017,031 | Evidence Collector |
| Post-exec | 17–18 | 21,23 | 019–020 | CW · Gate |
| CLOSE / reprise | 19–21 | 02,24 | 006 | Session Manager · Audit |
| FinOps | — | 29 | 023 | FinOps Guard |
| STOP / erreurs | 12 | 18,27 | 016 | Error/STOP Coordinator |

---

## 25. Critères de validation UX (`G-OPS1-UX-VAL`) — **satisfaits avec réserves**

Confirmés sous validation Morris (2026-07-20 16:52 CEST) — sous réserves UX-R01…UX-R04 :

1. Séparation visuelle conversation / action / gate vérifiable sur frames.
2. Quatre actions Morris + STOP distincts.
3. Allowlist exhaustive visible avant GO.
4. Chat ne porte aucun CTA d’exécution ambigu.
5. Post-exécution conversationnelle présente.
6. CLOSED lecture seule ; continuation = placeholder réserve.
7. FinOps sans chiffres inventés.
8. Frames + dimensions confirmées MCP.
9. A11y / responsive documentés.
10. Réserves listées ; anti-claims respectés.
11. Aucun code / backlog / tech arch introduit.
12. Décisions `OPS1-UX-CAND-01…20` **VALIDATED WITH RESERVATIONS** (doc 53).

---

## 26. Réserves maintenues (affichables)

### Réserves UX (`UX-R*`) — ouvertes sous validation

| ID | Réserve |
|----|---------|
| **UX-R01** | Produire les déclinaisons tablette/mobile avant toute implémentation responsive |
| **UX-R02** | Nettoyer les microcopies héritées de P0 avant delivery |
| **UX-R03** | Formaliser le design system avant industrialisation multi-écrans |
| **UX-R04** | Réserve transverse : FD-CAND-15 / live / CI / isolation / tech-arch restent à router ; FD-CAND-13/20/26 traités au scénario — UX-R01…R03 **maintenues** |

### Réserves héritées (FD / transverses)

- Continuation après CLOSE (FD-CAND-13) — **levée** : continuation liée, jamais de réouverture silencieuse (voir [`54`](./54-ops1-operational-scenario.md) §4bis).
- FinOps numériques (FD-CAND-15) — **maintenue** jusqu’au gate FinOps/live.
- Cartographie / catégories Campus360 (FD-CAND-20) — **levée pour OPS1** (voir [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md)).
- Détails opérationnels Campus360 (FD-CAND-26) — **levée pour Campus360 OPS1** ; `03` protégé par défaut.
- Convention de branche scénario — **validée avec amendements** ([`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) §6).
- Preuves GPT / Cursor live ; CI distante ; isolation OS/réseau — **routées** vers architecture technique (non conçues ici).

---

## 27. Anti-claims

Ce document **n’affirme pas** : READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · responsive implémenté · design system publié · FinOps résolu · Campus360 entièrement autorisé · live / CI / isolation validés · backlog ouvert · architecture technique ouverte ou validée · autorisation d’implémentation code.

La validation UX/UI **ne vaut pas** validation technique, live, MVP ou production.

---

## 28. Verdict

`ux-ui-validated-with-reservations`

`SFIA STUDIO OPS1 UX/UI VALIDATED WITH RESERVATIONS`

Gate `G-OPS1-UX` consommé. Gate `G-OPS1-UX-VAL` **consommé** — Morris — 2026-07-20 16:52 CEST — **GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES**.
Baseline UX/UI OPS1 : docs `51`–`53` + page Figma `61:2` (desktop). Réserves UX-R01…UX-R04 ouvertes. Aucun cycle suivant ouvert automatiquement.

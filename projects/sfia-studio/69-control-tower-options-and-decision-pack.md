# SFIA Studio — Control Tower — Options et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `69-control-tower-options-and-decision-pack.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | **`validated`** — Option C hybride **retenue** ; AF-Option C reformulée **validée** ; suite Fast Track : `70`–`72` |
| **Complète** | `66`, `67`, `68` |
| **Gate de sortie attendue** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |

> Aucune option n’est validée. La recommandation ci-dessous est **candidate**. Morris décide.

---

## 1. Questions structurantes — réponses candidates

| # | Question | Réponse candidate |
|---|----------|-------------------|
| 1 | Studio = interface seule ou aussi orchestrateur ? | **Les deux** dans la cible Control Tower : cockpit + couche d’orchestration **visible**. À arbitrer vs AF-Option C historique (« Studio ≠ orchestrateur »). |
| 2 | « Studio ≠ orchestrateur » encore compatible ? | **Tension documentaire**. Compatible seulement si « orchestrateur » = moteur opaque hors Studio ; **incompatible** si Studio doit être le point unique de pilotage visible. Décision Morris requise à la validation de cadrage. |
| 3 | Où s’exécute l’orchestration ? | Candidat : **backend Studio** (policy + adapters), UI pour visualisation/décision ; Cursor pour exécution locale ; Git = vérité. |
| 4 | Rôle OpenAI Responses API ? | Raisonnement, clarification, structuration, appels d’**outils bornés** ; **jamais** autorisation ni shell libre. |
| 5 | Comment GPT reçoit les outils ? | Tool calling / function calling filtré par session (allowlist d’outils + scopes). Mécanisme exact = option A/B/C. |
| 6 | GitHub : MCP / API / adapter ? | **Indécis** ; hybride candidat (API ou MCP derrière adapter Studio). |
| 7 | Git local : MCP ou fonctions internes ? | Candidat : **adapter interne** (contrôle allowlist/worktree) ; MCP possible plus tard. |
| 8 | Cursor CLI déclenché / suivi ? | Adapter Studio : seal contrat → spawn CLI → stream/digest logs → collect result (héritage OPS1 I5). |
| 9 | MCP Cursor existants ? | **Consommés par Cursor**, pas exposés à GPT Studio comme outils génériques. |
| 10 | Rapport Cursor → Studio auto ? | Collecte post-run par adapter → persistance → résumé conversation (héritage I6). |
| 11 | Matérialisation des gates ? | UI gate + décision persistée + ancrage contractHash (OPS1 I3). |
| 12 | Empêcher exécution implicite ? | Fail-closed ; intention ≠ autorisation ; GO explicite ; pas d’auto-retry silencieux. |
| 13 | Secrets ? | Backend-only ; jamais au modèle ; redaction logs ; connecteurs désactivables. |
| 14 | Isolation projets / worktrees ? | Un worktree d’action par tentative ; allowlist chemins ; pas de partage implicite. |
| 15 | Journalisation ? | Append-only (ou équivalent) corrélé session/action/attempt/report. |
| 16 | Session interrompue ? | Reprise lecture d’état persisté ; pas de relance d’exécution sans nouveau GO. |
| 17 | Timeouts / crashs / partiels ? | Statuts FAILED / REPORT_INCOMPLETE ; reprise manuelle gouvernée. |
| 18 | Séparer lecture / write local / write remote ? | Classes d’opérations + gates distincts (voir `68`). |
| 19 | Read-only au 1er incrément ? | Tool Gateway Git (+ GitHub read) ; pas de write remote. |
| 20 | Preuve minimale vers MVP ? | POC T2–T4 : outils read + Cursor sans copier-coller + réinjection + gates intacts. |
| 21 | OPS1 réutilisable ? | Session, conversation live, ActionCandidate, gates, allowlist, contrat, exécution CLI, report/continuation, UX contrats. |
| 22 | OPS1 obsolète ? | Fragments « Studio ≠ orchestrateur » si Control Tower validé ; évent. UX trop étroite « vertical slice » si élargissement cockpit ; pas le code gates/fail-closed. |
| 23 | Conserver le terme OPS1 ? | Candidat : **capitaliser OPS1 comme fondation**, nommer la trajectoire suivante **Control Tower** (éviter OPS2 ambigu tant que cible non validée). |
| 24 | Expérience client / investisseur ? | Une UI : demande → sources → gate → Cursor → rapport → Git — sans plugins ChatGPT. |
| 25 | Monétisable vs outil interne ? | Gouvernance + audit + démontrabilité + réduction d’erreurs ; pas seulement un chat wrapper. |

---

## 2. Option A — Intégrations propriétaires internes

**Description.** Studio implémente directement Git local, GitHub, Cursor, OpenAI tool calling.

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Contrôle total ; UX cohérente ; pas de dépendance MCP pour le cœur |
| Limites | Coût de build élevé ; maintenance multi-API |
| Dette | Adapters propriétaires à long terme |
| Sécurité | Surface maîtrisée si allowlists strictes |
| Portabilité | Faible vers d’autres runtimes |
| Complexité | Haute côté Studio |
| Coûts | Eng. élevés ; API fournisseurs |
| Dépendances | OpenAI, GitHub API, Cursor CLI |
| UX | Potentiellement la meilleure intégration |
| Monétisation | Produit différencié possible |
| Réversibilité | Moyenne (réécriture adapters) |
| Automatisation | Haute sous gates |
| Lock-in | Studio + fournisseurs directs |

---

## 3. Option B — Architecture MCP dominante

**Description.** Studio s’appuie sur des serveurs MCP pour la majorité des systèmes.

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Standardisation ; réutilisation écosystème |
| Limites | Maturité / confiance MCP variables ; gouvernance plus difficile |
| Dette | Chaîne MCP à certifier |
| Sécurité | Risque MCP non approuvés ; besoin catalogue strict |
| Portabilité | Bonne si MCP stables |
| Complexité | Orchestration + policy sur MCP |
| Coûts | Moins de code custom, plus d’intégration |
| Dépendances | Serveurs MCP + hosts |
| UX | Variable selon serveurs |
| Monétisation | Différenciation = policy + UX, pas les MCP |
| Réversibilité | Moyenne |
| Automatisation | Haute si MCP write |
| Lock-in | Écosystème MCP |

---

## 4. Option C — Architecture hybride (exemple candidat)

**Exemple :**

- Git local : adapter interne
- Cursor : adapter interne via CLI
- GitHub : API directe **ou** MCP derrière adapter
- Figma : indirect via Cursor MCP
- OpenAI : Responses API + tool calling
- Policy engine Studio commun

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Réutilise OPS1 ; contrôle où ça compte ; MCP seulement là où utile |
| Limites | Deux styles d’intégration à documenter |
| Dette | Adapters + évent. bridges MCP |
| Sécurité | Policy unique ; MCP Cursor hors surface GPT |
| Portabilité | Correcte (adapters) |
| Complexité | Moyenne-haute, progressive |
| Coûts | Échelonnés (T2→T6) |
| Dépendances | Comme A, plus option MCP GitHub |
| UX | Cockpit unifié possible |
| Monétisation | Bonne (gouvernance + démo) |
| Réversibilité | Bonne si frontières claires |
| Automatisation | Progressive sous gates |
| Lock-in | Réduit vs A pur / B pur |

---

## 5. Option D — Maintien OPS1 enrichi

**Description.** Évolution progressive de l’existant sans refonte structurelle immédiate (pas de « tour de contrôle » explicite).

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Faible risque immédiat ; capitalise I1–I6 |
| Limites | Ne résout pas la fragmentation ChatGPT↔Cursor pour un tiers ; réserve I7-R01 non adressée |
| Dette | Accrue si on empile sans vision |
| Sécurité | Déjà fail-closed localement |
| Portabilité | Limitée |
| Complexité | Plus bas court terme |
| Coûts | Plus bas court terme |
| Dépendances | OPS1 actuel |
| UX | Slice opérationnel, pas cockpit |
| Monétisation | Faible sans démo intégrée |
| Réversibilité | Haute court terme |
| Automatisation | Comme aujourd’hui |
| Lock-in | Trajectoire OPS1 |

---

## 6. Recommandation candidate (≠ décision Morris)

### Synthèse

**Recommander d’explorer l’Option C (hybride)** comme direction de cadrage, avec **réutilisation maximale d’OPS1**, et **Option D uniquement** comme filet si Morris refuse toute reformulation de cible.

### Utile maintenant ?

Oui : cadrer la cible après I7-R01 évite de livrer I8+ dans un cul-de-sac produit.

### Plus simple possible ?

Oui : T2 Tool Gateway **read-only** + T3 Cursor Adapter sans write GitHub.

### Quelle dette ?

Adapters internes (Git/Cursor) + tension AF-Option C à trancher ; éviter dette MCP précoce.

### Quelle capacité prouver avant de construire davantage ?

1. Lecture Git bornée depuis la conversation.
2. Transfert Cursor sans copier-coller.
3. Réinjection rapport + gates intacts.

### Réutiliser d’OPS1

Session, live GPT, ActionCandidate, gates 4 actions, allowlist, contract hash, exécution CLI, report/continuation, microcopies gouvernance, journal events.

### Abandonner / conserver / refactorer

| Action | Élément |
|--------|---------|
| Conserver | Doctrine SFIA, fail-closed, gates, Git vérité, anti-claims |
| Refactorer | Frontière « Studio ≠ orchestrateur » → cockpit + orchestration visible |
| Abandonner (si Control Tower validé) | Trajectoire « enrichir OPS1 sans vision cockpit » comme seule voie |
| Ne pas abandonner | Code I1–I6 utile ; preuves ; allowlist Campus360 patterns |

### Gate Morris suivante

`GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`
Puis, si validé : gate d’architecture fonctionnelle (T1) — **non ouverte** ici.

---

## 7. Décisions Morris nécessaires

1. Valider ou non la **vision Control Tower** (cockpit + orchestration visible).
2. Trancher la compatibilité / reformulation d’**AF-Option C**.
3. Choisir une **direction d’options** (A / B / C / D) — sans figer l’archi technique.
4. Autoriser ou non un **POC T2–T4** après validation cadrage.
5. Conserver ou non le **libellé OPS1** pour la suite.
6. Clarifier l’ambition **MVP candidat** (interne vs démontrable tiers) — sans figer le MVP.

**Non décidé ici :** architecture technique cible, fournisseurs, backlog delivery, MVP, industrialisation, promotion SFIA v3.0, automatisation L5.

---

## 8. Matrice OPS1 → Control Tower (candidat)

| Bloc OPS1 | Statut candidat |
|-----------|-----------------|
| Session + journal | Réutiliser |
| Live OpenAI | Réutiliser / étendre outils |
| ActionCandidate + gates | Réutiliser |
| Allowlist / chemins | Réutiliser / généraliser |
| Cursor CLI adapter | Réutiliser / intégrer transfert auto |
| Report + continuation | Réutiliser |
| UX slice I1–I6 | Étendre vers cockpit |
| « Studio ≠ orchestrateur » | À reformuler si CT validé |
| Campus360-only slice | Élargir progressivement (pas immédiat) |

# 02 — Principes candidats et gouvernance humaine

| Champ | Valeur |
|-------|--------|
| Statut | Principes **candidats produit** ; gouvernance cadrage **consolidée** |
| Baseline | SFIA v2.6 |
| Note | Enforcement doctrinal runtime = niveaux **E0–E4** (D4 / doc 25) — clôturé cadrage |

## 1. Règle de lecture

Les principes ci-dessous sont **candidats**. Aucun n’est automatiquement validé. Toute promotion en doctrine v3.0 exige un GO humain explicite.

Terminologie cible : remplacer « Morris décide » par **« la décision structurante appartient à un décideur humain habilité »**.

## 2. Douze principes candidats

### P1 — Projet-first
Toute interaction Studio est rattachée à un projet, ou à une opération bornée de création / import.

**Raison :** éviter le chat orphelin.  
**Risque si absent :** dérive conversationnelle, effets hors contexte.

### P2 — Cycle-aware
Toute conversation de travail est rattachée à un cycle actif ou à une phase de qualification de cycle.

**Raison :** SFIA est cycle-driven (routing guide v2.6).  
**Risque :** actions sans typologie / profil / gates.

### P3 — Human-governed
Les arbitrages structurants exigent une décision humaine explicite (gate UI ou équivalent audité).

**Raison :** héritage L0 / fail-closed v2.6.  
**Risque :** automatisation de décision.

### P4 — AI-reasoned
GPT conserve la liberté d’analyse, reformulation, questionnement et recommandation.

**Raison :** valeur SFIA = raisonnement, pas scripts de réponses.  
**Risque inverse :** questionnaire rigide / réponses préfabriquées.

### P5 — Deterministic-effects
Les effets (fichiers, Git, Cursor, remote) passent par contrats et policies déterministes.

**Raison :** acquis OPS1 (allowlist, contractHash, revalidation).  
**Risque :** prompt libre = exécution libre.

### P6 — Git-truth
Git reste la source de vérité documentaire et technique ; la mémoire conversationnelle ne remplace pas Git.

**Raison :** operating model + guardrails v2.6.  
**Risque :** doctrine « dans le chat ».

### P7 — Explainable-routing
Chaque routage de cycle ou transition doit être explicable (sources, critères, alternatives écartées).

**Raison :** routing guide.  
**Risque :** boîte noire.

### P8 — No-free-chat
Studio ne répond pas aux demandes sans relation cohérente avec le projet ou le cycle (sinon clarification / blocked).

**Raison :** gouvernance produit.  
**Risque :** usage généraliste.

### P9 — Fail-closed
En cas d’incertitude sur une action ou une autorité : bloquer ou demander clarification.

**Raison :** guardrails + OPS1.  
**Risque :** deny-by-default affaibli.

### P10 — Progressive-automation
Automatiser d’abord préparation, collecte, contrôle et exécution bornée — avant tout arbitrage structurant.

**Raison :** trajectoire L0–L5 à redécouper (voir doc 07).  
**Risque :** L5 décisionnel.

### P11 — Doctrine-as-source
La doctrine reste versionnée et lisible dans Git (Markdown).

**Raison :** v2.6 baseline ; éviter seconde doctrine TS.  
**Risque :** divergence Markdown/code.

### P12 — Contracts-as-runtime
Les objets structurés (états, gates, schémas) servent à l’exécution sans devenir une doctrine indépendante.

**Raison :** moteur de contexte canonique (74).  
**Risque :** constantes métier dispersées.

## 3. Modèle de gouvernance humaine candidat

| Niveau | Qui | Quoi |
|--------|-----|------|
| L-H0 | Décideur humain habilité | Gates structurants, adoption baseline, merge doctrine |
| L-H1 | Approbateur opérationnel | GO action Cursor, GO write borné, GO remote selon policy |
| L-H2 | Responsable de projet | Trajectoire, priorités, clôture projet |
| L-S | Studio / moteurs | Préparation, contrôle, blocage, audit |
| L-A | Agents (GPT/Cursor) | Raisonnement / exécution sous contrat — **jamais** gate structurant |

## 4. Formes de décision humaine

1. **Gate explicite UI** (préféré pour effets).  
2. **DecisionRequest** structurée (arbitrage documenté).  
3. **Refus / report / refine** (pas seulement GO).  
4. **Expiration / stale** → revalidation obligatoire.

Une phrase conversationnelle **n’équivaut jamais** à un gate.

## 5. Lien v2.6

Conserver : fail-closed, Git-truth, human validation first, prompt-as-contract, review handoff required pour rapports Cursor.  
Adapter : terminologie individu → rôles ; orchestration manuelle → Studio-native.  
Ne pas remplacer sans GO : documents canoniques v2.6.

## 6. Clôture / suite

P1–P12 restent le socle candidat.  
L’enforcement opérationnel est fixé à **E0–E4** (25).  
Suite : `GO VALIDATION DOCUMENTAIRE` puis éventuel V3-MODELED — **pas** adoption.

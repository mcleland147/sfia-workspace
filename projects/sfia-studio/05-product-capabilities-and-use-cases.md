# SFIA Studio — Capacités produit et cas d’usage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `05-product-capabilities-and-use-cases.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-validated` |
| **Décisions** | D-VAL-1 à D-VAL-11 |

> Définit **ce que le produit doit permettre**. Pas de backlog, user stories détaillées, écrans, composants ni architecture.

---

## 1. Acteurs

| Acteur | Nature | Rôle |
|--------|--------|------|
| Morris | Humain | Opérateur primaire ; décideur L0 |
| Futur opérateur autorisé | Humain (candidat) | Usage ultérieur éventuel |
| GPT | Système | Qualification, analyse, verdict |
| Cursor | Système | Exécution repository bornée |
| Git | Système | Source de vérité / historique |
| Mécanisme d’orchestration (candidat) | Système | Contrats, permissions, gates, stop conditions |

---

## 2. Carte de capacités produit candidates

Légende statut : **Cible** = produit long terme · **POC potentiel** · **MVP potentiel** · **Ultérieur** — sans décider le périmètre MVP.

### C1 — Gestion d’une intention

| Champ | Contenu |
|-------|---------|
| Finalité | Capturer une demande Morris en intention de cycle |
| Utilisateur | Morris |
| Valeur | Entrée standardisée |
| Dépendances | UI métier |
| Risques | Ambiguïté non qualifiée |
| Statut | Cible / MVP potentiel |

### C2 — Qualification SFIA

| Champ | Contenu |
|-------|---------|
| Finalité | Qualifier cycle, profil, typologie, profondeur |
| Utilisateur | Morris + GPT |
| Valeur | Routage conforme v2.6 |
| Dépendances | Template / routing / GPT |
| Risques | Mauvais profil (Critical implicite) |
| Statut | Cible / MVP potentiel / POC potentiel (partiel) |

### C3 — Lecture du contexte repository

| Champ | Contenu |
|-------|---------|
| Finalité | Lire branche, HEAD, status, fichiers pertinents |
| Utilisateur | Morris / GPT / Cursor |
| Valeur | Repo-informed |
| Dépendances | Git |
| Risques | Contexte incomplet / trop large |
| Statut | Cible / POC potentiel |

### C4 — Sélection et chargement des sources canoniques

| Champ | Contenu |
|-------|---------|
| Finalité | Identifier et charger template, guides, docs projet |
| Utilisateur | GPT (assisté) / Morris |
| Valeur | Conformité sources |
| Dépendances | Git main / projet |
| Risques | Sources obsolètes |
| Statut | Cible / POC potentiel |

### C5 — Génération d’un contrat Cursor

| Champ | Contenu |
|-------|---------|
| Finalité | Produire un prompt/contrat borné |
| Utilisateur | GPT → Morris |
| Valeur | Exécution contrôlée |
| Dépendances | Template §structure |
| Risques | Contrat incomplet |
| Statut | Cible / POC potentiel / MVP potentiel |

### C6 — Présentation des gates Morris

| Champ | Contenu |
|-------|---------|
| Finalité | Afficher gates / GO-NOGO explicites |
| Utilisateur | Morris |
| Valeur | Pas d’auto-arbitrage |
| Dépendances | Orchestration candidate |
| Risques | Contournement UI |
| Statut | Cible / MVP potentiel / POC potentiel |

### C7 — Suivi d’une exécution

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre l’exécution Cursor bornée |
| Utilisateur | Morris |
| Valeur | Visibilité / arrêt |
| Dépendances | Cursor ; orchestration |
| Risques | Exécution opaque |
| Statut | Cible / POC potentiel |

### C8 — Collecte rapport et review pack

| Champ | Contenu |
|-------|---------|
| Finalité | Récupérer rapport / review pack |
| Utilisateur | Morris / GPT |
| Valeur | Preuve exploitable |
| Dépendances | Cursor ; fichiers locaux |
| Risques | Pack incomplet |
| Statut | Cible / POC potentiel / MVP potentiel |

### C9 — Analyse et verdict GPT

| Champ | Contenu |
|-------|---------|
| Finalité | Analyser le retour ; proposer verdict |
| Utilisateur | GPT → Morris |
| Valeur | Décision informée |
| Dépendances | GPT ; pack |
| Risques | Verdict biaisé |
| Statut | Cible / MVP potentiel |

### C10 — Enregistrement des décisions

| Champ | Contenu |
|-------|---------|
| Finalité | Tracer décisions Morris (ancrage Git) |
| Utilisateur | Morris |
| Valeur | Auditabilité |
| Dépendances | Git |
| Risques | Décision hors Git |
| Statut | Cible / MVP potentiel |

### C11 — Visibilité Git (branche, HEAD, status, diff)

| Champ | Contenu |
|-------|---------|
| Finalité | Afficher l’état Git réel |
| Utilisateur | Morris |
| Valeur | Anti-dérive |
| Dépendances | Git |
| Risques | Affichage trompeur |
| Statut | Cible / POC potentiel |

### C12 — Historique de cycles

| Champ | Contenu |
|-------|---------|
| Finalité | Consulter l’historique des cycles |
| Utilisateur | Morris |
| Valeur | Continuité / REX |
| Dépendances | Git + éventuel état dérivé |
| Risques | Seconde vérité |
| Statut | Cible / Ultérieur / MVP potentiel |

### C13 — Permissions et stop conditions

| Champ | Contenu |
|-------|---------|
| Finalité | Appliquer permissions, chemins interdits, stops |
| Utilisateur | Orchestration + Morris |
| Valeur | Sécurité / conformité |
| Dépendances | Mécanisme déterministe candidat |
| Risques | Contournement |
| Statut | Cible / POC potentiel |

### C14 — Observabilité et diagnostic

| Champ | Contenu |
|-------|---------|
| Finalité | Logs, audit, reprise, diagnostic |
| Utilisateur | Morris / exploitation |
| Valeur | RUN readiness |
| Dépendances | Journalisation |
| Risques | Bruit / fuite |
| Statut | Cible / Ultérieur / POC potentiel (limité) |

### C15 — Suivi des coûts

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre coûts modèles / tokens / exécutions |
| Utilisateur | Morris |
| Valeur | FinOps |
| Dépendances | Fournisseurs IA |
| Risques | Mesure incomplète |
| Statut | Cible / Ultérieur / MVP potentiel |

### C16 — Administration des paramètres produit

| Champ | Contenu |
|-------|---------|
| Finalité | Paramétrer chemins, profils par défaut, connexions bornées |
| Utilisateur | Morris |
| Valeur | Opérabilité |
| Dépendances | Config locale sécurisée |
| Risques | Secrets mal gérés |
| Statut | Cible / Ultérieur |

---

## 3. Cas d’usage prioritaires candidats

### UC1 — Lancer un cycle documentaire borné

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention documentaire |
| Acteur | Morris |
| Préconditions | Repo accessible ; baseline connue |
| Résultat | Cycle qualifié prêt à cadrage/prompt |
| Gates | Qualification profil ; périmètre |
| Erreurs / stops | Repo inaccessible ; Critical non justifié |
| Preuves | Intention + qualification tracées |

### UC2 — Préparer un prompt Cursor repo-informed

| Champ | Contenu |
|-------|---------|
| Déclencheur | Qualification OK |
| Acteur | GPT + Morris |
| Préconditions | Sources lues ; Git truth check |
| Résultat | Contrat Cursor complet |
| Gates | Revue contrat avant exécution |
| Erreurs / stops | Sources absentes ; contrat incomplet |
| Preuves | Prompt + inventaire sources |

### UC3 — Exécuter une analyse read-only

| Champ | Contenu |
|-------|---------|
| Déclencheur | Contrat read-only |
| Acteur | Cursor |
| Préconditions | Permissions lecture |
| Résultat | Rapport d’analyse sans écriture hors périmètre |
| Gates | Confirmation read-only |
| Erreurs / stops | Tentative d’écriture |
| Preuves | Status / diffs nuls hors lecture |

### UC4 — Contrôler un review pack

| Champ | Contenu |
|-------|---------|
| Déclencheur | Fin d’exécution |
| Acteur | Morris + GPT |
| Préconditions | Pack présent |
| Résultat | Complétude / verdict proposés |
| Gates | Acceptation pack |
| Erreurs / stops | Contenu manquant |
| Preuves | Checklist complétude |

### UC5 — Soumettre une décision Morris

| Champ | Contenu |
|-------|---------|
| Déclencheur | Verdict proposé |
| Acteur | Morris |
| Préconditions | Preuves disponibles |
| Résultat | GO / NO-GO / amendement tracé |
| Gates | Décision humaine obligatoire |
| Erreurs / stops | Auto-approve interdit |
| Preuves | Décision ancrée |

### UC6 — Préparer une PR readiness

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention de PR |
| Acteur | Morris + Cursor/GPT |
| Préconditions | Diff borné ; G7 ou GO équivalent |
| Résultat | Dossier PR readiness |
| Gates | G7 / readiness |
| Erreurs / stops | Fichiers hors périmètre |
| Preuves | Diff check / inventaire |

### UC7 — Suivre un cycle interrompu

| Champ | Contenu |
|-------|---------|
| Déclencheur | Interruption / stop |
| Acteur | Morris |
| Préconditions | État partiel journalisé |
| Résultat | État d’interruption visible |
| Gates | Reprise ou abandon |
| Erreurs / stops | État perdu |
| Preuves | Journal / status Git |

### UC8 — Reprendre un cycle depuis Git

| Champ | Contenu |
|-------|---------|
| Déclencheur | Reprise après interruption |
| Acteur | Morris |
| Préconditions | Vérité Git cohérente |
| Résultat | Cycle repris sans seconde vérité |
| Gates | Confirmation HEAD/branche |
| Erreurs / stops | Divergence non résolue |
| Preuves | Truth check |

---

## 4. Parcours opérateur macro

```text
Intention
  → Qualification
  → Cadrage / contrat
  → Autorisation (gate Morris)
  → Exécution
  → Revue (pack / analyse)
  → Décision Morris
  → Clôture (ancrage Git / éventuel handoff)
```

Parcours **fonctionnel**, non visuel. Aucune maquette.

---

## 5. Matrice capacités × cycles SFIA (potentielle)

| Capacité | Cycles potentiellement touchés |
|----------|--------------------------------|
| C1–C2 | 1 Cadrage |
| C3–C5 | 1, 13, delivery doc |
| C6–C7 | Transverse (tous cycles exécutés) |
| C8–C9 | 9 QA, 13 PR readiness, 15 REX |
| C10–C12 | Transverse gouvernance |
| C13 | 10 Sécurité |
| C14 | 12 Observabilité / RUN |
| C15 | FinOps transverse |
| C16 | Administration transverse |

**Règles :** couverture **progressive** ; aucun cycle forcé ; **pas de sélection MVP** ici ; POC = lot multi-capacités, pas un cycle autonome.

---

## 6. Hors capacité produit

- Arbitrage automatique des gates Morris.
- Modification silencieuse de méthode / baseline.
- Auto-merge / auto-push projet.
- Gestion opaque des secrets.
- Vérité durable hors Git.
- Couverture obligatoire immédiate des 15 cycles.

---

## 7. Questions ouvertes

1. Quelles capacités sont indispensables au premier MVP (à décider plus tard) ?
2. Quelle granularité d’historique de cycles sans créer de seconde vérité ?
3. Quelles permissions minimales pour Cursor en POC ?
4. Quelles surfaces UX prioritaires après capacité map ?

---

## 8. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — capacités et cas d’usage — cadrage détaillé — Morris décide.*

# Famille de prompts — Delivery QA / Test

**Type :** Prompts Cursor / IA  
**Domaine :** QA / Test — delivery incrémental SFIA v2.0  
**Statut :** Draft — capitalisation méthode  
**Usage :** Réutilisable  
**Standard associé :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`  
**Dossier :** `prompts/qa/`

> **Référence d'application :** Chantiers360 v2 — delivery INC-01+ ; gates QA-G0 à QA-G4.

---

## 1. Objectif

Cette famille couvre le **cycle QA/Test transverse** par incrément delivery :

- qualifier la testabilité ;
- préparer stratégie et scénarios ;
- implémenter et exécuter tests automatisés ;
- produire rapports et analyser réserves ;
- valider QA readiness avant PR readiness ;
- contrôler non-régression post-merge.

Ces prompts **ne doivent pas** :

- remplacer la validation Morris (Morris valide les preuves, ne déroule pas les tests) ;
- ouvrir PR / push / merge sans GO explicite ;
- modifier backlog, design, captures hors périmètre QA ;
- consulter Chantiers360 V0 ;
- inférer GO PR depuis tests passants seuls.

---

## 2. Règles générales

- **Une tâche Cursor** = un périmètre explicite (stratégie, scénarios, implémentation, exécution, réserves, readiness, post-merge).
- **Git** = source de vérité — rapports et tests versionnés.
- **Morris** = GO/NO-GO QA, arbitrage réserves, GO PR / merge.
- **Tests passants ≠ validation Morris.**

---

## 3. Prompts de la famille

### PROMPT-QA-001 — Qualifier testabilité projet

**Usage :** Bootstrap ou cadrage — QA-G0.

**Entrées :** framing, besoin, hypothèses, exclusions, maturité projet.

**Sortie :** note testabilité — points vérifiables, ambiguïtés, risques, besoin QA renforcée ou standard.

**Garde-fous :** pas de tests ; pas de delivery ; pas de backlog modifié.

---

### PROMPT-QA-002 — Préparer stratégie QA incrément

**Usage :** Début delivery INC-n — après archi technique (QA-G1).

**Entrées :** `delivery-increments.md`, US de l'incrément, `acceptance-criteria.md`, stack, contraintes.

**Sortie :** `qa-strategy.md` — périmètre, outillage, niveaux test, traçabilité US/AC.

**Garde-fous :** scope strict incrément ; pas d'INC suivant.

---

### PROMPT-QA-003 — Générer scénarios recette métier

**Usage :** Avant ou pendant implémentation tests — alignement AC.

**Entrées :** US incrément, acceptance criteria, parcours UX, réserves connues.

**Sortie :** `test-scenarios.md` — scénarios happy/non-happy, données, résultats attendus, lien AC.

**Garde-fous :** scénarios documentaires ; pas d'exécution sans QA-004/005.

---

### PROMPT-QA-004 — Implémenter tests automatisés incrément

**Usage :** Delivery INC-n — QA-G2.

**Entrées :** `test-scenarios.md`, `qa-strategy.md`, code incrément, commandes projet.

**Sortie :** tests dans `app/` (ou chemin documenté), `qa-implementation-report.md`.

**Garde-fous :** périmètre US incrément ; pas de refactor hors scope ; pas de PR.

---

### PROMPT-QA-005 — Exécuter tests et produire rapport QA

**Usage :** Fin delivery INC-n — avant QA readiness.

**Entrées :** branche delivery, scripts `lint`/`build`/`test`, scénarios, commit.

**Sortie :** `qa-execution-report.md` — commandes, pass/fail, US couvertes, logs, verdict proposé.

**Garde-fous :** rapport factuel ; pas de GO Morris implicite.

---

### PROMPT-QA-006 — Analyser réserves QA

**Usage :** Après exécution — préparation décision Morris.

**Entrées :** `qa-execution-report.md`, écarts backlog/code, AC non couverts.

**Sortie :** `qa-reserves.md` — bloquante / majeure / mineure, impact, recommandation GO/NO-GO.

**Garde-fous :** Morris arbitre ; QA propose seulement.

---

### PROMPT-QA-007 — Valider QA readiness avant PR readiness

**Usage :** QA-G3 — gate obligatoire avant PR readiness.

**Entrées :** tous artefacts `08-qa-test/inc-<nn>/`, rapport exécution, réserves.

**Sortie :** `qa-readiness.md` — checklist QA-G3, verdict GO / GO WITH RESERVES / NO-GO, preuves pour Morris.

**Garde-fous :** pas de PR readiness sans QA-G3 ; pas de création PR.

---

### PROMPT-QA-008 — Post-merge non-régression

**Usage :** Après merge incrément — QA-G4.

**Entrées :** `main` à jour, commit merge, suite tests critique, périmètre incrément.

**Sortie :** rapport post-merge QA — non-régression OK / écarts / actions.

**Garde-fous :** read-only sur code sauf fix explicite ; pas de nouvel incrément.

---

## 4. Séquence recommandée par incrément

```
QA-001 (bootstrap/cadrage, une fois)
    → QA-002 (début INC-n)
    → QA-003 (scénarios)
    → [delivery code]
    → QA-004 (implémentation tests)
    → QA-005 (exécution)
    → QA-006 (réserves)
    → QA-007 (QA readiness → Morris)
    → [PR readiness → PR → merge Morris]
    → QA-008 (post-merge)
```

---

## 5. Références

- `sfia-v2-delivery-qa-test-standard.md`
- `sfia-v2-automation-levels.md`
- `qa-tester-prompt-family.md` (revues amont — complémentaire, pas substitut)

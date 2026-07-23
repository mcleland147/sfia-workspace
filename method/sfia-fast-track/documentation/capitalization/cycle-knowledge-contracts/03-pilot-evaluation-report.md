# Évaluation des pilotes CKC (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `03-pilot-evaluation-report.md` |
| **Statut** | `method-candidate` |
| **Méthode** | Simulation raisonnée (pas d’appel OpenAI) |
| **Cas transversal** | SFIA Studio — « Créer une application de suivi de contrats » |

---

## 1. Protocole de test

Pour chaque pilote : situation **claire** + situation **ambiguë**.
Critères : challenge · questions adaptatives · maturité explicable · anti-conclusion prématurée · anti-stéréotype · anti-checklist · transition raisonnable · compatibilité UX 87/88.

Échelle : ●●● bon · ●● partiel · ● faible.

---

## 2. Résultats par pilote

### 2.1 Cadrage

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Challenge | ●●● | ●●● |
| Questions adaptatives | ●●● | ●●● |
| Maturité explicable | ●●● | ●●● |
| Anti-prématuré | ●●● | ●●● |
| Anti-stéréotype | ●●● | ●●● |
| Anti-checklist | ●●● | ●● |
| Transition | ●●● → conception/D1 | ●●● rester / pause |
| Compat UX | ●●● | ●●● |

**Observation.** Sur l’ambigu « suivi de contrats », le CKC empêche l’enchaînement archi/delivery et alimente directement les dimensions UX 87 (intention, questions, maturité exploratoire).

### 2.2 Conception fonctionnelle

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Challenge | ●●● | ●●● |
| Questions | ●●● | ●●● |
| Maturité | ●●● | ●●● |
| Anti-prématuré | ●●● | ●●● (bloque stack) |
| Anti-checklist | ●● | ●● |
| Transition | ●●● | ●● rester |
| Compat UX | ●●● | ●●● |

**Réserve.** Risque de dérouler trop de dimensions si GPT n’applique pas la règle « 1–3 questions ». Mitigation déjà dans posture.

### 2.3 Architecture technique

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Challenge | ●●● | ●●● |
| Alternatives | ●●● | ●●● |
| Maturité | ●●● | ●●● |
| Anti-astronaut | ●●● | ●●● |
| Anti-checklist NFR | ●● | ●● |
| Transition | ●●● | ●●● retour cadrage/conception |
| Compat UX | ●● (décisions seulement) | ●● |

### 2.4 QA / validation

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Evidence | ●●● | ●●● refuse verdict |
| Anti-claims | ●●● | ●●● |
| Maturité | ●●● | ●●● |
| Anti-checklist | ●●● | ●●● |
| Transition | ●●● | ●●● |
| Compat UX | ●● (réserves) | ●● |

---

## 3. Effet checklist — garde-fous

| Garde-fou | Présent dans modèle |
|-----------|---------------------|
| Dimensions stables ≠ questions obligatoires | Oui |
| Budget 1–3 questions | Oui (posture) |
| Bandes maturité sans % | Oui |
| INH pour livrables/routing/preuves | Oui |
| Structure réduite vs 25 blocs bruts | Oui (template challengé) |
| Exemples non scripts | Oui |

**Verdict anti-checklist :** modèle **acceptable** si discipline d’écriture et d’usage GPT respectée. Risque résiduel = mauvaise instanciation Studio (afficher toutes les dimensions). Mitigation UX : § relation 87/88.

---

## 4. Duplication méthode — contrôle

| Zone | Contrôle |
|------|----------|
| Objectifs/livrables/gates | `inherits_from` §4 — non recopiés en tables |
| Routing | INH |
| Template exécution | INH |
| Validation checklist | INH + complément cognitif QA |

**Verdict duplication :** pas de duplication massive ; CREATE justifié sur posture/maturité/fiabilité/signaux.

---

## 5. Suffisance des quatre pilotes

| Question | Réponse |
|----------|---------|
| Modèle validable ? | **Oui** (A/B et exécution vs raisonnement couverts) |
| Généralisation 15 ? | **Non automatique** — P1 ensuite (archi fct, UX, sécu, DevOps, capitalisation) |
| Pilotes à reprendre ? | Mineurs possibles (raccourcir signaux) — pas bloquant |

---

## 6. Recommandations candidates (non décisions)

1. Retenir le modèle CKC en **candidate**.
2. Format Option C (template + fichiers + index).
3. Ne pas modifier routing/template sans GO dédié.
4. Brancher conceptuellement sur UX 87 (maturité/dimensions) lors de la reprise UX.
5. Généralisation = cycle séparé après validation Morris.

---

## 7. Verdict d’évaluation

**Pilotes suffisants pour arbitrage Morris du modèle.**
Pas « CONTRACTS ADOPTED ». Pas « 15 CYCLES COMPLETE ».

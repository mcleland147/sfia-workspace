# SFIA Studio — Périmètres, contraintes et critères de succès

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `06-scope-constraints-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-validated` |
| **Décisions** | D-VAL-1 à D-VAL-11 |

> Borne le produit, les phases et les preuves. **Ne sélectionne pas** le MVP. **Ne fige pas** le POC détaillé. **Ne conçoit pas** l’industrialisation.

---

## 1. Périmètre produit cible

| Élément | Contenu candidat |
|---------|------------------|
| Capacités | Carte C1–C16 (voir `05-…`) — couverture progressive |
| Cycles | Quinze cycles = cible long terme, pas obligation immédiate |
| Utilisateurs | Morris primaire ; opérateurs futurs candidats |
| Exploitation | Industrialisation **plateforme** ultérieure |
| Méthode | Consomme v2.6 (Option C) |

---

## 2. Périmètre du cadrage détaillé (ce cycle)

### Définit

- Contrat produit (problème, opportunité, vision, objectifs, non-objectifs).
- Acteurs, capacités, cas d’usage, parcours macro.
- Distinctions produit / POC / MVP / industrialisation.
- Exigences non fonctionnelles **candidates**.
- Critères de valeur **candidats**.
- Trajectoire et options de prochains cycles.

### Ne définit pas

- Conception fonctionnelle détaillée ; architecture ; stack ; API ; modèle de données.
- UX/UI / Figma / maquettes.
- Backlog / user stories / estimations.
- Contenu exact du POC ; sélection MVP.
- Code, CI/CD, packaging.

---

## 3. Périmètre candidat du POC (principe G5)

| Règle | Contenu |
|-------|---------|
| Nature | Preuve de **faisabilité technique** uniquement |
| Dérivation | Après cadrage + architecture cible **suffisante** |
| Détail | **Non figé** dans ce cycle |
| Valeur métier | **Non validée** par le POC |

### Sept questions G5 (rappel)

1. Lecture état Git réel ?
2. Composition / injection instructions SFIA → GPT ?
3. Qualification et contrat structurés par GPT ?
4. Invocation contrôlée de Cursor ?
5. Orchestration déterministe : gates et stop conditions ?
6. Récupération / analyse résultats, diffs, review packs ?
7. Exécution dans l’environnement local Morris sur **macOS** (contrainte de preuve) ?

macOS ≠ plateforme produit définitive.

---

## 4. Périmètre candidat du MVP (principes uniquement)

| Principe | Contenu |
|----------|---------|
| Nature | Première version **réellement utilisable** |
| Valeur | Métier mesurable — critères candidats §9 |
| Cycles | **Sous-ensemble** prioritaire — **non sélectionné ici** |
| Relation au POC | Après preuve de faisabilité et GO de poursuite |
| Interdiction | Confondre MVP et POC ; inventer le périmètre maintenant |

---

## 5. Périmètre d’industrialisation (plateforme)

| Domaine | Besoin candidat (non conçu) |
|---------|-----------------------------|
| Sécurité | Permissions, secrets, contrôles durables |
| Observabilité | Logs, audit, diagnostic, reprise |
| Maintenance | Évolutivité, dette maîtrisée |
| Distribution | Mode de livraison produit — non décidé |
| Support | RUN borné ultérieur |
| Conformité | RGPD, accessibilité, méthode |

Pas de conception détaillée dans ce cycle.

---

## 6. Contraintes obligatoires

| Contrainte | Origine |
|------------|---------|
| Git = source de vérité | Operating model / rules |
| Morris = autorité | Gouvernance L0 |
| Option C | D-VAL-6 / G4 |
| Baseline v2.6 inchangée | Méthode |
| Gates humains | D-VAL / operating model |
| Pas d’automatisation d’arbitrage | Garde-fou |
| macOS = preuve POC non contractuelle | G3-R3 |
| Runtime = candidat non contractuel | G3-R2 |
| G7 historique (D-VAL-10) : commit / push / draft PR — merge hors D-VAL-10 | Historique |
| Merge PR #207 régularisé ; D-VAL-11 validée (2026-07-18) | Morris |

---

## 7. Exigences non fonctionnelles candidates

Chaque exigence = **besoin à qualifier** — **aucun seuil inventé**.

| NFR | Besoin candidat |
|-----|-----------------|
| Sécurité | Contrôler accès repo, agents, commandes, secrets |
| Confidentialité | Minimiser contexte transmis aux IA |
| Traçabilité | Relier intentions, exécutions, décisions, preuves |
| Auditabilité | Permettre revue a posteriori |
| Réversibilité | Pouvoir arrêter / revenir sans opacité |
| Accessibilité | UI métier utilisable — référentiel ultérieur |
| Performance | Qualifier latence IA, contexte, durée cycles, volumétrie Git |
| Résilience | Reprendre après interruption |
| Maintenabilité | Éviter dette prématurée |
| Interopérabilité | Intégrer Git / GPT / Cursor bornés |
| Coût | Suivre inducteurs (modèles, tokens, stockage, exécutions, hébergement) |
| Sobriété | Éviter sur-automatisation et sur-contexte (GreenOps léger) |

---

## 8. Blocs cadrage (identification)

| Bloc | Identification | Non produit |
|------|----------------|-------------|
| Sécurité / RSSI | Acteurs, actifs, familles de risques, contrôles déterministes | Threat model |
| RGPD | Demandes, historique, décisions, fichiers, logs, contexte IA | DPIA |
| Accessibilité | Exigence produit | Référentiel / UI |
| FinOps | Inducteurs de coûts ; métriques futures | Budget |
| Performance | Latence, contexte, durée, volumétrie Git | SLA |
| UX/UI | Surfaces à concevoir plus tard | Maquettes / Figma |
| DevOps | Frontières Git/GPT/Cursor/orchestration | Interfaces techniques |
| Observabilité | Logs, audit, reprise, diagnostic | Runbook / SLO |
| Capitalisation | Observation ≠ règle méthode | Cycle méthode |
| GreenOps | Identification légère | Engagements |

---

## 9. Critères candidats de valeur produit

| # | Critère | Mesure ultérieure (méthode à définir) |
|---|---------|----------------------------------------|
| 1 | Réduction des manipulations GPT / Cursor / Git | Comptage d’étapes / observation |
| 2 | Réduction erreurs de routage et de contrat | Taux d’écarts |
| 3 | Diminution temps préparation / clôture | Durée observée |
| 4 | Amélioration visibilité des gates | Feedback opérateur |
| 5 | Amélioration traçabilité des décisions | Couverture décisions↔Git |
| 6 | Diminution charge cognitive | Charge perçue / erreurs |
| 7 | Conformité accrue aux garde-fous | Checklists / audits |
| 8 | Reproductibilité des cycles | Reprises réussies |

Aucune cible numérique inventée. Le POC **ne contractualise pas** ces critères ; le MVP et les expérimentations produit les valideront.

---

## 10. Critères de réussite du cadrage détaillé

| Critère | Attendu |
|---------|---------|
| Documents 04–07 complets | Oui |
| Cohérence D-VAL-1…10 / G1–G7 | Oui |
| Frontières cadrage vs conception/archi/backlog | Respectées |
| Revue GPT | Effectuée |
| Validation Morris du cadrage | Requise pour clôturer |

---

## 11. Critères futurs de réussite du POC

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Hypothèses techniques critiques démontrées |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Faisabilité partielle ; réserves documentées |
| `FEASIBILITY NOT DEMONSTRATED` | Preuve insuffisante ou échec |

Le POC ne produit pas de verdict de valeur métier.

---

## 12. Critères futurs de réussite du MVP

| Critère | Nature |
|---------|--------|
| Valeur métier réelle | Au moins une boucle utilisable mesurable |
| Utilisabilité | Opérateur peut conduire un cycle borné |
| Conformité aux gates | Aucun contournement structurel |
| Ancrage Git | Décisions / preuves traçables |

Sans métrique inventée.

---

## 13. Hypothèses et risques (synthèse)

Voir `04-…` §9 et §12. Risques majeurs : seconde vérité ; contournement gates ; confusion POC/MVP ; sur-cadrage ; dépendance fournisseurs.

---

## 14. Stop conditions produit

Arrêt / escalade Morris si :

- automatisation d’une décision structurante ;
- écriture durable hors Git ;
- modification silencieuse de méthode ;
- élargissement au-delà du contrat de cycle ;
- secrets exposés ;
- force push ; merge sans GO Morris explicite ;
- présentation d’une candidate comme baseline.

---

## 15. Questions ouvertes

1. Quelles NFR prioriser avant POC ?
2. Quelles métriques de valeur instrumenter au MVP ?
3. Quel niveau d’observabilité minimal en POC ?
4. Politique de conservation des logs / contextes IA ?

---

## 16. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — périmètres et critères — cadrage détaillé — Morris décide.*

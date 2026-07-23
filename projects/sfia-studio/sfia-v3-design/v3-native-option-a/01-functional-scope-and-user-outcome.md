# 01 — Scope fonctionnel et outcome utilisateur

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate consommé** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Décisions** | ARB-V3-01…06 |
| **Doctrine** | SFIA Studio v3 exclusive (VALIDATED framing 30–37) |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas v2.6 removed |
| **Code / schemas / SQL** | **Interdits** dans ce cycle |
| **Document** | `01-functional-scope-and-user-outcome.md` |

## 1. Outcome utilisateur

Morris (ou décideur autorisé) peut, **dans une conversation dominante** :

1. exprimer une intention libre ;
2. voir le système résoudre un **DoctrinePackage v3** (fail-closed) ;
3. obtenir une qualification de cycle **proposée** (pas un menu obligatoire) ;
4. être guidé par un CKC **opaque** (détaillé ou synthétique intra-v3) ;
5. voir un **Living Project State** se construire dans le panneau vivant ;
6. recevoir une trajectoire **candidate** + options/recommandation ;
7. **décider** explicitement ;
8. confirmer selon N1–N3 ;
9. déclencher un **ExecutionContract** structuré ;
10. obtenir des **preuves** et un état projet mis à jour — **sans** clôturer automatiquement le projet.

## 2. Périmètre inclus (Option A)

- Chaîne fonctionnelle complète intention → preuves → LPS.
- Composants listés en `03`.
- Cas d’usage `08`/`10`.
- Cartographie actifs `09`.
- Implications UX fonctionnelles (sans contrat visuel).

## 3. Hors périmètre

- Code, schemas JSON/SQL, migrations, Figma, archi technique détaillée.
- Coupure technique immédiate de `method/` (après dispo composants — ARB-V3-04).
- Suppression fichiers v2.6 du repository.
- Adoption runtime / Delivery.

## 4. Acteurs

| Acteur | Autorité |
|--------|----------|
| Morris / HumanDecisionMaker | Décisions, gates, confirmations N2–N3, adoption |
| Utilisateur conversationnel | Intention, clarifications, réponses |
| Studio (système) | Propose, qualifie, prépare, refuse fail-closed |
| Agent cognitif (GPT) | Analyse / questions / options — **aucune** mutation structurante |
| Agent d’exécution (Cursor/Runtime) | Exécute **uniquement** sous ExecutionContract confirmé |
| Auditeur | Lit preuves / ReviewBundle |

## 5. Objets métier centraux

Project · CycleType · CycleInstance · DoctrinePackageRef · CkcResolution · LivingProjectState · ProjectTrajectory · Observation/Hypothesis/Option/Recommendation/HumanDecision · Confirmation · ExecutionContract · Evidence · ReviewBundle · DebtItem · Contradiction · ProvenanceRecord · AgentCapability

## 6. Critères de succès du cycle de conception

- Flux Option A sans lecture runtime v2.6 comme doctrine.
- Project ≠ Cycle explicite.
- CKC jamais formulaire.
- ExecutionContract ≠ prompt Markdown.
- Pack exploitable pour architecture fonctionnelle sans invention majeure.

## 7. Maturité de ce document

**DOCUMENTED** (conception candidate) — pas VALIDATED Morris.

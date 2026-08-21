# SFIA Studio v3 — Pin de snapshot du Cycle Catalog applicable (périmètre CKC)

| Métadonnée | Valeur |
| --- | --- |
| **Document** | `sfia-studio-ckc-applicable-cycle-catalog-snapshot-pin.md` |
| **Rôle** | Dénominateur immuable de périmètre de validation pour le futur corpus Studio CKC |
| **Statut** | **PINNED BY MORRIS — VALIDATION SCOPE** |
| **Autorité** | Morris · **2026-08-21 Europe/Paris** |
| **Capacité primaire** | **V3-F01 — CKC AS CANONICAL COGNITIVE LAYER** |
| **Supports** | V3-F03 · V3-F07 · V3-F15 |
| **Runtime v3** | **NON ADOPTED** |
| **ZERO REAL** | **MANDATORY** sous ce travail de qualification |
| **État transport dépôt / PR / CI / review** | **RESOLVE FROM CURRENT GIT + LATEST QUALIFIED REVIEW HANDOFF** — non persisté comme vérité canonique courante |

---

## 1. Sémantique du pin

Ce document constitue un :

**STUDIO CKC CORPUS VALIDATION-SCOPE CATALOG SNAPSHOT PIN**

Ce n’est **pas** :

- un pin de version DoctrinePackage ;
- un pin de doctrine runtime Project ;
- une allowlist de package ;
- une réécriture du catalogue runtime ;
- une autorisation d’authoring de Studio CKC.

**Pin de périmètre de validation ≠ pin DoctrinePackage ≠ pin doctrine runtime Project.**

---

## 2. Provenance immuable de la source catalogue

| Champ | Valeur |
| --- | --- |
| **Dépôt** | `mcleland147/sfia-workspace` |
| **Commit Git source** | `eb962616227523141e865b878f7b7ce3dfdc9d95` |
| **Chemin canonique** | `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts` |
| **Blob Git source** | `9968f040283d8f626c65db48bbec7abd69c56e2d` |
| **SHA256 source** | `f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682` |
| **Version catalogue** | `0.1.0-v3.1-d1` (`CYCLE_TYPE_CATALOG_VERSION`) |
| **Dépendance résolution** | `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts` |
| **Blob Git dépendance** | `42ce999e949631c4fef9060d18c87d29f0517177` |
| **SHA256 dépendance** | `b05b4a1838bc657a45aafda0e717d115dc1bb5d08f2b96de51000a3cd98a7d60` |
| **Constante capitalisation** | `CAPITALIZATION_CYCLE_TYPE_ID = "cyc:capitalization"` |
| **Horodatage de qualification** | **2026-08-21 Europe/Paris** |
| **Autorité** | Morris |

La source catalogue est **intentionnellement figée** sur ce commit et ces digests.
Ce pin **ne flotte pas** vers un `main` futur.

---

## 3. Règle d’applicabilité

Pour ce snapshot :

**cycle type applicable = `lifecycleStatus === "active"`**

Non utilisés pour l’applicabilité :

- disponibilité detailed/synthetic d’un CKC method ;
- maturité `doctrineStatus: method-candidate` ;
- présence/absence d’un mapping CKC method.

| Compteur | Valeur |
| --- | --- |
| **active** | **15** |
| **deprecated** | **0** |
| **unavailable** | **0** |

Contrôles : aucun `cycleTypeId` dupliqué · aucun `displayOrder` dupliqué.

---

## 4. Ensemble actif ordonné (dénominateur exact)

Dérivé de la source Git ci-dessus · ordre = `displayOrder`.

| # | cycleTypeId | canonicalKey | label | displayOrder | lifecycleStatus |
| --- | --- | --- | --- | --- | --- |
| 1 | `cyc:framing` | `cadrage` | Cadrage | 1 | active |
| 2 | `cyc:functional-design` | `conception-fonctionnelle` | Conception fonctionnelle | 2 | active |
| 3 | `cyc:functional-architecture` | `architecture-fonctionnelle` | Architecture fonctionnelle | 3 | active |
| 4 | `cyc:ux-ui` | `ux-ui` | UX/UI | 4 | active |
| 5 | `cyc:backlog` | `backlog-user-stories` | Backlog / user stories | 5 | active |
| 6 | `cyc:technical-architecture` | `architecture-technique` | Architecture technique | 6 | active |
| 7 | `cyc:integration-devops` | `integration-devops` | Intégration / DevOps | 7 | active |
| 8 | `cyc:delivery` | `delivery-implementation` | Delivery / implémentation | 8 | active |
| 9 | `cyc:qa-validation` | `qa-validation` | QA / validation | 9 | active |
| 10 | `cyc:security` | `securite-rssi` | Sécurité / RSSI | 10 | active |
| 11 | `cyc:release` | `deploiement-release` | Déploiement / release | 11 | active |
| 12 | `cyc:observability` | `observabilite-run-readiness` | Observabilité / RUN readiness | 12 | active |
| 13 | `cyc:pr-readiness` | `pr-readiness` | PR readiness | 13 | active |
| 14 | `cyc:post-merge` | `post-merge` | Post-merge | 14 | active |
| 15 | `cyc:capitalization` | `capitalisation-rex` | Capitalisation / REX | 15 | active |

---

## 5. Digest immuable de l’ensemble actif

Sérialisation canonique (preuve de dénominateur uniquement) :

- un `cycleTypeId` par ligne ;
- ordre = `displayOrder` ;
- UTF-8 ;
- fins de ligne LF ;
- newline finale requise.

```text
cyc:framing
cyc:functional-design
cyc:functional-architecture
cyc:ux-ui
cyc:backlog
cyc:technical-architecture
cyc:integration-devops
cyc:delivery
cyc:qa-validation
cyc:security
cyc:release
cyc:observability
cyc:pr-readiness
cyc:post-merge
cyc:capitalization
```

| Champ | Valeur |
| --- | --- |
| **ACTIVE_TYPE_SET_SHA256** | `56ea45b79af4a34ef78cb8475f20c29c660b3041f18c8aec815099832ada9e8b` |

Ce digest identifie le **dénominateur de validation** uniquement.

Ce n’est **pas** :

- un schéma runtime ;
- un digest DoctrinePackage ;
- une empreinte ExecutionContract ;
- un substitut à la provenance Git source.

---

## 6. Invariant de couverture 100 %

Pour le futur authoring / validation / promotion de corpus Studio CKC rattaché à ce pin :

**100 % de couverture**
=
**100 % de cet ensemble actif épinglé exact**

Le nombre **15** est :

**MESURE COURANTE DU SNAPSHOT UNIQUEMENT**
≠ invariant structurel du Studio
≠ preuve d’évolutivité du catalogue runtime

---

## 7. Règle d’évolution

Si `CycleTypeCatalog` change après ce pin :

1. **ne pas** modifier silencieusement ce dénominateur ;
2. ce pin reste **immuable** ;
3. par défaut : créer / qualifier un **snapshot / corpus suivant** ;
4. **ou** Morris rouvre / étend explicitement le périmètre de promotion actif avant validation de corpus.

---

## 8. Propriété / enveloppe

La provenance catalogue / couverture de corpus appartient à l’**enveloppe de validation / promotion**.

Elle **n’appartient pas** aux corps de CKC individuels
(alignement R-CKC-01 / R-CKC-03 du cadrage CKC Studio validé).

---

## 9. Anti-claim — mappings method CKC courant

Le fichier source `cycleTypeCatalog.ts` porte aussi des champs **transitoires** de mapping CKC method, notamment :

- références method ;
- `doctrineStatus: "method-candidate"` ;
- niveaux detailed / synthetic ;
- chemins de pilotes method / carte synthétique.

Qualification :

**FAIT RUNTIME COURANT / DETTE TRANSITOIRE**

Ces champs **ne sont pas** adoptés par ce pin comme Source of Truth Studio CKC.

Ce pin cible uniquement :

**identité de cycle type + applicabilité (`lifecycleStatus = active`).**

---

## 10. Dette runtime — validateur D1 « exact-15 »

### Fait d’implémentation courant

La logique `validateCycleTypeCatalog` du snapshot D1 contient des hypothèses d’ensemble fermé, notamment :

- `entries.length !== 15` → erreur ;
- bornes liées à un ensemble 1…15.

### Doctrine cible

- catalogue **évolutif** ;
- `15` = mesure courante seulement.

### Classification

**KEEP CURRENT SNAPSHOT FACT**
+
**ADAPT LATER / DETTE RUNTIME TRANSITOIRE**

Cette tension :

- **ne bloque pas** ce pin (le snapshot épinglé contient bien 15 actifs) ;
- **bloque** toute affirmation selon laquelle le validateur fermé actuel prouve à lui seul l’évolutivité catalogue.

Anti-claim :

**PINNED CURRENT 15-TYPE SNAPSHOT**
≠
**RUNTIME CATALOG EVOLVABILITY PROVEN.**

Aucune modification runtime dans ce cycle.

---

## 11. Lien trajectoire / Roadmap

### Chaîne de trajectoire (qualification)

C6 CLOSED / next-cycle requalification
→ trajectoire Morris **Studio CKC first** (D-CKC15-14)
→ cadrage CKC Studio **VALIDATED BY MORRIS** (véhicule historique method + intégration Git)
→ **qualification / pin de catalogue applicable** (ce document)
→ GO Morris distinct d’authoring CKC
→ corpus Studio CKC
→ validation individuelle + croisée
→ validation Morris de contenu
→ qualification DoctrinePackage / runtime ultérieure
→ preuve de consommation Nora
→ requalification Product Completion

### Roadmap Convergence active

Le Roadmap Convergence a été **lu**.
Son snapshot courant reste centré sur la trajectoire Product Completion C6 / PR #384 / next-cycle requalification et **n’expose pas encore** de façon à jour la trajectoire CKC framing → catalog pin.

### Réserve

| Réserve | État |
| --- | --- |
| **ROADMAP-SYNC-CKC-PIN** | **OPEN** |
| **Owner** | Gouvernance construction SFIA Studio / gate Morris |
| **Exit** | Synchroniser le Roadmap avec le pin intégré **avant** le démarrage d’authoring CKC |

Cette réserve **n’est pas fermée** par ce document.
Le Roadmap **n’est pas modifié** dans ce cycle.

---

## 12. Prochaine porte

1. **Revue ChatGPT** de ce pin.
2. Si PASS → **GO Morris distinct d’intégration Git** du pin revu (+ synchronisation Roadmap si `ROADMAP-SYNC-CKC-PIN` reste OPEN).
3. Après intégration Git / vérité post-merge → **GO Morris distinct d’authoring Studio CKC**, strictement borné à ce snapshot applicable épinglé.

**Pas d’auto-start.**

---

## 13. Anti-claims

| Affirmation | Vérité |
| --- | --- |
| **PINNED** | ≠ CKC AUTHORED |
| **PINNED** | ≠ CKC CONTENT VALIDATED |
| **PINNED** | ≠ DOCTRINEPACKAGE INTEGRATED |
| **PINNED** | ≠ RUNTIME RESOLVED |
| **PINNED** | ≠ NORA CONSUMPTION PROVEN |
| **PINNED** | ≠ PRODUCT READY |
| **PINNED** | ≠ RUNTIME V3 ADOPTED |
| **PINNED 15** | ≠ catalogue structurellement limité à 15 |
| **Digest fichier source** | ≠ adoption de tous les champs de mapping method transitoires |
| **Pin validation-scope** | ≠ pin DoctrinePackage / pin doctrine runtime Project |

Ce document **ne** :

- n’autorise pas l’authoring Studio CKC ;
- ne crée pas `projects/sfia-studio/sfia-v3-framing/ckc/` ;
- ne modifie pas le runtime / DoctrinePackage / CycleTypeCatalog ;
- n’ouvre pas Product Backlog ;
- n’autorise pas Delivery / REAL ;
- n’adopte pas runtime v3.

---

## 14. Test de stabilité

Ce pin doit rester vrai si :

- la branche locale change ;
- une PR change ;
- le document est fusionné ;
- la CI évolue ;
- la branche source est ensuite supprimée.

L’état de transport live se résout **en externe** (Git + Review Handoff).

La source catalogue figée sur `eb962616…` + digests **ne doit pas** flotter.

---

## 15. Verdict

**SFIA STUDIO V3 CKC APPLICABLE CYCLE CATALOG SNAPSHOT QUALIFICATION + PIN PASS — VERSION CATALOGUE 0.1.0-v3.1-d1 — SOURCE `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts` ÉPINGLÉE AU GIT `eb962616227523141e865b878f7b7ce3dfdc9d95` AVEC PROVENANCE IMMUABLE — ENSEMBLE ACTIF APPLICABLE = 15 TYPES EXACTS DÉRIVÉS DE LA SOURCE — DIGEST D’ENSEMBLE ACTIF ENREGISTRÉ — 15 CONFIRMÉ COMME MESURE COURANTE DU SNAPSHOT UNIQUEMENT / NON INVARIANT STRUCTUREL — DÉNOMINATEUR DE COUVERTURE ÉPINGLÉ POUR LE FUTUR PÉRIMÈTRE DE VALIDATION DU CORPUS STUDIO CKC — MAPPINGS METHOD CKC COURANTS NON ADOPTÉS COMME SOT RUNTIME STUDIO — LOGIQUE D1 EXACT-15 ENREGISTRÉE COMME DETTE RUNTIME TRANSITOIRE / ADAPT LATER — LIEN ROADMAP QUALIFIÉ + RÉSERVE ROADMAP-SYNC-CKC-PIN OUVERTE — AUCUNE MODIFICATION RUNTIME CATALOGUE — AUCUN AUTHORING STUDIO CKC — AUCUNE CRÉATION DE RÉPERTOIRE/FICHIER CKC CANONIQUE — AUCUNE INTÉGRATION DOCTRINEPACKAGE — AUCUN PRODUCT BACKLOG — AUCUNE DELIVERY — ZERO REAL — RUNTIME V3 NON ADOPTED — PIN DOCUMENTAIRE LOCAL UNIQUEMENT — PRÊT POUR REVUE CHATGPT AVANT GATES DISTINCTS D’INTÉGRATION GIT / AUTHORING.**

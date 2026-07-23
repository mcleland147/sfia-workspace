# 35 — Artefacts, preuves, dette et apprentissage contrôlé

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F10 · V3-F13 · V3-F14 · V3-F15 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **Maturité fondations** | **VALIDATED** (doctrine) |
| **Anti-claims** | Pas promotion auto · Pas apprentissage opaque · Pas ADOPTED runtime |
| **Document** | `35-artifact-evidence-debt-and-controlled-learning.md` |

---

## 1. V3-F14 — Artifact Completeness Contract (VALIDATED)

| Champ | Contenu |
|-------|---------|
| type d'artefact | doc / schéma / preuve / review pack / handoff / Execution Contract |
| contenu obligatoire | sections listées |
| sources | refs (DoctrinePackage / Git) |
| preuves | liens |
| statut | documented / validated / modeled / implemented / adopted (selon objet) |
| réserves | ouvertes |
| consommateur | Studio / Morris / Cursor |
| critères d'acceptation | checklist |
| passage cycle suivant | conditions |

**Règle conservée :** fichier créé = complet · modification = sections complètes ou diff exploitable · synthèse seule ≠ livrable consommable · REVIEW PACK INCOMPLETE si contenu manquant.

## 2. Preuves et ReviewBundle

Alignement D2 : ReviewBundle hybride · handoff = export/résilience · review pack = preuve de cycle.
Preuves Git/runtime > narration (V3-F07).

## 3. V3-F10 — DebtItem (VALIDATED)

| Attribut | Contenu |
|----------|---------|
| type | technique · fonctionnelle · UX · documentaire · méthodologique · sécurité · donnée · preuve · gouvernance |
| source / description / impact / criticité | — |
| effort estimatif / échéance | optionnel |
| condition de remboursement | — |
| propriétaire / statut | open · accepted · paid · deferred |
| acceptation Morris | si structurante |
| preuve de clôture | obligatoire |

Dette **pilotée**, pas oubliée.

Dette structurante post-validation (exemples) : dépendances v2.6 non auditées dans le runtime · schemas non créés · UX 87–89 hors main · onze CKC absents.

## 4. V3-F13 — Apprentissage contrôlé (VALIDATED)

```
projet / cycle → REX → observation récurrente
→ proposition d'évolution → simulation / validation
→ décision Morris → nouvelle version doctrine ou CKC (DoctrinePackage)
```

### Interdit

- modification automatique d'un CKC ;
- modification automatique de la doctrine ;
- apprentissage opaque ;
- promotion automatique de maturité ;
- décision fondée uniquement sur fréquence statistique ;
- réintroduction silencieuse de v2.6 comme doctrine Studio.

## 5. V3-F15 — Maturité distribuée et anti-claims (VALIDATED)

Niveaux : DOCUMENTED · VALIDATED · MODELED · IMPLEMENTED · ADOPTED.

Appliqués à : package · fondation · contrat · schéma · CKC · composant runtime.

### État actuel (précis)

| Objet | Maturité |
|-------|----------|
| Fondations V3-F01…F15 | **VALIDATED** (doctrine Studio) |
| Pack framing knowledge-driven | **VALIDATED** · merge pending |
| DoctrinePackageManifest / schemas | non MODELED |
| Runtime Studio | non IMPLEMENTED sous doctrine v3 · non ADOPTED |
| CKC pilotes généraux | candidats repository · résolution Studio via package futur |
| Adoption v3 hors Studio | **Non** |

### Règles

1. Implémentation locale ≠ adoption.
2. Maturité globale limitée par composants **obligatoires**.
3. Aucune promotion automatique.
4. Adoption **uniquement** décision Morris.
5. Claim toujours supporté par preuve.
6. Vocabulaire « IMPLEMENTED CANDIDATE » de slices delivery ≠ V3-IMPLEMENTED plateforme.
7. Validation doctrine **≠** MODELED / IMPLEMENTED / ADOPTED runtime.

## 6. Maturité de ce document

V3-F10 / F13 / F14 / F15 : **VALIDATED** (doctrine).

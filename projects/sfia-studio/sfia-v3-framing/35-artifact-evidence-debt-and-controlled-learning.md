# 35 — Artefacts, preuves, dette et apprentissage contrôlé (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `doctrine-candidate` — **soumis à validation Morris** · **non adopté** · **non baseline** |
| **Maturité fondation** | `DOCUMENTED` candidate seulement |
| **Baseline opérationnelle** | SFIA **v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Gate** | `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` |
| **Branche** | `method/sfia-studio-v3-doctrine-consolidation` |
| **CKC guidance** | Pilote Conception fonctionnelle · candidate · aucune autorité d'exécution |
| **Anti-claims** | Pas V3-VALIDATED · Pas V3-ADOPTED · Pas READY FOR DELIVERY · Pas CKC ADOPTED · Pas décision autonome |
| **Document** | `35-artifact-evidence-debt-and-controlled-learning.md` |
| **Fondations** | V3-F10 · V3-F13 · V3-F14 · V3-F15 |

---

## 1. V3-F14 — Artifact Completeness Contract (candidate)

| Champ | Contenu |
|-------|---------|
| type d'artefact | doc / schéma / preuve / review pack / handoff / Execution Contract |
| contenu obligatoire | sections listées |
| sources | refs |
| preuves | liens |
| statut | candidate / validated / … |
| réserves | ouvertes |
| consommateur | Studio / Morris / Cursor |
| critères d'acceptation | checklist |
| passage cycle suivant | conditions |

**Règle conservée :** fichier créé = complet · modification = sections complètes ou diff exploitable · synthèse seule ≠ livrable consommable · REVIEW PACK INCOMPLETE si contenu manquant.

## 2. Preuves et ReviewBundle

Alignement D2 : ReviewBundle hybride · handoff = export/résilience · review pack = preuve de cycle.
Preuves Git/runtime > narration (V3-F07).

## 3. V3-F10 — DebtItem (candidate)

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

## 4. V3-F13 — Apprentissage contrôlé (candidate)

```
projet / cycle → REX → observation récurrente
→ proposition d'évolution → simulation / validation
→ décision Morris → nouvelle version doctrine ou CKC candidate
```

### Interdit

- modification automatique d'un CKC ;
- modification automatique de la doctrine ;
- apprentissage opaque ;
- promotion automatique de maturité ;
- décision fondée uniquement sur fréquence statistique.

## 5. V3-F15 — Maturité distribuée et anti-claims (candidate)

Niveaux : DOCUMENTED · VALIDATED · MODELED · IMPLEMENTED · ADOPTED.

Appliqués à : package · fondation · contrat · schéma · CKC · composant runtime.

### Règles

1. Implémentation locale ≠ adoption.
2. Maturité globale limitée par composants **obligatoires**.
3. Aucune promotion automatique.
4. Adoption **uniquement** décision Morris.
5. Claim toujours supporté par preuve.
6. Vocabulaire « IMPLEMENTED CANDIDATE » de slices ≠ V3-IMPLEMENTED plateforme (clarification audit).

## 6. Maturité de ce document

V3-F10 / F13 / F14 / F15 : **DOCUMENTED candidate**.

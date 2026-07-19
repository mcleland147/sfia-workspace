# SFIA Studio — Decision pack vertical slice POC (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `34-poc-vertical-slice-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle (vertical slice POC) |
| **Profil** | Critical |
| **Typologie** | DOC / CONCEPTION / POC |
| **Baseline** | SFIA v2.6 |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
| **Statut** | `validated-for-versioning` — VS-CAND-01…13 & 15 **validées** ; VS-CAND-14 **validée avec réserve** ; merge PR = GO distinct |
| **Autorité** | Morris (L0) |
| **Complète** | [`32`](./32-poc-vertical-slice-functional-design.md) · [`33`](./33-poc-vertical-slice-flows-and-rules.md) |

> Pack de décisions du vertical slice. VS-CAND-01…13 et 15 **validées Morris** ; VS-CAND-14 **validée avec réserve** (plafond obligatoire, valeur **À définir**, aucun retry auto).
> Merge, delivery, live et backlog restent soumis à des GO distincts.

---

## 1. Synthèse

Ce cycle conçoit le **premier vertical slice POC utilisable depuis SFIA Studio** :

Demande → qualification GPT réelle → gate Morris → harness → Cursor sandbox → preuves → analyse GPT → verdict candidat → décision Morris.

Il **ne** livre pas de code, **ne** prouve pas le BeB UI, **ne** définit pas le MVP, **ne** rouvre pas Option B / AF-Option C.

| Livrable | Rôle |
|----------|------|
| `32` | Contrat fonctionnel du slice (périmètre, FR, objets, AC) |
| `33` | Parcours, états, BR, scénarios négatifs, preuves |
| `34` | Ce pack — observations, candidats, séquencement |

---

## 2. Observations

1. Les spikes `#226` / docs `29`–`31` prouvent GPT + Cursor **hors Studio UI**, avec réserves.
2. Le gap restant est **fonctionnel UX gouverné** : Studio comme cockpit / vue dérivée, pas comme orchestrateur.
3. Le socle `08`–`10` (FD-CAND validés) reste la base ; ce slice en est un **sous-ensemble POC** explicite.
4. Le scénario Markdown sandbox est un **support de preuve**, pas une feature produit finale.
5. Les risques majeurs sont : dérive MVP, contournement gate, seconde vérité Studio, écriture distante, retry permissif, claims « prêt ».

---

## 3. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Architecture POC Option B reste inchangée |
| H2 | Morris reste seule autorité L0 ; GPT/Cursor sans pouvoir de décision |
| H3 | Git reste source de vérité durable ; Studio = vue dérivée |
| H4 | Aucune écriture Git distante dans le premier vertical slice |
| H5 | Exécution Cursor limitée à une sandbox allowlistée |
| H6 | Harness autonome sans Studio reste possible |
| H7 | Demande de démo sans donnée personnelle |
| H8 | Validation des VS-CAND précède UX/UI, backlog et delivery |

---

## 4. Options éventuelles (non tranchées techniquement)

| Sujet | Option A | Option B (recommandée conception) | Note |
|-------|----------|-----------------------------------|------|
| Scénario preuve | Multi-fichiers / multi-projets | **Un Markdown sandbox** | Moins de dette |
| Gate validity | GO sans fenêtre | GO + fenêtre de validité candidate | À arbitrer (VS-CAND-04) |
| Affichage événements | Polling UI | Stream dérivé | Non figé tech |
| Conservation logs | Indéfinie | Durée limitée candidate | RGPD / VS-CAND futur |

Aucune option ci-dessus ne sélectionne stack, BDD, ORM ou protocole.

---

## 5. Recommandations (non validées)

1. Valider d’abord les `VS-CAND-01`…`12` avant tout cycle UX/UI.
2. Garder le scénario **minimal** (Markdown sandbox) pour le BeB.
3. Exiger ancrage GO = contractHash + HEAD + branche + allowlist.
4. Conserver harness autonome comme chemin de contrôle.
5. Interdire claims MVP / production / L5 / « Studio complete ».
6. Enchaîner ensuite : UX/UI → backlog → delivery (sous GO distincts).

---

## 6. Décisions candidates `VS-CAND-*`

| ID | Décision candidate | Impact | Risque si non tranché | Dette si accepté |
|----|-------------------|--------|----------------------|------------------|
| **VS-CAND-01** | Scénario démo = Markdown sandbox (titre, synthèse, checklist) | Borne le BeB | Scénario flou → dérive | Faible |
| **VS-CAND-02** | Parcours utilisateur en **dix** étapes (Nouvelle demande → Clôture) | Cadre UX | Ambiguïté écrans | Faible |
| **VS-CAND-03** | Qualification GPT **visible** avant tout gate d’exécution | Contrôle humain | GO aveugle | Faible |
| **VS-CAND-04** | GO lié à contractHash + Git HEAD (+ branche + allowlist) | Invalidation stricte | Contournement / stale GO | Faible (discipline) |
| **VS-CAND-05** | Studio = vue dérivée ; harness = autorité d’application des gates | Option B | Studio orchestrateur | Faible |
| **VS-CAND-06** | Aucune écriture Git distante dans le slice | Sécurité | Fuite périmètre | Faible |
| **VS-CAND-07** | Cursor réel **uniquement** sandbox après GO revalidé | Bornage | Cursor libre | Moyenne (ops) |
| **VS-CAND-08** | Verdict GPT = candidat ; clôture = Morris | Autorité | Clôture auto | Faible |
| **VS-CAND-09** | STOP prioritaire (timeout ≠ GO) | Sécurité | Exécution zombie | Faible |
| **VS-CAND-10** | Mode harness autonome conservé | Résilience | Dépendance UI | Faible |
| **VS-CAND-11** | Critères de succès BeB = `VS-AC-*` + critère central doc `32` | Acceptation | « Succès » flou | Faible |
| **VS-CAND-12** | Séquencement post-validation : UX/UI → backlog → delivery | Ordre cycles | Delivery trop tôt | Faible |

### Compléments candidats (si nécessaires)

| ID | Décision candidate | Pourquoi |
|----|-------------------|----------|
| **VS-CAND-13** | Demande de test sans donnée personnelle ; journaux sans secret | RGPD minimal |
| **VS-CAND-14** | Plafond d’appels GPT candidat + pas de retry auto | FinOps |
| **VS-CAND-15** | Identifiants correlation (requestId, contractId, eventId) obligatoires en UI/preuves | Observabilité |

---

## 7. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| Conception Critical | Documents structurants pour UX/delivery | Sur-spécification | Maintenir alignement `32`–`34` vs spikes |
| Gates stricts | Sécurité BeB | Friction Morris | Discipline GO |
| Sandbox only | Preuve limitée | Sous-estimer prod | Acceptable pour POC |
| Pas de remote Git | Pas de merge auto | Moins « wow » démo | Volontaire |
| Studio dérivé | Complexité UX sync | États désync | Reprise N16 |

---

## 8. Proposition de validation Morris

Morris est invité à **valider ou refuser** séparément chaque `VS-CAND-*` (ou un lot explicite), **sans** autoriser :

- commit / push / PR / merge des docs `32`–`34` ;
- UX/UI, backlog, delivery ;
- modification `app/**` ou harness ;
- exécution OpenAI / Cursor réelle ;
- CI/CD, MVP, L5, industrialisation.

Effet attendu d’une validation conception : **autorisation** d’un cycle suivant (typiquement UX/UI ou versionnement documentaire sous GO distinct).

---

## 9. Gates suivants (GO distincts requis)

| Gate | Objet |
|------|-------|
| G-VS-VAL | Validation `VS-CAND-*` |
| G-VS-DOC | Commit / push / PR / merge docs `32`–`34` |
| G-VS-UX | Cycle UX/UI visuelle |
| G-VS-BL | Backlog delivery |
| G-VS-DEL | Delivery / code Studio+adaptateur |
| G-VS-LIVE | OpenAI / Cursor live |
| G-VS-CI | CI/CD |
| G-VS-MVP | Définition MVP |
| G-VS-IND | Industrialisation / L5 |

---

## 10. Séquencement candidat

```text
1. Validation conception (VS-CAND)     ← Morris — GO requis
2. (Optionnel) versionnement docs 32–34
3. UX/UI (écrans du parcours 10 étapes)
4. Backlog borné vertical slice
5. Delivery (app + adaptateur fin — hors harness authority)
6. Preuve BeB live sous GO live
```

Ordre recommandé : **validation → UX/UI → backlog → delivery**.
Ne pas lancer delivery avant validation des candidats.

---

## 11. Challenge (auto-contrôle)

| Question | Verdict conception |
|----------|-------------------|
| Utile maintenant ? | Oui |
| Preuve BeB conçue ? | Oui (exécution réelle = cycles suivants) |
| Dette créée ? | Documentaire limitée |
| Trop large ? | Non — scénario unique sandbox |
| Plus simple ? | Harness-only déjà fait ; slice = Studio gouverné |
| Dérive MVP ? | Explicitement bornée |
| Gate visible ? | Oui |
| Option B ? | Respectée |

---

## 12. Verdict candidat (cycle conception)

`SFIA STUDIO VERTICAL SLICE FUNCTIONAL DESIGN READY — MORRIS VALIDATION REQUIRED`

### Interdits (non applicables)

CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · STUDIO COMPLETE · API INTEGRATED · CURSOR INTEGRATED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN

---

## 13. Décisions Morris attendues

1. Valider / amender / refuser `VS-CAND-01`…`15` (ou lot).
2. Autoriser ou non le versionnement documentaire.
3. Sélectionner le cycle suivant (UX/UI recommandé si validation).
4. **Ne pas** interpréter ce pack comme GO live, delivery ou merge.

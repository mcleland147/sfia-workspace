# SFIA Review Pack — FULL / Cycle 9
# R06 — Clôture de qualification du flux documentaire (addendum discriminant)

**Date:** 2026-11-09
**Profil:** STANDARD — READ-ONLY / rejeux purs isolés
**GO Morris:** 2026-11-09
**Complète:** audit systémique `97c5e812` / blob `087fa74d` (ne le remplace pas)

**VERDICT:** `A_INSUFFICIENT — CONTENT_BOUNDARY_REQUIRED`

---

## A. Sources et état Git réel

| Élément | Valeur | Statut |
|---|---|---|
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` | OBSERVED |
| HEAD | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` | OBSERVED |
| Tree | `368159d7e8cdbc0bbb504f87d6deb12c04e6b129` | OBSERVED |
| origin/sfia/review-handoff (pré-publish) | `97c5e812…` | OBSERVED |
| origin/main | `6667a438…` | OBSERVED |
| RECETTE build | `ygu4moVrYUNZPkvprgvB_` | OBSERVED |
| D4 v1 | `drev_c07ca162…` MD5 `de4bd1a6…` len 8586 | OBSERVED RO |
| Révisions | 1 seule (pas de v2) | OBSERVED RO |

Aucun commit/push produit. Worktree projet peut contenir des fichiers locaux non liés (manifests, delivery-history) — **non mutés par ce cycle**.

Audit précédent relu : sections D / H / I / K du blob `087fa74d`.

---

## B. Jeu d'entrée et niveau de preuve

| Artefact | Identité | Niveau |
|---|---|---|
| S0 / v1 | MD5 `de4bd1a6…` | OBSERVED (DB RO) |
| User turn | `msg_128540c2…` MD5 `4780265b…` len 728 | OBSERVED |
| Assistant stocké | `msg_383e1e38…` | OBSERVED |
| RECOVERED | strip ACK + `trimEnd` ; MD5 `78914600…` len 3882 | REPLAYED dérivé (≠ RAW) |
| RAW LIVE `reply.content` | non persisté | **UNKNOWN** |
| Turn result | `SECTION_SCOPE_EXCEEDED` / REVISE FAILED | OBSERVED |

Demande Pilote (structure, sans texte intégral) : REVISE **uniquement section 2** ; compléter provenance source 1 ; distinguer blob vs commit ; conserver autres sections ; **après exécution** indiquer documentId / nouvelle version / modifications / statut D4 ; D4 only, no GitHub write.

---

## C. Résultats exacts S0 / S1 / S2

Entrée proposition rejouée : **RECOVERED** (section-only). Chemin extract production sur recovered : `fallback_wrap` (pas de H1 `#`). Corps §2 extrait MD5 `f6a6fc9c…` len 3827, `endsWith("\n")=false`, contient CR hors document.

Simulation **A-only** = même extract/splice, **seul** ajout d'un `\n` terminal si absent. Aucun autre comportement modifié. Aucun `reviseDocument`.

| | S0 v1 | S1 splice actuel | S2 A-only |
|---|---|---|---|
| MD5 doc | `de4bd1a6…` | `a8dd5e8f…` | `75add16b…` |
| len | 8586 | 10831 | 10832 |
| assertSectionScope | n/a | **FAIL** `SECTION_SCOPE_EXCEEDED` | **PASS** |
| Glue `demandée.## 3` | non | **oui** | non |
| L2 headings | 1,2,3,4,5,Résultat | 1,2,**4**,5,Résultat (3 perdu comme heading) | 1,2,3,4,5,Résultat |
| prefix hors cible | — | eq | eq |
| suffix hors cible | — | **≠** | eq |
| §2 contient CR « hors document » | non (v1) | oui (dans span étendu) | **oui** |
| ACK Studio dans §2 | non | non | non |

§2 sous S2 — sous-titres `###` :

1. `Source 1 — Première consultation : provenance partiellement identifiée` (offset ~1)
2. `Source 2 — Definition of Done de Chantiers360` (offset ~1311)
3. `Compte rendu opérationnel — hors document` (offset ~2854)

Découpe vérifiable (REPLAYED) :

| Partie | len | MD5 | Marqueurs |
|---|---|---|---|
| Documentaire (avant CR) | 2854 | `6fd90b1b…` | Source1/2, blob/commit ; **pas** doc_id txn |
| CR opérationnel | 974 | `424cf486…` | titre **hors document** ; `doc_1e5d8c16` ; v1/drev ; « Impossible à attester » ; « outil de révision nécessaire n'est pas fourni » ; GitHub lecture seule |

---

## D. Contenu documentaire vs narration

| Classe | Contenu | Verdict |
|---|---|---|
| 1. Documentaire conforme | `### Source 1` / `### Source 2` + tables provenance | À conserver pour D4 |
| 2. Conversationnel hors document | `### Compte rendu opérationnel — hors document` + table id/version/statut/outil | **Pollution D4** si persisté |
| 3. Ambigu | un « compte rendu de consultation » métier sans label hors-doc | Exiger frontière explicite — **ne pas** regex-kill « Compte rendu » |

Alignement demande Pilote : le compte rendu id/version/statut est demandé **après exécution**, donc côté **ACK applicatif / narration post-effet**, pas dans le markdown D4 section 2.

`composeDocumentTurnMessage` ajoute l'ACK **après** l'échec/succès ; il **ne retire pas** le CR embarqué dans le corps proposé avant splice.

---

## E. Tests discriminants et négatifs (rejeux purs)

| Cas | Scope A-only | Pollution / note |
|---|---|---|
| 1. Corps sans NL terminal | PASS (après A) | — |
| 2. Corps avec NL | PASS | — |
| 3. `###` légitimes Source1/2 | PASS | pas de hors-doc |
| 4. + `### … hors document` txn | **PASS** | **hors-doc INCLUS** |
| 5. « Compte rendu de consultation (provenance) » métier | PASS | inclus — légitime possible |
| 6. `### Résultat applicatif D4` dans § | **PASS** | ACK embarqué — **non refusé** en voie section |
| 7. Proposition sans heading | bare-body accepté | risque dump conversationnel (latéral) |
| 8. Hors cible §3 préservé | PASS si A | oui |

Mécanismes existants examinés :

- `PROPOSAL_CONTAINS_APPLICATIVE_ACK` : **seulement** revise full-doc (`sectionHint == null`).
- `extractProposedSectionBody` : **n'exclut pas** `### hors document` ni ACK en sous-titre de section.
- `locateSections` : `###` reste **dans** le corps du `##` parent jusqu'au prochain `##`.

Donc : **aucune frontière documentaire existante** ne sépare correctement le CR opérationnel du corps §2.

---

## F. Verdict

### `A_INSUFFICIENT — CONTENT_BOUNDARY_REQUIRED`

| Question | Réponse | Preuve |
|---|---|---|
| Q1 Cause collage sans NL ? | **Oui, confirmée** (REPLAYED + OBSERVED reason) | S1 glue ; S2 +NL scope OK |
| Q2 A-only passe scope ? | **Oui** (REPLAYED) | S2 `assertSectionScope` ok |
| Q3 Contenu v2 virtuelle A-only ? | §2 = Sources 1+2 **+** CR hors document | S2 h3 list + digests |
| Q4 Pollution D4 ? | **Oui** si écriture | CR txn markers dans §2 |
| Q5 Exclusion déjà correcte ? | **Non** | code path section ; cas 4/6 |
| Q6 Clarif. bornée B vs refonte ? | **B bornée (+A)** suffit ; pas de nouveau moteur | — |
| Q7 Preuves mini avant RECETTE ? | unit EOF±NL ; unit hors-doc exclu ; unit CR métier conservé ; unit ACK section refusé/séparé ; det. sans DB RECETTE ; D hashes | — |

**Niveaux :** mécanisme NL = REPLAYED ; pollution = REPLAYED sur RECOVERED (structure OBSERVED dans message persisté) ; identité byte-à-byte avec RAW = UNKNOWN.

**Limite :** un rejeu ≠ succès Nora LIVE ; A-only n'est **pas** un correctif complet.

---

## G. Besoin de B et/ou D

| Option | Nécessité | Motif |
|---|---|---|
| **A** (NL / frontière ligne) | **Requise** | Sans A, scope FAIL (garde-fou juste) |
| **B** (frontière extraction/génération) | **Requise** | Sans B, scope PASS + pollution documentaire |
| **D** (obs. minimale) | **Fortement recommandée** | RAW absent ; hasher proposed/path/offsets/tailNL ; ne pas stocker le doc intégral |
| **C** (contrat Nora lourd) | Non exigée pour clôturer ce discriminant | Possible plus tard |

Plus petit périmètre cohérent :

1. **A** — garantir séparateur de ligne avant suffixe base.
2. **B** — borner le corps de proposition documentaire **avant** narration post-exécution / blocs explicitement hors document / ACK ; sans supprimer les `###` métier ni tout « Compte rendu ».
3. Conserver `assertSectionScope` + ACK applicatif comme vérité transactionnelle.
4. **D** — preuves non sensibles pour le prochain tour LIVE.

---

## H. Risques de régression à couvrir ensuite

- False positive : retirer un vrai sous-titre métier « compte rendu de consultation ».
- False negative : laisser passer ACK / id / statut dans D4 (cas 6 actuel).
- CREATE path `fallback_wrap` (même extracteur).
- Bare-body sans headings (cas 7).
- Documents dont la dernière section est la cible (EOF) — cas NL.

---

## I. Recommandation de contrat correctif intégré (étude)

**Contrat candidat (non implémenté) : A+B (±D), mono-cycle ultérieur sous GO Morris.**

- A : normaliser frontière Markdown au splice.
- B : séparer *proposition documentaire* vs *compte rendu post-exécution* (le second → narration/ACK, pas D4).
- Critère d'acceptation : v2 virtuelle sans `hors document` txn ; Sources 1/2 présentes ; sections 3–5 octets stables ; ACK hors document.
- Interdit : désactiver `assertSectionScope` ; regex globale « Compte rendu ».

---

## J. Réserves et décision Morris

**Réserves**

- RAW LIVE manquant → pollution prouvée sur RECOVERED/REPLAYED, pas sur octets fournisseur bruts.
- Ne pas annoncer R06 PASS / ML4-REC-08 CLOSED / ML4 ACCEPTED.

**Gate Morris**

- [ ] Accepter `A_INSUFFICIENT — CONTENT_BOUNDARY_REQUIRED`
- [ ] Autoriser (ou non) un futur GO correctif **A+B** (±D)
- [ ] Interdire redeploy RECETTE / R06 LIVE tant que preuves unit du contrat B absentes
- [ ] Confirmer : pas de patch dans ce cycle

---

## Absence d'effets

- Aucune mutation code / tests commités / fixtures produit.
- Aucune mutation PostgreSQL ; `reviseDocument` non appelé.
- Pas de Nora LIVE ; pas de redeploy ; pas de push projet.
- D4 v1 re-vérifié : MD5 `de4bd1a6…` / 1 révision / AVAILABLE.
- Scratch : `/tmp/sfia-r06-aonly/` (digests/meta uniquement ; non publié).

---

## Verdict final

**A_INSUFFICIENT — CONTENT_BOUNDARY_REQUIRED**

A-only rétablit le scope technique mais produirait une v2 virtuelle **sémantiquement polluée** par le compte rendu opérationnel explicitement « hors document ». Une frontière de contenu (B) est nécessaire en plus de A.

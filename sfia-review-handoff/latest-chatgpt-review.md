# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI Functional Architecture Decisions Applied

## 1. Date / heure / fuseau

Local : 2026-08-04 23:39:30 CEST +0200
UTC : 2026-08-04 21:39:30 UTC

## 2. GO consommé

```text
GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI —
APPLY
D-ASST-FPI-04=D
D-ASST-FPI-05=C
D-ASST-FPI-06=D
D-ASST-FPI-11=ACCEPT_CANDIDATE_MATRIX
D-ASST-AF-03=C
D-ASST-AF-04=B

RESERVES
R-DEC-AF-01 — UX/UI MUST DEFINE DETERMINISTIC N1/N2/N3 ESCALATION AND CONFIRMATION SURFACES

DEFERRED — NOT DECIDED
D-ASST-AF-01
D-ASST-AF-02
D-ASST-FPI-01
D-ASST-FPI-02
D-ASST-FPI-03
D-ASST-FPI-07
D-ASST-FPI-08
D-ASST-FPI-09
D-ASST-FPI-10
D-ASST-FPI-12
D-ASST-FPI-13
D-ASST-FPI-14
D-ASST-FPI-15
D-ASST-FPI-16
```

Consommation : 2026-08-04 23:33 CEST (+0200) · Autorité : Morris · Contexte : « ok go » sur le bloc d’arbitrage.

## 3. Cycle / profil / typologie

Architecture fonctionnelle — application des décisions · Standard · EVOL/DOC · Documentation-only · Doctrine conduite SFIA v2.6 · Doctrine produit SFIA Studio v3 exclusive

## 4. Main

`origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` — PASS (attendu `8dc54db0069eed78a8d8930cc2b035450ab56ad1`)

## 5. Branche / worktree

Branche : `decision/sfia-studio-assistant-sfia-native-openai-functional-architecture`
HEAD : `8dc54db0069eed78a8d8930cc2b035450ab56ad1`
Worktree : `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1`
Non poussée · pas de PR
Documents 90/91/92 untracked préservés lors du switch depuis `arbitration/…`.

## 6. Handoff entrant

Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
Commit : `5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb`
Blob : `a22720ba727ae6c1d961f9b803858b110a872f82`
Parent : `559cfa51d402a440f437a55f0672e51da47fd774`
Message : docs(review-handoff): publish Assistant SFIA functional architecture decision pack
Tip observé pré-publication : `5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb` — PASS

## 7. Template canonique

`prompts/templates/sfia-cycle-execution-template.md` + méthode AF `docs/practices/architecture/functional-architecture-method.md` + operating model / rules / validation checklist (gouvernance v2.6).

## 8. CKC

Pilote AF détaillé baseline : **absent**.
Fallback synthétique : template canonique + méthode Architecture fonctionnelle + doctrine Studio v3 + documents 90–92.
Branche `method/sfia-cycle-knowledge-contracts` : CANDIDATE — NOT BASELINE — aucune autorité d’exécution.

## 9–10. Documents 90, 91 et 92

| Doc | SHA-256 | Lignes | Statut cycle |
|---|---|---|---|
| 90 | `2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2` | — | présent · **inchangé** |
| 91 | `0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1` | — | présent · **inchangé** |
| 92 | `0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4` | 473 | présent · **inchangé** |

Vérifiés :

```
2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
```

## 11. Sources consultées

Handoff Decision Pack · docs 90/91/92 · GO Morris APPLY · gouvernance v2.6 (template, routing, operating model, rules, validation checklist) · méthode AF · doctrine Studio v3 (réf. sans modification).

## 12–13. Découverte documentaire / choix du chemin

Inventaire : 90 cadrage · 91 AF candidate · 92 Decision Pack · pas de registre de décisions projet canonique pour ces IDs sur main.
Numéro `93` libre sur main et candidates.
Chemin retenu : `projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md`
Aucun écrasement · 90/91/92 non modifiés.

## 14. Document créé

`projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md`
Lignes : 309 · SHA-256 : `6466f1620d1db65f065fcaf5de25d36cc6af5180f7be786649fbc57521bf4428`

## 15. Contenu complet

```markdown
# 93 — Décisions Architecture fonctionnelle appliquées — Assistant SFIA natif OpenAI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md` |
| **Statut** | DECISIONS APPLIED — TRACE ONLY |
| **Cycle** | Architecture fonctionnelle — application des décisions |
| **Profil** | Standard |
| **Typologie** | EVOL / DOC |
| **GO** | GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY … — 2026-08-04 23:33 CEST (+0200) |
| **Autorité** | Morris |
| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Handoff Decision Pack entrant** | `5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb` / blob `a22720ba727ae6c1d961f9b803858b110a872f82` |
| **Doctrine conduite** | SFIA v2.6 |
| **Doctrine produit** | SFIA Studio v3 exclusive |
| **Sources inchangées** | `90` SHA `2d5a03f3…1a78b2` · `91` SHA `0517aa6c…8e83e1` · `92` SHA `0af5a906…c841d4` (473 lignes) |

> Ce document **trace** les décisions consommées. Il ne réécrit pas rétroactivement 90/91/92.

---

## 1. Statut

Six décisions Lane A / B / E **DECIDED** par Morris le 2026-08-04 23:33 CEST.

Statut Architecture fonctionnelle :

**ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS**

Anti-claims : pas toutes les D-ASST validées · pas Tech autorisée · pas Backlog/Delivery · pas OpenAI intégré · pas UX exécuté · pas Figma · pas publication main · pas doctrine/méthode modifiées · pas MVP.

---

## 2. Décision Morris source

```text
GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI —
APPLY
D-ASST-FPI-04=D
D-ASST-FPI-05=C
D-ASST-FPI-06=D
D-ASST-FPI-11=ACCEPT_CANDIDATE_MATRIX
D-ASST-AF-03=C
D-ASST-AF-04=B

RESERVES
R-DEC-AF-01 — UX/UI MUST DEFINE DETERMINISTIC N1/N2/N3 ESCALATION AND CONFIRMATION SURFACES

DEFERRED — NOT DECIDED
D-ASST-AF-01
D-ASST-AF-02
D-ASST-FPI-01
D-ASST-FPI-02
D-ASST-FPI-03
D-ASST-FPI-07
D-ASST-FPI-08
D-ASST-FPI-09
D-ASST-FPI-10
D-ASST-FPI-12
D-ASST-FPI-13
D-ASST-FPI-14
D-ASST-FPI-15
D-ASST-FPI-16
```

Contexte : message Morris « ok go » sur le bloc d’arbitrage du document 92 / handoff Decision Pack.

---

## 3. Décisions appliquées

### 3.1 D-ASST-FPI-04 = D — DECIDED

| Champ | Valeur |
|---|---|
| **Option** | Routage discret par défaut + panneau expert optionnel |
| **Date** | 2026-08-04 23:33 CEST |
| **Autorité** | Morris |
| **Preuve** | GO DECISIONS … APPLY ; pack `92` §2 |

**Effets :** conversation non surchargée · mode/cycle discret si utile · sources progressives · statut doctrine si erreur/besoin · panneau expert (intention, CKC, outils, allowlist, contradictions) · pas de CKC brut / scores / prompt système · pas de secrets/chemins sensibles en vue experte.

**Limites :** aucun layout validé. **Dette :** seuils « utile ». **Cycles :** UX/UI. **Réserves :** aucune propre.

### 3.2 D-ASST-FPI-05 = C — DECIDED

| Champ | Valeur |
|---|---|
| **Option** | LPS visible = résumé + décisions + réserves + preuves clés ; progressive disclosure = mécanisme UX |
| **Date** | 2026-08-04 23:33 CEST |
| **Autorité** | Morris |
| **Preuve** | GO ; pack `92` §3 |

**Effets :** immédiat = identité Project, DoctrinePackage status, cycle courant éventuel, résumé objectifs · progressif = décisions, réserves, preuves clés, trajectoire · validé ≠ delta candidat · LPS ≠ transcript ≠ trajectoire · pas dump CKC / raisonnement / secrets · ACL par rôle.

**Limites :** définition « preuve clé » = UX/UI. **Cycles :** UX/UI.

### 3.3 D-ASST-FPI-06 = D — DECIDED

| Champ | Valeur |
|---|---|
| **Option** | Digression mineure + orientation espace général ; fallback B si espace général absent |
| **Date** | 2026-08-04 23:33 CEST |
| **Autorité** | Morris |
| **Preuve** | GO ; pack `92` §4 |

**Effets / fallback B :** digression sobre · rappel Project · pas sources Project · pas mutation LPS/trajectoire · pas mémoire Project.

**Non digression :** action structurante · autre Project · secret · contournement doctrine.

**Limites :** seuil détaillé = scénarios UX/policies. **Cycles :** UX/UI.

### 3.4 D-ASST-FPI-11 = ACCEPT_CANDIDATE_MATRIX — DECIDED

| Champ | Valeur |
|---|---|
| **Option** | Matrice N1–N3 du document 92 = contrat fonctionnel d’entrée UX/UI |
| **Date** | 2026-08-04 23:33 CEST |
| **Autorité** | Morris |
| **Preuve** | GO ; pack `92` §5 |
| **Réserve** | **R-DEC-AF-01 OPEN** |

**Règles validées :**
- **N1** : lecture seule · réversible · pas mutation · réponse/recherche/proposition sans application
- **N2** : validation explicite · mutation Project bornée · apply delta · export · conservation/suppression conversation · soft budget override
- **N3** : décision structurante · DoctrinePackage · exécution externe · Git/merge futurs · hard budget · risque élevé / faible réversibilité

Matrice complète : §5. Mapping non modifié ici.

### 3.5 D-ASST-AF-03 = C — DECIDED

| Champ | Valeur |
|---|---|
| **Option** | Dual-track borné UX/UI ∥ Architecture technique |
| **Date** | 2026-08-04 23:33 CEST |
| **Autorité** | Morris |
| **Preuve** | GO ; pack `92` §6 |

**Contraintes :** Lane A décidée avant UX substantiel · contrats d’interface · cycles/gates/validations **séparés** · aucun cycle ne valide l’autre · pas d’implémentation pendant UX/Tech · sync décisions communes · stop si tech impose design silencieusement ou inversement.

**N’autorise pas** le cycle Architecture technique (GO séparé requis).

**D-ASST-FPI-16 :** CONSOLIDATED UNDER D-ASST-AF-03 — IDENTIFIER RETAINED FOR TRACEABILITY — NO SEPARATE DECISION REQUIRED UNLESS REOPENED BY MORRIS.

### 3.6 D-ASST-AF-04 = B — DECIDED (projet SFIA Studio)

| Champ | Valeur |
|---|---|
| **Option** | Handoff = parent + contenu + verdict + message ; tip/blob externes (rapport Cursor + ChatGPT) |
| **Date** | 2026-08-04 23:33 CEST |
| **Autorité** | Morris |
| **Preuve** | GO ; pack `92` §7 |

**Contraintes :** pas d’auto-référence SHA · pas de refresh pour recopier tip/blob · mono-commit si pas de correction réelle · identité finale externe obligatoire · vérification ChatGPT · portée **projet** · pas de modification auto template/méthode · promotion méthode = GO dédié · manifeste immuable = option future distincte.

---

## 4. Contrat UX/UI d’entrée

### Toujours visible
Project actif · identité Project · résumé objectifs · statut DoctrinePackage (au moins en erreur) · conversation dominante.

### Progressivement visible
Décisions · réserves · preuves clés · trajectoire · sources consultées · mode/cycle lorsqu’utile.

### Mode expert (optionnel)
Intention taxonomique · CKC detailed/synthetic/absent · outils · allowlist hits · contradictions.

### Jamais visible
Dimensions CKC brutes · scores internes · prompt système · secrets · chemins sensibles non filtrés · dumps LPS intégraux non ACL · raisonnement modèle brut.

### Hors-sujet (FPI-06=D)
Digression mineure OK + orientation espace général ; sinon fallback B ; jamais sources Project / mutation / mémoire Project pour hors-sujet.

### Confirmations
- **N1** : pas de modal structurant ; audit suffisant
- **N2** : confirmation UI explicite avant mutation/export/TTL
- **N3** : formulation forte / décision explicite ; hors FPI pour Cursor/Git/merge

### Erreurs
Doctrine stale · source refusée · niveau insuffisant · faux GO · OpenAI down (fail-closed structurant — détail Tech différé)

### Accessibilité / sécurité
Statut non couleur-seul · confirmations clavier/lecteur d’écran · ACL · redaction

---

## 5. Matrice N1–N3 validée

Source : document `92` §5 — **non altérée** (colonne Statut ajoutée uniquement pour traçabilité).

| Action | Niveau candidat | Justification | Confirm visible | Autorité | Effet possible | Preuve | Erreur si insuffisant | Statut |
|---|---|---|---|---|---|---|---|---|
| Réponse explicative | N1 / none | réversible, pas mutation | non | — | réponse | audit msg | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Lecture Git RO | N1 | read-only | non | read | contenu filtré | ToolInvocation | access denied | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Consultation source allowlist | N1 | read-only | non | read | hits | ToolInvocation | source refused | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Qualification cycle (proposition) | N1–N2 | proposition vs engagement | discret si N2 | qualify | CycleCandidate | CycleQualification | block formalization | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Proposition LPS delta | N1 | propose only | non | propose | LpsDeltaCandidate | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| **Application** LPS delta | **N2** | mutation Project | oui | HumanDecision | LPS apply | Decision+audit | block mutation | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Proposition trajectoire | N1 | reco | non | propose | TrajectoryDeltaCandidate | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| **Validation** trajectoire | **N2/N3** | selon criticité | oui | HumanDecision | trajectory validated | Decision | block | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Recommandation | N1 | épistémique | non | — | Recommendation | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Création HumanDecision candidate | N1–N2 | préparation | selon UI | prepare | Decision candidate | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| **Consommation** décision / GO | **N2/N3** | structurant | oui explicite | Decision Authority | consume | Decision record | faux GO non consommé | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Préparation ExecutionContract | N2 | contrat engagé conceptuellement | oui | prepare | EC candidate | EC audit | block build | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Export Markdown Cursor | N2 | artefact exportable | oui | export | CursorExport | audit | block export | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Lancement Cursor **futur** | **N3** | exécution externe | oui fort | exec authority | hors FPI | — | interdit FPI | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Git write **futur** | **N3** | irréversible repo | oui fort | write | hors FPI | — | interdit FPI | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Merge **futur** | **N3** | structurant repo | oui fort | merge | hors FPI | — | interdit FPI | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Changement DoctrinePackage | **N3** | doctrinal | oui fort | Morris | pin change | DoctrineResolution | fail-closed | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Dépassement budget | N2 soft / N3 hard override | FinOps | oui si override | admin/Morris | continue/stop | UsageRecord | stop soft/hard | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
| Conservation/suppression conversation | N2 | données personnelles | oui | user/admin | TTL/delete | audit | block delete | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |

**Règle synthétique validée (inchangée) :** N1 read-only réversible sans mutation · N2 validation/mutation bornée/export · N3 structurant / package / externe / Git futur.

---

## 6. Dual-track validé (AF-03=C)

| Voie | Contenu | Gate |
|---|---|---|
| UX/UI | contrat visuel, parcours, surfaces, N1–N3 UI, R-DEC-AF-01 | GO UX/UI dédié |
| Architecture technique | OpenAI/knowledge routing ports | GO Tech dédié — **non autorisé encore** |

Contrats d’interface communs · synchronisations explicites · validations séparées · stop conditions (§3.5).

---

## 7. Gouvernance handoff validée (AF-04=B)

Contenu interne : parent · contenu · verdict · message · contexte pré-commit.
Preuve externe : tip/blob dans rapport Cursor + vérification ChatGPT.
Mono-commit · pas d’auto-référence · portée projet · méthode inchangée.

---

## 8. Décisions différées

**NOT DECIDED — MORRIS DECISION REQUIRED :**

| ID | Avant |
|---|---|
| D-ASST-AF-01 | Architecture technique |
| D-ASST-AF-02 | Architecture technique |
| D-ASST-FPI-01 | Backlog |
| D-ASST-FPI-02 | Architecture technique |
| D-ASST-FPI-03 | Architecture technique |
| D-ASST-FPI-07 | Architecture technique |
| D-ASST-FPI-08 | Architecture technique |
| D-ASST-FPI-09 | Architecture technique |
| D-ASST-FPI-10 | Architecture technique |
| D-ASST-FPI-12 | Delivery |
| D-ASST-FPI-13 | Pilote |
| D-ASST-FPI-14 | Tech (soft) / Pilote (hard) |
| D-ASST-FPI-15 | Architecture technique |

**D-ASST-FPI-16 :** CONSOLIDATED UNDER D-ASST-AF-03 — IDENTIFIER RETAINED — NOT INDEPENDENTLY DECIDED.

---

## 9. Réserve R-DEC-AF-01

| Champ | Valeur |
|---|---|
| **ID** | R-DEC-AF-01 |
| **Libellé** | UX/UI MUST DEFINE DETERMINISTIC N1/N2/N3 ESCALATION AND CONFIRMATION SURFACES |
| **Statut** | **OPEN** |
| **Propriétaire candidat** | cycle UX/UI |
| **Gate** | GO UX/UI … APPLY VALIDATED FUNCTIONAL DECISIONS |
| **Critères de fermeture** | critères N1→N2 et N2→N3 · représentation visuelle 3 niveaux · distinction confirmation/décision/GO/autorisation · actions formulation explicite vs UI · accessibilité · erreurs niveau insuffisant |
| **Preuve attendue** | contrat visuel / scénarios UX couvrant la matrice §5 |

---

## 10. Statut de l’Architecture fonctionnelle

**ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS**

**Autorise :** entrée cycle UX/UI après validation du présent cycle · utilisation de `91` + décisions Lane A comme contrat · dual-track comme trajectoire · AF-04=B pour handoffs projet.

**N’autorise pas :** baseline publiée sur main · Architecture technique · Backlog · Delivery · OpenAI réel · implémentation · modification doctrine/méthode · fermeture R-DEC-AF-01 hors UX.

---

## 11. Trajectoire mise à jour

1. UX/UI — ouvrable après validation ChatGPT du présent cycle (gate candidate).
2. Architecture technique — parallèle **uniquement** avec GO propre (pas encore).
3. Backlog — bloqué (FPI-01 et décisions Tech ouvertes).
4. Delivery — non autorisé.
5. OpenAI réel — non intégré.

---

## 12. Prochaine gate candidate

`GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY VALIDATED FUNCTIONAL DECISIONS`

Statut : **candidate uniquement — non consommée**.

Autoriserait : UX/UI · contrat visuel · parcours · surfaces · états · confirmations N1–N3 · R-DEC-AF-01 · Figma si inclus dans le prompt.

N’autoriserait pas : Tech · OpenAI · développement · Cursor réel · Git write · Backlog · Delivery.

---

## 13. Verdict documentaire

**FUNCTIONAL ARCHITECTURE SELECTED DECISIONS APPLIED — D-ASST-FPI-04, D-ASST-FPI-05, D-ASST-FPI-06, D-ASST-FPI-11, D-ASST-AF-03 AND D-ASST-AF-04 DECIDED BY MORRIS — ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS — R-DEC-AF-01 OPEN FOR UX/UI — NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED — READY FOR CHATGPT VALIDATION AND UX/UI GATE**
```

## 16. Diff complet

```diff
diff --git a/projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md b/projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
+# 93 — Décisions Architecture fonctionnelle appliquées — Assistant SFIA natif OpenAI
+
+| Métadonnée | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md` |
+| **Statut** | DECISIONS APPLIED — TRACE ONLY |
+| **Cycle** | Architecture fonctionnelle — application des décisions |
+| **Profil** | Standard |
+| **Typologie** | EVOL / DOC |
+| **GO** | GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY … — 2026-08-04 23:33 CEST (+0200) |
+| **Autorité** | Morris |
+| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| **Handoff Decision Pack entrant** | `5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb` / blob `a22720ba727ae6c1d961f9b803858b110a872f82` |
+| **Doctrine conduite** | SFIA v2.6 |
+| **Doctrine produit** | SFIA Studio v3 exclusive |
+| **Sources inchangées** | `90` SHA `2d5a03f3…1a78b2` · `91` SHA `0517aa6c…8e83e1` · `92` SHA `0af5a906…c841d4` (473 lignes) |
+
+> Ce document **trace** les décisions consommées. Il ne réécrit pas rétroactivement 90/91/92.
+
+---
+
+## 1. Statut
+
+Six décisions Lane A / B / E **DECIDED** par Morris le 2026-08-04 23:33 CEST.
+
+Statut Architecture fonctionnelle :
+
+**ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS**
+
+Anti-claims : pas toutes les D-ASST validées · pas Tech autorisée · pas Backlog/Delivery · pas OpenAI intégré · pas UX exécuté · pas Figma · pas publication main · pas doctrine/méthode modifiées · pas MVP.
+
+---
+
+## 2. Décision Morris source
+
+```text
+GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI —
+APPLY
+D-ASST-FPI-04=D
+D-ASST-FPI-05=C
+D-ASST-FPI-06=D
+D-ASST-FPI-11=ACCEPT_CANDIDATE_MATRIX
+D-ASST-AF-03=C
+D-ASST-AF-04=B
+
+RESERVES
+R-DEC-AF-01 — UX/UI MUST DEFINE DETERMINISTIC N1/N2/N3 ESCALATION AND CONFIRMATION SURFACES
+
+DEFERRED — NOT DECIDED
+D-ASST-AF-01
+D-ASST-AF-02
+D-ASST-FPI-01
+D-ASST-FPI-02
+D-ASST-FPI-03
+D-ASST-FPI-07
+D-ASST-FPI-08
+D-ASST-FPI-09
+D-ASST-FPI-10
+D-ASST-FPI-12
+D-ASST-FPI-13
+D-ASST-FPI-14
+D-ASST-FPI-15
+D-ASST-FPI-16
+```
+
+Contexte : message Morris « ok go » sur le bloc d’arbitrage du document 92 / handoff Decision Pack.
+
+---
+
+## 3. Décisions appliquées
+
+### 3.1 D-ASST-FPI-04 = D — DECIDED
+
+| Champ | Valeur |
+|---|---|
+| **Option** | Routage discret par défaut + panneau expert optionnel |
+| **Date** | 2026-08-04 23:33 CEST |
+| **Autorité** | Morris |
+| **Preuve** | GO DECISIONS … APPLY ; pack `92` §2 |
+
+**Effets :** conversation non surchargée · mode/cycle discret si utile · sources progressives · statut doctrine si erreur/besoin · panneau expert (intention, CKC, outils, allowlist, contradictions) · pas de CKC brut / scores / prompt système · pas de secrets/chemins sensibles en vue experte.
+
+**Limites :** aucun layout validé. **Dette :** seuils « utile ». **Cycles :** UX/UI. **Réserves :** aucune propre.
+
+### 3.2 D-ASST-FPI-05 = C — DECIDED
+
+| Champ | Valeur |
+|---|---|
+| **Option** | LPS visible = résumé + décisions + réserves + preuves clés ; progressive disclosure = mécanisme UX |
+| **Date** | 2026-08-04 23:33 CEST |
+| **Autorité** | Morris |
+| **Preuve** | GO ; pack `92` §3 |
+
+**Effets :** immédiat = identité Project, DoctrinePackage status, cycle courant éventuel, résumé objectifs · progressif = décisions, réserves, preuves clés, trajectoire · validé ≠ delta candidat · LPS ≠ transcript ≠ trajectoire · pas dump CKC / raisonnement / secrets · ACL par rôle.
+
+**Limites :** définition « preuve clé » = UX/UI. **Cycles :** UX/UI.
+
+### 3.3 D-ASST-FPI-06 = D — DECIDED
+
+| Champ | Valeur |
+|---|---|
+| **Option** | Digression mineure + orientation espace général ; fallback B si espace général absent |
+| **Date** | 2026-08-04 23:33 CEST |
+| **Autorité** | Morris |
+| **Preuve** | GO ; pack `92` §4 |
+
+**Effets / fallback B :** digression sobre · rappel Project · pas sources Project · pas mutation LPS/trajectoire · pas mémoire Project.
+
+**Non digression :** action structurante · autre Project · secret · contournement doctrine.
+
+**Limites :** seuil détaillé = scénarios UX/policies. **Cycles :** UX/UI.
+
+### 3.4 D-ASST-FPI-11 = ACCEPT_CANDIDATE_MATRIX — DECIDED
+
+| Champ | Valeur |
+|---|---|
+| **Option** | Matrice N1–N3 du document 92 = contrat fonctionnel d’entrée UX/UI |
+| **Date** | 2026-08-04 23:33 CEST |
+| **Autorité** | Morris |
+| **Preuve** | GO ; pack `92` §5 |
+| **Réserve** | **R-DEC-AF-01 OPEN** |
+
+**Règles validées :**
+- **N1** : lecture seule · réversible · pas mutation · réponse/recherche/proposition sans application
+- **N2** : validation explicite · mutation Project bornée · apply delta · export · conservation/suppression conversation · soft budget override
+- **N3** : décision structurante · DoctrinePackage · exécution externe · Git/merge futurs · hard budget · risque élevé / faible réversibilité
+
+Matrice complète : §5. Mapping non modifié ici.
+
+### 3.5 D-ASST-AF-03 = C — DECIDED
+
+| Champ | Valeur |
+|---|---|
+| **Option** | Dual-track borné UX/UI ∥ Architecture technique |
+| **Date** | 2026-08-04 23:33 CEST |
+| **Autorité** | Morris |
+| **Preuve** | GO ; pack `92` §6 |
+
+**Contraintes :** Lane A décidée avant UX substantiel · contrats d’interface · cycles/gates/validations **séparés** · aucun cycle ne valide l’autre · pas d’implémentation pendant UX/Tech · sync décisions communes · stop si tech impose design silencieusement ou inversement.
+
+**N’autorise pas** le cycle Architecture technique (GO séparé requis).
+
+**D-ASST-FPI-16 :** CONSOLIDATED UNDER D-ASST-AF-03 — IDENTIFIER RETAINED FOR TRACEABILITY — NO SEPARATE DECISION REQUIRED UNLESS REOPENED BY MORRIS.
+
+### 3.6 D-ASST-AF-04 = B — DECIDED (projet SFIA Studio)
+
+| Champ | Valeur |
+|---|---|
+| **Option** | Handoff = parent + contenu + verdict + message ; tip/blob externes (rapport Cursor + ChatGPT) |
+| **Date** | 2026-08-04 23:33 CEST |
+| **Autorité** | Morris |
+| **Preuve** | GO ; pack `92` §7 |
+
+**Contraintes :** pas d’auto-référence SHA · pas de refresh pour recopier tip/blob · mono-commit si pas de correction réelle · identité finale externe obligatoire · vérification ChatGPT · portée **projet** · pas de modification auto template/méthode · promotion méthode = GO dédié · manifeste immuable = option future distincte.
+
+---
+
+## 4. Contrat UX/UI d’entrée
+
+### Toujours visible
+Project actif · identité Project · résumé objectifs · statut DoctrinePackage (au moins en erreur) · conversation dominante.
+
+### Progressivement visible
+Décisions · réserves · preuves clés · trajectoire · sources consultées · mode/cycle lorsqu’utile.
+
+### Mode expert (optionnel)
+Intention taxonomique · CKC detailed/synthetic/absent · outils · allowlist hits · contradictions.
+
+### Jamais visible
+Dimensions CKC brutes · scores internes · prompt système · secrets · chemins sensibles non filtrés · dumps LPS intégraux non ACL · raisonnement modèle brut.
+
+### Hors-sujet (FPI-06=D)
+Digression mineure OK + orientation espace général ; sinon fallback B ; jamais sources Project / mutation / mémoire Project pour hors-sujet.
+
+### Confirmations
+- **N1** : pas de modal structurant ; audit suffisant
+- **N2** : confirmation UI explicite avant mutation/export/TTL
+- **N3** : formulation forte / décision explicite ; hors FPI pour Cursor/Git/merge
+
+### Erreurs
+Doctrine stale · source refusée · niveau insuffisant · faux GO · OpenAI down (fail-closed structurant — détail Tech différé)
+
+### Accessibilité / sécurité
+Statut non couleur-seul · confirmations clavier/lecteur d’écran · ACL · redaction
+
+---
+
+## 5. Matrice N1–N3 validée
+
+Source : document `92` §5 — **non altérée** (colonne Statut ajoutée uniquement pour traçabilité).
+
+| Action | Niveau candidat | Justification | Confirm visible | Autorité | Effet possible | Preuve | Erreur si insuffisant | Statut |
+|---|---|---|---|---|---|---|---|---|
+| Réponse explicative | N1 / none | réversible, pas mutation | non | — | réponse | audit msg | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Lecture Git RO | N1 | read-only | non | read | contenu filtré | ToolInvocation | access denied | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Consultation source allowlist | N1 | read-only | non | read | hits | ToolInvocation | source refused | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Qualification cycle (proposition) | N1–N2 | proposition vs engagement | discret si N2 | qualify | CycleCandidate | CycleQualification | block formalization | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Proposition LPS delta | N1 | propose only | non | propose | LpsDeltaCandidate | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| **Application** LPS delta | **N2** | mutation Project | oui | HumanDecision | LPS apply | Decision+audit | block mutation | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Proposition trajectoire | N1 | reco | non | propose | TrajectoryDeltaCandidate | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| **Validation** trajectoire | **N2/N3** | selon criticité | oui | HumanDecision | trajectory validated | Decision | block | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Recommandation | N1 | épistémique | non | — | Recommendation | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Création HumanDecision candidate | N1–N2 | préparation | selon UI | prepare | Decision candidate | audit | — | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| **Consommation** décision / GO | **N2/N3** | structurant | oui explicite | Decision Authority | consume | Decision record | faux GO non consommé | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Préparation ExecutionContract | N2 | contrat engagé conceptuellement | oui | prepare | EC candidate | EC audit | block build | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Export Markdown Cursor | N2 | artefact exportable | oui | export | CursorExport | audit | block export | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Lancement Cursor **futur** | **N3** | exécution externe | oui fort | exec authority | hors FPI | — | interdit FPI | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Git write **futur** | **N3** | irréversible repo | oui fort | write | hors FPI | — | interdit FPI | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Merge **futur** | **N3** | structurant repo | oui fort | merge | hors FPI | — | interdit FPI | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Changement DoctrinePackage | **N3** | doctrinal | oui fort | Morris | pin change | DoctrineResolution | fail-closed | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Dépassement budget | N2 soft / N3 hard override | FinOps | oui si override | admin/Morris | continue/stop | UsageRecord | stop soft/hard | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+| Conservation/suppression conversation | N2 | données personnelles | oui | user/admin | TTL/delete | audit | block delete | DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01 |
+
+**Règle synthétique validée (inchangée) :** N1 read-only réversible sans mutation · N2 validation/mutation bornée/export · N3 structurant / package / externe / Git futur.
+
+---
+
+## 6. Dual-track validé (AF-03=C)
+
+| Voie | Contenu | Gate |
+|---|---|---|
+| UX/UI | contrat visuel, parcours, surfaces, N1–N3 UI, R-DEC-AF-01 | GO UX/UI dédié |
+| Architecture technique | OpenAI/knowledge routing ports | GO Tech dédié — **non autorisé encore** |
+
+Contrats d’interface communs · synchronisations explicites · validations séparées · stop conditions (§3.5).
+
+---
+
+## 7. Gouvernance handoff validée (AF-04=B)
+
+Contenu interne : parent · contenu · verdict · message · contexte pré-commit.
+Preuve externe : tip/blob dans rapport Cursor + vérification ChatGPT.
+Mono-commit · pas d’auto-référence · portée projet · méthode inchangée.
+
+---
+
+## 8. Décisions différées
+
+**NOT DECIDED — MORRIS DECISION REQUIRED :**
+
+| ID | Avant |
+|---|---|
+| D-ASST-AF-01 | Architecture technique |
+| D-ASST-AF-02 | Architecture technique |
+| D-ASST-FPI-01 | Backlog |
+| D-ASST-FPI-02 | Architecture technique |
+| D-ASST-FPI-03 | Architecture technique |
+| D-ASST-FPI-07 | Architecture technique |
+| D-ASST-FPI-08 | Architecture technique |
+| D-ASST-FPI-09 | Architecture technique |
+| D-ASST-FPI-10 | Architecture technique |
+| D-ASST-FPI-12 | Delivery |
+| D-ASST-FPI-13 | Pilote |
+| D-ASST-FPI-14 | Tech (soft) / Pilote (hard) |
+| D-ASST-FPI-15 | Architecture technique |
+
+**D-ASST-FPI-16 :** CONSOLIDATED UNDER D-ASST-AF-03 — IDENTIFIER RETAINED — NOT INDEPENDENTLY DECIDED.
+
+---
+
+## 9. Réserve R-DEC-AF-01
+
+| Champ | Valeur |
+|---|---|
+| **ID** | R-DEC-AF-01 |
+| **Libellé** | UX/UI MUST DEFINE DETERMINISTIC N1/N2/N3 ESCALATION AND CONFIRMATION SURFACES |
+| **Statut** | **OPEN** |
+| **Propriétaire candidat** | cycle UX/UI |
+| **Gate** | GO UX/UI … APPLY VALIDATED FUNCTIONAL DECISIONS |
+| **Critères de fermeture** | critères N1→N2 et N2→N3 · représentation visuelle 3 niveaux · distinction confirmation/décision/GO/autorisation · actions formulation explicite vs UI · accessibilité · erreurs niveau insuffisant |
+| **Preuve attendue** | contrat visuel / scénarios UX couvrant la matrice §5 |
+
+---
+
+## 10. Statut de l’Architecture fonctionnelle
+
+**ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS**
+
+**Autorise :** entrée cycle UX/UI après validation du présent cycle · utilisation de `91` + décisions Lane A comme contrat · dual-track comme trajectoire · AF-04=B pour handoffs projet.
+
+**N’autorise pas :** baseline publiée sur main · Architecture technique · Backlog · Delivery · OpenAI réel · implémentation · modification doctrine/méthode · fermeture R-DEC-AF-01 hors UX.
+
+---
+
+## 11. Trajectoire mise à jour
+
+1. UX/UI — ouvrable après validation ChatGPT du présent cycle (gate candidate).
+2. Architecture technique — parallèle **uniquement** avec GO propre (pas encore).
+3. Backlog — bloqué (FPI-01 et décisions Tech ouvertes).
+4. Delivery — non autorisé.
+5. OpenAI réel — non intégré.
+
+---
+
+## 12. Prochaine gate candidate
+
+`GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY VALIDATED FUNCTIONAL DECISIONS`
+
+Statut : **candidate uniquement — non consommée**.
+
+Autoriserait : UX/UI · contrat visuel · parcours · surfaces · états · confirmations N1–N3 · R-DEC-AF-01 · Figma si inclus dans le prompt.
+
+N’autoriserait pas : Tech · OpenAI · développement · Cursor réel · Git write · Backlog · Delivery.
+
+---
+
+## 13. Verdict documentaire
+
+**FUNCTIONAL ARCHITECTURE SELECTED DECISIONS APPLIED — D-ASST-FPI-04, D-ASST-FPI-05, D-ASST-FPI-06, D-ASST-FPI-11, D-ASST-AF-03 AND D-ASST-AF-04 DECIDED BY MORRIS — ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS — R-DEC-AF-01 OPEN FOR UX/UI — NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED — READY FOR CHATGPT VALIDATION AND UX/UI GATE**
```

## 17. Hash et lignes

SHA-256 : `6466f1620d1db65f065fcaf5de25d36cc6af5180f7be786649fbc57521bf4428`
Lignes : 309

## 18. D-ASST-FPI-04 = D — DECIDED

Routage discret + panneau expert optionnel. Aucun layout validé. Effets : conversation non surchargée · mode/cycle discret · sources progressives · doctrine en erreur · expert sans CKC brut/secrets.

## 19. D-ASST-FPI-05 = C — DECIDED

LPS visible = résumé + décisions + réserves + preuves clés ; progressive disclosure. LPS ≠ transcript ≠ trajectoire. « Preuve clé » = UX/UI.

## 20. D-ASST-FPI-06 = D — DECIDED

Digression mineure + orientation espace général ; fallback B si espace absent. Non digression : structurant / autre Project / secret / contournement.

## 21. D-ASST-FPI-11 = ACCEPT_CANDIDATE_MATRIX — DECIDED

Matrice N1–N3 du doc 92 adoptée comme contrat fonctionnel d’entrée UX/UI. Mapping non modifié. R-DEC-AF-01 OPEN.

## 22. D-ASST-AF-03 = C — DECIDED

Dual-track borné UX/UI ∥ Architecture technique. Gates/validations séparées. **N’autorise pas** le cycle Tech. FPI-16 consolidée sous AF-03.

## 23. D-ASST-AF-04 = B — DECIDED (projet)

Handoff = parent + contenu + verdict + message ; tip/blob externes (Cursor + ChatGPT). Pas d’auto-référence. Portée projet — méthode non modifiée.

## 24. Matrice N1–N3

Reproduite intégralement dans le document 93 §5 depuis le document 92 §5, chaque ligne marquée :
`DECIDED AS FUNCTIONAL INPUT — UX DETAILS PENDING UNDER R-DEC-AF-01`
Aucune altération du mapping.

## 25. R-DEC-AF-01

Statut **OPEN** · propriétaire candidat : UX/UI · gate : GO UX/UI … APPLY VALIDATED FUNCTIONAL DECISIONS · critères : N1→N2 / N2→N3 · surfaces · distinction confirmation/décision/GO/autorisation · accessibilité · erreurs niveau insuffisant.

## 26. Décisions différées

NOT DECIDED — MORRIS DECISION REQUIRED :
D-ASST-AF-01, D-ASST-AF-02, D-ASST-FPI-01, D-ASST-FPI-02, D-ASST-FPI-03, D-ASST-FPI-07, D-ASST-FPI-08, D-ASST-FPI-09, D-ASST-FPI-10, D-ASST-FPI-12, D-ASST-FPI-13, D-ASST-FPI-14, D-ASST-FPI-15.

## 27. D-ASST-FPI-16 consolidée

CONSOLIDATED UNDER D-ASST-AF-03 — IDENTIFIER RETAINED FOR TRACEABILITY — NO SEPARATE DECISION REQUIRED UNLESS REOPENED BY MORRIS.

## 28. Statut Architecture fonctionnelle

**ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS**

Autorise entrée UX/UI après validation ChatGPT. N’autorise pas Tech / Backlog / Delivery / OpenAI / implémentation / publication main.

## 29. Contrat UX/UI

Toujours / progressif / expert / jamais visible · hors-sujet FPI-06=D · confirmations N1/N2/N3 · erreurs · accessibilité/sécurité — détail document 93 §4.

## 30. Trajectoire dual-track

UX/UI et Tech séparés ; Tech **non autorisée** sans GO propre ; sync contrats d’interface ; stop si l’une impose silencieusement l’autre.

## 31. Gouvernance handoff

AF-04=B appliquée à ce cycle : mono-commit · parent + contenu + verdict + message · tip/blob **externes** uniquement.

## 32. Validations

| Check | Résultat |
|---|---|
| Six décisions exactement appliquées | PASS |
| Aucune autre décision consommée | PASS |
| R-DEC-AF-01 OPEN | PASS |
| Matrice N1–N3 sans altération | PASS |
| FPI-16 consolidée sous AF-03 | PASS |
| Différées complètes | PASS |
| Statut AF exact | PASS |
| UX/UI candidate non consommée | PASS |
| Tech non autorisée | PASS |
| 90/91/92 inchangés | PASS |
| Doctrine / méthode / code absents du diff | PASS |
| git diff --check | PASS (fichier nouveau untracked) |
| Build/lint/typecheck/tests/OpenAI/Figma | NON EXÉCUTÉS (hors scope) |

## 33. Fichiers créés

- `projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md`
- `.tmp-sfia-review/chatgpt-review.md` (ce pack)

## 34. Absence modification 90/91/92

Hashes inchangés vs attendus — PASS.

## 35. Absence doctrine / méthode / code

Aucun fichier `docs/doctrine/**`, `method/**`, `prompts/**`, `projects/sfia-studio/app/**`, tests, schemas, package, workflows, scripts (hors publisher handoff) modifié — PASS.

## 36. Absence implémentation

Pas d’OpenAI · pas Cursor réel · pas Git write produit · pas Backlog · pas Delivery — PASS.

## 37. Absence commit / push projet

Branche décision locale non poussée · pas de PR · docs 90–93 restent untracked locaux — PASS.

## 38. Local Git Truth final réel

```
2026-08-04 23:39:30 CEST +0200
2026-08-04 21:39:30 UTC
branch=decision/sfia-studio-assistant-sfia-native-openai-functional-architecture
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ahead=0 behind=0
handoff_parent_pre=5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb
status=
?? .tmp-sfia-review/
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
doc90=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
doc91=0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
doc92=0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
doc93=6466f1620d1db65f065fcaf5de25d36cc6af5180f7be786649fbc57521bf4428  projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md lines=309
```

Note : tip/blob handoff post-publication vérifiés **extérieurement** dans le rapport Cursor (D-ASST-AF-04=B — pas d’auto-référence dans ce fichier).

## 39. Review Handoff

Mode : publish-in-cycle · **exactement un commit** · pas de refresh auto-référentiel (D-ASST-AF-04=B).
Parent avant publication : `5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb`
Message : docs(review-handoff): publish Assistant SFIA functional decisions applied
Le handoff **ne contient pas** son tip/blob finaux ; identité Git post-publication reportée **extérieurement** dans le rapport Cursor.

Parent attendu : 5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb
Tip/blob finaux : reportés après publication externe (pas dans ce fichier).

## 40. Verdict

FUNCTIONAL ARCHITECTURE SELECTED DECISIONS APPLIED —
D-ASST-FPI-04, D-ASST-FPI-05, D-ASST-FPI-06, D-ASST-FPI-11, D-ASST-AF-03 AND D-ASST-AF-04 DECIDED BY MORRIS —
ARCHITECTURE FONCTIONNELLE VALIDATED FOR UX/UI INPUT WITH OPEN TECHNICAL AND DELIVERY DECISIONS —
R-DEC-AF-01 OPEN FOR UX/UI —
NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED —
READY FOR CHATGPT VALIDATION AND UX/UI GATE

## 41. Prochaine gate candidate

GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY VALIDATED FUNCTIONAL DECISIONS

Statut : **candidate uniquement — non consommée**.

Autoriserait : UX/UI · contrat visuel · parcours · surfaces · états · confirmations N1–N3 · R-DEC-AF-01 · Figma si inclus dans le prompt.
N’autoriserait pas : Tech · OpenAI · développement · Cursor réel · Git write · Backlog · Delivery.

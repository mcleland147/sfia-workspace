# COURTILIEN-02A — Review pack Full (reprise Creator)

**Cycle :** COURTILIEN-02A — Evolution du modèle d'identité (16e relation)
**Type :** 8 — Delivery / implémentation · **Profil :** Standard · **Typologie :** EVOL
**Date rapport :** 2026-11-20 10:48:00 CET (Europe/Paris)
**Verdict review pack :** `READY WITH RESERVES`

---

## 1. Local Git Truth Check

| Contrôle | Valeur |
|----------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Branche projet | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Staged | vide |
| git status --short | untracked uniquement (`.cursor/…`, `.tmp-sfia-review/…`) — **aucun fichier projet tracké modifié** |
| Anomalie incompatible | **aucune** |

Handoff historique 02A (blocage Editor) : commit `3c25aecb…` — lu explicitement.
Tip distant `sfia/review-handoff` au début de cette reprise : `0df40c8d…` (autre chantier Ensemble 06) — **ne pas confondre** avec COURTILIEN ; overwrite mono-fichier attendu.

---

## 2. Sources consultées

| Source | Statut |
|--------|--------|
| `prompts/templates/sfia-cycle-execution-template.md` | LU (§7.10, §8, §9) |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | applicable |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | applicable |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | applicable |
| CKC `02-fifteen-cycles-synthetic-map.md` cycle 8 | LU — Delivery / scope |
| Handoff historique `3c25aecb:sfia-review-handoff/latest-chatgpt-review.md` | LU |
| SFIA Studio / Next | N/A |
| Livrables Liora versionnés | absents hors périmètre — signalé |

---

## 3. État initial → final

### Permissions
`list_bases` → base `appjebCNHtEaCAzxy` · `permissionLevel: create` (**Creator confirmé**).

### Avant
- 11 tables · 15 relations métier · `personne_client` **absent**
- UTILISATEUR.PERSONNE (`fldrnt6mlP0Sd11pR`) = inverse de `courtier_referent` (**≠** identité client)

### Après
- 11 tables · **16 relations métier** · `personne_client` **présent** Airtable + Softr (artefacts SDK)
- Aucun enregistrement métier modifié
- 7 datasources Softr inchangées
- App historique intacte · app cible `published: null`

---

## 4. Champ créé — définition complète

| Attribut | Valeur |
|----------|--------|
| Table | UTILISATEUR (`tblRL15tkEL98Mpev`) |
| Nom | `personne_client` |
| fieldId | **`fldQyeldPXKvOfVsg`** |
| Type | `multipleRecordLinks` |
| linkedTableId | `tblpbBJLOV4psEgnA` (PERSONNE) |
| inverseLinkFieldId | **`fldj3FI4pdErBEZhM`** |
| Nom inverse (auto Airtable) | **`UTILISATEUR`** (sur table PERSONNE) |
| prefersSingleRecordLink | `false` |
| isReversed | `false` |
| actionId | `actzfpCUagsWrYhyn` |
| Description | Rattachement explicite du compte client à sa fiche métier PERSONNE dans CourtiLien. Cardinalité métier cible 1:1 ; contrainte native non garantie — contrôle applicatif fail-closed requis. |

**Cardinalité métier cible (non native) :** compte client ≤1 fiche ; fiche ≤1 compte ; compte client actif ⇒ fiche valide avant accès. Contrôle fail-closed **02B**.

---

## 5. Delta modèle

| Métrique | Avant | Après |
|----------|-------|-------|
| Entités | 11 | **11** |
| Relations métier | 15 | **16** |
| `personne_client` | absent | **présent** |
| Inverse auto | — | PERSONNE.`UTILISATEUR` (`fldj3FI4pdErBEZhM`) |
| Données métier | — | **inchangées** |
| Datasources Softr | 7 | **7** |

Les 15 relations initiales préservées (dont `courtier_referent` ↔ UTILISATEUR.`PERSONNE` inchangé). Inverse non compté comme 17e relation.

---

## 6. Vérifications Airtable — PASS

- `personne_client` présent, destination PERSONNE correcte
- Inverse `fldj3FI4pdErBEZhM` présent, pointe vers UTILISATEUR, `inverseLinkFieldId` = `fldQyeldPXKvOfVsg`
- `courtier_referent` / UTILISATEUR.`PERSONNE` inchangés
- Aucune seconde relation manuelle indésirable
- 11 tables confirmées via `list_tables_for_base`

---

## 7. Vérifications Softr — PASS (avec réserve cache listing)

### Datasources (7 — inchangées)
UTILISATEUR, PERSONNE, CONTRAT, COMPAGNIE, DOCUMENT, SINISTRE, RENDEZ_VOUS
Intégration `6430d52c-…` · base `appjebCNHtEaCAzxy`

### application_check
`ok: true` · `dataModel.refreshed: true` · changed : `docs/datasources/README.md`, `src/softr-fields.ts` · `issues: []`

### Contenu exploitable `src/softr-fields.ts` (hash `190fac85…`)

UTILISATEUR (`ca4a934b-…`) :
```
"fldQyeldPXKvOfVsg": {"type":"LINKED_RECORD","options":{"linkedTableId":"PERSONNE",...},"allowMultipleEntries":true}
```

PERSONNE (`82b33bf9-…`) :
```
"fldj3FI4pdErBEZhM": {"type":"LINKED_RECORD","options":{"linkedTableId":"UTILISATEUR",...},"allowMultipleEntries":true}
```

### Réserve Softr listing
`integration_list_table_fields` a renvoyé un schéma **sans** les nouveaux champs (cache probable). Preuve de propagation retenue via **artefacts régénérés** `softr-fields.ts` + `application_check` — **REAL BOUNDARY PROVEN** pour le schéma consultable depuis Softr. README datasources non lisible MCP (`src/**` only).

### Apps
- Historique `e8491c5f-…` : `updated` 2026-11-19T15:13:21Z · `published: null` — **intact**
- Cible `7242211b-…` : `published: null` — **non publiée** · aucune user connection / data restriction modifiée

---

## 8. Mappings candidats (non appliqués)

| Alias | Mapping | Statut |
|-------|---------|--------|
| Client-A | USR-004 → PER-004 | candidat validation Morris |
| Client-B | USR-005 → PER-009 | **HOLD** (compte + fiche inactifs) |

Conditions 02B : rôle=client · actif · lien unique · fiche valide · refus si multi-lien / ambiguïté / absente. **Aucun write** ce cycle.

---

## 9. Fake / Real Qualification

| Élément | Valeur |
|---------|--------|
| Applicable | oui |
| Mock | aucun |
| Frontière | Airtable / Softr / MCP |
| Preuve | **REAL BOUNDARY PROVEN** — création champ + relecture Airtable + artefacts Softr |
| Realism gaps | unicité 1:1 native absente ; auth / restrictions non implémentées ; nom inverse auto `UTILISATEUR` ambigu |
| Hors scope | E2E parcours client · cloisonnement multi-utilisateur |
| Claims interdits | Sécurité métier validée · MVP fonctionnel · 1:1 native garantie |

---

## 10. Validations

| Contrôle | Résultat |
|----------|----------|
| permission create | PASS |
| 11 tables | PASS |
| 16 relations métier | PASS |
| 15 initiales préservées | PASS |
| personne_client Airtable | PASS |
| personne_client Softr (softr-fields) | PASS |
| inverse Softr | PASS |
| 7 datasources | PASS |
| aucune modif données | PASS |
| app historique intacte | PASS |
| app cible non publiée | PASS |
| code projet modifié | PASS (aucun) |
| git status / diff tracké | PASS |
| integration_list_table_fields à jour | **NOT TESTED / STALE** (cache) — compensé par softr-fields |

---

## 11. Retour arrière (documenté, non exécuté)

Suppression Creator/Owner du champ `personne_client` (`fldQyeldPXKvOfVsg`) → inverse auto `fldj3FI4pdErBEZhM` retiré. Aucune suppression automatique ce cycle.

---

## 12. Réserves

1. `prefersSingleRecordLink: false` — pas d'unicité native 1:1.
2. Inverse auto nommé **`UTILISATEUR`** sur PERSONNE — risque de confusion avec table / champ courtier ; renommage hors périmètre 02A.
3. `integration_list_table_fields` stale vs `softr-fields.ts` à jour.
4. README Softr non extractible MCP.
5. Relation ≠ sécurité multi-utilisateur.

---

## 13. Décisions Morris restantes

| # | Décision | Statut |
|---|----------|--------|
| D1 | Application mappings Client-A / HOLD Client-B | GO distinct |
| D2 | Autorisations serveur (user connection + restrictions) | GO distinct |
| D3 | BUILD fonctionnel 02B | GO distinct |
| D4 | Publication | GO distinct |
| D5 (optionnel) | Renommer inverse PERSONNE.`UTILISATEUR` | recommandation |

GO création 16e relation : **exécuté**.

---

## 14. Verdict

**`READY WITH RESERVES`**

Création effective + preuves Airtable et Softr (SDK) conformes. Réserves : unicité native, nom inverse, cache listing Softr. Aucun BUILD UI. Handoff : `docs(review-handoff): finalize COURTILIEN-02A identity relation`.

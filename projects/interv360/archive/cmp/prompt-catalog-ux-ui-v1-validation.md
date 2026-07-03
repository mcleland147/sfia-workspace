# Interv360 — Validation catalogue prompts — UX/UI V1 Governance

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Catalogue source** : `prompts/prompt-catalog.md`  
**Section validée** : §13 — UX/UI V1 Governance  
**Standard lié** : `docs/standards/ux-ui-v1-governance-standard.md`  
**Statut** : Validated  
**Type** : Validation manuelle catalogue prompts  
**Objet** : valider l'enrichissement UX/UI V1 Governance avant ouverture du chantier QA / Testeur

---

## 1. Objectif

Cette note **valide manuellement** l'enrichissement du catalogue prompts relatif à la famille **UX/UI V1 Governance** (`prompts/prompt-catalog.md` §13).

**Cette validation ne**

- ne crée pas de nouveaux prompts dédiés sous `prompts/ux-ui/` ;
- ne modifie pas le standard officiel ;
- ne modifie pas les prompts sources Interv360 ;
- ne lance pas le chantier QA / Testeur ;
- **autorise seulement** l'ouverture **ultérieure** du chantier QA / Testeur dans une étape explicite dédiée.

**Référence capitalisation** : `prompt-catalog-enrichment-after-ux-ui-v1-standard.md`

---

## 2. Périmètre validé

| Élément | Statut | Commentaire |
|---------|--------|-------------|
| Famille UX/UI V1 Governance ajoutée | Validé | §13 présent dans `prompt-catalog.md` |
| 15 prompts candidats présents | Validé | PROMPT-UXUI-001 à PROMPT-UXUI-015 |
| Identifiants cohérents | Validé | Préfixe UXUI ; numérotation séquentielle |
| Lien avec le standard officiel | Validé | Référence explicite `ux-ui-v1-governance-standard.md` v1.0 |
| Garde-fous communs présents | Validé | §13 — sous-section Garde-fous communs |
| Variables génériques présentes | Validé | 11 variables documentées |
| Statut Candidat cohérent | Validé | Famille et prompts en statut Candidat |
| Absence de fichiers prompts dédiés | Accepté | Formalisation `prompts/ux-ui/` à planifier |
| Formalisation ultérieure | Planifiée | Sans modification des sources pilote |

---

## 3. Vérification des 15 prompts

| ID | Prompt | Validation |
|----|--------|------------|
| PROMPT-UXUI-001 | Ouverture jalon UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-002 | Recherche design / benchmark UX/UI | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-003 | Instructions UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-004 | Production maquette UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-005 | Revue premier jet UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-006 | Préparation revue transverse UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-007 | Template compte rendu revue UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-008 | Enrichissement méthodes rôle après UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-009 | Compte rendu revue simulée UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-010 | Clôture jalon UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-011 | Sync gouvernance UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-012 | Standard candidat UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-013 | Revue standard candidat UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-014 | Préparation promotion standard officiel | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |
| PROMPT-UXUI-015 | Promotion standard officiel UX/UI V1 | OK — cohérent avec le standard officiel et la séquence UX/UI V1 |

**Synthèse** : les 15 prompts couvrent la séquence standard (§6 du standard officiel) — ouverture → production → revue → clôture → gouvernance → standardisation.

---

## 4. Garde-fous validés

- [x] ne pas confondre maquette et spécification
- [x] ne pas produire backlog
- [x] ne pas produire user stories
- [x] ne pas produire code
- [x] ne pas ouvrir delivery sans jalon explicite
- [x] ne pas publier automatiquement dans Notion ou autre outil
- [x] ne pas inventer de participants réels en revue simulée
- [x] distinguer revue réelle et revue simulée
- [x] documenter contraintes outil
- [x] conserver Git comme source détaillée

*Alignés avec §15 du standard officiel et §13 Garde-fous communs du catalogue.*

---

## 5. Variables validées

| Variable | Validation |
|----------|------------|
| `{project_id}` | OK |
| `{project_name}` | OK |
| `{phase}` | OK |
| `{milestone}` | OK |
| `{design_tool}` | OK |
| `{review_mode}` | OK |
| `{roles_involved}` | OK |
| `{screens_folder}` | OK |
| `{governance_tool}` | OK |
| `{delivery_status}` | OK |
| `{source_documents}` | OK |

**Synthèse** : OK — variables génériques cohérentes avec le standard officiel UX/UI V1 (§13 standard officiel).

---

## 6. Points non ouverts par cette validation

- chantier **QA / Testeur** ;
- création de fichiers prompts dédiés dans `prompts/ux-ui/` ;
- **delivery** ;
- **backlog** ;
- **user stories** ;
- **code** ;
- publication **Notion** ;
- appel **API Notion** ;
- nouvelle **maquette** ;
- nouvelle **architecture complète**.

---

## 7. Décision de validation

**Décision** : **Catalogue UX/UI V1 Governance validé — ouverture du chantier QA / Testeur autorisée ensuite.**

Cette validation acte que le **catalogue prompts** est suffisamment **cohérent** pour servir de base à la suite méthodologique.

Elle **n'ouvre pas elle-même** le chantier QA / Testeur ; elle **autorise simplement** son ouverture dans une **prochaine étape explicite**.

---

## 8. Prochaine action recommandée

**Prochaine action** : ouverture du chantier **QA / Testeur**, en commençant par une **note de cadrage du rôle candidat QA / Testeur** dans SFIA.

Cette prochaine étape devra rester **méthodologique** et ne devra **pas** produire de scénarios de tests projet, backlog, user stories ou code.

---

## 9. Conclusion

La famille **UX/UI V1 Governance** du catalogue prompts est **validée manuellement**.

Les **15 prompts candidats**, les **garde-fous** et les **variables génériques** sont **cohérents** avec le **standard officiel UX/UI V1**.

Le chantier **QA / Testeur** peut être **ouvert ensuite**, dans une **étape dédiée et explicite**.

---

*Validation catalogue prompts — projet Interv360 — gouvernance SFIA.*

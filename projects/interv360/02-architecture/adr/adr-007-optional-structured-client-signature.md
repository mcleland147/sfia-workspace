# ADR-007 — Signature client optionnelle structurée

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Bloc** : ADR P2 — impacts design / MVP  
**Statut** : Accepted  
**Source candidate** : ADR-CAND-007  
**ADR liées** : ADR-005, ADR-006, ADR-004  
**Rôles principaux** : Product Owner, UX/UI Designer, RSSI  
**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet  
**Type** : Architecture Decision Record

---

## 1. Contexte

Le cadrage a validé **ARB-MVP-03** : la **signature client est optionnelle**, **non bloquante**, et **structurée** dans le modèle métier et le compte rendu (`mvp-arbitrations.md`, `adr-candidates.md` ADR-CAND-007).

**ADR-005** a cadré la **conservation fictive** des signatures — statut « enregistrée » ou capture simulée ; pas de preuve juridique complète au MVP.

La signature peut **impacter fortement Figma** : écran clôture, compte rendu (CR), fiche intervention, historique dossier, preuve visible, dashboard.

Il faut **éviter de présenter une signature comme preuve juridique complète** au MVP, tout en permettant un **parcours de clôture crédible** sans rendre la signature obligatoire.

Le MVP doit conserver une signature **structurée** — statuts, zones UX, scénarios testables — pour être **visible**, **testable** et **capitalisable** SFIA.

**ADR-006** prévoit la notification « compte rendu disponible » après clôture — cohérence à maintenir avec le statut signature.

---

## 2. Problème à résoudre

**Quel niveau de signature client retenir au MVP Interv360 pour crédibiliser la clôture d'intervention et le compte rendu, sans rendre la signature obligatoire, sans produire de mécanisme juridique complet et sans bloquer le parcours en cas d'absence de signature ?**

Sans clarification, Figma pourrait rendre la signature obligatoire, suggérer une conformité e-signature réglementaire, ou omettre les états « non signé » et « motif d'absence » nécessaires au terrain et à la QA.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Aucune signature client** | CR sans capture ni statut signature | Simplicité extrême | Objet Signature client sous-utilisé ; cas métier CF7 partiel ; ADR-005 incomplet | **Rejetée / insuffisante seule** |
| **B — Signature client optionnelle structurée** | Zone capture simulée ; statuts ; clôture sans blocage | Flexibilité terrain ; crédibilité CR ; aligné ARB-MVP-03 | Preuve parfois absente ; plusieurs états UX | **Retenue** |
| **C — Signature obligatoire pour clôturer** | Clôture bloquée sans signature | Preuve forte | Blocages terrain ; risque R-M06 ; rejeté cadrage | **Rejetée au MVP** |
| **D — Signature électronique juridiquement complète** | Horodatage certifié ; valeur probante légale ; archivage probatoire | Conformité réglementaire | Effort SSI/juridique ; hors scope démonstrateur | **Hors MVP / post-MVP** |

---

## 4. Décision

**La décision retenue est d'intégrer une signature client optionnelle et structurée au MVP, visible dans le parcours de clôture et le compte rendu, sans la rendre obligatoire et sans prétendre à une valeur juridique complète.**

Précisions :

- la **signature est optionnelle** — le technicien peut clôturer sans signature ;
- l'**absence de signature ne bloque pas la clôture** ;
- la signature peut être représentée par un **statut**, une **zone de capture simulée** ou une **preuve associée** (ADR-005) ;
- une **justification ou mention « non signée »** peut être prévue (motif d'absence) ;
- la **conservation reste fictive** conformément à **ADR-005** ;
- les **traces minimales** éventuelles sont alignées avec **ADR-004** ;
- la **notification CR disponible** reste cohérente avec **ADR-006** ;
- cette ADR **prépare Figma** mais **ne déclenche pas** Figma.

---

## 5. Périmètre fonctionnel MVP

| Fonction | Statut MVP | Commentaire |
|----------|------------|-------------|
| **Afficher une zone signature en clôture** | Inclus | Zone capture simulée mobile — ux-ui-brief §5.6 |
| **Marquer le CR comme signé** | Inclus | Statut « Signée » ; libellé « signature enregistrée » |
| **Marquer le CR comme non signé** | Inclus | Statut explicite ; pas d'ambiguïté |
| **Saisir un motif d'absence de signature** | Inclus | Champ optionnel — refus, indisponibilité, etc. |
| **Consulter le statut signature dans l'historique** | Inclus | Entrée historique dossier simplifiée |
| **Afficher la signature comme preuve associée** | Inclus | Indicateur ou vignette fictive — ADR-005 |
| **Bloquer la clôture si non signée** | **Hors MVP** | Option C rejetée — ARB-MVP-03 |
| **Signature électronique juridiquement complète** | **Hors MVP** | Option D — post-MVP |
| **Horodatage signature simulé** | Inclus | Métadonnée fictive — pas certificat légal |

---

## 6. Statuts signature

| Statut | Signification | Usage MVP |
|--------|---------------|-----------|
| **Non demandée** | Étape signature non atteinte ou non proposée | Début parcours CR |
| **En attente** | Zone signature affichée ; capture non effectuée | Transition clôture |
| **Signée** | Capture simulée enregistrée ; statut positif | Happy path |
| **Refusée** | Client refuse de signer — motif possible | Cas terrain fréquent |
| **Non disponible** | Client absent ou indisponible pour signer | Cas terrain |
| **Non signée — motif renseigné** | Clôture sans signature ; justification saisie | Parcours principal alternatif |
| **Non applicable** | Intervention sans étape signature (type ou contexte) | Cas edge MVP |

---

## 7. Impacts UX/UI avant Figma

| Écran / zone | Impact design | Décision |
|--------------|---------------|----------|
| **Écran clôture intervention** | Zone signature optionnelle ; bouton clôturer toujours actif | Signature non bloquante |
| **Compte rendu intervention** | Statut signature ; zone capture ; motif absence | ux-ui-brief §5.6 — saisie mobile minimale |
| **Fiche intervention** | Badge statut signature ; lien preuve | Indicateur « signé / non signé » |
| **Historique dossier** | Entrée « signature enregistrée » ou « non signée » | Trace simplifiée — ADR-005 |
| **Espace preuves / pièces jointes** | Signature comme preuve associée fictive | Vignette ou statut — pas image biométrique complète |
| **Dashboard SAV** | Agrégat optionnel — interventions non signées | Pas écran dédié signature — ADR-CAND-008 |
| **Vue dirigeant** | Synthèse — pas détail signature | ADR-CAND-008 |
| **Écran anomalies** | Erreur capture signature si significative | Rare au MVP — ADR-002 si échec technique simulé |

**Principes Figma :**

- prévoir une **zone signature optionnelle** ;
- **ne pas** rendre la signature **obligatoire** ;
- prévoir un **état non signé** explicite et un **motif d'absence** ;
- **ne pas** suggérer une **conformité juridique complète** ;
- libellés prudents : « **signature enregistrée** », « **signature non renseignée** », « **preuve associée** ».

---

## 8. Relation avec conservation, notifications et journalisation

| Sujet | Relation |
|-------|----------|
| **ADR-005 — conservation fictive** | Signature = statut ou capture simulée ; preuve associée ; pas stockage probatoire réel |
| **ADR-006 — notification CR disponible** | Notification après soumission CR — indépendante du statut signé/non signé |
| **ADR-004 — journalisation minimale** | Événements `SIGNATURE_ENREGISTREE`, `SIGNATURE_ABSENTE`, horodatage fictif |
| **ADR-002 — anomalies éventuelles** | Échec capture simulée si scénario QA — généralement non bloquant |
| **Post-MVP — signature électronique complète** | Option D — valeur probante, certificats, conservation légale |

---

## 9. Impacts SSI / conformité / UX / QA

| Axe | Impact | Garde-fou |
|-----|--------|-----------|
| **SSI** | Donnée sensible / preuve | Pas exposition image signature complète ; métadonnées limitées ; RG-S04 |
| **Conformité** | Pas valeur juridique complète | Wording prudent ; pas mention eIDAS / signature qualifiée |
| **UX** | Ne pas bloquer clôture | Bouton clôturer actif ; signature clairement optionnelle |
| **QA** | États signés / non signés à tester | Scénarios : signé, refusé, non disponible, motif renseigné |
| **Produit** | Valeur métier sans complexité juridique | ARB-MVP-03 ; preuve partielle acceptable |
| **Exploitation** | Pas vérification légale | Pas workflow validation probatoire MVP |

---

## 10. Conséquences positives

- **Clôture plus crédible** — parcours terrain complet avec ou sans signature ;
- **CR plus complet** — preuve métier visible quand disponible ;
- **Figma mieux cadré** — zone signature, statuts, libellés prudents ;
- **Preuve métier visible** — sans sur-promesse juridique ;
- **Souplesse opérationnelle** — pas de blocage terrain (R-M06 évité) ;
- **Cohérence avec conservation fictive** — ADR-005 complété ;
- **Capitalisation SFIA** — standard signature optionnelle MVP.

---

## 11. Conséquences négatives / coûts

- **Risque de confusion** avec signature électronique réelle — wording critique ;
- **Nécessité de wording précis** — Figma et libellés produit ;
- **Plusieurs états UX à gérer** — 7 statuts ; tests QA multiples ;
- **Besoin de motif non signé** — champ supplémentaire clôture ;
- **Politique juridique post-MVP non traitée** — dette conformité assumée ;
- **Test QA supplémentaire** — parcours avec/sans signature obligatoires.

---

## 12. Garde-fous

- [ ] ne pas rendre la **signature obligatoire** au MVP ;
- [ ] ne pas **bloquer la clôture** en absence de signature ;
- [ ] ne pas présenter la signature comme **preuve juridique complète** ;
- [ ] ne pas définir une **politique réelle de conservation** — ADR-005 ;
- [ ] ne pas produire de **mécanisme e-signature industriel** ;
- [ ] ne pas exposer de **données sensibles inutiles** (image signature complète, biométrie) ;
- [ ] ne pas produire de **Figma** dans cette tâche ;
- [ ] ne pas produire de **backlog** ou **user stories** ;
- [ ] ne pas produire de **code** ;
- [ ] garder une **formulation prudente** dans les futurs écrans.

---

## 13. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | ARB-MVP-03 formalisé ; signature optionnelle structurée |
| **UX/UI** | Zone signature, statuts, motif absence — écran CR/clôture |
| **QA** | Scénarios signé / non signé / refusé / motif |
| **SSI** | Donnée preuve ; exposition minimale ; pas e-signature |
| **Conformité** | Valeur probante limitée ; politique légale post-MVP |
| **Exploitation** | Pas vérification légale ; conservation fictive |
| **Architecture future** | E-signature complète, horodatage certifié — post-MVP |
| **Notion / gouvernance** | Jalon ADR P2 — sync après bloc consolidé |

---

## 14. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/practices/roles/product-owner-method.md` | Enrichissement futur — ARB-MVP-03 formalisé |
| `docs/practices/roles/ux-ui-designer-method.md` | Enrichissement futur — zone signature optionnelle |
| `docs/practices/roles/rssi-method.md` | Pas valeur probante complète ; RG-S04 |
| `docs/practices/roles/architect-method.md` | Objet Signature ; statuts ; lien ADR-004/005 |
| `docs/practices/roles/project-manager-method.md` | Séquence ADR P2 avant Figma |
| `prompts/prompt-catalog.md` | PROMPT-UX-001, PROMPT-SEC-001 — pas modifié ici |
| `prompts/ux-ui/` | Checklist signature MVP |
| `prompts/security/` | Revue exposition preuve signature |
| **Futur Template Optional Signature Matrix** | §5 + §6 + §7 |
| **Futur Checklist signature MVP** | §12 garde-fous |
| **Futur Standard signature optionnelle structurée** | Option B ARB-MVP-03 |

---

## 15. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Product Owner** | Décision structurante ; ARB-MVP-03 ; périmètre MVP |
| **UX/UI Designer** | Zone signature, statuts, libellés prudents — CR/clôture |
| **RSSI** | Pas valeur juridique complète ; minimisation exposition preuve |
| **Architecte** | Objet Signature ; statuts ; lien ADR-004/005/006 |
| **QA / Testeur** | Scénarios clôture avec/sans signature |
| **Chef de projet** | Traçabilité ADR P2 ; Figma post-bloc |

---

## 16. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Zone signature, statuts, motif absence |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist signature avant Figma |
| **PROMPT-SEC-001** — Revue canal email sécurisé | Exposition preuve ; pas PJ signature sensible |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Événements signature ; statuts |
| **PROMPT-GOV-001** — Sync Notion | Jalon ADR P2 post-consolidation |

*Prompts non modifiés dans cette tâche.*

---

## 17. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-007** ;
- [x] la **signature est optionnelle** ;
- [x] l'**absence de signature ne bloque pas la clôture** ;
- [x] la **valeur juridique complète est hors MVP** ;
- [x] les **impacts UX/UI avant Figma** sont documentés ;
- [x] la conservation est alignée avec **ADR-005** ;
- [x] la journalisation est alignée avec **ADR-004** ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] aucun backlog, user story, **Figma ou code** n'est produit.

---

## 18. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-007 | Template |
| Template Optional Signature Matrix | §5 + §6 + §7 | Template |
| Checklist signature MVP | §12 | Checklist |
| Standard signature optionnelle structurée | Option B ARB-MVP-03 | Standard |
| Checklist ADR design-impact | §7 + §19 | Checklist |
| Matrice ADR → prompts | §16 | Template |
| Matrice ADR → rôles | §15 | Template |

---

## 19. Contrôle impact design

| Élément design | Impact confirmé ? | Décision |
|----------------|-------------------|----------|
| **Zone signature** | Oui | Capture simulée optionnelle — écran clôture / CR |
| **Statut signé** | Oui | Badge « signature enregistrée » |
| **Statut non signé** | Oui | État explicite ; pas ambiguïté |
| **Motif absence signature** | Oui | Champ optionnel clôture |
| **CR intervention** | Oui | Statut signature intégré |
| **Historique dossier** | Oui | Entrée trace simplifiée |
| **Preuve associée** | Oui | Indicateur fictif — ADR-005 |
| **Dashboard** | Partiel | Agrégat optionnel — ADR-CAND-008 |
| **Vue dirigeant** | Partiel | Synthèse — ADR-CAND-008 |
| **Anomalies** | Partiel | Échec capture simulée si scénario QA |

---

## 20. Prochaines actions

- instruire **ADR-CAND-008** — dashboard SAV et vue dirigeant séparés (→ ADR-008) ;
- confirmer **ADR-CAND-009** — IA légère reportée post-MVP (pas d'ADR MVP) ;
- préparer ensuite une **synthèse ADR P2 design-impact** ;
- ouvrir **UX/UI/Figma** seulement après **consolidation bloc ADR P2**.

---

## 21. Conclusion

Cette ADR formalise une **signature client optionnelle et structurée** au MVP.

Elle permet de représenter une **preuve métier** dans le parcours de clôture et le compte rendu, **sans bloquer la clôture** en cas d'absence de signature et **sans prétendre à une signature électronique juridiquement complète**.

Elle **prépare Figma** en clarifiant les **états et libellés** nécessaires.

**Figma non déclenché** par cette ADR.

---

*ADR-007 — projet Interv360, phase 02-architecture, bloc ADR P2 — gouvernance SFIA.*

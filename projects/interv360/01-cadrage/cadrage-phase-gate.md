# Interv360 — Cadrage Phase Gate

**Projet** : PRJ-INTERV360  
**Phase évaluée** : 01-cadrage  
**Phase cible** : 02-architecture  
**Statut** : Draft  
**Type** : Phase gate  
**Objet** : décision de passage de phase après cadrage consolidé

---

## 1. Objectif du phase gate

Ce document vérifie si la phase **01-cadrage** est suffisamment **complète, cohérente et capitalisée** pour permettre l'ouverture de la phase **02-architecture**.

Ce document :

- **ne crée pas** la phase architecture ;
- **ne produit pas** d'architecture technique ;
- **ne finalise pas** les ADR ;
- **ne produit pas** de backlog ;
- **ne produit pas** de user stories ;
- **ne produit pas** de maquettes ou Figma ;

… et **formalise uniquement** une décision de passage de phase.

---

## 2. Synthèse de la phase 01-cadrage

Interv360 a traversé une phase de cadrage consolidée sur le contexte **ServiTech Pro** : besoin métier formalisé, parcours SAV 9 étapes, objets et règles de gestion identifiés. Les **7 arbitrages MVP** (ARB-MVP-01 à 07) sont **validés** — périmètre MVP stabilisé avec noyau 8 écrans, CRM principal, notifications seules, signature optionnelle, contrats API simulés, erreurs visibles, conservation fictive.

Les intégrations et erreurs sont cadrées (`integration-error-arbitration-review.md`), le **canal email sécurisé** est documenté (`secure-email-intake-review.md`), le **dashboard KPI / UX** est clarifié (`dashboard-kpi-ux-review.md`). Le **brief UX/UI est validé** avant toute maquette ; **9 ADR candidates** sont préparées (`adr-candidates.md`).

La **gouvernance Notion** a été synchronisée (`notion-sync-summary.md`). La **capitalisation SFIA** est réalisée : 6 Role Methods extraits (`docs/methods/roles/`), revue méthodes rôle, catalogue prompts structuré (`prompts/prompt-catalog.md`), contrôle arborescence méthodes.

---

## 3. Livrables de cadrage contrôlés

| Livrable | Statut | Rôle principal | Valeur projet | Valeur SFIA |
|----------|--------|----------------|---------------|-------------|
| business-framing.md | Consolidated | Business Analyst | Cadrage métier, parcours, RG-*, objets | Template Business Framing |
| framing-review.md | Done | Chef de projet / BA | Revue cohérence pré-arbitrages | Template Framing Review |
| mvp-arbitrations.md | Validated (7/7) | Product Owner | 7 arbitrages MVP documentés | Template MVP Arbitration |
| mvp-arbitration-validation.md | Validated | Product Owner / CP | Validation formelle arbitrages | Template MVP Arbitration Validation |
| integration-error-arbitration-review.md | Done | Architecte / QA | Option C contrats API ; erreurs niveau 3 | Standard intégration simulée |
| secure-email-intake-review.md | Done | RSSI / Architecte | Canal email sécurisé non principal | Template Secure Email Intake |
| dashboard-kpi-ux-review.md | Done | UX/UI / CF | Dashboard SAV + vue dirigeant, KPI | Template Dashboard KPI Matrix |
| ux-ui-brief.md | Validated | UX/UI Designer | 8 écrans, parcours, checklist Figma | Template UX/UI Brief |
| ux-ui-brief-validation.md | Validated | UX/UI / PO / CF | Validation fictive brief | Checklist entrée Figma |
| notion-sync-summary.md | Published (Notion) | Chef de projet | Gouvernance jalons cadrage | Workflow Notion projet |
| role-methods-framing.md | Draft | Chef de projet / tous rôles | Capitalisation 11 rôles | Template Role Method |
| role-methods-review.md | Draft | Chef de projet | Revue maturité rôles | Template Role Methods Review |
| adr-candidates.md | Draft | Architecte / RSSI / PO | 9 ADR candidates P1–P3 | Template ADR Candidate |
| prompts/prompt-catalog.md | Draft | Chef de projet | 14 prompts candidats, 9 familles | Prompt Catalog |
| docs/methods/roles/*.md (6 fichiers) | Draft | Rôles extraits | Méthodes BA, PO, CP, UX, Arch, RSSI | Role Methods réutilisables |

---

## 4. Critères de sortie de cadrage

- [x] le besoin métier est formalisé
- [x] le périmètre MVP est stabilisé
- [x] les arbitrages MVP sont validés
- [x] les limites MVP / post-MVP sont documentées
- [x] les parcours principaux sont cadrés
- [x] les objets métier principaux sont identifiés
- [x] les règles de gestion structurantes sont identifiées
- [x] les intégrations externes simulées sont cadrées
- [x] la gestion des erreurs est cadrée
- [x] le canal email sécurisé est cadré
- [x] les écrans MVP sont identifiés
- [x] le brief UX/UI est validé avant Figma
- [x] les ADR candidates sont identifiées
- [x] les risques principaux sont connus
- [x] la gouvernance Notion est synchronisée
- [x] la capitalisation SFIA est réalisée
- [x] les méthodes rôle ont été extraites (6/11 prioritaires)
- [x] le catalogue prompts est structuré

---

## 5. Points ouverts non bloquants

| Point ouvert | Source | Impact | Traitement prévu |
|--------------|--------|--------|------------------|
| **8 points UX avant maquette** (KPI above the fold, wording statuts, mobile technicien, etc.) | ux-ui-brief-validation.md §4 | UX/Figma | Traiter avant ou pendant cadrage Figma — non bloquant architecture |
| **Géolocalisation légère** | business-framing RG-T04, A-FG06 | Architecture / GreenOps | ADR candidate future si retenue — phase architecture |
| **IA légère post-MVP** | framing-review, ADR-CAND-009 | Produit / Data | Instruction ADR-CAND-009 en P3 — post-MVP |
| **Détails conservation photos / signatures / logs** | ARB-MVP-06, ADR-CAND-005 | RSSI / GreenOps | Instruction ADR-CAND-005 — phase architecture |
| **Accès par profil utilisateur** | business-framing §5, secure-email | SSI / Architecture | Détailler en architecture — ADR ou spec sécurité |
| **Modèle exact de journalisation** | ADR-CAND-004, RG-I07 | Architecte / RSSI | Instruction ADR-CAND-004 — priorité P1 |
| **Critères d'acceptation détaillés** | business-framing §13, RG-* | BA / QA | Phase delivery / QA — hors architecture immédiate |
| **Extraction rôles non prioritaires** (CF, QA, FinOps, GreenOps, Data/IA) | role-methods-review.md §6 | SFIA | Enrichir puis extraire — phases suivantes |
| **Prompts détaillés non formalisés** | prompt-catalog.md | SFIA | Formaliser en Draft/Tested — usage réel requis |

**Ces points ne bloquent pas** l'ouverture de `02-architecture/`, mais devront être instruits dans les phases suivantes.

---

## 6. Conditions d'ouverture de la phase 02-architecture

- [ ] ouvrir `projects/interv360/02-architecture/` **uniquement après décision Go** ;
- [ ] transformer les **ADR candidates P1** en ADR formelles ;
- [ ] conserver les ADR **P2/P3** comme candidates tant qu'elles ne sont pas instruites ;
- [ ] **ne pas produire de backlog** avant architecture minimale ;
- [ ] **ne pas produire de user stories** à ce stade ;
- [ ] maintenir la **trace des décisions dans Git** ;
- [ ] synchroniser **Notion** uniquement après consolidation d'un jalon ;
- [ ] mettre à jour les **méthodes rôle** concernées après instruction ADR ;
- [ ] mettre à jour le **catalogue prompts** si un prompt devient Draft ou Tested.

---

## 7. Décision Go / No-Go

**Décision proposée : Go conditionnel vers 02-architecture.**

**Motivation :**

- cadrage métier consolidé ;
- MVP validé (7 arbitrages) ;
- brief UX/UI validé ;
- ADR candidates prêtes (9 identifiées, 4 P1) ;
- capitalisation SFIA réalisée (méthodes, prompts, revues) ;
- points ouverts identifiés et **non bloquants**.

**Conditions du Go conditionnel :**

- ne traiter d'abord que les **ADR candidates Priorité 1** ;
- ne **pas basculer en delivery** ;
- ne **pas produire** de backlog / user stories ;
- maintenir **contrôle capitalisation SFIA** à chaque itération.

---

## 8. ADR candidates à instruire en premier

| Priorité | ADR candidate | Pourquoi l'instruire en premier |
|----------|---------------|--------------------------------|
| **P1** | **ADR-CAND-001** — Contrats API documentés avec implémentation simulée | Fondation de toutes les intégrations simulées — ARB-MVP-04 |
| **P1** | **ADR-CAND-002** — Gestion visible des erreurs avec reprise manuelle | Indissociable des contrats API — ARB-MVP-05, écran anomalies |
| **P1** | **ADR-CAND-003** — Canal email sécurisé non principal | Exigences SSI + contrat fonctionnel — ARB-MVP-01 |
| **P1** | **ADR-CAND-004** — Journalisation minimale des flux et rejets | Traçabilité email et erreurs — lien CAND-002 et CAND-003 |

---

## 9. Impact sur les rôles SFIA

| Rôle | Impact phase gate | Méthode à enrichir après phase architecture |
|------|-----------------|---------------------------------------------|
| **Architecte** | Instruction ADR P1 — contrats, erreurs, journalisation | docs/methods/roles/architect-method.md |
| **RSSI** | Instruction ADR P1 email + P2 conservation | docs/methods/roles/rssi-method.md |
| **Product Owner** | Validation périmètre maintenu ; ADR P2 notifications, signature | docs/methods/roles/product-owner-method.md |
| **Chef de projet** | Orchestration passage phase ; sync Notion jalon architecture | docs/methods/roles/project-manager-method.md |
| **UX/UI Designer** | Figma possible post-décisions structurantes ; ADR-CAND-008 | docs/methods/roles/ux-ui-designer-method.md |
| **Business Analyst** | Règles RG-* à détailler si ADR impactent métier | docs/methods/roles/business-analyst-method.md |
| **QA / Testeur** | Scénarios erreurs/email à aligner sur ADR P1 | Méthode non encore extraite — à enrichir plus tard |
| **GreenOps** | ADR-CAND-005 conservation — instruction P2 | Méthode non encore extraite — à enrichir plus tard |
| **Data / IA** | ADR-CAND-009 reportée — pas d'action architecture immédiate | Méthode non encore extraite — à enrichir plus tard |
| **FinOps** | Hypothèses coûts logs/notifications lors instruction ADR | Méthode non encore extraite — à enrichir plus tard |

---

## 10. Impact sur les prompts SFIA

| Prompt candidat | Impact | Action future |
|-----------------|--------|---------------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Directement alimenté par ADR P1 (001, 002, 004) | Formaliser en Draft lors instruction ADR |
| **PROMPT-SEC-001** — Revue canal email sécurisé | Alimenté par ADR-CAND-003, 004 | Formaliser en Draft lors instruction ADR |
| **PROMPT-GOV-001** — Sync gouvernance Notion | Jalon architecture à synchroniser post-Go | Exécuter après consolidation phase architecture |
| **PROMPT-ROLE-003** — Extraction méthode rôle | Architecte et RSSI à enrichir post-ADR | Mettre à jour Role Methods après instruction |
| **PROMPT-ARB-001** — Arbitrages MVP | Contexte figé — référence pour ADR | Reste Candidat — source historique |
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Brief validé — Figma autorisé après décisions utiles | Peut passer Tested si Figma engagé |

---

## 11. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template Phase Gate | Structure présent document | Template |
| Checklist sortie de phase | §4 — critères de sortie cadrage | Checklist |
| Standard Go conditionnel | §7 — conditions et motivation | Standard |
| Matrice phase gate → ADR candidates | §8 — priorisation P1 | Template |
| Matrice phase gate → rôles | §9 — impact rôles SFIA | Template |
| Matrice phase gate → prompts | §10 — impact prompts catalogue | Template |
| Prompt phase gate projet | Formalisation future PROMPT-GOV-* étendu | Prompt |

---

## 12. Décision finale proposée

**La phase 01-cadrage est considérée comme suffisamment consolidée pour ouvrir 02-architecture, sous réserve de respecter les conditions du Go conditionnel.**

Explicitations :

- **Architecture** autorisée **uniquement** en phase suivante (`02-architecture/`) — dossier **non créé** par ce document ;
- **ADR formelles** autorisées **uniquement après** ouverture de `02-architecture/` ;
- **Figma** reste possible **après** prise en compte des décisions structurantes utiles (ADR P1 en cours ou validées) et traitement progressif des points ouverts UX ;
- **Backlog / user stories** restent **hors périmètre** à ce stade.

---

## 13. Conclusion

Le phase gate confirme que le **cadrage Interv360 est suffisamment structuré** pour ouvrir la phase architecture.

La phase suivante devra :

- traiter en **priorité les ADR candidates P1** (contrats API, erreurs, email sécurisé, journalisation) ;
- **maintenir la séparation Git / Notion** (source détaillée vs gouvernance) ;
- **poursuivre la capitalisation SFIA** sur les rôles, prompts, savoir-faire et savoir-être ;
- **ne pas anticiper** le delivery, le backlog ou les user stories.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*

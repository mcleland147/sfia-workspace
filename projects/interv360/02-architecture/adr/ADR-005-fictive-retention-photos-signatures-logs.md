# ADR-005 — Conservation fictive photos, signatures et logs

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Bloc** : ADR P2 — impacts design / MVP  
**Statut** : Accepted  
**Source candidate** : ADR-CAND-005  
**ADR liées** : ADR-002, ADR-003, ADR-004  
**Rôles principaux** : RSSI, Product Owner, UX/UI Designer  
**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet  
**Type** : Architecture Decision Record

---

## 1. Contexte

Le **bloc ADR P1** a cadré les contrats simulés (ADR-001), les erreurs visibles (ADR-002), l'email sécurisé secondaire (ADR-003) et la **journalisation minimale** (ADR-004). ADR-004 a **explicitement reporté** la politique complète de conservation.

Avant **Figma**, il faut clarifier ce que le MVP **affiche ou non** concernant les **photos**, **signatures** et **logs** — sujet à impact direct sur les écrans : intervention, clôture, pièces jointes, preuves, historique, anomalies, dashboard.

Le cadrage a validé **ARB-MVP-06** : **conservation limitée fictive documentée** — hypothèses RSSI/GreenOps, pas d'implémentation lourde purge/archivage au MVP (`mvp-arbitrations.md`, `adr-candidates.md` ADR-CAND-005).

La **conservation reste fictive** au MVP : l'objectif est de **cadrer l'expérience et les limites**, pas de définir une politique réelle d'archivage, de purge ou de stockage industriel.

**Trajectoire projet** : instruire un bloc **ADR P2** ciblé sur les décisions impactant écrans, parcours et composants UX/UI **avant** ouverture Figma.

---

## 2. Problème à résoudre

**Quel niveau de conservation fictive retenir pour les photos, signatures et logs dans le MVP Interv360, afin de rendre le démonstrateur crédible et préparable en Figma, sans produire de politique complète de conservation, d'archivage ou de stockage réel ?**

Sans clarification, Figma risquerait de suggérer une conformité réelle non décidée, d'exposer des données sensibles, ou de sous-représenter les preuves métier (photos, signature optionnelle ARB-MVP-03, traces ADR-004).

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Aucune conservation visible** | Données éphémères ; pas de preuves ni historique dans l'UI | Simplicité maximale | Parcours CR incomplet ; objets §9.3 sous-exploités ; faible crédibilité démo | **Rejetée** |
| **B — Conservation fictive minimale affichée dans le produit** | Références, métadonnées et indicateurs visibles ; pas de stockage réel ni purge | Crédibilité démo ; préparation Figma ; alignement ARB-MVP-06 | Zone grise preuve fictive / réelle ; wording à soigner | **Retenue** |
| **C — Conservation complète avec historique détaillé** | Historique riche, accès complet médias et logs | Valeur audit forte | Sur-promesse ; effort UX et SSI ; dérive scope | **Reportée post-MVP** |
| **D — Politique réelle de stockage / archivage / purge** | Règles opérationnelles, purge automatique, conformité | Conformité réelle | Hors scope démonstrateur MVP ; implémentation lourde | **Hors MVP** |

---

## 4. Décision

**La décision retenue est de conserver fictivement les photos, signatures et logs au MVP, avec une visibilité limitée et compréhensible dans les écrans, sans implémenter de stockage réel, politique complète de conservation, archivage ou purge.**

Précisions :

- les **photos** sont représentées comme **pièces jointes ou preuves** associées à une intervention (avant/après, terrain) ;
- la **signature client** reste **optionnelle et structurée** — lien avec ADR-CAND-007 (instruction P2) ; pas de preuve juridique complète au MVP ;
- les **logs** restent des **traces minimales** liées à ADR-004 — message métier ou historique simplifié, pas dump technique ;
- **aucune donnée sensible complète** ne doit être exposée dans l'UI ;
- la **durée de conservation réelle** est **hors MVP** ;
- **archivage, purge, conformité réelle et stockage industriel** sont **post-MVP** ;
- cette ADR **prépare Figma** mais **ne déclenche pas** Figma.

---

## 5. Périmètre des objets concernés

| Objet | Conservation MVP | Visibilité UI | Commentaire |
|-------|------------------|---------------|-------------|
| **Photos intervention** | Fictive — référence / vignette / compteur | Oui — dossier intervention, CR | Preuve métier ; pas galerie illimitée |
| **Photos avant / après** | Fictive — métadonnées | Oui — CR ou fiche intervention | Lien ARB-MVP-06, RG-T05 |
| **Pièces jointes email** | Fictive — référence ; non stockées en log | Indicateur intake ; pas contenu PJ en UI | ADR-003 — pas de PJ dans logs |
| **Signature client** | Fictive — statut « enregistrée » ou capture simulée | Oui — CR clôture ; optionnelle | ARB-MVP-03 ; ADR-CAND-007 |
| **Logs d'intégration** | Minimaux — ADR-004 | Historique simplifié ; anomalies ADR-002 | Pas log technique complet |
| **Logs de rejet email** | Minimaux — motif code | Anomalies si impact SSI/métier | ADR-003 + ADR-004 |
| **Logs de reprise manuelle** | Minimaux — horodatage, résultat | Historique dossier ; anomalies | ADR-002 |
| **Historique dossier SAV** | Fictif — événements clés | Oui — fiche demande | Statuts, actions, traces simplifiées |
| **Données sensibles** | Non exposées intégralement | **Non** — métadonnées ou libellés prudents | RSSI — corps email, PJ, PII |

---

## 6. Règles de conservation fictive MVP

| Règle | Description | Impact MVP |
|-------|-------------|------------|
| **Conservation fictive uniquement** | Pas de persistance réelle industrialisée | Démonstrateur ; hypothèses documentées |
| **Références / métadonnées vs contenu complet** | Afficher « preuve associée », compteur, type — pas dump binaire | Protection données sensibles |
| **Photos visibles comme preuves métier** | Zone pièces/preuves intervention et CR | Figma — indicateurs, pas DAM complet |
| **Signature = statut ou preuve clôture** | « Signature enregistrée » ; capture optionnelle simulée | Pas mécanisme juridique complet |
| **Logs = message métier ou historique simplifié** | Aligné ADR-004 | Écran anomalies + historique dossier |
| **Log technique complet non exposé** | Hors UI | ADR-004 garde-fou |
| **PJ email non stockées dans logs** | Référence uniquement | ADR-003 |
| **Conservation longue reportée post-MVP** | Durées/volumes réels non tranchés | ADR P2+ ou phase ultérieure |
| **Purge / archivage hors MVP** | Aucun mécanisme automatique | Option D rejetée au MVP |

---

## 7. Impacts UX/UI avant Figma

| Écran / zone | Impact design | Point à cadrer pour Figma |
|------------|---------------|---------------------------|
| **Fiche demande SAV** | Historique minimal, pièces référencées | Zone historique ; pas timeline exhaustive |
| **Fiche intervention** | Photos/preuves associées | Indicateurs « N photos » ; vignettes fictives |
| **Écran clôture intervention / CR** | Signature optionnelle ; photos CR | Statut signature ; champs essentiels mobile |
| **Écran anomalies** | Traces reprise ; pas log brut | Message métier ADR-002 |
| **Historique dossier** | Événements clés ; logs simplifiés | « Trace disponible » — pas export SIEM |
| **Dashboard SAV** | Agrégats ; pas détail médias | KPI sans sur-stockage visuel |
| **Vue dirigeant** | Synthèse ; pas preuves détaillées | ADR-CAND-008 — séparation dashboards |
| **Intake email** | PJ référencée ; rejet visible | Pas aperçu PJ sensible |
| **Espace pièces jointes / preuves** | Zone dédiée ou section CR | Libellés prudents : « preuve associée » |

**Principes Figma :**

- prévoir des **zones ou indicateurs**, pas forcément des composants définitifs ;
- éviter de suggérer une **conformité réelle** non décidée ;
- libellés prudents : « preuve associée », « signature enregistrée », « trace disponible ».

---

## 8. Impacts SSI / GreenOps / FinOps

| Axe | Impact | Garde-fou |
|-----|--------|-----------|
| **SSI** | Photos, signatures, logs = données sensibles | Pas exposition contenu complet ; métadonnées limitées |
| **GreenOps** | Éviter sur-stockage fictif devenu standard implicite | Pas galerie illimitée ; compteurs et limites MVP documentées |
| **FinOps** | Pas d'hypothèse stockage illimité | Conservation fictive — pas de coût cloud modélisé au MVP |
| **Conformité** | Ne pas promettre politique réelle | Wording non juridique ; report purge/archivage |
| **Exploitation** | Pas d'historique technique complet | Historique métier simplifié uniquement |

---

## 9. Relation avec les ADR existantes

| ADR | Relation |
|-----|----------|
| **ADR-002** — Erreurs visibles | Historique anomalies ; reprises — traces simplifiées visibles |
| **ADR-003** — Email sécurisé | PJ email référencées ; **non** stockées dans logs |
| **ADR-004** — Journalisation minimale | Logs = traces minimales ; conservation longue reportée |
| **ADR-CAND-007** — Signature optionnelle | Complémentaire — mécanisme signature à instruire P2 |
| **ADR-CAND-008** — Dashboard SAV / vue dirigeant | Complémentaire — agrégats sans détail preuves |

---

## 10. Conséquences positives

- **Préparation Figma plus fiable** — zones preuves, signature, historique cadrées ;
- **Meilleure crédibilité du démonstrateur** — preuves visibles sans sur-implémentation ;
- **Clarification des preuves visibles** — photos, signature, traces ;
- **Prévention de la surpromesse conformité** — fictif explicite ;
- **Alignement SSI / UX** — données sensibles protégées en UI ;
- **Cohérence journalisation minimale** — ADR-004 maintenu ;
- **Capitalisation SFIA** — standard conservation fictive MVP.

---

## 11. Conséquences négatives / coûts

- **Zone grise** entre preuve fictive et preuve réelle — wording critique ;
- **Risque de confusion utilisateur** si libellés imprécis ;
- **Nécessité de limiter les écrans Figma** — pas de composants « conformité » ;
- **Politique réelle encore à instruire** post-MVP ;
- **Risque de multiplication** pièces jointes / historiques visuels ;
- **Besoin de cohérence** avec signature (CAND-007) et dashboard (CAND-008).

---

## 12. Garde-fous

- [ ] ne pas définir une **politique réelle** de conservation ;
- [ ] ne pas implémenter **archivage, purge ou stockage réel** ;
- [ ] ne pas exposer de **données sensibles complètes** dans l'UI ;
- [ ] ne pas afficher les **logs techniques complets** ;
- [ ] ne pas stocker les **pièces jointes email** dans les logs ;
- [ ] ne pas présenter la signature comme **preuve juridique complète** ;
- [ ] ne pas **déclencher Figma** automatiquement ;
- [ ] ne pas produire de **backlog, user stories ou code** ;
- [ ] limiter la décision à ce qui **impacte MVP et design** ;
- [ ] reporter **conformité et conservation réelle** post-MVP.

---

## 13. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | ARB-MVP-06 formalisé ; preuves fictives visibles |
| **UX/UI** | Zones Figma cadrées ; libellés prudents ; brief §5 enrichi conceptuellement |
| **QA** | Critères preuves testables ; pas vérification purge réelle |
| **SSI** | Hypothèses conservation ; pas exposition PII |
| **GreenOps** | Sobriété — pas stockage illimité fictif |
| **FinOps** | Pas modèle coût stockage MVP |
| **Exploitation** | Historique simplifié ; pas ops archivage |
| **Architecture future** | Modèle métadonnées conservation — post-MVP |
| **Notion / gouvernance** | Jalon ADR P2 — sync après consolidation bloc |

---

## 14. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/practices/roles/rssi-method.md` | Enrichissement futur — conservation fictive, garde-fous UI |
| `docs/practices/roles/ux-ui-designer-method.md` | Enrichissement futur — zones preuves, wording Figma |
| `docs/practices/roles/product-owner-method.md` | ARB-MVP-06 formalisé ; limites MVP |
| `docs/practices/roles/architect-method.md` | Lien ADR-004 ; métadonnées — pas stockage lourd |
| `docs/practices/roles/project-manager-method.md` | Traçabilité ADR P2 ; Figma post-bloc |
| `prompts/prompt-catalog.md` | PROMPT-UX-001, PROMPT-SEC-001 impactés — pas modifié ici |
| `prompts/security/` | Checklist conservation MVP |
| `prompts/ux-ui/` | Checklist preuves avant Figma |
| **Futur Template Fictive Retention Matrix** | §5 + §6 |
| **Futur Checklist preuve / conservation MVP** | §7 + §12 |
| **Futur Standard conservation fictive MVP** | Option B retenue |

*Enrichissement méthodes rôle : après consolidation bloc ADR P2 — pas dans cette tâche.*

---

## 15. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **RSSI** | Décision structurante ; données sensibles ; limites exposition |
| **Product Owner** | Périmètre MVP ; ARB-MVP-06 ; pas sur-promesse |
| **UX/UI Designer** | Impacts écrans ; libellés ; préparation Figma |
| **Architecte** | Cohérence ADR-004 ; métadonnées vs stockage |
| **QA / Testeur** | Scénarios preuves fictives ; pas test purge |
| **Chef de projet** | Traçabilité ADR P2 ; séquence avant Figma |

---

## 16. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-SEC-001** — Revue canal email sécurisé | PJ email ; logs sans contenu sensible |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Logs minimaux ; historique anomalies |
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Zones preuves, signature, historique |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist conservation avant Figma |
| **PROMPT-GOV-001** — Sync Notion | Jalon ADR P2 post-consolidation |

*Prompts non modifiés dans cette tâche.*

---

## 17. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-005** ;
- [x] la conservation reste **fictive** ;
- [x] la politique réelle de conservation est **hors MVP** ;
- [x] les **impacts UX/UI avant Figma** sont documentés ;
- [x] les **données sensibles** sont protégées ;
- [x] les liens avec **ADR-002, ADR-003, ADR-004** sont explicites ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] aucun backlog, user story, **Figma ou code** n'est produit.

---

## 18. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-005 | Template |
| Template Fictive Retention Matrix | §5 + §6 | Template |
| Checklist preuve / conservation MVP | §7 + §12 | Checklist |
| Standard conservation fictive MVP | Option B ARB-MVP-06 | Standard |
| Checklist ADR design-impact | §7 + §19 | Checklist |
| Matrice ADR → prompts | §16 | Template |
| Matrice ADR → rôles | §15 | Template |

---

## 19. Contrôle impact design

| Élément design | Impact confirmé ? | Décision |
|--------------|-------------------|----------|
| **Zone pièces jointes** | Oui | Indicateurs / références ; pas contenu sensible |
| **Affichage photos** | Oui | Preuves métier fictives ; vignettes ou compteur |
| **Statut signature** | Oui | Optionnelle ; « enregistrée » — pas juridique complet |
| **Historique dossier** | Oui | Événements clés ; traces simplifiées |
| **Logs visibles** | Oui | Message métier ; pas dump technique |
| **Anomalies** | Oui | Aligné ADR-002 ; pas log brut |
| **Dashboard** | Oui | Agrégats ; pas détail médias — CAND-008 |
| **Vue dirigeant** | Oui | Synthèse ; pas preuves détaillées — CAND-008 |

---

## 20. Prochaines actions

- instruire **ADR-CAND-006** — notifications client sans portail client (→ ADR-006) ;
- instruire **ADR-CAND-007** — signature client optionnelle structurée (→ ADR-007) ;
- instruire **ADR-CAND-008** — dashboard SAV et vue dirigeant séparés (→ ADR-008) ;
- confirmer **ADR-CAND-009** — IA légère reportée post-MVP (pas d'ADR MVP) ;
- préparer ensuite une **synthèse ADR P2 design-impact** ;
- ouvrir **UX/UI/Figma** seulement après **consolidation bloc ADR P2**.

---

## 21. Conclusion

Cette ADR formalise une **conservation fictive limitée** des photos, signatures et logs au MVP.

Elle clarifie ce qui peut être **représenté dans les écrans** sans promettre de politique réelle de stockage, d'archivage, de purge ou de conformité. Elle **prépare Figma** en sécurisant les impacts design, tout en **reportant la conservation réelle** post-MVP.

**Figma non déclenché** par cette ADR.

---

*ADR-005 — projet Interv360, phase 02-architecture, bloc ADR P2 — gouvernance SFIA.*

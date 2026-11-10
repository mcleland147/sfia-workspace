# ML4B — ML2 / Revue individualisée du domaine D4

**Nature :** diagnostic documentaire non normatif. **Date :** 2026-11-10.
**Sources :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4`, branche `docs/next-reconciliation-produit-ml1-20261110`. **Runtime, navigateur, base active : NON OBSERVÉS.**
**Statut :** `46/46 RG-PF D4 SOURCE-MAPPED / 34 VALIDATED CONTENT + 12 CANDIDATE / PROOF PARTIAL / F2-G5 NOT RUN / CP1 OPEN`.

[Retour au diagnostic ML2](diagnostic-ml2-contrats-capacites.md) · [Index ML4B](../README.md) · [R2 canonique D4](../../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md).

## Contrat, autorité et granularité

**D4 est propriétaire** des Sujets, Acquis, Points ouverts, documents et révisions, de leur identité, provenance, histoire, conservation et accès courant. **D3/Nora décide de leur usage cognitif** ; **D6 décide**, D8 qualifie les preuves et D9 contrôle l'accès Git. L'existence d'une table ou d'une lecture D4 **ne prouve pas** la pertinence du souvenir ni l'initiative autonome de Nora.

**Corpus :** `RG-KNOW-001..015` (15) + `PF-KNOW-01..10` (10) R2 du 02/11 ; `RG-KNOW-016..020` (5) + `PF-KNOW-11..14` (4) complément documentaire validé en contenu le 03/11 = **34 références validées**. Extensions du 05/11 : `RG-KNOW-021..026` (6) + `PF-KNOW-15..20` (6) = **12 références candidates** malgré approbation de l'orientation.

Chaque ligne recense le **chemin technique propriétaire** et les **tests disponibles**, sans leur attribuer une réussite individuelle complète. Les résultats PG et Playwright du ML2 sont des **preuves historiques non réexécutées ici** ; aucun contrôle LIVE/Figma actuel n'a été réalisé.

## Sources de code et tests

| Code | Emplacement |
| --- | --- |
| `K` | [`web/src/domains/knowledge/service.ts`](../../../web/src/domains/knowledge/service.ts) |
| `D` | [`web/src/domains/document/service.ts`](../../../web/src/domains/document/service.ts) |
| `R` | [`web/src/domains/conversation/d4-read-tools.ts`](../../../web/src/domains/conversation/d4-read-tools.ts) |
| `N` | [`web/src/domains/conversation/nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) |
| `C` | [`web/src/domains/conversation/service.ts`](../../../web/src/domains/conversation/service.ts) |
| `P` | [`web/src/domains/preparation/project-context.ts`](../../../web/src/domains/preparation/project-context.ts) |
| `O` | [`web/src/lib/observability.ts`](../../../web/src/lib/observability.ts) |
| `U` | [`web/src/app/projects/[projectId]/page.tsx`](../../../web/src/app/projects/[projectId]/page.tsx) |

| Test | Emplacement |
| --- | --- |
| `A` | [`web/tests/integration/ml2-knowledge-documents.pg.test.ts`](../../../web/tests/integration/ml2-knowledge-documents.pg.test.ts) |
| `B` | [`web/tests/integration/ml2-corrective-integrity.pg.test.ts`](../../../web/tests/integration/ml2-corrective-integrity.pg.test.ts) |
| `C` | [`web/tests/integration/ml2-critical-corrective.pg.test.ts`](../../../web/tests/integration/ml2-critical-corrective.pg.test.ts) |
| `D` | [`web/tests/integration/ml2-three-blocker.pg.test.ts`](../../../web/tests/integration/ml2-three-blocker.pg.test.ts) |
| `E` | [`web/tests/integration/ml2-pg-contention.pg.test.ts`](../../../web/tests/integration/ml2-pg-contention.pg.test.ts) |
| `F` | [`web/tests/e2e/ml2-smoke.spec.ts`](../../../web/tests/e2e/ml2-smoke.spec.ts) |

**Tests représentatifs :** Q15/Q16 (capitalisation), Q17/Q28 (Sujets), Q10–Q14 (version et conflit), Q19/Q20 (récupération hors fenêtre), C1–C6, FIX-D4, UNKNOWN-CAP et ASSIST-REUSE. Vérifier les oracles exacts plutôt que supposer que chaque suite couvre la règle entière.

## Matrice des 26 règles D4

### 20 règles validées / compléments approuvés
| ID | Engagement propriétaire R2 (intitulé) | Code | Tests proches | Qualification au SHA |
| --- | --- | --- | --- | --- |
| `RG-KNOW-001` | Capitalisation sélective | `KC` | AB | Capitalisation heuristique ; pertinence LIVE non prouvée |
| `RG-KNOW-002` | Propriété du projet | `KDP` | AC | Owner Pilote et préparation vérifié dans les services |
| `RG-KNOW-003` | Sujets vivants | `K` | AB | Rename/merge/split PG ; UX non vérifiée |
| `RG-KNOW-004` | Points ouverts transversaux | `K` | AB | Points ouverts conservés ; accès transversal UX non certifié |
| `RG-KNOW-005` | Recommandations proportionnées | `KC` | A | Aucune décision D6 issue d'une recommandation |
| `RG-KNOW-006` | Provenance non fictionnelle | `KDR` | AB | Provenance portée en DB ; exactitude des citations LIVE à requalifier |
| `RG-KNOW-007` | Information historique distincte du courant | `KDR` | BC | Révisions stockées ; actualité d'une source externe non garantie |
| `RG-KNOW-008` | Contradictions non écrasées | `KN` | — | Gestion des contradictions cognitives non éprouvée LIVE |
| `RG-KNOW-009` | Résolution fondée sur une preuve | `KN` | — | Décision D6 séparée ; négatif LIVE à exécuter |
| `RG-KNOW-010` | Résultats et preuves non confondus | `KC` | A | Déclaration ≠ preuve D8, frontière de propriété |
| `RG-KNOW-011` | Matière disponible pour la reprise | `KRC` | AC | Reprise au-delà de six messages testée PG ; pertinence LIVE non prouvée |
| `RG-KNOW-012` | Signalement d’actualité | `KR` | C | Statut/source/version présents, fraîcheur Git externe dépend D9 |
| `RG-KNOW-013` | Dégradation explicite | `KR` | C | Statuts DENIED/STALE/EMPTY disponibles ; formulation Nora à qualifier |
| `RG-KNOW-014` | Isolement et accès actuel | `KDR` | CD | Isolation PG disponible ; révocation source externe non prouvée |
| `RG-KNOW-015` | Reprise après interruption | `KPC` | AD | Reprise fil et références, restart DB réel non démontré |
| `RG-KNOW-016` | Ressource documentaire canonique | `D` | AB | Identité documentaire durable présente |
| `RG-KNOW-017` | Versions reliées | `D` | AB | Versions et concurrence PG ; rendu de diff UX à vérifier |
| `RG-KNOW-018` | Sauvegarde et récupération honnêtes | `DC` | BC | AVAILABLE/UNKNOWN/SAVING et relecture ; narration Nora contradictoire en RECETTE ML4 |
| `RG-KNOW-019` | Retrouvabilité indépendante de l'historique affiché | `DRU` | AF | Document retrouvable par ID ; UX inspection à vérifier |
| `RG-KNOW-020` | Portée et accès actuels | `DR` | C | Droits contrôlés ; changement en cours de mission non testé |

### 6 règles candidates (observabilité/lecture complémentaire)
| ID candidat | Objet | Code | Tests proches | Qualification au SHA |
| --- | --- | --- | --- | --- |
| `RG-KNOW-021` | Lecture complémentaire autorisée | `RNK` | C | Candidate : recherche supplémentaire sous owner et budget |
| `RG-KNOW-022` | Résultat de lecture et couverture honnêtes | `RN` | C | Candidate : couverture de lecture ≠ citation réellement exploitée |
| `RG-KNOW-023` | Connaissance distincte de l'activité | `OK` | — | Candidate : traces techniques ≠ nouveau fait D4 |
| `RG-KNOW-024` | États distincts de consultation et effet | `ORD` | C | Candidate : lecture/sauvegarde observées mais lien complet à prouver |
| `RG-KNOW-025` | Reprise et corrélation des commandes D4 | `DKC` | BD | Candidate : retry/corrélation PG ; narration post-effet incomplète |
| `RG-KNOW-026` | Exploitation non intrusive | `OK` | BD | Candidate : journal métier distinct de traces ; confidentialité à confirmer |

## Matrice des 20 scénarios D4

### 14 scénarios validés / compléments approuvés
| ID | Oracle fonctionnel (abrégé) | Code | Tests proches | Qualification |
| --- | --- | --- | --- | --- |
| `PF-KNOW-01` | Exploration sélective | `KC` | A | PG sélectivité ; dix échanges LIVE non reproduits |
| `PF-KNOW-02` | Reprise après plusieurs échanges | `KRC` | A | PG recherche hors fenêtre ; reformulation LIVE non testée |
| `PF-KNOW-03` | Réorganisation des Sujets | `K` | AB | PG rename/merge/split ; UX des liens non qualifiée |
| `PF-KNOW-04` | Résolution factuelle / réserve gouvernée | `KN` | — | Résolution d'une contradiction et D6 non testées LIVE |
| `PF-KNOW-05` | Git candidate vs baseline | `KN` | — | Baseline Git externe propriétaire D9, pas preuve ML2 |
| `PF-KNOW-06` | Connaissance interprojet | `KR` | C | Isolation sans transfert d'autorité, effet interprojet non testée |
| `PF-KNOW-07` | Source inaccessible | `KR` | C | Refus PG ; Nora LIVE doit expliciter la limite |
| `PF-KNOW-08` | Transition de cycle | `KC` | — | Transition CKI après ML3 à requalifier E2E |
| `PF-KNOW-09` | Retour d'exécution non prouvé | `KC` | — | Rapport Cursor non prouvé relève D8/ML5 |
| `PF-KNOW-10` | Sas puis projet | `KP` | AF | Même fil sas/projet PG/FAKE, valeur cognitive partielle |
| `PF-KNOW-11` | Document repris dans nouvelle conversation | `DRC` | A | Identité/version DB retrouvées ; provenance LIVE à préciser |
| `PF-KNOW-12` | Révisions concurrentes | `D` | AB | CAS conflit PG constaté dans tests |
| `PF-KNOW-13` | Droit d'accès retiré | `DR` | C | Refus propriétaire PG ; retrait en cours de lecture à tester |
| `PF-KNOW-14` | Version remplacée | `DR` | A | Versions conservées ; affichage courant UX à vérifier |

### 6 scénarios candidats
| ID candidat | Oracle fonctionnel (abrégé) | Code | Tests proches | Qualification |
| --- | --- | --- | --- | --- |
| `PF-KNOW-15` | Recherche incrémentale | `RN` | C | Candidate : outils D4 search/read présents, cas LIVE borné |
| `PF-KNOW-16` | Droits et fraîcheur modifiés | `RN` | C | Candidate : droits et fraîcheur par lecture, LIVE non complet |
| `PF-KNOW-17` | Lecture et écriture distinctes | `RDN` | AC | Candidate : distinction opérations, chaîne LIVE totale non prouvée |
| `PF-KNOW-18` | Consultation refusée et réponse Nora | `RN` | C | Candidate : outils refusent, réponse Nora post-refus non requalifiée |
| `PF-KNOW-19` | ACK perdu après sauvegarde | `DC` | BD | Candidate : ACK perdu PG réconcilié, Nora contredit AVAILABLE en recette ML4 |
| `PF-KNOW-20` | Fusion/séparation avec rollback | `KO` | BD | Candidate : journal/rollback PG, traces et rendu navigateur à vérifier |

## Écarts, risques et limites de preuve à instruire

| Repère | Niveau de constat | Analyse et suite probatoire |
| --- | --- | --- |
| `ML2-D4-01` | **Limite de code** | [`maybeCapitalizeFromExchange`](../../../web/src/domains/knowledge/service.ts) indique explicitement `regex/lexical` ; [`selectRelevantKnowledgeContext`](../../../web/src/domains/knowledge/service.ts) renvoie `lexical-heuristic`. La conservation fonctionne, mais l'identification spontanée d'un acquis implicite et le rappel d'une formulation éloignée ne sont pas prouvés en LIVE (`KNOW-001/011`). |
| `ML2-D4-02` | **Contradiction utilisateur observée historiquement** | [RECETTE ML4 §11](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md) : révision D4 `AVAILABLE` et Nora qui affirme ne pas pouvoir attester l'enregistrement. Défaut de **restitution de résultat**, pas perte DB démontrée ; cause à déterminer, ne pas dupliquer `ML4-REC-08`. |
| `ML2-D4-03` | **UX / preuve manquante** | `renameSubject/mergeSubjects/splitSubject` et rollback existent et sont testés PG. La cohérence des vues Journal/Sujets, la pertinence de la réorganisation par Nora et Figma/runtime **ne sont pas vérifiées**. |
| `ML2-D4-04` | **Accès / preuve bornée** | `d4-read-tools.ts` vérifie droits, état `AVAILABLE` et budget à chaque lecture ; tests PG négatifs. Révocation intervenue pendant une mission et sources Git REAL non requalifiées ici. **Aucune fuite observée.** |
| `ML2-D4-05` | **Résilience / preuve incomplète** | CAS et réconciliation de versions testés PG, SAFE-01 abort client sur DB éphémère ; **vraie perte de connexion serveur et restauration globale non prouvées**, restitution Nora après ACK perdu à requalifier. |

## Résultat et suite

**46/46 références D4 individualisées et raccordées au code et aux tests**, pas 46/46 conformités. Les risques transversaux D1/D2 et `ML4-REC-08` sont référencés sans être comptés comme de nouvelles anomalies indépendantes.

**Suite ML4B :** revue individualisée D3, analyse cognitive comparée et parcours E2E03/E2E04 en reliant valeurs métier, traces D4, comportement Nora et surfaces Figma. Pas de correction runtime, d'acceptation ML2 ni de gate B induits.

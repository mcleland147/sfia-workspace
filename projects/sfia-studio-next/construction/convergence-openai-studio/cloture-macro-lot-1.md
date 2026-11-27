# Convergence OpenAI–Studio Next — Bilan de clôture du macro-lot 1

| Champ | Valeur |
|---|---|
| Date | 27 novembre 2026 (Europe/Paris) |
| Autorité | Morris — acceptation explicite des réserves et GO documentaire en conversation |
| Statut | ACCEPTATION MORRIS AVEC RÉSERVES — fin de construction du périmètre ML1 ; régularisation documentaire du Handoff technique **effectuée** (réf. immuable ci-dessous) |
| Périmètre | R5 / ML5 / Livraison 1 — macro-lot 1 de convergence, pas le jalon historique R5/ML1 |
| Nature | Trace factuelle de la décision et bilan as-built de synthèse ; ne remplace ni les contrats ni les preuves primaires |
| Mandat | D1 documentaire borné aux documents de convergence sur la branche dédiée existante ; aucun code, PR, merge, promotion, release, activation ou ADOPTED |
| Base documentaire | `1e2e188d57d9d1b865833c9923e92f01a9d6df42` — `docs/next-openai-studio-convergence-20261126` ; main observé `997897fd7cf914771e7d08e8030dc7123fab7d25` |

## 1. Décision et portée

Morris accepte les réserves identifiées lors de la revue de sortie et demande de finaliser la documentation avant d'engager le macro-lot 2 — Cognition spécialisée et intelligence documentaire. Il autorise la publication Git des documents liés à cette convergence. Cette acceptation porte sur le socle DEV construit et ses limites explicites ; elle ne transforme pas les résultats partiels en preuves complètes et ne prononce ni l'acceptation de ML5 livraison 1, ni Gate C, ni la promotion RECETTE, ni une adoption globale.

La construction ML1 de convergence n'est pas à rouvrir par défaut. La revue précédente a identifié une régularisation FULL du Handoff restant due (voir §5). Elle n'est ni levée ni remplacée par ce bilan. La préparation du lot 2 est autorisée ; toute exécution technique garde ses gates propres et doit vérifier les interfaces du socle.

## 2. Résultats construits et niveau de preuve

| Capacité | Résultat et niveau de preuve | Limite opérationnelle |
|---|---|---|
| Admin Usage/Costs | Collectes LIVE bornées Costs et Completions, persistance PG, identité dédiée sfia_admin_collector_ops rapportée current_user/session_user, SELECT pilots refusé ; migration 026 rapportée DEV | Pas de collecte automatique, identité org historique non prouvée, pas de nouveau LIVE sans GO |
| Ledger / FinOps | Lecture SQL de coûts estimés réellement persistés ; rapprochement historique PARTIAL/NON_COMPARABLE ; la fixture 3,50 USD n'est pas une estimation réelle | Pas d'écart financier exploitable sur les données historiques ; couverture partielle |
| Autorisation financière | Chemin produit masque les montants agrégés fournisseur tant qu'il n'existe pas d'habilitation financière appropriée | Pas de restitution positive autorisée en production à ce stade ; contrôle fail-closed, pas de nouveau rôle inventé |
| Frontier | Suppression de qualifyRenew ; borne native requise pour attach LIVE ; sauvegarde/rechargement des compteurs ; 10/10 cas déterministes rapportés | COVERAGE VERIFIED sur cas exercés, pas preuve exhaustive de concurrence/redémarrage réel ; gates expérimentaux fermés |
| Tracing | SDK réel et 106 événements locaux rapportés en campagne ; pas d'export distant observé | Corrélation IQ partielle ; tracing expérimental OFF |
| WEB public | Admission humaine exercée, restitution PARTIAL avec référence MDN ; première réponse autorisée en erreur, renew historique non conforme ; correction déterministe ultérieure | A3 option 2 : incertitude sur recherches facturables acceptée uniquement dans mandat borné ; WEB LIVE OFF, MIXED CLOSED ; aucune nouvelle preuve LIVE WEB après correctif |
| Continuité D3 | V1 reconstruction Studio exercée LIVE ; travail principal 8 checkpoints / revision 9 | Conserver V1 ; V2 cache / V3 previous_response_id / V4 compaction non qualifiées, OFF et différées ; aucune persistance externe nouvelle autorisée |
| UX 13.03 | Bandeau « Comparaison des coûts » transposé après GO visuel ; API / DOM DEV concordants pour NON_COMPARABLE | Fixture COMPARABLE isolée, pas de preuve navigateur des quatre états, des filtres ou du responsive complet dans le pack ; capture finale non consultée par ChatGPT |

## 3. Données et périmètre de mesure

Fenêtre historique : 26/11/2026 00:00 UTC inclus → 27/11/2026 00:00 UTC exclu.

- Snapshot Costs LIVE `acol_mwyd1ifk_552295cf` : 3,7127983200 USD, un projet fournisseur, `org:unspecified`, 1 page.
- Snapshot Usage Completions `acol_mwyd1rbb_45d706ae` : 3 934 634 tokens entrants, 150 296 sortants ; 335 requêtes rapportées à la qualification I2, champ num_requests nul dans l'oracle ciblé ultérieur : ne pas assimiler les métriques ni extrapoler.
- Oracle SQL du ledger DEV : 232 observations, 8 projets Studio, 3 modèles, 2 766 328 tokens entrants, 89 996 sortants, somme estimée 1,3046599200 USD ; 22 coûts nuls au sens SQL NULL (inconnus, pas gratuits), couverture PARTIAL pour les 232 lignes.
- Les populations et identités ne sont pas prouvées équivalentes. Aucun delta de coûts réel ne doit être présenté. Le test positif 12,40 / 13,10 USD est une fixture, pas une mesure LIVE.
- Le navigateur rapporte une estimation partielle de 1,07230685 USD (1,07 affiché), sur une autre fenêtre : période 30 jours sans borne de fin explicite. API et DOM concordants sur NON_COMPARABLE, coût fournisseur indisponible. Ce n'est pas une concordance chiffrée PG/API/DOM sur la journée de l'oracle.

## 4. Réserves acceptées et trajectoires de sortie

| Réserve | Impact / protection actuelle | Propriétaire de suivi et exit |
|---|---|---|
| org:unspecified historique et mapping non prouvé | Pas de COMPARABLE forcé, snapshot original préservé | FinOps / Morris : identité indépendante et fenêtre bornée lors d'une future collecte autorisée |
| Habilitation financière absente | Agrégat fournisseur masqué ; pas d'autorité par simple ownership Studio | Domaine droits + FinOps, arbitrage Morris avant ouverture ; test multi-Pilote et révocation |
| windowEnd produit non renseignée hors env | NON_COMPARABLE honnête | FinOps / UX : fenêtre issue des filtres et oracle sur même population avant comparaison réelle |
| Couverture coût PARTIAL | Inconnues visibles, pas de delta réel | FinOps : attribution, tarifs, provenance et granularité non chevauchante ; amélioration selon surfaces utilisées |
| Frontier : concurrence / restart effectifs non entièrement prouvés | Correctif déterministe acquis ; pas d'activation expérimentale | Propriétaire Frontier : preuve de conservation cumulative au niveau frontière, restart effectif, concurrence et contacts incertains avant nouvelle campagne LIVE concernée ; pas de remise à zéro implicite |
| WEB historique PARTIAL, enveloppe renouvelée | Ne pas requalifier rétrospectivement ; WEB OFF | D6/B1 + Frontier : preuve ciblée avant réactivation, A3 bornée, mesure inconnue visible, aucun réseau en cas de refus |
| Tracing IQ partiel | Tracing local expérimental OFF | OBS : améliorer la corrélation si elle affecte l'usage ou l'autorité ; pas d'export privé |
| V2–V4 continuité native | Non adoptées et OFF ; V1 conservée | D3 : comparer uniquement si valeur démontrable et compatibilité DATA-01, décision distincte |
| UX états/viewport non exercés | Bandeau nominal NON_COMPARABLE exercé, fixture isolée | FinOps UX : états et responsive ciblés avant qualification/promotion concernée |
| 12 erreurs TS historiques | Rapportées hors blast radius, non vérifiées directement | Suivi ML5 : baseline et traitement approprié, pas de correction générale ici |

Ces réserves ne sont pas des preuves d'absence de défaut. Ne pas les effacer dans le suivi. L'accès aux nouvelles ressources du lot 2 ne doit ni dépendre d'un montant fournisseur non autorisé, ni contourner les limites de la Frontier ; avant tout LIVE, lever les réserves qui affectent le chemin effectivement utilisé.

## 5. Provenance, Git et complétude

Sources de preuve principales (liens immuables) :
- [Intervention 1, fondation](https://github.com/mcleland147/sfia-workspace/blob/3444e7951a9992c78ce982a6cf14f4031f47b306/sfia-review-handoff/latest-chatgpt-review.md).
- [Intervention 2, LIVE régularisée](https://github.com/mcleland147/sfia-workspace/blob/1485aa9206d3d30fd7becc4f240f72a377e1aa2e/sfia-review-handoff/latest-chatgpt-review.md), blob 0b8090cf1ef0dbea2d006ed8c3acd18c523b70e5.
- [Delivery de finition](https://github.com/mcleland147/sfia-workspace/blob/8dc9eab24a589398ebf90a6a561024ffd081889e/sfia-review-handoff/latest-chatgpt-review.md), blob 904dd5e46aee2406aaad691edfd613f12b65a4a8 ; cycle 8 Critical INC/EVOL ; publication mono-fichier vérifiée.
- [Cadrage](cadrage.md), [contrat fonctionnel](contrat-fonctionnel.md), [contrat technique](contrat-technique.md), [SEF](../../governance/SEF.md), [ENV-01](../../governance/environnements-recette-et-promotions.md), [DATA-01 / ADR R4](../../governance/decisions/2026-11-04-r4-architecture-exit.md), [SEM](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md).

Candidat produit rapporté (NON OBSERVÉ directement) : branche sfia/next-ml5-integrated-delivery-20261123, HEAD 4a4ff3f1e56f0dc6806dde68dc8ce2292ddef56d, tree web cddf6e8d65c1b677baef77d40a2f499a8b32180d, BUILD_ID gBK_bNHmcAc2_20h5VGPd, digest dfeef73455073700bdee8af2e6662772874cdc4034c2f2eb867d689ef27f545e. DEV :3100 / PG :5433 migration 026 ; RECETTE :3200 PID 89199 intacte selon rapport. Aucun push produit ; mergeabilité NON OBSERVÉE. Tracing, WEB LIVE et continuité native OFF selon pack.

Handoff de finition initial : `8dc9eab24a589398ebf90a6a561024ffd081889e` (blob `904dd5e46aee2406aaad691edfd613f12b65a4a8`) — pack incomplet (diffs manquants déclarés).

**Régularisation FULL effectuée** (pas de nouveau développement LIVE, ne rouvre pas ML1) :
- SHA immuable : [`8e1d82dc119e63ec326b1d708c66522b5faf6d83`](https://github.com/mcleland147/sfia-workspace/blob/8e1d82dc119e63ec326b1d708c66522b5faf6d83/sfia-review-handoff/latest-chatgpt-review.md)
- Blob : `57bea22ba201fcb02062edc2071cd66767909e82`
- Trace locale : [handoff-ml1-regularization-immutable.md](handoff-ml1-regularization-immutable.md)

Les réserves techniques acceptées (§4) restent inchangées. Les as-built, registre de couverture et delivery-history locaux ne sont pas écrasés par cette régularisation.

## 6. Suite autorisée

Préparer le macro-lot 2 — cognition spécialisée et intelligence documentaire : Decisions comme ressource consultative sans HumanDecision ; recherche documentaire comparative (stratégie existante vs Retrieval/Embeddings/Vector Stores/File Search) ; Files/Vision/PDF et provenance exacte, droits et versions. Comparer les bénéfices et coûts par résultat utile ; un seul propriétaire par responsabilité, D3/V1 et D4/D9 sources de vérité, frontière et FinOps communs, D6 autorité. Aucun moteur concurrent ni persistance fournisseur implicite. DATA-01 et gates d'émission applicables. Cadrage et qualification des sources avant mandat Cursor ; GO spécifique avant nouveaux effets LIVE, données hébergées, migration, changement normatif ou promotion. Lot 3 audio hors périmètre.

R5 IN PROGRESS / ML5 OPEN / Livraison 1 non acceptée globalement / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED. Aucun changement de main ou RECETTE.

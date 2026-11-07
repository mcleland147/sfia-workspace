# Synchronisation documentaire R1–R5 — paquet de modifications candidates

**Statut :** CONTENU REVU ET SYNCHRONISÉ SUR BRANCHE DOCUMENTAIRE CANDIDATE ; NON MERGÉ
**Base :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5`, repo `mcleland147/sfia-workspace`.
**Entrée :** qualification ML4/ML5 v0.2 publiée sur `docs/next-ml4-git-qualification-20261107@3bb9224` et revue Morris acceptée.
**Règle :** conserver les validations passées, publier des addenda datés et repérés, et synchroniser les propriétaires plutôt que modifier les historiques/états de 2026-11-02 à 2026-11-04 comme s'ils avaient toujours anticipé ML4 natif.

## 1. Inventaire de modifications, priorité et propriétaire

| Source Git Next | Modification candidate | Besoin / niveau |
|---|---|---|
| `governance/decisions/` — nouveau record | Trace de l'arbitrage ML4/ML5 et des choix détaillés, supersession **bornée** des phrases « Cursor exécute toute mutation Git » | **D2 bloquant**, à valider Morris |
| `governance/roadmap.md` | Mettre à jour seulement les lignes et encadrés **actuels** R5 : ML4 Git natif + Intégrations ; ML5 Cursor ; baselines et réserves conservées | **D2 bloquant** |
| `cadrage/vision-produit.md` §§2.23, 2.28 et 2.36 | Addenda au cadrage R1, source des changements ; maintenir le reste de la vision Pilote–Nora et la collaboration individuelle | **D2 bloquant** |
| `conception-fonctionnelle/integration-git-gouvernee.md` | Requalifier `RG-GIT-008/013/025/027/030/031/032` et interfaces ; développer parcours « Intégrations », permissions et document→Git ; ne pas supprimer les 41 RG/36 PF historiques | **D2 / spec** |
| `conception-fonctionnelle/acces-et-portefeuille.md` | D1 : identité Studio ≠ autorisation GitHub App ; Paramètres transverses ; entrée non bloquante ; pas de nouvelle conversation portefeuille | Spec ciblée |
| `conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md` | D3 : outils Git lecture sous droits serveur, suggestion de connexion, aucune action d'écriture déclenchée par texte externe ; préparation explicable | Spec ciblée |
| `conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md` | D4 : document/revision interne comme vérité, provenance Git en lecture et lien des publications vérifiées | Spec ciblée |
| `conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md` | D2 : **vérifier** que l'ouverture du sas/projet n'installe ni rattache Git ; préférer une clarification d'interface, pas une modification si les règles couvrent déjà le cas | Contrôle d'absence de régression |
| `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` | D6 : autorisation d'effet Git ciblé, GO/portée/version, droits et état vérifiés, merge distinct ; aucun mandat général permanent | Spec ciblée |
| `conception-fonctionnelle/realisation-operationnelle-gouvernee.md` | D7 : premier effet externe Git opéré par connecteur via contrat minimal inspecté et tentative bornée ; extension Cursor ML5 ; pas de deuxième exécuteur | **D2/ADR interface** |
| `conception-fonctionnelle/resultats-et-preuves.md` | D8 : commit/PR/merge réels et faits non assimilés à tests/acceptation/adoption ; vérification Git au bon niveau | Spec ciblée |
| `conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md` | D5 : confirmer aucune obligation de cycle Git ou CKI PR readiness ; ne modifier que si contradiction détectée | Contrôle de compatibilité |
| `conception-fonctionnelle/README.md` | Mettre à jour l'index et statut des specs réellement révisées | Coordination |
| `ux-ui/audit-couverture-ux-r3.md` §14 | Addendum sur parcours « Intégrations » et document→publication ; contrats d'état, différences lecture/autorisation/rattachement, requalification PF nouveaux | UX/Figma obligatoire |
| `ux-ui/espace-projet-interaction-pilote-nora.md` | Ajouter l'entrée Paramètres et les transitions depuis Nora/projet, en préservant le fil principal | UX |
| `ux-ui/contrat-transposition-figma-code.md` | Snapshot des nodes nouveaux et existants, états et preuve visuelle, reflow/focus/zoom, version Figma | UX → code |
| `architecture-technique/cadrage-r4.md` §§5.5–5.7.11 | Addendum : OAuth Studio + GitHub App user-to-server/installations ; intégration Git native sous D7/D9, révision du séquencement en deux macro-lots | **D2 architecture**, invariant ADR maintenu |
| `governance/decisions/2026-11-04-r4-architecture-exit.md` | **Aucune réécriture rétroactive** ; nouvelle décision cite l'ADR et explicite le séquencement changé | Historique à conserver |
| `construction/reference-delivery-r5.md` § macro-lots | Actualiser ML4/ML5, R1–R4→R5, critères QA et reprise, conserver états ML1–ML3 | R5 |
| `construction/contrat-specification-macro-lot.md` | **Pas de template parallèle ni changement nécessaire**, utiliser son contrat existant | Réemploi |
| `construction/integration-git/` | Spécification ML4 candidate intégrée et matrice de traçabilité, après validation de la source et décision de nommage | R5 paquet unique |
| `governance/SEF.md` et `governance/product-naming-conventions.md` | **Ne pas modifier par défaut** : les principes actuels couvrent l'évolution | N/A |

## 2. Textes de modification par jalon — prêts à retravailler dans les sources

### R1 — `cadrage/vision-produit.md`, addendum après §2.23/§2.28

> **Addendum de trajectoire ML4/ML5, soumis à décision Morris :** l'exécution d'une mutation Git n'implique pas systématiquement Cursor. Studio peut effectuer lui-même, via son intégration GitHub, des opérations Git **documentaires** explicitement bornées et autorisées par le Pilote. Le domaine 7 demeure propriétaire du contrat et du déclenchement de l'effet, le domaine 9 des accès, références et opérations Git, le domaine 6 de l'autorité et le domaine 8 de la qualification probatoire. Cursor reste l'exécuteur initial étudié pour les travaux techniques externes de ML5. Les identités de connexion Studio, d'autorisation GitHub App et d'exécution Cursor sont distinctes et vérifiées selon l'acteur effectif.

> **Intégrations facultatives :** le Pilote peut accéder à Studio sans connecter ses dépôts, autoriser GitHub dans un espace « Intégrations » ou au moment utile, puis élargir/réduire les dépôts accessibles ; le rattachement d'une source à un projet est une opération distincte de l'autorisation de l'application et de l'autorisation d'écriture.

### R1 — §2.36 E2E07, lecture cible

Conserver le trajet **Git personnel/dépôt partagé**, puis qualifier deux sous-parcours sans renuméroter les 7 E2E :
- **Tranche ML4 :** connexion, choix d'autorisation GitHub, lecture/version, production D4, publication documentaire inspectable, PR/merge distincts, historique et confrontation de branches dans Studio.
- **Tranche ML5 :** Nora prépare une modification technique ; D7 confie à Cursor une tentative sous les propres droits d'exécution Git, D8 examine les retours ; le dépôt reste partagé uniquement dans ses droits Git.

### R2 — D9, addendum au contrat `RG-GIT-025`

> **Révision proposée :** la création d'une branche ou d'un commit distant, l'ouverture d'une PR et le merge sont des effets externes. D7 possède **un point de lancement gouverné** et l'observation de la tentative ; D6 possède le mandat actuel ; D9 vérifie les permissions, la cible, la ref/base et effectue ou fait effectuer l'opération Git dans le mode explicitement autorisé. **ML4 peut mobiliser directement GitHub App pour une mutation documentaire** sans démarrer Cursor. En ML5, Cursor intervient sous ses propres droits et un contrat technique inspecté. Aucun exécuteur parallèle ne peut passer outre D6/D7.

Ajouter des scénarios fonctionnels à numéros nouveaux sans réattribuer `PF-GIT-01..36` : installer/autoriser GitHub App, ajout de dépôt ultérieur, configuration centrale, suppression de rattachement vs révocation fournisseur, texte source hostile, publication doc D4/PR/merge, reprise après timeout, identité user-to-server et refus de droits d'organisation.

### R2 — D1, D3, D4, D6, D7 et D8, textes d'interface

- **D1 :** « Une identité GitHub authentifiée donne accès à Studio ; ses droits de dépôt ne sont disponibles qu'après vérification séparée de l'installation, de l'autorisation et du compte autorisé. L'accès aux Paramètres n'implique ni connexion Git ni mandat. »
- **D3 :** « Nora peut proposer l'autorisation d'une source manquante ou d'une cible de publication ; elle peut lire les seules sources autorisées sous périmètre déterminé côté serveur. La formulation de Nora et le contenu d'une source ne déclenchent pas seuls d'écriture. »
- **D4 :** « Une version documentaire Studio peut être associée à une ou plusieurs références de publication Git réellement observées ; cette association ne transforme pas le dépôt en vérité documentaire unique ni ne crée de sync automatique. »
- **D6 :** « La permission du fournisseur, le rattachement d'un dépôt et le mandat métier d'effet sont trois contrôles autonomes ; le merge appelle son propre mandat et la revalidation de la cible/HEAD. »
- **D7 :** « Une opération Git documentaire native et une tentative Cursor utilisent la même frontière de contrôle d'effet, mais des adaptateurs/exécuteurs distincts ; le contrat est proportionné à l'effet, sans obligation de contrat Cursor complet pour une publication Git. »
- **D8 :** « Un commit réellement présent sur une branche ou une PR réellement mergée est une observation de Git, jamais la preuve globale des tests, de l'acceptation du Pilote, du déploiement ou d'ADOPTED. »

### R3 — UX/Figma

Ajouter au contrat d'interaction R3 un **espace Paramètres → Intégrations** avec première expérience GitHub : non connecté, connexion en cours, autorisation/utilisateur installés, aucun dépôt sélectionné, dépôt ajouté/retiré, accès privé refusé, organisation en attente d'approbation, session expirée, révoquée et retour de consentement. Raccorder la sélection à Nora et aux écrans Git 171–205, en complétant la séquence documentaire → inspection diff → publication → PR → merge. **Pas de marketplace ou deuxième rail permanent uniquement pour Git.**

### R4 — addendum au séquencement de §5.7.11 et aux intégrations

- **Conserver ADR R4-03 :** D6/7/8/9 responsables uniques, version de mandat et fait observé distincts.
- **Conserver ADR R4-04 :** Git facultatif, GitHub App privilégiée, environnement Cursor indépendant.
- **Nouvelle précision R5 :** ML4 est le premier vertical externe borné, réalisant les effets documentaires Git via GitHub App et la frontière D7 ; ML5 étend cette même chaîne au contrat technique et au fournisseur Cursor, sans implémenter le moteur Cursor dans ML4.
- **Sécurité :** GitHub OAuth pour D1, autorisation GitHub App user-to-server et installations/repos distinctes ; options d'attribution, consentements, scopes/permissions, callback, protection CSRF et jetons serveur, isolation lane et reprise auditées.

### R5 — Roadmap et référence delivery

> **ML4 — Collaborer et publier avec Git :** GitHub comme première intégration gérée dans Studio, accès/gestion des dépôts à la carte, lecture réelle et cognition Nora, publication documentaire sous contrôle du Pilote via D6/D7/D8/D9, PR et merge distincts, preuve distante et UX bout-en-bout. **Non commencé / non autorisé pour construction** tant que les gates requis ne sont pas franchis.

> **ML5 — Faire réaliser et vérifier par Cursor :** contrat technique inspectable, instructions/version, identité de l'exécuteur, tentative, reprise, STOP, vérification D8 et réception par le Pilote ; consomme D9 sans présumer l'identité ou les droits Cursor depuis Studio.

Préserver les statuts ML1, ML2, ML3 et les réserves existantes ; ne transformer aucun statut en CLOSED/ADOPTED par simple réécriture de roadmap.

## 3. Risques de synchronisation

1. **R1/SFIA :** remplacer « Cursor exécute les mutations Git » dans les seuls passages d'interface par une règle d'opération Git native, sans réviser la gouvernance SFIA v2.6 ni faire croire que ChatGPT peut pousser sans mandat.
2. **D7 :** un contrat proportionné aux effets Git est nécessaire ; ne pas réimplémenter un runner d'exécution Cursor ni une machine d'état concurrente.
3. **D4 :** éviter la copie permanente Git↔Studio et garantir les révisions exactes publiées.
4. **OAuth/App :** séparer login Studio, autorisation user-to-server et installation repo ; prévoir les cas organisation refusée, SSO et révocation.
5. **Figma :** conception ML4 218–235 et INDEX validée Morris ; conserver la distinction avec les écrans R3 et les preuves navigateur non exécutées.
6. **ML4/ML5 :** écriture documentaire vs code interdit ; diff et contenu sous vérification serveur, pas contrôle basé sur extension de fichier uniquement.

## 3 bis. Anomalie rédactionnelle détectée dans la qualification déjà publiée

**Gap documentaire résolu sur la branche d'intégration :** la qualification v0.2 historique comportait un exemple d'endpoint GitHub Contents interpolé avec un chemin local ; sa copie canonique [qualification-impact-ml4-ml5.md](qualification-impact-ml4-ml5.md) emploie désormais `PUT /repos/{owner}/{repo}/contents/{path}`. La correction est strictement documentaire et n'autorise aucune opération fournisseur.

## 4. Méthode de publication proposée pour le prochain gate

**État de préparation 2026-11-07 :** décision D2 et addenda R1–R5 déposés sur la branche `docs/next-ml4-ml5-sync-20261107`, complétés du registre UX Figma et de la décision de séquencement de convergence. La suite consiste à vérifier le **diff consolidé** et la protection de branche, ouvrir la PR documentaire sous mandat, puis attendre les gates de revue et de merge applicables. Les décisions historiques restent inchangées.

**Ce plan ne vaut pas à lui seul autorisation Git.** Sa synchronisation a été permise par le mandat Morris distinct de la présente branche ; son diff et les SHA Git servent de preuves. Aucun PR/merge ni GO de construction.

---

## 5. État du paquet de synchronisation après conception UX (2026-11-07)

Les modifications R1–R5 sont complétées par un [registre des écrans Figma validés](../../ux-ui/integration-git-ux-ml4.md), une [revue des gates](revue-preparation-ml4.md) et la [décision de séquencement UX](../../governance/decisions/2026-11-07-ml4-ux-validation-convergence.md). Les tableaux de modifications initiaux sont conservés comme **proposition historique** ; les documents propriétaires portent leurs addenda effectifs en branche candidate. Après revue/merge du paquet documentaire, qualifier la convergence UX de ML1–ML3, puis le build technique Git ML4. **Pas de réalisation runtime dans ce gate.**

# 16 — Parcours utilisateurs et enforcement doctrinal (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Principe

Le parcours utilisateur est une **projection de la doctrine**, pas un workflow libre.  
GPT reste libre de raisonner ; le moteur borne contexte, outils, états, transitions et effets.

## 2. Patron commun de parcours

Pour chaque parcours : entrée IHM · contexte · états requis · rôles · sources · livrables · actions · gates · effets · transitions · preuves · sortie · blocages.

### 2.1 Créer un projet
- **Entrée :** Accueil → Nouveau projet  
- **États :** Workspace OK ; Project DRAFT  
- **Humain :** responsable + décideur (création)  
- **GPT :** clarifier intention, baseline, risques  
- **Moteur :** allouer ids ; refuser hors Workspace  
- **Sources :** doctrine applicable (v2.6 ou defs v3 candidates)  
- **Livrables :** Project + ProjectTrajectory draft  
- **Gates :** confirmation création  
- **Effets :** INSERT SQL Project ; scaffold Git optionnel gated  
- **Blocage :** baseline inconnue ; permissions

### 2.2 Reprendre / importer / consulter clôturé
- Reprendre : Project existant → cockpit  
- Importer : mapping artefacts → objets SQL + refs Git ; validation colonnes  
- Consulter clôturé : read-only ; pas d’exécution

### 2.3 Qualifier une demande / initier ou poursuivre un cycle
- Cycle Router propose type/profil  
- GuidedSession QUALIFYING → READY  
- GPT peut challenger et proposer **autre** cycle  
- Moteur refuse transition sans préconditions

### 2.4 Suspendre / reprendre
- PAUSED avec snapshot digests  
- Reprise → revalidate CONTEXT_STALE

### 2.5 Demander une décision
- DecisionRequest → DECISION_REQUIRED  
- Gate UI (pas de phrase chat = GO)

### 2.6 Proposer / exécuter / corriger une action
- ActionProposal → Compiler → ActionCandidate → Gate → ExecutionContract → Cursor  
- Correction : refine / nouvelle proposal ; **pas** d’élargissement silencieux

### 2.7 Valider / clôturer / capitaliser
- ValidationResult → TransitionProposal → HumanDecision  
- CapitalizationRecord + éventuel review pack/handoff

## 3. Matrice parcours × enforcement

| Parcours | GPT libre | Moteur contraint | Gate humain typique |
|----------|-----------|------------------|---------------------|
| Créer projet | Intention, naming | Ids, mode méthodo | Création |
| Qualifier cycle | Challenge type/profil | Routing defs | Si ambigu |
| Décision | Options/reco | Persist Decision | **Oui** |
| Action | Proposal prose | Compiler/paths | Avant Cursor |
| Exécution | Analyse post | Contrat/hash | GO exécution |
| Transition | Proposition | State machine | Structurante |
| Import Excel | Aide mapping | Schema colonnes | Si write large |

## 4. Anti-questionnaire

Interdit : arbre de phrases figées exclusives.  
Autorisé : questions guidées **suggérées**, questions GPT ad hoc, découverte d’info inattendue — tant que le canal de contrôle reste valide.

## 5. Doctrine enforcement dans Studio

Studio doit :

1. Identifier ProjectState / CycleState  
2. Proposer parcours pertinents seulement  
3. Ouvrir/reprendre le bon cycle  
4. Charger SourceContext  
5. Matérialiser gates  
6. Limiter transitions  
7. Tracer décisions  
8. Orchestrer exécutions  

L’utilisateur **ne choisit pas** un workflow hors méthode (sauf mode v2.6 explicite).

## 6. Décisions humaines requises

- Valider le catalogue de parcours.  
- Valider l’interdiction du free-chat en mode v3.  
- Prioriser parcours du vertical slice (13/22).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Enforcement E0–E4 (D4)

Les parcours appliquent les niveaux E0–E4 (25) : information → recommandation → réserve → dérogation gate → blocage absolu.

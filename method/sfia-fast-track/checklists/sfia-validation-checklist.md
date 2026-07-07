---
status: candidate
version: v1.1
updated_after: SFIA validation engine specification
scope: validation checklist
---

# SFIA Validation Checklist v1.1

**Version:** v1.1  
**Status:** Candidate checklist  
**Updated after:** SFIA validation engine specification  
**Scope:** Validation checklist

## 1. Objectif

Cette checklist permet d'appliquer opérationnellement le **SFIA Validation Engine v1.1**.

Elle sert à vérifier qu'un cycle SFIA est conforme avant de produire une décision explicite.

Elle peut être utilisée pour valider :

- un prompt Cursor ;
- une exécution repository ;
- un diff ;
- un commit ;
- un livrable documentaire ;
- une préparation PR ;
- un post-merge ;
- une capitalisation ;
- une préparation Notion.

Cette checklist ne remplace pas la validation humaine.

Elle aide à produire une décision structurée, traçable et exploitable.

## 2. Documents de référence

Cette checklist s'appuie sur :

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

## 3. Quand utiliser cette checklist ?

Utiliser cette checklist :

- avant de valider un résultat Cursor ;
- avant de créer une PR ;
- avant de considérer un cycle comme COMPLETE ;
- après un commit significatif ;
- après une consolidation documentaire ;
- après un cleanup repository ;
- après un audit ;
- avant une préparation Notion ;
- avant une capitalisation structurante ;
- avant un post-merge status.

## 3.1 Routage de cycle

Vérifier que le cycle a été correctement routé :

- [ ] Type de cycle déclaré ;
- [ ] Famille de cycle déclarée : méthode / fondation ou projet ;
- [ ] Références obligatoires sélectionnées à partir de `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` ;
- [ ] Template ou famille de prompt correctement sélectionné ;
- [ ] Garde-fous déclarés ;
- [ ] Validation attendue déclarée ;
- [ ] Décision attendue déclarée.

Si un élément de routage manque, le cycle ne peut pas être considéré comme pleinement validé.

## 4. Décision cible

La checklist doit aboutir à une des décisions suivantes :

| Décision | Usage |
|----------|-------|
| GO | Résultat acceptable |
| GO avec réserves | Résultat acceptable avec réserves suivies |
| NO-GO | Résultat non acceptable |
| COMPLETE | Travail complet |
| COMPLETE AVEC RÉSERVES | Exploitable avec réserves |
| INCOMPLETE | Travail insuffisant ou partiel |
| BLOCKED | Action impossible sans arbitrage |
| NEEDS HUMAN VALIDATION | Action prête mais validation humaine requise |
| READY FOR PR | PR prête |
| READY FOR PR WITH RESERVES | PR prête avec réserves |
| NOT READY FOR PR | PR non prête |

## 5. Checklist — Prompt Cursor

Vérifier que le prompt contient :

- [ ] Objectif clair ;
- [ ] repository indiqué ;
- [ ] branche indiquée ;
- [ ] dernier commit attendu indiqué ;
- [ ] contexte expliqué ;
- [ ] phase ou contexte SFIA indiqué ;
- [ ] sources de référence listées ;
- [ ] dossier cible indiqué ;
- [ ] type de capitalisation attendu indiqué ;
- [ ] périmètre explicite ;
- [ ] hors périmètre explicite ;
- [ ] fichiers à lire indiqués ;
- [ ] fichiers à modifier indiqués ;
- [ ] fichiers interdits ou chemins protégés indiqués ;
- [ ] actions attendues indiquées ;
- [ ] commandes de vérification indiquées ;
- [ ] commit attendu indiqué si applicable ;
- [ ] résultat attendu indiqué.

Décision possible :

- COMPLETE ;
- COMPLETE AVEC RÉSERVES ;
- INCOMPLETE ;
- NO-GO.

## 6. Checklist — Engineering Principles

Vérifier que le cycle respecte :

- [ ] one cycle, one useful result ;
- [ ] repository first ;
- [ ] prompt as contract ;
- [ ] human validation first ;
- [ ] guardrails before execution ;
- [ ] documentation routing by default ;
- [ ] capitalization by default ;
- [ ] controlled automation ;
- [ ] quality by evidence.

Si un principe est contourné :

- [ ] l'exception est explicite ;
- [ ] l'exception est justifiée ;
- [ ] l'exception est traçable ;
- [ ] l'exception est validée humainement.

## 7. Checklist — Repository execution

Vérifier que Cursor a bien contrôlé :

- [ ] repository cible ;
- [ ] branche courante ;
- [ ] dernier commit attendu ;
- [ ] `git status --short` ;
- [ ] sources à lire ;
- [ ] dossier cible ;
- [ ] fichiers à modifier ;
- [ ] fichiers interdits ;
- [ ] chemins protégés ;
- [ ] commandes de vérification ;
- [ ] absence de push automatique ;
- [ ] absence de PR automatique ;
- [ ] absence de merge automatique ;
- [ ] absence de Notion sync ;
- [ ] compte rendu structuré.

Commandes attendues selon le cycle :

```bash
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only
```

## 8. Checklist — Chemins protégés

Vérifier les deux niveaux de chemins protégés.

### 8.1 Chemins protégés génériques SFIA

Vérifier que les catégories suivantes n'ont pas été touchées sans autorisation explicite :

- [ ] code applicatif ;
- [ ] backend ;
- [ ] API ;
- [ ] authentification ;
- [ ] CI/CD ;
- [ ] workflows GitHub ;
- [ ] outils internes sensibles ;
- [ ] scripts de synchronisation ;
- [ ] payloads générés ;
- [ ] exports de design non suivis ;
- [ ] fichiers temporaires ;
- [ ] fichiers générés automatiquement ;
- [ ] fichiers de configuration sensibles ;
- [ ] secrets, clés ou variables d'environnement.

### 8.2 Chemins protégés spécifiques projet

Vérifier que le prompt a déclaré les chemins protégés spécifiques au projet ou au cycle :

- [ ] chemins spécifiques projet identifiés ;
- [ ] chemins spécifiques projet respectés ;
- [ ] tout chemin sensible touché est explicitement autorisé ;
- [ ] toute modification sensible est justifiée ;
- [ ] validation humaine obtenue si nécessaire.

Exemple projet uniquement, non universel :

```text
projects/interv360/app/
projects/interv360/backend/
.github/workflows/
tools/cmp-001/
projects/interv360/03-design/exports/
```

Règle :

> En cas de doute, ne pas valider sans réserve ou arbitrage humain.

## 9. Checklist — Diff

Vérifier que le diff :

- [ ] correspond au périmètre ;
- [ ] respecte le dossier cible ;
- [ ] ne touche pas de chemins protégés non autorisés ;
- [ ] ne contient pas de modification accidentelle ;
- [ ] ne mélange pas plusieurs cycles ;
- [ ] ne modifie pas de code si le cycle est documentaire ;
- [ ] ne contient pas de fichier temporaire ;
- [ ] ne contient pas d'export non suivi ajouté par erreur ;
- [ ] reste lisible et reviewable ;
- [ ] est cohérent avec le message de commit attendu.

## 10. Checklist — Commit

Vérifier que le commit :

- [ ] existe si demandé ;
- [ ] n'existe pas si non demandé ;
- [ ] a un message clair ;
- [ ] respecte le format attendu ;
- [ ] correspond à un objectif unique ;
- [ ] reflète le contenu réel ;
- [ ] ne contient pas de fichiers hors périmètre ;
- [ ] ne contient pas de chemins protégés non autorisés ;
- [ ] ne contient pas de fichiers temporaires ;
- [ ] est rattachable au cycle courant.

Format recommandé :

```text
docs: <action> <objet SFIA>
```

## 11. Checklist — Livrable documentaire

Vérifier que le livrable :

- [ ] est au bon emplacement ;
- [ ] respecte la Documentation Routing Matrix ;
- [ ] cite ou liste les sources de référence ;
- [ ] est cohérent avec les Engineering Principles ;
- [ ] est cohérent avec les Rules & Guardrails ;
- [ ] est cohérent avec les documents fondateurs existants ;
- [ ] ne contredit pas une décision existante ;
- [ ] précise son statut ;
- [ ] précise son rôle ;
- [ ] précise ses next steps si applicable ;
- [ ] est réutilisable ou justifie son caractère spécifique ;
- [ ] est indexé si nécessaire.

## 12. Checklist — PR readiness

Utiliser cette section uniquement si le cycle prépare une PR.

- [ ] branche correcte ;
- [ ] commit cohérent ;
- [ ] diff contrôlé ;
- [ ] chemins protégés non touchés ou autorisés ;
- [ ] documents attendus présents ;
- [ ] contrôles exécutés ;
- [ ] réserves identifiées ;
- [ ] synthèse PR disponible ;
- [ ] pas de Notion sync ;
- [ ] validation humaine prévue avant création PR.

Décision possible :

- READY FOR PR ;
- READY FOR PR WITH RESERVES ;
- NOT READY FOR PR.

### 12.1 Supplément SFIA v2.0 — delivery incrément (pilote)

Utiliser pour un **delivery INC-n** avec standard QA v2.0 :

- [ ] QA-G3 validé (Morris) **avant** PR readiness delivery ;
- [ ] rapports `08-qa-test/inc-<nn>/` présents ;
- [ ] réserves QA documentées (bloquante / majeure / mineure / environnementale) ;
- [ ] référence `sfia-v2-delivery-qa-test-standard.md` et `sfia-v2-incremental-delivery-closure-standard.md`.

### 12.2 Supplément SFIA v2.0 — design coverage (pilote)

Utiliser pour un **écran sans frame Figma dédiée** ou un cycle méthode design coverage :

- [ ] type d'écran identifié (structurant / dérivé / secondaire — `sfia-v2-design-coverage-standard.md` §3) ;
- [ ] source de cohérence design explicite (frame, composant, pattern, tokens) ;
- [ ] extrapolation Cursor conforme §6 — pas de nouvelle DA implicite ;
- [ ] réserve R-UX-XX documentée si pas de frame dédiée ;
- [ ] pas de modification Figma / captures / code dans un cycle méthode documentaire ;
- [ ] gate Morris si écran structurant sans Figma ou nouvelle DA.

### 12.3 Supplément SFIA v2.0 — technical architecture & decision documentation (pilote)

Utiliser pour un cycle **register / ADR / DAA / DAT** ou adoption du standard :

- [ ] situation identifiée dans la matrice §4 — `sfia-v2-technical-architecture-decision-documentation-standard.md` ;
- [ ] register technique à jour ou décision delivery tracée ;
- [ ] ADR requis uniquement si décision structurante ou difficilement réversible ;
- [ ] DAA light uniquement si extension / refactor / industrialisation ;
- [ ] DAT light uniquement si exploitation / déploiement cible ;
- [ ] gate Morris pour auth, sécurité, stack, hébergement, CI/CD prod ;
- [ ] pas de DAT sans cible d'exploitation ;
- [ ] lien QA si migration ou impact testabilité — `sfia-v2-delivery-qa-test-standard.md`.

## 13. Checklist — Post-merge

Utiliser cette section uniquement après merge ou pour préparer une trace post-merge.

- [ ] PR indiquée ;
- [ ] branche source indiquée ;
- [ ] branche cible indiquée ;
- [ ] commit d'intégration indiqué ;
- [ ] décision indiquée ;
- [ ] réserves restantes indiquées si présentes ;
- [ ] garde-fous indiqués ;
- [ ] éléments capitalisés indiqués ;
- [ ] prochaine étape indiquée.

Décision possible :

- POST-MERGE COMPLETE ;
- POST-MERGE COMPLETE WITH RESERVES ;
- POST-MERGE INCOMPLETE.

### 13.1 Supplément SFIA v2.0 — QA-G4 et clôture incrément (pilote)

Utiliser après merge **delivery** ou **closure/capitalization** d'un INC-n :

- [ ] QA-G4 post-merge documenté si delivery INC-n ;
- [ ] périmètre INC-n confirmé sur `main` ;
- [ ] **clôture incrément ≠ GO incrément suivant** ;
- [ ] GO INC-(n+1) = décision Morris séparée (L0) — non implicite après clôture.

## 14. Checklist — Capitalisation

Vérifier que la capitalisation :

- [ ] identifie le type d'actif ;
- [ ] respecte la Documentation Routing Matrix ;
- [ ] pointe vers les sources ;
- [ ] contient une décision explicite ;
- [ ] suit les réserves ;
- [ ] indique le lien avec le projet ou la méthode ;
- [ ] indique si l'actif est réutilisable ;
- [ ] met à jour les index nécessaires ;
- [ ] précise les prochaines étapes.

Types possibles :

- foundation ;
- method ;
- practice ;
- role method ;
- template ;
- checklist ;
- prompt ;
- audit ;
- REX ;
- roadmap ;
- archive.

## 15. Checklist — Notion preparation

Utiliser cette section uniquement pour une préparation Notion.

- [ ] la source repository est identifiée ;
- [ ] le mapping est défini ;
- [ ] l'éditorialisation est prévue ;
- [ ] le dry-run est prévu ou réalisé si demandé ;
- [ ] la validation humaine est prévue ;
- [ ] aucune raw sync n'est lancée ;
- [ ] aucune publication automatique n'est lancée ;
- [ ] les documents internes non publiables sont exclus.

Décision possible :

- NOTION PREPARATION READY ;
- NOTION PREPARATION WITH RESERVES ;
- NOTION PREPARATION BLOCKED.

## 16. Checklist — Réserves

Pour chaque réserve, préciser :

- [ ] description ;
- [ ] fichier ou zone concernée ;
- [ ] impact ;
- [ ] criticité ;
- [ ] priorité ;
- [ ] action proposée ;
- [ ] responsable ou prochain cycle si applicable.

**Nature :**

- bloquante ;
- mineure ;
- résiduelle.

**Priorité :**

- P0 ;
- P1 ;
- P2.

## 17. Compte rendu de validation standard

Utiliser le format suivant :

```text
Décision :
- ...

Niveau de conformité :
- ...

Prompt :
- conforme / conforme avec réserves / incomplet / N/A

Engineering Principles :
- conforme / réserve / non conforme

Repository execution :
- conforme / conforme avec réserves / non conforme / N/A

Diff :
- conforme / réserve / non conforme / N/A

Commit :
- conforme / non applicable / réserve

Chemins protégés :
- OK / KO / réserve

Livrables :
- conformes / réserves / incomplets / N/A

PR readiness :
- READY / READY WITH RESERVES / NOT READY / N/A

Post-merge :
- COMPLETE / COMPLETE WITH RESERVES / INCOMPLETE / N/A

Capitalisation :
- conforme / réserve / N/A

Notion :
- READY / WITH RESERVES / BLOCKED / N/A

Réserves :
- ...

Actions correctives :
- ...

Prochaine étape :
- ...
```

## 18. Anti-patterns

| Anti-pattern | Risque |
|--------------|--------|
| Validation au feeling | Décision non traçable |
| GO sans vérifier le diff | Erreur non détectée |
| GO sans vérifier les chemins protégés | Risque projet ou plateforme |
| Réserve non classée | Suivi impossible |
| NO-GO sans action corrective | Blocage inexploitable |
| PR ready sans synthèse | Revue difficile |
| Post-merge absent | Perte de traçabilité |
| Capitalisation sans routing | Knowledge fragmentée |
| Validation Notion sans mapping | Publication fragile |
| Raw sync validée | Knowledge non gouvernée |
| Validation humaine contournée | Gouvernance affaiblie |

## 19. Décision

`method/sfia-fast-track/checklists/sfia-validation-checklist.md` est la checklist opérationnelle de validation SFIA v1.1.

Elle applique le Validation Engine aux cycles réels.

Elle doit être utilisée pour produire des décisions explicites, classer les réserves et sécuriser les prochaines étapes.

## 20. Next Steps

1. Utiliser cette checklist sur les prochains cycles SFIA ;
2. l'ajuster après usage réel ;
3. consolider les autres checklists si nécessaire ;
4. consolider `prompts/prompt-catalog.md` ;
5. préparer les cross-références P2.

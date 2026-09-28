# ChatGPT Review Pack — CRM 1.3.2-B Sécurité & résilience

## 0. Identité du cycle

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 01:09:59 CEST |
| **Cycle** | CRM Assurance Courtage — 1.3.2-B Sécurité & résilience |
| **Type cœur** | Sécurité / RSSI |
| **Nature** | research-only / cadrage sécurité — DOC / security-resilience research |
| **Profil** | **Standard** |
| **Critical** | **NON adopté** |
| **Justification Standard** | Aucun runtime modifié ; aucun contrôle implémenté ; aucune architecture SSI décidée ; aucune acceptation de risque ; aucune sélection de plateforme ; production = recherche, scénarios, exigences candidates, questions ouvertes uniquement. Critical n’est pas implicite. |
| **Preuve Critical non adopté** | Pas de MFA obligatoire pour tous ; pas d’IAM final ; pas de RPO/RTO/PRA ; DORA = TO VERIFY ; STOP condition « SECURITY STRUCTURAL DECISION » non déclenchée. |
| **SFIA Studio Convergence** | N/A |
| **Fake / Real** | N/A |
| **Pilote CKC détaillé** | NON — fallback synthetic map + sfia-v2.5 §4.10 (method-candidate, experimental guidance, aucune autorité d’exécution) |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| Branche | `docs/crm-assurance-courtage-1-3-watch-01` |
| HEAD initial (attendu) | `b2e6fb98dee3cb498e073837c32cc7e75c7d0fa7` |
| HEAD final | `154036ca1ce3b356b28cf24fd92178c608e8461e` |
| origin/main | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| Dirt projet | `.tmp-sfia-review/**` uniquement (tolérée) |
| Drift CRM vs origin/main (depuis b7fdf712) | **NONE** |
| Git Truth | **PASS** |

Dernier Review Handoff connu avant cycle : `4fb7908575ed9d0d7ec23af11b1d7265d2d02b49`

## 2. Sources SFIA lues

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` (§4.10 Sécurité / RSSI)
4. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` (fallback CKC)
5. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
7. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
8. `scripts/sfia/README.md`
9–12. Sources projet locales (doctrine, 01-01, 01-02, 01-03)

**CKC statut :** method-candidate ; experimental cognitive guidance ; adversarial / surfaces / données / scénarios / contrôles / limites / preuves.

## 3. État 1.3 d’entrée → sortie

| Élément | Entrée | Sortie |
|---------|--------|--------|
| 1.3 | OPENED | OPENED — WORKING WATCH |
| 1.3.1 | REVIEW PASS | REVIEW PASS |
| 1.3.2 | IN PROGRESS | IN PROGRESS |
| 1.3.2-A | REVIEW PASS (ChatGPT ; handoff Git historique encore AWAITING REVIEW) | **REVIEW PASS — REGULATION & DATA** (tracé dans meta + §14 + synthèse) |
| 1.3.2-B | NOT STARTED | **SECURITY & RESILIENCE — AWAITING REVIEW** |
| 1.3.2-C/D | NOT STARTED | NOT STARTED |
| 1.4 | NOT OPENED | NOT OPENED |
| Architecture / Stack | NOT DECIDED | NOT DECIDED |

**Trace REVIEW PASS A :** preuve ChatGPT postérieure au handoff Git `4fb79085…` ; document et doctrine mis à jour pour refléter A = REVIEW PASS avant ouverture B.

**Correction éditoriale A (§14.3 Support durable) :** `NOT APPLICABLE (pour l’instant)` → `OUT OF SCOPE / NOT ASSESSED IN THIS DEEP-DIVE`.

## 4. Stratégie recherche sécurité

- Sources N1 ouvertes réellement (CNIL Guide 2024 + fiches ; ANSSI hygiène/MFA/sauvegarde ; EUR-Lex DORA ; EIOPA Q&A ; CNIL violations).
- Analyse qualitative proportionnée (pas EBIOS complète ; pas score fictif RISK=HIGH).
- Scénarios R-B01…R-B12 ; contraintes C-B01…C-B14 ; actifs haut niveau.
- DORA applicability confrontée aux size metrics manquantes → TO VERIFY.
- Architecture / stack / MFA / chiffrement / fournisseur **non** décidés.

## 5. Sources externes ouvertes (matrice source → claims)

| ID | Organisme | Claim supporté | Portée |
|----|-----------|----------------|--------|
| S32 | CNIL Guide sécurité 2024 | Précautions élémentaires auth, habilitations, logs, backup, incidents, cloud, chiffrement | Guidance conformité RGPD sécurité |
| S33 | CNIL F4 Auth | Identifiant unique ; MFA = 2 catégories ; MDP ; MFA privilégiée si accès externe | Recommandation |
| S34 | CNIL F5 Habilitations | Moindre privilège ; revue annuelle ; retrait droits | Recommandation |
| S35 | CNIL F16 Logs | Journaliser accès/admin/sécurité ; 6 mois–1 an typique | Recommandation |
| S36 | CNIL F17 Backup | Copies régulières ; hors ligne ; 3-2-1 ; tests restauration | Recommandation |
| S37 | CNIL F19 Incidents | Processus incident ; registre violations ; notification | Recommandation + lien art. 33/34 |
| S38 | CNIL Notifier violation | Doc interne ; notif CNIL si risque ; info personnes si risque élevé ; 72 h | Obligation RGPD expliquée |
| S39 | CNIL Cloud | Évaluer fournisseur ; chiffrement ; droits ; backup distant ; localisation | Recommandation |
| S40 | ANSSI Hygiène | Socle 42 mesures ; bonnes pratiques (≠ obligation légale auto) | Recommandation |
| S41 | ANSSI MFA | Analyse de risque ; privilégier MFA / possession | Recommandation |
| S42 | ANSSI Sauvegarde | Fondamentaux sauvegarde / ransomware | Recommandation |
| S43 | EUR-Lex DORA | Art. 2(1)(o) champ intermédiaires ; 2(3)(e) exclusion micro/PME ; définitions taille art. 3 | Droit UE |
| S44 | EIOPA DORA237 | Confirme exemption + calcul seuils activités assurance | Q&A Commission |
| S45 | EIOPA DORA099 | Calcul taille ; groupe non financier → entité individuelle | Q&A Commission |
| S31 | EUR-Lex RGPD | Art. 32–34 (réutilisé) | Droit UE |

## 6. Cartographie actifs / scénarios / contrôles / auth / … (voir §15 complète ci-dessous)

Résumé validé :
- Actifs §15.3 : comptes, espace client, données, documents, email, SaaS futur
- Scénarios R-B01–R-B12 §15.4 (pas de score fictif)
- Familles contrôles §15.5
- Auth MFA = CANDIDATE ; ACCESS CONTROL MODEL = TO DESIGN LATER
- Espace client/docs = SECURITY DESIGN CONSTRAINTS
- Logs / incidents / backup / SaaS checklist / DORA TO VERIFY
- Contraintes C-B01–C-B14

## 7. Frontière architecture / implementation

**NOT DECIDED :** architecture SSI, stack, IdP, MFA obligatoire tous, algorithmes, KMS, hébergement, SIEM, SOC, PRA/PCA, RPO/RTO finaux, outil backup, fournisseur SaaS.

**NOT DONE :** audit, pentest, acceptation de risque, checklist conformité DORA, ouverture 1.3.2-C.

## 8. Métadonnées 01-03 (après cycle)

```markdown
# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire

| Champ | Valeur |
|-------|--------|
| **Statut 1.3** | **OPENED — WORKING WATCH** |
| **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
| **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
| **1.3.2-B** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
| **1.3.2-C** | **NOT STARTED** |
| **1.3.2-D** | **NOT STARTED** |
| **1.1** | VALIDATED |
| **1.2** | VALIDATED (2026-09-28) |
| **1.4** | **NOT OPENED** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |
| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
| **Notion** | Aucune action dans ce cycle |
| **Miro** | Hors scope — non modifié |

**Décision Morris :** 1.3 OPENED ; 1.3.1 établi ; trajectoire 1.3.2 découpée en deep-dives A→E.
Le présent document **n’est pas** une validation globale du 1.3 ni un avis juridique / conformité certifiée.
```

## 9. Correction éditoriale A + statut §14

```markdown
## 14. 1.3.2-A — Réglementation assurance & données personnelles

| Champ | Valeur |
|-------|--------|
| **Statut** | **REVIEW PASS — REGULATION & DATA** (ChatGPT ; preuve postérieure au handoff Git historique AWAITING REVIEW) |
| **Date de recherche** | 2026-09-29 |
| **Transverse** | RGPD / conformité (activé) |
| **Sécurité / RSSI autonome** | **NON** — deep-dive 1.3.2-B ouvert séparément |
| **Nature** | Veille / analyse de cadrage sourcée — **pas** avis juridique ; **pas** conformité certifiée |

```

Ligne Support durable :
```
| Support durable / com. | Non approfondi ici hors besoins sourcés IDD/ACPR | — | — | Hors scope détaillé 1.3.2-A | **OUT OF SCOPE / NOT ASSESSED IN THIS DEEP-DIVE** |
```

## 10. Doctrine §11 (complète)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED** |
| 1.3 | **OPENED** |
| 1.3.1 | **REVIEW PASS** |
| 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
| Étape actuelle | **1.3.2-B Sécurité & résilience — AWAITING REVIEW** |
| 1.3.2-C | **NOT STARTED** |
| 1.3.2-D | **NOT STARTED** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revoir 1.3.2-B avant ouverture de 1.3.2-C |

---
```

## 11. Section §15 complète (1.3.2-B)

```markdown
## 15. 1.3.2-B — Sécurité & résilience

| Champ | Valeur |
|-------|--------|
| **Statut** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
| **Date de recherche** | 2026-09-29 |
| **Type cœur** | Sécurité / RSSI |
| **Profil** | **Standard** — research-only / cadrage sécurité |
| **Critical** | **NON** — aucune acceptation de risque, aucune décision d’architecture SSI, aucun contrôle implémenté |
| **Nature** | Analyse qualitative proportionnée — **pas** audit ; **pas** pentest ; **pas** EBIOS RM complète ; **pas** politique SSI ; **pas** preuve DORA |

### 15.1 Périmètre et méthode

**Périmètre fonctionnel protégé (1.1 / 1.2 uniquement) :** acteurs Courtier / Directeur / Prospect→Client / TPE-PME / particuliers ; processus prospection → devis → relances → RDV → conseil → souscription → renouvellement / résiliation → documents → sinistres → pilotage ; informations identité / besoins / devis / contrats / documents / historique / sinistres (niveau brief) / KPI ; canaux RDV physique / Visio / téléphone / email / espace client ; capacités centralisation / espace documentaire sécurisé / historique / espace client / automatisations futures non définies.

**Réserves héritées de 1.3.2-A (non recalculées) :** `HEALTH DATA PROCESSING = TO VERIFY` ; `AIPD = TO VERIFY` ; bases légales = TO VERIFY ; sous-traitants / SaaS = NOT DECIDED ; architecture / stack = NOT DECIDED. Données de santé **non présumées** ; si confirmées plus tard, contraintes / impacts potentiels augmenteraient.

**Méthode :** analyse qualitative proportionnée (pas de score fictif « RISK = HIGH ») ; cartographie actifs / surfaces ; scénarios R-B01…R-B12 ; familles de contrôles candidates ; exigences C-Bxx. Sources N1 réellement ouvertes (CNIL Guide sécurité 2024 + fiches ; ANSSI hygiène / MFA / sauvegarde ; RGPD art. 32–34 via CNIL + S31 ; DORA 2022/2554 + EIOPA Q&A).

**Posture CKC (fallback synthetic map + §4.10) :** adversarial ; surfaces ; données ; scénarios ; contrôles ; limites ; preuves — **pas** de fausse maturité. Autorité d’exécution : **aucune** (method-candidate).

**Hors scope strict :** architecture SSI ; IAM / RBAC final ; choix MFA / IdP ; algorithmes / KMS / hébergement ; SIEM / SOC / EDR ; PRA/PCA/RPO/RTO finaux ; scoring fournisseur ; pentest ; ouverture 1.3.2-C/D/E ou 1.4.

### 15.2 Synthèse exécutive bornée

1. **FAIT** — RGPD art. 32 exige des mesures techniques et organisationnelles appropriées (intégrité / confidentialité) → **IMPACT** : le futur CRM devra permettre des contrôles proportionnés, non encore choisis → **STATUT** : DESIGN CONSTRAINT / implementation NOT DECIDED
2. **RECOMMANDATION OFFICIELLE** — CNIL (fiches 4–5) : authentifier chaque utilisateur ; limiter les accès au besoin → **IMPACT** : comptes Courtier / Directeur / Client à séparer conceptuellement → **STATUT** : SECURITY REQUIREMENT CANDIDATE ; ACCESS CONTROL MODEL = TO DESIGN LATER
3. **RECOMMANDATION OFFICIELLE** — CNIL / ANSSI : privilégier MFA selon analyse de risque (esp. accès externes / privilégiés) → **IMPACT** : MFA candidat pour populations à risque, **pas** décision « MFA obligatoire pour tous » → **STATUT** : MFA / STRONG AUTHENTICATION = SECURITY REQUIREMENT CANDIDATE
4. **FAIT métier** — espace client + espace documentaire validés comme capacités → **IMPACT** : séparation logique, droits, traçabilité des accès / téléchargements = contraintes de conception → **STATUT** : SECURITY DESIGN CONSTRAINTS
5. **RECOMMANDATION OFFICIELLE** — CNIL fiche 16 : journaliser accès / modifications / événements sécurité → **IMPACT** : auditabilité candidate (durée / SIEM non décidés) → **STATUT** : AUDITABILITY / LOGGING = DESIGN CONSTRAINT CANDIDATE
6. **RECOMMANDATION OFFICIELLE** — CNIL fiche 17 + ANSSI sauvegarde : copies régulières, isolation, tests de restauration → **IMPACT** : résilience à concevoir ; RPO/RTO = TO VERIFY → **STATUT** : BUSINESS CONTINUITY REQUIREMENTS = TO DEFINE
7. **FAIT réglementaire** — RGPD art. 33/34 + CNIL : documenter violations ; notifier si risque ; informer si risque élevé → **IMPACT** : processus incident futur requis → **STATUT** : INCIDENT & BREACH MANAGEMENT = FUTURE PROCESS REQUIREMENT
8. **RECOMMANDATION OFFICIELLE** — CNIL cloud / sous-traitance : évaluer sécurité fournisseur (auth, rôles, sauvegarde, localisation…) → **IMPACT** : checklist critères futurs SaaS/no-code (sans sélection d’outil) → **STATUT** : à réutiliser en 1.3.2-D
9. **FAIT réglementaire** — DORA (UE) 2022/2554 art. 2(1)(o) peut couvrir les intermédiaires ; art. 2(3)(e) exclut micro/PME → **IMPACT** : size metrics cabinet manquantes → **STATUT** : **DORA APPLICABILITY = TO VERIFY**
10. **LIMITE** — architecture / contrôles actuels / fréquences d’incident **inconnus** → **IMPACT** : impacts = POTENTIAL IMPACT / SCENARIO PRIORITY uniquement → **STATUT** : aucune acceptation de risque ; aucune architecture décidée

### 15.3 Actifs / surfaces à protéger

Cartographie de **haut niveau** (pas de CMDB ; pas d’inventaire technique fictif).

| Actif / surface | Valeur / rôle métier | C | I | D | T | Question ouverte |
|-----------------|----------------------|---|---|---|---|------------------|
| Comptes internes Courtier | Accès dossiers / conseil / documents | HIGH | HIGH | MEDIUM | HIGH | MFA / sessions / récupération = TO DESIGN |
| Accès Directeur | Pilotage + vue élargie probable | HIGH | HIGH | MEDIUM | HIGH | Périmètre droits vs Courtier = TO DESIGN |
| Espace client futur | Canal validé ; conception non définie | HIGH | HIGH | MEDIUM | HIGH | Auth client / récupération de compte |
| Données prospect | Identité / besoins / devis | HIGH | MEDIUM | MEDIUM | MEDIUM | Minimisation / conservation (→ A) |
| Données client | Identité / contrats / historique | HIGH | HIGH | HIGH | HIGH | Classification sensibilité = TO VERIFY |
| Contrats | Engagements / renouvellement | HIGH | HIGH | HIGH | HIGH | Intégrité des versions |
| Documents (espace documentaire) | Admin / pieces / échanges | HIGH | HIGH | HIGH | HIGH | Séparation logique / partage |
| Historique échanges / contrats | Continuité relationnelle | MEDIUM | HIGH | HIGH | HIGH | Rétention vs audit |
| Données sinistre (niveau brief) | Suivi sinistres | HIGH | HIGH | HIGH | HIGH | Santé ? = TO VERIFY (A) |
| Dashboard / KPI | Pilotage commercial | LOW–MED | MEDIUM | MEDIUM | LOW | Agrégation / accès Directeur |
| Email (canal) | Relances / échanges | HIGH | MEDIUM | MEDIUM | MEDIUM | Phishing / fuite pièce jointe |
| Futur SaaS / no-code | Dépendance potentielle | HIGH | HIGH | HIGH | HIGH | Critères sécurité (15.10) ; fournisseur NOT DECIDED |

Légende : C=confidentialité ; I=intégrité ; D=disponibilité ; T=traçabilité (pertinence qualitative). Niveaux = **priorité de conception**, non risque mesuré.

### 15.4 Scénarios de risque

Analyse qualitative. **Pas** de score fictif « RISK = HIGH ». Colonnes : impact potentiel, exposition, confiance.

| ID | Actif / processus | Scénario | Propriété | Impact potentiel | Exposition | Confiance | Mesures candidates | Statut |
|----|-------------------|----------|-----------|------------------|------------|-----------|--------------------|--------|
| R-B01 | Comptes Courtier / Directeur | Compromission compte interne (vol crédentials, session) | C / I / T | HIGH | PLAUSIBLE | MEDIUM | Auth forte candidate ; moindre privilège ; journalisation ; sensibilisation | DESIGN CONSTRAINT |
| R-B02 | Espace client | Compromission compte client | C / I | HIGH | CONTEXT DEPENDENT | MEDIUM | Auth / récupération compte ; séparation dossiers | DESIGN CONSTRAINT |
| R-B03 | Habilitations | Accès excessif (dossiers hors besoin) | C / T | HIGH | PLAUSIBLE | HIGH | Profils d’habilitation ; revue périodique | DESIGN CONSTRAINT |
| R-B04 | Documents / email | Divulgation documents / données (mauvais destinataire, partage) | C | HIGH | PLAUSIBLE | MEDIUM | Droits partage ; traçabilité téléchargement ; sensibilisation | DESIGN CONSTRAINT |
| R-B05 | Données / documents | Perte / altération (suppression, corruption, erreur) | I / D | HIGH | PLAUSIBLE | MEDIUM | Sauvegardes ; contrôles suppression ; restauration testée | DESIGN CONSTRAINT |
| R-B06 | Service / données | Indisponibilité (panne, ransomware, dépendance SaaS) | D | HIGH | CONTEXT DEPENDENT | MEDIUM | Sauvegarde isolée ; continuité TO DEFINE ; critères fournisseur | DESIGN CONSTRAINT |
| R-B07 | Email / utilisateurs | Phishing / ingénierie sociale | C / I | HIGH | PLAUSIBLE | HIGH | Sensibilisation ; auth renforcée ; procédures signalement | DESIGN CONSTRAINT |
| R-B08 | Opérations critiques | Absence / insuffisance de traçabilité | T | MEDIUM–HIGH | PLAUSIBLE | HIGH | Journalisation accès / admin / incidents | DESIGN CONSTRAINT |
| R-B09 | Futur SaaS / no-code | Mauvaise configuration (partage trop large, MFA off) | C / I / D | HIGH | CONTEXT DEPENDENT | MEDIUM | Checklist config ; moindre privilège ; revue | DESIGN CONSTRAINT — outil NOT SELECTED |
| R-B10 | Fournisseur / sous-traitant | Dépendance : dispo, garanties sécurité, localisation | C / D | HIGH | CONTEXT DEPENDENT | MEDIUM | Due diligence sécurité ; contrat art. 28 ; réversibilité | DESIGN CONSTRAINT — fournisseur NOT DECIDED |
| R-B11 | Gouvernance | Incident / violation mal détecté ou mal traité | C / T / gouvernance | HIGH | CONTEXT DEPENDENT | MEDIUM | Processus incident / violation ; documentation | FUTURE PROCESS REQUIREMENT |
| R-B12 | Résilience | Sauvegarde ou restauration insuffisante | D / I | HIGH | PLAUSIBLE | HIGH | Règle 3-2-1 candidate ; tests restauration ; RPO/RTO TO VERIFY | DESIGN CONSTRAINT |

**Scénarios non ajoutés (hors justification périmètre) :** attaque API (API non retenue) ; fraude paiement ; signature électronique ; biométrie ; IA ; app mobile ; infra cloud détaillée.

### 15.5 Familles de contrôles candidates

| Famille | Source principale | Portée projet | Statut |
|---------|-------------------|---------------|--------|
| Authentification (identifiants uniques, mots de passe, MFA candidate) | CNIL F4 ; ANSSI MFA | Comptes internes / client / admin futurs | CANDIDATE — techno NOT DECIDED |
| Habilitations / moindre privilège | CNIL F5 | Courtier / Directeur / Client | ACCESS CONTROL MODEL = TO DESIGN LATER |
| Protection échanges / documents | CNIL F13 / espace doc métier | Email, espace documentaire | CANDIDATE |
| Chiffrement transit / repos | CNIL F21 ; F22 cloud ; RGPD art. 32 | Données / sauvegardes / cloud futur | ENCRYPTION REQUIREMENT = CANDIDATE / TO SPECIFY DURING ARCHITECTURE |
| Journalisation / audit | CNIL F16 | Accès, admin, modifications, sécurité | DESIGN CONSTRAINT CANDIDATE |
| Sauvegarde / restauration | CNIL F17 ; ANSSI sauvegarde | Données critiques métier | CANDIDATE — RPO/RTO TO VERIFY |
| Continuité / reprise | CNIL F18 (principe) | Disponibilité relation client / contrats / sinistres | BUSINESS CONTINUITY = TO DEFINE |
| Gestion incidents / violations | CNIL F19 ; art. 33/34 | Processus organisationnel | FUTURE PROCESS REQUIREMENT |
| Sous-traitance / cloud / SaaS | CNIL F14 / F22 | Futurs fournisseurs | Critères 15.10 — outil NOT SELECTED |
| Sensibilisation utilisateurs | CNIL F3 ; ANSSI hygiène | Phishing / email | CANDIDATE process |

**Note :** recommandations ANSSI = bonnes pratiques (non obligations légales sauf texte contraire). RGPD art. 32 = obligation de mesures **appropriées** (proportionnées), pas une checklist technique imposée ici.

### 15.6 Authentification et habilitations

#### Authentification

**Constat CNIL (F4, 2024) :** identifiant propre ; authentification avant accès ; MFA = ≥2 catégories distinctes (connaissance / possession / inhérence) ; interdiction comptes partagés sauf exception tracée ; politique mots de passe (empreinte, complexité selon cas d’usage) ; privilégier MFA surtout si accès depuis l’extérieur.

**Constat ANSSI (guide MFA / mots de passe, 2021) :** analyser le risque avant choix des moyens ; privilégier MFA et facteur de possession ; adapter robustesse au contexte.

| Élément | Statut projet |
|---------|---------------|
| MFA / strong authentication | **SECURITY REQUIREMENT CANDIDATE** |
| Populations potentiellement concernées | Comptes privilégiés / admin futurs ; accès externes ; Courtier / Directeur (à arbitrer) ; espace client (à arbitrer) |
| Mots de passe / récupération de compte / sessions | À évaluer en conception — **pas** de politique finale |
| Technologie IdP / SSO / facteur concret | **NOT DECIDED** |
| Décision « MFA REQUIRED FOR ALL USERS » | **NON** — hors cadrage Standard |

#### Habilitations

**Constat CNIL (F5) :** moindre privilège ; profils d’habilitation ; validation des demandes ; retrait à départ / changement ; revue a minima annuelle.

**Application projet (principe uniquement) :**
- **Courtier** : accès aux dossiers / documents nécessaires à son activité — pas de droits admin génériques.
- **Directeur** : vue pilotage / élargie possible, **sans** présumer « accès total » — à concevoir.
- **Client** : accès limité à **ses** données / documents via espace client.

**ACCESS CONTROL MODEL = TO DESIGN LATER** — pas de matrice RBAC finale ; pas de permissions décidées.

### 15.7 Espace client / documents / données

**SECURITY DESIGN CONSTRAINTS** (conception UI / stockage / chiffrement **non** choisis) :

| Thème | Contrainte candidate | Statut |
|-------|----------------------|--------|
| Accès non autorisé | Authentification + droits avant consultation / téléchargement | CANDIDATE |
| Confidentialité | Séparation logique des dossiers clients / prospects | CANDIDATE |
| Droits | Partage / téléchargement limités au besoin | CANDIDATE |
| Traçabilité | Journaliser accès / partage / suppression significatifs | CANDIDATE |
| Récupération de compte (espace client) | Processus sûr à définir (éviter prise de contrôle) | TO DESIGN |
| Suppression / rétention | Alignement conservation (→ 1.3.2-A) + possibilité restauration | TO VERIFY / TO DESIGN |
| Exposition accidentelle (email) | Sensibilisation ; minimiser pièces jointes sensibles | CANDIDATE process |
| Chiffrement | Transit + repos = familles à spécifier en architecture | CANDIDATE / TO SPECIFY |
| Stockage / hébergement | | **NOT DECIDED** |

Si `HEALTH DATA PROCESSING` était un jour confirmé : **augmentation** des contraintes / impacts potentiels (sans inventer le traitement ici).

### 15.8 Journalisation / incidents / violations

#### Journalisation / traçabilité

**CNIL F16 :** journaliser activités métier, interventions techniques/admin, anomalies et événements sécurité ; conserver typiquement 6 mois–1 an (sauf besoin légal / contentieux / post-incident) ; tracer création / consultation / partage / modification / suppression (auteur, date/heure, nature, référence) ; protéger les journaux ; analyser pour détecter incidents.

**AUDITABILITY / LOGGING = DESIGN CONSTRAINT CANDIDATE**

**Non décidé :** format logs ; SIEM ; durée finale ; pipeline technique.

#### Incidents / violations

**CNIL F19 + page « Notifier une violation » + RGPD art. 33/34 :**
- documenter **toutes** les violations en interne ;
- évaluer le risque pour les personnes ;
- notifier la CNIL **si** risque pour droits/libertés (objectif 72 h après constatation) ;
- informer les personnes **si** risque élevé (sauf exceptions) ;
- intégrer violations dans le processus de gestion d’incidents ; critères de qualification ; sensibilisation au signalement.

**INCIDENT & BREACH MANAGEMENT = FUTURE PROCESS REQUIREMENT**

**Non créé ici :** procédure complète ; rôles DPO / RSSI / SOC fictifs ; playbooks techniques.

### 15.9 Sauvegarde / restauration / résilience

**CNIL F17 :** sauvegardes fréquentes ; copie géographiquement distincte ; au moins une copie hors ligne ; même niveau de sécurité que la production ; canal chiffré si transmission réseau ; **tester** intégrité et restauration ; règle **3-2-1** recommandée.

**ANSSI (fondamentaux sauvegarde, 2023) :** sauvegarde indispensable face aux rançongiciels ; recommandations techniques/organisationnelles (segmentation, comptes dédiés, etc.) — à adapter au contexte futur ; **pas** d’obligation légale autonome ANSSI.

| Élément | Statut |
|---------|--------|
| Sauvegardes régulières + isolation | SECURITY REQUIREMENT CANDIDATE |
| Restauration testée | SECURITY REQUIREMENT CANDIDATE |
| RPO | **TO VERIFY** |
| RTO | **TO VERIFY** |
| Business continuity requirements | **TO DEFINE** |
| PRA / PCA final | **NOT PRODUCED** |
| Outil de backup / hébergement | **NOT DECIDED** |

**Questions à arbitrer ultérieurement :** quelles données sont critiques (contrats, documents, historique, sinistres) ? quelle durée d’indisponibilité acceptable métier ? qui opère restauration (cabinet / fournisseur) ? fréquence des tests ?

### 15.10 Critères sécurité futurs SaaS / no-code

Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’éditeur.

| # | Critère candidat | Pourquoi |
|---|------------------|----------|
| 1 | Authentification / MFA disponible et configurable | CNIL F4 ; ANSSI MFA |
| 2 | Gestion des rôles / séparation des accès | CNIL F5 |
| 3 | Séparation logique des espaces / tenants | Espace client / documents |
| 4 | Chiffrement déclaré (transit / repos) | CNIL F21/F22 ; art. 32 |
| 5 | Journalisation / export d’audit | CNIL F16 |
| 6 | Sauvegarde / restauration / RPO-RTO déclarés | CNIL F17 ; ANSSI |
| 7 | Disponibilité / continuité documentées | Résilience métier |
| 8 | Gestion / notification d’incidents | CNIL F19 ; art. 33 |
| 9 | Sous-traitants / chaîne d’hébergement documentés | CNIL F14/F22 ; art. 28 (A) |
| 10 | Conditions de suppression / export / réversibilité | Exit / RGPD |
| 11 | Documentation sécurité / attestations (si pertinentes) | Due diligence — **pas** obligation générique inventée |
| 12 | Localisation / transferts de données | RGPD transferts (A) ; CNIL cloud |

**Aucun fournisseur évalué. Stack = NOT DECIDED.**

### 15.11 DORA — applicability & watch

#### Champ d’application

**Source :** Règlement (UE) 2022/2554 (DORA), EUR-Lex.

- **Art. 2(1)(o) :** le règlement **peut** s’appliquer aux *insurance intermediaries, reinsurance intermediaries and ancillary insurance intermediaries*.
- **Art. 2(3)(e) :** **exclusion** des intermédiaires (assurance / réassurance / auxiliaires) qui sont **microenterprises** ou **small or medium-sized enterprises**.
- **Définitions de taille (Art. 3) :** micro (&lt;10 personnes et CA et/ou bilan ≤ 2 M€) ; small (10–&lt;50 et seuils CA/bilan) ; medium-sized (&lt;250 et CA ≤ 50 M€ et/ou bilan ≤ 43 M€) — définitions DORA (peuvent différer de la Rec. 2003/361/CE ; EIOPA DORA011).

#### Q&A EIOPA / Commission

- **DORA237 / Q&A 3350 :** confirme l’exemption art. 2(3)(e) pour intermédiaires micro/PME ; calcul des seuils pour activités d’assurance limitées = ressources **dédiées à l’assurance** (proportionnalité).
- **DORA099 / Q&A 3100 :** règles de calcul type Rec. 2003/361/CE avec seuils DORA ; intermédiaires dans un groupe non financier → calcul **au niveau de l’entité individuelle**.

#### Confrontation projet

| Information nécessaire | Disponible ? |
|------------------------|--------------|
| Effectif (FTE) | **NON** |
| Chiffre d’affaires | **NON** |
| Bilan | **NON** |
| Structure de groupe | **NON** |
| Catégorie juridique exacte | **NON** (cabinet fictif / brief) |

#### Verdict

### DORA APPLICABILITY = TO VERIFY

**Pas** de checklist de conformité DORA complète (applicabilité non établie).

**Si applicable plus tard — thèmes à surveiller (watch only) :** gestion du risque ICT ; incidents majeurs ; résilience opérationnelle numérique ; risque tiers ICT — **sans** imposer ces exigences aujourd’hui.

**Informations pour trancher :** effectif, CA, bilan, groupe, statut d’intermédiaire.

### 15.12 Contraintes / exigences à transmettre aux étapes suivantes

| ID | Source / constat | Scénario | Applicability | Exigence candidate | Étape future | Statut |
|----|------------------|----------|---------------|--------------------|--------------|--------|
| C-B01 | RGPD art. 32 ; CNIL Guide sécurité | Transverse | LIKELY | Mesures techniques/organisationnelles appropriées (C/I/D) | Architecture technique ; Sécurité/RSSI futur | OPEN — candidate |
| C-B02 | CNIL F4 ; ANSSI MFA | R-B01, R-B02, R-B07 | LIKELY (principe) | Authentification robuste ; MFA = **candidate** selon risque / population | Conception ; Architecture ; Sécurité/RSSI futur | OPEN — MFA NOT MANDATED FOR ALL |
| C-B03 | CNIL F5 | R-B03 | LIKELY | Moindre privilège ; profils Courtier / Directeur / Client | Conception fonctionnelle ; Architecture | OPEN — RBAC TO DESIGN |
| C-B04 | Besoin métier + CNIL F5/F16 | R-B02, R-B04 | LIKELY | Espace client : accès limité aux données du titulaire ; récupération de compte sûre | Conception ; UX/UI ; Architecture | OPEN |
| C-B05 | Besoin métier + CNIL | R-B04 | LIKELY | Espace documentaire : séparation logique ; droits partage/téléchargement ; traçabilité | Conception ; Architecture | OPEN |
| C-B06 | CNIL F21/F22 ; art. 32 | R-B04, R-B09 | LIKELY (principe) | Chiffrement transit / repos à spécifier | Architecture technique | OPEN — algo/KMS NOT DECIDED |
| C-B07 | CNIL F16 | R-B08 | LIKELY | Journalisation accès / admin / modifications / événements sécurité | Architecture ; RUN | OPEN — SIEM NOT DECIDED |
| C-B08 | CNIL F17 ; ANSSI sauvegarde | R-B05, R-B06, R-B12 | LIKELY | Sauvegardes isolées + restauration testée | Architecture ; RUN ; Sécurité/RSSI futur | OPEN — RPO/RTO TO VERIFY |
| C-B09 | CNIL F18 (principe) | R-B06 | CONTEXT DEPENDENT | Exigences de continuité métier à définir | Sécurité/RSSI futur ; RUN | OPEN — PCA/PRA TO DEFINE |
| C-B10 | CNIL F19 ; art. 33/34 | R-B11 | LIKELY | Processus incidents / violations (doc, analyse risque, notification) | Sécurité/RSSI futur ; RUN | OPEN — process NOT WRITTEN |
| C-B11 | CNIL F3 ; ANSSI hygiène | R-B07 | LIKELY | Sensibilisation phishing / email | Delivery ; RUN | OPEN |
| C-B12 | CNIL F14/F22 ; checklist 15.10 | R-B09, R-B10 | LIKELY si SaaS | Critères sécurité fournisseurs (auth, rôles, backup, audit, localisation, réversibilité) | 1.3.2-D ; Architecture | OPEN — outil NOT SELECTED |
| C-B13 | DORA art. 2 + EIOPA Q&A | Résilience réglementaire | **TO VERIFY** | Trancher applicabilité avec size metrics ; sinon watch only | Sécurité/RSSI futur ; conformité | OPEN — DORA TO VERIFY |
| C-B14 | Héritage 1.3.2-A | Santé / AIPD | TO VERIFY | Si santé confirmée → réévaluer contraintes sécurité / AIPD | Sécurité/RSSI futur ; conformité | OPEN — HEALTH DATA TO VERIFY |

### 15.13 Questions TO VERIFY

1. Effectif / CA / bilan / groupe du cabinet → **DORA applicability** ?
2. `HEALTH DATA PROCESSING` confirmé ou non (impact sécurité) ?
3. Populations pour lesquelles MFA sera retenue (interne / client / admin) ?
4. Modèle d’accès Courtier vs Directeur vs Client (profondeur des droits) ?
5. RPO / RTO / criticité des données pour continuité ?
6. Qui opère sauvegarde / restauration (cabinet vs fournisseur) ?
7. Durée de conservation des journaux (besoin légal / contentieux) ?
7bis. Périmètre exact des données sinistre à protéger ?
8. Localisation / transferts si recours cloud / SaaS ?
9. Processus organisationnel incident (rôles réels du cabinet) — sans inventer DPO/RSSI ici ?
10. NIS2 / autres cadres cyber sectoriels — **hors conclusion** sans preuve (non tranché ici) ?

### 15.14 Sources exploitées

| ID | Thème | Organisme | Titre | URL | Date | Consultation | Pertinence | Statut |
|----|-------|-----------|-------|-----|------|--------------|------------|--------|
| S32 | Guide sécurité | CNIL | Guide de la sécurité des données personnelles (hub + édition 2024) | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles ; PDF https://cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf | 2024-03 | 2026-09-29 | Fiches 4–5, 16–19, 21–22 | ACTIVE |
| S33 | Auth | CNIL | Sécurité : Authentifier les utilisateurs | https://www.cnil.fr/fr/securite-authentifier-les-utilisateurs | 2024-03-14 | 2026-09-29 | Identifiants ; MFA ; mots de passe | ACTIVE |
| S34 | Habilitations | CNIL | Sécurité : Gérer les habilitations | https://www.cnil.fr/fr/securite-gerer-les-habilitations | 2024-03-13 | 2026-09-29 | Moindre privilège ; revues | ACTIVE |
| S35 | Logs | CNIL | Sécurité : Tracer les opérations | https://www.cnil.fr/fr/securite-tracer-les-operations | 2024-03-14 | 2026-09-29 | Journalisation | ACTIVE |
| S36 | Backup | CNIL | Sécurité : Sauvegarder | https://cnil.fr/fr/securite-sauvegarder | 2024-03-14 | 2026-09-29 | 3-2-1 ; tests restauration | ACTIVE |
| S37 | Incidents | CNIL | Sécurité : Gérer les incidents et les violations | https://www.cnil.fr/fr/gerer-les-incidents-et-les-violations | 2024-03-14 | 2026-09-29 | Processus ; art. 33/34 | ACTIVE |
| S38 | Violations | CNIL | Notifier une violation de données personnelles | https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles | 2018-05-24 | 2026-09-29 | Notification 72 h ; art. 33/34 | ACTIVE |
| S39 | Cloud | CNIL | Sécurité : Cloud, informatique en nuage | https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage | 2024-03-14 | 2026-09-29 | Critères SaaS / cloud | ACTIVE |
| S40 | Hygiène | ANSSI | Guide d’hygiène informatique | https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique | 2017-01-23 | 2026-09-29 | Socle 42 mesures (bonnes pratiques) | ACTIVE |
| S41 | MFA | ANSSI | Recommandations authentification multifacteur et mots de passe | https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe | 2021-10-08 | 2026-09-29 | MFA selon risque | ACTIVE |
| S42 | Backup | ANSSI | Sauvegarde des systèmes d’information (fondamentaux) | https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation | 2023-10-25 | 2026-09-29 | Résilience / ransomware | ACTIVE |
| S43 | DORA texte | EUR-Lex | Règlement (UE) 2022/2554 (DORA) | https://eur-lex.europa.eu/eli/reg/2022/2554/oj | 2022-12-27 | 2026-09-29 | Art. 2, 3 (60)(63)(64) | ACTIVE |
| S44 | DORA Q&A | EIOPA / CE | DORA237 — 3350 | https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/dora237-3350_en | 2025-05-26 (submission) | 2026-09-29 | Exemption intermédiaires PME | ACTIVE |
| S45 | DORA Q&A | EIOPA / CE | 3100 — DORA099 | https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/3100-dora099_en | 2024-06-04 (submission) | 2026-09-29 | Calcul taille / groupe | ACTIVE |
| S31 | RGPD | EUR-Lex | Règlement (UE) 2016/679 | (déjà au registre) | 2016 | 2026-09-29 | Art. 32, 33, 34 | ACTIVE (réutilisé) |

### 15.15 Limites / réserves

- **Pas** d’audit, pentest, homologation, EBIOS RM complète, politique SSI, architecture sécurité, acceptation de risque.
- Architecture / stack / fournisseur SaaS / chiffrement / MFA / RPO-RTO / PRA-PCA = **NOT DECIDED**.
- Impacts = **potentiels** ; exposition souvent CONTEXT DEPENDENT faute de runtime.
- DORA = **TO VERIFY** (size metrics absentes) — **ni** applicable **ni** non applicable déclaré.
- HEALTH DATA / AIPD / bases légales restent **TO VERIFY** (1.3.2-A).
- Recommandations ANSSI ≠ obligations légales automatiques.
- **1.3.2-C / D / E** et **1.4** **non ouverts**.
```

## 12. Synthèse §13 (complète)

```markdown
## 13. Synthèse 1.3 (état courant)

| Point | État |
|-------|------|
| **1.3** | OPENED — WORKING WATCH |
| **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
| **1.3.2** | IN PROGRESS |
| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
| **1.3.2-B** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
| **1.3.2-C / D** | NOT STARTED |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.4** | NOT OPENED |
| Miro / Notion | NOT MODIFIED |

Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-B **n’est pas** un audit de sécurité, une homologation, ni une preuve de conformité DORA.
```

## 13. Diff Git utile (commit HEAD)

```
 .../crm-assurance-courtage-operating-doctrine.md   |   8 +-
 .../01-03-veille-technologique-reglementaire.md    | 320 ++++++++++++++++++++-
 2 files changed, 315 insertions(+), 13 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 5873c9b1..fac49558 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -172,15 +172,15 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.1 | **VALIDATED** |
 | 1.2 | **VALIDATED** |
 | 1.3 | **OPENED** |
-| 1.3.1 | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
-| Étape actuelle | **1.3.2-A Réglementation assurance & données — AWAITING REVIEW** |
-| 1.3.2-B | **NOT STARTED** |
+| 1.3.1 | **REVIEW PASS** |
+| 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
+| Étape actuelle | **1.3.2-B Sécurité & résilience — AWAITING REVIEW** |
 | 1.3.2-C | **NOT STARTED** |
 | 1.3.2-D | **NOT STARTED** |
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revoir le deep-dive 1.3.2-A avant d’ouvrir 1.3.2-B |
+| Prochain objectif | Revoir 1.3.2-B avant ouverture de 1.3.2-C |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
index e0b981b6..b2df43e8 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
@@ -5,8 +5,8 @@
 | **Statut 1.3** | **OPENED — WORKING WATCH** |
 | **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
 | **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
-| **1.3.2-A** | **REGULATION & DATA — AWAITING REVIEW** |
-| **1.3.2-B** | **NOT STARTED** |
+| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
+| **1.3.2-B** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
 | **1.3.2-C** | **NOT STARTED** |
 | **1.3.2-D** | **NOT STARTED** |
 | **1.1** | VALIDATED |
@@ -35,7 +35,7 @@ La veille technologique et réglementaire vise à identifier, pour le CRM Assura
 **Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.

 Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
-Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A** uniquement.
+Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A** (REVIEW PASS) et **1.3.2-B** (AWAITING REVIEW). **1.3.2-C / D / E** et **1.4** restent **NON OUVERTS**.

 ---

@@ -288,10 +288,10 @@ Règle pédagogique tracée uniquement :

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **AWAITING REVIEW** |
+| **Statut** | **REVIEW PASS — REGULATION & DATA** (ChatGPT ; preuve postérieure au handoff Git historique AWAITING REVIEW) |
 | **Date de recherche** | 2026-09-29 |
 | **Transverse** | RGPD / conformité (activé) |
-| **Sécurité / RSSI autonome** | **NON** — frontière stricte avec 1.3.2-B |
+| **Sécurité / RSSI autonome** | **NON** — deep-dive 1.3.2-B ouvert séparément |
 | **Nature** | Veille / analyse de cadrage sourcée — **pas** avis juridique ; **pas** conformité certifiée |

 ### 14.1 Périmètre et méthode
@@ -329,7 +329,7 @@ Règle pédagogique tracée uniquement :
 | Conseil dans la durée | ACPR recommande conseil périodique aussi pour dommages / prévoyance ; entrée en application 31/12/2025 | ACPR article 2025 | Renouvellement / vie du contrat | Rappels / revue besoins / historique | LIKELY / calendrier exact TO VERIFY |
 | Traçabilité documentaire | Nécessaire pour démontrer le parcours de conseil (principe issu des obligations d’information / reco.) | IDD + ACPR (lecture combinée) | Documents + historique + espace sécurisé | Conserver échanges / pièces / besoins | LIKELY |
 | Digitalisation | ACPR : quel que soit le canal de vente (ex. préférences durabilité assurance-vie) | ACPR article 2025 | Canaux Visio / email / espace client | Même exigence de qualité de conseil en digital | LIKELY |
-| Support durable / com. | Non approfondi ici hors besoins sourcés IDD/ACPR | — | — | Hors scope détaillé 1.3.2-A | NOT APPLICABLE (pour l’instant) |
+| Support durable / com. | Non approfondi ici hors besoins sourcés IDD/ACPR | — | — | Hors scope détaillé 1.3.2-A | **OUT OF SCOPE / NOT ASSESSED IN THIS DEEP-DIVE** |

 **Limite :** ACPR 2024-R-03 est une **recommandation** de superviseur (bonnes pratiques / attentes de Place), distincte du texte IDD. Le statut juridique exact pour le cabinet fictif reste **TO VERIFY** (ORIAS / catégorie d’intermédiaire).

@@ -467,6 +467,307 @@ Forme équivalente retenue : **NO EVIDENCE OF HEALTH DATA PROCESSING IN CURRENT
 - Aucune stack / architecture / conception SSI.


+## 15. 1.3.2-B — Sécurité & résilience
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
+| **Date de recherche** | 2026-09-29 |
+| **Type cœur** | Sécurité / RSSI |
+| **Profil** | **Standard** — research-only / cadrage sécurité |
+| **Critical** | **NON** — aucune acceptation de risque, aucune décision d’architecture SSI, aucun contrôle implémenté |
+| **Nature** | Analyse qualitative proportionnée — **pas** audit ; **pas** pentest ; **pas** EBIOS RM complète ; **pas** politique SSI ; **pas** preuve DORA |
+
+### 15.1 Périmètre et méthode
+
+**Périmètre fonctionnel protégé (1.1 / 1.2 uniquement) :** acteurs Courtier / Directeur / Prospect→Client / TPE-PME / particuliers ; processus prospection → devis → relances → RDV → conseil → souscription → renouvellement / résiliation → documents → sinistres → pilotage ; informations identité / besoins / devis / contrats / documents / historique / sinistres (niveau brief) / KPI ; canaux RDV physique / Visio / téléphone / email / espace client ; capacités centralisation / espace documentaire sécurisé / historique / espace client / automatisations futures non définies.
+
+**Réserves héritées de 1.3.2-A (non recalculées) :** `HEALTH DATA PROCESSING = TO VERIFY` ; `AIPD = TO VERIFY` ; bases légales = TO VERIFY ; sous-traitants / SaaS = NOT DECIDED ; architecture / stack = NOT DECIDED. Données de santé **non présumées** ; si confirmées plus tard, contraintes / impacts potentiels augmenteraient.
+
+**Méthode :** analyse qualitative proportionnée (pas de score fictif « RISK = HIGH ») ; cartographie actifs / surfaces ; scénarios R-B01…R-B12 ; familles de contrôles candidates ; exigences C-Bxx. Sources N1 réellement ouvertes (CNIL Guide sécurité 2024 + fiches ; ANSSI hygiène / MFA / sauvegarde ; RGPD art. 32–34 via CNIL + S31 ; DORA 2022/2554 + EIOPA Q&A).
+
+**Posture CKC (fallback synthetic map + §4.10) :** adversarial ; surfaces ; données ; scénarios ; contrôles ; limites ; preuves — **pas** de fausse maturité. Autorité d’exécution : **aucune** (method-candidate).
+
+**Hors scope strict :** architecture SSI ; IAM / RBAC final ; choix MFA / IdP ; algorithmes / KMS / hébergement ; SIEM / SOC / EDR ; PRA/PCA/RPO/RTO finaux ; scoring fournisseur ; pentest ; ouverture 1.3.2-C/D/E ou 1.4.
+
+### 15.2 Synthèse exécutive bornée
+
+1. **FAIT** — RGPD art. 32 exige des mesures techniques et organisationnelles appropriées (intégrité / confidentialité) → **IMPACT** : le futur CRM devra permettre des contrôles proportionnés, non encore choisis → **STATUT** : DESIGN CONSTRAINT / implementation NOT DECIDED
+2. **RECOMMANDATION OFFICIELLE** — CNIL (fiches 4–5) : authentifier chaque utilisateur ; limiter les accès au besoin → **IMPACT** : comptes Courtier / Directeur / Client à séparer conceptuellement → **STATUT** : SECURITY REQUIREMENT CANDIDATE ; ACCESS CONTROL MODEL = TO DESIGN LATER
+3. **RECOMMANDATION OFFICIELLE** — CNIL / ANSSI : privilégier MFA selon analyse de risque (esp. accès externes / privilégiés) → **IMPACT** : MFA candidat pour populations à risque, **pas** décision « MFA obligatoire pour tous » → **STATUT** : MFA / STRONG AUTHENTICATION = SECURITY REQUIREMENT CANDIDATE
+4. **FAIT métier** — espace client + espace documentaire validés comme capacités → **IMPACT** : séparation logique, droits, traçabilité des accès / téléchargements = contraintes de conception → **STATUT** : SECURITY DESIGN CONSTRAINTS
+5. **RECOMMANDATION OFFICIELLE** — CNIL fiche 16 : journaliser accès / modifications / événements sécurité → **IMPACT** : auditabilité candidate (durée / SIEM non décidés) → **STATUT** : AUDITABILITY / LOGGING = DESIGN CONSTRAINT CANDIDATE
+6. **RECOMMANDATION OFFICIELLE** — CNIL fiche 17 + ANSSI sauvegarde : copies régulières, isolation, tests de restauration → **IMPACT** : résilience à concevoir ; RPO/RTO = TO VERIFY → **STATUT** : BUSINESS CONTINUITY REQUIREMENTS = TO DEFINE
+7. **FAIT réglementaire** — RGPD art. 33/34 + CNIL : documenter violations ; notifier si risque ; informer si risque élevé → **IMPACT** : processus incident futur requis → **STATUT** : INCIDENT & BREACH MANAGEMENT = FUTURE PROCESS REQUIREMENT
+8. **RECOMMANDATION OFFICIELLE** — CNIL cloud / sous-traitance : évaluer sécurité fournisseur (auth, rôles, sauvegarde, localisation…) → **IMPACT** : checklist critères futurs SaaS/no-code (sans sélection d’outil) → **STATUT** : à réutiliser en 1.3.2-D
+9. **FAIT réglementaire** — DORA (UE) 2022/2554 art. 2(1)(o) peut couvrir les intermédiaires ; art. 2(3)(e) exclut micro/PME → **IMPACT** : size metrics cabinet manquantes → **STATUT** : **DORA APPLICABILITY = TO VERIFY**
+10. **LIMITE** — architecture / contrôles actuels / fréquences d’incident **inconnus** → **IMPACT** : impacts = POTENTIAL IMPACT / SCENARIO PRIORITY uniquement → **STATUT** : aucune acceptation de risque ; aucune architecture décidée
+
+### 15.3 Actifs / surfaces à protéger
+
+Cartographie de **haut niveau** (pas de CMDB ; pas d’inventaire technique fictif).
+
+| Actif / surface | Valeur / rôle métier | C | I | D | T | Question ouverte |
+|-----------------|----------------------|---|---|---|---|------------------|
+| Comptes internes Courtier | Accès dossiers / conseil / documents | HIGH | HIGH | MEDIUM | HIGH | MFA / sessions / récupération = TO DESIGN |
+| Accès Directeur | Pilotage + vue élargie probable | HIGH | HIGH | MEDIUM | HIGH | Périmètre droits vs Courtier = TO DESIGN |
+| Espace client futur | Canal validé ; conception non définie | HIGH | HIGH | MEDIUM | HIGH | Auth client / récupération de compte |
+| Données prospect | Identité / besoins / devis | HIGH | MEDIUM | MEDIUM | MEDIUM | Minimisation / conservation (→ A) |
+| Données client | Identité / contrats / historique | HIGH | HIGH | HIGH | HIGH | Classification sensibilité = TO VERIFY |
+| Contrats | Engagements / renouvellement | HIGH | HIGH | HIGH | HIGH | Intégrité des versions |
+| Documents (espace documentaire) | Admin / pieces / échanges | HIGH | HIGH | HIGH | HIGH | Séparation logique / partage |
+| Historique échanges / contrats | Continuité relationnelle | MEDIUM | HIGH | HIGH | HIGH | Rétention vs audit |
+| Données sinistre (niveau brief) | Suivi sinistres | HIGH | HIGH | HIGH | HIGH | Santé ? = TO VERIFY (A) |
+| Dashboard / KPI | Pilotage commercial | LOW–MED | MEDIUM | MEDIUM | LOW | Agrégation / accès Directeur |
+| Email (canal) | Relances / échanges | HIGH | MEDIUM | MEDIUM | MEDIUM | Phishing / fuite pièce jointe |
+| Futur SaaS / no-code | Dépendance potentielle | HIGH | HIGH | HIGH | HIGH | Critères sécurité (15.10) ; fournisseur NOT DECIDED |
+
+Légende : C=confidentialité ; I=intégrité ; D=disponibilité ; T=traçabilité (pertinence qualitative). Niveaux = **priorité de conception**, non risque mesuré.
+
+### 15.4 Scénarios de risque
+
+Analyse qualitative. **Pas** de score fictif « RISK = HIGH ». Colonnes : impact potentiel, exposition, confiance.
+
+| ID | Actif / processus | Scénario | Propriété | Impact potentiel | Exposition | Confiance | Mesures candidates | Statut |
+|----|-------------------|----------|-----------|------------------|------------|-----------|--------------------|--------|
+| R-B01 | Comptes Courtier / Directeur | Compromission compte interne (vol crédentials, session) | C / I / T | HIGH | PLAUSIBLE | MEDIUM | Auth forte candidate ; moindre privilège ; journalisation ; sensibilisation | DESIGN CONSTRAINT |
+| R-B02 | Espace client | Compromission compte client | C / I | HIGH | CONTEXT DEPENDENT | MEDIUM | Auth / récupération compte ; séparation dossiers | DESIGN CONSTRAINT |
+| R-B03 | Habilitations | Accès excessif (dossiers hors besoin) | C / T | HIGH | PLAUSIBLE | HIGH | Profils d’habilitation ; revue périodique | DESIGN CONSTRAINT |
+| R-B04 | Documents / email | Divulgation documents / données (mauvais destinataire, partage) | C | HIGH | PLAUSIBLE | MEDIUM | Droits partage ; traçabilité téléchargement ; sensibilisation | DESIGN CONSTRAINT |
+| R-B05 | Données / documents | Perte / altération (suppression, corruption, erreur) | I / D | HIGH | PLAUSIBLE | MEDIUM | Sauvegardes ; contrôles suppression ; restauration testée | DESIGN CONSTRAINT |
+| R-B06 | Service / données | Indisponibilité (panne, ransomware, dépendance SaaS) | D | HIGH | CONTEXT DEPENDENT | MEDIUM | Sauvegarde isolée ; continuité TO DEFINE ; critères fournisseur | DESIGN CONSTRAINT |
+| R-B07 | Email / utilisateurs | Phishing / ingénierie sociale | C / I | HIGH | PLAUSIBLE | HIGH | Sensibilisation ; auth renforcée ; procédures signalement | DESIGN CONSTRAINT |
+| R-B08 | Opérations critiques | Absence / insuffisance de traçabilité | T | MEDIUM–HIGH | PLAUSIBLE | HIGH | Journalisation accès / admin / incidents | DESIGN CONSTRAINT |
+| R-B09 | Futur SaaS / no-code | Mauvaise configuration (partage trop large, MFA off) | C / I / D | HIGH | CONTEXT DEPENDENT | MEDIUM | Checklist config ; moindre privilège ; revue | DESIGN CONSTRAINT — outil NOT SELECTED |
+| R-B10 | Fournisseur / sous-traitant | Dépendance : dispo, garanties sécurité, localisation | C / D | HIGH | CONTEXT DEPENDENT | MEDIUM | Due diligence sécurité ; contrat art. 28 ; réversibilité | DESIGN CONSTRAINT — fournisseur NOT DECIDED |
+| R-B11 | Gouvernance | Incident / violation mal détecté ou mal traité | C / T / gouvernance | HIGH | CONTEXT DEPENDENT | MEDIUM | Processus incident / violation ; documentation | FUTURE PROCESS REQUIREMENT |
+| R-B12 | Résilience | Sauvegarde ou restauration insuffisante | D / I | HIGH | PLAUSIBLE | HIGH | Règle 3-2-1 candidate ; tests restauration ; RPO/RTO TO VERIFY | DESIGN CONSTRAINT |
+
+**Scénarios non ajoutés (hors justification périmètre) :** attaque API (API non retenue) ; fraude paiement ; signature électronique ; biométrie ; IA ; app mobile ; infra cloud détaillée.
+
+### 15.5 Familles de contrôles candidates
+
+| Famille | Source principale | Portée projet | Statut |
+|---------|-------------------|---------------|--------|
+| Authentification (identifiants uniques, mots de passe, MFA candidate) | CNIL F4 ; ANSSI MFA | Comptes internes / client / admin futurs | CANDIDATE — techno NOT DECIDED |
+| Habilitations / moindre privilège | CNIL F5 | Courtier / Directeur / Client | ACCESS CONTROL MODEL = TO DESIGN LATER |
+| Protection échanges / documents | CNIL F13 / espace doc métier | Email, espace documentaire | CANDIDATE |
+| Chiffrement transit / repos | CNIL F21 ; F22 cloud ; RGPD art. 32 | Données / sauvegardes / cloud futur | ENCRYPTION REQUIREMENT = CANDIDATE / TO SPECIFY DURING ARCHITECTURE |
+| Journalisation / audit | CNIL F16 | Accès, admin, modifications, sécurité | DESIGN CONSTRAINT CANDIDATE |
+| Sauvegarde / restauration | CNIL F17 ; ANSSI sauvegarde | Données critiques métier | CANDIDATE — RPO/RTO TO VERIFY |
+| Continuité / reprise | CNIL F18 (principe) | Disponibilité relation client / contrats / sinistres | BUSINESS CONTINUITY = TO DEFINE |
+| Gestion incidents / violations | CNIL F19 ; art. 33/34 | Processus organisationnel | FUTURE PROCESS REQUIREMENT |
+| Sous-traitance / cloud / SaaS | CNIL F14 / F22 | Futurs fournisseurs | Critères 15.10 — outil NOT SELECTED |
+| Sensibilisation utilisateurs | CNIL F3 ; ANSSI hygiène | Phishing / email | CANDIDATE process |
+
+**Note :** recommandations ANSSI = bonnes pratiques (non obligations légales sauf texte contraire). RGPD art. 32 = obligation de mesures **appropriées** (proportionnées), pas une checklist technique imposée ici.
+
+### 15.6 Authentification et habilitations
+
+#### Authentification
+
+**Constat CNIL (F4, 2024) :** identifiant propre ; authentification avant accès ; MFA = ≥2 catégories distinctes (connaissance / possession / inhérence) ; interdiction comptes partagés sauf exception tracée ; politique mots de passe (empreinte, complexité selon cas d’usage) ; privilégier MFA surtout si accès depuis l’extérieur.
+
+**Constat ANSSI (guide MFA / mots de passe, 2021) :** analyser le risque avant choix des moyens ; privilégier MFA et facteur de possession ; adapter robustesse au contexte.
+
+| Élément | Statut projet |
+|---------|---------------|
+| MFA / strong authentication | **SECURITY REQUIREMENT CANDIDATE** |
+| Populations potentiellement concernées | Comptes privilégiés / admin futurs ; accès externes ; Courtier / Directeur (à arbitrer) ; espace client (à arbitrer) |
+| Mots de passe / récupération de compte / sessions | À évaluer en conception — **pas** de politique finale |
+| Technologie IdP / SSO / facteur concret | **NOT DECIDED** |
+| Décision « MFA REQUIRED FOR ALL USERS » | **NON** — hors cadrage Standard |
+
+#### Habilitations
+
+**Constat CNIL (F5) :** moindre privilège ; profils d’habilitation ; validation des demandes ; retrait à départ / changement ; revue a minima annuelle.
+
+**Application projet (principe uniquement) :**
+- **Courtier** : accès aux dossiers / documents nécessaires à son activité — pas de droits admin génériques.
+- **Directeur** : vue pilotage / élargie possible, **sans** présumer « accès total » — à concevoir.
+- **Client** : accès limité à **ses** données / documents via espace client.
+
+**ACCESS CONTROL MODEL = TO DESIGN LATER** — pas de matrice RBAC finale ; pas de permissions décidées.
+
+### 15.7 Espace client / documents / données
+
+**SECURITY DESIGN CONSTRAINTS** (conception UI / stockage / chiffrement **non** choisis) :
+
+| Thème | Contrainte candidate | Statut |
+|-------|----------------------|--------|
+| Accès non autorisé | Authentification + droits avant consultation / téléchargement | CANDIDATE |
+| Confidentialité | Séparation logique des dossiers clients / prospects | CANDIDATE |
+| Droits | Partage / téléchargement limités au besoin | CANDIDATE |
+| Traçabilité | Journaliser accès / partage / suppression significatifs | CANDIDATE |
+| Récupération de compte (espace client) | Processus sûr à définir (éviter prise de contrôle) | TO DESIGN |
+| Suppression / rétention | Alignement conservation (→ 1.3.2-A) + possibilité restauration | TO VERIFY / TO DESIGN |
+| Exposition accidentelle (email) | Sensibilisation ; minimiser pièces jointes sensibles | CANDIDATE process |
+| Chiffrement | Transit + repos = familles à spécifier en architecture | CANDIDATE / TO SPECIFY |
+| Stockage / hébergement | | **NOT DECIDED** |
+
+Si `HEALTH DATA PROCESSING` était un jour confirmé : **augmentation** des contraintes / impacts potentiels (sans inventer le traitement ici).
+
+### 15.8 Journalisation / incidents / violations
+
+#### Journalisation / traçabilité
+
+**CNIL F16 :** journaliser activités métier, interventions techniques/admin, anomalies et événements sécurité ; conserver typiquement 6 mois–1 an (sauf besoin légal / contentieux / post-incident) ; tracer création / consultation / partage / modification / suppression (auteur, date/heure, nature, référence) ; protéger les journaux ; analyser pour détecter incidents.
+
+**AUDITABILITY / LOGGING = DESIGN CONSTRAINT CANDIDATE**
+
+**Non décidé :** format logs ; SIEM ; durée finale ; pipeline technique.
+
+#### Incidents / violations
+
+**CNIL F19 + page « Notifier une violation » + RGPD art. 33/34 :**
+- documenter **toutes** les violations en interne ;
+- évaluer le risque pour les personnes ;
+- notifier la CNIL **si** risque pour droits/libertés (objectif 72 h après constatation) ;
+- informer les personnes **si** risque élevé (sauf exceptions) ;
+- intégrer violations dans le processus de gestion d’incidents ; critères de qualification ; sensibilisation au signalement.
+
+**INCIDENT & BREACH MANAGEMENT = FUTURE PROCESS REQUIREMENT**
+
+**Non créé ici :** procédure complète ; rôles DPO / RSSI / SOC fictifs ; playbooks techniques.
+
+### 15.9 Sauvegarde / restauration / résilience
+
+**CNIL F17 :** sauvegardes fréquentes ; copie géographiquement distincte ; au moins une copie hors ligne ; même niveau de sécurité que la production ; canal chiffré si transmission réseau ; **tester** intégrité et restauration ; règle **3-2-1** recommandée.
+
+**ANSSI (fondamentaux sauvegarde, 2023) :** sauvegarde indispensable face aux rançongiciels ; recommandations techniques/organisationnelles (segmentation, comptes dédiés, etc.) — à adapter au contexte futur ; **pas** d’obligation légale autonome ANSSI.
+
+| Élément | Statut |
+|---------|--------|
+| Sauvegardes régulières + isolation | SECURITY REQUIREMENT CANDIDATE |
+| Restauration testée | SECURITY REQUIREMENT CANDIDATE |
+| RPO | **TO VERIFY** |
+| RTO | **TO VERIFY** |
+| Business continuity requirements | **TO DEFINE** |
+| PRA / PCA final | **NOT PRODUCED** |
+| Outil de backup / hébergement | **NOT DECIDED** |
+
+**Questions à arbitrer ultérieurement :** quelles données sont critiques (contrats, documents, historique, sinistres) ? quelle durée d’indisponibilité acceptable métier ? qui opère restauration (cabinet / fournisseur) ? fréquence des tests ?
+
+### 15.10 Critères sécurité futurs SaaS / no-code
+
+Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’éditeur.
+
+| # | Critère candidat | Pourquoi |
+|---|------------------|----------|
+| 1 | Authentification / MFA disponible et configurable | CNIL F4 ; ANSSI MFA |
+| 2 | Gestion des rôles / séparation des accès | CNIL F5 |
+| 3 | Séparation logique des espaces / tenants | Espace client / documents |
+| 4 | Chiffrement déclaré (transit / repos) | CNIL F21/F22 ; art. 32 |
+| 5 | Journalisation / export d’audit | CNIL F16 |
+| 6 | Sauvegarde / restauration / RPO-RTO déclarés | CNIL F17 ; ANSSI |
+| 7 | Disponibilité / continuité documentées | Résilience métier |
+| 8 | Gestion / notification d’incidents | CNIL F19 ; art. 33 |
+| 9 | Sous-traitants / chaîne d’hébergement documentés | CNIL F14/F22 ; art. 28 (A) |
+| 10 | Conditions de suppression / export / réversibilité | Exit / RGPD |
+| 11 | Documentation sécurité / attestations (si pertinentes) | Due diligence — **pas** obligation générique inventée |
+| 12 | Localisation / transferts de données | RGPD transferts (A) ; CNIL cloud |
+
+**Aucun fournisseur évalué. Stack = NOT DECIDED.**
+
+### 15.11 DORA — applicability & watch
+
+#### Champ d’application
+
+**Source :** Règlement (UE) 2022/2554 (DORA), EUR-Lex.
+
+- **Art. 2(1)(o) :** le règlement **peut** s’appliquer aux *insurance intermediaries, reinsurance intermediaries and ancillary insurance intermediaries*.
+- **Art. 2(3)(e) :** **exclusion** des intermédiaires (assurance / réassurance / auxiliaires) qui sont **microenterprises** ou **small or medium-sized enterprises**.
+- **Définitions de taille (Art. 3) :** micro (&lt;10 personnes et CA et/ou bilan ≤ 2 M€) ; small (10–&lt;50 et seuils CA/bilan) ; medium-sized (&lt;250 et CA ≤ 50 M€ et/ou bilan ≤ 43 M€) — définitions DORA (peuvent différer de la Rec. 2003/361/CE ; EIOPA DORA011).
+
+#### Q&A EIOPA / Commission
+
+- **DORA237 / Q&A 3350 :** confirme l’exemption art. 2(3)(e) pour intermédiaires micro/PME ; calcul des seuils pour activités d’assurance limitées = ressources **dédiées à l’assurance** (proportionnalité).
+- **DORA099 / Q&A 3100 :** règles de calcul type Rec. 2003/361/CE avec seuils DORA ; intermédiaires dans un groupe non financier → calcul **au niveau de l’entité individuelle**.
+
+#### Confrontation projet
+
+| Information nécessaire | Disponible ? |
+|------------------------|--------------|
+| Effectif (FTE) | **NON** |
+| Chiffre d’affaires | **NON** |
+| Bilan | **NON** |
+| Structure de groupe | **NON** |
+| Catégorie juridique exacte | **NON** (cabinet fictif / brief) |
+
+#### Verdict
+
+### DORA APPLICABILITY = TO VERIFY
+
+**Pas** de checklist de conformité DORA complète (applicabilité non établie).
+
+**Si applicable plus tard — thèmes à surveiller (watch only) :** gestion du risque ICT ; incidents majeurs ; résilience opérationnelle numérique ; risque tiers ICT — **sans** imposer ces exigences aujourd’hui.
+
+**Informations pour trancher :** effectif, CA, bilan, groupe, statut d’intermédiaire.
+
+### 15.12 Contraintes / exigences à transmettre aux étapes suivantes
+
+| ID | Source / constat | Scénario | Applicability | Exigence candidate | Étape future | Statut |
+|----|------------------|----------|---------------|--------------------|--------------|--------|
+| C-B01 | RGPD art. 32 ; CNIL Guide sécurité | Transverse | LIKELY | Mesures techniques/organisationnelles appropriées (C/I/D) | Architecture technique ; Sécurité/RSSI futur | OPEN — candidate |
+| C-B02 | CNIL F4 ; ANSSI MFA | R-B01, R-B02, R-B07 | LIKELY (principe) | Authentification robuste ; MFA = **candidate** selon risque / population | Conception ; Architecture ; Sécurité/RSSI futur | OPEN — MFA NOT MANDATED FOR ALL |
+| C-B03 | CNIL F5 | R-B03 | LIKELY | Moindre privilège ; profils Courtier / Directeur / Client | Conception fonctionnelle ; Architecture | OPEN — RBAC TO DESIGN |
+| C-B04 | Besoin métier + CNIL F5/F16 | R-B02, R-B04 | LIKELY | Espace client : accès limité aux données du titulaire ; récupération de compte sûre | Conception ; UX/UI ; Architecture | OPEN |
+| C-B05 | Besoin métier + CNIL | R-B04 | LIKELY | Espace documentaire : séparation logique ; droits partage/téléchargement ; traçabilité | Conception ; Architecture | OPEN |
+| C-B06 | CNIL F21/F22 ; art. 32 | R-B04, R-B09 | LIKELY (principe) | Chiffrement transit / repos à spécifier | Architecture technique | OPEN — algo/KMS NOT DECIDED |
+| C-B07 | CNIL F16 | R-B08 | LIKELY | Journalisation accès / admin / modifications / événements sécurité | Architecture ; RUN | OPEN — SIEM NOT DECIDED |
+| C-B08 | CNIL F17 ; ANSSI sauvegarde | R-B05, R-B06, R-B12 | LIKELY | Sauvegardes isolées + restauration testée | Architecture ; RUN ; Sécurité/RSSI futur | OPEN — RPO/RTO TO VERIFY |
+| C-B09 | CNIL F18 (principe) | R-B06 | CONTEXT DEPENDENT | Exigences de continuité métier à définir | Sécurité/RSSI futur ; RUN | OPEN — PCA/PRA TO DEFINE |
+| C-B10 | CNIL F19 ; art. 33/34 | R-B11 | LIKELY | Processus incidents / violations (doc, analyse risque, notification) | Sécurité/RSSI futur ; RUN | OPEN — process NOT WRITTEN |
+| C-B11 | CNIL F3 ; ANSSI hygiène | R-B07 | LIKELY | Sensibilisation phishing / email | Delivery ; RUN | OPEN |
+| C-B12 | CNIL F14/F22 ; checklist 15.10 | R-B09, R-B10 | LIKELY si SaaS | Critères sécurité fournisseurs (auth, rôles, backup, audit, localisation, réversibilité) | 1.3.2-D ; Architecture | OPEN — outil NOT SELECTED |
+| C-B13 | DORA art. 2 + EIOPA Q&A | Résilience réglementaire | **TO VERIFY** | Trancher applicabilité avec size metrics ; sinon watch only | Sécurité/RSSI futur ; conformité | OPEN — DORA TO VERIFY |
+| C-B14 | Héritage 1.3.2-A | Santé / AIPD | TO VERIFY | Si santé confirmée → réévaluer contraintes sécurité / AIPD | Sécurité/RSSI futur ; conformité | OPEN — HEALTH DATA TO VERIFY |
+
+### 15.13 Questions TO VERIFY
+
+1. Effectif / CA / bilan / groupe du cabinet → **DORA applicability** ?
+2. `HEALTH DATA PROCESSING` confirmé ou non (impact sécurité) ?
+3. Populations pour lesquelles MFA sera retenue (interne / client / admin) ?
+4. Modèle d’accès Courtier vs Directeur vs Client (profondeur des droits) ?
+5. RPO / RTO / criticité des données pour continuité ?
+6. Qui opère sauvegarde / restauration (cabinet vs fournisseur) ?
+7. Durée de conservation des journaux (besoin légal / contentieux) ?
+7bis. Périmètre exact des données sinistre à protéger ?
+8. Localisation / transferts si recours cloud / SaaS ?
+9. Processus organisationnel incident (rôles réels du cabinet) — sans inventer DPO/RSSI ici ?
+10. NIS2 / autres cadres cyber sectoriels — **hors conclusion** sans preuve (non tranché ici) ?
+
+### 15.14 Sources exploitées
+
+| ID | Thème | Organisme | Titre | URL | Date | Consultation | Pertinence | Statut |
+|----|-------|-----------|-------|-----|------|--------------|------------|--------|
+| S32 | Guide sécurité | CNIL | Guide de la sécurité des données personnelles (hub + édition 2024) | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles ; PDF https://cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf | 2024-03 | 2026-09-29 | Fiches 4–5, 16–19, 21–22 | ACTIVE |
+| S33 | Auth | CNIL | Sécurité : Authentifier les utilisateurs | https://www.cnil.fr/fr/securite-authentifier-les-utilisateurs | 2024-03-14 | 2026-09-29 | Identifiants ; MFA ; mots de passe | ACTIVE |
+| S34 | Habilitations | CNIL | Sécurité : Gérer les habilitations | https://www.cnil.fr/fr/securite-gerer-les-habilitations | 2024-03-13 | 2026-09-29 | Moindre privilège ; revues | ACTIVE |
+| S35 | Logs | CNIL | Sécurité : Tracer les opérations | https://www.cnil.fr/fr/securite-tracer-les-operations | 2024-03-14 | 2026-09-29 | Journalisation | ACTIVE |
+| S36 | Backup | CNIL | Sécurité : Sauvegarder | https://cnil.fr/fr/securite-sauvegarder | 2024-03-14 | 2026-09-29 | 3-2-1 ; tests restauration | ACTIVE |
+| S37 | Incidents | CNIL | Sécurité : Gérer les incidents et les violations | https://www.cnil.fr/fr/gerer-les-incidents-et-les-violations | 2024-03-14 | 2026-09-29 | Processus ; art. 33/34 | ACTIVE |
+| S38 | Violations | CNIL | Notifier une violation de données personnelles | https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles | 2018-05-24 | 2026-09-29 | Notification 72 h ; art. 33/34 | ACTIVE |
+| S39 | Cloud | CNIL | Sécurité : Cloud, informatique en nuage | https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage | 2024-03-14 | 2026-09-29 | Critères SaaS / cloud | ACTIVE |
+| S40 | Hygiène | ANSSI | Guide d’hygiène informatique | https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique | 2017-01-23 | 2026-09-29 | Socle 42 mesures (bonnes pratiques) | ACTIVE |
+| S41 | MFA | ANSSI | Recommandations authentification multifacteur et mots de passe | https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe | 2021-10-08 | 2026-09-29 | MFA selon risque | ACTIVE |
+| S42 | Backup | ANSSI | Sauvegarde des systèmes d’information (fondamentaux) | https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation | 2023-10-25 | 2026-09-29 | Résilience / ransomware | ACTIVE |
+| S43 | DORA texte | EUR-Lex | Règlement (UE) 2022/2554 (DORA) | https://eur-lex.europa.eu/eli/reg/2022/2554/oj | 2022-12-27 | 2026-09-29 | Art. 2, 3 (60)(63)(64) | ACTIVE |
+| S44 | DORA Q&A | EIOPA / CE | DORA237 — 3350 | https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/dora237-3350_en | 2025-05-26 (submission) | 2026-09-29 | Exemption intermédiaires PME | ACTIVE |
+| S45 | DORA Q&A | EIOPA / CE | 3100 — DORA099 | https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/3100-dora099_en | 2024-06-04 (submission) | 2026-09-29 | Calcul taille / groupe | ACTIVE |
+| S31 | RGPD | EUR-Lex | Règlement (UE) 2016/679 | (déjà au registre) | 2016 | 2026-09-29 | Art. 32, 33, 34 | ACTIVE (réutilisé) |
+
+### 15.15 Limites / réserves
+
+- **Pas** d’audit, pentest, homologation, EBIOS RM complète, politique SSI, architecture sécurité, acceptation de risque.
+- Architecture / stack / fournisseur SaaS / chiffrement / MFA / RPO-RTO / PRA-PCA = **NOT DECIDED**.
+- Impacts = **potentiels** ; exposition souvent CONTEXT DEPENDENT faute de runtime.
+- DORA = **TO VERIFY** (size metrics absentes) — **ni** applicable **ni** non applicable déclaré.
+- HEALTH DATA / AIPD / bases légales restent **TO VERIFY** (1.3.2-A).
+- Recommandations ANSSI ≠ obligations légales automatiques.
+- **1.3.2-C / D / E** et **1.4** **non ouverts**.
+
+
 ## 13. Synthèse 1.3 (état courant)

 | Point | État |
@@ -474,11 +775,12 @@ Forme équivalente retenue : **NO EVIDENCE OF HEALTH DATA PROCESSING IN CURRENT
 | **1.3** | OPENED — WORKING WATCH |
 | **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
 | **1.3.2** | IN PROGRESS |
-| **1.3.2-A** | REGULATION & DATA — AWAITING REVIEW |
-| **1.3.2-B / C / D** | NOT STARTED |
+| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
+| **1.3.2-B** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
+| **1.3.2-C / D** | NOT STARTED |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
 | **1.4** | NOT OPENED |
 | Miro / Notion | NOT MODIFIED |

-Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-A **n’est pas** une conformité RGPD certifiée ni un avis juridique.
+Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-B **n’est pas** un audit de sécurité, une homologation, ni une preuve de conformité DORA.

```

## 14. Validations

| Check | Résultat |
|-------|----------|
| Git Truth | **PASS** |
| Profil Standard correctement borné | **PASS** |
| Critical non implicite | **PASS** |
| 1.3.2-A REVIEW PASS tracé | **PASS** |
| Correction éditoriale A | **PASS** |
| 1.3.2-B seul ouvert | **PASS** |
| Sources officielles | **PASS** |
| CNIL sécurité | **PASS** |
| ANSSI | **PASS** |
| Assets / surfaces | **PASS** |
| Scénarios risques | **PASS** |
| Pas de score fictif | **PASS** |
| Auth | **PASS** |
| Habilitations | **PASS** |
| Documents / espace client | **PASS** |
| Logs / audit | **PASS** |
| Incidents / violations | **PASS** |
| Backup / restauration | **PASS** |
| Critères SaaS/no-code | **PASS** |
| Aucun fournisseur évalué | **PASS** |
| DORA applicability | **TO VERIFY** |
| Architecture | **NOT DECIDED** |
| Stack | **NOT DECIDED** |
| 1.3 | **OPENED** |
| 1.3.2-C/D | **NOT STARTED** |
| 1.4 | **NOT OPENED** |
| Miro / Notion | **NOT MODIFIED** |
| Exactement 2 fichiers projet | **PASS** |
| git diff --check | **PASS** |
| Commit | **PASS** (`154036ca` — docs(crm-assurance-courtage): research 1.3.2b security resilience) |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |
| Review Handoff | **PASS** — tip `33bbf7bc` / blob `910cb6fa` — HANDOFF UPDATED — REMOTE VERIFIED |

## 15. Réserves

- Analyse qualitative de cadrage uniquement.
- DORA TO VERIFY faute de size metrics.
- HEALTH DATA / AIPD / bases légales restent TO VERIFY (A).
- Aucune fausse précision quantitative ; impacts = potentiels.
- Recommandations ANSSI ≠ obligations légales automatiques.

## 16. Verdict

**READY FOR CHATGPT REVIEW — CRM 1.3.2-B SECURITY & RESILIENCE RESEARCH COMPLETE**

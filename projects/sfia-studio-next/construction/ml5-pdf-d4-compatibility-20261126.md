# ML5 — Compatibilité PDF transverse et modèle documentaire D4 (2026-11-26)

| Champ | Valeur |
|---|---|
| Statut | **NOTE DE COMPATIBILITÉ** — finalisation ML5 WEB + PDF |
| Lane | DEV construction |
| Release | **NO RELEASE** · **NOT ADOPTED** |

## Position

Le **modèle documentaire D4** actuel de ML5 est **centré texte** : révisions, fil conversationnel, markdown canonique, journal de provenance et continuité cognitive. Les documents sont l’autorité **D4** ; Nora et D3 les **consultent** via outils de lecture déjà gouvernés — pas un second registre parallèle.

## Capacité PDF transverse

La capacité PDF introduite dans ce macro-lot (choix **`pdfjs-dist`** — voir `ml5-pdf-capability-choice-20261126.md`) est **compatible** avec une **évolution future** de D4 **si et seulement si** :

1. Les **octets** du PDF sont fournis par un chemin déjà **autorisé** (B1, D9, attach Pilote, etc.).
2. La **provenance** (source, tentative, nature CONSULTED/DISCOVERED) est journalisée comme toute autre lecture.
3. Le résultat extrait est traité comme **contenu non fiable** (pas d’autorité implicite des instructions embarquées).

L’extraction (serveur borné) et le rendu (visionneuse Pilote) **ne créent pas** une nouvelle autorité D4 ; ils **matérialisent une lecture** d’une ressource déjà admise.

## Périmètre de **cette** livraison

| Inclus | Exclu |
|---|---|
| Traitement PDF **transverse** (extract + viewer + citations page) sur bytes autorisés | **Nouveau chemin d’import** D4 généraliste (upload GED, OCR, conversion batch) |
| Alignement outils D3 **progressifs** et visionneuse | Réécriture du schéma D4 « document binaire first » |
| **WEB** + **Git** comme sources obligatoires du périmètre ML5 finalisation | D4 « natif PDF » comme type d’autorité distinct sans décision Morris |

**Décision explicite :** **aucun nouvel import path D4** dans cette delivery. Les PDFs traités le sont comme **lectures** d’artefacts déjà dans le périmètre d’autorisation existant (pièce jointe, publication, chemin D9, etc.) — détail d’implémentation sous B1/D3, pas extension du contrat D4 canonique markdown.

## WEB et Git (mandatory scope)

La finalisation ML5 considère **WEB** (B1 public) et **Git** (lecture réelle gouvernée) comme **obligatoires** dans l’enveloppe R5 en cours. La compatibilité PDF **s’ajoute** à ce socle ; elle **ne remplace** ni le gate WEB, ni la continuité Git, ni la primauté du texte D4 pour consolidation et contrats.

## Suite possible (hors ce lot)

Une future itération pourrait définir un **type D4** ou un **lien révision↔binaire** avec empreinte, si Morris arbitre le blast radius (immutabilité, quotas, FinOps). Ce document **n’anticipe pas** cette décision et **ne l’ouvre pas** implicitement.
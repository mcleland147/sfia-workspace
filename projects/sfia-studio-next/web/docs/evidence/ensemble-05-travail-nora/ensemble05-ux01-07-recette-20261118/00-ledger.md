# Ensemble 05 — UX-01 à UX-07 + relivraison RECETTE

**Date :** 2026-11-18
**GO Morris :** développement + QA + build + cutover RECETTE, même cycle
**Profil :** Critical · NO RELEASE · NO PRODUCT PUSH

## Identités

| | |
| --- | --- |
| Parent RECETTE | `90c3e59f` / `5C3be3-ils1iOmH3qXo4d` |
| Nouveau candidat | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` · tree `c39e45e6fe1eca45c5dbc3dbcb96aa8ca9818b2a` |
| Build | `qw3FaPD1B4KBrRab3LyKL` |
| Worktree | `…-ensemble05-recette-build-bd3854ac` |
| URL | http://127.0.0.1:3200 |
| DB | `:5434` / `sfia_next_recette_ml4` — counts `23\|117\|556\|4` avant=après |

## Registre des corrections

| ID | Cause | Correctif |
| --- | --- | --- |
| UX-01 | `TextView` empilait l’icône seule ; `Heading` forçait une icône même sans rôle | Flex row icon+body ; icône Heading seulement si role/icon |
| UX-02 | `<caption>Matrice de comparaison</caption>` redondante | Caption retirée ; `aria-label` sur table |
| UX-03 | `fig-nc-section-num` 01/02 + titres d’étape préfixés | Sections plain ; `stripLeadingOrdinal` sur titres d’étape |
| UX-04 | `GraphNodeCard` affichait toujours l’œil | Icône seulement pour hypothesis/unknown/cause/risk |
| UX-05 | Nœuds sans `laneId` tombaient dans une 4ᵉ voie | Classification fan-in ≥2 → gate ; suite après gate ; largeur swimlane adaptée |
| UX-06 | Résidus tous en observation + padding faible | Mapping sémantique label→rôle ; padding gauche ; omettre icône neutre |
| UX-07 | `min-height` + `flex:1` sur summary | Flux naturel, `align-items:start`, plus de stretch artificiel |

## Qualification

- Vitest UX + ELK + UAT-03 detail + C2 editorial : **PASS**
- Smoke RECETTE login/portfolio/projet/fil : **PASS**
- Isolation Pilot B→A : **404**
- UNKNOWN historiques : **conservés** (2)
- FORCE/SIM/DIAG : **vides**

## Réserves restantes

Aucune réserve UX-01…07 ouverte. Recette utilisateur Morris **pending**.

## Verdict

`ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST`

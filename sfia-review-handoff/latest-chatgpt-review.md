# Review Pack — Finitions du portefeuille personnel

Date : 28 novembre 2026, 16h25 Europe/Paris.
Cycle : 08 Delivery / implémentation. Profil Standard. Typologie INC.
Périmètre : écart sous la barre, séparateur du menu, confrontation des valeurs relues, clavier du menu.
Mono-cycle. Pas de création de fichier.

## Identité Git

Entrée : branche sfia/next-ml5-integrated-delivery-20261123.
HEAD df5d83be04100e41b03808800144a576552def73.
Tree 99a6731960e612ba488506306377a037a6df3477.
Parent ee6edf34042887576b546753535309ab5b9c55ea.
origin/main et merge-base 997897fd7cf914771e7d08e8030dc7123fab7d25.
Handoff d'entrée 33c4267ee91ae9721d2ceac47592aa18193315c3, blob dd4d1130ade66c7ab1f2f6ee5de637307b66de8a.

Sortie : aa04daba2d7591d8d28da1dc04901de142e274a3.
Tree e46457a96ddbe18ecd35c29f367e9b3b4afcbd40.
Parent df5d83be04100e41b03808800144a576552def73.
Push fast-forward df5d83be..aa04daba. Aucune PR. Aucun run Actions observé.
Les workflows ne se déclenchent que sur main ou une PR vers main.

## Sources lues

Suivi 892ba71ee370c215b1d0835a7d1a88e3d74c5c80, contrat UX v0.3 5008d51d.
Figma itgvCulInEnFY6DvgIegvP, session 3212f216-86dc-4f99-8245-5719442baaca, lecture seule.
Nœuds extraits ce cycle : menu projet 1420:2138, barre 1420:285.
Le menu est une colonne, écart 5 px, padding 14, filet 270×1 entre le type 12/17 et la première action. Nom 15/21. Sept actions 270×35. Cadre 298×359.
La barre ne contient pas l'écart vers la bibliothèque. Cet écart est le gap de région de 12 px du contrat v0.3.

## G3 et allowlist

Un seul PersonalPortfolio, un seul shell, aucune route ni mutation D1 modifiée. Le champ moved était déjà renvoyé par l'ordre.
Fichiers modifiés, tous dans l'allowlist : PersonalPortfolio.tsx, personal-portfolio.css, portfolio-organization.test.ts, as-built-portefeuille-personnel.md, delivery-history.md.
Aucune création. Schéma 028 inchangé. Figma non modifié. RECETTE non touchée.

## Corrections

UX-R05. Une marge unique de 12 px, .personal-portfolio-collection, sépare la barre du contenu dans les trois vues. Le premier titre de groupe n'ajoute pas une seconde marge. Le suivant garde 12 px.
Mesure runtime, viewport 1459 : écart outils → colonnes 12 px en liste ; outils → grille 12 px ; outils → premier titre de groupe 12 px. Synthèse 160, reprise 180, ligne 60, tuile hauteur 116. Grille : 3 tuiles puis 2, largeur de tuile 344 parce que le viewport n'est pas 1680.

UX-R04. Filet 270×1, 5 px au-dessus et 5 px au-dessous, cadre mesuré 298×359 pour le projet et la préparation. Pas de débordement. Renommer et Supprimer restent indisponibles. Monter et Descendre restent liés à l'ordre personnalisé.

TECH-R01. classifyPortfolioResponse exige moved booléen pour l'ordre. correlatedAcknowledgement n'accepte l'accusé que s'il répond à cette intention, version comprise. reconcileOwnerEffect compare les valeurs relues, l'accusé et la collection affichée. Résultats distincts : confirmed, current, absent, unchanged, unproven. Un 404 est absent, pas un succès. moved false annonce « L'espace n'a pas changé de place. » Un conflit relu débloque sans exiger la valeur refusée. Une relecture après UNKNOWN ne devient pas une confirmation historique. Le changement de vue Liste → Grille → Groupes → Liste a abouti sans message d'erreur. Vue finale list, version 22.

TECH-R02. Le menu s'ouvre sur la première action disponible. Flèche bas depuis « Ouvrir le projet » arrive sur « Ajouter aux favoris » et saute Renommer. Échap ferme et rend le focus au déclencheur. Menu préparation : focus initial « Reprendre avec Nora ». Dialogue d'archive : focus initial Annuler, Tab en Shift revient sur Archiver, Tab suivant revient sur Annuler, Échap ferme sans archiver. Le tiroir n'a pas été modifié.

## Preuves

Vitest tests/unit/portfolio-organization.test.ts : 4 tests, exit 0.
tsc --noEmit : 34 diagnostics, identiques à /tmp/sfia-tsc-entry.txt.
next build : exit 0. BUILD_ID FXPnpILiMkRUowEq2dUOf. Route /portfolio 9.13 kB.
DEV : port 3100, PID 13482, base sfia_next_dev, schéma 028. Lecture 252 espaces.
RECETTE : port 3200, PID 58965, inchangée.
Aucune capture appariée à 1680×970. Pas de F2 PASS.

## Matrice des quatre corrections

UX-R05 | barre collée au contenu | marge commune 12 px | CSS et collection | écart mesuré 12 dans les trois vues | aucune | réalisé.
UX-R04 | menu sans filet | séparateur 270×1, écart natif 5 | menu JSX et CSS | 298×359 mesuré, projet et préparation | hauteur nominale tenue | réalisé.
TECH-R01 | relecture réduite à un booléen | comparaison accusé / valeurs / collection | PersonalPortfolio et tests unitaires | 4 tests et trois changements de vue | pas de rejeu navigateur du 409 | réalisé.
TECH-R02 | flèches et focus incomplets | focus initial, flèches, Échap, piège du dialogue | PersonalPortfolio | exercé au navigateur | activation native Entrée du déclencheur non reproduite par l'injecteur de touches | réalisé.

## Réserves

R-B-F2. Preuve manquante. Pas de capture runtime appariée au nominal 1680. Les mesures DOM des deux finitions coïncident avec le contrat. Sortie : revue visuelle Morris sur ce candidat, puis mesure RECETTE sur GO distinct. Responsable Morris. Gate ouverte.
R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK. Réserves acceptées, inchangées.

## Verdict proposé

Technique : READY WITH RESERVES.
Visuel : REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.
Mandat 1 non accepté. Mandat 2 non engagé. NO RELEASE. NOT ADOPTED.

## Couverture des fichiers

as-built-portefeuille-personnel.md | modifié | section ajoutée ci-dessous et dans le diff | contrôlé.
delivery-history.md | modifié | entrée DELIV-2026-11-28-ML5-PORTFOLIO-FINISH-DEV | contrôlé.
PersonalPortfolio.tsx | modifié | diff complet | contrôlé.
personal-portfolio.css | modifié | diff complet | contrôlé.
portfolio-organization.test.ts | modifié | diff complet | contrôlé.

Stat :

 .../as-built-portefeuille-personnel.md             |   7 +
 .../construction/delivery-history.md               |  11 +
 .../src/components/portfolio/PersonalPortfolio.tsx | 276 +++++++++++++++++----
 .../components/portfolio/personal-portfolio.css    |  10 +-
 .../web/tests/unit/portfolio-organization.test.ts  |  95 ++++++-
 5 files changed, 351 insertions(+), 48 deletions(-)

## Diff complet df5d83be..aa04daba

diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 42dea115..924ddb4c 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,5 +1,12 @@
 # As-built — Portefeuille personnel et navigation

+## Finitions après revue visuelle
+
+Source relue, sans modification : menu projet `1420:2138`, barre `1420:285`. Le filet du menu est un enfant de 270×1 px dans un empilement dont l'écart est de 5 px. Le nom fait 15/21 et le type 12/17.
+La bibliothèque descend de 12 px sous la barre, par une seule marge commune aux trois vues. Le titre de groupe ne rajoute pas cet écart.
+Le menu s'ouvre sur la première action disponible. Les flèches sautent les actions indisponibles. Échap rend le focus au déclencheur.
+Une réponse n'est corrélée que si elle répond à l'intention, y compris `moved` pour l'ordre. La valeur relue est comparée à cet accusé et à la collection affichée. Un espace absent, un déplacement sans effet ou une version seulement plus récente ne sont pas annoncés comme un succès.
+
 ## Dernier correctif — proportions v0.3

 Contrat UX v0.3, ref documentaire 5008d51d. Synthèse 160 px, reprise 180 px, ligne 60 px, écart 12 px. Le séparateur est entre la synthèse et la reprise. Le pied se rejoint en défilement.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ed8b3a33..a201141e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-FINISH-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — finitions résiduelles du portefeuille personnel
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `df5d83be04100e41b03808800144a576552def73`
+- **commit**: `fix(next): separate the portfolio library and prove each reread`
+- **schema_revision**: inchangé, `028_pilot_portfolio_organization`
+- **scope**: écart de 12 px sous la barre, séparateur de menu, confrontation des valeurs relues, navigation clavier du menu
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-UX-RESIDUAL-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index 3863fa65..c0e47a17 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -27,8 +27,21 @@ export type PortfolioIntention = {
   view?: string;
   sort?: string;
   knownVersion: number;
+  knownPosition?: number | null;
 };

+export type OwnerSpaceRecord = {
+  spaceType: string;
+  id: string;
+  eligible: boolean;
+  favorite: boolean;
+  archived: boolean;
+  rowVersion: number;
+  customPosition: number | null;
+};
+
+export type OwnerEffect = "confirmed" | "current" | "absent" | "unchanged" | "unproven";
+
 /** An acknowledgement counts only for the route that was called. A 5xx stays unknown. */
 export function classifyPortfolioResponse(
   status: number,
@@ -46,30 +59,136 @@ export function classifyPortfolioResponse(
     if (kind === "archive") {
       return typeof body.archived === "boolean" && typeof body.rowVersion === "number" ? "confirmed" : "unknown";
     }
-    if (kind === "preference" || kind === "order") {
-      return typeof body.version === "number" ? "confirmed" : "unknown";
+    if (kind === "preference") return typeof body.version === "number" ? "confirmed" : "unknown";
+    if (kind === "order") {
+      return typeof body.version === "number" && typeof body.moved === "boolean" ? "confirmed" : "unknown";
     }
   }
   return "unknown";
 }

-/** Reading the owner record is enough to look again. It does not prove the previous intention. */
-/** A status alone is not a reread. The record must name the expected space. */
+/** A status alone is not a reread. The record must name the expected space and return its values. */
 export function pertinentSpaceRecord(
   body: unknown,
   expected: { spaceType: string; id: string },
 ): boolean {
-  if (!body || typeof body !== "object") return false;
+  return ownerSpaceRecord(body, expected) !== null;
+}
+
+export function ownerSpaceRecord(
+  body: unknown,
+  expected: { spaceType: string; id: string },
+): OwnerSpaceRecord | null {
+  if (!body || typeof body !== "object") return null;
   const record = body as Record<string, unknown>;
-  return (
-    record.spaceType === expected.spaceType &&
-    record.id === expected.id &&
-    typeof record.eligible === "boolean" &&
-    typeof record.favorite === "boolean" &&
-    typeof record.archived === "boolean" &&
-    typeof record.rowVersion === "number" &&
-    (record.customPosition === null || typeof record.customPosition === "number")
-  );
+  if (
+    record.spaceType !== expected.spaceType ||
+    record.id !== expected.id ||
+    typeof record.eligible !== "boolean" ||
+    typeof record.favorite !== "boolean" ||
+    typeof record.archived !== "boolean" ||
+    typeof record.rowVersion !== "number" ||
+    !(record.customPosition === null || typeof record.customPosition === "number")
+  ) {
+    return null;
+  }
+  return {
+    spaceType: expected.spaceType,
+    id: expected.id,
+    eligible: record.eligible,
+    favorite: record.favorite,
+    archived: record.archived,
+    rowVersion: record.rowVersion,
+    customPosition: record.customPosition,
+  };
+}
+
+/** The acknowledgement must answer this intention, not merely carry a newer version. */
+export function correlatedAcknowledgement(
+  intention: PortfolioIntention,
+  body: Record<string, unknown> | null,
+): boolean {
+  if (!body) return false;
+  if (intention.kind === "favorite") {
+    return body.favorite === intention.desired && body.rowVersion === intention.knownVersion + 1;
+  }
+  if (intention.kind === "archive") {
+    return body.archived === intention.desired
+      && typeof body.rowVersion === "number"
+      && (body.rowVersion === intention.knownVersion || body.rowVersion === intention.knownVersion + 1);
+  }
+  if (intention.kind === "preference") return body.version === intention.knownVersion + 1;
+  if (intention.kind === "order") {
+    return body.version === intention.knownVersion + 1 && typeof body.moved === "boolean";
+  }
+  return false;
+}
+
+function shownAgrees(
+  board: { items: Array<Pick<PersonalSpace, "spaceType" | "id" | "favorite" | "archived" | "rowVersion" | "customPosition">> } | null,
+  record: OwnerSpaceRecord,
+): boolean {
+  const item = board?.items.find((entry) => entry.spaceType === record.spaceType && entry.id === record.id);
+  if (!item) return true;
+  return item.favorite === record.favorite
+    && item.archived === record.archived
+    && item.rowVersion === record.rowVersion
+    && item.customPosition === record.customPosition;
+}
+
+/**
+ * Separates a correlated acknowledgement, a usable reread, and proof that the
+ * requested effect is the one now shown. A missing space is not a success.
+ */
+export function reconcileOwnerEffect(input: {
+  intention: PortfolioIntention;
+  outcome: PortfolioMutationOutcome;
+  acknowledgement: Record<string, unknown> | null;
+  records: Array<OwnerSpaceRecord | "absent">;
+  board: {
+    preferences: { view: string; sort: string; version: number };
+    items: Array<Pick<PersonalSpace, "spaceType" | "id" | "favorite" | "archived" | "rowVersion" | "customPosition">>;
+  } | null;
+}): OwnerEffect {
+  const { intention, outcome, acknowledgement, records, board } = input;
+  if (!board) return "unproven";
+  if (intention.kind === "preference") {
+    if (outcome !== "confirmed" || !correlatedAcknowledgement(intention, acknowledgement) || !acknowledgement) return "current";
+    if (board.preferences.version !== acknowledgement.version) return "current";
+    if (intention.view && board.preferences.view !== intention.view) return "current";
+    if (intention.sort && board.preferences.sort !== intention.sort) return "current";
+    return "confirmed";
+  }
+  const primary = records[0];
+  if (!primary) return "unproven";
+  if (primary === "absent") return "absent";
+  if (!shownAgrees(board, primary)) return "unproven";
+  if (!primary.eligible) return "current";
+  if (outcome !== "confirmed" || !correlatedAcknowledgement(intention, acknowledgement) || !acknowledgement) return "current";
+  if (intention.kind === "favorite") {
+    return primary.favorite === intention.desired && primary.rowVersion === acknowledgement.rowVersion ? "confirmed" : "current";
+  }
+  if (intention.kind === "archive") {
+    return primary.archived === intention.desired && primary.rowVersion === acknowledgement.rowVersion ? "confirmed" : "current";
+  }
+  if (intention.kind === "order") {
+    if (acknowledgement.moved !== true) return "unchanged";
+    if (board.preferences.version !== acknowledgement.version) return "current";
+    const target = records[1];
+    if (target && target !== "absent") {
+      if (!shownAgrees(board, target)) return "unproven";
+      if (primary.customPosition == null || target.customPosition == null) return "current";
+      const difference = primary.customPosition - target.customPosition;
+      const placed = intention.direction === "down" ? difference === 1 : difference === -1;
+      return placed ? "confirmed" : "current";
+    }
+    if (typeof intention.knownPosition === "number" && primary.customPosition != null) {
+      const expected = intention.direction === "down" ? intention.knownPosition + 1 : intention.knownPosition - 1;
+      return primary.customPosition === expected ? "confirmed" : "current";
+    }
+    return "current";
+  }
+  return "unproven";
 }

 /**
@@ -161,7 +280,10 @@ export function PersonalPortfolio() {
   const [menu, setMenu] = useState<string | null>(null);
   const [menuBox, setMenuBox] = useState<{ top: number; left: number } | null>(null);
   const menuTrigger = useRef<HTMLButtonElement | null>(null);
+  const menuRef = useRef<HTMLDivElement | null>(null);
   const dialogRef = useRef<HTMLDivElement | null>(null);
+  const outcomeRef = useRef<PortfolioMutationOutcome>("unknown");
+  const acknowledgementRef = useRef<Record<string, unknown> | null>(null);
   const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
   const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
   const requestSeq = useRef(0);
@@ -206,6 +328,11 @@ export function PersonalPortfolio() {
     };
   }, [confirm, confirmRestore]);

+  useEffect(() => {
+    if (!menu) return;
+    menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]:not([disabled])')?.focus();
+  }, [menu]);
+
   const load = useCallback(async (cursor?: string | null, issuedId?: number) => {
     const requestId = issuedId ?? ++requestSeq.current;
     const params = new URLSearchParams();
@@ -279,6 +406,7 @@ export function PersonalPortfolio() {
   function settleMutation(
     outcome: PortfolioMutationOutcome,
     reread: PortfolioReread,
+    effect: OwnerEffect,
     knownMessage: string,
   ) {
     const follow = portfolioMutationFollowUp({ outcome, reread });
@@ -299,38 +427,69 @@ export function PersonalPortfolio() {
       setNotice(knownMessage);
       return;
     }
-    if (outcome === "confirmed" && settledKind === "order") {
-      setNotice("Ordre enregistré.");
+    if (outcome === "conflict") {
+      setNotice(knownMessage);
+      return;
+    }
+    if (effect === "absent") {
+      setNotice("Cet espace n'est plus accessible. La modification n'est pas confirmée.");
+      return;
+    }
+    if (effect === "unchanged") {
+      setNotice("L'espace n'a pas changé de place.");
+      return;
+    }
+    if (outcome === "confirmed" && effect === "confirmed") {
+      setNotice(settledKind === "order" ? "Ordre enregistré." : "");
       return;
     }
-    if (outcome === "unknown") {
-      setNotice("L'état a été relu. Vérifiez-le avant une nouvelle modification.");
+    if (outcome === "confirmed") {
+      setNotice("L'état relu diffère de la modification demandée.");
+      return;
     }
+    setNotice("L'état a été relu. L'effet de la modification n'est pas confirmé.");
   }

-  async function readTargetedRecord(type: PersonalSpace["spaceType"], id: string): Promise<boolean> {
+  async function readTargetedRecord(
+    type: PersonalSpace["spaceType"],
+    id: string,
+  ): Promise<OwnerSpaceRecord | "absent" | null> {
     const response = await fetch(`/api/portfolio/spaces/${type}/${id}`);
-    if (response.status === 404) return true;
-    if (!response.ok) return false;
+    if (response.status === 404) return "absent";
+    if (!response.ok) return null;
     const body = await response.json().catch(() => null);
-    return pertinentSpaceRecord(body, { spaceType: type, id });
+    return ownerSpaceRecord(body, { spaceType: type, id });
   }

-  async function probeIntention(intention: PortfolioIntention): Promise<PortfolioReread> {
+  async function probeIntention(
+    intention: PortfolioIntention,
+    outcome: PortfolioMutationOutcome,
+    acknowledgement: Record<string, unknown> | null,
+  ): Promise<{ reread: PortfolioReread; effect: OwnerEffect }> {
     try {
       const ids = [
         { type: intention.spaceType, id: intention.spaceId },
         { type: intention.beforeSpaceType, id: intention.beforeSpaceId },
       ].filter((item): item is { type: PersonalSpace["spaceType"]; id: string } => Boolean(item.type && item.id));
+      let records: Array<OwnerSpaceRecord | "absent"> = [];
       if (intention.kind !== "preference") {
-        if (ids.length === 0) return "failed";
+        if (ids.length === 0) return { reread: "failed", effect: "unproven" };
         const reads = await Promise.all(ids.map((item) => readTargetedRecord(item.type, item.id)));
-        if (reads.some((ok) => !ok)) return "failed";
+        if (reads.some((item) => item === null)) return { reread: "failed", effect: "unproven" };
+        records = reads.filter((item): item is OwnerSpaceRecord | "absent" => item !== null);
       }
       const refreshed = await loadRef.current();
-      return refreshed ? "reviewed" : "failed";
+      if (!refreshed) return { reread: "failed", effect: "unproven" };
+      const effect = reconcileOwnerEffect({
+        intention,
+        outcome,
+        acknowledgement,
+        records,
+        board: refreshed,
+      });
+      return { reread: effect === "unproven" ? "failed" : "reviewed", effect };
     } catch {
-      return "failed";
+      return { reread: "failed", effect: "unproven" };
     }
   }

@@ -348,24 +507,33 @@ export function PersonalPortfolio() {
         body: JSON.stringify(payload),
       });
       const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
-      const outcome = classifyPortfolioResponse(response.status, body, intention.kind);
+      let outcome = classifyPortfolioResponse(response.status, body, intention.kind);
+      if (outcome === "confirmed" && !correlatedAcknowledgement(intention, body)) outcome = "unknown";
+      outcomeRef.current = outcome;
+      acknowledgementRef.current = body;
       if (outcome === "refused") {
-        settleMutation("refused", "not-attempted", "");
+        settleMutation("refused", "not-attempted", "current", "");
         setNotice(typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.");
         return;
       }
-      const reread = await probeIntention(intention);
-      if (outcome === "confirmed" && reread === "reviewed") notifyPortfolioChanged();
+      const probed = await probeIntention(intention, outcome, body);
+      if (outcome === "confirmed" && probed.effect === "confirmed") notifyPortfolioChanged();
       settleMutation(
         outcome,
-        reread,
+        probed.reread,
+        probed.effect,
         outcome === "conflict"
           ? (typeof body.message === "string" ? body.message : "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.")
           : "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
       );
     } catch {
-      const reread = intentionRef.current ? await probeIntention(intentionRef.current) : "failed";
-      settleMutation("unknown", reread, "");
+      outcomeRef.current = "unknown";
+      acknowledgementRef.current = null;
+      const current = intentionRef.current;
+      const probed = current
+        ? await probeIntention(current, "unknown", null)
+        : { reread: "failed" as const, effect: "unproven" as const };
+      settleMutation("unknown", probed.reread, probed.effect, "");
     } finally {
       busy.current = false;
       setPending("");
@@ -376,9 +544,16 @@ export function PersonalPortfolio() {

   async function rereadHeld() {
     const intention = intentionRef.current;
-    const reread = intention ? await probeIntention(intention) : "failed";
     if (!intention) return;
-    settleMutation("unknown", reread, "");
+    const probed = await probeIntention(intention, outcomeRef.current, acknowledgementRef.current);
+    settleMutation(
+      outcomeRef.current,
+      probed.reread,
+      probed.effect,
+      outcomeRef.current === "conflict"
+        ? "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer."
+        : "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
+    );
   }

   async function startPreparation() {
@@ -481,6 +656,7 @@ export function PersonalPortfolio() {
             beforeSpaceType: space.spaceType,
             beforeSpaceId: space.id,
             knownVersion: board!.preferences.version,
+            knownPosition: board!.items.find((item) => item.spaceType === spaceType && item.id === spaceId)?.customPosition,
           });
         }}
         data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
@@ -512,30 +688,40 @@ export function PersonalPortfolio() {
         )}
         {menu === space.id && menuBox ? (
           <div
+            ref={menuRef}
             className="personal-portfolio-menu"
             role="menu"
             style={{ top: menuBox.top, left: menuBox.left }}
             onKeyDown={(event) => {
-              const items = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')];
-              const index = items.indexOf(document.activeElement as HTMLElement);
+              const items = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled])')];
               if (event.key === "Escape") {
+                event.preventDefault();
                 setMenu(null);
                 setMenuBox(null);
                 menuTrigger.current?.focus();
-              } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
-                event.preventDefault();
-                const next = event.key === "ArrowDown" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
-                items[next]?.focus();
+                return;
               }
+              if (event.key === "Tab") {
+                setMenu(null);
+                setMenuBox(null);
+                return;
+              }
+              if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
+              event.preventDefault();
+              if (items.length === 0) return;
+              const index = items.indexOf(document.activeElement as HTMLElement);
+              const next = event.key === "ArrowDown" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
+              items[next]?.focus();
             }}
           >
             <p>{space.label}</p>
             <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
+            <div className="personal-portfolio-menu-rule" role="separator" />
             <a role="menuitem" href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}><Mark name="arrow" />{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
             <button type="button" role="menuitem" disabled title="Le renommage arrive avec le parcours de préparation."><Mark name="edit" />Renommer</button>
             <button type="button" role="menuitem" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}><Mark name="star" />{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
-            <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", knownVersion: board!.preferences.version })}><Mark name="grip" />Monter</button>
-            <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", knownVersion: board!.preferences.version })}><Mark name="grip" />Descendre</button>
+            <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) - 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Monter</button>
+            <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) + 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Descendre</button>
             <button type="button" role="menuitem" disabled={locked} onClick={() => { if (scope === "archive") setConfirmRestore(space); else setConfirm(space); }}><Mark name="archive" />{scope === "archive" ? "Restaurer" : "Archiver"}</button>
             <button type="button" role="menuitem" disabled title="La suppression n'est pas disponible."><Mark name="trash" />Supprimer</button>
           </div>
@@ -666,6 +852,7 @@ export function PersonalPortfolio() {
         </div>
         </div>
       </div>
+        <div className="personal-portfolio-collection">
       {scope === "archive" ? (
         <p className="personal-portfolio-status"><button type="button" onClick={() => setScope("current")}>Retour aux espaces</button></p>
       ) : null}
@@ -696,6 +883,7 @@ export function PersonalPortfolio() {
         {expanded && board.nextCursor ? (
           <button type="button" data-testid="portfolio-load-more" onClick={() => void load(board.nextCursor)}>Charger la suite</button>
         ) : null}
+        </div>
       </section>

       {confirm ? (
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
index 845b1d65..61f705ba 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
+++ b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
@@ -203,7 +203,10 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
 .personal-portfolio input:disabled { opacity: 0.45; cursor: not-allowed; }

 .personal-portfolio-library { margin-top: 12px; }
-.personal-portfolio-group h3 { display: flex; align-items: center; gap: 8px; margin: 12px 0 4px; font-size: 14px; }
+.personal-portfolio-collection { margin-top: 12px; }
+.personal-portfolio-collection > p { margin: 0; }
+.personal-portfolio-group h3 { display: flex; align-items: center; gap: 8px; margin: 0 0 4px; font-size: 14px; }
+.personal-portfolio-group + .personal-portfolio-group { margin-top: 12px; }
 .personal-portfolio-library h2 { margin: 0 0 8px; font-size: 20px; line-height: 28px; }

 .personal-portfolio-row,
@@ -244,8 +247,9 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   font-size: 12px;
   font-weight: 600;
 }
-.personal-portfolio-menu p { margin: 0; font-weight: 600; }
-.personal-portfolio-menu small { color: var(--pf-muted); }
+.personal-portfolio-menu p { margin: 0; font-size: 15px; line-height: 21px; font-weight: 600; }
+.personal-portfolio-menu small { color: var(--pf-muted); font-size: 12px; line-height: 17px; }
+.personal-portfolio-menu-rule { width: 270px; height: 1px; flex: 0 0 1px; background: var(--pf-border); }

 .personal-portfolio-identity { display: flex; align-items: center; gap: 12px; min-width: 0; }
 .personal-portfolio-monogram {
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index 26629a75..1081a852 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -2,8 +2,12 @@ import { describe, expect, it } from "vitest";
 import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
 import {
   classifyPortfolioResponse,
+  correlatedAcknowledgement,
+  ownerSpaceRecord,
   portfolioMutationFollowUp,
   pertinentSpaceRecord,
+  reconcileOwnerEffect,
+  type PortfolioIntention,
 } from "@/components/portfolio/PersonalPortfolio";

 describe("portfolio organization rules", () => {
@@ -31,7 +35,9 @@ describe("portfolio organization rules", () => {
     expect(classifyPortfolioResponse(503, { message: "unavailable" }, "favorite")).toBe("unknown");
     expect(classifyPortfolioResponse(200, { version: 4 }, "favorite")).toBe("unknown");
     expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true }, "favorite")).toBe("confirmed");
-    expect(classifyPortfolioResponse(200, { version: 3 }, "order")).toBe("confirmed");
+    expect(classifyPortfolioResponse(200, { version: 3 }, "order")).toBe("unknown");
+    expect(classifyPortfolioResponse(200, { version: 3, moved: true }, "order")).toBe("confirmed");
+    expect(classifyPortfolioResponse(200, { version: 3, moved: false }, "order")).toBe("confirmed");
     expect(classifyPortfolioResponse(409, { message: "conflict" }, "preference")).toBe("conflict");
     const record = { spaceType: "project", id: "prj_1", eligible: true, favorite: false, archived: false, rowVersion: 3, customPosition: null };
     expect(pertinentSpaceRecord(record, { spaceType: "project", id: "prj_1" })).toBe(true);
@@ -56,4 +62,91 @@ describe("portfolio organization rules", () => {
     expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" }).blockFurtherMutations).toBe(true);
     expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).retry).toBe(false);
   });
+
+  it("compares the reread values with the acknowledgement instead of trusting a status", () => {
+    const record = { spaceType: "project", id: "prj_1", eligible: true, favorite: true, archived: false, rowVersion: 4, customPosition: 2 };
+    const board = {
+      preferences: { view: "list", sort: "custom", version: 8 },
+      items: [{ spaceType: "project" as const, id: "prj_1", favorite: true, archived: false, rowVersion: 4, customPosition: 2 }],
+    };
+    const favorite: PortfolioIntention = { kind: "favorite", spaceType: "project", spaceId: "prj_1", desired: true, knownVersion: 3 };
+    expect(ownerSpaceRecord(record, { spaceType: "project", id: "prj_1" })?.favorite).toBe(true);
+    expect(ownerSpaceRecord({ ok: true }, { spaceType: "project", id: "prj_1" })).toBeNull();
+    expect(correlatedAcknowledgement(favorite, { favorite: true, rowVersion: 4 })).toBe(true);
+    expect(correlatedAcknowledgement(favorite, { favorite: true, rowVersion: 9 })).toBe(false);
+    expect(reconcileOwnerEffect({
+      intention: favorite,
+      outcome: "confirmed",
+      acknowledgement: { favorite: true, rowVersion: 4 },
+      records: [record],
+      board,
+    })).toBe("confirmed");
+    expect(reconcileOwnerEffect({
+      intention: favorite,
+      outcome: "confirmed",
+      acknowledgement: { favorite: true, rowVersion: 4 },
+      records: [{ ...record, favorite: false }],
+      board: { ...board, items: [{ ...board.items[0], favorite: false }] },
+    })).toBe("current");
+    expect(reconcileOwnerEffect({
+      intention: favorite,
+      outcome: "confirmed",
+      acknowledgement: { favorite: true, rowVersion: 4 },
+      records: ["absent"],
+      board,
+    })).toBe("absent");
+    expect(reconcileOwnerEffect({
+      intention: favorite,
+      outcome: "unknown",
+      acknowledgement: null,
+      records: [record],
+      board,
+    })).toBe("current");
+    const order: PortfolioIntention = {
+      kind: "order",
+      spaceType: "project",
+      spaceId: "prj_1",
+      beforeSpaceType: "project",
+      beforeSpaceId: "prj_2",
+      direction: "up",
+      knownVersion: 7,
+      knownPosition: 3,
+    };
+    const neighbor = { spaceType: "project", id: "prj_2", eligible: true, favorite: false, archived: false, rowVersion: 1, customPosition: 3 };
+    expect(reconcileOwnerEffect({
+      intention: order,
+      outcome: "confirmed",
+      acknowledgement: { version: 8, moved: false },
+      records: [record, neighbor],
+      board,
+    })).toBe("unchanged");
+    expect(reconcileOwnerEffect({
+      intention: order,
+      outcome: "confirmed",
+      acknowledgement: { version: 8, moved: true },
+      records: [record, neighbor],
+      board,
+    })).toBe("confirmed");
+    expect(reconcileOwnerEffect({
+      intention: order,
+      outcome: "confirmed",
+      acknowledgement: { version: 8, moved: true },
+      records: [record, { ...neighbor, customPosition: 8 }],
+      board,
+    })).toBe("current");
+    expect(reconcileOwnerEffect({
+      intention: { kind: "preference", view: "grid", knownVersion: 7 },
+      outcome: "confirmed",
+      acknowledgement: { version: 8 },
+      records: [],
+      board: { ...board, preferences: { ...board.preferences, view: "list", version: 8 } },
+    })).toBe("current");
+    expect(reconcileOwnerEffect({
+      intention: { kind: "preference", view: "grid", knownVersion: 7 },
+      outcome: "conflict",
+      acknowledgement: null,
+      records: [],
+      board: { ...board, preferences: { ...board.preferences, view: "grouped", version: 9 } },
+    })).toBe("current");
+  });
 });

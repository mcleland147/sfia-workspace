# Review Pack — dernier correctif du portefeuille

Date : 28 novembre 2026, 16:05 Europe/Paris.
Cycle : 08 Delivery / INC / Standard. Mono-cycle.
Branche : sfia/next-ml5-integrated-delivery-20261123.
Entrée : d79fd252684b0be76b61ab607cc88d00b7fb7232, tree 84bfe3af532edb6efcbbfc8cdde780d0c8abd185, parent 26698494ceed32af53d71b3e2e2248bab903de73.
Sortie : df5d83be04100e41b03808800144a576552def73, tree 99a6731960e612ba488506306377a037a6df3477.
Commits : ee6edf34042887576b546753535309ab5b9c55ea puis df5d83be04100e41b03808800144a576552def73.
Push : d79fd252..df5d83be0410, fast-forward. Aucune PR. Aucun run Actions observé. Workflows déclenchés seulement sur push ou PR vers main.
BUILD_ID : B3xza2T6NCsJSW1gALwhH. DEV :3100 PID 94417. Base sfia_next_dev, schéma 028.
RECETTE :3200 PID 58965. Table pilot_portfolio_preferences absente.
origin/main : 997897fd7cf914771e7d08e8030dc7123fab7d25.
Aucune migration. Aucune modification Figma. Aucune création de fichier.

## Sources

Suivi v0.26, 892ba71ee370c215b1d0835a7d1a88e3d74c5c80, §31.
Contrat UX v0.3, 5008d51d85bb12ffd37f61c1706c36d62afa8e38, blob 5dfae243816e3841cd87051b321ffaf4aa5d4f11, §2, §4, §5.2, §6.
Figma itgvCulInEnFY6DvgIegvP, session 6d1fa01f-09cf-42f4-bdea-849ce6f87ef8.
Nœuds extraits : tuile 1420:162, menu 1420:2138. Proportions lues dans le contrat v0.3, issues de la relecture native 160/180/60/12.

## Corrections

UX-R01 : filtres à gauche, recherche/tri/vues à droite, espace flexible, marge horizontale retirée des commandes imbriquées.
UX-R02 : synthèse 160, reprise 180, ligne 60, écart 12. Séparateur entre synthèse et reprise.
UX-R03 : grille à trois colonnes, tuile 116 px, écart 12/8, type et activité une seule fois.
UX-R04 : menu 298 px, actions 270×35, pictogrammes, ancrage fixed au déclencheur, sept entrées.
UX-R05 : activité non répétée sous le nom, chevron de groupe décoratif, compteur de groupe réel.
TECH-R01 : pertinentSpaceRecord exige type, id, éligibilité, favori, archive, version et position. Un 200 mal formé ne débloque pas. Le rafraîchissement du portefeuille doit réussir avant réexamen. Ordre enregistré seulement après accusé confirmé.
TECH-R02 : focus initial, Tab confiné et retour pour les dialogues et le tiroir. Menu fléché et Échap.
DOC-R01 : les six diffs absents du handoff 700c091c sont repris en annexe, distincte de ce cycle. Le pack historique n'était pas complet.

## Preuves

13 tests PASS, dont une collection de 26 projets dont un espace absent de la première page est relu par identifiant.
tsc : 34 diagnostics, fichier identique à la baseline.
Build production réussi. Route /portfolio 8.22 kB / 111 kB.
Smoke : login 200, lecture 200, vue liste puis grille exercée dans le navigateur.
Navigateur DEV, viewport inférieur à 1680 : liste nominale observée, barre répartie, grille à trois tuiles observée, menu à sept entrées observé. Ce n'est pas une mesure F2 appariée.
La vue a été remise sur Liste après le contrôle grille.

## Matrice des huit corrections

UX-R01 IMPLEMENTED, observée.
UX-R02 IMPLEMENTED, hauteurs CSS, séparateur observé dans l'ordre.
UX-R03 IMPLEMENTED, trois tuiles observées. Largeur 443 non mesurée sur ce viewport.
UX-R04 IMPLEMENTED, sept entrées observées. Hauteur 359 non mesurée.
UX-R05 IMPLEMENTED pour la liste et le groupe en code. Groupe non recapturé dans ce passage.
TECH-R01 IMPLEMENTED, tests unitaires et PG. Parcours navigateur de conflit non rejoué.
TECH-R02 IMPLEMENTED, mécanisme construit. Tab réel non chronométré au-delà de l'ouverture du menu.
DOC-R01 IMPLEMENTED dans ce pack.

## Réserves

R-B-F2 : pas de mesure appariée. Sortie : revue Morris sur ce candidat.
R-B-KEYBOARD : le confinement est dans le code. Le parcours Tab complet n'a pas été filmé.
R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK : inchangées.

## Revue Morris

URL : http://127.0.0.1:3100/portfolio
SHA : df5d83be04100e41b03808800144a576552def73
BUILD_ID : B3xza2T6NCsJSW1gALwhH
Regarder la liste, la grille, le menu. La vue enregistrée a été ramenée vers Liste pendant le contrôle.

## Verdict

Technique : READY WITH RESERVES — COMPLEMENT B.
Visuel : REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.
Global proposé : READY WITH RESERVES — COMPLEMENT B.
Mandat 1 OPEN. Mandat 2 non engagé. NO RELEASE. NOT ADOPTED.

## Couverture des fichiers de ce cycle

 .../as-built-portefeuille-personnel.md             |  10 +
 .../construction/delivery-history.md               |  11 +
 .../src/components/portfolio/PersonalPortfolio.tsx | 232 ++++++++++++++++-----
 .../components/portfolio/personal-portfolio.css    |  72 ++++---
 .../web/src/components/shell/StudioShell.tsx       |  38 +++-
 .../integration/portfolio-organization.pg.test.ts  |  12 ++
 .../web/tests/unit/portfolio-organization.test.ts  |   9 +-
 7 files changed, 299 insertions(+), 85 deletions(-)

Chaque fichier ci-dessus a son diff dans la section suivante. Aucune création.

## Diff du cycle d79fd252..df5d83be04100e41b03808800144a576552def73

```
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 43b56392..42dea115 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,5 +1,15 @@
 # As-built — Portefeuille personnel et navigation

+## Dernier correctif — proportions v0.3
+
+Contrat UX v0.3, ref documentaire 5008d51d. Synthèse 160 px, reprise 180 px, ligne 60 px, écart 12 px. Le séparateur est entre la synthèse et la reprise. Le pied se rejoint en défilement.
+La barre place les filtres à gauche et la recherche, le tri et les vues à droite, sans marge intérieure supplémentaire.
+La grille a trois colonnes au nominal, tuiles de 116 px, écart 12/8. Le type et l'activité n'apparaissent qu'une fois. Le menu fait 298 px, actions 270×35, avec pictogrammes.
+Une relecture n'est pertinente que si le JSON nomme l'espace attendu et si le portefeuille affiché a été rafraîchi. Un statut 200 seul ne débloque pas. L'ordre enregistré n'est annoncé qu'après un accusé confirmé et cette relecture.
+Les dialogues et le tiroir prennent le focus, le confinent, et le rendent à la fermeture.
+
+# As-built — Portefeuille personnel et navigation
+
 Date : 28 novembre 2026. Finalisation du complément B. Classe NO RELEASE.

 ## Finalisation — composition nominale
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 470369e3..ed8b3a33 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-UX-RESIDUAL-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — dernier correctif ciblé du complément B
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `d79fd252684b0be76b61ab607cc88d00b7fb7232`
+- **commit**: `fix(next): finish the portfolio proportions, grid, and reread`
+- **schema_revision**: inchangé, `028_pilot_portfolio_organization`
+- **scope**: barre pleine largeur, proportions 160/180/60/12, tuiles, menus, relecture JSON
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-UX-FINAL-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index edd458f2..3863fa65 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -54,9 +54,22 @@ export function classifyPortfolioResponse(
 }

 /** Reading the owner record is enough to look again. It does not prove the previous intention. */
-export function portfolioReadReview(status: number): PortfolioReread {
-  if (status === 200 || status === 404) return "reviewed";
-  return "failed";
+/** A status alone is not a reread. The record must name the expected space. */
+export function pertinentSpaceRecord(
+  body: unknown,
+  expected: { spaceType: string; id: string },
+): boolean {
+  if (!body || typeof body !== "object") return false;
+  const record = body as Record<string, unknown>;
+  return (
+    record.spaceType === expected.spaceType &&
+    record.id === expected.id &&
+    typeof record.eligible === "boolean" &&
+    typeof record.favorite === "boolean" &&
+    typeof record.archived === "boolean" &&
+    typeof record.rowVersion === "number" &&
+    (record.customPosition === null || typeof record.customPosition === "number")
+  );
 }

 /**
@@ -104,6 +117,29 @@ function hrefFor(space: PersonalSpace): string {
     : `/preparations/${space.id}?resume=1`;
 }

+function Mark({ name }: { name: "star" | "more" | "arrow" | "edit" | "grip" | "archive" | "trash" }) {
+  const common = { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", "aria-hidden": true as const };
+  if (name === "more") {
+    return <svg {...common}><path d="M4.17 10h.01M10 10h.01M15.83 10h.01" stroke="#A5B1C5" strokeWidth="2.2" strokeLinecap="round" /></svg>;
+  }
+  if (name === "arrow") {
+    return <svg {...common}><path d="M4.17 10h11.66M10 4.17 15.83 10 10 15.83" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
+  }
+  if (name === "edit") {
+    return <svg {...common}><path d="M11.7 4.2 15.8 8.3 7.2 16.9H3.1v-4.1L11.7 4.2Z" stroke="#A5B1C5" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
+  }
+  if (name === "grip") {
+    return <svg {...common}><path d="M7 5h.01M13 5h.01M7 10h.01M13 10h.01M7 15h.01M13 15h.01" stroke="#A5B1C5" strokeWidth="2.2" strokeLinecap="round" /></svg>;
+  }
+  if (name === "archive") {
+    return <svg {...common}><path d="M3.5 6.5h13v9.2H3.5V6.5ZM3 4.2h14V6.5H3V4.2ZM8.2 10h3.6" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
+  }
+  if (name === "trash") {
+    return <svg {...common}><path d="M4.5 6.2h11M8 6.2V4.5h4v1.7M6.2 6.2l.6 9.2h6.4l.6-9.2" stroke="#FF9A9F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
+  }
+  return <svg {...common}><path d="M10 2.8 12.2 7.3 17 8l-3.5 3.4.8 4.8L10 14l-4.3 2.2.8-4.8L3 8l4.8-.7L10 2.8Z" stroke="#A5B1C5" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
+}
+
 export function PersonalPortfolio() {
   const router = useRouter();
   const params = useSearchParams();
@@ -123,12 +159,53 @@ export function PersonalPortfolio() {
   const [scope, setScope] = useState<"current" | "archive">("current");
   const [expanded, setExpanded] = useState(false);
   const [menu, setMenu] = useState<string | null>(null);
+  const [menuBox, setMenuBox] = useState<{ top: number; left: number } | null>(null);
+  const menuTrigger = useRef<HTMLButtonElement | null>(null);
+  const dialogRef = useRef<HTMLDivElement | null>(null);
   const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
   const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
   const requestSeq = useRef(0);

   useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

+  useEffect(() => {
+    const open = Boolean(confirm || confirmRestore);
+    if (!open) return;
+    const root = dialogRef.current;
+    const previous = menuTrigger.current ?? (document.activeElement as HTMLElement | null);
+    const items = () =>
+      root
+        ? [...root.querySelectorAll<HTMLElement>("button, a, input, select, textarea")].filter((item) => !item.hasAttribute("disabled"))
+        : [];
+    items()[0]?.focus();
+    function onKey(event: KeyboardEvent) {
+      if (event.key === "Escape") {
+        if (!blocked.current) {
+          setConfirm(null);
+          setConfirmRestore(null);
+        }
+        return;
+      }
+      if (event.key !== "Tab" || !root) return;
+      const focusable = items();
+      if (focusable.length === 0) return;
+      const first = focusable[0];
+      const last = focusable[focusable.length - 1];
+      if (event.shiftKey && document.activeElement === first) {
+        event.preventDefault();
+        last.focus();
+      } else if (!event.shiftKey && document.activeElement === last) {
+        event.preventDefault();
+        first.focus();
+      }
+    }
+    document.addEventListener("keydown", onKey);
+    return () => {
+      document.removeEventListener("keydown", onKey);
+      previous?.focus();
+    };
+  }, [confirm, confirmRestore]);
+
   const load = useCallback(async (cursor?: string | null, issuedId?: number) => {
     const requestId = issuedId ?? ++requestSeq.current;
     const params = new URLSearchParams();
@@ -205,6 +282,7 @@ export function PersonalPortfolio() {
     knownMessage: string,
   ) {
     const follow = portfolioMutationFollowUp({ outcome, reread });
+    const settledKind = intentionRef.current?.kind;
     blocked.current = follow.blockFurtherMutations;
     setHeld(follow.blockFurtherMutations);
     if (!follow.blockFurtherMutations) intentionRef.current = null;
@@ -221,25 +299,36 @@ export function PersonalPortfolio() {
       setNotice(knownMessage);
       return;
     }
+    if (outcome === "confirmed" && settledKind === "order") {
+      setNotice("Ordre enregistré.");
+      return;
+    }
     if (outcome === "unknown") {
       setNotice("L'état a été relu. Vérifiez-le avant une nouvelle modification.");
     }
   }

+  async function readTargetedRecord(type: PersonalSpace["spaceType"], id: string): Promise<boolean> {
+    const response = await fetch(`/api/portfolio/spaces/${type}/${id}`);
+    if (response.status === 404) return true;
+    if (!response.ok) return false;
+    const body = await response.json().catch(() => null);
+    return pertinentSpaceRecord(body, { spaceType: type, id });
+  }
+
   async function probeIntention(intention: PortfolioIntention): Promise<PortfolioReread> {
     try {
-      if (intention.kind === "preference") {
-        const board = await loadRef.current();
-        return board ? "reviewed" : "failed";
-      }
       const ids = [
         { type: intention.spaceType, id: intention.spaceId },
         { type: intention.beforeSpaceType, id: intention.beforeSpaceId },
-      ].filter((item): item is { type: NonNullable<PortfolioIntention["spaceType"]>; id: string } => Boolean(item.type && item.id));
-      if (ids.length === 0) return "failed";
-      const responses = await Promise.all(ids.map((item) => fetch(`/api/portfolio/spaces/${item.type}/${item.id}`)));
-      if (responses.some((response) => portfolioReadReview(response.status) === "failed")) return "failed";
-      return "reviewed";
+      ].filter((item): item is { type: PersonalSpace["spaceType"]; id: string } => Boolean(item.type && item.id));
+      if (intention.kind !== "preference") {
+        if (ids.length === 0) return "failed";
+        const reads = await Promise.all(ids.map((item) => readTargetedRecord(item.type, item.id)));
+        if (reads.some((ok) => !ok)) return "failed";
+      }
+      const refreshed = await loadRef.current();
+      return refreshed ? "reviewed" : "failed";
     } catch {
       return "failed";
     }
@@ -266,8 +355,7 @@ export function PersonalPortfolio() {
         return;
       }
       const reread = await probeIntention(intention);
-      if (outcome === "confirmed") notifyPortfolioChanged();
-      await loadRef.current();
+      if (outcome === "confirmed" && reread === "reviewed") notifyPortfolioChanged();
       settleMutation(
         outcome,
         reread,
@@ -289,7 +377,6 @@ export function PersonalPortfolio() {
   async function rereadHeld() {
     const intention = intentionRef.current;
     const reread = intention ? await probeIntention(intention) : "failed";
-    await loadRef.current();
     if (!intention) return;
     settleMutation("unknown", reread, "");
   }
@@ -339,6 +426,22 @@ export function PersonalPortfolio() {
       }))
     : null;

+  function openMenu(spaceId: string, button: HTMLButtonElement) {
+    if (menu === spaceId) {
+      setMenu(null);
+      setMenuBox(null);
+      return;
+    }
+    const rect = button.getBoundingClientRect();
+    const width = 298;
+    const height = 359;
+    const left = Math.max(8, Math.min(rect.right - width, window.innerWidth - width - 8));
+    const top = rect.bottom + 8 + height > window.innerHeight ? Math.max(8, rect.top - height - 8) : rect.bottom + 8;
+    menuTrigger.current = button;
+    setMenuBox({ top, left });
+    setMenu(spaceId);
+  }
+
   function renderSpace(space: PersonalSpace) {
     const activity = space.lastOpenedAt
       ? `Dernière ouverture · ${formatWhen(space.lastOpenedAt)}`
@@ -382,40 +485,61 @@ export function PersonalPortfolio() {
         }}
         data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
       >
-        <div className="personal-portfolio-identity">
-          <span className="personal-portfolio-monogram" aria-hidden="true">{(space.label.trim()[0] || "?").toUpperCase()}</span>
-          <div>
-            <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
-            <small>{activity}</small>
-          </div>
-          {space.favorite ? (
-            <svg className="personal-portfolio-star" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
-              <path d="M10 2.5L12.3333 7.25L17.5 8L13.75 11.6667L14.6667 16.8333L10 14.3333L5.33333 16.8333L6.25 11.6667L2.5 8L7.66667 7.25L10 2.5Z" stroke="#A5B1C5" strokeWidth="1.41667" strokeLinejoin="round" />
-            </svg>
-          ) : null}
-        </div>
-        <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
-        <span className="personal-portfolio-meta">{activity}</span>
-        <span className="personal-portfolio-actions">
-          <button type="button" aria-expanded={menu === space.id} aria-label="Actions de l'espace" onClick={(event) => { event.preventDefault(); setMenu(menu === space.id ? null : space.id); }}>
-            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
-              <path d="M4.17 10h.01M10 10h.01M15.83 10h.01" stroke="#A5B1C5" strokeWidth="2.4" strokeLinecap="round" />
-            </svg>
-          </button>
-          {menu === space.id ? (
-            <div className="personal-portfolio-menu" role="menu">
-              <p>{space.label}</p>
-              <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
-              <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
-              <button type="button" disabled aria-disabled="true" title="Le renommage arrive avec le parcours de préparation.">Renommer</button>
-              <button type="button" disabled={locked} aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}>{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
-              <button type="button" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", knownVersion: board!.preferences.version })}>Monter</button>
-              <button type="button" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", knownVersion: board!.preferences.version })}>Descendre</button>
-              <button type="button" disabled={locked} onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>{scope === "archive" ? "Restaurer" : "Archiver"}</button>
-              <button type="button" disabled aria-disabled="true" title="La suppression n'est pas disponible.">Supprimer</button>
+        {board!.preferences.view === "grid" ? (
+          <>
+            <div className="personal-portfolio-tile-head">
+              <span className="personal-portfolio-monogram" aria-hidden="true">{(space.label.trim()[0] || "?").toUpperCase()}</span>
+              <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
+              <span className="personal-portfolio-grow" />
+              {space.favorite ? <Mark name="star" /> : null}
+              <button type="button" aria-expanded={menu === space.id} aria-haspopup="menu" aria-label="Actions de l'espace" onClick={(event) => { event.preventDefault(); event.stopPropagation(); openMenu(space.id, event.currentTarget); }}><Mark name="more" /></button>
             </div>
-          ) : null}
-        </span>
+            <p>{space.spaceType === "project" ? "Projet" : "Préparation"} · {activity}</p>
+          </>
+        ) : (
+          <>
+            <div className="personal-portfolio-identity">
+              <span className="personal-portfolio-monogram" aria-hidden="true">{(space.label.trim()[0] || "?").toUpperCase()}</span>
+              <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
+              {space.favorite ? <Mark name="star" /> : null}
+            </div>
+            <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
+            <span className="personal-portfolio-meta">{activity}</span>
+            <span className="personal-portfolio-actions">
+              <button type="button" aria-expanded={menu === space.id} aria-haspopup="menu" aria-label="Actions de l'espace" onClick={(event) => { event.preventDefault(); openMenu(space.id, event.currentTarget); }}><Mark name="more" /></button>
+            </span>
+          </>
+        )}
+        {menu === space.id && menuBox ? (
+          <div
+            className="personal-portfolio-menu"
+            role="menu"
+            style={{ top: menuBox.top, left: menuBox.left }}
+            onKeyDown={(event) => {
+              const items = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')];
+              const index = items.indexOf(document.activeElement as HTMLElement);
+              if (event.key === "Escape") {
+                setMenu(null);
+                setMenuBox(null);
+                menuTrigger.current?.focus();
+              } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
+                event.preventDefault();
+                const next = event.key === "ArrowDown" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
+                items[next]?.focus();
+              }
+            }}
+          >
+            <p>{space.label}</p>
+            <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
+            <a role="menuitem" href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}><Mark name="arrow" />{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
+            <button type="button" role="menuitem" disabled title="Le renommage arrive avec le parcours de préparation."><Mark name="edit" />Renommer</button>
+            <button type="button" role="menuitem" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}><Mark name="star" />{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
+            <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", knownVersion: board!.preferences.version })}><Mark name="grip" />Monter</button>
+            <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", knownVersion: board!.preferences.version })}><Mark name="grip" />Descendre</button>
+            <button type="button" role="menuitem" disabled={locked} onClick={() => { if (scope === "archive") setConfirmRestore(space); else setConfirm(space); }}><Mark name="archive" />{scope === "archive" ? "Restaurer" : "Archiver"}</button>
+            <button type="button" role="menuitem" disabled title="La suppression n'est pas disponible."><Mark name="trash" />Supprimer</button>
+          </div>
+        ) : null}
       </article>
     );
   }
@@ -451,6 +575,7 @@ export function PersonalPortfolio() {
         <div className="personal-portfolio-rule" />
         <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("favorites")}><span>Favoris</span><strong data-testid="portfolio-count-favorites">{formatCount(board.counters.favorites)}</strong><em>Accès rapide</em></button>
       </section>
+      <div className="personal-portfolio-separator" />

       {board.resume && scope === "current" ? (
         <section className="personal-portfolio-resume" data-testid="portfolio-resume">
@@ -469,11 +594,10 @@ export function PersonalPortfolio() {
         </section>
       ) : null}

-      <div className="personal-portfolio-separator" />
       <section className="personal-portfolio-library" aria-label="Mes espaces">
         <h2>Mes espaces</h2>
       <div className="personal-portfolio-tools">
-        <div className="personal-portfolio-filters" role="tablist" aria-label="Filtres">
+        <div className="personal-portfolio-filters" role="group" aria-label="Filtres">
           {([
             ["all", "Tout"],
             ["projects", "Projets"],
@@ -489,6 +613,7 @@ export function PersonalPortfolio() {
             </button>
           ))}
         </div>
+        <div className="personal-portfolio-commands">
         <label className="personal-portfolio-search">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
             <path d="M15 9.16667C15 12.3883 12.3883 15 9.16667 15C5.94501 15 3.33333 12.3883 3.33333 9.16667C3.33333 5.94501 5.94501 3.33333 9.16667 3.33333C12.3883 3.33333 15 5.94501 15 9.16667Z" stroke="#A5B1C5" strokeWidth="1.41667" />
@@ -539,6 +664,7 @@ export function PersonalPortfolio() {
             </button>
           ))}
         </div>
+        </div>
       </div>
       {scope === "archive" ? (
         <p className="personal-portfolio-status"><button type="button" onClick={() => setScope("current")}>Retour aux espaces</button></p>
@@ -550,7 +676,7 @@ export function PersonalPortfolio() {
         ) : groups ? (
           groups.map((group) => (
             <div key={group.type} className="personal-portfolio-group">
-              <h3>{group.type === "project" ? `Projets · ${board.groups.project}` : `Préparations · ${board.groups.preparation}`}</h3>
+              <h3><svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7.5 10 12.5 15 7.5" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" /></svg>{group.type === "project" ? `Projets · ${board.groups.project}` : `Préparations · ${board.groups.preparation}`}</h3>
               {group.items.map(renderSpace)}
             </div>
           ))
@@ -574,7 +700,7 @@ export function PersonalPortfolio() {

       {confirm ? (
         <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirm(null); }}>
-          <div className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer l'archivage" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape" && !locked) setConfirm(null); }}>
+          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer l'archivage" onClick={(event) => event.stopPropagation()}>
             <h2>Retirer {confirm.label} du portefeuille courant ?</h2>
             <p>L’espace reste accessible dans Archives et par ses liens. Le travail n’est pas interrompu.</p>
             <div className="personal-portfolio-modal-actions">
@@ -586,7 +712,7 @@ export function PersonalPortfolio() {
       ) : null}
       {confirmRestore ? (
         <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirmRestore(null); }}>
-          <div className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la restauration" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape" && !locked) setConfirmRestore(null); }}>
+          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la restauration" onClick={(event) => event.stopPropagation()}>
             <h2>Restaurer {confirmRestore.label} ?</h2>
             <p>Le même espace revient dans le portefeuille courant, avec son organisation personnelle.</p>
             <div className="personal-portfolio-modal-actions">
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
index 7a2d8a59..845b1d65 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
+++ b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
@@ -17,10 +17,11 @@
 .personal-portfolio-header,
 .personal-portfolio-synthesis,
 .personal-portfolio-resume,
-.personal-portfolio-tools,
 .personal-portfolio-library,
+.personal-portfolio-separator,
 .personal-portfolio-status {
-  margin: 0 40px;
+  margin-left: 40px;
+  margin-right: 40px;
 }

 .personal-portfolio-header {
@@ -74,8 +75,8 @@
   display: grid;
   grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr) 1px minmax(0, 1fr);
   align-items: center;
-  height: 136px;
-  margin-top: 8px;
+  height: 160px;
+  margin-top: 12px;
   background: var(--pf-panel);
   border: 1px solid var(--pf-border);
   border-radius: 12px;
@@ -105,8 +106,8 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   display: flex;
   align-items: center;
   gap: 20px;
-  height: 158px;
-  margin-top: 8px;
+  height: 180px;
+  margin-top: 12px;
   padding: 0 24px;
   background: var(--pf-accent-bg);
   border: 1px solid var(--pf-accent);
@@ -135,14 +136,16 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }

 .personal-portfolio-tools {
   display: flex;
+  justify-content: space-between;
   gap: 12px;
   align-items: center;
+  width: 100%;
   min-height: 40px;
-  margin-top: 16px;
-  flex-wrap: wrap;
+  margin-top: 12px;
 }
+.personal-portfolio-commands { display: flex; align-items: center; gap: 12px; margin-left: auto; }

-.personal-portfolio-separator { height: 1px; margin: 8px 0; background: var(--pf-border); }
+.personal-portfolio-separator { height: 1px; margin-top: 12px; background: var(--pf-border); }
 .personal-portfolio-filters, .personal-portfolio-views { display: flex; gap: 2px; align-items: center; }
 .personal-portfolio-filters button {
   border: 0;
@@ -200,6 +203,7 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
 .personal-portfolio input:disabled { opacity: 0.45; cursor: not-allowed; }

 .personal-portfolio-library { margin-top: 12px; }
+.personal-portfolio-group h3 { display: flex; align-items: center; gap: 8px; margin: 12px 0 4px; font-size: 14px; }
 .personal-portfolio-library h2 { margin: 0 0 8px; font-size: 20px; line-height: 28px; }

 .personal-portfolio-row,
@@ -208,7 +212,7 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   grid-template-columns: minmax(0, 1fr) 158px 170px 36px;
   align-items: center;
   gap: 14px;
-  min-height: 50px;
+  min-height: 60px;
   padding: 0 12px;
   border-bottom: 1px solid var(--pf-border);
   background: var(--pf-base);
@@ -263,40 +267,53 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }

 .personal-portfolio-grid {
   display: grid;
-  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
-  gap: 8px;
+  grid-template-columns: repeat(3, minmax(0, 1fr));
+  gap: 8px 12px;
 }
 .personal-portfolio-card {
-  min-height: 116px;
-  padding: 16px;
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+  height: 116px;
+  padding: 12px 14px;
   background: var(--pf-panel);
   border: 1px solid var(--pf-border);
-  border-radius: 12px;
+  border-radius: 10px;
   position: relative;
 }
+.personal-portfolio-tile-head { display: flex; align-items: center; gap: 10px; min-width: 0; }
+.personal-portfolio-tile-head a { color: var(--pf-ink); font-weight: 600; font-size: 16px; line-height: 22px; text-decoration: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
+.personal-portfolio-card p { margin: 0; color: var(--pf-muted); font-size: 12px; line-height: 17px; }
+.personal-portfolio-card .personal-portfolio-monogram { width: 32px; height: 32px; flex-basis: 32px; border-radius: 7px; }

 .personal-portfolio-menu {
-  position: absolute;
-  right: 12px;
-  top: 42px;
-  z-index: 5;
-  min-width: 220px;
-  padding: 8px;
-  background: #121826;
+  position: fixed;
+  z-index: 30;
+  width: 298px;
+  padding: 14px;
+  background: var(--pf-panel);
   border: 1px solid var(--pf-border);
   border-radius: 10px;
   display: flex;
   flex-direction: column;
-  gap: 2px;
+  gap: 5px;
 }
+.personal-portfolio-menu a,
 .personal-portfolio-menu button {
+  display: flex;
+  align-items: center;
+  gap: 10px;
+  width: 270px;
+  height: 35px;
   text-align: left;
   background: transparent;
   color: var(--pf-ink);
   border: 0;
   border-radius: 6px;
-  min-height: 32px;
   padding: 0 8px;
+  font-size: 14px;
+  line-height: 19px;
+  text-decoration: none;
 }
 .personal-portfolio-menu button:disabled { color: var(--pf-muted); }

@@ -333,20 +350,23 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   .personal-portfolio-header,
   .personal-portfolio-synthesis,
   .personal-portfolio-resume,
-  .personal-portfolio-tools,
+  .personal-portfolio-separator,
   .personal-portfolio-library,
   .personal-portfolio-status,
   .personal-portfolio-skeleton { margin-left: 28px; margin-right: 28px; }
+  .personal-portfolio-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
 }

 @media (max-width: 767px) {
   .personal-portfolio-header,
   .personal-portfolio-synthesis,
   .personal-portfolio-resume,
-  .personal-portfolio-tools,
+  .personal-portfolio-separator,
   .personal-portfolio-library,
   .personal-portfolio-status,
   .personal-portfolio-skeleton { margin-left: 16px; margin-right: 16px; }
+  .personal-portfolio-tools, .personal-portfolio-commands { flex-wrap: wrap; }
+  .personal-portfolio-grid { grid-template-columns: 1fr; }
   .personal-portfolio-header { align-items: flex-start; flex-direction: column; }
   .personal-portfolio-primary { width: 100%; }
   .personal-portfolio-synthesis { height: auto; }
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 0cbeb026..3ec15bf8 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -1,7 +1,7 @@
 "use client";

 import Link from "next/link";
-import { useEffect, useState } from "react";
+import { useEffect, useRef, useState } from "react";
 import { usePathname, useRouter, useSearchParams } from "next/navigation";
 import {
   runOpenPreparation,
@@ -87,6 +87,40 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
   const onSasPreparation = Boolean(preparationId) || onSasVisual;
   const [openingPrep, setOpeningPrep] = useState(false);
   const [personalNavOpen, setPersonalNavOpen] = useState(false);
+  const personalDrawerRef = useRef<HTMLDivElement | null>(null);
+  useEffect(() => {
+    if (!personalNavOpen) return;
+    const root = personalDrawerRef.current;
+    const previous = document.activeElement as HTMLElement | null;
+    const focusable = () =>
+      root
+        ? [...root.querySelectorAll<HTMLElement>("button, a, input, select, textarea")].filter((item) => !item.hasAttribute("disabled"))
+        : [];
+    focusable()[0]?.focus();
+    function onKey(event: KeyboardEvent) {
+      if (event.key === "Escape") {
+        setPersonalNavOpen(false);
+        return;
+      }
+      if (event.key !== "Tab") return;
+      const items = focusable();
+      if (items.length === 0) return;
+      const first = items[0];
+      const last = items[items.length - 1];
+      if (event.shiftKey && document.activeElement === first) {
+        event.preventDefault();
+        last.focus();
+      } else if (!event.shiftKey && document.activeElement === last) {
+        event.preventDefault();
+        first.focus();
+      }
+    }
+    document.addEventListener("keydown", onKey);
+    return () => {
+      document.removeEventListener("keydown", onKey);
+      previous?.focus();
+    };
+  }, [personalNavOpen]);
   const [prepNotice, setPrepNotice] = useState("");
   const activeProjectName = projectSpaceReady ? projectSpace?.projectName ?? null : null;
   const activeProjectSubtitle = projectSpaceReady ? projectSpace?.subtitle ?? null : null;
@@ -532,7 +566,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {

         {personalSpace && personalNavOpen ? (
           <div className="studio-personal-drawer md:hidden" onClick={() => setPersonalNavOpen(false)}>
-            <div id="personal-nav-drawer" className="studio-personal-drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation personnelle" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape") setPersonalNavOpen(false); }}>
+            <div ref={personalDrawerRef} id="personal-nav-drawer" className="studio-personal-drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation personnelle" onClick={(event) => event.stopPropagation()}>
               <button type="button" onClick={() => setPersonalNavOpen(false)}>Fermer</button>
               <Link href="/portfolio" onClick={() => setPersonalNavOpen(false)}>Portefeuille</Link>
               <button type="button" disabled={openingPrep} onClick={() => void handleOpenPreparation()}>Nouveau projet</button>
diff --git a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
index 1ecf3b71..df6cb435 100644
--- a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
@@ -398,4 +398,16 @@ describe("personal portfolio organization (PG)", () => {
     expect(record.rowVersion).toBeGreaterThan(0);
     await expect(readPersonalSpaceRecord(other, "project", projectId)).rejects.toMatchObject({ httpStatus: 404 });
   });
+
+  it("reads a space that is past the first page", async () => {
+    const owner = await seedPilot("Page");
+    const ids = Array.from({ length: 26 }, () => newId("prj"));
+    await db.insert(projects).values(ids.map((id, index) => ({ id, ownerPilotId: owner, name: `Espace ${String(index).padStart(2, "0")}` })));
+    const firstPage = await loadPersonalBoard(owner, { preview: false });
+    const missing = ids.find((id) => !firstPage.items.some((item) => item.id === id));
+    expect(missing).toBeTruthy();
+    const record = await readPersonalSpaceRecord(owner, "project", missing as string);
+    expect(record.id).toBe(missing);
+    expect(record.eligible).toBe(true);
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index 00fed3bc..26629a75 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -3,7 +3,7 @@ import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/
 import {
   classifyPortfolioResponse,
   portfolioMutationFollowUp,
-  portfolioReadReview,
+  pertinentSpaceRecord,
 } from "@/components/portfolio/PersonalPortfolio";

 describe("portfolio organization rules", () => {
@@ -33,9 +33,10 @@ describe("portfolio organization rules", () => {
     expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true }, "favorite")).toBe("confirmed");
     expect(classifyPortfolioResponse(200, { version: 3 }, "order")).toBe("confirmed");
     expect(classifyPortfolioResponse(409, { message: "conflict" }, "preference")).toBe("conflict");
-    expect(portfolioReadReview(200)).toBe("reviewed");
-    expect(portfolioReadReview(404)).toBe("reviewed");
-    expect(portfolioReadReview(500)).toBe("failed");
+    const record = { spaceType: "project", id: "prj_1", eligible: true, favorite: false, archived: false, rowVersion: 3, customPosition: null };
+    expect(pertinentSpaceRecord(record, { spaceType: "project", id: "prj_1" })).toBe(true);
+    expect(pertinentSpaceRecord({ ...record, id: "other" }, { spaceType: "project", id: "prj_1" })).toBe(false);
+    expect(pertinentSpaceRecord({ ok: true }, { spaceType: "project", id: "prj_1" })).toBe(false);
     expect(portfolioMutationFollowUp({ outcome: "conflict", reread: "reviewed" })).toEqual({
       uncertain: false,
       retry: false,
```

## Annexe DOC-R01 — diffs absents du handoff 700c091c

Cette annexe n'est pas une modification de ce cycle.
Source immuable : 26698494ceed32af53d71b3e2e2248bab903de73
Cible immuable : d79fd252684b0be76b61ab607cc88d00b7fb7232
Le handoff 700c091c ne restituait pas ces six fichiers. Il n'était pas un Review Pack Full conforme.

```
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 262a4148..43b56392 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,6 +1,21 @@
 # As-built — Portefeuille personnel et navigation

-Date : 28 novembre 2026. Mandat 1, complément B. Classe NO RELEASE.
+Date : 28 novembre 2026. Finalisation du complément B. Classe NO RELEASE.
+
+## Finalisation — composition nominale
+
+Source relue : fichier `itgvCulInEnFY6DvgIegvP`, page 14.
+Nœuds de cette finalisation : en-tête `1420:242`, barre `1420:285`, colonnes `1420:318`, pied `1425:5758`.
+La reprise et la synthèse du candidat précédent sont conservées.
+Le titre Mes espaces précède la barre. Les filtres inactifs n'ont plus de cadre. La recherche, le tri et les icônes de vue occupent la droite.
+Le bouton Nouveau projet reprend l'action primaire `#292d58` / `#656fe1`.
+Chaque ligne rend un monogramme, le nom, l'activité réelle et un menu. Le menu porte l'ouverture, le favori, monter, descendre, archiver, et laisse Renommer et Supprimer indisponibles.
+Les archives restent dans le rail. La recherche rapide est un champ sombre sous la marque.
+Un conflit 409 relu débloque une nouvelle intention sans exiger la valeur refusée. L'ordre et le favori se relisent par `GET /api/portfolio/spaces/{type}/{id}`, hors page. Une hausse de version seule ne prouve pas le déplacement.
+
+Aucune mesure F2 appariée n'est produite. Le verdict visuel reste REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.
+
+## Complément B — composition précédente

 ## Complément B — composition

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index aab475cc..470369e3 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-UX-FINAL-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — finalisation intégrale du complément B
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `26698494ceed32af53d71b3e2e2248bab903de73`
+- **commit**: `fix(next): finish the personal portfolio composition and reconciliation`
+- **schema_revision**: inchangé, `028_pilot_portfolio_organization`
+- **scope**: composition nominale page 14, menu à sept actions, lecture ciblée d'un espace, conflit 409
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-UX-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx
index 24908bff..7c2ca0ff 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx
@@ -10,9 +10,28 @@ export function notifyPortfolioChanged() {
   window.dispatchEvent(new Event(PORTFOLIO_CHANGED));
 }

+export function PersonalRailSearch() {
+  const [query, setQuery] = useState("");
+  return (
+    <form action="/portfolio" className="portfolio-rail-search">
+      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
+        <path d="M15 9.17a5.83 5.83 0 1 1-11.66 0 5.83 5.83 0 0 1 11.66 0Z" stroke="#A5B1C5" strokeWidth="1.4" />
+        <path d="M16.67 16.67 13.33 13.33" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" />
+      </svg>
+      <input
+        name="q"
+        aria-label="Recherche rapide des espaces"
+        placeholder="Rechercher un espace"
+        value={query}
+        onChange={(event) => setQuery(event.target.value)}
+        data-testid="portfolio-rail-search"
+      />
+    </form>
+  );
+}
+
 export function PersonalRailFavorites() {
   const [items, setItems] = useState<PersonalSpace[] | null>(null);
-  const [query, setQuery] = useState("");

   useEffect(() => {
     let requestId = 0;
@@ -40,17 +59,6 @@ export function PersonalRailFavorites() {

   return (
     <div data-testid="portfolio-rail-favorites">
-      <form action="/portfolio" className="px-2 pb-2">
-        <input
-          name="q"
-          aria-label="Recherche rapide des espaces"
-          placeholder="Rechercher un espace"
-          value={query}
-          onChange={(event) => setQuery(event.target.value)}
-          className="w-full"
-          data-testid="portfolio-rail-search"
-        />
-      </form>
       <a className="studio-rail-nav-item" href="/portfolio?scope=archive" data-testid="portfolio-rail-archives">
         Archives
       </a>
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
index 3660c010..7a2d8a59 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
+++ b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
@@ -142,21 +142,59 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   flex-wrap: wrap;
 }

-.personal-portfolio-filters, .personal-portfolio-views { display: flex; gap: 2px; }
-.personal-portfolio-filters button,
-.personal-portfolio-views button,
-.personal-portfolio-tools select,
-.personal-portfolio-tools input,
-.personal-portfolio button.btn {
+.personal-portfolio-separator { height: 1px; margin: 8px 0; background: var(--pf-border); }
+.personal-portfolio-filters, .personal-portfolio-views { display: flex; gap: 2px; align-items: center; }
+.personal-portfolio-filters button {
+  border: 0;
+  background: transparent;
+  color: var(--pf-muted);
+  border-radius: 7px;
+  min-height: 35px;
+  padding: 8px 12px;
+  font-size: 14px;
+  line-height: 19px;
+}
+.personal-portfolio-filters button[aria-pressed="true"] {
+  background: var(--pf-accent-bg);
+  color: var(--pf-kicker);
+  font-weight: 600;
+}
+.personal-portfolio-search,
+.personal-portfolio-tools select {
+  display: flex;
+  align-items: center;
+  gap: 8px;
+  height: 38px;
+  padding: 0 12px;
   border: 1px solid var(--pf-border);
+  background: var(--pf-panel);
+  color: var(--pf-ink);
+  border-radius: 7px;
+}
+.personal-portfolio-search { width: 236px; }
+.personal-portfolio-search input {
+  width: 100%;
+  border: 0;
   background: transparent;
   color: var(--pf-ink);
-  border-radius: 8px;
-  min-height: 35px;
+  font-size: 13px;
+  outline: none;
+}
+.personal-portfolio-views {
+  border: 1px solid var(--pf-border);
+  background: var(--pf-panel);
+  border-radius: 7px;
+  padding: 1px;
 }
-.personal-portfolio-filters button[aria-pressed="true"],
-.personal-portfolio-views button[aria-pressed="true"] { background: #243044; }
-.personal-portfolio-tools input { width: 236px; padding: 0 12px; }
+.personal-portfolio-views button {
+  width: 38px;
+  height: 36px;
+  border: 0;
+  border-radius: 6px;
+  background: transparent;
+  color: var(--pf-muted);
+}
+.personal-portfolio-views button[aria-pressed="true"] { background: var(--pf-accent-bg); color: var(--pf-kicker); }
 .personal-portfolio button:disabled,
 .personal-portfolio select:disabled,
 .personal-portfolio input:disabled { opacity: 0.45; cursor: not-allowed; }
@@ -169,7 +207,7 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   display: grid;
   grid-template-columns: minmax(0, 1fr) 158px 170px 36px;
   align-items: center;
-  gap: 8px;
+  gap: 14px;
   min-height: 50px;
   padding: 0 12px;
   border-bottom: 1px solid var(--pf-border);
@@ -182,8 +220,28 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
   color: var(--pf-muted);
   font-size: 11px;
   letter-spacing: 0.06em;
-  background: transparent;
+  background: var(--pf-panel);
+  border: 0;
+  border-radius: 6px;
+  font-weight: 600;
+}
+.personal-portfolio-row a { color: var(--pf-ink); font-weight: 600; text-decoration: none; }
+.personal-portfolio-identity small { display: block; color: var(--pf-muted); font-size: 12px; line-height: 17px; }
+.personal-portfolio-foot { display: flex; align-items: center; gap: 12px; min-height: 50px; }
+.personal-portfolio-foot p { margin: 0; color: var(--pf-muted); font-size: 13px; }
+.personal-portfolio-secondary {
+  margin-left: auto;
+  width: 218px;
+  height: 38px;
+  border-radius: 9px;
+  border: 1px solid #30394c;
+  background: #242b3b;
+  color: #bcc6d7;
+  font-size: 12px;
+  font-weight: 600;
 }
+.personal-portfolio-menu p { margin: 0; font-weight: 600; }
+.personal-portfolio-menu small { color: var(--pf-muted); }

 .personal-portfolio-identity { display: flex; align-items: center; gap: 12px; min-width: 0; }
 .personal-portfolio-monogram {
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index f6b4487f..0cbeb026 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -25,7 +25,7 @@ import {
   SETTINGS_INTEGRATIONS_HREF,
 } from "./PersonalRailSettingsMenu";
 import "./studio-shell.css";
-import { PersonalRailFavorites } from "@/components/portfolio/PersonalRailFavorites";
+import { PersonalRailFavorites, PersonalRailSearch } from "@/components/portfolio/PersonalRailFavorites";

 /** Figma 652:* rail glyphs — decorative, paired with visible labels. */
 function railNavGlyph(key: string): string {
@@ -190,6 +190,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
             </div>
           </div>

+          {personalSpace && !projectId ? <PersonalRailSearch /> : null}
           <div className="studio-rail-rule shrink-0" aria-hidden />

           {projectId ? (
@@ -534,7 +535,6 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
             <div id="personal-nav-drawer" className="studio-personal-drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation personnelle" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape") setPersonalNavOpen(false); }}>
               <button type="button" onClick={() => setPersonalNavOpen(false)}>Fermer</button>
               <Link href="/portfolio" onClick={() => setPersonalNavOpen(false)}>Portefeuille</Link>
-              <Link href="/portfolio?scope=archive" onClick={() => setPersonalNavOpen(false)}>Archives</Link>
               <button type="button" disabled={openingPrep} onClick={() => void handleOpenPreparation()}>Nouveau projet</button>
               <PersonalRailFavorites />
             </div>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index a8cbedf4..453e4119 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -14,6 +14,25 @@ html.studio-shell-lock body {
   min-width: 0;
 }

+.portfolio-rail-search {
+  display: flex;
+  align-items: center;
+  gap: 8px;
+  height: 36px;
+  margin: 8px 8px 4px;
+  padding: 0 10px;
+  border: 1px solid #273248;
+  border-radius: 8px;
+  background: #151d2c;
+}
+.portfolio-rail-search input {
+  width: 100%;
+  border: 0;
+  background: transparent;
+  color: #f2f4fc;
+  font-size: 13px;
+  outline: none;
+}
 .studio-shell-rail {
   flex-shrink: 0;
   height: 100%;
```

# Review pack Light — Flex Office Demo Option A

**Date/heure (Europe/Paris) :** 2026-08-06 22:01:10 CEST
**Cycle :** 8 — Delivery / implémentation
**Profil SFIA :** Standard
**Typologie :** EVOL
**Branche projet :** `delivery/flex-office-demo-option-a`
**Commits projet créés :** aucun
**Review pack niveau :** Light
**Handoff :** required — publish-in-cycle

---

## Objectif

Créer une application web locale de démonstration permettant de réserver une place de flex office pour une journée, dans une fenêtre glissante maximale de cinq semaines (Option A : mock + localStorage, sans backend).

---

## Cycle et profil

- Cycle : Delivery / implémentation
- Profil : Standard
- Justification : plusieurs composants UI, règles métier, persistance locale, tests, plusieurs fichiers applicatifs
- CKC : recherché oui ; détaillé non ; statut absent ; fallback template SFIA v2.6

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| pwd | `/Users/morris/Projects/sfia-workspace` |
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| remote | `mcleland147/sfia-workspace` |
| branche au démarrage observée | `delivery/eventops-poc-visible-slice-01` (écart vs main attendu) |
| HEAD au démarrage | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| origin/main (prompt ChatGPT) | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| origin/main observé | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` (identique) |
| staged | aucun |
| tracked modifiés | aucun |
| untracked hors cycle | `.tmp-sfia-review/` (préexistant), `projects/eventops-poc/` (préexistant, non touché) |
| action | création branche `delivery/flex-office-demo-option-a` depuis `origin/main` |
| HEAD branche projet | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| commits projet | aucun |

Note : le working tree initial n’avait pas de fichiers tracked/staged inattendus. Les untracked préexistants (eventops-poc, tmp review) n’ont pas été modifiés dans ce cycle. Alignement fast-forward non requis : la branche cible a été créée directement depuis `origin/main`.

---

## Git Review Index

- base branch : `origin/main` @ `0cdf57a12843891da8b8db2d550cb38c7ba9f60a`
- HEAD avant (branche cible créée) : `0cdf57a12843891da8b8db2d550cb38c7ba9f60a`
- HEAD après : `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` (inchangé — aucun commit projet)
- fichiers modifiés : aucun (créations uniquement, non commités)
- fichiers créés : voir liste ci-dessous sous `projects/flex-office-demo/**`
- commits projet créés : aucun
- tests et validations : npm install OK ; 12 tests OK ; lint OK ; build OK ; runtime OK
- diff stat (tracked) : vide (fichiers encore untracked)
- diff name-status (tracked) : vide
- décisions Morris requises : aucune bloquante ; revue démo Morris attendue
- niveau review pack : light
- réserves : polices web non hébergées (fallback système) ; message flash peut rester visible après changement d’utilisateur ; viewport browser automation parfois étroit malgré override CDP

---

## Sources consultées et rôle

| Source | Rôle |
|--------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | Template d’exécution SFIA v2.6 — review pack / handoff |
| `README.md` (workspace) | Structure workspace, projets sous `projects/` |
| `projects/README.md` | Conventions projets |
| `projects/eventops-poc/app/lib/storage.ts` | Inspiration locale localStorage (lecture seule, non modifié) |
| `scripts/sfia/publish-review-handoff.sh` | Publisher handoff L3 |
| Absence de `projects/flex-office-demo/` | Scaffold Vite React TS créé from scratch |

---

## Contrat visuel local (hypothèse d’implémentation — non baseline Morris)

- Viewport desktop cible : ~1280×900
- Viewport mobile cible : ~375×812
- Structure générale : header contexte → contrôles utilisateur/date → compteurs → légende + grille 20 places (2 zones) → panneau détail/actions → footer limites Option A
- États visuels : Disponible (vert + texte), Réservé par moi (bleu + bordure pointillée + texte), Indisponible (terracotta + texte)
- Hiérarchie des actions : primaire Réserver ; secondaire Annuler ; tertiaire Réinitialiser
- Règles de lisibilité : labels natifs, focus visible, pas d’état uniquement couleur, messages en français clair
- **Ce contrat n’est pas une décision design Morris validée.**

---

## Fichiers créés et modifiés

### Créés (périmètre `projects/flex-office-demo/**`)

- `projects/flex-office-demo/.gitignore`
- `projects/flex-office-demo/README.md`
- `projects/flex-office-demo/eslint.config.js`
- `projects/flex-office-demo/index.html`
- `projects/flex-office-demo/package.json`
- `projects/flex-office-demo/vite.config.ts`
- `projects/flex-office-demo/tsconfig.json`
- `projects/flex-office-demo/tsconfig.app.json`
- `projects/flex-office-demo/tsconfig.node.json`
- `projects/flex-office-demo/src/main.tsx`
- `projects/flex-office-demo/src/App.tsx`
- `projects/flex-office-demo/src/styles.css`
- `projects/flex-office-demo/src/types.ts`
- `projects/flex-office-demo/src/vite-env.d.ts`
- `projects/flex-office-demo/src/data/mockData.ts`
- `projects/flex-office-demo/src/domain/dates.ts`
- `projects/flex-office-demo/src/domain/bookingRules.ts`
- `projects/flex-office-demo/src/domain/bookingRules.test.ts`
- `projects/flex-office-demo/src/storage/bookingStorage.ts`
- `projects/flex-office-demo/package-lock.json` (seuil — contenu intégral omis, hash ci-dessous)

### Modifiés hors périmètre

- aucun

---

## Contenu complet des fichiers créés

**Seuil documenté :** `package-lock.json` (146 172 octets) omis en contenu intégral ; SHA-256 `40a1416a0551b181509f1f7925ad35eb95c4fd6366c26ed027d81638183bb013` ; généré par `npm install` depuis `package.json`.

### `projects/flex-office-demo/.gitignore`

```gitignore
node_modules
dist
dist-ssr
*.local
.DS_Store
coverage

```

### `projects/flex-office-demo/README.md`

```md
# Flex Office Demo — Option A

Démonstration locale de réservation d’une place de flex office pour une journée, dans une fenêtre glissante maximale de **cinq semaines** (aujourd’hui → J+35, fuseau `Europe/Paris`).

## Décision Morris

**Option A** validée :

- données mockées ;
- persistance locale navigateur (`localStorage`) ;
- **aucun backend** ;
- **aucune synchronisation** entre appareils ;
- **aucune ambition de mise en production**.

## Démarrage local

```bash
cd projects/flex-office-demo
npm install
npm run dev
```

Ouvrir l’URL affichée (par défaut `http://localhost:5173`).

Autres commandes :

```bash
npm run test
npm run lint
npm run build
```

## Fonctionnalités

- 3 utilisateurs fictifs (sélecteur visible) ;
- 20 places (`A01`–`A10`, `B01`–`B10`) en zone calme / collaborative ;
- réservation / annulation selon les règles métier ;
- compteurs libres / réservées ;
- réinitialisation de la démo (confirmation) ;
- restauration propre si `localStorage` invalide.

## Persistance

Clé versionnée : `sfia-flex-office-demo:v1`

- utilisée **uniquement** pour la démonstration locale ;
- ne contient que des identifiants et libellés fictifs ;
- **ne convient pas** à un usage multi-utilisateur réel ni à la production ;
- cette démo **n’est pas** présentée comme conforme à une politique RGPD de production.

## Hors périmètre (volontaire)

Backend, API, authentification réelle, SSO, sync multi-utilisateur, emails/Teams, récurrence, liste d’attente, quotas, multi-sites, admin avancée, CI/CD, déploiement.

## Accessibilité (proportionnée)

Navigation clavier, boutons natifs, labels, focus visible, contrastes lisibles, états aussi indiqués par du texte (pas seulement la couleur). Pas de revendication de conformité réglementaire complète.

```

### `projects/flex-office-demo/eslint.config.js`

```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);

```

### `projects/flex-office-demo/index.html`

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flex Office Demo — Option A</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

### `projects/flex-office-demo/package.json`

```json
{
  "name": "flex-office-demo",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "description": "Démo locale Option A — réservation de places flex office (localStorage, sans backend)",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.27.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.27.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.1.0",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.32.1",
    "vite": "^6.3.5",
    "vitest": "^3.1.2"
  }
}

```

### `projects/flex-office-demo/vite.config.ts`

```ts
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});

```

### `projects/flex-office-demo/tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

### `projects/flex-office-demo/tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

### `projects/flex-office-demo/tsconfig.node.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}

```

### `projects/flex-office-demo/src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

```

### `projects/flex-office-demo/src/App.tsx`

```tsx
import { useEffect, useMemo, useState } from "react";
import {
  AMENITY_LABELS,
  DEMO_SEATS,
  DEMO_USERS,
  findUser,
  ZONE_LABELS,
} from "./data/mockData";
import {
  bookSeat,
  bookingForUserOnDate,
  cancelBooking,
  countSeatsForDate,
  getSeatStatus,
} from "./domain/bookingRules";
import {
  formatDateFr,
  maxBookableDate,
  todayParis,
} from "./domain/dates";
import {
  loadDemoState,
  resetDemoState,
  saveDemoState,
} from "./storage/bookingStorage";
import type { Booking, Seat, UserId } from "./types";

type MessageTone = "info" | "success" | "error";

interface FlashMessage {
  tone: MessageTone;
  text: string;
}

export default function App() {
  const today = useMemo(() => todayParis(), []);
  const maxDate = useMemo(() => maxBookableDate(today), [today]);

  const [ready, setReady] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentUserId, setCurrentUserId] = useState<UserId>("u-alex");
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedSeatId, setSelectedSeatId] = useState<string | null>(null);
  const [message, setMessage] = useState<FlashMessage | null>(null);

  useEffect(() => {
    const loaded = loadDemoState();
    setBookings(loaded.state.bookings);
    if (loaded.restored) {
      const reason =
        loaded.reason === "invalid"
          ? "Les données locales étaient invalides. La démonstration a été réinitialisée proprement."
          : "Première ouverture : données de démonstration initialisées.";
      setMessage({ tone: "info", text: reason });
    }
    setReady(true);
  }, []);

  const persist = (next: Booking[]) => {
    setBookings(next);
    saveDemoState({ version: 1, bookings: next });
  };

  const counts = countSeatsForDate(bookings, selectedDate);
  const myBooking = bookingForUserOnDate(bookings, currentUserId, selectedDate);
  const selectedSeat = DEMO_SEATS.find((s) => s.id === selectedSeatId) ?? null;
  const selectedStatus = selectedSeat
    ? getSeatStatus(bookings, selectedSeat.id, currentUserId, selectedDate, today)
    : null;
  const currentUser = findUser(currentUserId);

  const onBook = () => {
    if (!selectedSeat) {
      setMessage({
        tone: "error",
        text: "Sélectionnez d’abord une place disponible.",
      });
      return;
    }
    const result = bookSeat({
      bookings,
      seatId: selectedSeat.id,
      userId: currentUserId,
      date: selectedDate,
      today,
    });
    if (result.ok) {
      persist(result.bookings);
      setMessage({ tone: "success", text: result.message });
    } else {
      setMessage({ tone: "error", text: result.message });
    }
  };

  const onCancelMine = () => {
    if (!myBooking) {
      setMessage({
        tone: "error",
        text: "Vous n’avez pas de réservation à annuler pour cette date.",
      });
      return;
    }
    const result = cancelBooking({
      bookings,
      bookingId: myBooking.id,
      userId: currentUserId,
    });
    if (result.ok) {
      persist(result.bookings);
      setMessage({ tone: "success", text: result.message });
    } else {
      setMessage({ tone: "error", text: result.message });
    }
  };

  const onReset = () => {
    const confirmed = window.confirm(
      "Réinitialiser la démo ? Les réservations locales de cette démonstration seront restaurées à l’état initial. Aucune autre donnée du navigateur ne sera touchée.",
    );
    if (!confirmed) return;
    const state = resetDemoState(localStorage, today);
    setBookings(state.bookings);
    setSelectedSeatId(null);
    setSelectedDate(today);
    setMessage({
      tone: "info",
      text: "Démonstration réinitialisée avec les données initiales.",
    });
  };

  if (!ready) {
    return (
      <div className="app-shell">
        <p className="loading" role="status">
          Chargement local de la démonstration…
        </p>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">SFIA · Option A · Démo locale</p>
        <h1>Flex Office — réservation d’une place pour la journée</h1>
        <p className="lede">
          Démonstration sans backend ni authentification réelle. Données fictives
          persistées uniquement dans ce navigateur (<code>localStorage</code>).
          Fenêtre : aujourd’hui → J+35 (Europe/Paris).
        </p>
      </header>

      <section className="controls" aria-label="Paramètres de démonstration">
        <div className="field">
          <label htmlFor="user-select">Utilisateur courant (fictif)</label>
          <select
            id="user-select"
            value={currentUserId}
            onChange={(e) => setCurrentUserId(e.target.value as UserId)}
          >
            {DEMO_USERS.map((user) => (
              <option key={user.id} value={user.id}>
                {user.displayName} — {user.roleLabel}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="date-select">Date de réservation</label>
          <input
            id="date-select"
            type="date"
            value={selectedDate}
            min={today}
            max={maxDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedSeatId(null);
            }}
          />
          <p className="hint">
            Limite des cinq semaines : du {formatDateFr(today)} au{" "}
            {formatDateFr(maxDate)} inclus.
          </p>
        </div>
      </section>

      <section className="stats" aria-live="polite">
        <p>
          <strong>{counts.free}</strong> places libres ·{" "}
          <strong>{counts.reserved}</strong> réservées / {counts.total} —{" "}
          {formatDateFr(selectedDate)}
        </p>
        <p className="mine-line">
          {myBooking
            ? `Votre réservation ce jour : place ${myBooking.seatId}.`
            : "Aucune réservation pour vous à cette date."}
        </p>
        {currentUser ? (
          <p className="user-line">Connecté en tant que {currentUser.displayName}</p>
        ) : null}
      </section>

      {message ? (
        <div
          className={`banner banner-${message.tone}`}
          role={message.tone === "error" ? "alert" : "status"}
        >
          {message.text}
        </div>
      ) : null}

      <section className="workspace" aria-label="Places">
        <div className="legend" aria-label="Légende des états">
          <span className="pill available">Disponible</span>
          <span className="pill mine">Réservé par moi</span>
          <span className="pill unavailable">Indisponible</span>
        </div>

        <div className="zones">
          {(["quiet", "collaborative"] as const).map((zoneId) => (
            <div key={zoneId} className="zone">
              <h2>{ZONE_LABELS[zoneId]}</h2>
              <ul className="seat-grid">
                {DEMO_SEATS.filter((seat) => seat.zoneId === zoneId).map((seat) => {
                  const status = getSeatStatus(
                    bookings,
                    seat.id,
                    currentUserId,
                    selectedDate,
                    today,
                  );
                  const selected = selectedSeatId === seat.id;
                  return (
                    <li key={seat.id}>
                      <button
                        type="button"
                        className={`seat-card status-${status}${selected ? " is-selected" : ""}`}
                        aria-pressed={selected}
                        aria-label={`Place ${seat.label}, ${statusLabel(status)}`}
                        onClick={() => setSelectedSeatId(seat.id)}
                      >
                        <span className="seat-id">{seat.label}</span>
                        <span className="seat-status">{statusLabel(status)}</span>
                        <span className="seat-amenities">
                          {seat.amenities.map((a) => AMENITY_LABELS[a]).join(" · ")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <aside className="detail" aria-label="Détail de la place">
          <h2>Détail</h2>
          {!selectedSeat ? (
            <p>Aucun poste sélectionné. Cliquez sur une place pour la réserver ou l’inspecter.</p>
          ) : (
            <SeatDetail
              seat={selectedSeat}
              status={selectedStatus}
              myBooking={myBooking}
            />
          )}

          <div className="actions">
            <button
              type="button"
              className="btn primary"
              onClick={onBook}
              disabled={!selectedSeat || selectedStatus !== "available"}
            >
              Réserver cette place
            </button>
            <button
              type="button"
              className="btn secondary"
              onClick={onCancelMine}
              disabled={!myBooking}
            >
              Annuler ma réservation
            </button>
            <button type="button" className="btn ghost" onClick={onReset}>
              Réinitialiser la démo
            </button>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <p>
          Option A validée par Morris : mock + localStorage, pas de sync multi-appareil,
          pas de production. Aucune donnée personnelle réelle n’est collectée.
        </p>
      </footer>
    </div>
  );
}

function statusLabel(
  status: ReturnType<typeof getSeatStatus> | null,
): string {
  switch (status) {
    case "available":
      return "Disponible";
    case "mine":
      return "Réservé par moi";
    case "unavailable":
      return "Indisponible";
    case "out_of_window":
      return "Hors fenêtre";
    default:
      return "Inconnu";
  }
}

function SeatDetail({
  seat,
  status,
  myBooking,
}: {
  seat: Seat;
  status: ReturnType<typeof getSeatStatus> | null;
  myBooking: Booking | undefined;
}) {
  return (
    <div className="seat-detail">
      <p>
        <strong>Place {seat.label}</strong> — {ZONE_LABELS[seat.zoneId]}
      </p>
      <p>
        Équipements :{" "}
        {seat.amenities.map((a) => AMENITY_LABELS[a]).join(", ") || "aucun"}
      </p>
      <p>État : {statusLabel(status)}</p>
      {status === "mine" && myBooking ? (
        <p>C’est votre réservation (réf. {myBooking.id}).</p>
      ) : null}
      {status === "unavailable" ? (
        <p>Réservée par un autre collaborateur fictif.</p>
      ) : null}
    </div>
  );
}

```

### `projects/flex-office-demo/src/styles.css`

```css
:root {
  --bg: #f3f0ea;
  --bg-accent: #e7efe8;
  --ink: #1c2420;
  --muted: #4d5a53;
  --line: #c9d2cb;
  --surface: #fffdf8;
  --available: #1f6b4a;
  --available-bg: #e4f3eb;
  --mine: #1d4f8c;
  --mine-bg: #e7f0fa;
  --unavailable: #6b3a2f;
  --unavailable-bg: #f6e8e4;
  --error: #8a2b2b;
  --error-bg: #f8e6e6;
  --success: #1f6b4a;
  --success-bg: #e4f3eb;
  --info: #1d4f8c;
  --info-bg: #e7f0fa;
  --focus: #0b6e4f;
  --radius: 10px;
  --shadow: 0 10px 30px rgba(28, 36, 32, 0.08);
  font-family: "Source Sans 3", "Segoe UI", "Helvetica Neue", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, #dfece3 0%, transparent 45%),
    linear-gradient(160deg, var(--bg) 0%, var(--bg-accent) 100%);
  line-height: 1.45;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}

code {
  font-family: "IBM Plex Mono", "SF Mono", Menlo, monospace;
  font-size: 0.92em;
}

.app-shell {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.5rem 0 3rem;
}

.hero {
  padding: 1.25rem 0 0.5rem;
}

.eyebrow {
  margin: 0 0 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  color: var(--muted);
  font-weight: 700;
}

h1 {
  margin: 0 0 0.6rem;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.15;
  font-family: "Fraunces", "Palatino Linotype", Georgia, serif;
}

.lede {
  margin: 0;
  max-width: 52rem;
  color: var(--muted);
}

.controls {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 1rem;
  padding: 1rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-weight: 700;
  font-size: 0.92rem;
}

select,
input[type="date"] {
  font: inherit;
  padding: 0.55rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
}

select:focus-visible,
input:focus-visible,
button:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--focus) 55%, white);
  outline-offset: 2px;
}

.hint {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
}

.stats {
  margin: 0 0 1rem;
  padding: 0.85rem 1rem;
  background: color-mix(in srgb, var(--surface) 85%, #d9ebe0);
  border-radius: var(--radius);
  border: 1px solid var(--line);
}

.stats p {
  margin: 0.15rem 0;
}

.mine-line,
.user-line {
  color: var(--muted);
}

.banner {
  margin: 0 0 1rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius);
  border: 1px solid transparent;
  font-weight: 600;
}

.banner-info {
  background: var(--info-bg);
  border-color: color-mix(in srgb, var(--info) 35%, white);
  color: var(--info);
}

.banner-success {
  background: var(--success-bg);
  border-color: color-mix(in srgb, var(--success) 35%, white);
  color: var(--success);
}

.banner-error {
  background: var(--error-bg);
  border-color: color-mix(in srgb, var(--error) 35%, white);
  color: var(--error);
}

.workspace {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(240px, 0.8fr);
  gap: 1rem;
  align-items: start;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  border: 1px solid transparent;
}

.pill::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 2px;
  background: currentColor;
}

.pill.available {
  color: var(--available);
  background: var(--available-bg);
  border-color: color-mix(in srgb, var(--available) 30%, white);
}

.pill.mine {
  color: var(--mine);
  background: var(--mine-bg);
  border-color: color-mix(in srgb, var(--mine) 30%, white);
}

.pill.unavailable {
  color: var(--unavailable);
  background: var(--unavailable-bg);
  border-color: color-mix(in srgb, var(--unavailable) 30%, white);
}

.zone {
  margin-bottom: 1.25rem;
}

.zone h2,
.detail h2 {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
}

.seat-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.6rem;
}

.seat-card {
  width: 100%;
  min-height: 96px;
  text-align: left;
  border-radius: 8px;
  border: 2px solid var(--line);
  background: var(--surface);
  padding: 0.65rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: inherit;
}

.seat-card .seat-id {
  font-weight: 800;
  font-size: 1.05rem;
}

.seat-card .seat-status {
  font-size: 0.82rem;
  font-weight: 700;
}

.seat-card .seat-amenities {
  font-size: 0.75rem;
  color: var(--muted);
}

.seat-card.status-available {
  border-color: color-mix(in srgb, var(--available) 55%, var(--line));
  background: var(--available-bg);
}

.seat-card.status-mine {
  border-color: color-mix(in srgb, var(--mine) 55%, var(--line));
  background: var(--mine-bg);
  border-style: dashed;
}

.seat-card.status-unavailable {
  border-color: color-mix(in srgb, var(--unavailable) 45%, var(--line));
  background: var(--unavailable-bg);
  opacity: 0.92;
}

.seat-card.status-out_of_window {
  opacity: 0.55;
}

.seat-card.is-selected {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus) 35%, white);
}

.detail {
  position: sticky;
  top: 1rem;
  padding: 1rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 1rem;
}

.btn {
  font: inherit;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.65rem 0.85rem;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn.primary {
  background: var(--available);
  color: #fff;
}

.btn.secondary {
  background: #fff;
  border-color: var(--mine);
  color: var(--mine);
}

.btn.ghost {
  background: transparent;
  border-color: var(--line);
  color: var(--muted);
}

.footer {
  margin-top: 2rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.loading {
  padding: 2rem 0;
}

@media (max-width: 800px) {
  .controls,
  .workspace {
    grid-template-columns: 1fr;
  }

  .detail {
    position: static;
  }
}

```

### `projects/flex-office-demo/src/types.ts`

```ts
export type UserId = "u-alex" | "u-sam" | "u-jordan";

export type ZoneId = "quiet" | "collaborative";

export type SeatAmenity = "screen" | "dock" | "window";

export type IsoDate = string; // YYYY-MM-DD in Europe/Paris calendar sense

export interface DemoUser {
  id: UserId;
  displayName: string;
  roleLabel: string;
}

export interface Seat {
  id: string;
  label: string;
  zoneId: ZoneId;
  amenities: SeatAmenity[];
}

export interface Booking {
  id: string;
  seatId: string;
  userId: UserId;
  date: IsoDate;
  createdAt: string;
}

export interface DemoState {
  version: 1;
  bookings: Booking[];
}

export type SeatStatus =
  | "available"
  | "mine"
  | "unavailable"
  | "out_of_window";

export type ActionResult =
  | { ok: true; bookings: Booking[]; message: string }
  | { ok: false; bookings: Booking[]; message: string };

export type LoadResult =
  | { ok: true; state: DemoState; restored: false }
  | { ok: true; state: DemoState; restored: true; reason: "missing" | "invalid" };

```

### `projects/flex-office-demo/src/vite-env.d.ts`

```ts
/// <reference types="vite/client" />

```

### `projects/flex-office-demo/src/data/mockData.ts`

```ts
import type { Booking, DemoUser, IsoDate, Seat, ZoneId } from "../types";
import { addCalendarDays, todayParis } from "../domain/dates";

export const ZONE_LABELS: Record<ZoneId, string> = {
  quiet: "Zone calme",
  collaborative: "Zone collaborative",
};

export const AMENITY_LABELS = {
  screen: "Écran",
  dock: "Station d'accueil",
  window: "Proximité fenêtre",
} as const;

export const DEMO_USERS: DemoUser[] = [
  {
    id: "u-alex",
    displayName: "Alex Martin",
    roleLabel: "Product designer (fictif)",
  },
  {
    id: "u-sam",
    displayName: "Sam Bernard",
    roleLabel: "Développeur (fictif)",
  },
  {
    id: "u-jordan",
    displayName: "Jordan Leroy",
    roleLabel: "Chef de projet (fictif)",
  },
];

function buildRow(
  prefix: "A" | "B",
  zoneId: ZoneId,
  amenityPattern: Array<Seat["amenities"]>,
): Seat[] {
  return Array.from({ length: 10 }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return {
      id: `${prefix}${n}`,
      label: `${prefix}${n}`,
      zoneId,
      amenities: amenityPattern[index % amenityPattern.length],
    };
  });
}

export const DEMO_SEATS: Seat[] = [
  ...buildRow("A", "quiet", [
    ["screen", "window"],
    ["screen"],
    ["dock"],
    ["screen", "dock"],
    ["window"],
    ["screen", "window"],
    ["dock", "window"],
    ["screen"],
    ["screen", "dock", "window"],
    ["dock"],
  ]),
  ...buildRow("B", "collaborative", [
    ["screen", "dock"],
    ["screen"],
    ["dock", "window"],
    ["screen", "dock", "window"],
    ["screen"],
    ["dock"],
    ["window"],
    ["screen", "dock"],
    ["screen", "window"],
    ["dock"],
  ]),
];

/** Seed bookings relative to "today" so the demo screen is meaningful. */
export function createSeedBookings(today: IsoDate = todayParis()): Booking[] {
  const d0 = today;
  const d1 = addCalendarDays(today, 1);
  const d2 = addCalendarDays(today, 2);

  return [
    {
      id: "seed-1",
      seatId: "A03",
      userId: "u-sam",
      date: d0,
      createdAt: `${d0}T08:00:00+02:00`,
    },
    {
      id: "seed-2",
      seatId: "B05",
      userId: "u-jordan",
      date: d0,
      createdAt: `${d0}T08:15:00+02:00`,
    },
    {
      id: "seed-3",
      seatId: "A01",
      userId: "u-alex",
      date: d1,
      createdAt: `${d0}T09:00:00+02:00`,
    },
    {
      id: "seed-4",
      seatId: "B02",
      userId: "u-sam",
      date: d2,
      createdAt: `${d0}T09:30:00+02:00`,
    },
  ];
}

export function findUser(userId: string): DemoUser | undefined {
  return DEMO_USERS.find((user) => user.id === userId);
}

export function findSeat(seatId: string): Seat | undefined {
  return DEMO_SEATS.find((seat) => seat.id === seatId);
}

```

### `projects/flex-office-demo/src/domain/dates.ts`

```ts
import type { IsoDate } from "../types";

const PARIS_TZ = "Europe/Paris";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Calendar date YYYY-MM-DD for Europe/Paris (no UTC day shift). */
export function todayParis(now: Date = new Date()): IsoDate {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PARIS_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isIsoDate(value: unknown): value is IsoDate {
  if (typeof value !== "string" || !DATE_RE.test(value)) {
    return false;
  }
  const [y, m, d] = value.split("-").map(Number);
  const probe = new Date(Date.UTC(y, m - 1, d));
  return (
    probe.getUTCFullYear() === y &&
    probe.getUTCMonth() === m - 1 &&
    probe.getUTCDate() === d
  );
}

/** Pure calendar arithmetic on YYYY-MM-DD (UTC noon anchor avoids DST quirks). */
export function addCalendarDays(date: IsoDate, days: number): IsoDate {
  if (!isIsoDate(date)) {
    throw new Error(`Invalid ISO date: ${date}`);
  }
  const [y, m, d] = date.split("-").map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d));
  utc.setUTCDate(utc.getUTCDate() + days);
  const yy = utc.getUTCFullYear();
  const mm = String(utc.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(utc.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

export function compareIsoDates(a: IsoDate, b: IsoDate): number {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

export const BOOKING_WINDOW_DAYS = 35;

export function maxBookableDate(today: IsoDate = todayParis()): IsoDate {
  return addCalendarDays(today, BOOKING_WINDOW_DAYS);
}

export function isDateInBookingWindow(
  date: IsoDate,
  today: IsoDate = todayParis(),
): boolean {
  if (!isIsoDate(date)) return false;
  const max = maxBookableDate(today);
  return compareIsoDates(date, today) >= 0 && compareIsoDates(date, max) <= 0;
}

export function formatDateFr(date: IsoDate): string {
  if (!isIsoDate(date)) return date;
  const [y, m, d] = date.split("-").map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d, 12));
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(utc);
}

```

### `projects/flex-office-demo/src/domain/bookingRules.ts`

```ts
import type { ActionResult, Booking, IsoDate, SeatStatus, UserId } from "../types";
import { DEMO_SEATS } from "../data/mockData";
import {
  isDateInBookingWindow,
  isIsoDate,
  todayParis,
} from "./dates";

function cloneBookings(bookings: Booking[]): Booking[] {
  return bookings.map((b) => ({ ...b }));
}

export function bookingForSeatOnDate(
  bookings: Booking[],
  seatId: string,
  date: IsoDate,
): Booking | undefined {
  return bookings.find((b) => b.seatId === seatId && b.date === date);
}

export function bookingForUserOnDate(
  bookings: Booking[],
  userId: UserId,
  date: IsoDate,
): Booking | undefined {
  return bookings.find((b) => b.userId === userId && b.date === date);
}

export function getSeatStatus(
  bookings: Booking[],
  seatId: string,
  userId: UserId,
  date: IsoDate,
  today: IsoDate = todayParis(),
): SeatStatus {
  if (!isDateInBookingWindow(date, today)) {
    return "out_of_window";
  }
  const existing = bookingForSeatOnDate(bookings, seatId, date);
  if (!existing) return "available";
  if (existing.userId === userId) return "mine";
  return "unavailable";
}

export function countSeatsForDate(
  bookings: Booking[],
  date: IsoDate,
): { free: number; reserved: number; total: number } {
  const reserved = DEMO_SEATS.filter((seat) =>
    Boolean(bookingForSeatOnDate(bookings, seat.id, date)),
  ).length;
  const total = DEMO_SEATS.length;
  return { free: total - reserved, reserved, total };
}

export function bookSeat(params: {
  bookings: Booking[];
  seatId: string;
  userId: UserId;
  date: IsoDate;
  now?: Date;
  today?: IsoDate;
  bookingId?: string;
}): ActionResult {
  const {
    bookings,
    seatId,
    userId,
    date,
    now = new Date(),
    today = todayParis(now),
    bookingId,
  } = params;

  const current = cloneBookings(bookings);

  if (!isIsoDate(date)) {
    return {
      ok: false,
      bookings: current,
      message: "La date sélectionnée est invalide.",
    };
  }

  if (!isDateInBookingWindow(date, today)) {
    if (date < today) {
      return {
        ok: false,
        bookings: current,
        message:
          "Impossible de réserver une date passée. Choisissez aujourd’hui ou une date future dans la fenêtre autorisée.",
      };
    }
    return {
      ok: false,
      bookings: current,
      message:
        "Cette date dépasse la fenêtre de réservation (aujourd’hui → J+35). Choisissez une date dans les cinq prochaines semaines.",
    };
  }

  if (!DEMO_SEATS.some((seat) => seat.id === seatId)) {
    return {
      ok: false,
      bookings: current,
      message: "Cette place n’existe pas dans la démonstration.",
    };
  }

  const seatTaken = bookingForSeatOnDate(current, seatId, date);
  if (seatTaken) {
    if (seatTaken.userId === userId) {
      return {
        ok: false,
        bookings: current,
        message: "Vous avez déjà réservé cette place pour cette date.",
      };
    }
    return {
      ok: false,
      bookings: current,
      message:
        "Cette place est déjà réservée pour cette date. Choisissez une autre place disponible.",
    };
  }

  const userBooking = bookingForUserOnDate(current, userId, date);
  if (userBooking) {
    return {
      ok: false,
      bookings: current,
      message: `Vous avez déjà réservé la place ${userBooking.seatId} pour cette date. Annulez-la d’abord pour en choisir une autre.`,
    };
  }

  const created: Booking = {
    id: bookingId ?? `bk-${now.getTime()}-${seatId}`,
    seatId,
    userId,
    date,
    createdAt: now.toISOString(),
  };

  return {
    ok: true,
    bookings: [...current, created],
    message: `Réservation confirmée : place ${seatId} le ${date}.`,
  };
}

export function cancelBooking(params: {
  bookings: Booking[];
  bookingId: string;
  userId: UserId;
}): ActionResult {
  const { bookings, bookingId, userId } = params;
  const current = cloneBookings(bookings);
  const target = current.find((b) => b.id === bookingId);

  if (!target) {
    return {
      ok: false,
      bookings: current,
      message: "Cette réservation n’existe plus ou a déjà été annulée.",
    };
  }

  if (target.userId !== userId) {
    return {
      ok: false,
      bookings: current,
      message:
        "Vous ne pouvez annuler que votre propre réservation. Changez d’utilisateur pour simuler le propriétaire.",
    };
  }

  return {
    ok: true,
    bookings: current.filter((b) => b.id !== bookingId),
    message: `Réservation annulée : place ${target.seatId} le ${target.date} est à nouveau disponible.`,
  };
}

```

### `projects/flex-office-demo/src/domain/bookingRules.test.ts`

```ts
import { describe, expect, it } from "vitest";
import {
  bookSeat,
  cancelBooking,
  getSeatStatus,
} from "./bookingRules";
import {
  addCalendarDays,
  isDateInBookingWindow,
  todayParis,
} from "./dates";
import {
  createInitialState,
  parseStoredState,
  resetDemoState,
  saveDemoState,
  STORAGE_KEY,
} from "../storage/bookingStorage";
import type { Booking } from "../types";

const TODAY = "2026-08-06";
const EMPTY: Booking[] = [];

describe("booking window", () => {
  it("allows booking on today", () => {
    const result = bookSeat({
      bookings: EMPTY,
      seatId: "A01",
      userId: "u-alex",
      date: TODAY,
      today: TODAY,
      now: new Date("2026-08-06T10:00:00+02:00"),
      bookingId: "t1",
    });
    expect(result.ok).toBe(true);
    expect(result.bookings).toHaveLength(1);
  });

  it("allows booking on J+35 inclusive", () => {
    const date = addCalendarDays(TODAY, 35);
    expect(isDateInBookingWindow(date, TODAY)).toBe(true);
    const result = bookSeat({
      bookings: EMPTY,
      seatId: "A01",
      userId: "u-alex",
      date,
      today: TODAY,
      bookingId: "t2",
    });
    expect(result.ok).toBe(true);
  });

  it("rejects booking after J+35", () => {
    const date = addCalendarDays(TODAY, 36);
    const result = bookSeat({
      bookings: EMPTY,
      seatId: "A01",
      userId: "u-alex",
      date,
      today: TODAY,
      bookingId: "t3",
    });
    expect(result.ok).toBe(false);
    expect(result.bookings).toEqual(EMPTY);
    expect(result.message).toMatch(/fenêtre/i);
  });

  it("rejects past dates", () => {
    const date = addCalendarDays(TODAY, -1);
    const result = bookSeat({
      bookings: EMPTY,
      seatId: "A01",
      userId: "u-alex",
      date,
      today: TODAY,
      bookingId: "t4",
    });
    expect(result.ok).toBe(false);
    expect(result.bookings).toEqual(EMPTY);
    expect(result.message).toMatch(/passée/i);
  });
});

describe("booking conflicts", () => {
  it("rejects double booking of the same seat", () => {
    const first = bookSeat({
      bookings: EMPTY,
      seatId: "B01",
      userId: "u-alex",
      date: TODAY,
      today: TODAY,
      bookingId: "c1",
    });
    expect(first.ok).toBe(true);
    const second = bookSeat({
      bookings: first.bookings,
      seatId: "B01",
      userId: "u-sam",
      date: TODAY,
      today: TODAY,
      bookingId: "c2",
    });
    expect(second.ok).toBe(false);
    expect(second.bookings).toEqual(first.bookings);
    expect(second.message).toMatch(/déjà réservée/i);
  });

  it("rejects a second seat for the same user on the same day", () => {
    const first = bookSeat({
      bookings: EMPTY,
      seatId: "A01",
      userId: "u-alex",
      date: TODAY,
      today: TODAY,
      bookingId: "c3",
    });
    const second = bookSeat({
      bookings: first.bookings,
      seatId: "A02",
      userId: "u-alex",
      date: TODAY,
      today: TODAY,
      bookingId: "c4",
    });
    expect(second.ok).toBe(false);
    expect(second.bookings).toEqual(first.bookings);
    expect(second.message).toMatch(/déjà réservé/i);
  });

  it("allows the same user to book different seats on different dates", () => {
    const d1 = TODAY;
    const d2 = addCalendarDays(TODAY, 1);
    const first = bookSeat({
      bookings: EMPTY,
      seatId: "A01",
      userId: "u-alex",
      date: d1,
      today: TODAY,
      bookingId: "c5",
    });
    const second = bookSeat({
      bookings: first.bookings,
      seatId: "B10",
      userId: "u-alex",
      date: d2,
      today: TODAY,
      bookingId: "c6",
    });
    expect(second.ok).toBe(true);
    expect(second.bookings).toHaveLength(2);
  });
});

describe("cancellation", () => {
  it("allows the owner to cancel", () => {
    const booked = bookSeat({
      bookings: EMPTY,
      seatId: "A05",
      userId: "u-sam",
      date: TODAY,
      today: TODAY,
      bookingId: "x1",
    });
    const cancelled = cancelBooking({
      bookings: booked.bookings,
      bookingId: "x1",
      userId: "u-sam",
    });
    expect(cancelled.ok).toBe(true);
    expect(cancelled.bookings).toHaveLength(0);
    expect(getSeatStatus(cancelled.bookings, "A05", "u-sam", TODAY, TODAY)).toBe(
      "available",
    );
  });

  it("rejects cancellation by another user without mutating state", () => {
    const booked = bookSeat({
      bookings: EMPTY,
      seatId: "A05",
      userId: "u-sam",
      date: TODAY,
      today: TODAY,
      bookingId: "x2",
    });
    const cancelled = cancelBooking({
      bookings: booked.bookings,
      bookingId: "x2",
      userId: "u-alex",
    });
    expect(cancelled.ok).toBe(false);
    expect(cancelled.bookings).toEqual(booked.bookings);
    expect(cancelled.message).toMatch(/propre réservation/i);
  });
});

describe("localStorage persistence helpers", () => {
  it("restores seeded state from storage round-trip", () => {
    const memory = new Map<string, string>();
    const storage = {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => {
        memory.set(key, value);
      },
    };
    const initial = createInitialState(TODAY);
    saveDemoState(initial, storage);
    expect(memory.get(STORAGE_KEY)).toBeTruthy();
    const parsed = parseStoredState(memory.get(STORAGE_KEY) ?? null);
    expect(parsed.restored).toBe(false);
    expect(parsed.state.bookings).toEqual(initial.bookings);
  });

  it("cleanly restores initial data after invalid local payload", () => {
    const parsed = parseStoredState("{not-json");
    expect(parsed.restored).toBe(true);
    if (parsed.restored) {
      expect(parsed.reason).toBe("invalid");
    }
    expect(parsed.state.version).toBe(1);
    expect(parsed.state.bookings.length).toBeGreaterThan(0);

    const memory = new Map<string, string>();
    const storage = {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => {
        memory.set(key, value);
      },
    };
    memory.set(STORAGE_KEY, '{"version":99,"bookings":"nope"}');
    const reset = resetDemoState(storage, TODAY);
    expect(reset.bookings.length).toBeGreaterThan(0);
    const again = parseStoredState(memory.get(STORAGE_KEY) ?? null);
    expect(again.restored).toBe(false);
    expect(again.state.bookings).toEqual(reset.bookings);
  });
});

describe("todayParis smoke", () => {
  it("returns YYYY-MM-DD", () => {
    expect(todayParis(new Date("2026-08-06T23:30:00+02:00"))).toMatch(
      /^\d{4}-\d{2}-\d{2}$/,
    );
  });
});

```

### `projects/flex-office-demo/src/storage/bookingStorage.ts`

```ts
import type { Booking, DemoState, LoadResult, UserId } from "../types";
import { createSeedBookings, DEMO_USERS, findSeat } from "../data/mockData";
import { isIsoDate } from "../domain/dates";

export const STORAGE_KEY = "sfia-flex-office-demo:v1";

const USER_IDS = new Set(DEMO_USERS.map((u) => u.id));

export function createInitialState(today?: string): DemoState {
  return {
    version: 1,
    bookings: createSeedBookings(today),
  };
}

function isUserId(value: unknown): value is UserId {
  return typeof value === "string" && USER_IDS.has(value as UserId);
}

function isBooking(value: unknown): value is Booking {
  if (!value || typeof value !== "object") return false;
  const b = value as Record<string, unknown>;
  return (
    typeof b.id === "string" &&
    typeof b.seatId === "string" &&
    Boolean(findSeat(b.seatId)) &&
    isUserId(b.userId) &&
    isIsoDate(b.date) &&
    typeof b.createdAt === "string"
  );
}

export function parseStoredState(raw: string | null): LoadResult {
  if (raw === null) {
    return { ok: true, state: createInitialState(), restored: true, reason: "missing" };
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") {
      return {
        ok: true,
        state: createInitialState(),
        restored: true,
        reason: "invalid",
      };
    }
    const obj = parsed as Record<string, unknown>;
    if (obj.version !== 1 || !Array.isArray(obj.bookings)) {
      return {
        ok: true,
        state: createInitialState(),
        restored: true,
        reason: "invalid",
      };
    }
    if (!obj.bookings.every(isBooking)) {
      return {
        ok: true,
        state: createInitialState(),
        restored: true,
        reason: "invalid",
      };
    }
    return {
      ok: true,
      state: { version: 1, bookings: obj.bookings },
      restored: false,
    };
  } catch {
    return {
      ok: true,
      state: createInitialState(),
      restored: true,
      reason: "invalid",
    };
  }
}

export function loadDemoState(
  storage: Pick<Storage, "getItem" | "setItem"> = localStorage,
): LoadResult {
  const result = parseStoredState(storage.getItem(STORAGE_KEY));
  if (result.restored) {
    storage.setItem(STORAGE_KEY, JSON.stringify(result.state));
  }
  return result;
}

export function saveDemoState(
  state: DemoState,
  storage: Pick<Storage, "setItem"> = localStorage,
): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function resetDemoState(
  storage: Pick<Storage, "setItem"> = localStorage,
  today?: string,
): DemoState {
  const state = createInitialState(today);
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}

```

## Règles métier implémentées

1. Fenêtre Europe/Paris : aujourd’hui → J+35 inclus (`dates.ts` + contrôles UI min/max).
2. Une place = une réservation max par date.
3. Un utilisateur = une place max par date.
4. Dates différentes : places différentes autorisées pour le même utilisateur.
5. Annulation uniquement par le propriétaire.
6. Annulation → place immédiatement disponible.
7. Conflits → messages compréhensibles ; `localStorage` non modifié si action invalide.
8. Clé `sfia-flex-office-demo:v1` ; seed initial ; reset confirmé ; restauration si payload invalide.

---

## Validations et résultats

### Techniques
- `npm install` : OK (243 packages, 0 vulnerabilities)
- `npm run test` : OK — 12/12
- `npm run lint` : OK
- `npm run build` : OK (`tsc -b && vite build`)

### Tests métier couverts
- réservation dans fenêtre ; J+35 OK ; J+36 refusée ; date passée refusée
- double place refusée ; 2e place même jour refusée ; autre date OK
- annulation propriétaire OK ; autre utilisateur refusée
- round-trip storage ; restauration après payload invalide

### Runtime manuel (browser Cursor)
- App : `http://localhost:5173/`
- Changement utilisateur : OK (Alex → Sam)
- Réservation A01 (Alex) : OK — compteurs 17/3 ; état « Réservé par moi »
- Place A01 vue Sam : Indisponible
- Annulation A03 (Sam seed) : OK — 18 libres / 2 réservées
- localStorage peuplé (clé versionnée, longueur observée ~584+)
- Pas d’overlay erreur Vite ; 20 places rendues
- Captures : `.tmp-sfia-review/runtime-screenshots/flex-office-desktop.png`, `flex-office-desktop-1280.png`, `flex-office-mobile-375.png`

### Diff Git (branche projet)
- `git diff --stat` : vide (untracked only)
- `git diff --name-status` : vide
- `git diff --check` : OK
- `git diff --cached --name-status` : vide
- `.tmp-sfia-review/**` : non staged
- Aucun fichier hors `projects/flex-office-demo/**` modifié par ce cycle

---

## Capture runtime

Captures produites et jointes hors commit dans `.tmp-sfia-review/runtime-screenshots/`.

Défauts visuels visibles (non bloquants) :
- polices `Source Sans 3` / `Fraunces` non chargées via CDN → fallback système (Georgia / Segoe UI) ;
- message de confirmation peut rester affiché après changement d’utilisateur ;
- en viewport très étroit, le panneau détail passe sous la grille (comportement responsive attendu).

---

## Garde-fous

- Aucun backend / API / auth réelle / SSO
- Aucune donnée réelle
- Aucun secret
- Aucun commit projet / push projet / PR / merge
- Méthode SFIA et chemins protégés non modifiés
- Option B non engagée

---

## Limites explicites de l’Option A

- Pas de sync multi-utilisateur / multi-appareil
- Pas adaptée à la production ni à une politique RGPD de production
- Persistance navigateur uniquement
- Données fictives uniquement

---

## Réserves

1. Untracked préexistant `projects/eventops-poc/` laissé intact (hors périmètre).
2. Polices web non embarquées.
3. Pas de tests UI E2E automatisés (contrôle browser manuel + tests unitaires métier).
4. Branche de départ du workspace n’était pas `main` ; branche cible créée proprement depuis `origin/main`.

---

## Décisions Morris déjà validées

- Option A (mock + localStorage, pas de backend, pas de prod)
- Cycle Delivery Standard pour cette démo

## Décisions Morris éventuellement requises

- Aucune décision structurante bloquante
- Attendu : revue démo Morris (GO éventuel commit/push projet hors de ce cycle)

---

## Review pack content coverage

- created files full content : **yes** (sauf `package-lock.json` — seuil documenté + SHA-256)
- modified sections complete : **not applicable** (aucune modification de fichiers existants)
- useful diff included : **not applicable** (untracked only ; diff tracked vide)
- synthesis only : **no**
- review pack verdict : **complete**

---



---

## Review Handoff Git

- décision : required
- justification : rapport Cursor produit, consultable par ChatGPT depuis Git
- mode handoff : publish-in-cycle
- motif local-only : N/A
- branche : `sfia/review-handoff`
- fichier canonique : `sfia-review-handoff/latest-chatgpt-review.md`
- source : `.tmp-sfia-review/chatgpt-review.md`
- push handoff : oui — L3 borné via `scripts/sfia/publish-review-handoff.sh`
- handoff remote commit before : `2cf71c8eb1e23a68937828f764fd8c996dbd7f97`
- handoff local/remote commit after : `88e676338e1abe45bb29dafedc4c0fa689651d94`
- blob source/remote : `777c367db5613312abafbac343dcd6c9e481997d` (identiques après publication)
- remote verification : OK — `git fetch` + relecture du fichier canonique distant
- remote file re-read : OK (objectif, branche, verdict DEMO READY, section handoff)
- retour branche initiale : OK — `delivery/flex-office-demo-option-a` @ `0cdf57a12843891da8b8db2d550cb38c7ba9f60a`
- cohérence cycle / branche / HEAD : OK
- contenu créé couvert : yes (sauf package-lock seuil)
- contenu modifié couvert : N/A
- commit message : `docs(review-handoff): publish flex office option A delivery review`
- verdict handoff : **HANDOFF UPDATED — REMOTE VERIFIED**


## Verdict

**DEMO READY — NOT PRODUCTION READY**

**READY FOR MORRIS DEMO REVIEW**

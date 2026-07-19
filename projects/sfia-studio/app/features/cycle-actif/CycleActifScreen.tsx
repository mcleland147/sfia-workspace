import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import { activeCycle } from "@/fixtures/cycles";
import styles from "./cycle-actif.module.css";

const steps = [
  { num: 1, label: "Cadrer", state: "done" as const },
  { num: 2, label: "Produire", state: "done" as const },
  { num: 3, label: "Vérifier", state: "active" as const },
  { num: 4, label: "Décider", state: "pending" as const },
  { num: 5, label: "Versionner", state: "pending" as const },
];

const checklist = [
  { label: "Contrat UX/UI complet", status: "Terminé", tone: "greenFlush" as const, dot: "#21c28a" },
  { label: "4 écrans P0 premium", status: "En cours", tone: "blueFlush" as const, dot: "#3863f5" },
  { label: "Contraste WCAG AA", status: "À vérifier", tone: "orangeFlush" as const, dot: "#faa629" },
  { label: "Capture runtime", status: "Non lancée", tone: "pink" as const, dot: "#f25794" },
  { label: "Review handoff", status: "À produire", tone: "purpleFlush" as const, dot: "#7a4df5" },
];

export function CycleActifScreen() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="cycle-hero">
        <p className={styles.heroEyebrow}>CYCLE 4 · UX/UI</p>
        <h2 id="cycle-hero" className={styles.heroTitle}>
          Construire, vérifier, décider — sans perdre la vérité Git.
        </h2>
        <p className={styles.heroText}>
          Le parcours guidé concentre les preuves, les stops et les décisions
          humaines au bon moment.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.pillPurple}>Critical</span>
          <span className={styles.pillBlue}>72 %</span>
        </div>
      </section>

      <nav className={styles.stepper} aria-label="Étapes du cycle">
        {steps.map((step, index) => (
          <div key={step.num} style={{ display: "contents" }}>
            <div className={styles.step}>
              <span
                className={
                  step.state === "done"
                    ? styles.stepCircleDone
                    : step.state === "active"
                      ? styles.stepCircleActive
                      : styles.stepCirclePending
                }
              >
                {step.num}
              </span>
              <span
                className={
                  step.state === "active"
                    ? styles.stepLabelActive
                    : styles.stepLabel
                }
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span
                className={
                  step.state === "done" || step.state === "active"
                    ? styles.connector
                    : styles.connectorPending
                }
                aria-hidden
              />
            )}
          </div>
        ))}
      </nav>

      <div className={styles.lower}>
        <section className={styles.work} aria-labelledby="work-title">
          <p className={styles.workLabel}>ÉTAPE COURANTE</p>
          <h2 id="work-title" className={styles.workTitle}>
            Vérification visuelle et documentaire
          </h2>
          <p className={styles.workText}>
            Comparer les écrans Figma, le contrat UX-B et les garde-fous avant
            décision Morris.
          </p>

          {checklist.map((item) => (
            <div key={item.label} className={styles.checkRow}>
              <span
                className={styles.checkDot}
                style={{ background: item.dot }}
                aria-hidden
              />
              <span className={styles.checkLabel}>{item.label}</span>
              <StatusPill tone={item.tone}>{item.status}</StatusPill>
            </div>
          ))}

          <div className={styles.actions}>
            <CtaButton variant="secondary" simulated>
              Ouvrir les preuves
            </CtaButton>
            <CtaButton href="/decision">Préparer décision Morris</CtaButton>
          </div>
        </section>

        <aside className={styles.inspector} aria-label="Cadre d'exécution">
          <h2 className={styles.inspectorTitle}>Cadre d&apos;exécution</h2>
          <p className={styles.fieldLabel}>Branche</p>
          <p className={styles.fieldValue}>{activeCycle.branch}</p>
          <p className={styles.fieldLabel}>Base</p>
          <p className={styles.fieldValue}>{activeCycle.base}</p>
          <p className={styles.fieldLabel}>Profil</p>
          <p className={styles.fieldValue}>Critical</p>
          <p className={styles.fieldLabel}>Figma</p>
          <p className={styles.fieldValue}>4 frames P0</p>
          <p className={styles.fieldLabel}>Staged</p>
          <p className={styles.fieldValue}>Aucun</p>

          <div className={styles.stopBox}>
            <p className={styles.stopTitle}>STOP CONDITIONS</p>
            <p className={styles.stopText}>
              Option UX promue sans GO · divergence Git · preuve visuelle absente.
            </p>
          </div>

          <div className={styles.inspectorAction}>
            <CtaButton variant="primary" simulated>
              Demander un STOP
            </CtaButton>
          </div>
        </aside>
      </div>
    </>
  );
}

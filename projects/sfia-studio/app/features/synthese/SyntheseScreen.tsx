import { MetricCard } from "@/components/ui/MetricCard";
import { GateList } from "@/components/ui/GateList";
import { StatusPill } from "@/components/ui/StatusPill";
import { cycles } from "@/fixtures/cycles";
import { gates } from "@/fixtures/gates";
import styles from "./synthese.module.css";

const dotColors = ["#7a4df5", "#3863f5", "#21c28a", "#faa629"];

const activities = [
  "Figma premium créé",
  "AF-CAND-11B validée",
  "PR #214 mergée",
  "Handoff publié",
];

export function SyntheseScreen() {
  return (
    <>
      <div className={styles.heroWrap}>
        <section className={styles.hero} aria-labelledby="synthese-hero">
          <p className={styles.heroEyebrow}>PILOTAGE EN TEMPS RÉEL</p>
          <h2 id="synthese-hero" className={styles.heroTitle}>
            Une vision claire de chaque cycle, chaque gate et chaque preuve.
          </h2>
          <p className={styles.heroText}>
            Le cockpit consolide la vérité Git, les décisions Morris et les
            prochaines actions sans créer une seconde vérité.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.heroPillDark}>4 projets actifs</span>
            <span className={styles.heroPillPurple}>2 gates ouvertes</span>
          </div>
        </section>
      </div>

      <div className={styles.metrics}>
        <MetricCard label="Projets actifs" value="04" accent="blue" />
        <MetricCard label="Cycles en cours" value="03" accent="purple" />
        <MetricCard label="Gates Morris" value="02" accent="orange" />
        <MetricCard label="Review packs" value="07 / 08" accent="green" />
      </div>

      <div className={styles.lower}>
        <section className={styles.portfolio} aria-labelledby="portfolio-title">
          <div className={styles.portfolioHeader}>
            <h2 id="portfolio-title" className={styles.portfolioTitle}>
              Portefeuille des cycles
            </h2>
            <StatusPill tone="blueFlush">Vue portefeuille</StatusPill>
          </div>
          {cycles.map((cycle, index) => (
            <div key={cycle.id} className={styles.row}>
              <span
                className={styles.rowDot}
                style={{ background: dotColors[index] }}
                aria-hidden
              />
              <div>
                <p className={styles.rowName}>{cycle.name}</p>
                <p className={styles.rowSub}>{cycle.subtitle}</p>
              </div>
              <span className={styles.rowProgress}>
                <StatusPill tone="blueFlush">{cycle.progress} %</StatusPill>
              </span>
            </div>
          ))}
        </section>

        <div className={styles.sideColumn}>
          <section className={styles.gatesPanel} aria-labelledby="gates-title">
            <h2 id="gates-title" className={styles.panelTitle}>
              Gates à arbitrer
            </h2>
            <GateList gates={gates} />
          </section>

          <section
            className={styles.activityPanel}
            aria-labelledby="activity-title"
          >
            <h2 id="activity-title" className={styles.panelTitle}>
              Activité récente
            </h2>
            <ul className={styles.activityList}>
              {activities.map((item) => (
                <li key={item} className={styles.activityItem}>
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

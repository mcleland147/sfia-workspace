import Image from "next/image";
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import { gitStatus } from "@/fixtures/git-status";
import { copilotRecommendations } from "@/fixtures";
import styles from "./nouvelle-demande.module.css";

export function NouvelleDemandeScreen() {
  const recommendation = copilotRecommendations[0];

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <h2 id="hero-title" className={styles.heroTitle}>
          Transformez un besoin flou en cycle exécutable.
        </h2>
        <p className={styles.heroText}>
          Décrivez la demande. SFIA qualifie le cycle, les gates, les risques et
          le cadre d&apos;exécution.
        </p>
        <StatusPill tone="white">Qualification assistée</StatusPill>
        <Image
          src="/icons/hero-orb.svg"
          alt=""
          width={92}
          height={92}
          className={styles.heroOrb}
          aria-hidden
        />
      </section>

      <div className={styles.grid}>
        <section className={styles.formCard} aria-labelledby="form-title">
          <p className={styles.sectionLabel}>1 · EXPRIMER LE BESOIN</p>
          <h2 id="form-title" className={styles.sectionTitle}>
            Que souhaitez-vous accomplir ?
          </h2>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>Objet de la demande</span>
            <p className={styles.fieldValue}>
              Industrialiser la préparation des cycles SFIA
            </p>
          </div>

          <div className={`${styles.field} ${styles.fieldLarge}`}>
            <span className={styles.fieldLabel}>
              Décrivez le résultat attendu
            </span>
            <p className={styles.fieldValue}>
              Je veux réduire la préparation manuelle, sécuriser les gates Morris
              et produire automatiquement un cadrage exploitable par Cursor.
            </p>
            <div className={styles.tags}>
              <StatusPill tone="blue">Objectif</StatusPill>
              <StatusPill tone="purple">Automatisation</StatusPill>
              <StatusPill tone="green">Gouvernance</StatusPill>
            </div>
          </div>

          <p className={styles.sectionLabelPurple}>2 · CONTEXTE</p>
          <div className={styles.contextCard}>
            <div className={styles.ghIcon}>GH</div>
            <div>
              <p className={styles.repoName}>{gitStatus.repository}</p>
              <p className={styles.repoMeta}>
                {gitStatus.branch} · {gitStatus.commit} · {gitStatus.cleanliness}
              </p>
            </div>
            <span className={styles.contextPill}>
              <StatusPill tone="green">Git truth vérifiée</StatusPill>
            </span>
          </div>

          <div className={styles.attachment}>
            ＋ Ajouter des documents, captures ou liens
          </div>

          <div className={styles.actions}>
            <span className={styles.saved}>Enregistré il y a 8 s</span>
            <CtaButton variant="primaryDark" simulated>
              Lancer la qualification →
            </CtaButton>
          </div>
        </section>

        <aside className={styles.preview} aria-label="Prévisualisation du cycle">
          <div className={styles.previewHeader}>
            <h2 className={styles.previewTitle}>Prévisualisation du cycle</h2>
            <StatusPill tone="green">Temps réel</StatusPill>
          </div>

          <div className={styles.agentCard}>
            <div className={styles.agentAvatar}>AI</div>
            <div>
              <p className={styles.statusTitle}>Orchestrateur de qualification</p>
              <p className={styles.statusSub}>
                Analyse du besoin, risques et gates en cours…
              </p>
              <StatusPill tone="purple">68 %</StatusPill>
            </div>
          </div>

          <p className={styles.recommendationNote}>
            Recommandation copilot — non décision Morris
          </p>
          <div className={styles.statusRow}>
            <span
              className={styles.statusDot}
              style={{ background: "var(--sfia-blue-00c)" }}
            />
            <div>
              <p className={styles.statusTitle}>Cycle proposé</p>
              <p className={styles.statusSub}>Conception fonctionnelle</p>
            </div>
          </div>

          <div className={styles.statusRow}>
            <span
              className={styles.statusDot}
              style={{ background: "var(--sfia-purple-00c)" }}
            />
            <div>
              <p className={styles.statusTitle}>{recommendation.title}</p>
              <p className={styles.statusSub}>Standard</p>
            </div>
          </div>

          <div className={styles.statusRow}>
            <span
              className={styles.statusDot}
              style={{ background: "var(--sfia-orange-00c)" }}
            />
            <div>
              <p className={styles.statusTitle}>Gate Morris</p>
              <p className={styles.statusSub}>Requise avant exécution</p>
            </div>
          </div>

          <div className={styles.timeline}>
            <p className={styles.timelineTitle}>Parcours</p>
            <div className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-green-00c)" }}
              />
              Demande reçue
            </div>
            <div className={styles.timelineItemActive}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-green-00c)" }}
              />
              Qualification
            </div>
            <div className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-border-00c)" }}
              />
              Validation Morris
            </div>
            <div className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-border-00c)" }}
              />
              Prompt Cursor
            </div>
          </div>

          <p className={styles.trust}>
            Aucune action Git ou Cursor sans GO Morris.
          </p>
        </aside>
      </div>
    </>
  );
}

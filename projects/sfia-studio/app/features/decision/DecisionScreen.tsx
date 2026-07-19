"use client";

import { useState } from "react";
import { EvidenceList } from "@/components/ui/EvidenceList";
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import { evidenceItems } from "@/fixtures/evidence";
import { pendingMorrisDecision } from "@/fixtures";
import type { MorrisVerdict } from "@/lib/domain/morris-decision";
import styles from "./decision.module.css";

const options: {
  verdict: MorrisVerdict;
  pill: string;
  tone: "greenFlush" | "orangeFlush" | "pink";
  title: string;
  subtitle: string;
}[] = [
  {
    verdict: "GO",
    pill: "GO",
    tone: "greenFlush",
    title: "Adopter la direction premium",
    subtitle: "Décliner sur le cycle UX/UI",
  },
  {
    verdict: "CORRIGER",
    pill: "CORRIGER",
    tone: "orangeFlush",
    title: "Demander une itération",
    subtitle: "Ajuster avant validation",
  },
  {
    verdict: "STOP",
    pill: "STOP",
    tone: "pink",
    title: "Suspendre la trajectoire",
    subtitle: "Aucun engagement supplémentaire",
  },
];

export function DecisionScreen() {
  const [selected, setSelected] = useState<MorrisVerdict | null>(null);
  const decision = pendingMorrisDecision;

  return (
    <>
      <section className={styles.hero} aria-labelledby="decision-hero">
        <p className={styles.heroEyebrow}>GATE MORRIS · UX/UI</p>
        <h2 id="decision-hero" className={styles.heroTitle}>
          Décider avec le bon niveau de preuve.
        </h2>
        <p className={styles.heroText}>
          Chaque choix affiche sa portée, ses risques, sa révocabilité et les
          impacts sur la trajectoire.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.pillPurple}>Décision requise</span>
          <span className={styles.pillBlue}>Morris</span>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.evidencePanel} aria-labelledby="evidence-title">
          <p className={styles.evidenceLabel}>DOSSIER DE DÉCISION</p>
          <h2 id="evidence-title" className={styles.evidenceTitle}>
            {decision.title}
          </h2>
          <p className={styles.evidenceDesc}>{decision.description}</p>
          <EvidenceList items={evidenceItems} />
        </section>

        <section
          className={styles.decisionPanel}
          aria-labelledby="morris-decision-title"
        >
          <p className={styles.morrisLabel}>Décision Morris — autorité humaine</p>
          <h2 id="morris-decision-title" className={styles.decisionTitle}>
            Votre décision
          </h2>
          <p className={styles.decisionHint}>
            Aucune action n&apos;est déclenchée avant confirmation.
          </p>

          {options.map((option) => (
            <button
              key={option.verdict}
              type="button"
              className={
                selected === option.verdict
                  ? styles.optionSelected
                  : styles.option
              }
              onClick={() => setSelected(option.verdict)}
              aria-pressed={selected === option.verdict}
            >
              <StatusPill tone={option.tone}>{option.pill}</StatusPill>
              <p className={styles.optionTitle}>{option.title}</p>
              <p className={styles.optionSub}>{option.subtitle}</p>
            </button>
          ))}

          <div className={styles.confirmBox}>
            <p className={styles.confirmLabel}>CONFIRMATION RENFORCÉE</p>
            <p className={styles.confirmText}>
              Portée : {decision.scope}
            </p>
          </div>

          <CtaButton
            simulated
            disabled={!selected}
            title={
              selected
                ? "Simulation — aucune décision Morris réelle"
                : "Sélectionnez une option"
            }
          >
            Confirmer la décision
          </CtaButton>
          <p className={styles.simulatedNote}>
            Simulation P0 — aucun effet sur Git, Cursor ou la trajectoire.
          </p>
        </section>
      </div>
    </>
  );
}

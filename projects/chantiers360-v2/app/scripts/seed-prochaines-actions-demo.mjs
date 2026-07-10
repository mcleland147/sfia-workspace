/**
 * Jeu de données démo — aligné frame Figma P2 « 05 — Prochaines actions / nominal ».
 * Usage : npm run db:seed:prochaines-demo
 * Cible : DATABASE_URL (défaut = base test Docker port 5433).
 */
import pg from "pg";

const connectionString =
  process.env.DATABASE_URL ??
  "postgresql://postgres:postgres@localhost:5433/chantiers360_v2_test";

const DEMO = [
  {
    title: "Rénovation salle de bain",
    client: "Client Démo Retard",
    address: "12 rue des Bains, Lyon",
    status: "En retard",
    tache: null,
    reserve: null,
    upcomingMilestone: null,
    plannedEndDate: null,
    nextInterventionDate: null,
  },
  {
    title: "Villa Leblanc",
    client: "Famille Leblanc",
    address: "45 chemin des Oliviers, Nice",
    status: "En cours",
    tache: { label: "Poser carrelage sol", status: "À faire" },
    reserve: null,
    upcomingMilestone: null,
    nextInterventionDate: null,
  },
  {
    title: "Appartement Dumont",
    client: "M. Dumont",
    address: "8 avenue Victor Hugo, Paris",
    status: "En cours",
    tache: null,
    reserve: { description: "Fuite robinet cuisine voisine", status: "Ouverte" },
    upcomingMilestone: null,
    nextInterventionDate: null,
  },
  {
    title: "Maison Martin",
    client: "M. et Mme Martin",
    address: "3 impasse des Tilleuls, Bordeaux",
    status: "En cours",
    tache: null,
    reserve: null,
    upcomingMilestone: "Pose carrelage prévue",
    plannedEndDate: "2026-08-05",
    nextInterventionDate: null,
  },
];

async function main() {
  const pool = new pg.Pool({ connectionString });

  try {
    await pool.query("TRUNCATE TABLE chantiers RESTART IDENTITY CASCADE");

    for (const row of DEMO) {
      const { rows } = await pool.query(
        `INSERT INTO chantiers (
          title, client, address, status,
          upcoming_milestone, next_intervention_date, planned_end_date
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id`,
        [
          row.title,
          row.client,
          row.address,
          row.status,
          row.upcomingMilestone,
          row.nextInterventionDate,
          row.plannedEndDate ?? null,
        ]
      );

      const chantierId = rows[0].id;

      if (row.tache) {
        await pool.query(
          `INSERT INTO taches (chantier_id, label, status) VALUES ($1, $2, $3)`,
          [chantierId, row.tache.label, row.tache.status]
        );
      }

      if (row.reserve) {
        await pool.query(
          `INSERT INTO reserves (chantier_id, description, status) VALUES ($1, $2, $3)`,
          [chantierId, row.reserve.description, row.reserve.status]
        );
      }
    }

    const { rows: counts } = await pool.query(`
      SELECT
        (SELECT COUNT(*)::int FROM chantiers) AS chantiers,
        (SELECT COUNT(*)::int FROM taches) AS taches,
        (SELECT COUNT(*)::int FROM reserves) AS reserves
    `);

    console.log("✅ Jeu de données démo chargé (frame Figma P2 nominal)");
    console.log(`   Base : ${connectionString.replace(/:[^:@]+@/, ":***@")}`);
    console.log(`   Chantiers : ${counts[0].chantiers} · Tâches : ${counts[0].taches} · Réserves : ${counts[0].reserves}`);
    console.log("   → http://127.0.0.1:3000/prochaines-actions");
    console.log("");
    console.log("   Lignes attendues (dérivées) :");
    console.log("   · Retard — Rénovation salle de bain");
    console.log("   · Tâche — Villa Leblanc — Poser carrelage sol");
    console.log("   · Réserve — Appartement Dumont — Fuite robinet cuisine voisine");
    console.log("   · Jalon — Maison Martin — Pose carrelage prévue");
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("❌ Échec seed démo :", error.message);
  process.exit(1);
});

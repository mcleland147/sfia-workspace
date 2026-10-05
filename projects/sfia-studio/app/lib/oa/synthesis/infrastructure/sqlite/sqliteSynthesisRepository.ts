import type { ProductSqliteHandle } from "@/lib/oa/project";
import { SynthesisDomainError } from "../../domain/errors";
import { validateProductSynthesisShape } from "../../domain/invariants";
import type { ProductSynthesisProjection } from "../../domain/types";
import type { SynthesisRepositoryPort } from "../../ports/synthesisRepositoryPort";
import { buildSynthesisSearchText } from "../../application/buildProductSynthesis";

type SynthesisRow = {
  synthesis_id: string;
  project_id: string;
  cycle_instance_id: string | null;
  status: string;
  source_fingerprint: string;
  version: number;
  generated_at: string;
  payload_json: string;
  search_text: string;
};

function cloneSynthesis(
  synthesis: ProductSynthesisProjection,
): ProductSynthesisProjection {
  return structuredClone(synthesis);
}

function parseRow(row: SynthesisRow): ProductSynthesisProjection {
  return cloneSynthesis(JSON.parse(row.payload_json) as ProductSynthesisProjection);
}

/**
 * Durable Product-derived Synthesis repository on Product SQLite (M9).
 * NON-AUTHORITATIVE — NOT Truth C.
 */
export class SqliteSynthesisRepository implements SynthesisRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(
    synthesisId: string,
  ): Promise<ProductSynthesisProjection | null> {
    const row = this.store.db
      .prepare(
        `SELECT synthesis_id, project_id, cycle_instance_id, status,
                source_fingerprint, version, generated_at, payload_json, search_text
         FROM oa_syntheses WHERE synthesis_id = ?`,
      )
      .get(synthesisId) as SynthesisRow | undefined;
    if (!row) return null;
    return parseRow(row);
  }

  async findByFingerprint(
    projectId: string,
    fingerprint: string,
  ): Promise<ProductSynthesisProjection | null> {
    const row = this.store.db
      .prepare(
        `SELECT synthesis_id, project_id, cycle_instance_id, status,
                source_fingerprint, version, generated_at, payload_json, search_text
         FROM oa_syntheses
         WHERE project_id = ? AND source_fingerprint = ?
         ORDER BY CASE status WHEN 'current' THEN 0 ELSE 1 END, generated_at DESC
         LIMIT 1`,
      )
      .get(projectId, fingerprint) as SynthesisRow | undefined;
    if (!row) return null;
    return parseRow(row);
  }

  async findCurrentByClaimEvaluationId(
    projectId: string,
    claimEvaluationId: string,
  ): Promise<ProductSynthesisProjection | null> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_syntheses
         WHERE project_id = ? AND status = 'current'
         ORDER BY generated_at DESC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    for (const row of rows) {
      const synthesis = cloneSynthesis(
        JSON.parse(row.payload_json) as ProductSynthesisProjection,
      );
      if (synthesis.sourceBindings.claimEvaluationId === claimEvaluationId) {
        return synthesis;
      }
    }
    return null;
  }

  async listByProject(
    projectId: string,
  ): Promise<ProductSynthesisProjection[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_syntheses
         WHERE project_id = ?
         ORDER BY generated_at ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneSynthesis(JSON.parse(row.payload_json) as ProductSynthesisProjection),
    );
  }

  async searchByProject(
    projectId: string,
    query: string,
  ): Promise<ProductSynthesisProjection[]> {
    const trimmed = query.trim();
    if (!trimmed) return [];
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_syntheses
         WHERE project_id = ? AND search_text LIKE ? ESCAPE '\\'
         ORDER BY generated_at DESC`,
      )
      .all(projectId, `%${escapeLike(trimmed.toLowerCase())}%`) as Array<{
      payload_json: string;
    }>;
    return rows.map((row) =>
      cloneSynthesis(JSON.parse(row.payload_json) as ProductSynthesisProjection),
    );
  }

  async create(synthesis: ProductSynthesisProjection): Promise<void> {
    const shape = validateProductSynthesisShape(synthesis);
    if (shape) {
      throw new SynthesisDomainError(shape.detailCode, shape.reason);
    }
    const existing = await this.findById(synthesis.synthesisId);
    if (existing) {
      throw new SynthesisDomainError(
        "SYNTHESIS_ALREADY_EXISTS",
        "synthesis_id_taken",
      );
    }
    const payload = JSON.stringify(cloneSynthesis(synthesis));
    const searchText = buildSynthesisSearchText(synthesis);
    this.store.db
      .prepare(
        `INSERT INTO oa_syntheses(
           synthesis_id, project_id, cycle_instance_id, status,
           source_fingerprint, version, generated_at, payload_json, search_text
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        synthesis.synthesisId,
        synthesis.projectId,
        synthesis.cycleInstanceId,
        synthesis.status,
        synthesis.sourceFingerprint,
        synthesis.version,
        synthesis.generatedAt,
        payload,
        searchText,
      );
  }

  async update(synthesis: ProductSynthesisProjection): Promise<void> {
    const shape = validateProductSynthesisShape(synthesis);
    if (shape) {
      throw new SynthesisDomainError(shape.detailCode, shape.reason);
    }
    const payload = JSON.stringify(cloneSynthesis(synthesis));
    const searchText = buildSynthesisSearchText(synthesis);
    const result = this.store.db
      .prepare(
        `UPDATE oa_syntheses SET
           project_id = ?,
           cycle_instance_id = ?,
           status = ?,
           source_fingerprint = ?,
           version = ?,
           generated_at = ?,
           payload_json = ?,
           search_text = ?
         WHERE synthesis_id = ?`,
      )
      .run(
        synthesis.projectId,
        synthesis.cycleInstanceId,
        synthesis.status,
        synthesis.sourceFingerprint,
        synthesis.version,
        synthesis.generatedAt,
        payload,
        searchText,
        synthesis.synthesisId,
      );
    if (Number(result.changes) !== 1) {
      throw new SynthesisDomainError(
        "SYNTHESIS_NOT_FOUND",
        "update_missing",
      );
    }
  }

  async deleteAllByProject(projectId: string): Promise<void> {
    this.store.db
      .prepare(`DELETE FROM oa_syntheses WHERE project_id = ?`)
      .run(projectId);
  }

  async softSupersede(
    synthesisId: string,
  ): Promise<ProductSynthesisProjection> {
    const current = await this.findById(synthesisId);
    if (!current) {
      throw new SynthesisDomainError(
        "SYNTHESIS_NOT_FOUND",
        "soft_supersede_missing",
      );
    }
    const superseded: ProductSynthesisProjection = {
      ...current,
      status: "superseded",
    };
    await this.update(superseded);
    return superseded;
  }
}

function escapeLike(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/%/g, "\\%")
    .replace(/_/g, "\\_");
}

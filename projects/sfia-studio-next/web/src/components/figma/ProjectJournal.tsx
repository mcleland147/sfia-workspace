"use client";

type Subject = {
  id: string;
  title: string;
  status: string;
  originatedFromSubjectId: string | null;
};
type Acquis = {
  id: string;
  kind: string;
  statement: string;
  status: string;
  subjectId: string | null;
};
type OpenPoint = { id: string; statement: string; status: string; subjectId: string | null };

export function ProjectJournal(props: {
  subjects: Subject[];
  acquis: Acquis[];
  openPoints: OpenPoint[];
  frameId?: string;
  onBackToThread?: () => void;
  onRenameSubject?: (id: string, title: string) => void;
  splitSlot?: React.ReactNode;
}) {
  const current = props.acquis.filter((a) => a.status === "CURRENT");
  const open = props.openPoints.filter((o) => o.status === "OPEN");
  const emptyAll = props.subjects.length === 0 && current.length === 0 && open.length === 0;

  return (
    <div className="space-y-4" data-figma-frame={props.frameId ?? "94:515"} data-testid="project-journal">
      <div className="fig-section-head">
        <div>
          <p className="fig-kicker">Journal</p>
          <h2 className="fig-section-title">Sujets, acquis et points ouverts</h2>
          <p className="fig-hero-sub !mt-1">
            Consultation capitalisée — aucune HumanDecision ici. Les décisions opposables sont dans
            Pilotage (D6).
          </p>
        </div>
        {props.onBackToThread ? (
          <button type="button" className="btn secondary" onClick={props.onBackToThread}>
            Retour au fil
          </button>
        ) : null}
      </div>

      {emptyAll ? (
        <div className="fig-two-col">
          <section className="fig-panel space-y-3" data-testid="journal-empty-structure">
            <h3 className="fig-panel-title">Structure du journal</h3>
            <div className="fig-empty-list">
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Sujets</div>
                  <div className="muted text-xs">Aucun sujet capitalisé pour l&apos;instant</div>
                </div>
                <span className="fig-tag fig-tag-muted">0</span>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Acquis courants</div>
                  <div className="muted text-xs">Apparaitront après capitalisation confirmée</div>
                </div>
                <span className="fig-tag fig-tag-muted">0</span>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Points ouverts</div>
                  <div className="muted text-xs">À clarifier dans le fil Nora</div>
                </div>
                <span className="fig-tag fig-tag-muted">0</span>
              </div>
            </div>
          </section>
          <section className="fig-panel space-y-2" data-figma-frame="129:72">
            <h3 className="fig-panel-title">Décisions &amp; restrictions</h3>
            <p className="text-sm muted">
              Aucune décision D6 affichée dans le journal. Ouvrez Pilotage pour les HumanDecision
              opposables.
            </p>
            <p className="text-xs muted">Sources Git · non disponible (ML4 hors périmètre)</p>
          </section>
        </div>
      ) : (
        <div className="fig-two-col">
          <section className="fig-panel space-y-3">
            <div className="fig-section-head">
              <h3 className="fig-panel-title !mb-0">Sujets</h3>
              <span className="fig-tag fig-tag-muted">{props.subjects.length}</span>
            </div>
            {props.subjects.length === 0 ? (
              <p className="text-sm muted">Aucun sujet.</p>
            ) : (
              props.subjects.map((s) => (
                <div key={s.id} className="fig-msg space-y-2">
                  <div className="flex flex-wrap gap-2 items-start justify-between">
                    <div>
                      <div className="font-medium text-sm">{s.title}</div>
                      <div className="text-xs muted">
                        {s.status}
                        {s.originatedFromSubjectId ? ` · de ${s.originatedFromSubjectId}` : ""}
                      </div>
                    </div>
                    {props.onRenameSubject ? (
                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => {
                          const t = window.prompt("Nouveau titre", s.title);
                          if (t) props.onRenameSubject?.(s.id, t);
                        }}
                      >
                        Renommer
                      </button>
                    ) : null}
                  </div>
                </div>
              ))
            )}
            {props.splitSlot}
          </section>
          <section className="space-y-3">
            <div className="fig-panel space-y-2">
              <div className="fig-section-head">
                <h3 className="fig-panel-title !mb-0">Acquis courants</h3>
                <span className="fig-tag fig-tag-muted">{current.length}</span>
              </div>
              {current.length === 0 ? (
                <p className="text-sm muted">Aucun acquis CURRENT.</p>
              ) : (
                current.map((a) => (
                  <div key={a.id} className="fig-msg text-sm">
                    <span className="fig-tag fig-tag-muted mr-2">{a.kind}</span>
                    {a.statement}
                  </div>
                ))
              )}
            </div>
            <div className="fig-panel space-y-2" data-figma-frame="129:72">
              <div className="fig-section-head">
                <h3 className="fig-panel-title !mb-0">Points ouverts</h3>
                <span className="fig-tag fig-tag-warn">{open.length}</span>
              </div>
              {open.length === 0 ? (
                <p className="text-sm muted">Aucun point ouvert.</p>
              ) : (
                open.map((o) => (
                  <div key={o.id} className="fig-msg text-sm">
                    {o.statement}
                  </div>
                ))
              )}
              <p className="text-xs muted pt-1">
                Décisions D6 · consulter Pilotage — affichage journal non mutateur.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

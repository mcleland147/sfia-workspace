import { useCallback, useMemo, useState } from "react";
import {
  closeDemoRequest,
  completeDemoIntervention,
  getRequestById,
  planDemoIntervention,
  qualifyDemoRequest,
  resetDemoData,
} from "../data/requestsRepository";
import { InterventionReadonly } from "../ui/intervention/InterventionReadonly";
import { QualificationReadonly } from "../ui/qualification/QualificationReadonly";
import { PlanningReadonly } from "../ui/planning/PlanningReadonly";
import { ReportReadonly } from "../ui/report/ReportReadonly";
import { DemoResetControl } from "../ui/requests/DemoResetControl";
import { RequestDetail } from "../ui/requests/RequestDetail";
import { RequestsList } from "../ui/requests/RequestsList";
import { WorkflowActionControl } from "../ui/workflow/WorkflowActionControl";
import { WorkflowJournalReadonly } from "../ui/workflow/WorkflowJournalReadonly";
import "./App.css";

const DEMO_REQUEST_ID = "SAV-DEMO-001";

export function App() {
  const [dataVersion, setDataVersion] = useState(0);
  const [lastResetLabel, setLastResetLabel] = useState<string | undefined>();
  const [lastActionMessage, setLastActionMessage] = useState<
    string | undefined
  >();

  const request = useMemo(
    () => getRequestById(DEMO_REQUEST_ID),
    [dataVersion],
  );

  const handleDemoReset = useCallback(() => {
    resetDemoData();
    setDataVersion((version) => version + 1);
    setLastActionMessage(undefined);
    setLastResetLabel(
      new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    );
  }, []);

  const handleWorkflowAction = useCallback(() => {
    if (!request) {
      return;
    }

    let updated;
    switch (request.status) {
      case "STAT-01":
        updated = qualifyDemoRequest(DEMO_REQUEST_ID);
        break;
      case "STAT-02":
        updated = planDemoIntervention(DEMO_REQUEST_ID);
        break;
      case "STAT-03":
        updated = completeDemoIntervention(DEMO_REQUEST_ID);
        break;
      case "STAT-04":
        updated = closeDemoRequest(DEMO_REQUEST_ID);
        break;
      default:
        return;
    }

    if (updated) {
      setDataVersion((version) => version + 1);
      setLastActionMessage(
        `Action fictive enregistrée : ${updated.status}.`,
      );
    }
  }, [request]);

  return (
    <main className="app-shell">
      <DemoResetControl
        onReset={handleDemoReset}
        lastResetLabel={lastResetLabel}
      />
      <WorkflowActionControl
        request={request}
        onAction={handleWorkflowAction}
        lastActionMessage={lastActionMessage}
      />
      <RequestsList dataVersion={dataVersion} />
      <RequestDetail
        requestId={DEMO_REQUEST_ID}
        dataVersion={dataVersion}
      />
      <QualificationReadonly
        requestId={DEMO_REQUEST_ID}
        dataVersion={dataVersion}
      />
      <PlanningReadonly
        requestId={DEMO_REQUEST_ID}
        dataVersion={dataVersion}
      />
      <InterventionReadonly
        requestId={DEMO_REQUEST_ID}
        dataVersion={dataVersion}
      />
      <ReportReadonly
        requestId={DEMO_REQUEST_ID}
        dataVersion={dataVersion}
      />
      <WorkflowJournalReadonly
        requestId={DEMO_REQUEST_ID}
        dataVersion={dataVersion}
      />
    </main>
  );
}

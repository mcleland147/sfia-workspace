import { useCallback, useState } from "react";
import { resetDemoData } from "../data/requestsRepository";
import { InterventionReadonly } from "../ui/intervention/InterventionReadonly";
import { QualificationReadonly } from "../ui/qualification/QualificationReadonly";
import { PlanningReadonly } from "../ui/planning/PlanningReadonly";
import { ReportReadonly } from "../ui/report/ReportReadonly";
import { DemoResetControl } from "../ui/requests/DemoResetControl";
import { RequestDetail } from "../ui/requests/RequestDetail";
import { RequestsList } from "../ui/requests/RequestsList";
import "./App.css";

const DEMO_REQUEST_ID = "SAV-DEMO-001";

export function App() {
  const [dataVersion, setDataVersion] = useState(0);
  const [lastResetLabel, setLastResetLabel] = useState<string | undefined>();

  const handleDemoReset = useCallback(() => {
    resetDemoData();
    setDataVersion((version) => version + 1);
    setLastResetLabel(
      new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    );
  }, []);

  return (
    <main className="app-shell">
      <DemoResetControl
        onReset={handleDemoReset}
        lastResetLabel={lastResetLabel}
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
    </main>
  );
}

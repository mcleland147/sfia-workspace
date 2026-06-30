import { RequestDetail } from "../ui/requests/RequestDetail";
import { RequestsList } from "../ui/requests/RequestsList";
import "./App.css";

const DEMO_REQUEST_ID = "SAV-DEMO-001";

export function App() {
  return (
    <main className="app-shell">
      <RequestsList />
      <RequestDetail requestId={DEMO_REQUEST_ID} />
    </main>
  );
}

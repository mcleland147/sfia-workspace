import type { DemoUser } from "../../domain/demoUsers";
import { simulatedRoleLabels } from "../../domain/simulatedRoles";
import "./SimulatedRoleControl.css";

type DemoUserControlProps = {
  users: DemoUser[];
  currentUser: DemoUser;
  onUserChange: (userId: string) => void;
};

export function DemoUserControl({
  users,
  currentUser,
  onUserChange,
}: DemoUserControlProps) {
  return (
    <section
      className="simulated-role-control"
      aria-label="Utilisateur de démonstration"
    >
      <p className="simulated-role-control__active" role="status">
        Utilisateur démo : <strong>{currentUser.displayName}</strong> —{" "}
        {currentUser.team}
        <br />
        Rôle : <strong>{simulatedRoleLabels[currentUser.role]}</strong>
      </p>
      <p className="simulated-role-control__notice">
        Simulation — aucune authentification réelle
      </p>
      <label className="simulated-role-control__label" htmlFor="demo-user-select">
        Changer d&apos;utilisateur
        <select
          id="demo-user-select"
          className="simulated-role-control__select"
          value={currentUser.id}
          onChange={(event) => {
            onUserChange(event.target.value);
          }}
        >
          {users.map((demoUser) => (
            <option key={demoUser.id} value={demoUser.id}>
              {demoUser.displayName} — {simulatedRoleLabels[demoUser.role]}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

import { DEMO_USERS, type DemoUser } from "../../domain/demoUsers";
import { simulatedRoleLabels } from "../../domain/simulatedRoles";
import "./SimulatedRoleControl.css";

type DemoUserControlProps = {
  user: DemoUser;
  onUserChange: (userId: string) => void;
};

export function DemoUserControl({ user, onUserChange }: DemoUserControlProps) {
  return (
    <section
      className="simulated-role-control"
      aria-label="Utilisateur de démonstration"
    >
      <p className="simulated-role-control__active" role="status">
        Utilisateur démo : <strong>{user.displayName}</strong> — {user.team}
        <br />
        Rôle : <strong>{simulatedRoleLabels[user.role]}</strong>
      </p>
      <p className="simulated-role-control__notice">
        Simulation — aucune authentification réelle
      </p>
      <label className="simulated-role-control__label" htmlFor="demo-user-select">
        Changer d&apos;utilisateur
        <select
          id="demo-user-select"
          className="simulated-role-control__select"
          value={user.id}
          onChange={(event) => {
            onUserChange(event.target.value);
          }}
        >
          {DEMO_USERS.map((demoUser) => (
            <option key={demoUser.id} value={demoUser.id}>
              {demoUser.displayName} — {simulatedRoleLabels[demoUser.role]}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

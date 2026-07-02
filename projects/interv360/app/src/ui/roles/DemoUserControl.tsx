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
  const roleLabel = simulatedRoleLabels[currentUser.role];

  return (
    <section className="simulated-role-control" aria-label="Profil actif">
      <h2 className="simulated-role-control__title">Profil actif</h2>
      <p className="simulated-role-control__active" role="status">
        Vous consultez Interv360 avec le rôle : <strong>{roleLabel}</strong>
        <br />
        <span className="simulated-role-control__identity">
          {currentUser.displayName} — {currentUser.team}
        </span>
      </p>
      <p className="simulated-role-control__notice">
        Ce profil pilote les actions disponibles dans la démonstration MVP.
        Aucune authentification réelle.
      </p>
      <label className="simulated-role-control__label" htmlFor="demo-user-select">
        Changer de profil
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

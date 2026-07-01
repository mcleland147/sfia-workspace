import type { SimulatedRole } from "../../domain/simulatedRoles";
import {
  simulatedRoleLabels,
  simulatedRoles,
} from "../../domain/simulatedRoles";
import "./SimulatedRoleControl.css";

type SimulatedRoleControlProps = {
  role: SimulatedRole;
  onRoleChange: (role: SimulatedRole) => void;
};

export function SimulatedRoleControl({
  role,
  onRoleChange,
}: SimulatedRoleControlProps) {
  return (
    <section
      className="simulated-role-control"
      aria-label="Simulation de rôle"
    >
      <p className="simulated-role-control__active" role="status">
        Rôle simulé : <strong>{simulatedRoleLabels[role]}</strong>
      </p>
      <p className="simulated-role-control__notice">
        Simulation — aucune authentification réelle
      </p>
      <label className="simulated-role-control__label">
        Changer de rôle
        <select
          className="simulated-role-control__select"
          value={role}
          onChange={(event) => {
            onRoleChange(event.target.value as SimulatedRole);
          }}
        >
          {simulatedRoles.map((availableRole) => (
            <option key={availableRole} value={availableRole}>
              {simulatedRoleLabels[availableRole]}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

import type { ComponentProps } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import {
  getCriticalityBadgeClass,
  getCriticalityLabel,
  getPriorityBadgeClass,
  getPriorityLabel,
} from "./requestIndicators";
import "./RequestBadges.css";

interface RequestBadgesProps {
  request: Pick<DemoRequest, "priority" | "criticality">;
}

export function RequestBadges({ request }: RequestBadgesProps) {
  return (
    <div className="request-badges">
      <span className={getPriorityBadgeClass(request.priority)}>
        Priorité {getPriorityLabel(request.priority)}
      </span>
      <span className={getCriticalityBadgeClass(request.criticality)}>
        Criticité {getCriticalityLabel(request.criticality)}
      </span>
    </div>
  );
}

export type RequestBadgesPropsType = ComponentProps<typeof RequestBadges>;

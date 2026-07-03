import type { ComponentProps } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import {
  getChannelBadgeClass,
  getCriticalityBadgeClass,
  getCriticalityLabel,
  getIndicatorBadgeClass,
  getPriorityBadgeClass,
  getPriorityLabel,
  getStatusBadgeClass,
  getStatusBadgeLabel,
} from "./requestIndicators";
import { getUiIndicator } from "../dashboard/requestDashboardStats";
import "./RequestBadges.css";

interface RequestBadgesProps {
  request: Pick<
    DemoRequest,
    "priority" | "criticality" | "status" | "channelLabel"
  >;
  compact?: boolean;
  showStatus?: boolean;
  showChannel?: boolean;
  showCriticality?: boolean;
  showIndicators?: boolean;
}

export function RequestBadges({
  request,
  compact = false,
  showStatus = true,
  showChannel = !compact,
  showCriticality = !compact,
  showIndicators = true,
}: RequestBadgesProps) {
  const indicator = showIndicators ? getUiIndicator(request as DemoRequest) : null;

  return (
    <div className={compact ? "request-badges request-badges--compact" : "request-badges"}>
      {showStatus ? (
        <span className={getStatusBadgeClass(request.status)}>
          {getStatusBadgeLabel(request.status)}
        </span>
      ) : null}
      <span className={getPriorityBadgeClass(request.priority)}>
        Priorité {getPriorityLabel(request.priority)}
      </span>
      {showCriticality ? (
        <span className={getCriticalityBadgeClass(request.criticality)}>
          Criticité {getCriticalityLabel(request.criticality)}
        </span>
      ) : null}
      {showChannel && request.channelLabel ? (
        <span className={getChannelBadgeClass()}>{request.channelLabel}</span>
      ) : null}
      {indicator ? (
        <span className={getIndicatorBadgeClass(indicator)}>
          {indicator === "retard" ? "Retard" : "Anomalie"}
        </span>
      ) : null}
    </div>
  );
}

export type RequestBadgesPropsType = ComponentProps<typeof RequestBadges>;

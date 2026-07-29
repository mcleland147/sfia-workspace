export type LocalProjectCreationAuditEventType =
  | "LOCAL_PROJECT_CREATION_REQUESTED"
  | "DOCTRINE_RESOLVED"
  | "PROJECT_CREATED"
  | "LPS_INITIALIZED"
  | "LOCAL_PROJECT_CREATION_FAILED";

export interface LocalProjectCreationAuditEvent {
  readonly event: LocalProjectCreationAuditEventType;
  readonly timestamp: string;
  readonly correlationId: string;
  readonly idempotencyKey: string;
  readonly projectId?: string;
  readonly lpsVersion?: number;
  readonly doctrinePackageId?: string;
  readonly doctrineStatus?: "resolved";
  readonly result: "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
  readonly errorCode?: string;
}

export interface LocalProjectCreationAuditPort {
  append(event: LocalProjectCreationAuditEvent): void;
}

export class NoOpLocalProjectCreationAudit
  implements LocalProjectCreationAuditPort
{
  append(): void {
    // Deliberately empty: audit is optional and never product persistence.
  }
}

export class MemoryLocalProjectCreationAudit
  implements LocalProjectCreationAuditPort
{
  readonly events: LocalProjectCreationAuditEvent[] = [];

  append(event: LocalProjectCreationAuditEvent): void {
    this.events.push(Object.freeze(structuredClone(event)));
  }
}

export class FailingLocalProjectCreationAudit
  implements LocalProjectCreationAuditPort
{
  append(): void {
    throw new Error("local_audit_unavailable");
  }
}

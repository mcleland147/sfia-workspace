import type { ClockPort } from "../ports/clockPort";

export class SystemClock implements ClockPort {
  nowIso(): string {
    return new Date().toISOString();
  }
}

export class FixedClock implements ClockPort {
  constructor(private readonly iso: string) {}
  nowIso(): string {
    return this.iso;
  }
}

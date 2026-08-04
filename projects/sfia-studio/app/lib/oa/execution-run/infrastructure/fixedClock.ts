import type { ClockPort } from "../ports/clockPort";

export class FixedClock implements ClockPort {
  constructor(private readonly iso: string) {}
  nowIso(): string {
    return this.iso;
  }
}

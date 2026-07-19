import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusPill } from "@/components/ui/StatusPill";

describe("StatusPill", () => {
  it("renders label with tone class", () => {
    render(<StatusPill tone="blueFlush">main · clean</StatusPill>);
    expect(screen.getByText("main · clean")).toBeInTheDocument();
  });
});

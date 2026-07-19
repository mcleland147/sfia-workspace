import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GateList } from "@/components/ui/GateList";
import { gates } from "@/fixtures/gates";

describe("GateList", () => {
  it("lists gate labels from fixtures", () => {
    render(<GateList gates={gates} />);
    expect(screen.getByRole("list", { name: "Gates à arbitrer" })).toBeInTheDocument();
    expect(screen.getByText("Choix option UX")).toBeInTheDocument();
    expect(screen.getByText("GO versionnement")).toBeInTheDocument();
  });
});

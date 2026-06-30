import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../app/App";

describe("App smoke", () => {
  it("renders the foundation title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /INC-01 App Foundation/i }),
    ).toBeInTheDocument();
  });
});

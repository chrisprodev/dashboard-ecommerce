import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("Should render list of 11 menu links", () => {
    render(<Sidebar />);
    const list = screen.getAllByRole("listitem");
    expect(list.length).toBe(11);
  });
});

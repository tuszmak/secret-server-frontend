import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";
import Home from "@/pages";
import { describe } from "node:test";
import React, { ReactElement } from "react";

beforeEach(()=>{
  render(<Home />);
})
describe("Render", () => {
  it("Should have a heading", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
  it("Should have a heading with 'Hello there in it'", () => {
    const title = screen.getByText("Hello there");
    expect(title).toBeInTheDocument();
  });
  //This test is temporary, as is the sample text.
  it("Should have a paragraph with sample text in it", () => {
    const paragraph = screen.getByText(/retrieve/i);
    expect(paragraph).toBeInTheDocument();
  });
  it("Should have a button, with create secret text", () => {
    const createButton = screen.getByText("Create secret");
    expect(createButton).toBeInTheDocument();
  });
  it('Should have a button, with "view secret" text', () => {
    const viewButton = screen.getByText("View secret");
    expect(viewButton).toBeInTheDocument();
  });
});


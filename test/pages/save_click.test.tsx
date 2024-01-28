import Save from "@/pages/save";
import {
  getByRole,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";
import { describe } from "node:test";

describe("When there's a link", () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve("foo"),
        ok: true,
      })
    ) as jest.Mock;
    render(<Save />);
    await userEvent.type(screen.getByText("What is your secret?"), "foo");
    await userEvent.type(
      screen.getByText("How many visits do you allow?"),
      "5"
    );
    await userEvent.type(
      screen.getByText("When should it expire naturally?"),
      "2022-01-01T12:00"
    );
    await userEvent.click(screen.getByTestId("submitButton"));
  });
  it("Should have a Back button", async () => {
    const button = screen.getByText("Back");
    await waitFor(() => expect(button).toBeInTheDocument());
  });
  it("Should have a card, with the link in it", async () => {
    const card = screen.getByText("foo");
    await waitFor(() => expect(card).toBeInTheDocument());
  });
});

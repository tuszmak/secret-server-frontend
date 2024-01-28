import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";
import GetSecret from "@/pages/getSecret";
import { describe } from "node:test";

beforeEach(() => {
  render(<GetSecret />);
  global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("foo"),
        
        ok: true,
      })
    ) as jest.Mock;
});
describe("Render", () => {
  it('Should have a label with "Type your code here text', () => {
    const label = screen.getByText("Type your code here");
    expect(label).toBeInTheDocument();
  });
  it("Should have a required text input", () => {
    const input = screen.getByPlaceholderText("Type here");
    expect(input).toBeInTheDocument();
});
it("Should have a submit button", () => {
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
});
describe("Behavior", ()=>{
    it("Should test input value change", async()=>{
        const input : HTMLInputElement = screen.getByPlaceholderText("Type here");
        await userEvent.type(input, "foo");
        expect(input.value).toBe("foo")
    })
    it("Should test the button's onclick",async()=>{
        const input : HTMLInputElement = screen.getByPlaceholderText("Type here");
        await userEvent.type(input, "foo");
        const button = screen.getByText("Submit");
        await userEvent.click(button)
        expect(global.fetch).toHaveBeenCalled();
    })
})

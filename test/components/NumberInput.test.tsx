import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";
import NumberInput from "@/components/NumberInput";

const mockHandleChange = jest.fn();
beforeEach(()=>{
  render(<NumberInput handleChange={mockHandleChange} />);
})
describe("Render", () => {
    it("Should have a label", () => {
      const label = screen.getByTestId("number-label");
      expect(label).toBeInTheDocument();
    });
    it("Should have a span text in the label", () => {
      const span = screen.getByText("How many visits do you allow?");
      expect(span).toBeInTheDocument();
    });
    it("Should have a number input field", () => {
      const input = screen.getByTestId("number-input");
      expect(input).toBeInTheDocument();
    });
    it("Should have a placeholder", () => {
      const input = screen.getByTestId("number-input");
      expect(input).toBeInTheDocument();
  });
  it("Should have an input that is required", ()=>{
      const input = screen.getByTestId("number-input");
      expect(input).toBeRequired()
    })
    it("Should have an input that only accepts positive numbers", ()=>{
      const input : HTMLInputElement = screen.getByTestId("number-input");
      const minAttr = parseInt(input.getAttribute("min") || "")
      expect(minAttr).toBe(1)
    })
  });
  describe("Behavior", () => {
    it("Should be able to add date to date", async () => {
      const input : HTMLInputElement = screen.getByTestId("number-input");
      await userEvent.type(input, "420");
      expect(mockHandleChange).toHaveBeenCalled();
      expect(input.value).toBe("420")
    });
  });
  
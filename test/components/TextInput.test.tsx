import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";
import TextInput from "@/components/TextInput";
import { describe } from "node:test";

let handleChange = jest.fn()

beforeEach(()=>{
    render(<TextInput handleChange={handleChange} />)
})
describe("Render", ()=>{
    it('Should have a label with the text "What is your secret?',()=>{
        const label = screen.getByText("What is your secret?")
        expect(label).toBeInTheDocument()
    })
    it('Should have a required text input',()=>{
        const input : HTMLInputElement = screen.getByPlaceholderText("Type your secret here")
        expect(input).toBeInTheDocument()
        expect(input.type).toBe("text")
        expect(input.required).toBe(true)
    })
})
describe("Behavior", () => {
    it("Should store textInput", async()=>{
        const secretInput : HTMLInputElement = screen.getByPlaceholderText("Type your secret here");
        await userEvent.type(secretInput, "foo")
        expect(handleChange).toHaveBeenCalled()
    })
  });
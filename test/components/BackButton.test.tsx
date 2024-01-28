import BackButton from "@/components/BackButton"
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'

beforeEach(()=>{
    render(<BackButton />)
})
it('should have "Back" text', ()=>{
    const button = screen.getByText("Back")
    expect(button).toBeInTheDocument()
})

it("Should have a button", ()=>{
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()


})
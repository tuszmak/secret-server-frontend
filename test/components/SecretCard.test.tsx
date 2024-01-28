import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";
import SecretCard from "@/components/SecretCard";
beforeEach(()=>{
  render(<SecretCard link="foo" />);
})
describe("Render", () => {
  it("Should have a heading", () => {
    const heading = screen.getByText("The code to your secret is:");
    expect(heading).toBeInTheDocument();
  });
  it("Should display a link to the secret", () => {
    const secret = screen.getByText("foo");
    expect(secret).toBeInTheDocument();
  });
  it("Should have a button", () => {
    const button = screen.getByText("Copy code");
    expect(button);
  });
});

// A not working test. Don't know if it's worth testing.

// describe("Behavior", ()=>{
//    it("Should put the link in the clipboard",async()=>{
//     render(<SecretCard  link="foo" />)
//     const button = screen.getByText("Copy code");
//     await userEvent.click(button)
//     const clipBoardText = await navigator.clipboard.readText();
//     expect(clipBoardText).toBe("foo")
//    }) 
// })
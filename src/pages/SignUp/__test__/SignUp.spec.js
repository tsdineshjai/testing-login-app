import { render, screen } from "@testing-library/react";
import SignUp from "../SignUp";

describe("SignUp", () => {
	it("has a header", () => {
		render(<SignUp />);
		const headerElement = screen.getByRole("heading", { name: /sign up/i });
		expect(headerElement).toBeInTheDocument();
	});
});

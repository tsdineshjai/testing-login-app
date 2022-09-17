import { render, screen } from "@testing-library/react";
import SignUp from "../SignUp";

describe("SignUp", () => {
	describe("layout", () => {
		it("has a header", () => {
			render(<SignUp />);
			const headerElement = screen.getByRole("heading", { name: /sign up/i });
			expect(headerElement).toBeInTheDocument();
		});

		it("has a input for username", () => {
			render(<SignUp />);
			expect(screen.getByLabelText("User name")).toBeInTheDocument();
		});
		it("has a input for email", () => {
			render(<SignUp />);
			expect(screen.getByLabelText("email")).toBeInTheDocument();
		});
		it("has a input for password", () => {
			render(<SignUp />);
			expect(screen.getByLabelText("password")).toBeInTheDocument();
		});

		it("checking for a type attribute in password input", () => {
			render(<SignUp />);
			expect(screen.getByLabelText("password").type).toBe("password");
		});

		it("checking for a password repeat", () => {
			render(<SignUp />);
			expect(screen.getByLabelText("repeat password")).toBeInTheDocument();
		});

		it("checking for a sign up button and disabled property", () => {
			render(<SignUp />);
			const button = screen.getByRole("button", { name: "Sign Up" });
			expect(button).toBeInTheDocument();
			expect(button).toBeDisabled();
			expect(button.innerHTML).toBe("Sign Up");
		});
	});
});

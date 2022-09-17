import { render, screen } from "@testing-library/react";
import SignUp from "../SignUp";
import userEvent from "@testing-library/user-event";
import axios from "axios";

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

		it("checking the prescene of sign up button", () => {
			render(<SignUp />);
			const button = screen.getByRole("button", { name: "Sign Up" });
			expect(button).toBeInTheDocument();
			expect(button.innerHTML).toBe("Sign Up");
			expect(button).toBeDisabled();
		});
	});
});

describe("interaction with the form", () => {
	it("button gets enabled when password and password repeat are same", async () => {
		render(<SignUp />);

		const passwordInput = screen.getByLabelText("password");
		const passwordRepeatInput = screen.getByLabelText("repeat password");
		userEvent.type(passwordInput, "123");
		userEvent.type(passwordRepeatInput, "123");
		const passwordInputValue = await screen.findByLabelText("password");
		const passwordRepeatInputValue = await screen.findByLabelText(
			"repeat password"
		);
		expect(passwordInputValue.value).toBe(passwordRepeatInputValue.value);
		expect(screen.getByRole("button", { name: "Sign Up" })).toBeEnabled();
	});

	it("gonna send username, email, password information to the server on clicking a button", () => {
		render(<SignUp />);

		const username = screen.getByLabelText("User name");
		const email = screen.getByLabelText("email");
		const password = screen.getByLabelText("password");
		const passwordRepeat = screen.getByLabelText("repeat password");

		userEvent.type(username, "jai");
		userEvent.type(email, "jai@gmail.com");
		userEvent.type(password, "12345");
		userEvent.type(passwordRepeat, "12345");

		const button = screen.getByRole("button", { name: "Sign Up" });

		const mockFn = jest.fn();
		//creats a mock function

		axios.post = mockFn;
		//gonna mock axios post method

		userEvent.click(button);

		const firstMockCall = mockFn.mock.calls[0];
		//firstMockCall is actually making a mock axios post method call
		//axios post method required two parameters, url and body
		//using firstMockCall we can fill in the body information axios.post("/posts", body)

		const body = firstMockCall[1];
		expect(body).toEqual({
			username: "jai",
			email: "jai@gmail.com",
			password: "12345",
			repeatPassword: "12345",
		});
	});
});

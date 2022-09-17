import "./SignuUp.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SignUp = () => {
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
		repeatPassword: "",
	});
	const [disable, setDisable] = useState(true);
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const enableButton = () => {
		if (form.password && form.repeatPassword) {
			if (form.password === form.repeatPassword) {
				setDisable((prevState) => !prevState);
			} else if (form.password !== form.repeatPassword) {
				setDisable(true);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, email, password, repeatPassword } = form;
		axios.post("/api/1.0/users", { username, email, password, repeatPassword });
	};

	useEffect(() => {
		enableButton();
	}, [form.password, form.repeatPassword]);

	return (
		<form>
			<div className="form-container">
				<h3>Sign Up</h3>
				<label htmlFor="username">User name</label>
				<input
					type="text"
					id="username"
					value={form.username}
					name="username"
					onChange={handleChange}
				/>
				<label htmlFor="email">email</label>
				<input
					type="text"
					id="email"
					value={form.email}
					name="email"
					onChange={handleChange}
				/>
				<label htmlFor="password">password</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={form.password}
				/>
				<label htmlFor="repeat password">repeat password</label>
				<input
					type="password"
					id="repeat password"
					name="repeatPassword"
					value={form.repeatPassword}
					onChange={handleChange}
				/>
				<button onClick={handleSubmit} disabled={disable}>
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default SignUp;

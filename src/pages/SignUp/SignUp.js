const SignUp = () => {
	return (
		<div className="header">
			<h3>Sign Up</h3>
			<label htmlFor="username">User name</label>
			<input type="text" id="username" />
			<label htmlFor="email">email</label>
			<input type="text" id="email" />
			<label htmlFor="password">password</label>
			<input type="password" id="password" />
			<label htmlFor="repeat password">repeat password</label>
			<input type="password" id="repeat password" />
			<button disabled>Sign Up</button>
		</div>
	);
};

export default SignUp;

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
		</div>
	);
};

export default SignUp;

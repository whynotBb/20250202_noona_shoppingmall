import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
	const navigate = useNavigate();
	const loginUser = (e) => {
		e.preventDefault(); //form 태그는 submit 시 새로고침됨 -> 막기
		console.log("11");
		setAuthenticate(true);
		navigate("/");
	};
	return (
		<div className="login-bx">
			<h2>Log In</h2>
			<div className="bx">
				<form action="" onSubmit={(e) => loginUser(e)}>
					<input type="text" name="" id="" />
					<input type="password" name="" id="" />
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
	const [authenticate, setAuthenticate] = useState(false); // false : 미로그인
	useEffect(() => {
		console.log(authenticate);
	}, [authenticate]);

	return (
		<div>
			<Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
			<Routes>
				<Route path="/" element={<ProductAll />} />
				<Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
				<Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
			</Routes>
		</div>
	);
}

export default App;

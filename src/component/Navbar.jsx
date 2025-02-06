import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ authenticate, setSearch }) => {
	const navigate = useNavigate();
	const menuList = ["woman", "men", "kids", "home"];
	const goToLogin = () => {
		navigate("/login");
	};

	const [inputText, setInputText] = useState(); // search input 입력 값
	const onKeyDown = (e) => {
		e.key === "Enter" && setSearch(inputText);
	};
	return (
		<div>
			<div>
				<div className="login-button" onClick={goToLogin}>
					<FontAwesomeIcon icon={faUser} />
					<div>{authenticate ? "로그아웃" : "로그인"}</div>
				</div>
			</div>
			<Link to="/" className="nav-section">
				<FontAwesomeIcon icon={faCloud} />
			</Link>
			<div className="menu-area">
				<ul className="menu-list">
					{menuList.map((menu, idx) => (
						<li key={idx}>{menu}</li>
					))}
				</ul>
				<div className="search-bx">
					<FontAwesomeIcon icon={faSearch} />
					<input type="text" name="" id="" onChange={(e) => setInputText(e.target.value)} onKeyDown={onKeyDown} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

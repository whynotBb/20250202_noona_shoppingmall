import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ authenticate }) => {
	const navigate = useNavigate();
	const menuList = ["woman", "men", "kids", "home"];
	const goToLogin = () => {
		navigate("/login");
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
					<input type="text" name="" id="" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

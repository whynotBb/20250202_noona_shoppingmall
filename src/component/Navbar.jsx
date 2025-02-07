import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
	const navigate = useNavigate();
	const menuList = ["woman", "men", "kids", "home"];
	const goToLogin = () => {
		if (authenticate) {
			setAuthenticate(false);
			navigate("/");
		} else {
			navigate("/login");
		}
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			// input 의 value 를 가져와서 url 을 바꿔준다
			// onClick 을 따로 쓸 필요가 없음 onKeyDown 에서 가져온 e 값으로 value 가져올 수 있음
			const keyword = e.target.value;
			navigate(`/?q=${keyword}`);
		}
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
					<input type="text" name="" id="" onKeyDown={(e) => onKeyDown(e)} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

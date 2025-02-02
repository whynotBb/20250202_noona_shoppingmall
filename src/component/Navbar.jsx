import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = ["woman", "men", "kids", "home"];
  return (
    <div>
      <div>
        <Link to="/login" className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </Link>
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

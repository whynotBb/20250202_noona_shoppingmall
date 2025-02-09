import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const loginUser = (e) => {
    e.preventDefault(); //form 태그는 submit 시 새로고침됨 -> 막기
    console.log("11");
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };
  return (
    <div className="login-bx">
      <h2>Log In</h2>
      <div className="bx">
        <form action="" onSubmit={(e) => loginUser(e)}>
          <input type="text" name="" id="" onChange={(e) => setId(e.target.value)} />
          <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

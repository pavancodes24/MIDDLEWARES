import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginFailure, loginSuccess } from "../redux/auth/action";
import { Login } from "./Login";

export const LoginPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const handleLogin = ({ email, password }) => {
    //fake auth
    if (email === "admin" && password === "admin") {
      const action = loginSuccess("faketoken");
      dispatch(action);
    } else {
      const action = loginFailure("wrong credentials");
      dispatch(action);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};

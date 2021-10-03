import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authUser);
  const { user } = auth;

  const login = () => {
    dispatch(authActions.login());
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between ",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/post">
          <p
            style={{
              marginLeft: "20px",
            }}
          >
            Post
          </p>
        </Link>
      </div>
      <div>
        {user ? (
          <button
            onClick={logout}
            style={{
              padding: "10px 10px",
            }}
          >
            Log out
          </button>
        ) : (
          <button
            onClick={login}
            style={{
              padding: "10px 10px",
            }}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

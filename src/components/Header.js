import { Link } from "react-router-dom";

const Header = () => {
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
        <button
          style={{
            padding: "10px 10px",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;

import { useGameContext } from "../../Context/GameContext";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLoading, isLoggedIn, handleLogout } = useGameContext();

  if (isLoading) {
    
    return <div>Loading...</div>;
  }

  return (
    <div className="navbar">
      <div className="nav-menu">
        <div className="left-menu">
          <NavLink
            to="/leaderboard"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Leaderboard
          </NavLink>
        </div>
        <div className="right-menu">
          <NavLink
            to="/"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-link-btn">
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen

    if (isAuth) {
      logout();
      // if   logout

    } else {
      //  to login
      navigate("/login");
    }
  };
  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        border:'1px solid blue',
        gap: "10px",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          color:"black",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="" >
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <div data-cy="navbar-cart-items-count">
          CartItems: {cartItemsCount && `(${cartItemsCount})`}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;


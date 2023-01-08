import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../images/logo-social.png";
import Circle from "../../images/Circle.png";
import DropDown from "../../images/dropDown.png";
import Cart from "../../images/cart.jpg";
import { AddedToCart } from "../../context/index";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const history = useHistory();

  const handleLogOut = () => {
    history.push("/");
  };

  const handleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };
  const handleUserName = (name) => {
    name = name.slice(0, name.indexOf("@"));
    return name;
  };

  const handleInitialLetter = (name) => {
    name = name.slice(0, 1);
    return name.toUpperCase();
  };

  const { cartData } = useContext(AddedToCart);
  return (
    <nav className="navbar__nav">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="navbar__content">
        <Link to="/dashboard">Home</Link>
        <Link to="/addproduct">Add Product</Link>
      </div>
      <div className="navbar__cart">
        <div className="onlyCart">
          <img src={Cart} />
          <div className="cartCircle">
            <p>{cartData}</p>
          </div>
        </div>
      </div>
      <div className="navbar__profile">
        <div className="navbar__circle">
          {handleInitialLetter(localStorage.getItem("username"))}
        </div>

        <Link>{handleUserName(localStorage.getItem("username"))}</Link>
        <div className="navbar__dropdown">
          <img src={DropDown} onClick={handleDropDown} />
          {dropDown && (
            <div className="navbar__logout" onClick={handleLogOut}>
              Log Out
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

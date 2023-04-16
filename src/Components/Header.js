import React from "react";
import "./Product.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="header">
          <ul className="header_components">
            <li className="cli1">
              E mart
            </li>
            <li className="cli">
            <Link
                  className="nav-link  obj"
                  aria-current="page"
                  href="/"
                  style={{ color: "#d8d8d8" }}
                  to="/"
                >
                  Home
                </Link>
            </li>
            <li className="cli">
            <Link
                  className="nav-link  obj"
                  aria-current="page"
                  href="/"
                  style={{ color: "#d8d8d8" }}
                  to="/cart"
                >
                  My Cart
                </Link>
            </li>
          </ul>
      </div>
    </>
  );
}

export default Header;

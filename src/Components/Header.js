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

{/* <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <strong
            className="navbar-brand"
            href="/"
            style={{ color: "#d8d8d8" }}
          >
            E-Mart
          </strong>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: "#d8d8d8" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
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
        </div>
      </nav>
    </div> */}

export default Header;

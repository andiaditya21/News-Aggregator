import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container text-center mb-3">
      <div
        className="row justify-content-between m-auto"
        style={{ width: "100%" }}
      >
        <button className="btn" style={{ backgroundColor: "#9be2cc" }}>
          <Link
            to="/"
            className="text-center text-secondary"
            style={{ textDecoration: "none", color: "white" }}
          >
            Technology
          </Link>
        </button>
        <button className="btn" style={{ backgroundColor: "#9be2cc" }}>
          <Link
            to="/science"
            className="text-center text-secondary"
            style={{ textDecoration: "none", color: "white" }}
          >
            Science
          </Link>
        </button>
        <button className="btn" style={{ backgroundColor: "#9be2cc" }}>
          <Link
            to="/sport"
            className="text-center text-secondary"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sport
          </Link>
        </button>
        <button className="btn" style={{ backgroundColor: "#9be2cc" }}>
          <Link
            to="/health"
            className="text-center text-secondary"
            style={{ textDecoration: "none", color: "white" }}
          >
            Business
          </Link>
        </button>
      </div>
    </div>
  );
}

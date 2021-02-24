import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container text-center mb-3">
      <div
        className="row justify-content-between m-auto"
        style={{ width: "100%" }}
      >
        <Link to="/" className="text-center">
          Technology
        </Link>
        <Link to="/science" className="text-center">
          Science
        </Link>
        <Link to="/news" className="text-center">
          Sport
        </Link>
        <Link to="/news" className="text-center">
          Business
        </Link>
      </div>
    </div>
  );
}

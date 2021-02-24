import React from "react";

export default function Card({ title, desc, published, image }) {
  return (
    <div className="container">
      <div className="card mb-3">
        <img className="card-img-top" src={image} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">{published}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

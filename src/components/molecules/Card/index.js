import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({
  title,
  desc,
  published,
  image,
  source,
  pathName,
  content,
}) {
  const date = new Date(published);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();
  const publish = `${year}-${month}-${dt}`;
  return (
    <div className="container">
      <div className="card mb-3 rounded">
        <div className="wrapper-overlay position-relative w-100">
          <img
            className={`card-img-top ${styles.wrapperOverlay}`}
            src={image}
            alt={title}
          />
          <div className="overlay">
            <h5 className={`card-title ${styles.overlay}`}>{title}</h5>
          </div>
        </div>
        <div className="card-body">
          <p className="text-muted">{source}</p>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">{publish}</small>
          </p>
        </div>
        <button className={`btn ${styles.button}`}>
          <Link
            className={`${styles.link}`}
            to={{
              pathname: `/${pathName}/${title}`,
              state: {
                title: title,
                image: image,
                published: published,
                source,
                content,
              },
            }}
            target="_blank"
          >
            See Detail
          </Link>
        </button>
      </div>
    </div>
  );
}

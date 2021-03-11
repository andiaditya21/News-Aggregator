import React from "react";
import styles from "./card.module.css";

export default function Card({
  title,
  desc,
  published,
  image,
  author,
  url,
  source,
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
          <p className="card-text text-right">
            <small className="text-muted">{publish}</small>
          </p>
          <p className={`${styles.textSource}`}>
            Source: <span className="text-muted">{source}</span>
          </p>
          <p className={`${styles.textAuthor}`}>
            Author: <span className="text-muted">{author}</span>
          </p>
          <p className="card-text">{desc}</p>
        </div>
        <button className={`btn ${styles.button}`}>
          <a
            href={url}
            className={`${styles.link} text-secondary`}
            target="_blank"
            rel="noreferrer"
          >
            Go to Website
          </a>
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./title.module.css";

export default function Title({ title }) {
  return (
    <div>
      <h6 className={`${styles.text}`}>
        {!title ? "Technology News" : `${title} News`}
      </h6>
    </div>
  );
}

import React from "react";
import {
  IcAndroid,
  IcApple,
  IcGoogle,
  IcMicrosoft,
  IcTechnology,
} from "../../../assets";
import styles from "./navbar.module.css";

export default function Navbar({ onClick }) {
  return (
    <div className="container text-center my-4">
      <div className="row justify-content-center">
        <div className="col">
          <img
            className={`${styles.img}`}
            src={IcTechnology}
            alt=""
            width={48}
            // style={{ backgroundColor: "#9be2cc", padding: 8, borderRadius: 4 }}

            name="Technology"
            onClick={onClick}
          />
        </div>
        <div className="col">
          <img
            className={`${styles.img}`}
            src={IcGoogle}
            alt=""
            width={48}
            onClick={onClick}
            // style={{ backgroundColor: "#9be2cc", padding: 8, borderRadius: 4 }}
            name="Google"
          />
        </div>
        <div className="col">
          <img
            className={`${styles.img}`}
            src={IcApple}
            alt=""
            width={48}
            onClick={onClick}
            // style={{ backgroundColor: "#9be2cc", padding: 8, borderRadius: 4 }}
            name="Apple"
          />
        </div>
        <div className="col">
          <img
            className={`${styles.img}`}
            src={IcMicrosoft}
            alt=""
            width={48}
            onClick={onClick}
            // style={{ backgroundColor: "#9be2cc", padding: 8, borderRadius: 4 }}
            name="Microsoft"
          />
        </div>
        <div className="col">
          <img
            className={`${styles.img}`}
            src={IcAndroid}
            alt=""
            width={48}
            onClick={onClick}
            // style={{ backgroundColor: "#9be2cc", padding: 8, borderRadius: 4 }}
            name="Android"
          />
        </div>
      </div>
    </div>
  );
}

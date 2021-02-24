import React from "react";
import { DummyImage1, Logo } from "../../../assets";

export default function Carousel() {
  return (
    <div className="jumbotron pt-2 mb-3">
      <div className="container text-center">
        <img src={Logo} alt="" className="img-fluid pb-4" />
        <div className="row align-items-center">
          <div className="col-sm">
            <h5>Stay at Home and Keep Healthy</h5>
            <p>Mari patuhi protokol kesehatan demi pencegahan Covid-19</p>
          </div>
          <div className="col-sm">
            <img
              src={DummyImage1}
              className="img-fluid"
              alt=""
              style={{ width: 400, borderRadius: 4 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

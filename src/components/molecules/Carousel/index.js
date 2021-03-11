import axios from "axios";
import React, { useEffect, useState } from "react";
import { Logo } from "../../../assets";
import { Loading } from "../../atoms";

export default function Carousel() {
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");
  // console.log("data", data);
  useEffect(() => {
    isLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=95e4fb8dc0b647d9a06d592b3c65ddaf&country=id&q=covid`
      )
      .then((res) => {
        isLoading(false);
        const [data] = res.data.articles;
        const newData = {
          image: data.urlToImage,
          title: data.title,
          url: data.url,
        };
        setData(newData);
      })
      .catch((err) => {
        isLoading(false);
        setError(err.message);
      });
  }, []);
  return (
    <>
      <div
        className="jumbotron pt-2 pb-2 mb-3"
        style={{
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.75)",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: "#9be2cc",
        }}
      >
        <div className="container text-center">
          <img src={Logo} alt="" className="img-fluid pb-4" />
          <div className="row align-items-center">
            <div className="col-sm">
              <h5>Top Headlines from Indonesian</h5>
              <p className="text-secondary">
                Mari bersama-sama kita patuhi protokol kesehatan demi pencegahan
                Covid-19
              </p>
            </div>
            <div className="col-sm">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              {loading ? (
                <Loading count={5} />
              ) : (
                <>
                  <button style={{ border: "none", padding: 0 }}>
                    <a href={data.url} target="_blank" rel="noreferrer">
                      <img src={data.image} alt="" style={{ height: 180 }} />
                    </a>
                  </button>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 13,
                      marginTop: 10,
                    }}
                  >
                    {data.title}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

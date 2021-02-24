import axios from "axios";
import React, { useEffect, useState } from "react";
import { Title } from "../../components";
import { Card } from "../../components";
// import { getApi } from "../../config/api";

export default function Technology() {
  // const [currentPage, setCurrentPage] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=technology&apiKey=95e4fb8dc0b647d9a06d592b3c65ddaf`
      )
      .then((res) => {
        // console.log("getData", res);
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log("errornya", err);
        setError(`${err.message}. Your API key is invalid or incorrect`);
      });
  }, []);
  return (
    <>
      <div className="container">
        <Title title="Technology" />
        <div className="row">
          {data.map((article) => {
            return (
              <div key={article.publishedAt} className="col-sm-6">
                <Card
                  image={article.urlToImage}
                  title={article.title}
                  desc={article.description}
                  published={article.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading, Title } from "../../components";
import { Card } from "../../components";
// import { getApi } from "../../config/api";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Technology() {
  // const [currentPage, setCurrentPage] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=technology&apiKey=95e4fb8dc0b647d9a06d592b3c65ddaf`
      )
      .then((res) => {
        // console.log("getData", res);
        isLoading(false);
        setData(res.data.articles);
      })
      .catch((err) => {
        // console.log("errornya", err);
        isLoading(false);
        setError(`${err.message}. Your API key is invalid or incorrect`);
      });
  }, []);
  return (
    <>
      <div className="container">
        <Title title="Technology" />
        {loading && <Loading count={5} />}
        <div className="row">
          {data.map((article) => {
            return (
              <div key={article.title} className="col-sm-6">
                <Card
                  image={article.urlToImage}
                  title={article.title}
                  desc={article.description}
                  published={article.publishedAt}
                  source={article.source.name}
                  url={article.url}
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

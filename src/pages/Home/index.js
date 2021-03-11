import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Carousel, Loading, Navbar, Title } from "../../components";

export default function Home() {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");

  const handleButtonNavbar = (e) => {
    // console.log("target", e.target.name);
    getApiCategory(e.target.name);
  };

  useEffect(() => {
    getApiDefault();
  }, []);

  const getApiCategory = (category) => {
    // console.log(category);
    setCategory(category);
    isLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=95e4fb8dc0b647d9a06d592b3c65ddaf`
      )
      .then((res) => {
        // console.log(`Category ${category}`, res);
        isLoading(false);
        setData(res.data.articles);
      })
      .catch((err) => {
        isLoading(false);
        setError(err.message);
      });
  };

  const getApiDefault = () => {
    isLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=technology&apiKey=95e4fb8dc0b647d9a06d592b3c65ddaf`
      )
      .then((res) => {
        // console.log("Tech", res);
        isLoading(false);
        setData(res.data.articles);
      })
      .catch((err) => {
        isLoading(false);
        setError(err.message);
      });
  };

  return (
    <>
      <Carousel />
      <Navbar onClick={handleButtonNavbar} />
      <div className="container">
        <Title title={category} />

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {loading ? (
          <Loading count={5} />
        ) : (
          <div className="row">
            {data.map((article) => {
              return (
                <div key={article.title} className="col-sm-6">
                  <Card
                    image={article.urlToImage}
                    title={article.title}
                    published={article.publishedAt}
                    source={article.source.name}
                    author={article.author}
                    desc={article.description}
                    url={article.url}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

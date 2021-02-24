import axios from "axios";

export const getApi = (category) => {
  const data = [];
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${category}&apiKey=95e4fb8dc0b647d9a06d592b3c65ddaf`
    )
    .then((res) => {
      //   console.log("getData", res.data.articles)
      const result = res.data.articles;
      data.push(result);
    });
  return data;
};

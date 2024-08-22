import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [dataList, setDataList] = useState([]);
  const getData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${url}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setDataList(res.data.results);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getData();
  }, [url]);

  return dataList;
};

export default useFetchData;

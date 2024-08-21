import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../../index.css";
import axios from "axios";
import Tabs from "../../utility/Tabs";
import CardsList from "../../utility/CardsList";

const tabData = [
  {
    id: 0,
    title: "Streaming",
    url: "/movie/now_playing",
  },
  {
    id: 1,
    title: "On TV",
    url: "/movie/top_rated",
  },
  {
    id: 2,
    title: "For Rent",
    url: "/movie/upcoming",
  },
  {
    id: 3,
    title: "In Theaters",
    url: "/movie/popular",
  },
];

const Popular = () => {
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setDataList(res.data.results);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box className=" pt-8">
        <Stack direction={{ xs: "column", sx: "row" }} padding={{ xs: 1 }}>
          <Typography variant="h6" fontWeight={"700"}>
            What's Popular
          </Typography>
          <Tabs
            data={tabData}
            setDataList={setDataList}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Stack>
        <Box
          id="carousel"
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "21.5rem",sm:"60rem" },
            height: { xs: "auto" },
            overflow: "auto",
            paddingLeft:"0.2rem"
          }}
        >
          <CardsList dataList={dataList} />
        </Box>
      </Box>
    </>
  );
};

export default Popular;

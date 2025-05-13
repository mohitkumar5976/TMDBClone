import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../../index.css";
import axios from "axios";
import Tabs from "../../utility/Tabs";
import CardsList from "../../utility/CardsList";
import ResponsiveBox from "../../utility/ResponsiveBox";
import CarouselSection from "../../organisms/CarouselSection";
import { getMovies } from "../../../api/tmdb/movies";

const tabData = [
  {
    id: 0,
    title: "Streaming",
    url: "movie/now_playing",
  },
  {
    id: 1,
    title: "On TV",
    url: "movie/top_rated",
  },
  {
    id: 2,
    title: "For Rent",
    url: "movie/upcoming",
  },
  {
    id: 3,
    title: "In Theaters",
    url: "movie/popular",
  },
];

const Popular = () => {
  const [dataList, setDataList] = useState([]);
  const [tab, setTab] = useState(tabData[0].url);
  const [loading, setLoading] = useState(false); // 👈 loader state
  

  const getData = async () => {
    setLoading(true); // start loader
    try {
      const res = await getMovies(tab);
      console.log("res", res);
      setDataList(res);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false); // stop loader
    }
  };

  useEffect(() => {
    getData();
  }, [tab]);

  return (
    <>
      <Box className="flex flex-col gap-x-2" sx={{ height: "27rem" }}>
        <Stack direction={{ xs: "column", sx: "row" }} padding={{ xs: 1 }}>
          <Typography variant="h6" fontWeight={"700"}>
            What's Popular
          </Typography>
          <Tabs
            data={tabData}
            setTab={setTab}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Stack>
        <CarouselSection dataList={dataList} />
      </Box>
    </>
  );
};

export default Popular;

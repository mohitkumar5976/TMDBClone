import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import "../../../index.css";
import axios from "axios";
import CardsList from "../../utility/CardsList";
import Tabs from "../../utility/Tabs";
import ResponsiveBox from "../../utility/ResponsiveBox";
import { getMovies } from "../../../api/tmdb/movies";
import SectionHeading from "../../atoms/SectionHeading";
import CarouselSection from "../../organisms/CarouselSection";

const tabData = [
  {
    id: 0,
    title: "Today",
    url: "trending/movie/day",
  },
  {
    id: 1,
    title: "This Week",
    url: "trending/movie/week",
  },
];

const TrendingCarousel = () => {
  const [dataList, setDataList] = useState([]);
  const [tab, setTab] = useState(tabData[0].url);
  const [loading, setLoading] = useState(false); // 👈 loader state

  const getData = async () => {
    setLoading(true); // start loader
    try {
      const res = await getMovies(tab);
      setDataList(res);
    } catch (err) {
      // console.log(err.message);
    } finally {
      setLoading(false); // stop loader
    }
  };

  useEffect(() => {
    getData();
  }, [tab]);

  return (
    <>
      <Box className="flex flex-col gap-x-3">
        <Stack direction={{ xs: "column", sx: "row" }} padding={{ xs: 1 }}>
          <SectionHeading text="Trending" variant="h6" fontWeight="700" />
          <Tabs
            data={tabData}
            setTab={setTab}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Stack>

        {loading ? (
          <Box className="flex justify-center items-center h-full">
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <CarouselSection dataList={dataList} />
        )}
      </Box>
    </>
  );
};

export default TrendingCarousel;

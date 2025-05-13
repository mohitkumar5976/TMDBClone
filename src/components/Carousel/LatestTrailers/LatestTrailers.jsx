import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Stack } from "@mui/material";
import "../../../index.css";
import VideoCard from "../../Cards/VideoCard";
import axios from "axios";
import Tabs from "../../utility/Tabs";
import { getMovies } from "../../../api/tmdb/movies";

const tabData = [
  {
    id: 0,
    title: "Popular",
    url: "movie/now_playing",
  },
  {
    id: 1,
    title: "Streaming",
    url: "movie/upcoming",
  },
  {
    id: 2,
    title: "On TV",
    url: "movie/top_rated",
  },
  {
    id: 3,
    title: "For Rent",
    url: "movie/popular",
  },
  {
    id: 4,
    title: "In Theaters",
    url: "trending/movie/week",
  },
];

const LatestTrailers = () => {
  const [dataList, setDataList] = useState([]);
  const [tab, setTab] = useState(tabData[0].url);

  const getData = async () => {
    getMovies(tab)
      .then((res) => {
        setDataList(res.data.results);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, [tab]);
  return (
    <>
      <Box
        className="flex flex-col gap-x-2 px-2"
        sx={{
          backgroundImage: `url("https://media.istockphoto.com/id/1402399049/vector/dark-blue-abstract-background-with-triangle-lines-stripe-and-light-composition.jpg?s=612x612&w=0&k=20&c=hwCVDMjge-rFOL92igkhFUMR50R9XmL2Rc46Dhk1110=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "25rem", sm: "26rem", lg: "40rem" },
        }}
      >
        <Stack direction={{ xs: "column", sx: "row" }} padding={{ xs: 1 }}>
          <Typography variant="h6" color={"white"} fontWeight={"700"}>
            Latest Trailers
          </Typography>

          <Tabs
            data={tabData}
            setTab={setTab}
            bgColor={"bg-gradient-to-r from-blue-300 to-green-600"}
            textColor={"text-white"}
          />
        </Stack>

        <ul
          className="pb-7"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1,
            padding: 0,
            margin: 0,
            listStyle: "none",
            overflowX: "auto", // Enables horizontal scrolling
            width: "100%", // Full width to ensure responsiveness
            maxWidth: "100vw",
          }}
        >
          {dataList && dataList.length !== 0 ? (
            dataList.map((item) => {
              return (
                <li key={item.id} className="h-fit">
                  <VideoCard
                    id={item.id}
                    title={item.title ? item.title : item.name}
                    posterPath={item.poster_path}
                  />
                </li>
              );
            })
          ) : (
            <Box className="w-full flex justify-center items-center">
              <CircularProgress size={"lg"} />
            </Box>
          )}
        </ul>
      </Box>
    </>
  );
};

export default LatestTrailers;

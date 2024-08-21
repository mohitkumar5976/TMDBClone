import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Stack } from "@mui/material";
import "../../../index.css";
import VideoCard from "../../Cards/VideoCard";
import axios from "axios";
import Tabs from "../../utility/Tabs";

const tabData = [
  {
    id: 0,
    title: "Popular",
    url: "/movie/now_playing",
  },
  {
    id: 1,
    title: "Streaming",
    url: "/movie/popular",
  },
  {
    id: 2,
    title: "On TV",
    url: "/movie/top_rated",
  },
  {
    id: 3,
    title: "For Rent",
    url: "/movie/upcoming",
  },
  {
    id: 4,
    title: "In Theaters",
    url: "popular",
  },
];

const LatestTrailers = () => {
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
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
            bgColor={"bg-gradient-to-r from-blue-300 to-green-600"}
            textColor={"text-white"}
            setDataList={setDataList}
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
          }}
        >
          <ul
            className="flex items-center h-full gap-x-4 pb-7"
            sx={{
              display: "flex",
              alignItems: "center",
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
      </Box>
    </>
  );
};

export default LatestTrailers;

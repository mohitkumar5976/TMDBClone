import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../../index.css";
import axios from "axios";
import CardsList from "../../utility/CardsList";
import Tabs from "../../utility/Tabs";

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

  const getData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${tab}?api_key=${process.env.REACT_APP_API_KEY}`
      )
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
        className="flex flex-col gap-x-2 p-2"
        sx={{ height: { xs: "30rem", sm: "30rem", lg: "40rem" } }}
      >
        <Stack direction={{ xs: "column", sx: "row" }} padding={{ xs: 1 }}>
          <Typography variant="h6" fontWeight={"700"}>
            Trending
          </Typography>
          <Tabs
            data={tabData}
            setTab={setTab}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Stack>
        <Box
          id="carousel"
          sx={{
            backgroundImage: `url("https://www.pngitem.com/pimgs/m/12-126268_sound-pixel-wave-transparent-sound-wave-png-png.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            width: { xs: "21.5rem", sm: "60rem" },
            height: { xs: "auto" },
            overflow: "auto",
            paddingBottom: "1.5rem",
          }}
        >
          <CardsList dataList={dataList} />
        </Box>
      </Box>
    </>
  );
};

export default TrendingCarousel;

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../../index.css";
import Tabs from "../../utility/Tabs";
import CardsList from "../../utility/CardsList";
import axios from "axios";
import ResponsiveBox from "../../utility/ResponsiveBox";

const tabData = [
  {
    id: 0,
    title: "Movies",
    url: "movie/top_rated",
  },
  {
    id: 1,
    title: "On TV",
    url: "tv/top_rated",
  },
];

const FreeToWatch = () => {
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
      <Box className="flex flex-col gap-x-2" sx={{ height: "27rem" }}>
        <Stack direction={{ xs: "column", sx: "row" }} padding={{ xs: 1 }}>
          <Typography variant="h6" fontWeight={"700"}>
            Free To Watch
          </Typography>
          <Tabs
            data={tabData}
            setTab={setTab}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Stack>
        <ResponsiveBox dataList={dataList} />
      </Box>
    </>
  );
};

export default FreeToWatch;

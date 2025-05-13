import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../../index.css";
import Tabs from "../../utility/Tabs";
import CircularProgress from "@mui/material/CircularProgress";
import { getMovies } from "../../../api/tmdb/movies";
import CarouselSection from "../../organisms/CarouselSection";

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
  const [loading, setLoading] = useState(false); // 👈 loader state

  const getData = async () => {
    setLoading(true); // start loader
    try {
      const res = await getMovies(tab);                 
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
            Free To Watch
          </Typography>
          <Tabs
            data={tabData}
            setTab={setTab}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Stack>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <CarouselSection dataList={dataList} />
        )}
      </Box>
    </>
  );
};

export default FreeToWatch;

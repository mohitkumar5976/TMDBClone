import { Box } from "@mui/material";
import MoviePage from "../components/details/MoviePage/MoviePage";
import Heading from "../components/details/MoviePage/Heading";
import useFetchData from "../hooks/useFetchData";

function NowPlaying() {
  const dataList = useFetchData("movie/now_playing");

  return (
    <Box className="flex flex-col w-full">
      <Heading heading="Popular" />

      <MoviePage dataList={dataList} />
    </Box>
  );
}

export default NowPlaying;

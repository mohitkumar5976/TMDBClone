import MoviePage from "../components/details/MoviePage/MoviePage";
import { Box } from "@mui/material";
import Heading from "../components/details/MoviePage/Heading";
import useFetchData from "../hooks/useFetchData";

function Upcoming() {
  const dataList = useFetchData("movie/upcoming");

  return (
    <Box className="flex flex-col w-full">
      <Heading heading="Popular" />

      <MoviePage dataList={dataList} />
    </Box>
  );
}

export default Upcoming;

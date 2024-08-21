import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import axios from "axios";

export default function Search() {
  const { setSearch } = useContext(Context);
  const [state, setState] = useState("");

  const handleSearch = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${state}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.results);
        setSearch(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Stack
        direction={"row"}
        className="bg-white rounded-3xl"
        sx={{ height: { xs: "2.8rem" } }}
      >
        <input
          type="search"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Search for a movie,tv,show,person....."
          className="w-full h-full rounded-l-3xl pl-5 outline-none"
        />

        <Box
          className="w-28 cursor-pointer rounded-r-3xl flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400 h-full"
          onClick={() => handleSearch()}
        >
          <Typography fontSize={15} fontWeight={"bold"} color={"white"}>
            Search
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

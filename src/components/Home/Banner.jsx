import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Search from "../Search/Search";

function Banner() {
  return (
    <Box
      sx={{
        height: { xs: "20rem", sm: "32rem", xl: "44rem" },
        display: "flex",
        alignItems: "end",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/p4QdHpKCKCmU81BYZa3JPVGV2WK.jpg")`,
      }}
    >
      <Stack
        spacing={{ xs: 3, sm: 5 }}
        sx={{
          paddingLeft: { xs: 1, sm: 3 },
          paddingRight: { xs: 1, sm: 3 },
          paddingBottom: { xs: 3, sm: 5 },
          width: "100%",
        }}
      >
        <Stack direction={"column"}>
          <Typography
            color="white"
            fontSize={{ xs: 50, sm: 70 }}
            fontWeight={"bold"}
          >
            Welcome.
          </Typography>
          <Typography
            color="white"
            fontSize={{ xs: 15, sm: 23 }}
            fontWeight={"bold"}
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
        </Stack>

        <Search />
      </Stack>
    </Box>
  );
}

export default Banner;

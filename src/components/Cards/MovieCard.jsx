import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImageComponent from "../utility/ImageComponent";

function MovieCard({ title, releaseDate, posterPath, voteAverage }) {
  return (
    <>
      <div className="flex flex-col gap-7 w-full h-full">
        <div
          style={{
            position: "relative",
          }}
        >
          <Box className="h-68">
            <ImageComponent rounded={"rounded-xl"} posterPath={posterPath} />
          </Box>

          <div
            style={{
              position: "absolute",
              bottom: "-25px",
              left: "8%",
            }}
          >
            <div className="flex relative bg-black rounded-full">
              <CircularProgress
                variant="determinate"
                value={Math.floor((voteAverage * 100) / 10)}
                color="error"
                size={"2.5rem"}
              />
              <Box
                className="flex items-center"
                color={"whitesmoke"}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                }}
              >
                <Typography fontSize={13}>
                  {Math.floor((voteAverage * 100) / 10)}
                </Typography>
                <span style={{ fontSize: "10px" }}>
                  <sup>%</sup>
                </span>
              </Box>
            </div>
          </div>
        </div>

        <div className="pl-3 ">
          <Typography fontSize={14} fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography fontSize={14} className="text-slate-500">
            {releaseDate}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

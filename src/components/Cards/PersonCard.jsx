import React from "react";
import { Typography } from "@mui/material";
import ImageComponent from "../utility/ImageComponent";

function PersonCard({ profilePath, name, character }) {
  console.log(profilePath);
  return (
    <>
      <div className="flex flex-col gap-2 shadow-lg h-full">
        <div
          style={{
            position: "relative",
            width: "150px",
          }}
        >
          <ImageComponent posterPath={profilePath} />
        </div>

        <div className="pl-4">
          <Typography fontSize={15} fontWeight={"bold"} className="w-3/4">
            {name}
          </Typography>
          <Typography fontSize={14} className="text-slate-500">
            {character}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default PersonCard;

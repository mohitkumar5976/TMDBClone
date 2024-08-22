import { Box } from "@mui/material";
import React from "react";

function Heading({ heading }) {
  return (
    <Box
      className="font-bold text-2xl sm:text-3xl"
      sx={{
        paddingLeft: { xs: 1, sm: 2 },
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      {heading} Movies
    </Box>
  );
}

export default Heading;

import { Grid } from "@mui/material";
import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

function MoviePage({ dataList }) {
  return (
    <>
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        justifyItems={{ xs: "center", sm: "none" }}
      >
        <Grid item xs={12} sm={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Main dataList={dataList} />
        </Grid>
      </Grid>
    </>
  );
}

export default MoviePage;

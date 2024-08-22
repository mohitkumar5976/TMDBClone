import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/Reusable/Header";
import Footer from "../components/Reusable/Footer";
import { Outlet } from "react-router-dom";

const ApplicationWrapper = () => {
  return (
    <Grid container direction={"column"} sx={{ width: "100%" }}>
      <Grid item sx={{ height: { xs: "3.3rem", sm: "3.6rem" } }}>
        <Header />
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
      <Grid item sx={{ height: "auto" }}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ApplicationWrapper;

import React, { useEffect, useState } from "react";
import { Box, ListItem, Paper, Typography } from "@mui/material";
import "../../../index.css";
import PersonCard from "../../Cards/PersonCard";
import BasicTabs from "./Tabs";
import axios from "axios";

function MovieInfoBody({ id, type }) {
  const [personList, setPersonList] = useState([]);

  const getPerson = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`
      )
      .then((res) => {
        setPersonList(res.data.credits.cast);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getPerson();
  }, [id]);

  return (
    <>
      <Box>
        <Box className="flex gap-4 py-2 ">
          <Typography variant="h6" fontWeight={"700"}>
            Top Billed Cast
          </Typography>
        </Box>

        <Box
          component="ul"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 5,
            paddingBottom: 2,
            margin: 0,
            listStyle: "none",
            overflowX: "auto", // Enables horizontal scrolling
            overflowY: "hidden", // Hides vertical overflow
            width: "100%", // Full width for responsiveness
            maxWidth: "100vw", // Prevents overflow beyond viewport width
            scrollBehavior: "smooth", // Optional: smooth scrolling for better user experience
          }}
        >
          {personList &&
            personList.map((data) => (
              <ListItem
                key={data.id}
                sx={{
                  width: {
                    xs: "120px", // For small screens
                    sm: "140px", // For medium screens
                    md: "160px", // For larger screens
                  },
                  height: "20rem",
                  padding: 0,
                  margin: 0,
                  flexShrink: 0, // Prevents shrinking of list items
                }}
              >
                <PersonCard
                  profilePath={data.profile_path}
                  name={data.name}
                  character={data.character}
                />
              </ListItem>
            ))}
        </Box>

        <Typography className="py-4">Full Cast & Crew</Typography>
        <hr />
        <Paper
          sx={{
            padding: 1,
          }}
        >
          <BasicTabs />
        </Paper>
      </Box>
    </>
  );
}

export default MovieInfoBody;

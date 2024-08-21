import React from "react";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Button,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#032541", height: "100%" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MenuIcon
          sx={{
            cursor: "pointer",
            fontSize: "1.8rem",
            display: { xs: "block", sm: "none" },
          }}
        />
        <Stack
          direction="row"
          display={{ xs: "none", sm: "flex" }}
          alignItems={"center"}
          spacing={3.5}
        >
          <Link to={"/"}>
            <img
              style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
              src="/assets/images/tmdb1.png"
              alt=""
            />
          </Link>
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "transparent",
                  padding: 0,
                  boxShadow: "none",
                },
              },
            }}
            sx={{
              cursor: "pointer",
            }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/movie/popular">
                    Popular
                  </MenuItem>
                  <MenuItem component={Link} to="/movie/now-playing">
                    Now Playing
                  </MenuItem>
                  <MenuItem component={Link} to="/movie/upcoming">
                    Upcoming
                  </MenuItem>
                  <MenuItem component={Link} to="/movie/top-rated">
                    Top Rated
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={18} fontWeight={"bold"}>
              Movies
            </Typography>
          </Tooltip>
          <Tooltip
            sx={{ cursor: "pointer" }}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "transparent",
                  padding: 0,
                  boxShadow: "none",
                },
              },
            }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/tv/popular">
                    Popular
                  </MenuItem>
                  <MenuItem component={Link} to="/tv/airing-today">
                    Airing Today
                  </MenuItem>
                  <MenuItem component={Link} to="/tv/upcoming">
                    On TV
                  </MenuItem>
                  <MenuItem component={Link} to="/tv/top-rated">
                    Top Rated
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={18} fontWeight={"bold"}>
              TV Shows
            </Typography>
          </Tooltip>
          <Tooltip
            sx={{ cursor: "pointer" }}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "transparent",
                  padding: 0,
                  boxShadow: "none",
                },
              },
            }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/people">
                    People
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={18} fontWeight={"bold"}>
              People
            </Typography>
          </Tooltip>
          <Tooltip
            sx={{ cursor: "pointer" }}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "transparent",
                  padding: 0,
                  boxShadow: "none",
                },
              },
            }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/discussions">
                    Discussions
                  </MenuItem>
                  <MenuItem component={Link} to="/leaderboard">
                    Leaderboard
                  </MenuItem>
                  <MenuItem component={Link} to="/support">
                    Support
                  </MenuItem>
                  <MenuItem component={Link} to="/api">
                    API
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={18} fontWeight={"bold"}>
              More
            </Typography>
          </Tooltip>
        </Stack>

        <Stack direction="row" alignItems={"center"}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon sx={{ cursor: "pointer", fontSize: "1.8rem" }} />
            <Box
              sx={{
                color: "white",
                width: "auto",
                border: "1px solid white",
                borderRadius: "5px",
                fontSize: "13px",
                padding: "2px 5px",
                width: "auto",
                height: "auto",
              }}
            >
              EN
            </Box>
            <Badge badgeContent={4} color="danger">
              <NotificationsIcon sx={{ cursor: "pointer" }} />
            </Badge>

            <Tooltip
              sx={{ cursor: "pointer" }}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "transparent",
                    padding: 0,
                    boxShadow: "none",
                  },
                },
              }}
              arrow
              title={
                <Paper sx={{ padding: "5px" }}>
                  <Typography component={"h1"}>Profile and Settings</Typography>
                </Paper>
              }
            >
              <Typography
                className="bg-blue-600"
                sx={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  fontSize: "12px",
                  width: "28px",
                  height: "28px",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                M
              </Typography>
            </Tooltip>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={1}
          >
            <PersonIcon
              sx={{ fontSize: "1.8rem", display: { xs: "block", sm: "none" } }}
            />
            <SearchIcon style={{ fontSize: "1.8rem" }} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

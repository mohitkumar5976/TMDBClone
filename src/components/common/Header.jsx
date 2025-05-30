import Stack from "@mui/material/Stack";
import {
  AppBar,
  Badge,
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
import { Link, NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import BasicMenu from "../Reusable/BasicMenu";
import MenuListFC from "../utility/MenuListFC";
import {
  moviesMenuList,
  peopleMenuList,
  tvMenuList,
} from "../../utils/NavigationLinks";
import MobileSidebar from "../utility/MobileSidebar";
import SearchIconFC from "../Reusable/SearchIconFC";
import TopNavLink from "../atoms/TopNavLink";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#032541" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"} alignItems={"center"} display={{ sm: "none" }}>
          <MobileSidebar />
          <Link
            className="text-base pl-0.5 text-decoration-none text-white"
            to={"/"}
          >
            TMDB
          </Link>
        </Stack>
        <Stack
          direction="row"
          display={{ xs: "none", sm: "flex" }}
          alignItems={"center"}
          spacing={3.5}
        >
          <Link to="/">
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
            sx={{ cursor: "pointer" }}
            title={<MenuListFC menuList={moviesMenuList} />}
          >
            <TopNavLink text={"Movies"} />
          </Tooltip>

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
            sx={{ cursor: "pointer" }}
            title={<MenuListFC menuList={tvMenuList} />}
          >
            <TopNavLink text={"TV Shows"} />
          </Tooltip>

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
            sx={{ cursor: "pointer" }}
            title={<MenuListFC menuList={peopleMenuList} />}
          >
            <TopNavLink text={"People"} />
          </Tooltip>

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
            sx={{ cursor: "pointer" }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem>Discussions</MenuItem>
                  <MenuItem>Leaderboard</MenuItem>
                  <MenuItem>Support</MenuItem>
                  <MenuItem>API</MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <TopNavLink text={"More"} />
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
            <SearchIconFC xs={"none"} sm={"block"} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { moviesMenuList } from "../../utils/NavigationLinks";
import { IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function MobileSidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              <HomeIcon /> <ListItemText primary={"Home"} />
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {moviesMenuList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
      }}
    >
      <IconButton
        sx={{
          fontSize: "1.8rem",
          color: "#ffffff",
        }}
        onClick={toggleDrawer(true)} // Moved the onClick handler here
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}

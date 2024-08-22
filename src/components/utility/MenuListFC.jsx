import { MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuListFC = ({ menuList }) => {
  return (
    <Paper>
      <MenuList>
        {menuList &&
          menuList.map((item) => (
            <MenuItem key={item.id} component={Link} to={item.url}>
              {item.title}
            </MenuItem>
          ))}
      </MenuList>
    </Paper>
  );
};

export default MenuListFC;

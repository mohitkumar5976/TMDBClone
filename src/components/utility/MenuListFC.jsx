import { MenuItem, MenuList, Paper } from "@mui/material";

const MenuListFC = ({ menuList, onClose }) => {
  return (
    <Paper>
      <MenuList>
        {menuList &&
          menuList.map((item) => (
            <MenuItem key={item.id} onClick={onClose}>
              {item.title}
            </MenuItem>
          ))}
      </MenuList>
    </Paper>
  );
};

export default MenuListFC;

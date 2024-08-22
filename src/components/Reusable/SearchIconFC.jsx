import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const SearchIconFC = ({ xs, sm }) => {
  return (
    <SearchIcon sx={{ fontSize: "1.8rem", display: { xs: xs, sm: sm } }} />
  );
};

export default SearchIconFC;

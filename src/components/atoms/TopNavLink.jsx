import React from "react";
import { Typography } from "@mui/material";

const TopNavLink = React.forwardRef(({ text, ...props }, ref) => (
  <Typography
    ref={ref}
    fontSize={15}
    fontWeight="semibold"
    {...props}
  >
    {text}
  </Typography>
));

export default TopNavLink;

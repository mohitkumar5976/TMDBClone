import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Tabs({ data, setTab, bgColor, textColor }) {
  const [index, setIndex] = useState(0);

  const getData = async (id, url) => {
    setIndex(id);
    setTab(url);
  };

  return (
    <>
      <Box className="flex flex-wrap p-1 h-fit w-fit items-center border border-1 rounded-2xl">
        {data && data.length !== 0
          ? data.map((item) => {
              return (
                <Box
                  key={item.id}
                  onClick={() => getData(item.id, item.url)}
                  className={`${
                    index === item.id ? `${bgColor} ${textColor}` : null
                  } cursor-pointer px-4 py-1 rounded-2xl`}
                >
                  <Typography fontSize={15}>{item.title}</Typography>
                </Box>
              );
            })
          : ""}
      </Box>
    </>
  );
}

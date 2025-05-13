import { Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { getSearchMovies } from "../../api/tmdb/movies";

export default function Search() {
  const { setSearch } = useContext(Context);
  const [state, setState] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  // Debounce input value
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(state);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [state]);

  // Trigger search when debounced value changes
  useEffect(() => {
    if (debouncedValue.trim()) {
      getSearchMovies(debouncedValue)
        .then((res) => {
          setSearch(res.data.results);
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      setSearch([]); // Clear search if input is empty
    }
  }, [debouncedValue, setSearch]);

  return (
    <Stack
      direction="row"
      className="bg-white rounded-3xl"
      sx={{ height: { xs: "2.5rem" } }}
    >
      <input
        type="search"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Search here..."
        className="w-full h-full rounded-3xl pl-5 pr-3 outline-none"
      />
    </Stack>
  );
}

import React from "react";

const getPosterPath = (posterPath) => {
  if (posterPath) {
    return `http://image.tmdb.org/t/p/w500/${posterPath}`;
  } else {
    return `/assets/images/person.png`;
  }
};

export default function ImageComponent({ posterPath, rounded }) {
  return (
    <img
      className={`${rounded}`}
      src={getPosterPath(posterPath)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

import { api } from "../api";

export const getMovies = async (type) => {
  const response = await api.get(`/${type}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (type, id) => {
  const response = await api.get(`/${type}/${id}`, {
    params: {
      language: "en-US",
    },
  });
  return response;
};

export const getMovieCredits = async (type, id) => {
  const response = await api.get(`/${type}/${id}`, {
    params: {
      language: "en-US",
      append_to_response: "credits",
    },
  });
  return response;
};

export const getSearchMovies = async (movieName) => {
  const response = await api.get(`search/movie?query=${movieName}`, {
    params: {
      language: "en-US",
    },
  });
  return response;
};

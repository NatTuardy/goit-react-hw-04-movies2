import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "0ccd4bf2259c8c1465114b232f00f305",
};

// const key = '0ccd4bf2259c8c1465114b232f00f305';

const createParams = (params) => {
  return {
    params,
  };
};

export const getTrendingMovies = () => {
  return axios.get(`/trending/movie/day`);
};

export const getSingleMovie = (movie_id) => {
  return axios.get(`/movie/${movie_id}?language=en-US`);
};

export const getSearchedMovies = (query) => {
  return axios.get(
    `/search/movie?language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const getCastMovie = (movie_id) => {
  return axios.get(`/movie/${movie_id}/credits?language=en-US`);
};

export const getReviewsMovie = (movie_id) => {
  return axios.get(`/movie/${movie_id}/reviews?language=en-US&page=1`);
};

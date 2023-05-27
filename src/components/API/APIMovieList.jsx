import axios from 'axios';


const KEY = '21e517ab174732852f20cb791e3f6993'
  
export const getMovieList = async () => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`);
  }
  catch (err) {
    throw new Error(err.message);
  }
}

export const searchMovie = async(searchText) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}}&api_key=${KEY}`);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const searchMovieInfo = async (id) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const searchMovieActor = async (id) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${KEY}`);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const searchMovieReview = async (id) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?&api_key=${KEY}`);
    } catch (err) {
  throw new Error(err.message);
  }
}
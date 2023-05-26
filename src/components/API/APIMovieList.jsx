import axios from 'axios';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWU1MTdhYjE3NDczMjg1MmYyMGNiNzkxZTNmNjk5MyIsInN1YiI6IjY0NmYwNjkwZWEzOTQ5MDBmODNhODVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-qzB3z9loYKM3MY6ZF3dstdKLPJ85k9dhN5dWy78Rqk'
    }
  };
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

export const searchMovieInfo = async (movieId) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const searchMovieActor = async (movieId) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?&api_key=${KEY}`);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const searchMovieReview = async (movieId) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?&api_key=${KEY}`);
    } catch (err) {
  throw new Error(err.message);
  }
}
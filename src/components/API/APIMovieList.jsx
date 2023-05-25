const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWU1MTdhYjE3NDczMjg1MmYyMGNiNzkxZTNmNjk5MyIsInN1YiI6IjY0NmYwNjkwZWEzOTQ5MDBmODNhODVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-qzB3z9loYKM3MY6ZF3dstdKLPJ85k9dhN5dWy78Rqk'
    }
  };
 export const getMovieList = () => {
    return (
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        )
}

export const searchMovie =(searchText)=> {
  fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
}

import React, { useEffect, useState } from "react";
// import MovieList from '../MovieList/MovieList'
import { getMovieList } from '../API/APIMovieList'

const Home = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getMovieList();
                setData(data.results);
                console.log(data)
            } catch (err) {
                throw new Error(err.message)
            }
        })();
  }, []);

    return (
        <>
            <div>
                <h4>Traiding today</h4>
                <ul>
                    {data && data.map(movie => {
                        return (
                           
                                <li key={movie.id}>{movie.title}</li>
                )
                    })}
                </ul>
            </div>
        </>
            

    )
}

//   return (
//     <Container>
//       <h1>Trending today</h1>
//       <List>
//         {trendingMovies &&
//           trendingMovies.map(movie => {
//             return (
//               <ListItem key={movie.id}>
//                 <StyledLink to={`/movies/${movie.id}`}>
//                   {movie.title}
//                 </StyledLink>
//               </ListItem>
//             );
//           })}
//       </List>
//     </Container>
//   );
// };

export default Home


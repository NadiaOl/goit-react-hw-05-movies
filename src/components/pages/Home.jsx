
import { getMovieList } from "components/API/APIMovieList";
import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom"

// import MovieList from '../MovieList/MovieList'


const Home = () => {
    const [data, setData] = useState([])

    
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getMovieList();
                setData(data.results)
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
                            <li key={movie.id}>
                                <a href={`/goit-react-hw-05-movies/movies/${movie.id}`}>{movie.title}</a>
                            </li>
                        )
                        })}
                    </ul>
            </div>
        </>
    )
}

export default Home


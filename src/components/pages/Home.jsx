
import { getMovieList } from "components/API/APIMovieList";
import React, { useEffect, useState } from "react";
import css from './Page.module.css'
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
            <div className={css.homeConteiner}>
                <h4 className={css.homeTitle}>Traiding today</h4>
                    <ul>
                        {data && data.map(movie => {
                        return (
                            <li className={css.homeList} key={movie.id}>
                                <a className={css.homeLink} href={`/goit-react-hw-05-movies/movies/${movie.id}`}>{movie.title}</a>
                            </li>
                        )
                        })}
                    </ul>
            </div>
        </>
    )
}

export default Home


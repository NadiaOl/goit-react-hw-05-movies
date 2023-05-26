import React, { useEffect, useState } from "react";
import {searchMovieInfo } from '../API/APIMovieList'
import { NavLink, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        (async () => {
        try {
            const { data } = await searchMovieInfo(movieId);
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
        })();
    }, [movieId]);

    return (
        <div>
            <NavLink to={`/`}>Go back</NavLink>
            {movie && (
                <div>
                    <div>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} width="350"/>
                        </div>
                        <div>
                            <h3>{movie.title}</h3>
                            <p>{`Use Score: ${movie.vote_average}`}</p>
                            <h4>Overview</h4>
                            <p>{movie.overview}</p>
                            <h5>Genres</h5>
                            <ul>{movie.genres.map(genre => {
                                return <li key={genre.id}>{genre.name}</li>})}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Outlet/>
                </div>)}
        </div>)
}


export default MovieDetails
import React, { useEffect, useState } from "react";
import {searchMovieInfo } from '../API/APIMovieList'
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./Page.module.css"
import PropTypes from "prop-types";
import { Suspense } from "react";

const MovieDetails = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation()
    const back = location.state ?? '/'

    // console.log('location.state: ', location.state)
    // console.log('location.state.from: ', location.state.from)


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
        <div className={css.infoConteiner}>
            <Link className={css.linkBack} to={back}>Go back</Link>
            {movie && (
                <div className={css.commomDiv}>
                    <div className={css.infoDiv}>
                        <div>
                            <img className={css.moviePoster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="350"/>
                        </div>
                        <div className={css.aboutDiv}>
                            <h2 className={css.movieTitle}>{movie.title}</h2>
                            <p>{`Use Score: ${movie.vote_average}`}</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <ul>{movie.genres.map(genre => {
                                return <li  key={genre.id}>{genre.name}</li>})}
                            </ul>
                        </div>
                    </div>
                    <div className={css.additionalInfoDiv}>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <Link className={css.linkAddInfo} to={`/movies/${movie.id}/cast`}
                                state={location}>Cast</Link>
                            </li>
                            <li>
                                <Link className={css.linkAddInfo} to={`/movies/${movie.id}/reviews`} 
                                state={location}>Reviews</Link>
                            </li>
                        </ul>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet/>
                    </Suspense>
                </div>)}
        </div>)
}

MovieDetails.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            overview: PropTypes.string.isRequired,
            genre: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                })
            )
        })
    ),
}

export default MovieDetails
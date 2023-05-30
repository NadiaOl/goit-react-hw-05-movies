import { getMovieList } from "components/API/APIMovieList";
import React, { useEffect, useState } from "react";
import css from './Page.module.css'
import PropTypes from "prop-types";
import { Link, Navigate, useLocation } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([])
    const location = useLocation()
    
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getMovieList();
                setData(data.results)
            } catch (error) {
                console.log(error);
                <Navigate to='/404'/>;
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
                            <Link className={css.homeLink} to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
                    </li>
                    )
                    })}
                </ul>
            </div>
        </>
    )
}

Home.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
})),
}

export default Home


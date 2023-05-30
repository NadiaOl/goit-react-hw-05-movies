import { searchMovie } from "components/API/APIMovieList";
import React, { useState} from "react";
import { BsSearch } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import css from './Page.module.css';
import PropTypes from "prop-types";
import { Link, useLocation, useSearchParams } from "react-router-dom";


const Movies = () => {
    const[values, setValues] = useState([])
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams('')
    const filter = searchParams.get('filter') ?? ''

    const handleChange = ({target:{value}}) => {
        setSearchParams({filter: value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(filter.trim(" ") === "") {
            alert("Enter a search term, please!");
            return
        }
        try {
            const { data } = await searchMovie(filter);
            setValues(data.results)

        } catch (err) {
            throw new Error(err.message)
        }
    }
    
    return (
        <div>
            <header >
                <form className={css.form} onSubmit={handleSubmit}>
                    <button className={css.buttonSearch} type="submit" >
                        <BsSearch/>
                    </button>
                    <input className={css.inputSearch}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        onChange={handleChange}
                        value={filter}
                    />
                </form>
            </header>
            <ul>
                {values && values.map(movie => {
                    return (
                        <li className={css.homeList} key={movie.id}>
                            <Link className={css.homeLink}
                                to={`/movies/${movie.id}`}
                                state={location}>{movie.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );                    
}


Movies.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
}
export default Movies
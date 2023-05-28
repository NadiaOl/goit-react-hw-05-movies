import { searchMovie } from "components/API/APIMovieList";
import React, { useState} from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import css from './Page.module.css';
// import PropTypes from "prop-types";

const Movies = () => {
    const[value, setValue] = useState('')
    const[values, setValues] = useState([])

const handleChange = ({target:{value}}) => {
    setValue(value)
}
const handleSubmit = async e => {
    e.preventDefault()
    if(value.trim(" ") === "") {
        toast.warn("Enter a search term, please!");
        return
    }
    try {
        const { data } = await searchMovie(value);
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
                            value={value}
                            />
                    </form>
                </header>
                <ul>
                        {values && values.map(movie => {
                        return (
                            <li className={css.homeList} key={movie.id}>
                                <a className={css.homeLink} href={`/goit-react-hw-05-movies/movies/${movie.id}`}>{movie.title}</a>
                            </li>
                        )
                        })}
                    </ul>
            </div>
        );
    
}

export default Movies
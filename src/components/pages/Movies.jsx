import { searchMovie } from "components/API/APIMovieList";
import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import css from './Page.module.css';
// import PropTypes from "prop-types";

const Movies = ({handleSearch, setPage}) => {
    const[value, setValue] = useState('')

const handleChange = ({target:{value}}) => {
    setValue(value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    if(value.trim(" ") === "") {
        toast.warn("Enter a search term, please!");
        return
    }
    searchMovie(value)

}


        return (
            <div>
                <header >
                    <form className={css.form} onSubmit={handleSubmit}>
                        <button className={css.buttonSearch} type="submit" >
                            <BsSearch/>
                            <span>Search</span>
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
            </div>
        );
    
}

export default Movies
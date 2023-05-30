import { searchMovieActor } from "components/API/APIMovieList";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import css from "./Page.module.css";
import PropTypes from "prop-types";


const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);


    useEffect(() => {
        (async () => {
        try {
            const { data } = await searchMovieActor(movieId);
            setActors(data.cast);
        } catch (error) {
            console.log(error);
            <Navigate to='404'/>;
        }
        })();
    }, [movieId]);

    return  (
        <ul className={css.actorsList}>
            {actors && actors.map(actor => { 
                return (
                    <li className={css.actorsItem} key={actor.id}>
                        <img className={css.actorsPhoto} src={
                            actor.profile_path 
                                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` 
                            : "https://ht.ksdr1.net/wp-content/uploads/sites/3/2016/06/no-picture-available-icon-8.png"
                            } alt={actor.name} width="100" height="150"/>
                        <p className={css.actorsName}>{actor.name}</p>
                        <p className={css.actorsCharacter}>{`Character: ${actor.character}`}</p>
                    </li>
                )
            })}
        </ul>
    ) 
}


Cast.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
})),
}

export default Cast
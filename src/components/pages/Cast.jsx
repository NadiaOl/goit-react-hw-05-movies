import { searchMovieActor } from "components/API/APIMovieList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Page.module.css"

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
        }
        })();
    }, [movieId]);

return (

    <ul className={css.actorsList}>
        {actors && actors.map(actor => { 
        return (
                <li className={css.actorsItem} key={actor.id}>
                    <img className={css.actorsPhoto} src={
                        actor.profile_path ?
                        `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://ht.ksdr1.net/wp-content/uploads/sites/3/2016/06/no-picture-available-icon-8.png"
                        } alt={actor.name} width="100" height="150"/>
                        <p className={css.actorsName}>{actor.name}</p>
                        <p className={css.actorsCharacter}>{`Character: ${actor.character}`}</p>
                </li>
        )})}
        <li></li>
    </ul>
    
)
}




export default Cast
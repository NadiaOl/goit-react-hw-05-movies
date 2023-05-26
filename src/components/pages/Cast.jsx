import { searchMovieActor } from "components/API/APIMovieList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        (async () => {
        try {
            const { data } = await searchMovieActor(movieId);
            setActors(data.cast);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
        })();
    }, [movieId]);

return (

    <ul>
        {actors && actors.map(actor => { 
        return (
                <li key={actor.id}>
                    <img src={
                        actor.profile_path ?
                        `https://image.tmdb.org/t/p/original${actor.profile_path}` : "../img/21806614.jpg"
                        } alt={actor.name} width="100"/>
                        <p>{actor.name}</p>
                        <p>{`Character: ${actor.character}`}</p>
                </li>
        )})}
        <li></li>
    </ul>
    
)
}




export default Cast
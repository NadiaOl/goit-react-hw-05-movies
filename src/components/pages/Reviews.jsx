import { searchMovieReview } from "components/API/APIMovieList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Page.module.css"

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        (async () => {
        try {
            const { data } = await searchMovieReview(movieId);
            setReviews(data.results);
            
        } catch (error) {
            console.log(error);
        }
        })();
    }, [movieId]);

return (
    <ul className={css.reviewList}>
        {reviews
        ? (reviews.map(review => {return <li key={review.id}>
            <h5>{review.author}</h5>
            <p>{review.content}</p>
        </li>})) 
        : (<p>We don't find any review</p>)
        }
    </ul>)
}
    




export default Reviews
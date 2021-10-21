import { useState, useEffect } from "react";
import { getReviewsMovie } from "../../../shared/services/api";
import styles from "./Reviews.module.scss";

const Reviews = ({ id }) => {
  const [error, setError] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await getReviewsMovie(id);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      }
    };
    getReviews();
  }, []);
  return (
    <>
      {reviews && (
        <ul className={styles.list}>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className={styles.review}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;

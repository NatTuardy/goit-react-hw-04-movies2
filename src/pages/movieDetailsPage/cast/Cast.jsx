import { useState, useEffect } from "react";
import { getCastMovie } from "../../../shared/services/api";
import styles from "./Cast.module.scss";

const imagePath = "https://image.tmdb.org/t/p/w200/";

const Cast = ({ id }) => {
  const [error, setError] = useState();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getCast = async () => {
      try {
        const { data } = await getCastMovie(id);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      }
    };
    getCast();
  }, []);
  return (
    <ul className={styles.list}>
      {cast &&
        cast.map(({ name, character, id, profile_path }) => (
          <li key={id} className={styles.profile}>
            <img
              src={`${imagePath}${profile_path}`}
              alt=""
              className={styles.image}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
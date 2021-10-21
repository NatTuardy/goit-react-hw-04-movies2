import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../shared/services/api";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const location = useLocation();
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { data } = await getTrendingMovies();
        console.log(data);
        setTrends(data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  const moviesList = trends.map(({ id, title }) => (
    <li key={id}>
      <Link
        className={styles.item}
        to={{ pathname: `/movies/${id}`, state: { from: location } }}
      >
        {title}
      </Link>
    </li>
  ));
  return <ol className={styles.list}>{moviesList}</ol>;
};

export default HomePage;

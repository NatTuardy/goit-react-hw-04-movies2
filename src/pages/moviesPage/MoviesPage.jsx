import { useState, useEffect } from "react";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";
import MovieSerchForm from "./movieSearchForm/MovieSearchForm.jsx";
import { initialState } from "./initialState";
import { getSearchedMovies } from "../../shared/services/api.js";
import { routes } from "../../shared/services/routes.js";
import styles from "./MoviePage.module.scss";

const MoviesPage = () => {
  const [state, setState] = useState({ ...initialState });
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const searchMovie = searchParams.get("query");
        const { data } = await getSearchedMovies(searchMovie);
        setState((prevState) => ({
          ...prevState,
          isLoding: false,
          movies: data.results,
          error: null,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
          isLoading: false,
        }));
      }
    };

    if (location.search) {
      setState((prevState) => ({ ...prevState, isLoding: true }));
      fetchMovie();
    }
  }, [location.search]);

  const onSubmit = ({ searchMovie }) => {
    history.push({
      pathname: location.pathname,
      search: `query=${searchMovie}`,
    });
  };

  const { movies, loading, error } = state;

  if (error) {
    return <Redirect to={routes.NOT_FOUND} />;
  }
  if (loading) {
    return <p>Загрузка постов....</p>;
  }

  const moviesList = movies.map(({ id, title }) => (
    <li key={id}>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
        className={styles.item}
      >
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      <MovieSerchForm onSubmit={onSubmit} />
      <ol className={styles.list}>{moviesList}</ol>
    </>
  );
};

export default MoviesPage;

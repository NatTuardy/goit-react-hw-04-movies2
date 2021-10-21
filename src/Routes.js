import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./shared/services/routes";

const HomePage = lazy(() => import("./pages/homePage" /* webpackChunkName: 'Home-Page' */));
const MoviesPage = lazy(() => import("./pages/moviesPage"  /* webpackChunkName: 'Movie-Page' */));
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage" /* webpackChunkName: 'Movie-Details-Page' */));
const NotFound = lazy(() =>
  import('./shared/components/notFound/NotFound' /* webpackChunkName: 'NotFound-Page' */),
);

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        <Route path={routes.HOME_PAGE} exact render={() => <HomePage />} />
        <Route path={routes.MOVIES_PAGE} exact  render={() => <MoviesPage />} />
        <Route
          path={routes.MOVIE_DATAILS_PAGE}
         
          render={() => <MovieDetailsPage />}
        />
        <Route path={routes.NOT_FOUND} component={NotFound} />
      </Suspense>
    </Switch>
  );
};

export default Routes;

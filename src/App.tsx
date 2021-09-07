import './styles.css';

import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { RouterPathEnum } from './enums/RouterPathEnum';
import { IMovie } from './states/MovieState';

//definimos contantes de coponentes con lazy para el code splitting
const movieList = React.lazy(() => import('./containers/MovieListContainer'));
const movieMyList = React.lazy(() => import('./containers/MovieMyListContainer'));
const MovieDetail = React.lazy(() => import('./components/MovieDetail'));

interface IProps {
  moviesData: IMovie[];
  moviesMyData: IMovie[];
  // propiedad para invocar la actualización de datos.
  onSetMovieData: (movie: IMovie, comment: string, ranking: number) => void;
}
/**
 * Componente principal de la App, el cual contiene el enrutado
 */
class App extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    
    const renderHomeMovies = (props: RouteComponentProps<any>) => {
      return <Redirect to={RouterPathEnum.MOVIE_LIST} />;
    };
    
    //renderizamos el detalle , a partir de la lista de estado correspondiente, principal o mi listado
    const renderMovieDetail = (props: RouteComponentProps<any>, movies: IMovie[]) => {
      const nId: number = Number(props.match.params.id);

      return (
        <MovieDetail
          {...props}
          movieData={movies.find((m) => m.id === nId) as IMovie}
          onSetMovieData={(movie: IMovie, comment: string, ranking: number) => {
            this.props.onSetMovieData(movie, comment, ranking);
            props.history.push(RouterPathEnum.MOVIE_MY_LIST);
          }}
        />
      );
    };

    return (
      // usamos code splitting con routing , usando Suspense y Lazy.
      <React.Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path={RouterPathEnum.HOME} render={(props) => renderHomeMovies(props)} />
              <Route path={RouterPathEnum.MOVIE_LIST} component={movieList} />
              <Route path={RouterPathEnum.MOVIE_MY_LIST} component={movieMyList} />
              <Route path={RouterPathEnum.MOVIE_DETAIL + '/:id'} render={(props) => renderMovieDetail(props, this.props.moviesData)} />
              <Route path={RouterPathEnum.MOVIE_DETAIL_MY + '/:id'} render={(props) => renderMovieDetail(props, this.props.moviesMyData)} />
              <Redirect to={RouterPathEnum.HOME} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}

export default App;

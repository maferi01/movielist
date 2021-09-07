import './styles.css';

import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { RouterPathEnum } from './enums/RouterPathEnum';
import { IMovie } from './states/MovieState';

//definimos contantes de coponentes con lazy para el code splitting
const movieList = React.lazy(() => import('./containers/MovieListContainer'));


interface IProps {
 
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
    
    
    return (
      // usamos code splitting con routing , usando Suspense y Lazy.
      <React.Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path={RouterPathEnum.HOME} render={(props) => renderHomeMovies(props)} />
              <Route path={RouterPathEnum.MOVIE_LIST} component={movieList} />             
              <Redirect to={RouterPathEnum.HOME} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}

export default App;

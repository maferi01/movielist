import { connect } from 'react-redux';
import { IStoreState } from '../reducers';
import { Dispatch } from 'redux';
import App from '../App';
import { createSetMovieDataAction } from 'src/actions/movieAction';
import { IMovie } from 'src/states/MovieState';


export function mapStateToProps( state: IStoreState) {
  return {
    // mapeamos las dos lista de estado a propiedades
    moviesData: state.moviesState.movies,
    moviesMyData: state.moviesState.moviesMyList
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // ejecutamos los dispatcher de Redux para la actualización de datos
    onSetMovieData: (movie:IMovie, comment: string, ranking: number) =>
    {
      dispatch( createSetMovieDataAction(movie,comment,ranking  ) )
    }
  };
}
// creamos componente contenedor que contiene Redux y el propio componante
export default connect(mapStateToProps, mapDispatchToProps)(App);


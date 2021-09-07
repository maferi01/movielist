import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createListMovieMoreReqAction, createListMovieReqAction } from 'src/actions/movieAction';
import MovieList from 'src/components/MovieList';

import { IStoreState } from '../reducers';

export function mapStateToProps( state: IStoreState) {
  return {
    moviesData: state.moviesState.movies ,
    moviesQuery:  state.moviesState.moviesQuery,
    hasMore: (state.moviesState.total_pages as number) > (state.moviesState.page as number)
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // ejecutamos los dispatcher de Redux para la carga de datos
    onListMovieReq: ( query?: string ) => {
      dispatch( createListMovieReqAction( query ) )
    },   
    onListMovieMoreReq: ( ) => {
      dispatch( createListMovieMoreReqAction(  ) )
    },   
  };

}
// creamos componente contenedor que contiene Redux y el propio componante
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
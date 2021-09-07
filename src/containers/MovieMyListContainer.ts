import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MovieMyList from 'src/components/MovieMyList';

import { IStoreState } from '../reducers';

export function mapStateToProps( state: IStoreState) {
  return {
    moviesData: state.moviesState.moviesMyList        
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {  
  };

}
// creamos componente contenedor que contiene Redux y el propio componante
export default connect(mapStateToProps, mapDispatchToProps)(MovieMyList);
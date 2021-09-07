import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MovieList from 'src/components/MovieList';

import { IStoreState } from '../reducers';

export function mapStateToProps( state: IStoreState) {
  return {
   
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
   
  };

}
// creamos componente contenedor que contiene Redux y el propio componante
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
import { connect } from 'react-redux';
import { IStoreState } from '../reducers';
import { Dispatch } from 'redux';
import App from '../App';
import { IMovie } from 'src/states/MovieState';


export function mapStateToProps( state: IStoreState) {
  return {
    
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {

  };
}
// creamos componente contenedor que contiene Redux y el propio componante
export default connect(mapStateToProps, mapDispatchToProps)(App);


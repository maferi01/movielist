import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IMovie } from 'src/states/MovieState';


interface IProps extends RouteComponentProps<MovieList>{
  moviesData: IMovie[];
  moviesQuery: string;
  // propiedades para invocar la carga de movies, consulta y paginación
  onListMovieReq: ( query?: string ) => void, 
  onListMovieMoreReq: ( ) => void, 
}
/**
 * Componente de presentacion para el listado principal de las movies
 */
class MovieList extends React.Component<IProps, {}> {
  constructor(props : IProps){
    super(props);
    this.props.onListMovieReq(this.props.moviesQuery);

  }

  render() {
    return(
        <div>
         
        </div> 
    );
  }

  
 
}

export default MovieList;

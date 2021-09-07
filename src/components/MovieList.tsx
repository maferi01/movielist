import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { IMovie } from 'src/states/MovieState';

import { RouterPathEnum } from '../enums/RouterPathEnum';
import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard';


interface IProps extends RouteComponentProps<MovieList>{
  moviesData: IMovie[];
  moviesQuery: string; 
  hasMore: boolean;
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
           <Link to={ RouterPathEnum.MOVIE_MY_LIST} className="link"> Ir a mi lista...</Link>
          <FilterMovies onFilter={query=> this.props.onListMovieReq(query)} query={this.props.moviesQuery}/>
          <h2>Listado de películas:</h2>
          &nbsp;
          <div className="container-list">  
            { this.props.moviesData.length>0?this.makeVideoElements() : this.makeElementEmpty()}
          </div>
           {this.props.hasMore && <button onClick={()=>this.props.onListMovieMoreReq()} >Mas películas...</button> }
        </div> 
    );
  }

  private makeVideoElements = () => (
    this.props.moviesData.map((movieModel, i) => {
        return (
          <MovieCard movieData={movieModel} extended={false} linkPath={RouterPathEnum.MOVIE_DETAIL + '/' + movieModel.id} key={i} />          
        );
    })
  );
  private makeElementEmpty = () => (
        <h3>No se han encontrado resultados !!</h3>    
  );
 
}

export default MovieList;

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { IMovie } from 'src/states/MovieState';

import { RouterPathEnum } from '../enums/RouterPathEnum';
import MovieCard from './MovieCard';

interface IProps extends RouteComponentProps<MovieMyList>{
  moviesData: IMovie[];  
}
/**
 * Componente de presentacion para el listado propio de las movies, en cual se han agregao el ranking o comentario
 */
class MovieMyList extends React.Component<IProps, {}> {
  constructor(props : IProps){
    super(props);
    
  }

  render() {
    return(
        <div>
          <Link to={ RouterPathEnum.MOVIE_LIST} className="link"> Ir a lista principal...</Link>
        
          <h2>Mi lista de películas:</h2>
          &nbsp;
          <div className="container-list">  
            { this.makeVideoElements() }
          </div>
        </div> 
    );
  }

  private makeVideoElements = () => (
    this.props.moviesData.map((movieModel, i) => {
        return (          
          <MovieCard movieData={movieModel} extended={false} linkPath={RouterPathEnum.MOVIE_DETAIL_MY + '/' + movieModel.id} key={i} />        
            
        );
    })
  );  
 
}

export default MovieMyList;

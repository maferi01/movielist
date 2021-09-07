import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { getImgMovie } from 'src/apis/apis';
import { RouterPathEnum } from 'src/enums/RouterPathEnum';
import { IMovie } from 'src/states/MovieState';
import FormMovie from './FormMovie';
import MovieCard from './MovieCard';

interface IProps extends RouteComponentProps<MovieDetail> {
  movieData: IMovie;
  // propiedades para invocar la actualización de datos de la movie
  onSetMovieData: (movie: IMovie, comment: string, ranking: number) => void;
}
/**
 * Componente de presentacion para el detalle de la movie
 */
class MovieDetail extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={RouterPathEnum.MOVIE_LIST} className="link">Volver al listado ...</Link>
        <Link to={ RouterPathEnum.MOVIE_MY_LIST} className="link"> Ir a mi listado...</Link>
        <h1>Datos de la película :</h1>
        &nbsp;
        <MovieCard movieData={this.props.movieData}  extended={true}/> 
        <FormMovie
          comment={this.props.movieData.comment as string}
          ranking={this.props.movieData.ranking as number}
          onAccept={(comment: string, ranking: number) => this.props.onSetMovieData(this.props.movieData, comment, ranking)}
        />
      </div>
    );
  }

  
}

export default MovieDetail;

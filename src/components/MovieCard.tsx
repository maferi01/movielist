import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { getImgMovie } from 'src/apis/apis';
import { RouterPathEnum } from 'src/enums/RouterPathEnum';
import { IMovie } from 'src/states/MovieState';

interface IProps {
  movieData: IMovie;
  extended: boolean;
  linkPath?: string;
}
/**
 * Componente de presentacion para mostrar los datos de la movie, puede ser en varios modos depende del extended
 */
class MovieCard extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
   
    return (
      <div className={ `container-card ${this.props.extended?'extended':''}` }>
        &nbsp;
        {this.makeVideoElement()}
      </div>
    );
  }

  private makeVideoElement = () => (
    <div>
      <div className="img-card">
        {this.props.linkPath ? (
          <Link to={this.props.linkPath}>
            <img src={getImgMovie(this.props.movieData.poster_path)} />
          </Link>
        ) : (
          <img src={getImgMovie(this.props.movieData.poster_path)} />
        )}
        {this.props.movieData.ranking ? (
          <div className="ranking">{this.props.movieData.ranking}</div>
        ) : (
         <span/>
        )}

      </div>
      <div>
        <span className="label">Título :</span> {this.props.movieData.title}
      </div>
      <div>
        <span className="label">Feha de estreno :</span> {this.props.movieData.release_date}
      </div>
      {this.props.extended ? (
        <div>
          <div>
            <span className="label">Descripción :</span> {this.props.movieData.overview}
          </div>
          <div>
            <span className="label">Titulo original :</span> {this.props.movieData.original_title}
          </div>
          <div>
            <span className="label">Popularidad :</span> {this.props.movieData.popularity}
          </div>
          <div>
            <span className="label">Adulto :</span> {this.props.movieData.adult}
          </div>
          <div>
            <span className="label">Lenguaje original :</span> {this.props.movieData.original_language}
          </div>
          <div>
            <span className="label">Video :</span> {this.props.movieData.video}
          </div>
          <div>
            <span className="label">Votos :</span> {this.props.movieData.vote_count}
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default MovieCard;

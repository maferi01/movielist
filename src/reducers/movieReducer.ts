import { MovieAction, MovieActionTypes } from 'src/actions/movieAction';
import { IMovie, IMoviesState } from 'src/states/MovieState';

/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 */

const initialState: IMoviesState = {
  movies: [],
  moviesMyList: [],
  moviesQuery: 'Alien',
};
/**
 * 
 * @param state Definimos el reductor para el estado, genramos siempre nuevo estado, en este caso para la carga de la lista de movies
 *  y para actualizar los datos de mi listado con el ranking y comentario
 * @param action 
 * @returns 
 */
export function reduceMoviesState(state: IMoviesState = initialState, action: MovieAction): IMoviesState {
  switch (action.type) {
    case MovieActionTypes.LIST_MOVIE_OK:
      return {
        movies: action.page > 1 ? [...state.movies, ...action.results] : [...action.results],
        moviesMyList: [...state.moviesMyList],
        moviesQuery: action.query,
        page: action.page,
        total_pages: action.total_pages,
        total_results: action.total_results,
      } as IMoviesState;
    case MovieActionTypes.SET_MOVIE_DATA:
      return {
        ...state,
        moviesMyList: isInList(action.movie, state.moviesMyList)
          ? updateMovieData(action.movie, state.moviesMyList, action.comment, action.ranking)
          : [...state.moviesMyList, { ...action.movie, comment: action.comment, ranking: action.ranking }],
      } as IMoviesState;
    default:
      return state;
  }
}

// funciones helper para el manejo del estado
function isInList(movie: IMovie, listMovies: IMovie[]): boolean {
  return listMovies.some((m) => m.id === movie.id);
}

function updateMovieData(movie: IMovie, listMovies: IMovie[], comment: string, ranking: number) {
  return listMovies.map((m) => (m.id === movie.id ? { ...m, comment, ranking } : m));
}

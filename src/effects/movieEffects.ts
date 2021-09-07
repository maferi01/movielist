import { ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { IListMovieOkAction, IListMovieReqAction, MovieAction, MovieActionTypes } from 'src/actions/movieAction';
import { fetchMovies } from 'src/apis/apis';

// efecto para cargar los datos , una vez cargados mandamos el action con sus datos de respuesta,
// tambien transforma el modelo Api al modelo del action
export const movieListReqEpic = (action$:Observable<MovieAction>) => action$.pipe(
    ofType(MovieActionTypes.LIST_MOVIE_REQ),
    tap(a=> console.log('tap with', a)),
    mergeMap((a:IListMovieReqAction)=> fetchMovies(a.query).pipe(
      tap(a=> console.log('response api', a)),  
      map((respMovies)  => ({ type: MovieActionTypes.LIST_MOVIE_OK,
         page: respMovies.page,
         query: a.query,
         results: respMovies.results,
         total_pages: respMovies.total_pages,
         total_results: respMovies.total_results
           } as IListMovieOkAction)
    ))
   )
  )

  // efecto para cargar los datos , cuando se de al paginado , consulta en el estado para saber cual es el query y la pagina actual( utilizamos el observable del estado y lo combinamos con rxjs) , una vez cargados mandamos el action .
  export const movieListMoreReqEpic = (action$:Observable<MovieAction>,state$: StateObservable<any>) => action$.pipe(
    ofType(MovieActionTypes.LIST_MOVIE_MORE_REQ),
    tap(a=> console.log('tap with LIST_MOVIE_MORE_REQ', a)),
    withLatestFrom(state$),
    tap(a=> console.log('tap with latest', a)),
    mergeMap(([a,state])=> fetchMovies(state.moviesState.moviesQuery,++(state.moviesState.page as number)).pipe(
      tap(a=> console.log('response api', a)),  
      map((respMovies)  => ({ type: MovieActionTypes.LIST_MOVIE_OK,
         page: respMovies.page,
         query: state.moviesState.moviesQuery,
         results: respMovies.results,
         total_pages: respMovies.total_pages,
         total_results: respMovies.total_results
           } as IListMovieOkAction)
    ))
   )
  )





  
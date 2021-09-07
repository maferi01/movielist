/**
 * Definimos las acciones para Redux
 */

import { IMovie } from 'src/states/MovieState';

export enum MovieActionTypes {
  LIST_MOVIE_REQ = 'listMovieReq',
  LIST_MOVIE_MORE_REQ = 'listMovieMoreReq',
  LIST_MOVIE_OK = 'listMovieOk',
  SET_MOVIE_DATA = 'setMovieData',
}

// actions para la carga de movies y la respuest de OK
export interface IListMovieReqAction {
  type: MovieActionTypes.LIST_MOVIE_REQ;
  query?: string;
}
export interface IListMovieMoreReqAction {
  type: MovieActionTypes.LIST_MOVIE_MORE_REQ;
}

export interface IListMovieOkAction {
  type: MovieActionTypes.LIST_MOVIE_OK;
  query: string;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
//******************************** */
// action para actualizar los datos
export interface ISetMovieDataAction {
  type: MovieActionTypes.SET_MOVIE_DATA;
  movie: IMovie;
  comment: string;
  ranking: number;
}

export type MovieAction = IListMovieReqAction | IListMovieOkAction | IListMovieMoreReqAction | ISetMovieDataAction;

// helpers para crear los actions
export function createListMovieReqAction(query?: string): IListMovieReqAction {
  return {
    type: MovieActionTypes.LIST_MOVIE_REQ,
    query,
  };
}


export function createListMovieMoreReqAction(): IListMovieMoreReqAction {
  return {
    type: MovieActionTypes.LIST_MOVIE_MORE_REQ,
  };
}

export function createListMovieOkAction(
  results: IMovie[],
  query: string,
  page: number,
  total_pages: number,
  total_results: number
): IListMovieOkAction {
  return {
    type: MovieActionTypes.LIST_MOVIE_OK,
    results,
    query,
    page,
    total_pages,
    total_results,
  };
}
export function createSetMovieDataAction(movie:IMovie, comment: string, ranking: number): ISetMovieDataAction {
  return {
    type: MovieActionTypes.SET_MOVIE_DATA,
    movie,
    comment,
    ranking,
  };
}

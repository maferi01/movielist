import { IMovieApi } from "src/apis/modelsapis";

/**
 * Definimos el modelo del estado para movies, en este caso tendriamos dos listas, la pricipal y mi lista
 * , ademas de datos extra para manejar la propia listado como la paginaciín y guardar la consulta actual 
 */
export interface IMoviesState{
  movies: IMovie[];
  moviesMyList: IMovie[];
  moviesQuery: string; 
  page?: number;
  total_pages?: number;
  total_results?: number;
}

/**
 * Definimos el modelo de IMovie que extiendede modelo del api.
 */
 export interface IMovie extends IMovieApi{
   ranking?:number;
   comment?:string;
 }
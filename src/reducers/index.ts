import { combineReducers, Reducer } from 'redux';
import { IMoviesState } from 'src/states/MovieState';

import { reduceMoviesState } from './movieReducer';

/*
 * Definimos la raiz del store 
 * contiene cada sub esatdo en este caso tenemos solo Movies
 */  
export interface IStoreState {
  moviesState: IMoviesState,  
}

/**
 * Combinamos todos los reducer para formar un solo objeto estado.
 * 
 */
export const rootReducer: Reducer<IStoreState> = combineReducers({
  moviesState: reduceMoviesState  
} );

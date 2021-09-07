import { IMoviesState } from 'src/states/MovieState';

/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 */

const initialState: IMoviesState = {
  
};
/**
 * 
 * @param state Definimos el reductor para el estado, genramos siempre nuevo estado, en este caso para la carga de la lista de movies
 *  y para actualizar los datos de mi listado con el ranking y comentario
 * @param action 
 * @returns 
 */
export function reduceMoviesState(state: IMoviesState = initialState, action: any): IMoviesState {
  switch (action.type) {
  
    default:
      return state;
  }
}


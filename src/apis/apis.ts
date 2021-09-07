import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { IResponseApi } from './modelsapis';

//definimos las llamadas Apis estrenas para la carga de las movies, retorna el modelo APi
export function fetchMovies(query?:string,page?:number):Observable<IResponseApi>{
   return ajax.getJSON<IResponseApi>(getUrl(query,page)).pipe(    
   );
}

const urlApis='https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3';

//parametrizamos la llamada, para la query y pginación
function getUrl(query:string='movie',page?:number){
  const url=`${urlApis}&query=${query}`
    return page? `${url}&page=${page}`: url; 
}
export function getImgMovie(img:string){
  return  `https://image.tmdb.org/t/p/w500/${img}`
}
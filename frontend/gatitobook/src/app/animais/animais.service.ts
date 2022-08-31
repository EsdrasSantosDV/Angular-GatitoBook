import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { Animais,Animal } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {


  constructor(private http:HttpClient,private TokenService:TokenService) { }

  listaDoUsuario(nomeDoUsuario:string):Observable<Animais>
  {

    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);

  }

  buscaPorID(id:number):Observable<Animal>{

    return this.http.get<Animal>(`${API}/photos/${id}`);
  }



}

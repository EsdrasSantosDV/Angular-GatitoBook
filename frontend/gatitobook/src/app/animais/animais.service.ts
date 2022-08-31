import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { Animais } from './animais';
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
    //FAZENDO UM GET E DANDO O HEADER QUE O BACKEND TA EXIGINDO
    const token=this.TokenService.retornaToken();
    const headers=new HttpHeaders().append('x-access-token',token);
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
      headers,
    });

  }
}

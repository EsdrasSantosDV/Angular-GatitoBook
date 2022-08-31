import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  //vou declarar no ng init pra isso o !
  animais!:Animais;

  constructor(private usuarioService:UsuarioService,private animaisService:AnimaisService) { }

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario)=>
    {
      const userName=usuario.name ?? '';
      this.animaisService.listaDoUsuario(userName).subscribe((animais)=>
      {
        this.animais=animais;
      });
    });
  }

}

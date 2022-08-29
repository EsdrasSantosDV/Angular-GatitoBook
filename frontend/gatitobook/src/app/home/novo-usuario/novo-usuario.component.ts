import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  //! PARA INICILIZAR AO INVES DO CONTRUTOR NO NG ONINIT
  novoUsuarioForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private novoUsuarioService:NovoUsuarioService
    ) { }

  //REQUIRED OBRIGATORIO,EMAIL
  ngOnInit(): void {
    this.novoUsuarioForm=this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      fullName:['',[Validators.required,Validators.minLength(4)]],
      userName:['',[minusculoValidator]],
      password:[''],


    });

  }

  cadastrar(){
    const NovoUsuario=this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(NovoUsuario)
  }

}
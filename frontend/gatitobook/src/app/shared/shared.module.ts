import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//AGRUPAR MODULOS COMUNS
@NgModule({

  imports: [
    CommonModule,MensagemModule,ReactiveFormsModule,
  ],
  exports:[CommonModule,MensagemModule,ReactiveFormsModule,],
})
export class SharedModule { }

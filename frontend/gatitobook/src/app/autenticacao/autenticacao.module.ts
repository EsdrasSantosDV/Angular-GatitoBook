import { AutenticacaoInterceptor } from './autenticacao.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AutenticacaoInterceptor,
      //POR PADRÃO TEMOS SO UM INTERCEPTOR
      multi:true,
      //PRA TER UMA CADEIA DE INTERCEPTOR
    }
  ]
})
export class AutenticacaoModule { }

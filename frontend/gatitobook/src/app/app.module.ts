import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,CabecalhoModule,RodapeModule,AutenticacaoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

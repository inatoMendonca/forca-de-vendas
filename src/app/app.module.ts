import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // Módulo da dependência de paginação
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaClienteComponent } from './paginas/cliente/lista-cliente/lista-cliente.component';
import { ListaColaboradorComponent } from './paginas/colaborador/lista-colaborador/lista-colaborador.component';
import { FormClienteComponent } from './compartilhado/form-cliente/form-cliente.component';
import { FormColaboradorComponent } from './compartilhado/form-colaborador/form-colaborador.component';
import { CriarColaboradorComponent } from './paginas/colaborador/criar-colaborador/criar-colaborador.component';
import { EditarColaboradorComponent } from './paginas/colaborador/editar-colaborador/editar-colaborador.component';
import { CriarClienteComponent } from './paginas/cliente/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { ListaObraComponent } from './paginas/obra/lista-obra/lista-obra.component';
import { CriarObraComponent } from './paginas/obra/criar-obra/criar-obra.component';
import { EditarObraComponent } from './paginas/obra/editar-obra/editar-obra.component';
import { FormObraComponent } from './compartilhado/form-obra/form-obra.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    ErrorMsgComponent,
    ListaClienteComponent,
    ListaColaboradorComponent,
    FormClienteComponent,
    FormColaboradorComponent,
    CriarColaboradorComponent,
    EditarColaboradorComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    ListaObraComponent,
    CriarObraComponent,
    EditarObraComponent,
    FormObraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaObraComponent } from './paginas/obra/lista-obra/lista-obra.component';
import { ListaClienteComponent } from './paginas/cliente/lista-cliente/lista-cliente.component';
import { ListaColaboradorComponent } from './paginas/colaborador/lista-colaborador/lista-colaborador.component';
import { EditarClienteComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { EditarColaboradorComponent } from './paginas/colaborador/editar-colaborador/editar-colaborador.component';
import { CriarColaboradorComponent } from './paginas/colaborador/criar-colaborador/criar-colaborador.component';
import { CriarClienteComponent } from './paginas/cliente/criar-cliente/criar-cliente.component';
import { CriarObraComponent } from './paginas/obra/criar-obra/criar-obra.component';
import { EditarObraComponent } from './paginas/obra/editar-obra/editar-obra.component';


const routes: Routes = [
  {path: 'home', component: ListaObraComponent},
  {path: 'home/obras', component: ListaObraComponent},
  {path: 'cadastro/clientes', component: ListaClienteComponent},
  {path: 'cadastro/colaboradores', component: ListaColaboradorComponent},
  {path: 'cadastro/clientes/novocliente', component: CriarClienteComponent},
  {path: 'cadastro/clientes/editar/:id', component: EditarClienteComponent},
  {path: 'cadastro/colaboradores/novocolaborador', component: CriarColaboradorComponent},
  {path: 'cadastro/colaboradores/editar/:id', component: EditarColaboradorComponent},
  {path: 'cadastro/obras/novaobra', component: CriarObraComponent},
  {path: 'cadastro/obras/editar/:id', component: EditarObraComponent},
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

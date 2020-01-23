import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment.prod';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../interfaces/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Colaborador[]> {
    const url = `${environment.forcaDeVendasApi}/colaboradores`;
    return this.http.get<Colaborador[]>(url);
  }

  buscarUm(id: number): Observable<Colaborador> {
    const url = `${environment.forcaDeVendasApi}/colaboradores/${id}`;
    return this.http.get<Colaborador>(url);
  }

  criar(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${environment.forcaDeVendasApi}/colaboradores/`;
    return this.http.post<Colaborador>(url, colaborador);
  }

  atualizar(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${environment.forcaDeVendasApi}/colaboradores/${colaborador.idColaborador}`;
    return this.http.put<Colaborador>(url, colaborador);
  }

  excluir(id: number): Observable<Colaborador> {
    const url = `${environment.forcaDeVendasApi}/colaboradores/${id}`;
    return this.http.delete<Colaborador>(url);
  }
}

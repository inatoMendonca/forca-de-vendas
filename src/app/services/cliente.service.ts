import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment.prod';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Cliente[]> {
    const url = `${environment.forcaDeVendasApi}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  buscarUm(id: number): Observable<Cliente> {
    const url = `${environment.forcaDeVendasApi}/clientes/${id}`;
    return this.http.get<Cliente>(url);
  }

  criar(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.forcaDeVendasApi}/clientes/`;
    return this.http.post<Cliente>(url, cliente);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.forcaDeVendasApi}/clientes/${cliente.idCliente}`;
    return this.http.put<Cliente>(url, cliente);
  }

  excluir(id: number): Observable<Cliente> {
    const url = `${environment.forcaDeVendasApi}/clientes/${id}`;
    return this.http.delete<Cliente>(url);
  }
}

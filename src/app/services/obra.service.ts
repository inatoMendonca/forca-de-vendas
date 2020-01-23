import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obra } from '../interfaces/obra';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Obra[]> {
    const url = `${environment.forcaDeVendasApi}/obras`;
    return this.http.get<Obra[]>(url);
  }

  buscarUm(id: number): Observable<Obra> {
    const url = `${environment.forcaDeVendasApi}/obras/${id}`;
    return this.http.get<Obra>(url);
  }

  criar(obra: Obra): Observable<Obra> {
    const url = `${environment.forcaDeVendasApi}/obras/`;
    return this.http.post<Obra>(url, obra);
  }

  atualizar(obra: Obra): Observable<Obra> {
    const url = `${environment.forcaDeVendasApi}/obras/${obra.idObra}`;
    return this.http.put<Obra>(url, obra);
  }

  excluir(id: number): Observable<Obra> {
    const url = `${environment.forcaDeVendasApi}/obras/${id}`;
    return this.http.delete<Obra>(url);
  }

  buscarNome(clienteObra: string): Observable<Obra[]> {
    console.log(clienteObra);
    if (clienteObra != null) {
      console.log('DENTRO DO IF' + clienteObra);
    }
    const url = `${environment.forcaDeVendasApi}/obras/nome/${clienteObra}`;
    return this.http.get<Obra[]>(url);
  }

  buscarData(dataCadObra: Date): Observable<Obra[]> {
    if (dataCadObra != null) {
      console.log(dataCadObra);
    }
    const url = `${environment.forcaDeVendasApi}/obras/data/${dataCadObra}`;
    return this.http.get<Obra[]>(url);
  }
}

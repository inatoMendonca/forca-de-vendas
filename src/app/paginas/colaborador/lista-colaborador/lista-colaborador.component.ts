import { Component, OnInit, ViewChild } from '@angular/core';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Colaborador } from 'src/app/interfaces/colaborador';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-lista-colaborador',
  templateUrl: './lista-colaborador.component.html',
  styleUrls: ['./lista-colaborador.component.css']
})
export class ListaColaboradorComponent implements OnInit {

  public colaboradores: Colaborador[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  pag = 1 ;
  contador = 5;
  deleteModalRef: BsModalRef;

  constructor(private colaboradorService: ColaboradorService, private modalService: BsModalService) { }

  colaboradorExcluir: number;
  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.colaboradorService.buscarTodos().subscribe((colaboradores: Colaborador[]) => {
      this.colaboradores = colaboradores; // Executa o primeiro callback retornando um array de colaboradores como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os colaboradores'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.colaboradorExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.colaboradorService.excluir(this.colaboradorExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar o colaborador'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
  existemColaboradores(): boolean {
    return this.colaboradores && this.colaboradores.length > 0;
  }

}

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Obra } from 'src/app/interfaces/obra';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ObraService } from 'src/app/services/obra.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-obra',
  templateUrl: './lista-obra.component.html',
  styleUrls: ['./lista-obra.component.css']
})
export class ListaObraComponent implements OnInit {

  public obras: Obra[];
  pag = 1 ;
  contador = 5;

  deleteModalRef: BsModalRef;

  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  constructor(private obraService: ObraService, private modalService: BsModalService) {  }

  @Input() obra: Obra = {} as Obra;
  obraExcluir: number;

  ngOnInit() {
    this.buscarTodos();
  }

  onSubmit(name: string, date: Date) {

    if (name && !date) {

      this.obraService.buscarNome(name).subscribe((obras: Obra[]) => {
        this.obras = obras;
      }, () => { this.errorMsgComponent.setError('FALHA!!!'); });
    }

    if (!name && date) {
      this.obraService.buscarData(date).subscribe((obras: Obra[]) => {
        this.obras = obras;
      });
    }
  }

  buscarTodos() {
    this.obraService.buscarTodos().subscribe((obras: Obra[]) => {
      this.obras = obras; // Executa o primeiro callback retornando um array de obras como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar as Obras'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.obraExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.obraService.excluir(this.obraExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar a Obra'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemObras(): boolean {
    return this.obras && this.obras.length > 0;
  }

}

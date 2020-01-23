import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/interfaces/colaborador';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css']
})
export class EditarColaboradorComponent {

  alterarColaborador: Colaborador;
  alteraModalRef: BsModalRef;

  public colaborador: Colaborador;
  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;

  constructor(private colaboradorService: ColaboradorService, private activatedRoute: ActivatedRoute, private router: Router,
              private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.colaboradorService.buscarUm(id).subscribe(
      (colaborador: Colaborador) => {this.colaborador = colaborador; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Colaborador'); });
  }

  atualizar(colaborador: Colaborador) {
    this.alterarColaborador = colaborador;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.colaboradorService.atualizar(this.alterarColaborador).subscribe(
      () => {this.router.navigateByUrl('cadastro/colaboradores'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Colaborador'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }

}

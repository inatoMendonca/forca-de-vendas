import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/interfaces/colaborador';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-criar-colaborador',
  templateUrl: './criar-colaborador.component.html',
  styleUrls: ['./criar-colaborador.component.css']
})
export class CriarColaboradorComponent {

  @ViewChild(ErrorMsgComponent, { static: false }) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', { static: false }) insereModal;

  insereModalRef: BsModalRef;
  insereColaborador: Colaborador;

  constructor(private colaboradorService: ColaboradorService, private router: Router,
              private modalService: BsModalService) { }

  criar(servico: Colaborador) {
    this.insereColaborador = servico;
    this.insereModalRef = this.modalService.show(this.insereModal, { class: 'modal-sm' });
  }

  confirmaInsercao() {
    this.colaboradorService.criar(this.insereColaborador).subscribe(
      () => { this.router.navigateByUrl('cadastro/colaboradores'); this.insereModalRef.hide(); },
      () => { this.erroMsgComponent.setError('Falha na criação do Colaborador'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }

}

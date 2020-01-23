import { Component, ViewChild } from '@angular/core';
import { Obra } from 'src/app/interfaces/obra';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ObraService } from 'src/app/services/obra.service';

@Component({
  selector: 'app-editar-obra',
  templateUrl: './editar-obra.component.html',
  styleUrls: ['./editar-obra.component.css']
})
export class EditarObraComponent {

  alterarObra: Obra;
  alteraModalRef: BsModalRef;

  public obra: Obra;
  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;

  // tslint:disable-next-line: max-line-length
  constructor(private obraService: ObraService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.obraService.buscarUm(id).subscribe(
      (obra: Obra) => {this.obra = obra; },
      () => {this.erroMsgComponent.setError('Falha ao buscar a Obra'); });
  }

  atualizar(obra: Obra) {
    this.alterarObra = obra;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.obraService.atualizar(this.alterarObra).subscribe(
      () => {this.router.navigateByUrl('cadastro/obras'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar a Obra'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }
}

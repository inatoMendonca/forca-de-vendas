import { Component, ViewChild, } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ObraService } from 'src/app/services/obra.service';
import { Router } from '@angular/router';
import { Obra } from 'src/app/interfaces/obra';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-criar-obra',
  templateUrl: './criar-obra.component.html',
  styleUrls: ['./criar-obra.component.css']
})
export class CriarObraComponent {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereObra: Obra;

  constructor(private obraService: ObraService, private router: Router, private modalService: BsModalService) { }

  criar(obra: Obra) {
    this.insereObra = obra;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});
  }

  confirmaInsercao() {
    this.obraService.criar(this.insereObra).subscribe (
      () => {this.router.navigateByUrl('cadastro/obras');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação da Obra'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }
}

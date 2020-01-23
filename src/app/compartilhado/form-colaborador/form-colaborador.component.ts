import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Colaborador } from 'src/app/interfaces/colaborador';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrls: ['./form-colaborador.component.css']
})
export class FormColaboradorComponent {

  @Input() colaborador: Colaborador = {} as Colaborador;
  @Output() outputColaborador: EventEmitter<Colaborador> = new EventEmitter();

  onSubmit() {
    this.outputColaborador.emit(this.colaborador);
  }
}

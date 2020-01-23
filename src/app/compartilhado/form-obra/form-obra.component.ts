import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Obra } from 'src/app/interfaces/obra';

@Component({
  selector: 'app-form-obra',
  templateUrl: './form-obra.component.html',
  styleUrls: ['./form-obra.component.css']
})
export class FormObraComponent {

  constructor() { }

  @Input() obra: Obra = {} as Obra;
  @Output() outputObra: EventEmitter<Obra> = new EventEmitter();

  onSubmit() {
    this.outputObra.emit(this.obra);
  }

}

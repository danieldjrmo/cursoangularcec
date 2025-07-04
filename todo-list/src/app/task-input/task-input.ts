import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule,FontAwesomeModule ],
  standalone: true,
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInput {
  descripcion = '';
    faFloppyDisk = faFloppyDisk;

  @Output() agregar = new EventEmitter<string>();

  emitirAgregar() {
    const texto = this.descripcion.trim();
    if (texto) {
      this.agregar.emit(texto);
      this.descripcion = '';  
    }
  }
}

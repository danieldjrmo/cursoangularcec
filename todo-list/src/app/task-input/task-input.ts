import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInput {
  descripcion = '';

  @Output() agregar = new EventEmitter<string>();

  emitirAgregar() {
    const texto = this.descripcion.trim();
    if (texto) {
      this.agregar.emit(texto);
      this.descripcion = '';  // limpiar input
    }
  }
}

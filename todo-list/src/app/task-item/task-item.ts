import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Task {
  id: number;
  descripcion: string;
}

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task!: Task;
    faCheck = faCheck;

    @Output() eliminar = new EventEmitter<number>();

    emitirEliminar (id:number){
      this.eliminar.emit(id)
    }


}

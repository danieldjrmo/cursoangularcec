import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  id: number;
  descripcion: string;
}

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task!: Task;

    @Output() eliminar = new EventEmitter<number>();

    emitirEliminar (id:number){
      this.eliminar.emit(id)
    }


}

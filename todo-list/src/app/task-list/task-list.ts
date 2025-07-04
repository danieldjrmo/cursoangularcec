import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from '../task-item/task-item';

interface Task {
  id: number;
  descripcion: string;
}

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() eliminar = new EventEmitter<number>();

  eliminarTarea(id: number) {
    this.eliminar.emit(id);
  }

}

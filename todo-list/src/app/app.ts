import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';

interface Task {
  id: number,
  descripcion: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TaskInput, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TODO-LIST';

  tasks: Task[] = []

  agregarTarea(texto: string) {
    if (texto) {
      const nuevaTarea: Task = {
        id: this.tasks.length + 1,
        descripcion: texto,
          
      };
   
     this.tasks = [...this.tasks, nuevaTarea];
    }
  }

  eliminarTarea(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
 
}

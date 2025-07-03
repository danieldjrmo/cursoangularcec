import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number,
  descripcion: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TODO-LIST';

  tasks: Task[] = [{ id: 1, descripcion: 'tarea1' }]

  descripcion = '';

  agregarTarea() {
    const texto = this.descripcion.trim();

    if (texto) {
      const nuevaTarea: Task = {
        id: this.tasks.length + 1,
        descripcion: texto,
      };
      this.tasks.push(nuevaTarea);
    }
  }

  completarTarea(id:number){
     this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

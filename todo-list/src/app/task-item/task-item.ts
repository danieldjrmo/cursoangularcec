import { Component, Input, Output } from '@angular/core';



@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() id!: number;
  @Input() descripcion!: string;

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';

@Component({
  selector: 'app-root',
  //standalone:true,
  imports: [RouterOutlet,FirstComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'primero';
}

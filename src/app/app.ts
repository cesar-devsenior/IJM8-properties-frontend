import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected name = "Cesar Augusto Diaz";

  changeName(): void {
    this.name = "Alonso Vargas";
  }
}

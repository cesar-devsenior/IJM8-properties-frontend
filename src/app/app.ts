import { Component, signal } from '@angular/core';
import { PropertyList } from './features/properties/components/property-list/property-list';
import { PropertyForm } from "./features/properties/components/property-form/property-form";

@Component({
  selector: 'app-root',
  imports: [
    PropertyList, 
    PropertyForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

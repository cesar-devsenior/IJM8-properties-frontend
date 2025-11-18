import { Component, input, Input } from '@angular/core';
import { Property } from '../../model/property';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css',
})
export class PropertyCard {
  // @Input({ required: true }) property!: Property;
  property = input.required<Property>();
}

import { Component, signal } from '@angular/core';
import { Property } from '../../model/property';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-property-detail',
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css',
})
export class PropertyDetail {
  protected property = signal<Property>({
    id: 5,
    address: "Cra 1 # 2 - 03",
    description: "Una casa bien ubicada",
    price: 2000000,
    city: "Pereira",
    bathrooms: 2000,
    bedrooms: 3000,
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
  });
}


// !
// ??
// ?:
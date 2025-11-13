import { Component } from '@angular/core';
import { Property } from '../../model/property';

@Component({
  selector: 'app-property-list',
  imports: [],
  templateUrl: './property-list.html',
  styleUrl: './property-list.css',
})
export class PropertyList {

  protected properties: Property[] = [
    {
      id: 1,
      address: "Cra 1 # 2 - 03",
      description: "Una casa bien ubicada",
      price: 2000,
      city: "Pereira",
      bathrooms: 2,
      bedrooms: 3,
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
    },
    {
      id:2,
      address: "Cra 1 # 2 - 04",
      description: "Una casa bien ubicada en el mejor lugar de la ciudad. Tambien encontrarás los mejores lugares para disfrutar de rumba y actividades culturales",
      price: 3500,
      city: "Cali",
      bathrooms: 3,
      bedrooms: 5,
      image: "https://tse3.mm.bing.net/th/id/OIP.QyuhtVr9Y99YQ9aATPv5ZgHaF7?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id:3,
      address: "Cra 1 # 2 - 05",
      description: "Una casa a las afueras de la ciudad",
      price: 4500,
      city: "Bogota",
      bathrooms: 3,
      bedrooms: 5,
      image: "https://wallpaperaccess.com/full/3885499.jpg"
    }

  ];

}

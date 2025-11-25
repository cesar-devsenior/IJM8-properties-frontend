import { Injectable } from "@angular/core";
import { Property } from "../model/property";
import { delay, Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [];

  constructor() {
    this.properties = [
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
        id: 2,
        address: "Cra 1 # 2 - 04",
        description: "Una casa bien ubicada en el mejor lugar de la ciudad. Tambien encontrarás los mejores lugares para disfrutar de rumba y actividades culturales",
        price: 3500,
        city: "Cali",
        bathrooms: 3,
        bedrooms: 5,
        image: "https://tse3.mm.bing.net/th/id/OIP.QyuhtVr9Y99YQ9aATPv5ZgHaF7?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: 3,
        address: "Cra 1 # 2 - 05",
        description: "Una casa a las afueras de la ciudad",
        price: 4500,
        city: "Bogota",
        bathrooms: 3,
        bedrooms: 5,
        image: "https://wallpaperaccess.com/full/3885499.jpg"
      },
      {
        id: 4,
        address: "Cra 1 # 2 - 07",
        description: "Una casa a las afueras de la ciudad",
        price: 4500,
        city: "Bogota",
        bathrooms: 3,
        bedrooms: 5,
        image: "https://wallpaperaccess.com/full/3885499.jpg"
      }

    ];
  }

  getAll(): Observable<Property[]> {
    return of(this.properties)
      .pipe(delay(3000));
  }

  getById(id: number): Observable<Property | undefined> {
    return of(this.properties.find(p => p.id === id));
  }

  create(info: Property): Observable<void> {
    // Si el ID esta vacio, genere un nuevo ID
    if(!info.id) {
      console.log('El ID está vacio');
      
      const maxId = this.properties.map(p => p.id).reduce((a, b) => a > b ? a : b);
      info.id = maxId + 1;
    } else {
      console.log('Buscando el ID');
      
      // Busco que el id no sea repetido, sino error;
      if (this.properties.find(p => p.id === info.id)) {
        console.log('La propiedad ya existe');
        return throwError(() => new Error(`Ya existe una propiedad con el mismo ID: ${info.id}`));
      }
    }

    console.log('Propiedad agregada');
    this.properties = [...this.properties, info];
    return of();
  }
}
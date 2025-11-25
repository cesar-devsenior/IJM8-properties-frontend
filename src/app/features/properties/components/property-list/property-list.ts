import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Property } from '../../model/property';
import { PropertyCard } from "../property-card/property-card";
import { PropertyService } from '../../service/property-service';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCard],
  templateUrl: './property-list.html',
  styleUrl: './property-list.css',
})
export class PropertyList implements OnInit {
  private propertyService = inject(PropertyService);

  protected readonly isLoading = signal(true);
  protected readonly properties = signal<Property[]>([]);

  protected readonly total = computed(() => this.properties().length);

  // constructor(private propertyService: PropertyService) {
  constructor() {
    // " y ' -> string
    // ` ` -> interpolacion de cadenas ´
    effect(() => {
      console.log(`Ha cambiado la información de las propiedades y ahora hay ${this.total()} propiedades`);
    });
  }

  ngOnInit(): void {
    this.isLoading.set(true);
    this.propertyService.getAll()
      .subscribe({
        next: (data) => {
          this.properties.set(data);
          this.isLoading.set(false);
        },
        error: () => {
          console.error('Ocurrió un problema al obtener las propiedades');
        }
      });
  }

  showDetails(id: number): void {
    alert(`Ver detalles de la propiedad ${id}`);
  }

  search() {
    alert("Buscar las propiedades por ciudad");
  }

}

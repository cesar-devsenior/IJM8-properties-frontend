import { Component, OnInit, signal } from "@angular/core";
import { Property } from "../../model/property";
import { PropertyService } from "../../service/property-service";

@Component({
    selector: 'app-property-form',
    imports: [],
    templateUrl: './property-form.html',
    styleUrl: './property-form.css'
})
export class PropertyForm implements OnInit {
    protected property = signal<Property>({
      id: 5,
      address: "Cra 1 # 2 - 03",
      description: "Una casa bien ubicada",
      price: 2000,
      city: "Pereira",
      bathrooms: 2,
      bedrooms: 3,
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
    });

    constructor(private propertyService: PropertyService){}

    ngOnInit(): void {
        // this.propertyService.getById(3)
        //     .subscribe({
        //         next: (data) => {
        //             if(data) {
        //                 this.property.set(data);
        //             }
        //         },
        //         error: () => {
        //             console.log("Ocurrió un error");
        //         }
        //     });
    }

    onSave(): void {
        this.propertyService.create(this.property())
            .subscribe({
                next: () => {
                    alert("Propiedad creada exitosamente");
                },
                error: (err) => {
                    alert(`Ha ocurrido un error: ${err}`);
                }
            });
    }


}
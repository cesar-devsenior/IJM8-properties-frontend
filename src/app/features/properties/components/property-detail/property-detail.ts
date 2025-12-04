import { Component, signal, computed, OnInit } from '@angular/core';
import { Property } from '../../model/property';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../service/property-service';

@Component({
  selector: 'app-property-detail',
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css',
})
export class PropertyDetail implements OnInit {
  private id: string | null = null;

  protected property?: Property;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private propertyService: PropertyService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
        next: params => {
          this.id = params.get('id');

          if(this.id !== null) {
            this.propertyService.getById(parseInt(this.id)).subscribe({
              next: data => this.property = data,
              error: () => this.router.navigateByUrl("/404")
            });
          }
        }
      }
    );
  }
}


// !
// ??
// ?:
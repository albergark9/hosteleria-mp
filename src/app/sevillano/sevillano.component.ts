import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import { SevillanoService } from './sevillano.service';

@Component({
  selector: 'app-sevillano',
  templateUrl: './sevillano.component.html',
  styleUrls: ['./sevillano.component.css']
})
export class SevillanoComponent implements OnInit {
  sevillano?: any;
  restaurant_name?: string;
  
  constructor(private service: SevillanoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurant_name = this.route.snapshot.url[0].path;
    this.showMenu();
  }

  showMenu(){
    this.service.getRestaurantMenu(this.restaurant_name)
    .subscribe({
      next:(response) => {
          this.sevillano = response["restaurant"];
      }, error:(error) => {
            console.log(error);  
      }
    });
  }

}

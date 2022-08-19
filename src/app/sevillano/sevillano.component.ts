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
  subscriber?: any;
  
  constructor(private service: SevillanoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(params => {
      this.sevillano = params;
   });
    this.showMenu();
  }

  showMenu(){
    this.service.getRestaurantMenu(this.sevillano.name)
    .subscribe({
      next:(response) => {
          this.sevillano = response["restaurant"];
      }, error:(error) => {
            console.log(error);  
      }
    });
  }

}

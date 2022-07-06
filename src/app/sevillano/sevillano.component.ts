import { Component, OnInit } from '@angular/core';
import { SevillanoService } from './sevillano.service';

@Component({
  selector: 'app-sevillano',
  templateUrl: './sevillano.component.html',
  styleUrls: ['./sevillano.component.css']
})
export class SevillanoComponent implements OnInit {
  sevillano: any = "";
  
  constructor(private service: SevillanoService) { }

  ngOnInit(): void {
    this.showMenu();
  }

  showMenu(){
    this.service.getRestaurantMenu("Sevillano")
    .subscribe({
      next:(response) => {
          this.sevillano = response["restaurant"];
      }, error:(error) => {
            console.log(error);  
      }
    });
  }

}

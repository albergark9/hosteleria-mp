import { Component, OnInit } from '@angular/core';
import { SevillanoService } from './sevillano.service';

@Component({
  selector: 'app-sevillano',
  templateUrl: './sevillano.component.html',
  styleUrls: ['./sevillano.component.css']
})
export class SevillanoComponent implements OnInit {
  hola: string = "";
  
  constructor(private service: SevillanoService) { }

  ngOnInit(): void {
    this.getHelloWorld();
  }

  getHelloWorld(){
    this.service.getHelloWorld()
    .subscribe({
      next:(response) => {
          this.hola = response[0].name;
      }, error:(error) => {
            console.log(error);  
      }
    });
  }

}

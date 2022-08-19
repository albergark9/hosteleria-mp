import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hosteleria-mp';
  restaurants: any = [];
  constructor(private service: AppService,public router: Router) { } 


  ngOnInit(){
    this.showMenu();
  }

  showMenu(){
    this.service.getRestaurants()
    .subscribe({
      next:(response) => {
          this.restaurants = response;
      }, error:(error) => {
            console.log(error);  
      }
    });
  }
  clickRestaurant(restaurant:any){
    var route ='/'+restaurant.name;
    this.router.navigate([route, restaurant]);
  }

  getImageSrc(restaurant:any){
    return "/assets/images/"+restaurant.picture_filename;
  }
}

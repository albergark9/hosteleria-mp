import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
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
    console.log(route);
    this.router.navigate([route]);
  }

  getImageSrc(restaurant:any){
    return "/assets/images/"+restaurant.picture_filename;
  }
}

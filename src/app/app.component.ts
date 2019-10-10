import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  rating:number = 0;
  starCount:number = 5;
  location:string;
  getPrice:number;
  constructor(){}
  ngOnInit(){}
  onRatingChanged(rating){
    this.rating = rating;
  }
  onLocationChanged(location){
    this.location = location;
  }
  onPriceChanged(getPrice){
    this.getPrice = getPrice;
  }
}

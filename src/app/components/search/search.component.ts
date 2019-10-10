import { Component, OnInit, Inject, Injectable, Input, Output, EventEmitter, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestService } from '../../shared/test.service';
import { map, startWith, distinct, distinctUntilChanged , debounceTime, switchMap, filter } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit{

  @Input('rating') private rating: number = 0;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  //location
  @Input('location') private location: string;
  @Output() private locationUpdated = new EventEmitter();

  //price
  @Input('getPrice') private getPrice: number;
  @Output() private priceUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  private ratingArr = [];

  searchControl = new FormControl();
  addresses = [];
  filteredAddresses: Observable<any[]>;

  constructor(
    private TestService: TestService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.filteredAddresses = this.searchControl.valueChanges
     .pipe(
       startWith(''),
       debounceTime(400),
       distinctUntilChanged(),
       switchMap(value => this.doFilter(value)
       )
     );
     console.log("a "+this.starCount)
     for (let index = 0; index < this.starCount; index++) {
       this.ratingArr.push(index);
     }
  }

  onClick(rating:number) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
  doFilter(value: string): Observable<any[]>{
    return this.TestService.getSuggessAddress()
    .pipe(
      map(response =>{
          const filterValue = value.toLowerCase();
          return response[0].data.filter(address => address.toLowerCase().includes(filterValue));
      }) 
    )
  }
  customParams = [];
  onSelectionChanged(event: MatAutocompleteSelectedEvent){
    this.locationUpdated.emit(event.option.value);
  }
  formatLabel(value:number){
    if(value >= 1000){
      return Math.round(value/1000) + 'k';
    }
    return value;
  }
  updateSetting(event) {
    this.getPrice = event.value;
    this.priceUpdated.emit(this.getPrice);
  }
  onclickSubmitParams(){
      var obj = {
        "query":{
          "location": this.location,
          "minStar": 0,
          "maxStar": this.rating,
          "minPrice": 0,
          "maxPrice": this.getPrice,
        },
        "sorting":{
          "sortBy":"name",
          "desc":false
        },
        "paging":{
          "take":20,
          "skip":0
        } 
      }
      this.TestService.postSuggessAddress(obj).subscribe((response) => {
      console.log(response);
    },(error) => {
      console.log(error);
    });;
      console.log(obj);
  }
}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
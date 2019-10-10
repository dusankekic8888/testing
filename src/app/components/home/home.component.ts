import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestService } from '../../shared/test.service';
import { map, startWith } from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  searchText;
  show = true;
  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

    //location
  @Input('location') private location: string;
  @Output() private locationUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  private ratingArr = [];


  dialogRef: MatDialogRef<DialogLocation>;
  constructor( 
    private TestService: TestService, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ){}
    openDialog(item){
      this.dialog.open(DialogLocation, {
        width: '850px',
        data:item
      });
      console.log(item);
    }
  addressData: any;
  ngOnInit() {
    this.getValues();
    for(let index = 0; index < this.starCount; index++){
      this.ratingArr.push(index);
    }
  }

  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(getRating:number, index:number){
    if(getRating >= index + 1){
      return 'star';
    }else{
      return 'star_border';
    }
  }
  
  getValues(){
    this.TestService.getQueryAddress().subscribe(response=>{
      this.addressData = response[0].data;
      console.log(response);
      this.show = false;
    });
  }
   //sorting
   key: string = 'name'; //set default
   reverse: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
   }
    //initializing p to one
    p: number = 1;
}
@Component({
  selector: 'dialog-location',
  templateUrl: 'dialog-location.html',
})
export class DialogLocation{
  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  private ratingArr = [];
  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit() {
    for(let index = 0; index < this.starCount; index++){
      this.ratingArr.push(index);
    }
    this.fillterLocation(location);
  }
  fillterLocation(location){
    console.log(location);
  }

  showIcon(getRating:number, index:number){
    if(getRating >= index + 1){
      return 'star';
    }else{
      return 'star_border';
    }
  }
}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}



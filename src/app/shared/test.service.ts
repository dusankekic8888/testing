import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import axios from 'axios';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Location } from '../shared/location.class';
export interface IAddressResponse{
   
}
export class TestService implements OnInit{
  constructor(private httpClient: HttpClient){}

  private suggessUrl:string ="destination/suggess";
  private queryBasicUrl:string ="hotels/query_basic";

  
  public httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  };
  ngOnInit() {
    
  }
  public getSuggessAddress(){
    return this.httpClient.get(this.suggessUrl,this.httpOptions);
  }
  public postSuggessAddress(obj){
    return this.httpClient.post(this.queryBasicUrl,obj,this.httpOptions);
  }
  public getQueryAddress(){
    return this.httpClient.get(this.queryBasicUrl,this.httpOptions);
    // return this.httpClient.post(this.suggessUrl+"/api/dict/engvie/add",obj, this.httpOptions);
    //return this.httpClient.post(this.suggessUrl,this.httpOptions);
  }
}

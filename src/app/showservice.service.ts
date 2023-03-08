import { Injectable } from '@angular/core';
import { database } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class ShowserviceService {
  queryParams: any;
  series: any;
  constructor() {}
  getData(){
    return database
     } 
  getSingle(id:any){
    return database[id]
  }
  getGenres(genres:any){
  return database[genres]
  }
}

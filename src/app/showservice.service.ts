import { Injectable } from '@angular/core';
import { database } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class ShowserviceService {
  constructor() {}
  getData(){
    return database
     } 
  getSingle(id:any){
    return database[id]
  }
 
 
}

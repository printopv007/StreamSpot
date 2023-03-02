import { Injectable } from '@angular/core';
import { database } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class ShowserviceService {
  queryParams: any;
  constructor() {}
  getData(){
    return database
  }
  getSingle(id:any){
    return database[id]
  }
}

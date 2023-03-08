import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ApiService {
  private count = 0;
  private showsUrl = 'https://api.tvmaze.com/shows';



  constructor(private http: HttpClient) {}
getTVShows():Observable<any> {
    return this.http.get("https://api.tvmaze.com/shows")
  }
  
}

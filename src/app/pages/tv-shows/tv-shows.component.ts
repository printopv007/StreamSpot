import { Component } from '@angular/core';
import { ShowserviceService } from 'src/app/showservice.service';
import { Router } from '@angular/router';
import { database } from 'src/assets/data';
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  
  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
}
  


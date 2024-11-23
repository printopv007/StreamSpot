import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';
import { database } from 'src/assets/data';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.css']
})
export class FantasyComponent {
  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
fantasy:any[]=[];
ngOnInit(){
  this.fantasy = database.filter((item:any)=>item.genres.includes('Adventure'))
  console.log(this.fantasy);
}
}

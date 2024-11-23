import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';

@Component({
  selector: 'app-scifi',
  templateUrl: './scifi.component.html',
  styleUrls: ['./scifi.component.css']
})
export class ScifiComponent {
  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
scifi:any[]=[];
ngOnInit(){
  this.scifi = this.database.filter((item:any)=>item.genres.includes('Adventure'))
  console.log(this.scifi);
}


}

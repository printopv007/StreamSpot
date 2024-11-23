import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';
import { database } from 'src/assets/data';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent {
  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
advnt:any[]=[]
ngOnInit(){
  this.advnt = database.filter((item:any)=>item.genres.includes('Animation'))
  console.log(this.advnt);
}
}

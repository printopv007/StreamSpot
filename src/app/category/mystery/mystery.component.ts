import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';
import { database } from 'src/assets/data';

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.css']
})
export class MysteryComponent {
  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
mystery:any[]=[];
ngOnInit(){
  this.mystery = database.filter((item:any)=>item.genres.includes('Adventure'))
  console.log(this.mystery);
}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent {
  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}

  thrill:any[]=[];
  ngOnInit(){
    this.thrill = this.database.filter((item:any)=>item.genres.includes('Adventure'))
    console.log(this.thrill);
  }
}

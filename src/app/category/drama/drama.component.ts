import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';
import { database } from 'src/assets/data';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent {

  constructor(private show :ShowserviceService,private router : Router){
  }
database=this.show.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
  drama:any[]=[];
  ngOnInit(){
    this.drama = database.filter((item:any)=>item.genres.includes('Adventure'))
    console.log(this.drama);
  }

}

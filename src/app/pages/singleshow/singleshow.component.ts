import { Component } from '@angular/core';
import { ShowserviceService } from 'src/app/showservice.service';
@Component({
  selector: 'app-singleshow',
  templateUrl: './singleshow.component.html',
  styleUrls: ['./singleshow.component.css']
})
export class SingleshowComponent {

  single:any
constructor(private show:ShowserviceService){}
ngOnInit():void{
  let id=localStorage.getItem('id')
  let singleDataArray= this.show.getData()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.name===id)
  console.log(this.single)
}
}

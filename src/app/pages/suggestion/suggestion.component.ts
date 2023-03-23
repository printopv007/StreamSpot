import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
name:string='';
series:string='';
constructor(private auth:AuthService){}

submit(){
  let data={
    name:this.name,
    series:this.series
  }
  this.auth.addData(data)
  this.name='';
  this.series='';
}
}

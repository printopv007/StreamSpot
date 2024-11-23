import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ShowserviceService } from 'src/app/showservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private show:ShowserviceService,private auth:AuthService){}
  data:any[]=this.show.getData();
  navData =[
    {name:'Comedy',url:'/comedy'},
    {name:'Sci-Fi',url:'/scifi'},
    {name:'Horror',url:'/horror'},
    {name:'Romance',url:'/romance'},
    {name:'Thriller',url:'/thrill'},
    {name:'Drama',url:'/drama'},
    {name:'Mystery',url:'/mystery'},
    {name:'Crime',url:'/crime'},
    {name:'Animation',url:'/anime'},
    {name:'Adventure',url:'/advnt'},
    {name:'Fantasy',url:'/fantasy'},
    {name:'Action',url:'/action'}
  ]
  signout(){
    this.auth.logout();
  }
 


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ShowserviceService } from 'src/app/showservice.service';
import { database } from 'src/assets/data';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // workweekId = input<number>();
  constructor(private show:ShowserviceService,private auth:AuthService){}
  data:any[]=this.show.getData();
  signout(){
    this.auth.logout();
  }


}

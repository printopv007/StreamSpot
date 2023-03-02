import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowserviceService } from 'src/app/showservice.service';
import { database } from 'src/assets/data';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  filteredMovies: any;
  constructor(private show:ShowserviceService){}


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SingleshowComponent } from './pages/singleshow/singleshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './utils/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TvShowsComponent,
    NavbarComponent,
    SingleshowComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

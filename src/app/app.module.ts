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
import { FormsModule } from '@angular/forms'; 
import { ActionComponent } from './category/action/action.component';
import { ComedyComponent } from './category/comedy/comedy.component';
import { DramaComponent } from './category/drama/drama.component';
import { ScifiComponent } from './category/scifi/scifi.component';
import { HorrorComponent } from './category/horror/horror.component';
import { RomanceComponent } from './category/romance/romance.component';
import { ThrillerComponent } from './category/thriller/thriller.component';
import { MysteryComponent } from './category/mystery/mystery.component';
import { CrimeComponent } from './category/crime/crime.component';
import { AdventureComponent } from './category/adventure/adventure.component';
import { FantasyComponent } from './category/fantasy/fantasy.component';
import { AnimationComponent } from './category/animation/animation.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TvShowsComponent,
    NavbarComponent,
    SingleshowComponent,
    FooterComponent,
    ActionComponent,
    ComedyComponent,
    DramaComponent,
    ScifiComponent,
    HorrorComponent,
    RomanceComponent,
    ThrillerComponent,
    MysteryComponent,
    CrimeComponent,
    AdventureComponent,
    FantasyComponent,
    AnimationComponent,
    SignupComponent,
  
       
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

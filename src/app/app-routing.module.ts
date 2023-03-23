import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './category/action/action.component';
import { AdventureComponent } from './category/adventure/adventure.component';
import { AnimationComponent } from './category/animation/animation.component';
import { ComedyComponent } from './category/comedy/comedy.component';
import { CrimeComponent } from './category/crime/crime.component';
import { DramaComponent } from './category/drama/drama.component';
import { FantasyComponent } from './category/fantasy/fantasy.component';
import { HorrorComponent } from './category/horror/horror.component';
import { MysteryComponent } from './category/mystery/mystery.component';
import { RomanceComponent } from './category/romance/romance.component';
import { ScifiComponent } from './category/scifi/scifi.component';
import { ThrillerComponent } from './category/thriller/thriller.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleshowComponent } from './pages/singleshow/singleshow.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'tvshows',component:TvShowsComponent
  },
  
  {
    path:'single',component:SingleshowComponent
  },
   
  {
    path:'drama',component:DramaComponent
  },
  {
    path:'action',component:ActionComponent
  },
  {
    path:'comedy',component:ComedyComponent
  },
  {
    path:'advnt',component:AdventureComponent
  },
  {
    path:'crime',component:CrimeComponent
  },
  {
    path:'fantasy',component:FantasyComponent
  },
  {
    path:'horror',component:HorrorComponent
  },
  {
    path:'mystery',component:MysteryComponent
  },
  {
    path:'romance',component:RomanceComponent
  },
  {
    path:'scifi',component:ScifiComponent
  },

  {
    path:'thrill',component:ThrillerComponent
  },
  {
    path:'anime',component:AnimationComponent
  },
  {
    path:'sign',component:SignupComponent
  },
  {
    path:'sugg',component:SuggestionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

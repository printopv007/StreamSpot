import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './category/action/action.component';
import { DramaComponent } from './category/drama/drama.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleshowComponent } from './pages/singleshow/singleshow.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { SoonComponent } from './utils/soon/soon.component';

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
    path:'soon',component:SoonComponent
  },
  {
    path:'drama',component:DramaComponent
  },
  {
    path:'action',component:ActionComponent
  },
  {
    path:'soon',component:SoonComponent
  },
  {
    path:'soon',component:SoonComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

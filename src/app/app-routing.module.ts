import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SocietyComponent } from './components/society/society.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/dashboard',pathMatch:'full'
  },
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'society',component:SocietyComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

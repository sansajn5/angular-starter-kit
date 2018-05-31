import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ 
    path: '', 
    component: DashboardComponent,
    children: [{
      path: '',
      component: HomeComponent,
    }],
  }];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
  
export class DashboardRoutingModule {
}
  
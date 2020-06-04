import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path : 'Appoinment',
    loadChildren : () =>
    import('../app/appoinment/appoinment.module').then(m=>m.AppoinmentModule)
  },
  {
    path : 'list',
    loadChildren : () =>
    import('../app/list/list.module').then(m=>m.ListModule)
  },
  {
    path : '',
    component : HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LISTComponentComponent } from './listcomponent/listcomponent.component';
import { RouterModule } from '@angular/router';
import { ListDetailsComponent } from './list-details/list-details.component';


@NgModule({
  declarations: [LISTComponentComponent, ListDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : LISTComponentComponent
      },
      {
        path :'selectedappoinment',
        component : ListDetailsComponent
      }
    ])
  ]
})
export class ListModule { }

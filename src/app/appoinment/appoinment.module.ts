import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoinmentComponentComponent } from './appoinment-component/appoinment-component.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';


import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { YourappoinmentComponent } from './yourappoinment/yourappoinment.component';


@NgModule({
  declarations: [AppoinmentComponentComponent, YourappoinmentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,

    RouterModule.forChild([
      {
        path: '',
        component : AppoinmentComponentComponent
      },

      {
        path: 'yourappoinment',
        component : YourappoinmentComponent
      }
    ])
  ]
})
export class AppoinmentModule { }

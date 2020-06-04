import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {
  AppoinmentArray ;
  temparray;
  

  constructor() { }

saveproductintodatabase(Appoinment)
{ 
  this.temparray = this.getproductfromdatabase();
  this.AppoinmentArray = this.temparray.value;
  this.AppoinmentArray[this.AppoinmentArray.length] = Appoinment;
  localStorage.setItem('AppoinmentListArray', JSON.stringify(this.AppoinmentArray));
}

getproductfromdatabase() :  Observable<Appoinment>
 {
    if(localStorage.getItem('AppoinmentListArray'))
      {
      this.AppoinmentArray = JSON.parse(localStorage.getItem('AppoinmentListArray'));
      }
    else
      {
        this.AppoinmentArray = [];
      }
    return of(this.AppoinmentArray);
 }
 settimeondatabase(appoinmenttimearray)
 {
  localStorage.setItem('TimeArray', JSON.stringify(appoinmenttimearray));
 }

}
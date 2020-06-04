import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/Appoinment.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.scss']
})
export class LISTComponentComponent implements OnInit {
  appoinmentarrays;
  SelectedAppoinment;

  constructor(public appoinmentservice :  AppoinmentService, private router : Router) { }

  ngOnInit() {
    this.ShowList();
  }
  ShowList()
  {
    this.appoinmentservice.getproductfromdatabase()
    .subscribe(data => this.appoinmentarrays = data)
  }
  onclick(appoinmentarray)
  { 
   this.SelectedAppoinment = appoinmentarray;
  console.log(this.SelectedAppoinment) ;
  this.router.navigate(['list/selectedappoinment', this.SelectedAppoinment]);
 }
}

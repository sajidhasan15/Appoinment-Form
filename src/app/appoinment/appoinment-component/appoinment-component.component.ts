import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppoinmentService } from 'src/app/Appoinment.Service';


@Component({
  selector: 'app-appoinment-component',
  templateUrl: './appoinment-component.component.html',
  styleUrls: ['./appoinment-component.component.scss']
})
export class AppoinmentComponentComponent implements OnInit {
  public Appoinment: FormGroup;
  NewAppoinment;
  blanksubmit;
  appoinmenttimearray =[20,20,20] ;
  time;


  constructor(private router: Router, public appoinmentservice :  AppoinmentService) { }

  ngOnInit() {
    this.appoinmentformint();
    this.GettimearrayfromDatabase();
  }
  appoinmentformint()
  {
    this.Appoinment = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(3)]),      
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(1)]),
      address:new FormControl('',[Validators.required, Validators.minLength(5)]),
      age: new FormControl('', [Validators.required, Validators.minLength(3)]),
      date: new FormControl('', [Validators.required, Validators.minLength(3)]),      
      time: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit(Appoinment)
  { 
    if(Appoinment.touched)
    {
    this.time = this.timeHandeler(this.Appoinment.value.time);
    this.appoinmentservice.saveproductintodatabase(Appoinment.value);
    this.router.navigate(['Appoinment/yourappoinment', Appoinment.value]);
    }
    if(!Appoinment.touched)
    {
     this.blanksubmit = true;
    }
  }
  timeHandeler(appoinmenttime)
  { 
   const time = appoinmenttime;
   if(time=="0")
   {
    this.appoinmenttimearray[0] = this.appoinmenttimearray[0] -1;
   }
   if(time=="1")
   {
    this.appoinmenttimearray[1] = this.appoinmenttimearray[1] -1;
   }
   if(time=="2")
   {
    this.appoinmenttimearray[2] = this.appoinmenttimearray[2] -1;
   
   }
   this.appoinmentservice.settimeondatabase(this.appoinmenttimearray);
   return this.appoinmenttimearray;
  }
  GettimearrayfromDatabase()
  {
    if( JSON.parse(localStorage.getItem('TimeArray')))
    {
      this.appoinmenttimearray = JSON.parse(localStorage.getItem('TimeArray'));
    }
    else 
    {
      localStorage.setItem('TimeArray', '[]');
    }
  }
}

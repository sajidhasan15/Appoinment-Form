import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-yourappoinment',
  templateUrl: './yourappoinment.component.html',
  styleUrls: ['./yourappoinment.component.scss']
})
export class YourappoinmentComponent implements OnInit {

  yourproduct;
  code;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
       
    this.code = this.route.params.subscribe((params) => {
      this.yourproduct = params;
      console.log(this.yourproduct);
    });
  }

}

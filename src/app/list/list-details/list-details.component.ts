import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  details;
  selectedAppoinment;
  appoinment;
  

  constructor(public route : ActivatedRoute ) { }

  ngOnInit() {
    this.details = this.route.params.subscribe((params) => {
      this.selectedAppoinment = params;
      this.appoinment = this.selectedAppoinment;
    });
  }

}

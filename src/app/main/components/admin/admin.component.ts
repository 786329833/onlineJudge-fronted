import { Component, OnInit, Output } from '@angular/core';
import { Classroom } from '../../models/class.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor() { }
  class: Classroom = new Classroom('', 0);
  ngOnInit() {
  }

  createClass() {
    
  }

}

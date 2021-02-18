import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  account: string;
  passwd: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('login');
  }

}

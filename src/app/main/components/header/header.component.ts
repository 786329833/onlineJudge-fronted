import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialogs/dialog-login/dialog-login.component';
import { DialogRegisterComponent } from '../dialogs/dialog-register/dialog-register.component';
import { DialogComponent } from '../dialogs/dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '在线代码评测教学平台';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  login() {
    this.dialog.open(DialogLoginComponent);
  }

  register() {
    this.dialog.open(DialogRegisterComponent);
    console.log('register');
  }

}

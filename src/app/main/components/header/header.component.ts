import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpRequireService } from '../../service/http-require.service';
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
  isLogin = false;
  user;
  constructor(
    public dialog: MatDialog,
    private httpServer: HttpRequireService,
  ) { }

  ngOnInit() {
    this.initLogin();
    console.log(sessionStorage);
  }

  initLogin() {
    if (sessionStorage && sessionStorage.username !== '') {
      this.user = sessionStorage;
      this.isLogin = true;
    }
  }

  login() {
    this.dialog.open(DialogLoginComponent).afterClosed().subscribe(data => {
      this.initLogin();
      console.log(sessionStorage);
    });
  }

  logout() {
    this.httpServer.logout().then(data => {
      if (data === 'ok') {
        sessionStorage.setItem("username", '');
        sessionStorage.setItem("name", '');
        sessionStorage.setItem("type", '');
        this.isLogin = false;
      }
    });
  }

  register() {
    this.dialog.open(DialogRegisterComponent);
    console.log('register');
  }

}

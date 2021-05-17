import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() showAdmin = new EventEmitter();
  title = '在线代码评测教学平台';
  isLogin = false;
  user;
  type = '1';
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
      console.log(sessionStorage.type)
      this.type = sessionStorage.type;
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

  getType() {
    if (sessionStorage.type === 2 || sessionStorage.type === 3) {
      this.type = sessionStorage.type;
    }
  }

  register() {
    this.dialog.open(DialogRegisterComponent);
    console.log('register');
  }

  gotoAdmin() {
    this.showAdmin.emit(true);
  }

}

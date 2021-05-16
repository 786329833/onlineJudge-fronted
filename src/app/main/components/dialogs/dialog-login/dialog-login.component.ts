import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpRequireService } from 'src/app/main/service/http-require.service';
import { Md5 } from 'ts-md5/dist/md5';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {
  username: string;
  password: string;


  constructor(
    private httpServer: HttpRequireService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }


  login() {
    const loginParams = {
      username: this.username,
      password: Md5.hashStr(this.password),
    }
    this.httpServer.login('login', loginParams).then((data: any) => {
      if (data === 'passworderror') {

      } else {
        sessionStorage.setItem("username", this.username);
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("type", data.type);
        console.log(sessionStorage);
        this.dialog.closeAll();
      }
    })
  }

}

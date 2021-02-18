import { Component, OnInit } from '@angular/core';
import { HttpRequireService } from 'src/app/main/service/http-require.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {
  account: string;
  passwd: string;


  constructor(
    private httpServer: HttpRequireService
  ) { }

  ngOnInit() {
  }

  login() {
    const loginParams = {
      account: '123',
      passwd: '123',
      username: '123'
    }
    this.httpServer.register('register', loginParams);
    console.log('login');
  }

}

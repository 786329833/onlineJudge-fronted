import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpRequireService } from '../../service/http-require.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  title = '在线代码评测教学平台';
  showNavigation = true;
  opened = true;
  constructor(
    private httpRequireService: HttpRequireService
  ) { }

  ngOnInit() {
    this.initBackend();
  }

  initBackend() {
    this.httpRequireService.chooseDB();
  }

  toggle() {
    this.showNavigation = !this.showNavigation;
  }

}

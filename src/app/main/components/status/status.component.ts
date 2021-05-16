import { Component, OnInit } from '@angular/core';
import { HttpRequireService } from '../../service/http-require.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private httpReqioreService: HttpRequireService
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.httpReqioreService.getStatus();
  }

}

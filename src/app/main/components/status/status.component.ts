import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Status } from '../../models/status.model';
import { HttpRequireService } from '../../service/http-require.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  dataSource;
  status;
  displayedColumns: string[];

  constructor(
    private httpReqioreService: HttpRequireService
  ) { }

  ngOnInit() {
    this.getStatus();
    this.initStatus();
    this.initColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initStatus();
  }

  getStatus() {
    this.status = this.httpReqioreService.getStatus();
  }

  initStatus() {
    this.status.then(status => {
      this.dataSource = status.map((s: any) => {
        return new Status(s.id, s.user, s.language, s.memory, s.time, s.submittime, s.result, s.problemtitle);
      });
    });

  }

  initColumns() {
    this.displayedColumns = ['submittime', 'result', 'problemtitle', 'language', 'time', 'memory', 'user'];
  }

}

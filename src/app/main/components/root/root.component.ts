import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
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
  problems;
  showIndex = true;
  showProblemData = false;
  showStatus = false;
  showAdmin = false;
  problemId: number;
  search: string = '';
  constructor(
    private httpRequireService: HttpRequireService
  ) { }

  ngOnInit() {
    this.initBackend();
    this.initProblem();
  }

  initProblem() {
    const probelmData = this.httpRequireService.getProblems();
    console.log(probelmData);
    this.problems = probelmData;
  }

  initBackend() {
    // this.httpRequireService.chooseDB();
  }

  handleShowIndex($event) {
    this.showIndex = $event;
    this.showStatus = !$event;
    this.showProblemData = !$event;
    this.showAdmin = !$event;
  }

  handleShowProblemData(pid: number) {
    console.log(pid);
    this.showIndex = false;
    this.showStatus = false;
    this.showAdmin = false;
    this.showProblemData = true;
    this.problemId = pid;
  }

  handleShowStatus($event) {
    this.showStatus = $event;
    this.showIndex = !$event;
    this.showAdmin = !$event;
    this.showProblemData = !$event;
  }

  handleShowAdmin($event) {
    this.showAdmin = $event;
    this.showIndex = !$event;
    this.showStatus = !$event;
    this.showProblemData = !$event;
  }

  toggle() {
    this.showNavigation = !this.showNavigation;
  }

}

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
  showProblemData = false;
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

  handleShowProblemData(pid: number) {
    console.log(pid);
    this.showProblemData = true;
    this.problemId = pid;
  }

  toggle() {
    this.showNavigation = !this.showNavigation;
  }

}

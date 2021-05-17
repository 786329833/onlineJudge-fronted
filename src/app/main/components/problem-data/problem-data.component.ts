import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpRequireService } from '../../service/http-require.service';

@Component({
  selector: 'app-problem-data',
  templateUrl: './problem-data.component.html',
  styleUrls: ['./problem-data.component.css']
})
export class ProblemDataComponent implements OnInit {

  constructor(
    private httpReqioreService: HttpRequireService
  ) { }
  @Output() showProblemData = new EventEmitter();
  problem;
  theme = 'vs-dark';
  exampleInput;
  exampleOutput;
  language;
  codeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  onCodeChanged(value) {
    console.log('CODE', value);
  }
  @Input() problemId: number;
  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.getProblemData();
  }

  goBack() {
    this.showProblemData.emit(false);
  }

  getProblemData() {
    this.httpReqioreService.getProblemData(String(Number(-this.problemId) + 5815)).then((data: any) => {
      this.problem = data;
      this.exampleInput = data.sinput.split('|#)');
      console.log(this.exampleInput);
      this.exampleOutput = data.soutput.split('|#)');
    });
  }


}

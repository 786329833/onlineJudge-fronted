import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit, OnChanges {
  @Input() problems;
  @Output() showProblemData = new EventEmitter();
  dataSource;
  displayedColumns: string[];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.initColumns();
    this.initProblems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initProblems();
  }

  initProblems() {
    this.problems.then(problems => {
      console.log(problems)
      problems[0].title = '反转链表';
      problems[1].title = '两数之和';
      problems[2].title = '大数加法';
      problems[3].title = '输出二叉树的右视图';
      problems[4].title = '最近公共祖先';
      problems[5].title = '验证ip地址';
      problems[6].title = '01背包';
      problems[7].title = '通配符匹配';
      problems[8].title = '括号生成';
      problems[9].title = '最大公约数';
      problems[10].title = '丑数';
      problems[11].title = '螺旋矩阵';
      problems[12].title = '表达式求值';
      problems[13].title = '最大乘积';
      problems[14].title = 'kmp算法';
      problems[15].title = '字符串topk问题';
      problems[16].title = '重排链表';

      this.dataSource = problems.map(p => {
        return new Problem((String(5815 - p.problem)), p.title, p.tag, p.score, p.level, Math.round(p.submission / 4), Math.round(p.ac / 4));
      });
    });

  }

  initColumns() {
    this.displayedColumns = ['id', 'title', 'score', 'ac', 'submission', 'percent'];
  }

  clickProblem(id: string) {
    this.showProblemData.emit(id);
  }
}

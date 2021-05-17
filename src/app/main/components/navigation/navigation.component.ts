import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Navigation } from '../../models/navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() showStatus = new EventEmitter();
  @Output() showIndex = new EventEmitter();
  navigation: Navigation[] = [];
  selected = '';
  viewOnShow = 'Problem list';
  constructor() { }

  ngOnInit() {
    this.generateNavigation();
  }

  generateNavigation() {
    this.navigation.push(new Navigation('题目列表', 'Problem list', '', this.goToIndex.bind(this)));
    this.navigation.push(new Navigation('提交列表', 'Submissions', '', this.goToSubmission.bind(this)));
    this.navigation.push(new Navigation('排名', 'Rank List', '', this.testCLick));
    this.navigation.push(new Navigation('讨论区', 'Bolletin BOard', '', this.testCLick));
  }

  testCLick(item: Navigation) {
    this.selected = item.enName;
    console.log(this.selected);
  }

  goToIndex() {
    this.viewOnShow = 'Problem list';
    this.showIndex.emit(true);
  }

  goToSubmission() {
    this.viewOnShow = 'Submissions';
    this.showStatus.emit(true);
  }

}

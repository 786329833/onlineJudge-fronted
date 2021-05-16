import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../models/navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navigation: Navigation[] = [];
  selected = '';
  constructor() { }

  ngOnInit() {
    this.generateNavigation();
  }

  generateNavigation() {
    this.navigation.push(new Navigation('题目列表', 'Problem list', '', this.testCLick));
    this.navigation.push(new Navigation('提交列表', 'Submissions', '', this.testCLick));
    this.navigation.push(new Navigation('排名', 'Rank List', '', this.testCLick));
    this.navigation.push(new Navigation('讨论区', 'Bolletin BOard', '', this.testCLick));
  }

  testCLick(item: Navigation) {
    this.selected = item.enName;
    console.log(this.selected);
  }

}

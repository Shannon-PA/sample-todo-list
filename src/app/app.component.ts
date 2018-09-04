import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list = [
    'Get milk',
    'Play vids',
    'sleep'
  ];
  newToDoItem;

  removeItem(itemToRemove) {
    this.list = this.list.filter(listItem => listItem !== itemToRemove);
  }

  addItem(newTodo) {
    this.list.push(newTodo);
  }
}

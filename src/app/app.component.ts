import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list;
  newToDoItem;

  constructor(public todoService: TodoService) {
    // this.list = todoService.Todos;
    // console.log(todoService.Todos);
  }

  // OnInit() {
  //   this.list = this.todoService.Todos;
  //   console.log(this.list);
  // }

  removeItem(itemToRemove) {
    this.list = this.list.filter(listItem => listItem !== itemToRemove);
  }

  addItem(newTodo) {
    // this.list.push(newTodo);
    // console.log(this.list);
    // console.log(this.todoService.Todos);
    // this.list = this.todoService.Todos;
  }
}

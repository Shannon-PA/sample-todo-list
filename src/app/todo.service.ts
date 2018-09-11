import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
    this.getAllTodos();
  }

  public Todos: Array<String>;

  private getAllTodos() {
    this.http.get('http://localhost:3001/api/todos/').subscribe(
      (data: any) => {

        this.Todos = data;
        console.log(this.Todos);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addTodo(todo) {

  }

  deleteTodo(todo) {

  }
}

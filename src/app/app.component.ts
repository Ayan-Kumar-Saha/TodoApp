import { Component } from '@angular/core';
import { Todo } from './interface/todo-item.model';
import { WebService } from './service/Web/web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todoList: Todo[] = [];

  constructor(
    private web: WebService,
  ) {

  }

  ngOnInit() {
    this.renderTodoList();
  }

  renderTodoList() {
    this.web.getTodoList().subscribe((res: any) => {
      console.log(res);
      this.todoList = res['data'];
    })
  }

  changeStatus(todo: Todo) {
    console.log(todo)
    todo.isCompleted = !todo.isCompleted;

    this.web.updateTodoStatus(todo).subscribe((res: any) => {
      console.log(res);
    })
  }
}

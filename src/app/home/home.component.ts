import { Component, OnInit } from "@angular/core";
import { FormsModule, FormControl } from "@angular/forms";
import { TodoService } from "../service/todo.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TodoFetchService } from "../service/todoFetch.service";
import { ITodo } from "../interfaces/ITodo.interface"


@Component({
    standalone: true,
    selector: 'app-home',
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
    template: `
    <h2>DoingTo</h2>
    <div class="todo-form">
    <input type="text" placeholder="Add a new todo..." [formControl]="todoText">
    <button (click)="addTodo()">Add Todo</button>
    </div>
    <ul>
        @for (todo of todos; track todo.text) {
            <li> {{ todo.text }}</li>
        } @empty { 
            <li>Nothing here</li>
        }
    </ul>
    `,
})
export default class HomeComponent{
    todoText = new FormControl('');
    todos: ITodo[] = []; 

    constructor(private todoService: TodoService, private todoFetchService: TodoFetchService ) {}

    ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoFetchService.getTodos().subscribe( todo =>
        this.todos.push(todo) 
        )
        console.log(this.todos)
  }

    addTodo() {
        if (!this.todoText.value?.trim()) {
            return; //Don't add empty todos
        }
        const newTodo = {
            text: this.todoText.value,
            done: false
        };
        this.todoService.addTodo(newTodo).subscribe({
            next: (todo) => {
                console.log('Todo added', todo);
                this.todoText.reset(); //clears the input field after adding todo
            },
            error: (error) => console.error('Error adding todo:', error)
        });
    }
}

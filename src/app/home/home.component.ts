import { Component } from "@angular/core";
import { FormsModule, FormControl } from "@angular/forms";
import { TodoService } from "../service/todo.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
    `,
})
// default export cause this is a routed component
export  class HomeComponent{
    todoText = new FormControl('');

    constructor(private todoService: TodoService) {}

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

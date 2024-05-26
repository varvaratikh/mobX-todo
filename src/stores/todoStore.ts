import { makeAutoObservable } from 'mobx';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo = (text: string) => {
        const newTodo: Todo = {
            id: this.todos.length + 1,
            text,
            completed: false,
        };
        this.todos.push(newTodo);
    }

    toggleTodo = (id: number) => {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}

export const todoStore = new TodoStore();

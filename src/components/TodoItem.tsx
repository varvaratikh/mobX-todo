import React from 'react';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/todoStore';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = observer(({ id, text, completed }) => {
    return (
        <li
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={() => todoStore.toggleTodo(id)}
        >
            {text}
        </li>
    );
});

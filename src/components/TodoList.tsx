import React from 'react';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/todoStore';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = observer(() => {
    return (
        <ul>
            {todoStore.todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
});

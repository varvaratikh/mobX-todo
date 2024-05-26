import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/todoStore';

export const AddTodo: React.FC = observer(() => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
            todoStore.addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
});

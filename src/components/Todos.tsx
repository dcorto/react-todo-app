import { Todo } from './Todo'
import type { Todo as TodoType } from '../types'
import React, { useState } from 'react'

interface Props {
    todos: TodoType[]
    // setCompleted: (id: string, completed: boolean) => void
    // setTitle: (params: { id: string, title: string }) => void
    onRemoveTodo: (id: string) => void
    onToggleCompletedTodo: (id: string, completed: boolean) => void
}

export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompletedTodo
   // setCompleted,
   // setTitle,
   // removeTodo
}) => {
    //const [isEditing, setIsEditing] = useState('')
    const [isEditing] = useState('')

    return (
        <ul className='todo-list'>
            {todos?.map((todo) => (
                <li
                    key={todo.id}
                    // onDoubleClick={() => { setIsEditing(todo.id) }}
                    className={`${todo.completed ? 'completed' : ''} ${isEditing === todo.id ? 'editing' : ''}`}
                >
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onRemoveTodo={onRemoveTodo}
                    onToggleCompletedTodo={onToggleCompletedTodo}
                    // setCompleted={setCompleted}
                    // setTitle={setTitle}

                    // isEditing={isEditing}
                    // setIsEditing={setIsEditing}
                />
                </li>
            ))}
        </ul>
    )
}
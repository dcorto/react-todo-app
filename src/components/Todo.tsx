import React from 'react'
import type { Todo as TodoType } from '../types'

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
    onToggleCompletedTodo: (id: string, completed: boolean) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
    const handleToggleCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompletedTodo(id, event.target.checked)
    }

    return (
        <>
            <div className='view'>
                <input
                    className='toggle'
                    checked={completed}
                    type='checkbox'
                    //onChange={() => {}}
                    onChange={handleToggleCompleted}
                />
                <label>{title}</label>
                <button className='destroy' onClick={() => {onRemoveTodo(id)}}></button>
            </div>
        </>
    )
}
import React, {useState} from 'react'
import {Todos} from './components/Todos'

const mockTodos = [
    { id: '1', title: 'Aprender React', completed: false },
    { id: '2', title: 'Aprender TypeScript', completed: true },
    { id: '3', title: 'Aprender Vite', completed: false },
]

const App: React.FC = () => {
    const [todos, setTodos] = useState(mockTodos)

    const handleRemoveTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const handleCompletedTodo = (id: string, completed: boolean) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed }
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <>
            <div className={'todoapp'}>
                <Todos
                    onRemoveTodo={handleRemoveTodo}
                    onToggleCompletedTodo={handleCompletedTodo}
                    todos={todos} />
            </div>
        </>
    )
}

export default App

import React, {useState} from 'react'
import {Todos} from './components/Todos'
import {Footer} from './components/Footer'
import { TODO_FILTERS } from './consts'
import { type FilterValue } from './types'

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

    const [filterSelected, setFilterSelected] = useState<FilterValue>(() => {
        // read from url query params using URLSearchParams
        const params = new URLSearchParams(window.location.search)
        const filter = params.get('filter') as FilterValue | null

        console.log("filter:" + filter) //TODO: remove

        if (filter === null) return TODO_FILTERS.ALL
        // check filter is valid, if not return ALL
        return Object
            .values(TODO_FILTERS)
            .includes(filter)
            ? filter
            : TODO_FILTERS.ALL

    })

    const filteredTodos = todos.filter(todo => {
        if (filterSelected === TODO_FILTERS.ACTIVE) {
            return !todo.completed
        }

        if (filterSelected === TODO_FILTERS.COMPLETED) {
            return todo.completed
        }

        return true
    })

    const handleFilterChange = (filter: FilterValue): void => {
        console.log("filter handle is called") //TODO: remove
        setFilterSelected(filter)
        const params = new URLSearchParams(window.location.search)
        params.set('filter', filter)
        window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`)
    }

    return (
        <>
            <div className={'todoapp'}>
                <Todos
                    onRemoveTodo={handleRemoveTodo}
                    onToggleCompletedTodo={handleCompletedTodo}
                    todos={filteredTodos} />
                <Footer
                    handleFilterChange={handleFilterChange}
                    completedCount={0}
                    activeCount={0}
                    filterSelected={filterSelected}
                    onClearCompleted={ () => {} }
                />
            </div>
        </>
    )
}

export default App

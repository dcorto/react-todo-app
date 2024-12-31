import React from 'react'
import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
    handleFilterChange: (filter: FilterValue) => void
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
    filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount, onClearCompleted,
                                            filterSelected,
                                            handleFilterChange }) => {
    console.log(completedCount, onClearCompleted) //TODO: remove
    const singleActiveCount = activeCount === 1
    const activeTodoWord = singleActiveCount ? 'tarea' : 'tareas'

    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{activeCount}</strong> {activeTodoWord} pendiente{!singleActiveCount && 's'}
                </span>

                <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />

            </footer>
        </>
    )
}

//<Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
import type { TODO_FILTERS } from './consts'
export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
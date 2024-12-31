import { CreateTodo } from './CreateTodo'
import React from "react";

interface Props {
    saveTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
    return (
        <header className='header'>
            <h1>
                TODO&#39;s <img
                    alt={'Typescript logo'}
                    style={{ width: '60px', height: 'auto' }}
                    src={'images/Typescript_logo_2020.svg.png'}></img>
            </h1>

            <CreateTodo saveTodo={saveTodo} />
        </header>
    )
}
import TodoForm from './TodoForm';

import { useState } from 'react';

import { CRUDContext } from '../../CRUDContext'


export default {
    title: "TodoForm",
    component: TodoForm,
    argTypes: {
        onSubmit: { action: 'TodoForm information' },
        showAlert: { action: 'show alert' },
    }
}

export const Default = (args) => {
    const [todo, setTodo] = useState({ title: '', detail: '' })

    return (
        <CRUDContext.Provider value={{ showAlert: args.showAlert, todo, setTodo }}>
            <TodoForm {...args} />
        </CRUDContext.Provider>
    )
}
export const Error = (args) => <TodoForm {...args} />
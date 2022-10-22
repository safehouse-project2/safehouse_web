import Todo from './Todo'
import { CRUDContext } from '../../CRUDContext'

export default {
    title: "Todo",
    component: Todo,
    argTypes: {
        showAlert: { action: 'show alert' },
    }
}

export const Default = (args) => <Todo {...args} />
export const Error = (args) => <Todo {...args} />
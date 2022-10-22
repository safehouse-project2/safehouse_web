import CreatHomePost from "./CreatHomePost"


export default {
    title: "CreatHomePost",
    component: CreatHomePost,
    argTypes: {
        onSubmit: { action: 'CreateForm information' },
        showAlert: { action: 'show alert' },
    }
}

export const Default = (args) => <CreatHomePost {...args} />
export const Error = (args) => <CreatHomePost {...args} />
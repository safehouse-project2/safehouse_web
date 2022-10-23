import Detail from "./Detail";

export default {
    title: "Detail",
    component: Detail,
    argTypes: {
        state: { state: 'post host information' },
    }
}

export const Default = (args) => <Detail {...args} />
export const Error = (args) => <Detail {...args} />
import Dropdown from "./Dropdown";

export default {
    title: "Dropdown",
    component: Dropdown,
    argTypes: {
        onClick: { action: 'response' },
    }
};

// const Template = (args) => <Dropdown {...args} />;

export const Default = (args) => <Dropdown {...args} />
export const Error = (args) => <Dropdown {...args} />

/* export const Default = Template.bind({});
Default.args = {
    dropdown: {
        id: 1,
        title: "Dropdown",
        state: "open",
    }
}; */
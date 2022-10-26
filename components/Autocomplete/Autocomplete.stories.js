import Autocomplete from "./index";

export default {
    title: "Autocomplete",
    component: Autocomplete,
    argTypes: {
        onchange: { action: 'logging in thing' },
    }

}

export const Default = (args) => <Autocomplete {...args} />
export const Error = (args) => <Autocomplete {...args} />
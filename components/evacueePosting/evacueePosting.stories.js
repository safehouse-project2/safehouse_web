import EvacueePosting from "./index";

export default {
    title: "EvacueePosting",
    component: EvacueePosting,
    argTypes: {
        onSubmit: { action: 'logging in thing' },
    }
}

export const Default = (args) => <EvacueePosting {...args} />
export const Error = (args) => <EvacueePosting {...args} />
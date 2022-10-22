import EvacueePosting from "./evacueePosting.jsx"

export default {
    title: "EvacueePosting",
    component: EvacueePosting,
    argTypes: {
        onSubmit: { action: 'logging in thing' },
    }
}

export const Default = (args) => <EvacueePosting {...args} />
export const Error = (args) => <EvacueePosting {...args} />
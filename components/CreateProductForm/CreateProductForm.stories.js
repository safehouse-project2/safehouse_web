import CreateProductForm from "./index";

export default {
    title: "CreateProductForm",
    component: CreateProductForm,
    argTypes: {
        onSubmit: { action: 'logging in thing' },
    }
}

export const Default = (args) => <CreateProductForm {...args} />
export const Error = (args) => <CreateProductForm {...args} />
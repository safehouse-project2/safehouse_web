import PostList from "./PostList";

export default {
    title: "PostList",
    component: PostList,
    argTypes: {
        state: { state: 'post host information' },
    }
}

export const Default = (args) => <PostList {...args} />
export const Error = (args) => <PostList {...args} />
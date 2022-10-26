import PostList from "./PostList";
import List from "../../pages/list";

export default {
    title: "PostList",
    component: PostList,
    argTypes: {
        state: { state: 'post host information' },
    }
}


export const Default = (args) =>
    <List {...args} >
        <PostList />
    </List>
export const Error = (args) => <PostList {...args} />
import Detail from "./Detail";
import DetailPage from "../../pages/home/[id]";

export default {
    title: "Detail",
    component: DetailPage,
    argTypes: {
        state: { state: 'post host information' },
    }
}

export const Default = (args) =>
    <DetailPage {...args} >
        <Detail />
    </DetailPage>
export const Error = (args) => <Detail {...args} />


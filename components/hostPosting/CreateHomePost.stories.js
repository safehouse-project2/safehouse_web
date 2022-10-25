import CreatHomePost from "./CreatHomePost"
import Autocomplete from '../Autocomplete';

export default {
    title: "CreatHomePost",
    component: CreatHomePost,
    argTypes: {
        onSubmit: { action: 'CreateForm information' },
        showAlert: { action: 'show alert' },
    }
}

export const Default = (args) => <CreatHomePost {...args} />
// export const Default = (args) => {
//     return (
//         <>
//             <Script
//                 strategy="beforeInteractive"
//                 src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
//             ></Script>
//             <CreatHomePost {...args} />
//         </>
//     )
// }

export const Error = (args) => <CreatHomePost {...args} />
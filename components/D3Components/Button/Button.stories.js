import Button from "./Button";
import PublishIcon from '@mui/icons-material/Publish';

export default {
    title: "Button",
    component: Button,
}

export const Default = () => <Button/>
export const Submit = () => <Button txt="Submit" backgroundColor="#5581AA" endIcon={<PublishIcon />} hoverColor="#44698C" />
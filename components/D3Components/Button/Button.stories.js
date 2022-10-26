import Button from "./Button";

export default {
    title: "Button",
    component: Button,
}

export const Default = () => <Button/>
export const Submit = () => <Button onBtnClick={handleSubmit} txt="Submit" backgroundColor="#5581AA" endIcon={<PublishIcon />} hoverColor="#44698C" />
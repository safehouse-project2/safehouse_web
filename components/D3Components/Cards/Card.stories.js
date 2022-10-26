import Card from "./Card";

export default {
    title: "Card",
    component: Card,
}

export const Default = () => <Card/>
export const Variation1 = () => <Card title="Safe House" description="House open for evacuees" btnText="See Details" src="Home.jpeg"/>
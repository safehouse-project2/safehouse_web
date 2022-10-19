import AppText from "../components/AppText/AppText"
import Slider from "../components/Slider/Slider"
import Dropdown from "../components/Dropdown/Dropdown"

export default function UserHome() {
    return (
        <div>
            <AppText
                txt='Recent Listings'
                fontSize='18px'
                color='black'
                padding='0px 0px 0px 0px'
            />

            <Slider
                src="http://placekitten.com/200/300"
                title="Burnaby, BC"
                distance="5km"
            />

            <AppText
                txt='1 Bedroom available'
                fontSize="18px"
                padding="10px 0px 0px 0px"
            />

            <AppText
                txt='Latest data on wildfires and safehouses'
                fontSize="18px"
            />

            <Dropdown />
        </div>
    )
}
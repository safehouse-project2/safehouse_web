import Input from "../components/D3Components/Input/Input";
import Dropdown from "../components/D3Components/Dropdown/Dropdown";
import HomeIcon from "@mui/icons-material/Home";

export default function Test() {
    return (
        <div>
            <Input
                icon={<HomeIcon />}
            />
            <Dropdown ops={[
                { name: 'Test', icon: null }
            ]} />
        </div>
    )
}
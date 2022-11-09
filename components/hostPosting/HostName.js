import { useAuth } from "../../AuthContext/AuthContext"
import AppText from "../D3Components/AppText/AppText";
export default function HostName() {
    const { currentUser } = useAuth()

    return (
        <div>
            <AppText
                txt={"Hello " + currentUser?.displayName ? currentUser.displayName.slice(0, 1).toUpperCase() + currentUser.displayName.slice(1) : ""}
                fontSize="34px"
                color="#f5f5f5"
                fontWeight="bold"
                lineHeight="1.0"
                padding="0px 0px 30px 0px"
            />
        </div>
    )
}
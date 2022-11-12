import AppText from "../AppText/AppText"
import Image from "../Image/ImageComp"
import Header from "../Header/Header"

export default function UpperHalf() {
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <Header color="#f5f5f5" txt="Need Help?" hSize="45px" />
                <AppText
                    color="#f5f5f5"
                    txt="Welcome to our help section!"
                    fontSize="20px"
                />
            </div>

            <div className="flex justify-center items-center flex-col m-[50px]">
                <Image width="367" height="253" src="/OnlineWomenTalking.png" />
            </div>
        </>
    )
}
import AppText from "../AppText/AppText"
import Image from "../Image/ImageComp"

export default function Mockups() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 userhomeMock">
                <div className="">
                    <Image
                        src="/userhome.png"
                        width={284}
                        height={570}
                    />
                </div>
                <div className="flex justify-center items-center bg-[#1e688d] min-w-10 min-h-10 px-5 py-7 rounded-lg">
                    <AppText
                        txt="Check the latest listings and chat with your host"
                        color="#f5f5f5"
                        fontSize="1.1rem"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 mapMock">
                <div className="flex justify-center items-center bg-[#1e688d] min-w-10 min-h-10 px-5 py-7 rounded-lg">
                    <AppText
                        txt="Find the nearest Safe House 
                                in our Wildfire Map"
                        color="#f5f5f5"
                        fontSize="1.1rem"
                    />
                </div>
                <div className="">
                    <Image
                        src="/mapMock.png"
                        width={284}
                        height={570}
                    />
                </div>
            </div>
        </>
    )
}
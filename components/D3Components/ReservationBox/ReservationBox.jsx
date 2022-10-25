import AppText from "../AppText/AppText";
import Button from "../Button/Button";

export default function ReservationBox() {
    return (
        <div className="r-box flex flex-col justify-start items-start gap-5 min-w-[340px] bg-[#fff] rounded-lg">
            <div className="w-[100%] px-5 pt-3">
                <AppText
                    txt="Arrives in 25 days"
                    fontSize="16px"
                    fontWeight="500"
                    color="#5581AA"
                />
            </div>
            <div className="w-[100%] border flex flex-row gap-[100px] items-center px-5 pb-3">
                <div className="flex flex-col ga-3">
                    <AppText
                        txt="Emma"
                        fontSize="16px"
                        fontWeight="500"
                    />
                    <AppText
                        txt="Nov 14 - 30, 2022"
                        fontSize="16px"
                        fontWeight="400"
                    />
                </div>
                <div>
                    <img src="http://placekitten.com/40" alt="" className="rounded-full" />
                </div>
            </div>
            <div className="flex justify-around items-center pb-5 w-[100%]">
                <div className="cursor-pointer ml-[-15px]" onClick={() => prompt('What msg would you like to send ?')}>
                    <AppText
                        txt="Message"
                        fontSize="16px"
                    />
                </div>
                <div className="cursor-pointer" onClick={() => alert('Calling Emma')} >
                    <AppText
                        txt="Call"
                        fontSize="16px"
                    />
                </div>
            </div>
        </div >
    )
}
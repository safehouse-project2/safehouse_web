import AppText from "../AppText/AppText";
import Button from "../Button/Button";

export default function ReservationBox() {
    return (
        <div className="r-box flex flex-col justify-start items-start gap-5 min-w-[340px] bg-[#fff] rounded-lg">
            <div className="w-[100%]">
                <AppText
                    txt="Arrives in 25 days"
                    fontSize="16px"
                    fontWeight="500"
                    color="#5581AA"
                />
            </div>
            <div className="w-[100%] border flex flex-row gap-[100px] items-center border-1-red">
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
            {/* <div className="border-b-2 min-w-[340px] w-[100%]"></div> */}
            <div className="flex gap-[130px]">
                <Button
                    txt="Message"
                    variant="text"
                    backgroundColor=""
                    color="#272727"
                    padding="0px 0px 0px 0px"
                    hoverColor="none"
                    borderRadius="0px"
                />
                <Button
                    txt="Call"
                    variant="text"
                    backgroundColor=""
                    color="#272727"
                    padding="0px 0px 0px 0px"
                    hoverColor="none"
                    borderRadius="0px"
                />
            </div>
        </div>
    )
}
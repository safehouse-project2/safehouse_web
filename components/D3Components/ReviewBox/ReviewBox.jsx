import AppText from "../AppText/AppText";

export default function ReviewBox() {
    return (
        <div className="r-box flex flex-col max-w-[340px] bg-[#fff] rounded-lg py-[20px] px-[20px]">
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-start">
                    <div className="flex flex-col">
                        <img src="http://placekitten.com/60" alt="" className="rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <AppText
                            txt="Zahir Ali"
                            fontSize="18px"
                        />
                        <AppText
                            txt="⭐️⭐️⭐️⭐️⭐️"
                        />
                    </div>
                </div>
                <div className="flex">
                    <AppText
                        txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, phasellus sit proin nunc. Sem volutpat volutpat lacus, et sapien est aliquet aliquet pellentesque."
                        fontWeight="300"
                    />
                </div>
            </div>
        </div >
    )
}
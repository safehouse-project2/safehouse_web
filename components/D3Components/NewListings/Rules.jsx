import AppText from "../AppText/AppText";

export default function Rules({ state }) {
    return (
        <div className="flex flex-col pt-8 gap-3">
            <div className='flex flex-col gap-4'>
                <AppText
                    txt='House Rules'
                    fontSize='18px'
                    fontWeight='500'
                />
            </div>
            <div className='flex flex-col gap-3'>
                <AppText
                    txt='- Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    fontSize='14px'
                />
                <AppText
                    txt='- Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    fontSize='14px'
                />
                <AppText
                    txt='- Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    fontSize='14px'
                />
            </div>
        </div>
    );
};
import AppText from "../AppText/AppText";
import { MainContainer } from "../../../styles/styledComps";


export default function Intro({
}) {

    return (
        <MainContainer>
            <div className='flex flex-row gap-2'>
                <AppText
                    txt='Hi'
                    color='#F5F5F5'
                    fontSize='28px'
                    fontWeight='600'
                />
                <AppText
                    txt='John,'
                    color='#B38A58'
                    fontSize='28px'
                    fontWeight='600'
                />
            </div>

            <div className='flex mt-3 flex-col gap-3'>
                <AppText
                    txt='Hope you are having a great day!'
                    color='#F5F5F5'
                    fontSize='16px'
                    fontWeight='500'
                />
            </div>

        </MainContainer>
    )
}
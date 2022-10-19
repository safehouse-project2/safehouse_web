import AppText from '../components/AppText/AppText';
import Button from '../components/Button/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Input from '../components/Input/Input';
import { BackgroundContainer, MainContainer } from '../../styles/styledComps';

export default function GettingStarted() {
    return (
        <BackgroundContainer src="./homeBG.png">
            <MainContainer>
                <div className='flex justify-start flex-col px-[20px] pt-[10px] pb-[150px]'>
                    <AppText
                        txt="What is your name?"
                        color='#f5f5f5'
                        fontSize='45px'
                        padding='0px 0px 15px 0px'
                    />
                    <Input
                        label='Enter your name?'
                        maxWidth='309px'
                    />
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <Button
                            onBtnClick={() => console.log('clicked')}
                            endIcon={<ArrowForwardIcon />}
                            txt="Next"
                            backgroundColor='#B38A58'
                            variant='contained'
                            padding='8px 27px 8px 27px'
                            textTransform='capitalize'
                            hoverColor='#E9B473'
                        />
                    </div>

                    <div className='flex items-center justify-center flex-col mt-[400px]'>
                        <AppText
                            txt="Already have an account ?"
                            color='#f5f5f5'
                            fontSize='18px'
                        />
                        <Button
                            onBtnClick={() => console.log('clicked')}
                            txt="Login"
                            fontSize='18px'
                            color='#F0E6D9'
                            variant='text'
                            padding='10px 20px 10px 20px'
                            size='large'
                            textTransform='capitalize'
                        />
                    </div>
                </div>
            </MainContainer>
        </BackgroundContainer>
    )
}
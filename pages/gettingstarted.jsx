import styled from 'styled-components';
import AppText from '../components/AppText/AppText';
import Button from '../components/Button/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BackgroundContainer = styled.div`
    background-image: url('./homeBG.png');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
`

export default function GettingStarted() {
    return (
        <BackgroundContainer>
            <div className='flex flex-col'>
                <div className='flex justify-start flex-col px-[20px] pt-[10px] pb-[150px]'>
                    <AppText 
                        txt="What is your name?"
                        color='#f5f5f5'
                        fontSize='50px'
                    />
                    <input type="text" placeholder='Enter your name?'/>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <Button 
                            onBtnClick={() => console.log('clicked')}
                            endIcon = {<ArrowForwardIcon />}
                            txt="Next"
                            backgroundColor='#B38A58'
                            variant='contained'
                            padding='8px 27px 8px 27px'
                        />
                    </div>

                    <div className='flex items-center justify-center flex-col mt-[400px]'>
                        <AppText
                            txt="Already have an account?"
                            color='#f5f5f5'
                            fontSize='16px'
                        />
                        <Button 
                            onBtnClick={() => console.log('clicked')}
                            txt="Login"
                            color='#f5f5f5'
                            variant='text'
                            padding='10px 20px 10px 20px'
                        />
                   </div>
                </div>
            </div>
        </BackgroundContainer>
    )
}
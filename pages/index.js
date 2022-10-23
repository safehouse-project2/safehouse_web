import NavBar from '../components/Home/NavBar'
import Button from '../components/D3Components/Button/Button'
import { BackgroundContainer, MainContainer, CenterContainer } from '../styles/styledComps'
import AppText from '../components/D3Components/AppText/AppText'
import { useRouter } from 'next/router'

export default function Home() {
  const r = useRouter()
  const goToHost = () => {
    r.push('/host')
  }
  const goToEvacuee = () => {
    r.push('/evacuee')
  }

  return (
    <div>
      <div className='absolute w-full h-auto'>
        <NavBar />
      </div>
      <BackgroundContainer src="./homeBG.png">
        <CenterContainer>
          <div className='flex gap-10 z-99'>
            <div className='flex justify-center items-center flex-col gap-3'>
              <Button
                href="/host"
                txt='Host'
              // onBtnClick={goToHost}
              />
              <AppText
                txt='Apply to become a host'
                color='#f5f5f5'
                fontSize='16px'
              />
            </div>
            <div className='flex justify-center items-center flex-col gap-3'>
              <Button
                href="/evacuee"
                txt='Evacuee'
              // onBtnClick={goToEvacuee}
              />
              <AppText
                txt='Apply to become a host'
                color='#f5f5f5'
                fontSize='16px'
              />
            </div>
          </div>
        </CenterContainer>
      </BackgroundContainer>
    </div>
  )
}

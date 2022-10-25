import NavBar from '../components/Home/NavBar'
import AvatarIcon from '../components/D3Components/Chat/Avatar'

export default function Chat() {
    return (
        <div>
            <div className='absolute w-full h-auto'>
                <NavBar />
                <AvatarIcon />
            </div>
        </div>
       
    )
}
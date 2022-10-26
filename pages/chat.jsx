import NavBar from '../components/Home/NavBar'
import AvatarIcon from '../components/D3Components/Chat/Avatar'
import AppText from '../components/D3Components/AppText/AppText'

export default function Chat() {
    return (
        <div>
            <NavBar />
                <div className="AvatarIcons">
                    <AvatarIcon />
                    <AvatarIcon />
                    <AvatarIcon />
                    <AvatarIcon />
                </div>

                <div className="Usernames">
                    <AppText 
                    txt='Hayden'
                    fontSize='14px'
                    fontWeight='600'/>

                    <AppText 
                    txt='Steve'
                    fontSize='14px'
                    fontWeight='600'/>

                    <AppText 
                    txt='Emma'
                    fontSize='14px'
                    fontWeight='600'/>

                    <AppText 
                    txt='John'
                    fontSize='14px'
                    fontWeight='600'/>
                </div>

                <div className="Messages">
                    <AppText 
                    txt='How are you? Will you be arriving soon?'
                    fontSize='13px'
                    fontWeight='500'/>

                    <AppText 
                    txt='Im on the way'
                    fontSize='13px'
                    fontWeight='500'/>

                    <AppText 
                    txt='I have 2 bedrooms available.'
                    fontSize='13px'
                    fontWeight='500'/>

                    <AppText 
                    txt='How many bags are you bringing?'
                    fontSize='13px'
                    fontWeight='500'/>
                </div>
        </div>
        
    )
}
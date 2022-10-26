import AvatarIcon from '../components/D3Components/Chat/Avatar'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Navbar from '../components/D3Components/Navbar/Navbar';
import PrimarySearchAppBar from '../components/D3Components/SearchBar/searchbar';
import { BackgroundContainer, MainContainer, CenterContainer } from '../styles/styledComps'
import { Box } from '@mui/system';
import AppText from '../components/D3Components/AppText/AppText';

export default function ChatPage() {
  return (
    <Box>
    <PrimarySearchAppBar />
    <List sx={{ width: '100vw', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AvatarIcon />
        </ListItemAvatar>
        <ListItemText
          primary="Hayden Connor"
          secondary={
            <React.Fragment>
              {"Hi! How are you? Are you near the…"}
            </React.Fragment>
          }
        />
    
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AvatarIcon img="/Steve.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Steve Lee"
          secondary={
            <React.Fragment>
              {"I have 2 bedrooms available for you and..."}
            </React.Fragment>
          }
        />
    
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AvatarIcon img="/Emma.jpeg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Emma Stone"
          secondary={
            <React.Fragment>
              {'How many bags are you carrying?…'}
            </React.Fragment>
          }
        />

      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AvatarIcon img="/John.jpeg"/>
        </ListItemAvatar>
        <ListItemText
          primary="John Denver"
          secondary={
            <React.Fragment>
              {'Im on the way. Meet you at..'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

      <CenterContainer>
      <AppText padding="20px" color="#CDCDCD" txt="end of messages"/>
      </CenterContainer>

      <Navbar/>
    </Box>
  );
}

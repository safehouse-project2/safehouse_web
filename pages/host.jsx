// import Host from "../components/hostPosting";

// const hostPage = () => {
//   return <Host />;
// };
// export default hostPage;

import CreatHomePost from "../components/hostPosting/CreatHomePost";
import { Container} from '@mui/material'

import React from 'react'

export default function host() {
  return (
    <Container>
      <CreatHomePost/>
    </Container>
  )
}

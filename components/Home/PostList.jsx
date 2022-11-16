import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import AppText from "../D3Components/AppText/AppText";
import Image from "../D3Components/Image/ImageComp.jsx";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const PostList = ({ state }) => {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#B38A58',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });
  if (state.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-10 flex flex-col gap-2">

    <AppText
      txt = "My Listings"
      fontWeight = "600"
      fontSize = "28px"
      color = "#F5F5F5"
    />

      {state.map((post, i) => (
        <div key={post.id} className="flex justify-between items-center p-7">
      
          <div className="flex flex-row gap-5">
            <Button theme={theme} color="primary" variant="contained" href={`/home/${post.id}`}>
              <h1 className="cursor-pointer">{i + 1}</h1>
            </Button>
            
            {post.image && <Image src={post.image} width="250px" height="200px" borderRadius="10px" />}
            
            <div className="bg-[#B38A58] opacity-90 rounded-md p-4">
                <h1 className="fa-solid fa-pencil px-2 duration-300 text-[#FAFAFA]">
                  Bedrooms Available: {post.bedrooms ? post.bedrooms : "0"}
                </h1>
                <h1 className="fa-solid fa-pencil px-2 duration-300 text-[#FAFAFA] pt-3">
                  Address: {post.addressLine1 ? post.addressLine1 : "No Address"}
                </h1>
                {/* <h5>
                  Description:
                  {post.description ? post.description : "No Description"}
                </h5> */}
                <h2 className="fa-solid fa-pencil px-2 duration-300 text-[#FAFAFA] pt-3">
                  Province: {post.province ? post.province : null}
                </h2>
            </div>
          
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostList;

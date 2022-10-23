import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const PostList = ({ state }) => {
  if (state.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-2 border border-white border-solid">
      {state.map((post, i) => (
        <div key={post.id} className="flex justify-between items-center">
          <Button variant="outlined" href={`/home/${post.id}`}>
            <h1 className="cursor-pointer">{i + 1}</h1>
          </Button>
          <h1 className="fa-solid fa-pencil px-2 duration-300">
            Address: {post.addressLine1}
          </h1>
          <h5> Description: {post.description}</h5>
          <h2>Province: {post.province}</h2>
        </div>
      ))}
    </div>
  );
};
export default PostList;

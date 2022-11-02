import Image from "next/image";
import styled from "styled-components";

const Img = styled(Image)`
  border-radius: ${props => props.borderRadius || "0px"};
`;

export default function ImageComp({
  src = "/vercel.svg",
  width = 100,
  height = 100,
  borderRadius = "0px",
  onImgClick = () => {},
}) {
  return (
    <Img
      onClick={onImgClick}
      src={src}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
}

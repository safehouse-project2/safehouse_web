import Image from "next/image";
import styled from "styled-components";

const Img = styled(Image)`
  border-radius: ${props => props.borderradius || "0px"};
`;

export default function ImageComp({
  src = "/vercel.svg",
  width = 100,
  height = 100,
  borderradius = "0px",
  altText = "Image not found",
  onImgClick = () => { },
}) {
  return (
    <Img
      onClick={onImgClick}
      src={src}
      width={width}
      height={height}
      borderradius={borderradius}
      alt={altText}
    />
  );
}

import styled from "styled-components";

const P = styled.p`
  font-family: Poppins;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.fontColor || "black"};
`;

export default function AppText({
  txt = "Default Text",
  fontSize = "14px",
  color = "black",
}) {
  return(  
    <P 
    fontSize={fontSize}
    fontColor={color}
    >
    {txt}
    </P>
  ) 
}

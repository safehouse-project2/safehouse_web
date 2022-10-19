import styled from "styled-components";

const P = styled.p`
  font-family: Poppins;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.fontColor || "black"};
  padding: ${(props) => props.padding || "0px 0px 0px 0px"};
`;

export default function AppText({
  txt = "Default Text",
  fontSize = "14px",
  color = "#272727",
  padding = "0px 0px 0px 0px",
}) {
  return (
    <P
      fontSize={fontSize}
      fontColor={color}
      padding={padding}
    >
      {txt}
    </P>
  )
}

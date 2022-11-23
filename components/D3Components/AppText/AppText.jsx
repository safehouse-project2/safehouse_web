import { textDecoration } from "@chakra-ui/react";
import styled from "styled-components";

const P = styled.p`
  font-family: Poppins;
  font-size: ${props => props.fontSize || "14px"};
  color: ${props => props.fontColor || "black"};
  padding: ${props => props.padding || "0px 0px 0px 0px"};
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: ${props => props.lineHeight};
  border-right: ${props => props.borderRight};
  text-decoration: ${props => props.textDecoration || "underline"};
`;

export default function AppText({
  txt = "Default Text",
  fontSize = "14px",
  color = "#272727",
  padding = "0px 0px 0px 0px",
  fontWeight = "normal",
  lineHeight = "number",
  borderRight = "0px 0px 0px 0px solid #CDCDCD",
  textDecoration = "none",
}) {
  return (
    <P
      fontSize={fontSize}
      fontColor={color}
      padding={padding}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      borderRight={borderRight}
      textDecoration={textDecoration}
    >
      {txt}
    </P>
  );
}

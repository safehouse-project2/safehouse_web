import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// const MyBtn = styled(Button)`
//     background-color: ${(props) =>  props.backgroundColor} !important;
//     color: ${(props) => props.fontColor || "#f5f5f5"};
//     padding: ${(props) => props.padding || "10px 20px 10px 20px"};
//     border-radius: ${(props) => props.borderRadius || "41px"};
//     border: ${(props) => props.border || "none"};
//     margin: ${(props) => props.margin || "0px 0px 0px 0px"};
//     text-align: center;
//     text-transform: ${(props) => props.textTransform || "capitalize"} !important;
//     font-size: ${(props) => props.fontSize || "18px"};
//     border: ${(props) => props.border || "none"};
//     :hover {
//         background-color: ${(props) => props.hoverColor? props.hoverColor: "#936F44"} !important;
//         border: 0 !important;
//     }
// `
export const MyBtn = styled(({backgroundColor, fontColor, padding, borderRadius,margin,
  textTransform,fontSize,border, hoverColor,...props}) => <Button {...props} />)`
   ${(p = props) =>
      `
        color: ${p.backgroundColor ? p.backgroundColor : white};
        background-color: ${p.backgroundColor ? p.backgroundColor : white} !important; 
        color: ${p.fontColor ? p.fontColor : white};
        padding: ${p.padding ? p.padding : "10px 20px 10px 20px"};
        border-radius: ${p.borderRadius ? p.borderRadius : "41px"};
        border: ${p.border ? p.border : "none"};
        margin: ${p.margin ? p.margin : "0px 0px 0px 0px"};
        text-align: center;
        text-transform: ${p.textTransform ? p.textTransform : "capitalize"} !important;
        font-size: ${p.fontSize ? p.fontSize : "18px"};
        border: ${p.border ? p.border : "none"};
        :hover {
            background-color: ${p.hoverColor? p.hoverColor: "#936F44"} !important;
            border: 0 !important;
        }
      `}
  `;
        

export default function AppButton({
  txt = "default Btn Text",
  variant = "contained",
  size = "small",
  startIcon = null,
  endIcon = null,
  color = "#f5f5f5",
  padding = "5px 20px 5px 20px",
  margin = "0px 0px 0px 0px",
  backgroundColor = "#B38A58",
  borderRadius = "41px",
  textTransform = "capitalize",
  fontSize = "18px",
  border = "0px 0px 0px 0px solid #CDCDCD",
  hoverColor = "#936F44",
  href = null,
  onBtnClick = () => { },
}) {
  return <MyBtn
    style={{
      AlignItems: 'center',
    }}
    href={href}
    variant={variant}
    onClick={onBtnClick}
    border={border}
    size={size}
    fontColor={color}
    padding={padding}
    margin={margin}
    backgroundColor={backgroundColor}
    startIcon={startIcon}
    endIcon={endIcon}
    fontSize={fontSize}
    borderRadius={borderRadius}
    textTransform={textTransform}
    hoverColor={hoverColor}
  >
    {txt}
  </MyBtn>;
}
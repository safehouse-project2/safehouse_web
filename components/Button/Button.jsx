import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyBtn = styled(Button)`
    background-color: ${(props) => props.backgroundColor} !important;
    color: ${(props) => props.fontColor || "#f5f5f5"};
    padding: ${(props) => props.padding || "10px 20px 10px 20px"};
    border-radius: ${(props) => props.borderRadius || "41px"};
    margin: ${(props) => props.margin || "0px 0px 0px 0px"};
    text-align: center;
    text-transform: ${(props) => props.textTransform || "capitalize"};
    font-size: ${(props) => props.fontSize || "18px"};
`

export default function AppButton({
  txt = "Default Btn Text",
  variant = "contained",
  size = "small",
  startIcon = null,
  endIcon = null,
  color = "f5f5f5",
  padding = "0px 0px 0px 0px",
  margin = "0px 0px 0px 0px",
  backgroundColor = "",
  borderRadius = "41px",
  textTransform = "lowercase",
  fontSize = "18px",
  onBtnClick = () => { },
}) {
  return <MyBtn
    style={{
      AlignItems: 'center',
    }}
    variant={variant}
    onClick={onBtnClick}
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
  >
    {txt}
  </MyBtn>;
}
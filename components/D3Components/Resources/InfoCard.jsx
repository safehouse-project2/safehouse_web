import styled from 'styled-components';
import { useState } from "react";

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    background: #B38A58;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.09);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.13);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover{
        scale: 1.05;
    }
`
const CardText = styled.p`
    font-family: 'Poppins';
    text-align: center;
    font-size: ${(props) => props.fontSize || "14px"};
    color: ${(props) => props.fontColor || "#F5F5F5"};
    padding: ${(props) => props.padding || "0px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    
`

export default function InfoCard({
    txt1 = "Default Text",
    fontSize1 = "18px",
    color1 = "#F0E6D9",
    fontWeight1 = "600",
    padding1 = "5px",
    txt2 = "Default Text",
    fontSize2 = "14px",
    color2 = "#F5F5F5",
    fontWeight2 = "normal",
    onCrdClick = () => { },
}) {
    return <>
        <CardStyle
            target="_blank"
            onClick={onCrdClick}
        >
            
            <CardText
                fontSize={fontSize1}
                fontColor={color1}
                fontWeight={fontWeight1}
                padding={padding1}
            >
                {txt1}
            </CardText>
            <CardText
                fontSize={fontSize2}
                fontColor={color2}
                fontWeight={fontWeight2}
            >{txt2}
            </CardText>
        </CardStyle>

    </>
}
import * as React from 'react';
import styled from 'styled-components';

const BackgroundImageContainer = styled.div`
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 33.98%, rgba(0, 0, 0, 0.85) 100%), url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 310px;
    max-height: 218px;
    background-color: #272727;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 120px 20px 20px 20px;
    box-shadow: 0px 4px 37px rgba(0, 0, 0, 0.35);
    transition: all 0.4s ease-in-out;
    // :hover {
    //     scale: 1.05;
    // }
`;

export default function Slider({
    title = "Default Location",
    distance = "Default Distance",
    src = "./vercel.svg",
}) {
    return (
        <BackgroundImageContainer src={src}>
            <p className='text-[#f5f5f5] text-2xl'>{title}</p>
            <div className='flex gap-[100px] items-center'>
                <p className='text-[#cdcdcd] text-lg'>{distance}</p>
                <p className='text-[#cdcdcd]'>1/7</p>
            </div>
        </BackgroundImageContainer>
    )
}
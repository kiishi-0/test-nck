import React from 'react'
import styled from 'styled-components';
import chip from '../images/chip.png'
import wifi from '../images/wifi.svg'
import mc from '../images/mc_symbol.svg'


const CardDisplayContainer = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    // background: red;
    @media (max-width: 768px) {
        align-items: center;
        margin: 50px 0;
        width: 90%;
    }
    @media (max-width: 412px) {
        margin: 20px 0;
    }
`
const Card = styled.div`
    position: relative;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 35px;
    background: linear-gradient(45deg, #DE5643, #6263C4);
    max-width: 450px;
    min-width: 400px;
    max-height: 275px;
    min-height: 245px;
    border-radius: 5px;
    h6, h5, p{
        color: #fff;
        font-weight: 500;
        margin: 7px 0;
    }
    @media (max-width: 414px) {
        width: 320px;
        height: 205px;
        padding: 10px 35px;
    }

`
const CardTitle = styled.h6`
    font-size: 12px;
    letter-spacing: 1px;
`
const CardNumber = styled.h5`
    font-size: 16px;
    letter-spacing: 2px;

`
const LogoDiv = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    // background: red;
    justify-content: flex-start;
    
    left: -8%;
    img{
        height: 48px;
    }

`
const WifiImage = styled.img`
    width: 20px;
    margin-right: 10px;
    transform: rotate(90deg);
`
const MCard = styled.img`
    position: absolute;
    height: 70px;
    right: 0;
    bottom: 0;
    margin-right: 20px;
`

export default function CardDisplay(props) {
  return (
    <CardDisplayContainer>
        <Card>
            <CardTitle>CARD NUMBER</CardTitle>
            <CardNumber>{props.cc}</CardNumber>
            <LogoDiv>
                <WifiImage src={wifi} alt="wave"/>
                <img src={chip} alt={chip}/>
            </LogoDiv>
            <CardTitle>EXPIRATION DATE</CardTitle>
            <CardNumber>{props.ccd}</CardNumber>
            <p>John Doe</p>
            <MCard src={mc} alt="Master Card"/>
        </Card>
    </CardDisplayContainer>
  )
}

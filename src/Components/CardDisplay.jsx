import React from 'react'
import styled from 'styled-components';
import chip from '../images/chip.png'
import wifi from '../images/wifi.svg'


const CardDisplayContainer = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const Card = styled.div`
    position: relative;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 35px 25px;
    background: linear-gradient(45deg, #DE5643, #6263C4);
    width: 450px;
    height: 275px;
    border-radius: 5px;
    h6, h5, p{
        color: #fff;
        font-weight: 500;
        margin: 7px 0;
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
    
    left: -5%;
    img{
        height: 48px;
    }

`
const WifiImage = styled.img`
    width: 20px;
    margin-right: 10px;
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
        </Card>
    </CardDisplayContainer>
  )
}

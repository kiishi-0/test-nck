import React from 'react'
import styled from 'styled-components';


const CardDisplayContainer = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 35px 25px;
    background: linear-gradient(45deg, #DE5643, #6263C4);
    width: 450px;
    height: 295px;
    border-radius: 5px;
`
const CardTitle = styled.h6`
    font-size: 14px;
    color: #fff;
    font-weight: 600;
`
const CardNumber = styled.h5`
    color: #fff;
    font-weight: 600;
    font-size: 18px;
`

export default function CardDisplay(props) {
  return (
    <CardDisplayContainer>
        <Card>
            <CardTitle>CARD NUMBER</CardTitle>
            <CardNumber>{props.cc}</CardNumber>
        </Card>
    </CardDisplayContainer>
  )
}

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
    align-items: center;
    justify-content: flex-start;
    padding: 25px;
    background: linear-gradient(45deg, #DE5643, #6263C4);
    width: 450px;
    height: 295px;
    border-radius: 5px;
`

export default function CardDisplay() {
  return (
    <CardDisplayContainer>
        <Card>

        </Card>
    </CardDisplayContainer>
  )
}

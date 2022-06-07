import React from 'react';
import FormSection from './FormSection';
import styled from 'styled-components';
import CardDisplay from './CardDisplay';
import discover from '../images/discover.png';
import paypal from '../images/paypal.png';
import visa from '../images/visa.png';

const MainSectionContainer = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 75vh;
    width: 90%;
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    
`
const SectionContent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`

const LogoDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-end;
    img{
        margin: 0 10px;
        height: 10px;
    }

`
// const

export default function MainSection() {
  return (
    <MainSectionContainer>
        <LogoDiv>
            <img src={visa} alt="Visa" />
            <img src={discover} alt="Discover" />
            <img src={paypal} alt="Paypal" />
        </LogoDiv>
        <SectionContent>
            <CardDisplay></CardDisplay>
            <FormSection></FormSection>
        </SectionContent>
        
    </MainSectionContainer>
  )
}
import React, {useState} from 'react';
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
    padding: 50px 0;
    
`
const SectionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
      }
`

const LogoDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 414px) {
        justify-content: flex-start;
    }
    img{
        margin: 0 10px;
        height: 10px;
        
    }

`
const MainSectionContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    div{
        width: 30%;
    }
    @media (max-width: 414px) {
        flex-direction: column;
        div{
            width: 100%;
        }
    }
`
const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    flex: 1;
    h2{
        width: 100%;
        font-weight: 600;
        padding: 5px 0;
    }
    p{
        color: #9DA0AA;
        // margin-bottom: 20px;
        font-size: 14px;
    }
`

export default function MainSection(props) {
    const [ccNum, setCCNum] = useState('XXXX XXXX XXXX XXXX');
    const [ccDate, setCCDate] = useState('MM/YYYY');
  return (
    <MainSectionContainer>
        <MainSectionContainerHeader>
            <TitleDiv>
                <h2>Payment Information</h2>
                <p>Choose your method of payment</p>
            </TitleDiv>
            <LogoDiv>
                <img src={visa} alt="Visa" />
                <img src={discover} alt="Discover" />
                <img src={paypal} alt="Paypal" />
            </LogoDiv>
        </MainSectionContainerHeader>
        
        <SectionContent>
            <CardDisplay cc={ccNum} ccd={ccDate}></CardDisplay>
            <FormSection setNum={setCCNum} setDate={setCCDate}></FormSection>
        </SectionContent>
        
    </MainSectionContainer>
  )
}

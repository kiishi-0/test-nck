import React from 'react'
import styled from 'styled-components';

const BottomSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 70vh;
    align-items: center;
    justify-content: flex-start;
    // background: pink;
    font-family: 'Poppins', 'Roboto', sans-serif;
`
const TopSection = styled.div`
    height: 65%;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background: green;
    padding: 25px 0 ;
`
const TopContentDivider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px 20px;
`
const TopContentOne = styled(TopContentDivider)`
    align-items: start;
    // background: red;
    `
const TopContentTwo = styled(TopContentDivider)`
    align-items: end;
`

const ContentItems = styled.p`
    color: #2F2F2F;
    font-size: 20px;
    font-weight: 600;
    margin: 6px 0;
    width: 100%;
    text-align: left;
    span{
        color: #D3D6DC;
    }
    @media (max-width: 414px) {
        font-size: 18px;
    }
`
const FinalSection = styled(TopSection)`
    border: 0;
    @media (max-width: 414px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`
const SubmitButton = styled.button`
    width: 300px;
    // margin: 20px 0;
    color: #fff;
    background: #3F67E9;
    border: 0;
    height: 55px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
`
const FinalPayment = styled.h3`
    font-size: 25px;
    font-weight: 1000;
`

export default function BottomSection() {
  return (
    <BottomSectionContainer>
        <TopSection>
            <TopContentOne>
                <ContentItems>Subtotal</ContentItems>
                <ContentItems>Estimated TAX</ContentItems>
                <ContentItems>Promotional Code: <span>Z4KXLM9A</span></ContentItems>
            </TopContentOne>
            <TopContentTwo>
                <ContentItems>₦2,497.00</ContentItems>
                <ContentItems>₦119.64</ContentItems>
                <ContentItems>₦-60.00</ContentItems>
            </TopContentTwo>
            
        </TopSection>
        <FinalSection>
            <TopContentOne>
                <SubmitButton>Complete Payment</SubmitButton>      
            </TopContentOne>  
            <TopContentTwo>
                <FinalPayment>TOTAL: ₦2556.64</FinalPayment>     
            </TopContentTwo>  
        </FinalSection>
    </BottomSectionContainer>
  )
}

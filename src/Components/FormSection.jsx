import React, { useState } from 'react'
import styled from 'styled-components'



const FormSectionContainer = styled.form`
    display: flex;
    width: 45%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const FormSectionOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    label{
        font-family: Poppins, Roboto;
    }input{
        width: 100%;
        border: 0;
        height: 48px;
        background: #EFF0F2;
        outline: none;
        padding: 0 20px;
        border-radius: 5px;
        border: 1px solid #9DA0AA;
        margin: 10px 0;
        transition: box-shadow linear .25s;
        :focus{
            box-shadow: #53586A 0px 0px 0px 1px;
        }
    }   
`
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-right: 20px;
    @media (max-width: 414px) {
        margin-right: 0;
    }
    
`
const InputDivRow = styled(InputDiv)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    input{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    label{
        @media (max-width: 412px) {
            font-size: 14px;
        }
    }
`
const SubmitButton = styled.button`
    width: 100%;
    // margin: 20px 0;
    color: #fff;
    background: #3F67E9;
    border: 0;
    height: 48px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', 'Roboto', sans-serif;
    font-size: 16px;
`
const FormDivider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


export default function FormSection(props) {
    const [cardNo, setCardNo] = useState('');
    const [cardDate, setCardDate] = useState('');

    const HandleCardDate = e =>{
        let num = [...e];
        // console.log(num[num.length -1])
        
        num = num.filter(el => el !== "/")
        // console.log(num)
        let text = num.map((data, index) => {
            if (index === 2) {
              data = "/" + data
            } 
          
            return data
          })
        setCardDate(text.join(""))
        props.setDate(text.join(""))
    }
    const HandleCardNumber = e =>{
        let num = [...e];
        console.log(num[num.length -1])
        
        num = num.filter(el => el !== " ")
        console.log(num)
        let text = num.map((data, index) => {
            if ((index) % 4 === 0) {
              data = " " + data
            } 
          
            return data
          })
        console.log()
        setCardNo(text.join(""))
        props.setNum(text.join(""))
    } 
  return (
    <FormSectionContainer>
        
        <FormDivider>
            
            <FormSectionOne>
                <InputDiv>
                    <label htmlFor="card">Credit Card Number:</label>
                    <input id="card" type="tel" inputMode="numeric" onChange={ e => HandleCardNumber(e.target.value)} pattern="[0-9 \s]{13,20}" autoComplete="cc-number" maxLength="20" placeholder="xxxx xxxx xxxx xxxx" value={cardNo}/>
                </InputDiv>
                <InputDiv>
                    <label htmlFor="code">Security Code:</label>
                    <input id="code" type="tel" inputMode="numeric" pattern="[0-9\s]{3}"  maxLength="3" placeholder="- - -" />
                </InputDiv>
            </FormSectionOne>
            <FormSectionOne>
                <InputDiv>
                    <label htmlFor="date">Expiration Date:</label>
                    <input id="date" type="tel" inputMode="text" value={cardDate} onChange={ e => HandleCardDate(e.target.value)} pattern="[0-9/\s]{3,5}"  maxLength="5" placeholder="MM/YY" />
                </InputDiv>
                <InputDiv>
                    <label htmlFor="post">Postal Code:</label>
                    <input id="post" type="tel" inputMode="numeric" pattern="[0-9\s]{4,5}" autoComplete="cc-number" maxLength="5" placeholder="- - - -" />
                </InputDiv>
            </FormSectionOne>
            
        </FormDivider>
        <FormSectionOne>
            <InputDivRow >
                <input id="later" type="radio" />
                <label htmlFor="post">Use this card for next time purchase</label>
            </InputDivRow>
            
            <SubmitButton>Add Card</SubmitButton>
        </FormSectionOne>
        
        
        
    </FormSectionContainer>
  )
}

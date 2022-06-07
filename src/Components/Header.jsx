import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    height: 78px;
    padding: 0 35px;
    margin-bottom: 75px;
`
const NavItem = styled.a`
    color: #2F2F2F;
    font-size: 20px;
    text-decoration: none;
    margin: 0 35px;
`
const ProfilePicDiv = styled.div`
    width: 50px;
    height: 50px;
    background: #2F2F2F;
    border-radius:100px ;
    margin-left: 50px;
`

export default function Header() {
  return (
    <HeaderContainer>
        <NavItem href="#">TRIPS</NavItem>
        <NavItem href='#'>RECENTLY VIEWED</NavItem>
        <NavItem href="#">BOOKINGS</NavItem>
        <ProfilePicDiv></ProfilePicDiv>
    </HeaderContainer>
  )
}

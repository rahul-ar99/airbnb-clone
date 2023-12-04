import React from 'react';
import styled from 'styled-components';

const HelpMain = () => {
    return (
        <Div>
            <Links>
                <LinkLi><a>Guest</a></LinkLi>
                <LinkLi><a>Host</a></LinkLi>
                <LinkLi><a>Experience Host</a></LinkLi>
                <LinkLi><a>Travel admin</a></LinkLi>
            </Links>
            <LogInDiv>
                <LoginLeft>
                    <p>We're here for you</p>
                    <p>Login to get help with your reservation, account, and more</p>
                </LoginLeft>
                <LoginBtn>
                    Log in or sign up
                </LoginBtn>
            </LogInDiv>
            <Guides></Guides>
        </Div>
    );
};

const Div = styled.div``
const Links = styled.ul`
    display: flex887;
`
const LinkLi = styled.li``
const LogInDiv =styled.div`
display:flex;`
const LoginLeft = styled.div``
const LoginBtn = styled.button``


export default HelpMain;
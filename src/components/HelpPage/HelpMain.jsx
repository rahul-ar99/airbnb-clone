import React, { useState } from 'react';
import styled from 'styled-components';

const HelpMain = () => {

    const [button, setButton] = useState(1)


    return (
        <Div>
            <Links>
                <LinkLi onClick={()=>{
                    setButton(1)
                }}><a>Guest</a></LinkLi>
                <LinkLi onClick={()=>{
                    setButton(2)
                }}><a>Host</a></LinkLi> 
                <LinkLi onClick={()=>{
                    setButton(3)
                }}><a>Experience Host</a></LinkLi>
                <LinkLi onClick={()=>{
                    setButton(4)
                }}><a>Travel admin</a></LinkLi>
            </Links>
            <LogInDiv>
                <LoginLeft>
                    <P1>We're here for you</P1>
                    <P2>Login to get help with your reservation, account, and more</P2>
                </LoginLeft>
                <LoginBtn>
                    Log in or sign up
                </LoginBtn>
            </LogInDiv>
            <Guides>
                <GuidNav>
                    <GuidHead>Guides for getting started</GuidHead>
                    <GuidA>Browse all topics</GuidA>
                </GuidNav>
                <GuidUl>
                    <GuidMain>
                        <GuidImg>
                            <Img />
                        </GuidImg>
                        <GuidImgHead>Getting started with Airbnb</GuidImgHead>
                    </GuidMain>
                    <GuidMain>
                        <GuidImg>
                            <Img />
                        </GuidImg>
                        <GuidImgHead>Getting started with Airbnb</GuidImgHead>
                    </GuidMain>
                    <GuidMain>
                        <GuidImg>
                            <Img />
                        </GuidImg>
                        <GuidImgHead>Getting started with Airbnb</GuidImgHead>
                    </GuidMain>
                    <GuidMain>
                        <GuidImg>
                            <Img />
                        </GuidImg>
                        <GuidImgHead>Getting started with Airbnb</GuidImgHead>
                    </GuidMain>
                </GuidUl>
            </Guides>
            <Article>
                <ArticleHead>Top articles</ArticleHead>
                <ArticleUl>
                    <ArticleLi>
                        <ArticleLiHead>Cancelling your reservation for a stay</ArticleLiHead>
                        <ArticleLiContent>Your plans have changed and now you need to cancel your reservation. No problem. You can...</ArticleLiContent>
                    </ArticleLi>
                </ArticleUl>

            </Article>
        </Div>
    );
};

const Div = styled.div`
    padding: 19px;
`
const Links = styled.ul`
    display: flex;
    border-bottom: 1px solid black;
`
const LinkLi = styled.li`
    margin:0 10px;
`
const LogInDiv =styled.div`
    display:flex;
    border: 1px solid grey;
    justify-content: space-between;
    padding: 20px;
`
const LoginLeft = styled.div``
const P1 = styled.p`
    font-size: 25px;
`
const P2 = styled.p``
const LoginBtn = styled.button``
const Guides = styled.div``
const GuidNav = styled.div``
const GuidHead = styled.h5`
    font-size: 25px;
    font-weight: 500;
    
`
const GuidA = styled.a``
const GuidUl = styled.ul`
    display: flex;
    justify-content: space-between;
`
const GuidMain = styled.li`
`
const GuidImg = styled.div`
    width: 200px;
    height: 200px;
`
const Img = styled.img``
const GuidImgHead = styled.p`

`
const Article = styled.div``
const ArticleHead = styled.h5`
    font-size: 25px;
    font-weight: 500;
`
const ArticleUl = styled.ul``
const ArticleLi = styled.li``
const ArticleLiHead = styled.p``
const ArticleLiContent = styled.p``


export default HelpMain;
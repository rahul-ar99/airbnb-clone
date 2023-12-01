import React from 'react';
import styled from 'styled-components';


const ExploreModal = ({close}) => {
    return (
        <Screen 
            onClick={(e) => {
                if (!e.target.closest(Modal)) {
                close(false);
            }}}
        >
            <Modal>

            <Content>
                <Head>Introducing<br/>Guest Favourites</Head>
                <Para>When you see a Guest Favourite, you'll know<br/>it's one of the 2 million most loved homes<br/>on Aribnb</Para>
                <Button>Start exploring</Button>
            </Content>
            <ImgDiv>
                <Img1 src={require("../../assets/images/phone.webp")} />
            </ImgDiv>
            <CloseBtn onClick={()=>close(false)}>
                <CloseImg src={require("../../assets/icons/close.png")}></CloseImg>
            </CloseBtn>
            </Modal>
        </Screen>
    );
};


const Screen = styled.div`
    z-index: 3;
    position: fixed;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000092;
`;
const Modal = styled.div`
    z-index: 4;
    background-color:white;
    display: flex;
    width: 56rem;
    height: 34rem;
    position: relative;
    justify-content: space-between;
    border-radius: 13px;
    overflow: hidden;

`;
const Content = styled.div`
    width: 31rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 20px;
    
`;
const Head = styled.h6`
    font-size:36px;
    font-weight: 600;
    line-height: 1.1;
`;
const Para = styled.p`
    font-size: 16px;
    padding: 20px 0 30px;
`;
const Button = styled.button`
        background-color: black;
    color: white;
    padding: 13px 20px;
    font-weight: 400;
    border-radius: 10px;
`;
const ImgDiv = styled.div`
    height: 100%;
    width: 25rem;
`;
const Img1 = styled.img`
    height: 100%;
`;

const CloseBtn = styled.div`
    position: absolute;
    width: 10px;
    top: 20px;
    left: 20px;
    padding: 5px;
    box-sizing: content-box;
    cursor: pointer;
    `

const CloseImg = styled.img`
    filter:grayscale(100%);
`


export default ExploreModal;
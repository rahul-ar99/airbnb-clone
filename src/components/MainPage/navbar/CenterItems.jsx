import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { ScrollValue } from '../../MainPage';


const CenterNav = () => {

    const {scroll} = useContext(ScrollValue)


    const [isModal,setModal] = useState(true)

    
    const [centerItem, setCenterItem] = useState(true)


    useEffect(()=>{
        const handleScroll = () =>{
            setCenterItem(scroll)
            console.log(scroll)
        }
        window.addEventListener("scroll",handleScroll)
    })


    return (
        <Nav>
            {!scroll?
            <CenterDiv >
                <TopHeads>
                    <P1>Anywhere</P1>
                </TopHeads>
                <Line>|</Line>
                <TopHeads>
                    <P1>Any week</P1>
                </TopHeads>
                <Line>|</Line>
                <TopHeads>
                    <P2>Add guest</P2>
                </TopHeads>
                <SearchBtn>
                    <img src={require("../../../assets/icons/magnifying-glass.png")} alt="searchIcon" className='invert'/>
                </SearchBtn>
            </CenterDiv>:
            <MainCenter>
                <TopSection>
                    <TopBtns>Stays</TopBtns>
                    <TopBtns>Experience</TopBtns>
                    <TopBtns>Online Experience</TopBtns>
                </TopSection>
                <BottomSection>
                    <BottomHeads>
                        <B1>where</B1>
                        <B0>Search destinations</B0>
                    </BottomHeads>
                    <Line>|</Line>
                    <BottomHeads>
                        <B1>Check in</B1>
                        <B0>Add dates</B0>
                    </BottomHeads>
                    <Line>|</Line>
                    <BottomHeads>
                        <B2>Add guest</B2>
                        <B0>Add dates</B0>
                    </BottomHeads>
                    <Line>|</Line>
                    <BottomHeads2>
                        <B2>Add guest</B2>
                        <B0>Add guests</B0>
                    </BottomHeads2>
                    <SearchBtn2>
                        <img src={require("../../../assets/icons/magnifying-glass.png")} alt="searchIcon" className='invert'/>
                    </SearchBtn2>

                </BottomSection>
            </MainCenter>
            }
        </Nav>
    );
}

const CenterDiv = styled.div`
    border: 1px solid #d7d7d7;
    padding: 6px;
    border-radius: 30px;
    display: flex;
    align-items:center;
    gap: 10px;
    padding-left: 19px;
    cursor: pointer;
    /* background-color: blue; */
`

const Nav = styled.div`
    margin-left: 170px;
    /* margin-top: 100px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TopHeads = styled.div`
    padding: 4px;
`
const Line = styled.p`
    color:#b7b7b7;
    font-size: 20px;
`
const P1 = styled.p`
    font-size:14px;
    font-weight: 500;
    `
const P2 = styled.p`
    font-size:14px;
    font-weight: 500;
    color: #838383;
`

const B0 = styled.h6``

const SearchBtn = styled.div`
    width: 12px;
    box-sizing: content-box;
    padding: 10px;
    background-color: #FF385C;
    border-radius: 50%;
`
const SearchBtn2 = styled.div`
    width: 18px;
    box-sizing: content-box;
    padding: 10px;
    position: absolute;
    right: 10px;
    background-color: #FF385C;
    border-radius: 50%;
    &:hover{
        
        background-color: #de2346;
    }
`


const MainCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
const TopSection =styled.div`
    display: flex;
    gap: 40px;
    color: grey;

`
const TopBtns =styled.button``
const BottomSection = styled.div`


   border: 1px solid #d7d7d7;
    /* padding: 6px; */
    border-radius: 30px;
    display: flex;
    align-items:center;
    /* gap: 10px; */
    /* padding-left: 19px; */
    position: relative;
    cursor: pointer;
`
const BottomHeads = styled.div`
    font-size: 13px;
    padding:8px 50px 8px 30px;
    border-radius: 30px;
    &:hover{
        background-color: #d7d7d7;
    }
    `
const BottomHeads2 = styled.div`
    font-size: 13px;
    padding:8px 80px 8px 30px;
    border-radius: 30px;
    &:hover{
        background-color: #d7d7d7;
    }
`
const B1 = styled.h5`
`
const B2 = styled.h5`

`

export default CenterNav;
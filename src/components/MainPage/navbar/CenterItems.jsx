import React, {useState} from 'react';
import styled from 'styled-components';


const CenterNav = () => {
    const [isModal,setModal] = useState(true)

    return (
        <Nav>
            <CenterDiv >
                <Heads>
                    <P1>Anywhere</P1>
                </Heads>
                <Line>|</Line>
                <Heads>
                    <P1>Any week</P1>
                </Heads>
                <Line>|</Line>
                <Heads>
                    <P2>Add guest</P2>
                </Heads>
                <SearchBtn>
                    <img src={require("../../../assets/icons/magnifying-glass.png")} alt="searchIcon" className='invert'/>
                </SearchBtn>
            </CenterDiv>
            {/* {isModal && <CenterContent />} */}
            {/* <MainCenter>
                <TopSection>
                    <TopBtns>Stays</TopBtns>
                    <TopBtns>Experience</TopBtns>
                    <TopBtns>Online Experience</TopBtns>
                </TopSection>
                <BottomSection>


                </BottomSection>
            </MainCenter> */}
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

const Heads = styled.div`
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

const SearchBtn = styled.div`
    width: 12px;
    box-sizing: content-box;
    padding: 10px;
    background-color: #FF385C;
    border-radius: 50%;
`


const MainCenter = styled.div``
const TopSection =styled.div``
const TopBtns =styled.button``
const BottomSection = styled.div``

export default CenterNav;
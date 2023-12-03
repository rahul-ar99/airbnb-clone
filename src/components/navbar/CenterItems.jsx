import React from 'react';
import styled from 'styled-components';

const CenterNav = () => {
    return (
        <CenterDiv>
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
                <img src={require("../../assets/icons/magnifying-glass.png")} alt="searchIcon" className='invert'/>
            </SearchBtn>
        </CenterDiv>
    );
}

const CenterDiv = styled.div`
    border: 1px solid #d7d7d7;
    padding: 6px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 19px;
    margin-left: 170px;
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

export default CenterNav;
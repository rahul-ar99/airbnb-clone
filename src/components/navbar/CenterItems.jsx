import React from 'react';
import styled from 'styled-components';

const CenterNav = () => {
    return (
        <CenterDiv>
            <Anywhere>
                <p1>Anywhere</p1>
            </Anywhere>
            <p>|</p>
            <Anywhere>
                <p1>Anywhere</p1>
            </Anywhere>
            <p>|</p>
            <Anywhere>
                <p1>Anywfsdghere</p1>
            </Anywhere>
            <SearchBtn>
                <img src={require("../../assets/icons/magnifying-glass.png")} alt="searchIcon" className='invert'/>
            </SearchBtn>
        </CenterDiv>
    );
}

const CenterDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const Anywhere = styled.div`
    padding: 4px;
`
const SearchBtn = styled.div`
    width: 15px;
    box-sizing: content-box;
    padding: 10px;
    background-color: #FF385C;
    border-radius: 50%;
`

export default CenterNav;
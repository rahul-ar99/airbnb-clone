import React from 'react';
import styled from 'styled-components';

const RightNav = () => {
    return (
        <Right>
            
            <setup>
                <p>Airbnb your home</p>
            </setup>
            <Language>
                <img src={require('./../../assets/icons/world-icon-png-3008.png')}  alt="globe" />
            </Language>
            <User>
                <Hamburger>
                    <img src={require("../../assets/icons/menu.png")} alt="Hamsburger" />
                </Hamburger>
                <UserImg>
                    <img src={require("../../assets/icons/user.png")} alt="userIcon" className='invert-[.4]' />
                </UserImg>
            </User>
        </Right>
    );
};



const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Language = styled.div`
  width: 30px;
  height: auto;
`

const User = styled.button`
    /* width: 70px; */
    display: flex;
    align-items: center;
    padding: 5px 8px;
    border: 1px solid black;
    border-radius: 26px;
`

const UserImg = styled.div`
    width: 30px;
    height: auto;
`

const Hamburger = styled.div`
    width: 18px;
    height: auto;
    margin-right: 10px;
`



export default RightNav;
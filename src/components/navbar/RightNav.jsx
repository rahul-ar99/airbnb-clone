import React, { useState } from 'react';
import styled from 'styled-components';
import UserModal from './user/UserModal';
import LangRegion from './LangRegion';
// import Asdf from './user/Asdf';

const RightNav = () => {
    // Hooks for userModal show and hide
    const [userModal,setUserModal] = useState(false);
    const [langModal, setLangModal] = useState(false);

    // const [sdf, setAsdf] = useState(false)

    return (
        <>
            <Right>
                <YourHome >
                    <p>Airbnb your home</p> 
                </YourHome>
                <Language onClick={()=>{
                    setLangModal(true)?setLangModal(false):setLangModal(true)
                }}>
                    <img src={require('../../assets/icons/world-icon-png-3008.png')}  alt="globe" />
                </Language>
                <User onClick={()=>{
                        setUserModal(userModal?false:true)
                    }}>
                    <Hamburger>
                        <img src={require("../../assets/icons/menu.png")} alt="Hamsburger" />
                    </Hamburger>
                    <UserImg>
                        <img src={require("../../assets/icons/user.png")} alt="userIcon" className='invert-[.4]' />
                    </UserImg>
                </User>
            </Right>       
            {userModal && <UserModal userClose={setUserModal} />}
            {langModal && <LangRegion close={setLangModal} />}     
        </>

    );
};



const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`
const YourHome = styled.div`
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-kerning: normal;
`
const Language = styled.div`
  width: 16px;
  height: auto;
  cursor: pointer;
`

const User = styled.button`
    /* width: 70px; */
    display: flex;
    align-items: center;
    padding: 7px 8px 7px 13px;
    border: 1px solid #c3c3c3;
    border-radius: 26px;
    position: relative;
    column-gap: 5px;
`

const UserImg = styled.div`
    width: 30px;
    height: auto;
`

const Hamburger = styled.div`
    width: 14px;
    height: auto;
    margin-right: 10px;
    filter: grayscale(100%);
`



export default RightNav;
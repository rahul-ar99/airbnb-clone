import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import ExploreModal from '../../exploreLink/ExploreModal';
import Login from './Login';
import { Link } from 'react-router-dom';


const UserModal = ({userClose}) => {
    const [featureModal, setFeaturesModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false)
    // const [mainModal, setMainModal] = useState(true)

    // useEffect(()=>{
    //     setMainModal(false)
    //     return()=>{
    //         setMainModal(true)
    //     }
    // })
    return (
        <>
            <UserItems>
                <Items onClick={()=>{
                    let statement = setFeaturesModal === true?false:true
                    setFeaturesModal(statement)
                }}>
                    <P1 >Winter Release Features</P1>
                </Items>
                <hr/>
                <Items>
                    <P1>Login</P1></Items>
                <Items onClick={()=>{
                        setLoginModal(true)
                    }}>Sign up</Items>
                <hr/>
                <Items>Airbnb your home</Items>
                <Items><Link to="/help"> Help centre</Link></Items>
            </UserItems>
            {featureModal && <ExploreModal close={setFeaturesModal} />}
            {loginModal && <Login loginClose={setLoginModal} />}
        </>
    );
};

const UserItems = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
    top: 50px;
    right: 0px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    align-items: start;
    width: 240px;

`;
const Items = styled.p`
    white-space: nowrap;
    padding: 13px 0 13px 10px;
    cursor: pointer;
`;
const P1 = styled.span``;

export default UserModal;
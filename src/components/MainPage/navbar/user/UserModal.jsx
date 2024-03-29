import React,{useState, useEffect, createContext, useContext, useRef} from 'react';
import styled from 'styled-components';
import ExploreModal from '../../exploreLink/ExploreModal';
import Login from './Login';
import { Link } from 'react-router-dom';
import { MyAuthenticated } from '../../../Authentication';



const UserModal = ({userClose}) => {



    const userModalRef = useRef(null)

    // 
    const [userModalMain, setUserModalMain] = useState(true);

    
    // firstly authenticated by state then import from usecontext
    // const [authenticated , setAuthenticated] = useState(false)
    

    // import from authenticated page with usecontext
    const {authenticated , updateState} = useContext(MyAuthenticated);


    // this is for feature modal open and close
    const [featureModal, setFeaturesModal] = useState(false);


    // this is for login modal open and close
    const [loginModal, setLoginModal] = useState(false)




    // const [mainModal, setMainModal] = useState(true)
    const [signOrLog, setSignOrLog] = useState(false);


    // this is for, some error show when click on usericon more than one time that will be an error
    // 
    useEffect(()=> {
        document.addEventListener("click",handleClickOutside, true)
    },[userModalRef])

    const handleClickOutside = () =>{
        if(userModalRef.current && !userModalRef.current.contains){
            setUserModalMain(false)

        }
    }


    // useEffect(()=>{
    //     setMainModal(false)
    //     return()=>{
    //         setMainModal(true)
    //     }
    // })


    return (
        <>
        {userModalMain && 
            <UserItems ref={userModalRef}>
                <Items onClick={()=>{
                    let statement = setFeaturesModal === true?false:true
                    setFeaturesModal(statement) 
                    }}>

                    <P1 >Winter Release Features</P1>
                </Items>
                <hr/>
                {authenticated===false && 
                <>
                    <Items onClick={()=>{
                        setLoginModal(true)
                        
                    }}>
                        <P1 >Login</P1></Items>
                    <Items onClick={()=>{
                        // setUserModalMain(false)
                        setLoginModal(true)
                    }}>Sign up</Items>
                    <hr/>
                    </>
                }
                {authenticated && 
                <>
                    <Items><LoginItem><Link>Messages</Link></LoginItem></Items> 
                    <Items><LoginItem><Link>Notification</Link></LoginItem></Items> 
                    <Items><LoginItem><Link>Trips</Link></LoginItem></Items> 
                    <Items><LoginItem><Link to="favorites">Wishlist</Link></LoginItem></Items> 
                    <hr />
                </>
                }
                <Items><Link to="/help">Airbnb your home</Link></Items>
                {authenticated && 
                    <>
                    <Items><Link>Account</Link></Items> 
                    <hr />
                    </>
                }
                <Items><Link to="/help"> Help centre</Link></Items>
                {authenticated && 
                    <>
                    <Items><Link onClick={()=>updateState(false)}>Logout</Link></Items> 
                    </>
                }
            </UserItems>
}
            {featureModal && <ExploreModal close={setFeaturesModal}/>}
            {loginModal && <Login loginClose={setLoginModal} authenticated ={updateState}/>}
        </>
    );
};




const UserItems = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
    top: 50px;
    right: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    align-items: start;
    width: 240px;

    hr{
        border-bottom: 1px solid lightgray;
        width: 100%;
    }

`;
const Items = styled.p`
    white-space: nowrap;
    padding: 13px 0 13px 10px;
    cursor: pointer;
    width: 100%;
`;
const P1 = styled.span``;
const LoginItem = styled.p`
    font-weight:600;
`

export default UserModal;
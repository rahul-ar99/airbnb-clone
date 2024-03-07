import React, {createContext, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { ScrollValue } from '../../../App';
import Destination from "../../modal/Destination"

export const destination = createContext()




const CenterNav = () => {
    

    const [searchDestination, setSearchDestination] = useState("")

    const [destinationState, setDestinationState] = useState(false)

    const [navChanging, setNavChanging] = useState(false)

    const {scroll} = useContext(ScrollValue)


    const [isModal,setModal] = useState(true)

    
    const [centerItem, setCenterItem] = useState(true)
    useEffect(()=>{
        setModal(scroll)
    },[scroll])
    

    const changingNavbar = () =>{
        document.getElementById("navbarbottom").style.display="flex"
        document.getElementById("navbartop").style.display="none"
    }


    useEffect(()=>{
        const handleScroll = () =>{
            // setCenterItem(scroll)
            if(scroll>=0){
                setTimeout(() => {
                    // document.getElementById("navbarbottom").style.display="none"
                    // document.getElementById("navbartop").style.display="flex"
                    setCenterItem(isModal)                
                }, 500);
            }else{
                // document.getElementById("navbarbottom").style.display="none"
            }
        }
        window.addEventListener("click",(e)=>{
            if(e !== BottomHeads){
                console.log(e)
                console.log(BottomHeads)
                console.log("asdfsd")
            }
        })
        window.addEventListener("scroll",handleScroll)
    })


    return (
        <>
        <destination.Provider value={{searchDestination, setSearchDestination}}>

            <Nav>
                {/* {!scroll && */}
                <CenterDiv id='navbartop' onClick={()=>{
                    // setDestinationState(destinationState?false:true)
                    changingNavbar()
                    setDestinationState(true)
                }}
                className={scroll?"":"noetactive"}
                >
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
                </CenterDiv> 
                <MainCenter id='navbarbottom' className='relative'>
                    <TopSection className={scroll?"":"notactive"}>
                        <TopBtns onClick={()=>setNavChanging(false)} className={navChanging?"active":""}>Stays</TopBtns>
                        <TopBtns onClick={()=>setNavChanging(true)}  className={navChanging?"active":""}>Experience</TopBtns>
                        <TopBtns>Online Experience</TopBtns>
                    </TopSection>
                    <BottomSection className={scroll?"":"notactive"}>
                        <BottomHeads onClick={()=>setDestinationState(destination?false:true)}>
                            <B1 onClick={()=>setDestinationState("asdfsdf")}>where</B1>
                            <SearchInput type="text" placeholder='Search destinations' className="text-lg font-semibold" value={searchDestination} onChange={(e)=>setSearchDestination(e.target.value)} />
                        </BottomHeads>
                        <Line>|</Line>
                        {navChanging ?
                            <>
                            <BottomHeads>
                                <B1>Check in</B1>
                                <B0>Add dates</B0>
                            </BottomHeads>
                            <Line>|</Line>
                            <BottomHeads>
                                <B2>Add guest</B2>
                                <B0>Add dates</B0>
                            </BottomHeads>
                            </>:
                            <BottomHeads className=''>
                                <B2>Add guest</B2>
                                <B0>Add dates</B0>
                            </BottomHeads>
                        }
                        <Line>|</Line>
                        <BottomHeads2>
                            <B2>Add guest</B2>
                            <B0>Add guests</B0>
                        </BottomHeads2>
                        <SearchBtn2>
                            <img src={require("../../../assets/icons/magnifying-glass.png")} alt="searchIcon" className='invert'/>
                        </SearchBtn2>
                    </BottomSection>
                    {destinationState && <Destination />}
                </MainCenter>
            </Nav>
        </destination.Provider>
       </>
    );
}

const CenterDiv = styled.div`
    display: none;
    border: 1px solid #d7d7d7;
    padding: 6px;
    border-radius: 30px;
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

const SearchInput = styled.input`
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
    transition: 1s;
    font-size: medium;
    &.notactive{
        gap:10px;
        font-size: smaller;
        /* display: none; */
    }
    &.active{
        font-size: 18px;
    }

`
const TopBtns =styled.button`
    font-size: inherit;
`
const BottomSection = styled.div`


   border: 1px solid #d7d7d7;
    /* padding: 6px; */
    border-radius: 30px;
    display: flex;
    align-items:center;
    font-size: 13px;
    /* gap: 10px; */
    padding:8px 50px 8px 30px;
    /* padding-left: 19px; */
    position: relative;
    cursor: pointer;

    &.notactive{
        font-size: 8px;
        gap:0px;
        padding: 0px 20px 0px 10px;
    }
    transition: .5s ;

`
const BottomHeads = styled.div`
    font-size: inherit;
    padding:inherit;
    border-radius: 30px;
    &:hover{
        background-color: #d7d7d7;
    }
    &:hover ${SearchInput}{
        background-color: #d7d7d7;
    }
    `
const BottomHeads2 = styled.div`
    font-size: inherit;
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
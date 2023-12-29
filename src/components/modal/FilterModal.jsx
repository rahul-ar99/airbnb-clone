import React ,{useEffect} from 'react';
import styled from 'styled-components';


const FilterModal = ({close}) => {   //close is props function

    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=>(
            document.body.style.overflow = "auto"
        )
    })

    return (
        <Screen 
            onClick={(e) => {
                if (!e.target.closest(Modal)) {
                    close(false);

                }
            }}   //close modal when click outside
        >
            <Modal>
                <TopBar>
                    <CloseBtn onClick={()=>close(false)} >  {/* close modal when click 'x' icon */}
                        <CloseImg src={require("../../assets/icons/close.png")}></CloseImg>
                    </CloseBtn>
                </TopBar>
                <TypeofPlace>
                    <MainHead>Type of place</MainHead>
                    <HeadTag>A home all to yourself.</HeadTag>
                    <ButtonDiv>
                        <Button className='active'>Any type</Button>
                        <Button>Room</Button>
                        <Button>Entire home</Button>
                    </ButtonDiv>
                </TypeofPlace>
                <PriceRange>
                    <MainHead>Price range</MainHead>
                    <HeadTag>Nightly prices before fees and taxes</HeadTag>

                </PriceRange>
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
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000092;
`;

const Modal = styled.div`
    z-index: 4;
    background-color:white;
    display: flex;
    flex-direction: column;
    width: 56rem;
    height: 34rem;
    position: relative;
    border-radius: 13px;
    overflow: hidden;
    padding: 0 20px;
`;

const TopBar = styled.div`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid black;
`;

const CloseBtn = styled.div`
    position: absolute;
    width: 10px;
    top: 20px;
    left: 20px;
    padding: 5px;
    box-sizing: content-box;
    cursor: pointer;
`;

const CloseImg = styled.img`
    filter:grayscale(100%);
`;

const TypeofPlace = styled.div``;

const MainHead = styled.h5``;

const HeadTag = styled.p``;

const ButtonDiv = styled.div`
    display: flex;
    width: 90%;
    height: 60px;
    justify-content: space-between;
    margin: 0 auto;
    border-radius: 13px;
    overflow: hidden;
    border: 1px solid black;
`
const Button = styled.button`
    color: black;
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active{
        color: white;
        background-color: black;
    }
    &:not(:nth-child(1)){
        border-left: 1px solid black;
    }
`

const PriceRange = styled.div``

export default FilterModal;
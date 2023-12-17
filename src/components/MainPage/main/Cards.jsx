import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Data from "../../../assets/json/mainContent.json"
import Login from '../navbar/user/Login';
import { useNavigate } from 'react-router-dom';

const Cards = () => {

    // if click on fav or booking then show the login page
    // create state variables
    const [loginModal, setLoginModal] = useState(false);


    // create all data into array cards
    const [cards, setCards] = useState([])

    
    // import data to cards state with useEffect method
    useEffect(()=>{
        setCards(Data,cards)
    },[])


    // for scroll
    const ref1 = useRef(null);


    //scroll image inside the card
    // but it's doesn't work, you need to edit this code
    const scroll = (scrollOffset) =>{
        ref1.current.scrollLeft += scrollOffset;
        console.log(ref1.current.scrollLeft)
    }



    // navigate to other 
    const navigate = useNavigate()


    // navigate to open each card when click that modal
    const handleClick = (cardId) =>{
        navigate(`/singleitem`, {state:{id:cardId}})
        
    }

    return (
        <div className='wrapper'>
            <AllCards>


                {/* map for each card */}
                {cards.map((each, index)=>(
                    <SingleCard key={each.id} onClick={(e)=>{
                        console.log(each.id)
                        handleClick(each.id)

                    }}>
                        <ImageBorder>
                            <Images ref={ref1}>
                                <Img1 src={require(`../../../assets/images/${each.image}.webp`)} alt="" />
                                <Img1 src={require("../../../assets/images/photos2.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos3.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos4.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos5.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos6.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos7.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos8.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos9.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos10.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos11.webp")} alt="" />
                            </Images>
                        </ImageBorder>  
                        <LikeIcon onClick={()=>setLoginModal(true)}>
                            <HeartInput type="checkbox" id='check-box'/>
                            <HeartLabel htmlFor='check-box' className='heart'/>
                            <HeartIcon src={require("../../../assets/icons/heart.png")} alt="" />
                        </LikeIcon>
                        <Details>
                            <FirstLine>
                                <Place>{each.place}</Place>
                                <Rating><Ratingicon src={require("../../../assets/icons/star.png")}></Ratingicon>{each.ratings}</Rating>
                            </FirstLine>
                            <Distance>{each.distance}</Distance>
                            <Date>{each.dates}</Date>
                            <Money><Price>${each.price} night</Price></Money>
                        </Details>
                        <LeftBtn onClick={()=>scroll(-100)}><ArrowIcon  src={require("../../../assets/icons/angle-left.png")}/></LeftBtn>
                        <RightBtn onClick={()=>scroll(100)}><ArrowIcon  src={require("../../../assets/icons/next.png")}/></RightBtn>
                    </SingleCard>
                ))}
                
            </AllCards>
            {loginModal && <Login loginClose={setLoginModal} />}
        </div>
    );
};

const AllCards = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 40px;
`;

const ImageBorder = styled.div`
    width: 272px;
    /* overflow: hidden; */

`

const Images = styled.div`
    width:fit-content;
    height: 255px;
    border-radius: 15px;
    display: flex;
    overflow: scroll;
`;

const Img1 = styled.img`
    height: 100%;
    width:272px;
`
const LikeIcon = styled.div`
    width: 25px;
    filter: invert();
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
`;
const HeartIcon = styled.img`
`

const HeartInput = styled.input``
const HeartLabel = styled.label``
const Details = styled.div``;
const FirstLine = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Place = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 8px 0 2px 0;
`;

const Rating = styled.p`
    display:flex;
    align-items: center;
`
const Ratingicon = styled.img`
    width:13px;
    height: 13px;
`
const Distance = styled.p`
    color: grey;
    font-size: 14px;
    `;
const Date = styled.p`
    color: grey;
    font-size: 14px;
`;
const Money = styled.p`
    display: flex;
    color: #424141;
`;
const Price = styled.span`
    font-weight: 500;
`;

const LeftBtn = styled.button`
    width: 18px;
    position: absolute;
    z-index: 19;
    top: 30%;
    left: 10px;
    background-color: white;
    border-radius: 50%;
    padding: 3px;
    box-sizing: content-box;
    display: none;



`
const RightBtn = styled.button`
    display: none;
    width: 18px;
    position: absolute;
    z-index: 19;
    top: 30%;
    right: 10px;
    background-color: white;
    border-radius: 50%;
    padding: 3px;
    box-sizing: content-box;
`
const ArrowIcon = styled.img`

`
const SingleCard = styled.li`
    width:250px;
    position: relative;
    width:fit-content;
    cursor: pointer;
    overflow: hidden;
     
    &:hover ${RightBtn}{
        display: block;
    }
    &:hover ${LeftBtn}{
        display: block;
    }
`;

export default Cards;
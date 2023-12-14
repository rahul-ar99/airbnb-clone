import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Data from "../../../assets/json/mainContent.json"

const Cards = () => {
    
    // 
    const [cards, setCards] = useState([])

    useEffect(()=>{
        setCards(Data,cards)
    },[])




    return (
        <div className='wrapper'>
            <AllCards>
                {cards.map((each, index)=>(
                    <SingleCard >
                            <Images>
                                <Img1 src={require(`../../../assets/images/${each.image}.webp`)} alt="" />
                                <Img1 src={require("../../assets/images/photos2.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos3.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos4.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos5.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos6.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos7.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos8.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos9.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos10.webp")} alt="" />
                                <Img1 src={require("../../assets/images/photos11.webp")} alt="" />
                        </Images>
                        <LikeIcon>
                            <HeartIcon src={require("../../assets/icons/heart.png")} alt="" />
                        </LikeIcon>
                        <Details>
                            <FirstLine>
                                <Place>{each.place}</Place>
                                <Rating><Ratingicon src={require("../../assets/icons/star.png")}></Ratingicon>{each.ratings}</Rating>
                            </FirstLine>
                            <Distance>{each.distance}</Distance>
                            <Date>{each.dates}</Date>
                            <Money><Price>${each.price} night</Price></Money>
                        </Details>
                    </SingleCard>
                ))}
                
            </AllCards>
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
const SingleCard = styled.li`
    width:250px
    position: relative;
    width:fit-content;
    cursor: pointer;
`;


const Images = styled.div`
    width:272px;
    height: 255px;
    border-radius: 15px;
    overflow: scroll;
    display: flex;
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

const Rating = styled.p``
const Ratingicon = styled.img``
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


export default Cards;
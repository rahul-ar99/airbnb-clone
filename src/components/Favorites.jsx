import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Data from "../assets/json/mainContent.json"
import styled from 'styled-components';




const Favorites = () => {

    const [favCards, setFavCards] = useState([])
    const [favState, setFavState] = useState(false)

    // const Fav = useSelector(state=>state.favorites)
    const importFav = localStorage.getItem("fav")
    
    const splitFav = importFav.split(",")
 
    const allFav = []
    splitFav.forEach((item)=>{
        // console.log(item)
        if(!allFav.includes(item)){
            allFav.push(item)
        }
    })


    
    useEffect(()=>{
        setFavCards(Data)
        
        console.log(splitFav)
        if(allFav.length > 1){
            setFavState(true)
            console.log('asdfdsf')
        }
        // console.log(Array.from(importFav))
        // favCards.filter(item => item.)
    },[])


    return (
        <div>
            <Head>

                <H1>Favorties</H1>
            </Head>
            {favState && 
            <AllCards>


                {/* map for each card */}
                {allFav.map((id1, index)=>(
                    <SingleCard key={Data[id1-1].id} onClick={()=>{
                        // console.log(each.id)
                        // handleClick(each.id)
                        // handleLove()
                        
                    }}>
                        <ImageBorder>
                            <Images> 
                                    <Img1 src={require(`../assets/images/${Data[id1-1].image}.webp`)} alt="" />
                                    <Img1 src={require("../assets/images/photos12.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos3.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos4.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos5.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos6.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos7.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos8.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos9.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos10.webp")} alt="" />
                                    <Img1 src={require("../assets/images/photos11.webp")} alt="" />
                            </Images>
                        </ImageBorder>  
                        <LikeIcon onClick={(event)=>{
                                event.stopPropagation()
                                // // setLoginModal(true)
                                // likeFunction(each.id)
                                // handleAddToFavorites(each.id)
                            }
                        }>
                            <HeartInput type="checkbox" className='heart-checkbox' id={`checkbox${index}`} />
                            <HeartLabel className='heart active' htmlFor={`checkbox${index}`}></HeartLabel>
                            {/* <HeartIcon src={require("../../../assets/icons/heart.png")} alt="" /> */}
                        </LikeIcon>
                        <Details>
                            <FirstLine>
                                <Place>{Data[id1-1].place}</Place>
                                <Rating><Ratingicon src={require("../assets/icons/star.png")}></Ratingicon>{Data[id1-1].ratings}</Rating>
                            </FirstLine>
                            <Distance>{Data[id1-1].distance}</Distance>
                            <Date>{Data[id1-1].dates}</Date>
                            <Money><Price>${Data[id1-1].price} night</Price></Money>
                        </Details>
                        <LeftBtn onClick={(event)=>{
                            event.stopPropagation();
                        }
                    }><ArrowIcon  src={require("../assets/icons/angle-left.png")}/></LeftBtn>
                        <RightBtn onClick={(event)=>{
                            event.stopPropagation()
                        }}><ArrowIcon  src={require("../assets/icons/next.png")}/></RightBtn>
                    </SingleCard>
                ))}
            </AllCards>
}
        </div>
    );
};


const AllCards = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    row-gap: 40px;
    column-gap: 30px;
`;
const Head = styled.div`
    padding: 50px 20px;
`
const H1 = styled.p`
    font-size: 30px;
    font-weight: 600;
`
const ImageBorder = styled.div`
    width: 272px;
    overflow-x: scroll;
    border-radius: 15px;

`

const Images = styled.div`
    width:1254px;
    height: 255px;
    display: flex;
`;

const ImgDiv = styled.div`
    width: 632px;
    display: flex;
    overflow: scroll;
`

const P1 = styled.p`
    display: flex;
    flex-wrap: wrap;
    width: max-content;
    color: blue;
    background-color: grey;
`
const Img1 = styled.img`
    height: 100%;
    width:272px;
`
const LikeIcon = styled.div`
    width: 50px;
    position: absolute;
    top: 20px;
    right: 10px;
    z-index: 1;

`;



// Love icon with content 
const HeartLabel = styled.label`
    position: relative;
    display: block;
    background-color: red;

    &:before, &:after{
        position: absolute;
        left: 30px;
        top:0;
        width: 30px;
        height: 20px;
        background-color: #c7c6c6;
        content: "";
        border-radius: 0px 50px 50px 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    
    &:after{
        left:0;
        transform: rotate(45deg);
        border-radius: 50px 0px 0px 50px;
        transform-origin: 100% 100%;
    }
    &.active{
        background-color: red;
    }

`


const HeartInput = styled.input`
    display: none;


    /* color change when click on love icon */
    &:checked + ${HeartLabel}{
        &:before, &:after{
            background-color: red;

        }
    }
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

export default Favorites
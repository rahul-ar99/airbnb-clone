import React, { useEffect, useState, useRef, useReducer, useContext } from 'react';
import styled from 'styled-components';
import Data from "../../../assets/json/mainContent.json"
import importData from "../../../assets/json/data.json"
import Data1 from '../../../assets/json/mainContent copy.json'
import Login from '../navbar/user/Login';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addFav, deleteFav} from '../../../redux/action'
import { MyAuthenticated } from '../../Authentication';
import { Connect } from 'react-redux';
import { addToFAvorites } from '../../../redux/action';
import { PriceFilterContext, SortContext, beforeTax } from '../../MainPage';
import { CatogaryContext } from '../../../App';








const Cards = () => {

    

    // import context for edit in main page
    const {catogary} = useContext(CatogaryContext)

    
    const [imgLocation, setImgLocation] = useState("")


    const {filterPrice} = useContext(PriceFilterContext)


    const {sort} = useContext(SortContext)


    const {tax} = useContext(beforeTax)





    // create state
    const [newFav, setNewFav] = useState('')
    
    
    // import user login authentication import for like button 
    // user is signup then like button will work otherwise login modal will show
    const {authenticated} = useContext(MyAuthenticated) ;
    

    const [loginLike, setLoginLike] = useState(true )
        
    
    // if click on fav or booking then show the login page
    // create state variables    
    const [loginModal, setLoginModal] = useState(false);


    // create all data into array cards
    const [cards1, setCards1] = useState([])


    // create a state for tax true or false statement
    const [taxValue, setTaxValue] = useState([])


    
    const favLocal = localStorage.getItem("fav")
    if(favLocal.length > 1 ){
        const splitFav = favLocal.split(",")   
    }
    

    const dispatch = useDispatch();
    
            


    const handleAddToFavorites = (item) => {
        dispatch(addToFAvorites(item))
        localStorage.setItem("fav",allFav)
    }

    
    
    
    const allFav = useSelector(state => state.favorites);
    
    
    
    
    
    function likeFunction(item){
        if(authenticated==true){
            setLoginLike(true)
            let newFavItem = {
                id:newFav
            }
            setNewFav('')
        }else{
            setLoginLike(false)
        }
        
    }
    
    
    
    
    
    
    // for scroll
    const ref1 = useRef(null);
    
    
    
    
    //scroll image inside the card
    // but it's doesn't work, you need to edit this code
    const scroll = (scrollOffset) =>{
        
        // scroll with ref elements
        ref1.current.scrollLeft += scrollOffset;
    }


    useEffect(()=>{
        allFav.map((item)=>{
            dispatch(addToFAvorites(item))
        })

    },[])


    useEffect(()=>{
        console.log(tax)
        if(tax){
            setTaxValue(1.18)
        }
        else{
            setTaxValue(1)
        }
    },[tax])


    useEffect(()=>{

        const importFav = localStorage.getItem("fav")
    
        const splitFav = importFav.split(",")

        setImgLocation(importData[catogary]["images_location"])

    },[catogary])
    



    useEffect(()=>{

        setCards1(importData[catogary]["assets"][0])

    },[filterPrice,catogary])



    useEffect(()=>{

        cards1.sort(function(a,b){
            if(sort){
                return a.price - b.price
            }
            else{
                return a.price + b.price
            } 
        })
    },[sort])
    
    
    
    // navigate to other 
    const navigate = useNavigate()
    
    
    
    // navigate to open each card when click that modal
    const handleClick = (cardId) =>{
        navigate(`/singleitem`, {state:{id:cardId}})
    }
    return (
        <div className='wrapper'>
            <AllCards>
                {cards1.map((each, index)=>(
                    <SingleCard key={each.id} onClick={()=>{
                        handleClick(each.id)
                    }}>
                        <ImageBorder ref={ref1}>
                            <Images>
                                <Img1 src={require(`../../../assets/images/${imgLocation}/${each.image}.webp`)} alt="" />
                                {/* <Img1 src={require(`${imgLocation}images_1.webp`)} alt="" /> */}
                                {/* <Img1 src={require("../../../assets/images/photos2.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos3.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos4.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos5.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos6.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos7.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos8.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos9.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos10.webp")} alt="" />
                                <Img1 src={require("../../../assets/images/photos11.webp")} alt="" /> */}
                            </Images>
                        </ImageBorder>  
                        <LikeIcon onClick={(event)=>{
                                event.stopPropagation()
                                // setLoginModal(true)
                                likeFunction(each.id)
                                handleAddToFavorites(each.id)
                            }
                        }>
                            <HeartInput type="checkbox" className='heart-checkbox' id={`checkbox${index}`} disabled={()=>authenticated?true:false}/>
                            <HeartLabel className='heart active liked' htmlFor={`checkbox${index}`}></HeartLabel>
                        </LikeIcon>
                        <Details>
                            <FirstLine>
                                <Place>{each.place}</Place>
                                <Rating><Ratingicon src={require("../../../assets/icons/star.png")}></Ratingicon>{each.ratings}</Rating>
                            </FirstLine>
                            <Distance>{each.distance.slice(0,35)}...</Distance>
                            <Date>{each.dates}</Date>
                            <Money><Price>${(each.price * taxValue) } night</Price></Money>
                        </Details>
                        <LeftBtn onClick={(event)=>{
                            event.stopPropagation();
                            scroll(-100)}
                        }><ArrowIcon  src={require("../../../assets/icons/angle-left.png")}/></LeftBtn>
                        <RightBtn onClick={(event)=>{
                            event.stopPropagation()
                            scroll(-100)}}><ArrowIcon  src={require("../../../assets/icons/next.png")}/></RightBtn>
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
    overflow-x: scroll;
    border-radius: 15px;

`

const Images = styled.div`
    width:1254px;
    height: 255px;
    display: flex;
`;

const PriceDiv = styled.div`
    display: flex;
    margin: 20px 0;
`
const PriceP = styled.p`
    padding: 10px 20px;
    cursor: pointer;
`

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
    &.liked{
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

export default Cards;
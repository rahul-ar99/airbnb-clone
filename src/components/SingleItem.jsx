import React, {useContext, useState} from 'react';
import Data from "../assets/json/data.json"
import { useLocation, useParams} from 'react-router-dom';
import Navbar from './MainPage/Navbar'
import styled from 'styled-components';
import { CatogaryContext } from '../App';
// import {MyContext} from './Authentication'


const SingleItem = () => {

    const [catogary, setCatogory] = useState("pool")
    // const { count, increment } = useContext(MyContext);
    // import id from parent folder in navigate format
    const location = useLocation();
    const {id} = location.state || {};


    // this array for add details with the id recieve from parent component
    const dataCard = []

      
    

    // find item with id & add add to dataCard array
    for(let key in Data){
        Data[key]["assets"][0].map((item)=>{
            console.log(item.id,id)
            if(item.id===id){
                dataCard.push(item)
                setCatogory(key)
            }
            // console.log(item.id)
        })
    }
    // testing
    console.log(dataCard[0].place)

    return (
        <>
        <Navbar />
        <Wrapper>
            <SpotLIght>
                <TopBar>
                    <Heading>Camp  Footprint ,{dataCard[0].place}</Heading>
                    <TopRight>
                        <TopShare>Share</TopShare>
                        <TopSave>Save</TopSave>
                    </TopRight>
                </TopBar>
                <ImgDiv>
                    <ImgLeft>
                       <Img1 src={require(`../../assets/images/${dataCard[0].image}.webp`)} alt="" />

                        <Img src={require(`../assets/images/${catogary}/${dataCard[0].image}.webp`)} alt="" />
                    </ImgLeft>
                    <ImgRight>
                        {/* <Imgs src={require(`../assets/images/${dataCard[0].image}.webp`)} alt="" />
                        <Imgs src={require(`../assets/images/${dataCard[0].image}.webp`)} alt="" />
                        <Imgs src={require(`../assets/images/${dataCard[0].image}.webp`)} alt="" />
                        <Imgs src={require(`../assets/images/${dataCard[0].image}.webp`)} alt="" /> */}
                    </ImgRight>
                </ImgDiv>
                <MiddleSec>
                    <MiddleLeft>
                        <MiddleHeadDiv>
                            <PlaceHead>Entire home in Perumalmalai, India</PlaceHead>
                            <MainDetails>15 guests4 bedrooms8 beds4 bathrooms</MainDetails>
                            <Reviews>No reviews yet</Reviews>
                        </MiddleHeadDiv>
                        <Hosting>
                            <HostImg><Img1 /></HostImg>
                            <HostName>Hosted by Vignesh</HostName>
                            <HostDuration>10 months hosting</HostDuration>
                        </Hosting>
                        <RoomDetails>
                            <p>Situated approximately 25 km away from the Munnar Town, located high on the eastern slopes of Western Ghats with the verdant forests on one side & the stunning views of the valley below, Camp Footprint is indeed a unique property in the hills above Munnar. Camp Footprint offers you a perfect chance to spot and photograph wildlife. A good destination for bird watchers & landscape photographers, and for adventure enthusiasts. There are a few soft treks available to nearby peaks from the campsite...</p>
                            <SeeMore>See more</SeeMore>
                        </RoomDetails>
                    </MiddleLeft>
                    <MiddleRight>
                        <RightMain>
                            <RightTopPrice>
                                <Price>$182343</Price>
                                <Tax>Total before taxes</Tax>
                            </RightTopPrice>
                            <Input>
                                <DateInput>
                                    <LeftDate>
                                        <p>CHECK-IN</p>
                                        <p>12/29/2023</p>
                                    </LeftDate>
                                    <RightDate>
                                        <p>CHECK-IN</p>
                                        <p>12/29/2023</p>
                                    </RightDate>
                                </DateInput>
                                <Guest>
                                    <GuestLeft>
                                        <p>GUEST</p>
                                        <p>1 guest</p>
                                    </GuestLeft>
                                    <ArrowIcon />
                                </Guest>
                                <Reserve />
                            </Input>
                            <p>you won't be charged yet</p>
                        </RightMain>
                        <RightBottom>Report this listing</RightBottom>
                    </MiddleRight>
                </MiddleSec>
            </SpotLIght>

            <h1>{dataCard[0].place}</h1>
            <p>{dataCard[0].distance}</p>
            <h6>{id}</h6>
        </Wrapper>
        </>
    );
};


const Wrapper = styled.div`
    width: 100%;
    padding: 10px 350px;
`

const SpotLIght = styled.div``
const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Heading = styled.h3`
    font-size: 30px;
    padding: 30px 0;
`
const TopRight = styled.div`
    display: flex;
    gap: 40px;
`
const TopShare = styled.p``
const TopSave = styled.p`

`
const ImgDiv = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    height: 550px;
`

const ImgLeft = styled.div`
    width: 50%;
    height: 100%;
`
const ImgRight = styled.div`
    display:flex;
    width: 50%;
    flex-wrap: wrap;
    gap: 10px;
`
const Img = styled.img`
    height: 100%;
    width: auto;
`
const Imgs = styled.img`
    justify-content: space-between;
    width: 48%;
`
const MiddleSec = styled.div``
const MiddleLeft = styled.div``
const MiddleRight = styled.div``
const Hosting = styled.div``
const HostImg = styled.div``
const Img1 = styled.img`
`
const HostName = styled.p``
const HostDuration = styled.p``
const MiddleHeadDiv = styled.div``
const PlaceHead = styled.p``
const MainDetails = styled.p``
const Reviews = styled.p``
const RoomDetails = styled.div``
const SeeMore = styled.button``
const RightMain = styled.div``
const RightTopPrice = styled.div``
const Price = styled.p``
const Tax = styled.p``
const Input = styled.div``
const DateInput = styled.div``
const LeftDate = styled.div``
const RightDate = styled.div``
const Guest = styled.div``
const GuestLeft = styled.div``
const ArrowIcon = styled.img``
const Reserve = styled.div``
const RightBottom = styled.div``


export default SingleItem;
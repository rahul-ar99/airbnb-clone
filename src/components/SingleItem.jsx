import React from 'react';
import Data from "../assets/json/mainContent.json"
import { useLocation, useParams} from 'react-router-dom';
import Navbar from './MainPage/Navbar'
import { data } from 'jquery';
import styled from 'styled-components';

const SingleItem = () => {


    const location = useLocation();
    const {id} = location.state || {};


    const dataCard = []
    
    Data.map((item)=>{
        if(item.id==id){
            dataCard.push(item)
        }
    })
    // const {cardId} = useParams()
    
    console.log(dataCard)

    return (
        <Wrapper>
            <Navbar />
            <SpotLIght>
                <TopBar>
                    <Heading></Heading>
                    <TopRight>
                        <TopShare>Share</TopShare>
                        <TopSave>Save</TopSave>
                    </TopRight>
                </TopBar>
                <ImgDiv>
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                    <Img />
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

                        </RightMain>
                    </MiddleRight>
                </MiddleSec>
            </SpotLIght>

            <h1>{dataCard[0].place}</h1>
            <p>{dataCard[0].distance}</p>
            <h6>{id}</h6>
        </Wrapper>
    );
};


const Wrapper = styled.div`

`

const SpotLIght = styled.div``
const TopBar = styled.div``
const Heading = styled.h3``
const TopRight = styled.div``
const TopShare = styled.p``
const TopSave = styled.p``
const ImgDiv = styled.div``
const Img = styled.img``
const MiddleSec = styled.div``
const MiddleLeft = styled.div``
const MiddleRight = styled.div``
const Hosting = styled.div``
const HostImg = styled.div``
const Img1 = styled.img``
const HostName = styled.p``
const HostDuration = styled.p``
const MiddleHeadDiv = styled.div``
const PlaceHead = styled.p``
const MainDetails = styled.p``
const Reviews = styled.p``
const RoomDetails = styled.div``
const SeeMore = styled.button``


export default SingleItem;
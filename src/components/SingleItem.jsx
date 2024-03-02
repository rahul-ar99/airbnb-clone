import React, {useContext, useEffect, useState} from 'react';
import Data from "../assets/json/data.json"
import { Link, useLocation, useParams} from 'react-router-dom';
import Navbar from './MainPage/Navbar'
import styled from 'styled-components';
import { CatogaryContext } from '../App';
import importData from "../assets/json/data.json"

// import {MyContext} from './Authentication'


const SingleItem = () => {

    const {catogary} = useContext(CatogaryContext)


    // const [catogary, setCatogory1] = useState("amazing_pools")


    const [imgLocation, setImageLocation] = useState("pool")
    // const { count, increment } = useContext(MyContext);
    // import id from parent folder in navigate format
    const location = useLocation();
    const {id} = location.state || {};
    const [isLoading, setLoading] = useState(false)


    // this array for add details with the id recieve from parent component
    const [dataCard,setDataCard] = useState([])


    useEffect(()=>{
        console.log(importData[catogary])
        setImageLocation(importData[catogary]["images_location"])
    },[catogary])
    useEffect(()=>{
        
    },[])

      
    

    // find item with id & add add to dataCard array
    useEffect(()=>{
        for (let key in Data) {
            for (let i = 0; i < Data[key]["assets"][0].length; i++) {
                let item = Data[key]["assets"][0][i];
                // console.log(item.id, id);
                if (item.id === id) {
                    setDataCard(item);
                    // setCatogory(key);
                    // console.log(item);
                    break;
                }
            }
        }

    })
    setTimeout(()=>{
        // console.log(dataCard)
        // console.log(catogary)
        console.log(dataCard)
        setLoading(true)
    },1000)

    return (
        <>
        {!isLoading ?<>
            <div className='flex w-screen h-screen justify-center items-center'>
                <h1>Loading..</h1>
            </div>
        </>:
        <>
        <Navbar />
        <Wrapper>
            <SpotLIght>
                <TopBar>
                    <Heading>Camp  Footprint ,{dataCard.place}</Heading>
                    <TopRight>
                        <TopShare className="cursor-pointer">Share</TopShare>
                        <TopSave className="cursor-pointer">Save</TopSave>
                    </TopRight>
                </TopBar>
                <ImgDiv>
                    <ImgLeft>
                       <Img1 src={require(`../assets/images/${imgLocation}/${dataCard.image}.webp`)} alt="" />
                        {/* <Img src={require(`../assets/images/${catogary}/${dataCard[0].image}.webp`)} alt="" /> */}

                    </ImgLeft>
                    <ImgRight>
                        <Imgs src={require(`../assets/images/${imgLocation}/${dataCard.image}.webp`)} alt="" />
                        <Imgs src={require(`../assets/images/${imgLocation}/${dataCard.image}.webp`)} alt="" />
                        <Imgs src={require(`../assets/images/${imgLocation}/${dataCard.image}.webp`)} alt="" />
                        <Imgs src={require(`../assets/images/${imgLocation}/${dataCard.image}.webp`)} alt="" />
                    </ImgRight>
                </ImgDiv>
                <MiddleSec>
                    <MiddleLeft>
                        <MiddleHeadDiv>
                            <PlaceHead>Entire home in Perumalmalai, India</PlaceHead>
                            <MainDetails>15 guests4 bedrooms8 beds4 bathrooms</MainDetails>
                            <Reviews>No reviews yet</Reviews>
                        </MiddleHeadDiv>
                        <Hr/>
                        <Hosting className='ml-3 flex'>
                            <HostImg className='w-[50px] h-[50px]   rounded-full overflow-hidden'><Img1 src={require("../assets/images/profile.webp")} className='w-full h-auto' /></HostImg>
                            <div className='pl-5 h-full flex-col flex justify-center'>
                                <HostName className='text-xl'>Hosted by Vignesh</HostName>
                                <HostDuration className='text-slate-500'>10 months hosting</HostDuration>
                            </div>
                        </Hosting>
                        <Hr/>
                        <RoomDetails>
                            <p>Situated approximately 25 km away from the Munnar Town, located high on the eastern slopes of Western Ghats with the verdant forests on one side & the stunning views of the valley below, Camp Footprint is indeed a unique property in the hills above Munnar. Camp Footprint offers you a perfect chance to spot and photograph wildlife. A good destination for bird watchers & landscape photographers, and for adventure enthusiasts. There are a few soft treks available to nearby peaks from the campsite...</p>
                            <SeeMore>See more</SeeMore>
                        </RoomDetails>
                        <Hr />
                    </MiddleLeft>
                    <MiddleRight className='flex flex-col items-center '>
                        <RightMain className=' p-10 border rounded-xl mb-4'>
                            <RightTopPrice className='pb-5'>
                                <Price className='text-2xl'>$182343</Price>
                                <Tax>Total before taxes</Tax>
                            </RightTopPrice>
                            <Input className="border">
                                <DateInput className='flex w-[300px]'>
                                    <LeftDate className="border-r p-2 w-[50%]">
                                        <p className="text-sm">CHECK-IN</p>
                                        <input type="date" value="2024-03-03"/>
                                    </LeftDate>
                                    <RightDate className="border-r p-2  w-[50%]">
                                        <p className="text-sm">CHECK-IN</p>
                                        <input type="date" value="2024-03-07"/>
                                    </RightDate>
                                </DateInput>
                                <Guest>
                                    <GuestLeft className='p-2'>
                                        <p className="text-sm">GUEST</p>
                                        <select className='w-full bg-white'>
                                            <option>1 Guest</option>
                                            <option>2 Guest</option>
                                            <option>3 Guest</option>
                                            <option>4 Guest</option>
                                        </select>
                                    </GuestLeft>
                                    <ArrowIcon />
                                </Guest>
                                <Reserve />
                            </Input>
                            <Link to={"/payment"} className='py-5 w-full bg-red-600 rounded-xl mt-4'>Reserve</Link>
                            <p>you won't be charged yet</p>
                        </RightMain>
                        <RightBottom>Report this listing</RightBottom>
                    </MiddleRight>
                </MiddleSec>
            </SpotLIght>

            {/* <h1>{dataCard[0].place}</h1> */}
            {/* <p>{dataCard[0].distance}</p> */}
            <h6>{id}</h6>
        </Wrapper>
        </>
        }
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
const MiddleSec = styled.div`
    padding-top:50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const MiddleLeft = styled.div`
    width: 60%;
`
const MiddleRight = styled.div`
    width: fit-content;
`
const Hosting = styled.div``
const HostImg = styled.div``
const Img1 = styled.img`
`
const HostName = styled.p``
const HostDuration = styled.p``
const MiddleHeadDiv = styled.div`
`
const PlaceHead = styled.p`
    font-size: 30px;
`
const Hr = styled.hr`
    margin:1rem 0;
`
const MainDetails = styled.p``
const Reviews = styled.p``
const RoomDetails = styled.div``
const SeeMore = styled.button``
const RightMain = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const RightTopPrice = styled.div``
const Price = styled.p``
const Tax = styled.p``
const Input = styled.div``
const DateInput = styled.div``
const LeftDate = styled.div``
const RightDate = styled.div``
const Guest = styled.div``
const GuestLeft = styled.div``
const SubmitButton = styled.button`
    &:hover{
        background-color: red;
    }
`
const ArrowIcon = styled.img``
const Reserve = styled.div``
const RightBottom = styled.div``


export default SingleItem;
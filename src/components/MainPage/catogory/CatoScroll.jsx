import React, {useEffect,useState , useRef, useContext}from 'react';
import CatoData from '../../../assets/json/catogery.json'
import AllData from '../../../assets/json/data.json'
import styled from 'styled-components';
import { CatogaryContext } from '../../MainPage';


const CatoScroll = () => {

    // 
    const [categoryOption,setCategeryOption] = useState([]);
    useEffect(()=>{
        setCategeryOption(CatoData,categoryOption)
    },[])

    const {catogary, setCatogary} = useContext(CatogaryContext)
    

    // const [resourse, setResouse] = useState()


    //add ref to scroll div in html 
    const ref = useRef(null);



    // scroll function 
    // click on button and the ref will direct to the div and scroll.
    const scroll = (scrollOffset) =>{
        ref.current.scrollLeft += scrollOffset;
    }

    const  handleChangeCatogary = (item) =>{
        setCatogary(item)
        // console.log(catogary)
        // console.log(item)
    }

    // const catoMaping = (data)=>{
    //     data.map((item)=>{
    //         console.log(item.place)
    //     })
    // }



    return (
        <Div1>
            <LeftBtn onClick={()=>scroll(-1000)}><BtnImg src={require("../../../assets/icons/angle-left.png")}></BtnImg></LeftBtn>
            <ListItem ref={ref}>
                {categoryOption.map((items,index) => (
                    <SingleItems key={items.name} onClick={()=>handleChangeCatogary(items.id_name)}>
                        <Img1 key={items.image} src={require(`../../../assets/icons/${items.image}.jpg`)} alt="Icon" />
                        <ItemName key={index}>{items.name}</ItemName>
                    </SingleItems>
                ))}

            </ListItem>
            <RightBtn  onClick={()=>scroll(1000)}><BtnImg src={require(`../../../assets/icons/next.png`)}></BtnImg></RightBtn>
        </Div1>
        
    );
};

export default CatoScroll;


const Div1 = styled.div`
    display: flex;
    position: relative;
    width: min-content;

`;

const ListItem = styled.ul`
    display: flex;
    gap: 20px;
    align-items: baseline;
    width: 1420px;
    height: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px 0;
    scroll-behavior: smooth;
`

const BtnImg = styled.img`
    width: 18px;
    box-sizing: content-box;
    border: 1px solid #cdcdcd;
    padding: 2px;
    border-radius: 50%;
    box-shadow: 0 60px 80px rgb(0, 0, 0), 0px 5px 26px rgb(0, 0, 0);
`
const LeftBtn = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    `
const RightBtn = styled.div`
    position: absolute;
    top: 30px;
    right: 0;
`


const SingleItems = styled.li`
    /* height: 50px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

const Img1 = styled.img`
    width: 23px;
`

const ItemName = styled.p`
    font-size: 13px;
    white-space: nowrap;
    padding: 10px;
`
import React, {useEffect,useState}from 'react';
import CatoData from '../../assets/json/catogery.json'
import styled from 'styled-components';


const CatoScroll = () => {

    // 
    const [categoryOption,setCategeryOption] = useState([]);
    useEffect(()=>{
        setCategeryOption(CatoData,categoryOption)
    },[])
    
    const [resourse, setResouse] = useState("fisrt")




    return (
        <Div1>
            <LeftBtn><BtnImg src={require("../../assets/icons/angle-left.png")}></BtnImg></LeftBtn>
            <ListItem>
                {categoryOption.map((items,index) => (
                    <SingleItems key={index}>
                        <Img1 key={items.image} src={require(`../../assets/icons/${items.image}.jpg`)} alt="" />
                        <ItemName>{items.name}</ItemName></SingleItems>
                ))}

            </ListItem>
            <RightBtn><BtnImg src={require("../../assets/icons/next.png")}></BtnImg></RightBtn>
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
`

const BtnImg = styled.img`
    width: 52px;
`
const LeftBtn = styled.div`
    position: absolute;
    left: 0;
`
const RightBtn = styled.div`
    position: absolute;
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
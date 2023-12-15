import React, {useEffect,useState , useRef}from 'react';
import CatoData from '../../../assets/json/catogery.json'
import styled from 'styled-components';


const CatoScroll = () => {

    // 
    const [categoryOption,setCategeryOption] = useState([]);
    useEffect(()=>{
        setCategeryOption(CatoData,categoryOption)
    },[])
    
    // const [resourse, setResouse] = useState()

    const ref = useRef(null);

    // scroll function 
    // click on
    const scroll = (scrollOffset) =>{
        ref.current.scrollLeft += scrollOffset;
    }




    return (
        <Div1>
            <LeftBtn onClick={()=>scroll(-1000)}><BtnImg src={require("../../../assets/icons/angle-left.png")}></BtnImg></LeftBtn>
            <ListItem ref={ref}>
                {categoryOption.map((items,index) => (
                    <SingleItems key={items.name}>
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
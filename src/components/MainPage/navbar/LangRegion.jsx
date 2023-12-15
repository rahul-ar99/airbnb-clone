import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './LangRegion.css'


const LangRegion = ({close}) => {


    //set hooks for the main heads language and currency
    const [mainTabs, setMainTabs] = useState(1)
    

    //change active section clicking language and currency
    //first index is language and second is currency
    const toggleTab = (index) => {
        setMainTabs(index)
    }

    const LangLoop = []
    const currencyLoop = []
    for(let i=0;i<20;i++){
        currencyLoop.push(
        <CurrencyLi>
            <CurrencyName>Indian rupee</CurrencyName>
            <CurrencySymbol>INR - $</CurrencySymbol>
        </CurrencyLi>)
        LangLoop.push(
            <Content>
                <Lang>English</Lang>
                <Country>India</Country>
            </Content>
        )
    }

    useEffect(()=>{
        document.body.style.overflow= "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    })

    return (
        
        <Screen 
        onClick={(e) => {
            if (!e.target.closest(Modal)) {
                close(false);
            }
        
        }}
        >
            <Modal>

            <CloseBtn onClick={()=>close(false)}>
                <CloseImg src={require("../../../assets/icons/close.png")}></CloseImg>
            </CloseBtn>
            <Tabs>
                <TabBtn className={mainTabs===1? 'tabs active-tabs':'tabs'} onClick={()=>toggleTab(1)}>Language and region</TabBtn>
                <TabBtn className={mainTabs===2? 'tabs active-tabs':'tabs'}  onClick={()=>toggleTab(2)}>Currency</TabBtn>
            </Tabs>
            <Hr1 />
            <LangContent className={mainTabs===1?'acitve-content':'content'}>
                <Translation>
                    <Head>Translation</Head>
                    <SubHead>Automatically translate desctiption and reviews to English</SubHead>
                </Translation>
                <MainHead>Suggest languages and regions</MainHead>
                <ContentUl>
                    <Content>
                        <Lang>English</Lang>
                        <Country>United States</Country>
                    </Content>
                    <Content>
                        <Lang>English</Lang>
                        <Country>United States</Country>
                    </Content>
                </ContentUl>
                <MainHead>Choose a language and region</MainHead>
                <ContentUl>
                    {LangLoop}
                </ContentUl>
            </LangContent>
            <CurrencyContent className={mainTabs===2? 'active-content':'content'}>
                <CurrencyHead>Choose a currency</CurrencyHead>
                <CurrencyUl>
                    {currencyLoop}
                </CurrencyUl>
            </CurrencyContent>
            </Modal>
        </Screen>
    );
};


const Screen = styled.div`
    z-index: 3;
    position: fixed;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000092;
`;
const Modal = styled.div`
    z-index: 4;
    background-color:white;
    display: flex;
    padding: 50px 0 0 20px;
    flex-direction: column;
    width: 65rem;
    height: 56rem;
    position: relative;
    border-radius: 13px;
    overflow: scroll;

`;

const CloseBtn = styled.div`
    position: absolute;
    width: 10px;
    top: 20px;
    left: 20px;
    padding: 5px;
    box-sizing: content-box;
    cursor: pointer;
    `

const Tabs = styled.div`
    padding-top: 10px;
`
const TabBtn = styled.button`
    padding: 10px;
`
const LangContent = styled.div`
`
const CurrencyContent = styled.div``
const CurrencyHead = styled.h4`
    font-size: 21px;
    font-weight: 500;
    padding: 30px 0;
`
const CurrencyUl = styled.ul`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 20px;
    `
const CurrencyLi = styled.li`
    width: 20%;
`
const CurrencyName = styled.p``
const CurrencySymbol = styled.p``

const Translation = styled.p`
    padding:60px 0;

`
const MainHead = styled.p`
    font-size: 21px;
    font-weight: 500;
    padding: 30px 0;
`
const SubHead = styled.p``

const SuggLang = styled.p``
const ContentUl = styled.ul`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 20px;
`
const Head = styled.p`
`
const Content = styled.li`
    width:20%;
`



const Hr1 = styled.hr`
    border:1px solid #bcbcbc;
`

const Country = styled.p``
const Lang = styled.p``

const CloseImg = styled.img`
    filter:grayscale(100%);
`




export default LangRegion;
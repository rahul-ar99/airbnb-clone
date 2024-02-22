import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExploreLink from './MainPage/ExploreLink';
import Navbar from './MainPage/Navbar';
import Catogories from './MainPage/Catogories'
import MainContent from './MainPage/MainContent';
import Footer from './MainPage/Footer';
export const PriceFilterContext = createContext();






function MainPage() {

  const [scroll, setScroll] = useState(true)

  const updateFilterData = (action) =>{
    switch(action.type){
      case 9000:
        localStorage.setItem("filter",9000)
        return
      case 8000:
        localStorage.setItem("filter",8000)
        return
      case 7000:
        localStorage.setItem("filter",7000)
        return
      case 6000:
        localStorage.setItem("filter",6000)
        return
      
    }
  }

  useEffect(()=>{
    const handleScroll = () =>{
      setScroll(window.scrollY <= 0)
    }

    window.addEventListener("scroll",handleScroll)

  })




  // window.addEventListener("scroll",()=>{
  //   if(window.scrollY > 1000){
  //     setScroll(false)
  //   }
  //   else{
  //     setScroll(true)
  //   }
  // })

  return (
    <div className="App">
        {scroll && <ExploreLink />}
        <TopBar>
        {scroll && <Navbar />}

          
          <Catogories />
        </TopBar>
        <MainContent />
        <Footer />
    </div>
  );
}
const TopBar = styled.div`
      position: sticky;
      top: 0px;
      z-index: 2;
      background-color: white;
`

export default MainPage;

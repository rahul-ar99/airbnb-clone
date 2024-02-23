import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExploreLink from './MainPage/ExploreLink';
import Navbar from './MainPage/Navbar';
import Catogories from './MainPage/Catogories'
import MainContent from './MainPage/MainContent';
import Footer from './MainPage/Footer';
export const PriceFilterContext = createContext();






function MainPage() {



  // create state for scroll
  const [scroll, setScroll] = useState(true)



  // create state for price for filter
  const [filterPrice, setFilterPrice] = useState()





  useEffect(()=>{
    const handleScroll = () =>{
      setScroll(window.scrollY <= 0)
    }
    window.addEventListener("scroll",handleScroll)
  })
  



  // setFilterPrice top of the list, otherwise array is null
  useEffect(()=>{
    setFilterPrice(9000)
  },[])


  return (

    <PriceFilterContext.Provider value={{filterPrice, setFilterPrice}}>
      <div className="App">
          {scroll && <ExploreLink />}
          <TopBar>
          {scroll && <Navbar />}

            
            <Catogories />
          </TopBar>
          <MainContent />
          <Footer />
      </div>
    </PriceFilterContext.Provider>
  );
}
const TopBar = styled.div`
      position: sticky;
      top: 0px;
      z-index: 2;
      background-color: white;
`

export default MainPage;

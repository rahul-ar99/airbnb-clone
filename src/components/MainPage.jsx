import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExploreLink from './MainPage/ExploreLink';
import Navbar from './MainPage/Navbar';
import Catogories from './MainPage/Catogories'
import MainContent from './MainPage/MainContent';
import Footer from './MainPage/Footer';
export const PriceFilterContext = createContext();
export const SortContext = createContext();
export const CatogaryContext = createContext()






function MainPage() {



  // create state for scroll
  const [scroll, setScroll] = useState(true)


  // create state for price for filter
  const [filterPrice, setFilterPrice] = useState()


  // create a state for sort value to true or false
  const [sort, setSort] = useState(false)


  // create a state for which catogary selected
  const [catogary, setCatogary] = useState("amazing_pools")





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
    <CatogaryContext.Provider value={{catogary,setCatogary}}>
        <SortContext.Provider value={{sort, setSort}}>
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
        </SortContext.Provider>
    </CatogaryContext.Provider>
  );
}
const TopBar = styled.div`
      position: sticky;
      top: 0px;
      z-index: 2;
      background-color: white;
`

export default MainPage;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExploreLink from './MainPage/ExploreLink';
import Navbar from './MainPage/Navbar';
import Catogories from './MainPage/Catogories'
import MainContent from './MainPage/MainContent';
import Footer from './MainPage/Footer';




function MainPage() {

  const [scroll, setScroll] = useState(true)


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

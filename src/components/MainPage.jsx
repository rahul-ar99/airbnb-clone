import React from 'react';
import styled from 'styled-components';
import ExploreLink from './MainPage/ExploreLink';
import Navbar from './MainPage/Navbar';
import Catogories from './MainPage/Catogories'
import MainContent from './MainPage/MainContent';
import Footer from './MainPage/Footer';

function MainPage() {
  return (
    <div className="App">
        {/* <ExploreLink /> */}
        <TopBar>
          <Navbar />
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

// testing
import React from 'react';
import styled from 'styled-components';
import FutureDetail from './MainPage/footer/FooterDetail';
import Links from './MainPage/footer/Links';
import Navbar from './HelpPage/Navbar';
import HelpMain from './HelpPage/HelpMain';
import HeadAndSearch from './HelpPage/HeadAndSearch';



const HelpPage = () => {
    return (
        <div>
            <Wrapper>
                <Navbar /> 
                <Wrapper2>
                    <HeadAndSearch />
                    <HelpMain />
                    <FutureDetail />
                    
                    <Links />
                </Wrapper2>
            </Wrapper>
        </div>
    );
};



const Wrapper = styled.div`
    width: 100%;
    padding: 0 200px;
`
const Wrapper2 = styled.div`
    width: 80%;
    margin: 0 auto;
`
export default HelpPage;
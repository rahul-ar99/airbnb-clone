import React from 'react';
import styled from 'styled-components';
import FutureGateway from './MainPage/footer/FutureGateway';
import Links from './MainPage/footer/Links';
import Navbar from './HelpPage/Navbar';
import HelpMain from './HelpPage/HelpMain';


const HelpPage = () => {
    return (
        <div>
            <Wrapper>
                <Navbar />    
                <HelpMain />
                <FutureGateway />
                <Links />
            </Wrapper>
        </div>
    );
};



const Wrapper = styled.div`
    width: 100%;
    padding: 0 200px;
`

export default HelpPage;
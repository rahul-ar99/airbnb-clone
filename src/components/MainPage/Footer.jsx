import React from 'react';
// import styled from 'styled-components';
import FooterDetail from './footer/FooterDetail'
import Links from './footer/Links';
import FutureGateway from './footer/FutureGateway';



const Footer = () => {
    return (
        <div className='footerWrapper'>
            <FutureGateway />
            <FooterDetail/>
            <Links />
        </div>
    );
};

export default Footer;
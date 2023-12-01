import React from 'react';
import styled from 'styled-components';



const Links = () => {
    return (
        <Bottom>
            <LeftSide>
                <Copyright>2023 Airbnb.Inc.</Copyright>
                <Company>
                    <LinkA>Privacy</LinkA>
                    <LinkA>Terms</LinkA>
                    <LinkA>Sitemap</LinkA>
                    <LinkA>Company details</LinkA>
                </Company>
            </LeftSide>
            <RightSide>
                <Language>
                    <Img1></Img1>
                    <Lang>English(IN)</Lang>
                </Language>
                <Currency>$INR</Currency>
                <SocialMedia>
                    <SocialMediaLinks>F</SocialMediaLinks>
                    <SocialMediaLinks>T</SocialMediaLinks>
                    <SocialMediaLinks>I</SocialMediaLinks>
                </SocialMedia>
            </RightSide>

        </Bottom>
    );
};
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-top: 1px solid black;
    
    `
const LeftSide = styled.div`
    display: flex;
    column-gap: 10px;
    `;
const Copyright = styled.p``;
const Company = styled.div`
        display: flex;
    column-gap: 10px;
`;
const LinkA = styled.a``;
const RightSide = styled.div`
    display: flex;
    column-gap: 20px;
`;
const Language = styled.div``;
const Img1 = styled.img``;
const Lang = styled.p``;
const Currency = styled.p``;
const SocialMedia = styled.div`
    display: flex;
    column-gap: 20px;
`;
const SocialMediaLinks = styled.a``;






export default Links;
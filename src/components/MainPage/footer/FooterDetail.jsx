import React from 'react';
import styled from 'styled-components';

const FooterDetail = () => {
    return (
        <Footer>
            <Part>
                <Head>Support</Head>
                <Contents>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                </Contents>
            </Part>
            <Part>
                <Head>Hosting</Head>
                <Contents>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                </Contents>
            </Part>
            <Part>
                <Head>Airbnb</Head>
                <Contents>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                    <Content>Help Center</Content>
                </Contents>
            </Part>
        </Footer>
    );
};
const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 40px 0;
    border-top: 1px solid black;
`
const Part = styled.div`
    width: 32%;
`;
const Support = styled.div``;
const Head = styled.h6`
    font-size:14px;
    font-weight: 500;
    margin-bottom: 20px;
`;
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;
const Content = styled.p``;
const Hosting = styled.div``;
const Airbnb = styled.div``;

export default FooterDetail;
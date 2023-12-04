import React from 'react';
import styled from 'styled-components';
import RightNav from '../MainPage/navbar/RightNav';


const Navbar = () => {
    return (
        <Div>
            <div>

            <CompanyIcon></CompanyIcon>
            <PageHead>Help Centre</PageHead>
            </div>
            <RightNav />
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`
const CompanyIcon = styled.img``
const PageHead = styled.h2``

export default Navbar;
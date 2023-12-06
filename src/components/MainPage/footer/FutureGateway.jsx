import React from 'react';
import styled from 'styled-components';
import FuturePlaces from './FuturePlaces/FuturePlaces';


const FutureGateway = () => {
    return (
        <Div1>
            <Heads>Inspiration for future getaways</Heads>
            <Buttons>
                <Button>popular</Button>
                <Button>popular</Button>
                <Button>popular</Button>
                <Button>popular</Button>
                <Button>popular</Button>
                <Button>popular</Button>
                <Button>popular</Button>
                <Button>popular</Button>
            </Buttons>
            <FuturePlaces />
            
        </Div1>
    );
};

const Div1 = styled.div`
    padding: 50px 0;
`

const Heads = styled.h5`
    font-size: 20px;
    font-weight: 500;
`;
const Buttons = styled.div`
    display: flex;
    column-gap: 40px;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid black;
`;
const Button = styled.button`

`;
const Detail = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
    padding-top: 10px;
`;
const Places = styled.div`
    width: 16%;
`;
const Place = styled.p``;
const Department = styled.p``;

export default FutureGateway;
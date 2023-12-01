import React from 'react';
import styled from 'styled-components';

const ShowMore = () => {
    return (
        <div className='wrapper'>
            <Content>
                <Heading>Continue exploring national park homes</Heading>
                <Button1>Show more</Button1>
            </Content>
        </div>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    gap: 10px;
`;
const Heading = styled.p`
    font-size: 20px;
    font-weight: 400;
`;
const Button1 = styled.button`
    background-color: black;
    color: white;
    padding: 13px 20px;
    font-weight: 400;
    border-radius: 10px;
`;


export default ShowMore;
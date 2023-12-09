import React from 'react';
import styled from 'styled-components';

const HeadAndSearch = () => {
    return (
        <Div>
            <Head>Hi, how can we help?</Head>
            <Search>
                <Input ></Input>
                <Icon></Icon>
            </Search>
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Head = styled.h5`
    font-size: 43px;
    font-weight: 600;
`
const Search = styled.div``
const Input = styled.input`
    border: 1px solid black;
    padding: 10px;
    border-radius: 40px;
`
const Icon = styled.img``

export default HeadAndSearch;
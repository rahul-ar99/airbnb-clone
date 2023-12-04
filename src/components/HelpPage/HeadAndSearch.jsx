import React from 'react';
import styled from 'styled-components';

const HeadAndSearch = () => {
    return (
        <Div>
            <Head>Hi, how can we help?</Head>
            <Search>
                <Input></Input>
                <Icon></Icon>
            </Search>
        </Div>
    );
};

const Div = styled.div``
const Head = styled.h5``
const Search = styled.div``
const Input = styled.input``
const Icon = styled.img``

export default HeadAndSearch;
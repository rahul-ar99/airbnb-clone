import React from 'react';
import CatoScroll from './catogory/CatoScroll';
import Filter from './catogory/Filter';
import styled from 'styled-components';

const Catogories = () => {
    return (
        <Catogory>
            <div className="wrapper">
                <CatoScroll />
                <Filter />

            </div>
        </Catogory>
    );
};
const Catogory = styled.section`
`

export default Catogories;


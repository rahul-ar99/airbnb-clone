import React from 'react';
import CatoScroll from './catogory/CatoScroll';
import Filter from './catogory/Filter';
import styled from 'styled-components';
import TaxBtn from './catogory/TaxBtn';

const Catogories = () => {
    return (
        <div className="wrapper">
            <Catogory>
                    <CatoScroll />
                    <Filter />
                    <TaxBtn />
            </Catogory>
        </div>
    );
};
const Catogory = styled.section`
    /* padding-top: 80px; */
    display: flex;
    align-items: center;
`

export default Catogories;

